import {Injectable} from '@angular/core';
import {UPortService} from '../main/uport.service';

@Injectable({
    providedIn: 'root'
})
export class SettingsService {

    constructor(
        private uPortService: UPortService
    ) {
        const settingsStore = localStorage.getItem('settingsStore');

        if (settingsStore) {
            this.store = JSON.parse(settingsStore);
        }
    }

    store = {
        paymentCurrency: 'DAI',
        certCenter: 'lbbw',
        cars: {
            0: {
                price: 0,
                minPurchase: 0
            }
        }
    };

    storeInLocalStorage(): void {

        localStorage.setItem('settingsStore', JSON.stringify(this.store));
    }

    logout() {

        localStorage.removeItem('settingsStore');
        this.uPortService.logout();
    }
}
