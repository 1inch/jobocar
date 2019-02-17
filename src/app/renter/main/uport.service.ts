import {Injectable} from '@angular/core';
import {Connect} from 'uport-connect';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UPortService {

    uport: Connect;

    constructor() {
        try {
            this.uport = new Connect('Jobocar', {network: 'mainnet'});
        } catch (e) {
            console.log('Error', e);
        }
    }

    requestDisclosure(): Observable<any> {

        return new Observable((observer) => {
            const reqObj = {
                requested: ['name', 'country', 'image', 'email'],
                notifications: true
            };

            this.uport.requestDisclosure(reqObj);
            this.uport.onResponse('disclosureReq')
                .then(res => {

                    const did = res.payload.did;
                    const payload = res.payload;

                    console.log('DID', did);
                    console.log('Payload', payload);

                    observer.next(payload);
                    observer.complete();
                })
                .catch(e => {
                    alert('An error with uPort is occurred. Please try again.');
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

        this.uport.logout();
        console.log(this.uport.state);
    }
}
