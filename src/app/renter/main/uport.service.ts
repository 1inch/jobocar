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

        const reqObj = {
            requested: ['name', 'country', 'image'],
            notifications: true
        };

        this.uport.requestDisclosure(reqObj);
        this.uport.onResponse('disclosureReq').then(res => {

            const did = res.payload.did;
            const payload = res.payload;

            console.log('DID', did);
            console.log('Payload', payload);
        });
    }

    isConnected() {
        return this.uport.did || false;
    }
}
