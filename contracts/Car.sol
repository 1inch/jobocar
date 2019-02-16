pragma solidity ^0.5.2;

import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "openzeppelin-solidity/contracts/cryptography/ECDSA.sol";
import "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol";
import "./IndexedMerkleProof.sol";
import "./CertCenter.sol";
import "./Vehicle.sol";
import "./AnyPaymentReceiver.sol";
import "./IKyberNetwork.sol";


contract Car is Ownable, Vehicle, AnyPaymentReceiver {
    using ECDSA for bytes;
    using IndexedMerkleProof for bytes;

    enum State {
        NotAvailable,
        AlreadyBooked,
        AlreadyRented,
        AvailableForRent,
        ReturningToHome
    }

    struct Tariff {
        IERC20 desiredToken;
        uint256 pricePerMinute;
        uint256 minimumCost;
        uint256 bookingCost;
        uint256 maxTime;
    }

    State public state;
    Tariff public tariff;
    mapping(address => uint256) public renterDeposits;
    mapping(uint160 => uint) public expiringCodesMerkleRoots;
    mapping(address => bool) public trustedCertCenters;

    event StateUpdated(State indexed newState, State indexed oldState);
    event TariffUpdated();
    event ExpiringCodeAdded(uint160 indexed expiringCode);
    event ExpiringCodeRemoved(uint160 indexed expiringCode);
    event CertCenterAdded(address indexed certCenter);
    event CertCenterRemoved(address indexed certCenter);
    event LocationUpdated(uint256 latitude, uint256 longitude);
    event EncryptedLocationUpdated(bytes32 encKey, uint256 encLatitude, uint256 encLongitude);
    event DepositAdded(address indexed renter, uint256 amount);

    constructor(address vehicle)
        public
        Vehicle(vehicle)
    {
    }

    // Owner methods

    function updateState(State newState) external onlyOwner {
        require(state != newState);
        emit StateUpdated(newState, state);
        state = newState;
    }

    function updateTariff(
        IERC20 desiredToken,
        uint256 pricePerMinute,
        uint256 minimumCost,
        uint256 bookingCost,
        uint256 maxTime
    )
        external
        onlyOwner
    {
        require(state == State.NotAvailable);
        emit TariffUpdated();
        tariff = Tariff({
            desiredToken: desiredToken,
            pricePerMinute: pricePerMinute,
            minimumCost: minimumCost,
            bookingCost: bookingCost,
            maxTime: maxTime
        });
    }

    function addExpiringCode(
        uint160 notYetExpiredCode,
        uint160[] calldata alreadyExpiredCodes
    )
        external
        onlyOwner
    {
        for (uint i = 0; i < alreadyExpiredCodes.length; i++) {
            if (expiringCodesMerkleRoots[alreadyExpiredCodes[i]] != 0) {
                delete expiringCodesMerkleRoots[alreadyExpiredCodes[i]];
                emit ExpiringCodeRemoved(alreadyExpiredCodes[i]);
            }
        }

        if (expiringCodesMerkleRoots[notYetExpiredCode] == 0) {
            expiringCodesMerkleRoots[notYetExpiredCode] = now;
            emit ExpiringCodeAdded(notYetExpiredCode);
        }
    }

    function updateCertCenters(
        address[] calldata notYetTrustedCertCenters,
        address[] calldata alreadyTrustedCertCenters
    )
        external
        onlyOwner
    {
        for (uint i = 0; i < alreadyTrustedCertCenters.length; i++) {
            if (trustedCertCenters[alreadyTrustedCertCenters[i]]) {
                delete trustedCertCenters[alreadyTrustedCertCenters[i]];
                emit CertCenterRemoved(alreadyTrustedCertCenters[i]);
            }
        }

        for (uint i = 0; i < notYetTrustedCertCenters.length; i++) {
            if (!trustedCertCenters[notYetTrustedCertCenters[i]]) {
                trustedCertCenters[notYetTrustedCertCenters[i]] = true;
                emit CertCenterAdded(notYetTrustedCertCenters[i]);
            }
        }
    }

    // Vehicle methods

    function postLocation(uint256 latitude, uint256 longitude) public onlyVehicle {
        require(state != State.AlreadyRented);
        emit LocationUpdated(latitude, longitude);
    }

    function postEncryptedLocation(bytes32 encKey, uint256 encLatitude, uint256 encLongitude) public onlyVehicle {
        require(state != State.AlreadyRented);
        emit EncryptedLocationUpdated(encKey, encLatitude, encLongitude);
    }

    // Renter methods

    function book(
        IKyberNetwork kyber, // 0x818E6FECD516Ecc3849DAf6845e3EC868087B755;
        CertCenter certCenter,
        address paymentToken,
        uint256 paymentAmount
    )
        external
        payable
    {
        require(state == State.AvailableForRent || state == State.ReturningToHome);
        require(trustedCertCenters[address(certCenter)], "Not trusted cert center");
        require(certCenter.renters(msg.sender), "Renter check fails");

        uint256 deposit = _processPayment(kyber, address(tariff.desiredToken), paymentToken, paymentAmount);
        renterDeposits[msg.sender] = renterDeposits[msg.sender].add(deposit);
        require(renterDeposits[msg.sender] >= tariff.bookingCost);
        emit DepositAdded(msg.sender, deposit);

        emit StateUpdated(State.AlreadyBooked, state);
        state = State.AlreadyBooked;
    }

    function cancelBooking() external {
        require(state == State.AlreadyBooked && renterDeposits[msg.sender] != 0);
        _returnRemainder(msg.sender, tariff.desiredToken, renterDeposits[msg.sender]);
        renterDeposits[msg.sender] = 0;

        emit StateUpdated(State.AvailableForRent, state);
        state = State.AvailableForRent;
    }

    function rent(
        IKyberNetwork kyber, // 0x818E6FECD516Ecc3849DAf6845e3EC868087B755;
        CertCenter certCenter,
        address paymentToken,
        uint256 paymentAmount,
        bytes calldata signature,
        uint256 merkleIndex,
        bytes calldata merkleProof
    )
        external
    {
        require(state == State.AvailableForRent ||
                state == State.ReturningToHome);
        require(state == State.AlreadyBooked && renterDeposits[msg.sender] != 0);
        require(trustedCertCenters[address(certCenter)], "Not trusted cert center");
        require(certCenter.renters(msg.sender), "Renter check fails");

        bytes32 messageHash = ECDSA.toEthSignedMessageHash(keccak256(abi.encodePacked(msg.sender)));
        address signer = ECDSA.recover(messageHash, signature);
        uint160 merkleRoot = merkleProof.compute(uint160(signer), merkleIndex);
        require(expiringCodesMerkleRoots[merkleRoot] != 0);

        uint256 time = expiringCodesMerkleRoots[merkleRoot] + merkleIndex * 60 * 5;
        require(time < now + 60 * 5);

        uint256 deposit = _processPayment(kyber, address(tariff.desiredToken), paymentToken, paymentAmount);
        renterDeposits[msg.sender] = renterDeposits[msg.sender].add(deposit);
        require(renterDeposits[msg.sender] >= tariff.minimumCost);
        emit DepositAdded(msg.sender, deposit);

        emit StateUpdated(State.AlreadyRented, state);
        state = State.AlreadyRented;
    }
}
