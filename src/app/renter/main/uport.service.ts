import {Injectable} from '@angular/core';
import {Connect} from 'uport-connect';
import {Observable} from 'rxjs';

const NULL_STATE = {
    did: null,
    mnid: null,
    address: null,
    doc: null,
    pushToken: null,
    publicEncKey: null
};

@Injectable({
    providedIn: 'root'
})
export class UPortService {

    uport = new Connect('Jobocar', {network: 'mainnet'});

    constructor() {

    }

    requestDisclosure(): Observable<any> {

        return new Observable((observer) => {
            const reqObj = {
                requested: ['name', 'country', 'image', 'email'],
                notifications: true
            };

            this.uport.requestDisclosure(reqObj);
            this.uport.onResponse('disclosureReq').then(res => {

                const did = res.payload.did;
                const payload = res.payload;

                console.log('DID', did);
                console.log('Payload', payload);

                observer.next(payload);
                observer.complete();
            });
        });
    }

    isConnected() {

        if (this.uport.did) {
            return true;
        } else {
            return false;
        }
    }

    logout() {
        this.uport.setState(function(currentState) {
            return NULL_STATE;
        });

        console.log(this.uport.state);

        localStorage.removeItem('connectState');
    }
}
