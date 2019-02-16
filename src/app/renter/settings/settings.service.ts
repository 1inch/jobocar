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
            this._store = JSON.parse(settingsStore);
        }
    }

    private _store = {
        paymentCurrency: 'DAI',
        certCenter: 'lbbw'
    };

    get store(): { paymentCurrency: string; certCenter: string } {
        return this._store;
    }

    set store(value: { paymentCurrency: string; certCenter: string }) {

        this._store = value;
    }

    storeInLocalStorage(): void {

        localStorage.setItem('settingsStore', JSON.stringify(this._store));
    }

    logout() {

        localStorage.removeItem('settingsStore');
        this.uPortService.logout();
    }
}
