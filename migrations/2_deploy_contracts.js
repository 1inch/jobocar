const Car = artifacts.require('./Car.sol');

module.exports = async function (deployer) {
    deployer.deploy(Car, '0x0000000000000000000000000000000000000001');
};
