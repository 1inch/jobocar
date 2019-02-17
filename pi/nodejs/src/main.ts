import Web3 from 'web3';
import {MerkleTree} from './merkle-tree';

const numberOfPrivateKeysInTree = 32;
const privateKey = '0x';
const carContractAddress = '0x';
const carContractABI =

function () {
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

    // Sumbit root


}();
