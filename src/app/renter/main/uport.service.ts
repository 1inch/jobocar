import {Injectable} from '@angular/core';
import {Connect} from 'uport-connect';

@Injectable({
    providedIn: 'root'
})
export class UPortService {

    uport = new Connect('Jobocar', {network: 'mainnet'});

    constructor() {

    }

    requestDisclosure() {

        this.uport.requestDisclosure();
        this.uport.onResponse('disclosureReq').then(res => {

            const did = res.payload.did;
            const verified = res.payload.verified;

            console.log('DID', did);
            console.log('Verified', verified);
        });
    }

    isConnected() {
        return this.uport.did || false;
    }
}
