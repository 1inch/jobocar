pragma solidity ^0.5.2;

import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "openzeppelin-solidity/contracts/cryptography/ECDSA.sol";
import "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol";
import "./IndexedMerkleProof.sol";
import "./CertCenter.sol";


contract Car is Ownable {
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
        IERC20 token;
        uint256 pricePerMinute;
        uint256 minimumCost;
        uint256 reservationCost;
    }
    
    State public state;
    Tariff public tariff;
    mapping(uint160 => uint) public expiringCodesMerkleRoots;
    mapping(address => bool) public trustedCertCenters;
    
    event StateUpdated(State indexed newState, State indexed oldState);
    event TariffUpdated();
    event ExpiringCodeAdded(uint160 indexed expiringCode);
    event ExpiringCodeRemoved(uint160 indexed expiringCode);
    event CertCenterAdded(address indexed certCenter);
    event CertCenterRemoved(address indexed certCenter);
    event LocationUpdated(uint256 x, uint256 y);
    event EncryptedLocationUpdated(bytes32 encryptedKey, uint256 encryptedX, uint256 encryptedY);
    
    function updateState(State newState) external onlyOwner {
        require(state != newState);
        emit StateUpdated(newState, state);
        state = newState;
    }
    
    function updateTariff(
        IERC20 token,
        uint256 pricePerMinute,
        uint256 minimumCost,
        uint256 reservationCost
    )
        external
        onlyOwner
    {
        emit TariffUpdated();
        tariff = Tariff(token, pricePerMinute, minimumCost, reservationCost);
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
        
        for (uint i = 0;
        i < notYetTrustedCertCenters.length;
        i++) {
            if (!trustedCertCenters[notYetTrustedCertCenters[i]]) {
                trustedCertCenters[notYetTrustedCertCenters[i]] = true;
                emit CertCenterAdded(notYetTrustedCertCenters[i]);
            }
        }
    }
    
    function book(
        CertCenter certCenter,
        address token,
        uint256 tokenAmount
    )
        external
        payable
    {
        require(state == State.AvailableForRent || state == State.ReturningToHome);
        require(trustedCertCenters[address(certCenter)], "Not trusted cert center");
        require(certCenter.renters(msg.sender), "Renter check fails");
        
        state = State.AlreadyBooked;
    }
    
    function rent(
        CertCenter certCenter,
        bytes calldata signature,
        uint160 merkleRoot,
        uint256 merkleIndex,
        bytes calldata merkleProof
    ) 
        external
    {
        require(state == State.AvailableForRent || state == State.ReturningToHome);
        require(trustedCertCenters[address(certCenter)], "Not trusted cert center");
        require(certCenter.renters(msg.sender), "Renter check fails");

        bytes32 messageHash = keccak256(abi.encodePacked(msg.sender));
        address signer = ECDSA.recover(messageHash, signature);
        require(merkleProof.verify(uint160(signer), merkleRoot, merkleIndex));
        
        uint256 time = expiringCodesMerkleRoots[merkleRoot] + merkleIndex * 60 * 5;
        require(time < now + 60 * 5);
        
        state = State.AlreadyRented;
    }
    
    function _retrievePayment(IERC20 token, uint256 tokenAmount) internal {
        if (token != IERC20(0)) {
            require(token.transferFrom(msg.sender, address(this), tokenAmount));
            
            if (token != tariff.token) {
                // token over kyber
            }
        } else {
            //require()

            if (token != tariff.token) {
                // eth over kyber
            }
        }
    }
}
