import Web3 from 'web3';
import Util from 'ethereumjs-util';
import MerkleTree from 'merkle-tree';

const privateKey = '0x';

function xxx() {
    // const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    // const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/'));
    // const web3 = new Web3(new Web3.providers.WebsocketProvider('ws://localhost:8546'));
    const web3 = new Web3(new Web3.providers.WebsocketProvider('ws://ropsten.infura.io/ws'));
    // const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/GOGw1ym3Hu5NytWUre29'));

    if (privateKey.length !== 66) {
        console.log('privateKey should be of length 66.' + (privateKey.length === 64 ? ' Prepend with "0x".' : ''));
        return;
    }
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    console.log('account = ' + account.address);

    const privateKeys = [];
    for (let i = 0; i < 32; i++) {
        //const privateKey =
    }
}

xxx();
