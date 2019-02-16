import {Injectable, OnDestroy, OnInit} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SettingsService {

    get store(): { paymentCurrency: string; certCenter: string } {
        return this._store;
    }

    set store(value: { paymentCurrency: string; certCenter: string }) {

        this._store = value;
    }

    private _store = {
        paymentCurrency: 'DAI',
        certCenter: 'lbbw'
    };

    constructor() {
        const settingsStore = localStorage.getItem('settingsStore');

        if (settingsStore) {
            this._store = JSON.parse(settingsStore);
        }
    }

    storeInLocalStorage(): void {

        localStorage.setItem('settingsStore', JSON.stringify(this._store));
    }
}
