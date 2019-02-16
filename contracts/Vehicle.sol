pragma solidity ^0.5.2;


contract Vehicle {
    address public vehicle;

    modifier onlyVehicle {
        require(msg.sender == vehicle);
        _;
    }

    constructor(address vehicleAddress) public {
        require(vehicleAddress != address(0));
        vehicle = vehicleAddress;
    }
}
