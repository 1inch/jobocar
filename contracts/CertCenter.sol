pragma solidity ^0.5.2;

import "openzeppelin-solidity/contracts/ownership/Ownable.sol";


contract CertCenter is Ownable {
    mapping(address => bool) public renters;

    event RenterAdded(address indexed renter);
    event RenterRemoved(address indexed renter);

    function updateRenters(
        address[] calldata rentersToRemove,
        address[] calldata rentersToAdd
    )
        external
        onlyOwner
    {
        for (uint i = 0; i < rentersToRemove.length; i++) {
            if (renters[rentersToRemove[i]]) {
                delete renters[rentersToRemove[i]];
                emit RenterRemoved(rentersToRemove[i]);
            }
        }

        for (uint i = 0; i < rentersToAdd.length; i++) {
            if (!renters[rentersToAdd[i]]) {
                renters[rentersToAdd[i]] = true;
                emit RenterAdded(rentersToAdd[i]);
            }
        }
    }
}
