import Web3 from 'web3';
import fetch from 'node-fetch';
import {MerkleTree} from './merkle-tree';

const QRCode = require('qrcode');

const numberOfPrivateKeysInTree = 32;
const durationOfPrivateKeyInTreeInSeconds = 120;
const privateKey = '0x';
const carContractAddress = '0x';
const carContractArtifacts = require('../Car.json');
const carContractABI = [{"constant":true,"inputs":[],"name":"vehicle","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"trustedCertCenters","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tariff","outputs":[{"name":"desiredToken","type":"address"},{"name":"pricePerMinute","type":"uint256"},{"name":"minimumCost","type":"uint256"},{"name":"bookingCost","type":"uint256"},{"name":"maxTime","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"renterDeposits","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ETHER_ADDRESS","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint160"}],"name":"expiringCodesMerkleRoots","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"vehicle","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"newState","type":"uint8"},{"indexed":true,"name":"oldState","type":"uint8"}],"name":"StateUpdated","type":"event"},{"anonymous":false,"inputs":[],"name":"TariffUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"expiringCode","type":"uint160"}],"name":"ExpiringCodeAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"expiringCode","type":"uint160"}],"name":"ExpiringCodeRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"certCenter","type":"address"}],"name":"CertCenterAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"certCenter","type":"address"}],"name":"CertCenterRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"latitude","type":"uint256"},{"indexed":false,"name":"longitude","type":"uint256"}],"name":"LocationUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"encKey","type":"bytes32"},{"indexed":false,"name":"encLatitude","type":"uint256"},{"indexed":false,"name":"encLongitude","type":"uint256"}],"name":"EncryptedLocationUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"renter","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"DepositAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"constant":false,"inputs":[{"name":"newState","type":"uint8"}],"name":"updateState","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"desiredToken","type":"address"},{"name":"pricePerMinute","type":"uint256"},{"name":"minimumCost","type":"uint256"},{"name":"bookingCost","type":"uint256"},{"name":"maxTime","type":"uint256"}],"name":"updateTariff","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"notYetExpiredCode","type":"uint160"},{"name":"alreadyExpiredCodes","type":"uint160[]"}],"name":"addExpiringCode","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"notYetTrustedCertCenters","type":"address[]"},{"name":"alreadyTrustedCertCenters","type":"address[]"}],"name":"updateCertCenters","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"latitude","type":"uint256"},{"name":"longitude","type":"uint256"}],"name":"postLocation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"encKey","type":"bytes32"},{"name":"encLatitude","type":"uint256"},{"name":"encLongitude","type":"uint256"}],"name":"postEncryptedLocation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"kyber","type":"address"},{"name":"certCenter","type":"address"},{"name":"paymentToken","type":"address"},{"name":"paymentAmount","type":"uint256"}],"name":"book","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"cancelBooking","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"kyber","type":"address"},{"name":"certCenter","type":"address"},{"name":"paymentToken","type":"address"},{"name":"paymentAmount","type":"uint256"},{"name":"signature","type":"bytes"},{"name":"merkleIndex","type":"uint256"},{"name":"merkleProof","type":"bytes"}],"name":"rent","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];

(async function () {
    // const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    // const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/'));
    // const web3 = new Web3(new Web3.providers.WebsocketProvider('ws://localhost:8546'));
    const web3 = new Web3(new Web3.providers.WebsocketProvider('ws://ropsten.infura.io/ws'));
    // const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/GOGw1ym3Hu5NytWUre29'));

    // Import private key

    if (privateKey.length !== 66) {
        console.log('privateKey should be of length 66.' + (privateKey.length === 64 ? ' Prepend with "0x".' : ''));
        return;
    }
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    console.log('account = ' + account.address);

    // Generate private keys and build a merkle tree

    const privateKeys = Array.from(Array(numberOfPrivateKeysInTree).keys())
      .map(_ => web3.eth.accounts.create());

    const accounts = privateKeys.map(pk => pk.address);

    const merkleTree = new MerkleTree(accounts);

    // Sumbit root to smart contract

    const carContract = new web3.eth.Contract(carContractArtifacts, carContractAddress);

    console.log('Root', merkleTree.getHexRoot());

    const gasPrice = (await fetch('gasprice.poa.network')).json().fast;

    const receipt = await carContract.methods
      .addExpiringCodes(merkleTree.getHexRoot(), [])
      .send({
        from: account,
        gasPrice: gasPrice,
      });

    // Create URLs

    const urls = privateKeys.map(
        (k,i) => 'https://jobocar.com/' + privateKeys[i] + '/' + i + '/' + merkleTree.getHexProof(i)
    );

    // Create QR codes

    const qrs = await Promise.all(urls.map(QRCode.toDataURL));

    //TODO:
    // 1. get receipt time and make a loop
    // 2. subscribe to a moments of time
    // 3. generate BMP for each QR
    // 4. display each BMP on E-Ink

})();
