import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationService} from '../main/navigation.service';
import {faFilePdf} from '@fortawesome/free-solid-svg-icons';
import {SettingsService} from './settings.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit, OnDestroy {

    pdfIcon = faFilePdf;
    storeState = true;

    constructor(
        private navigationService: NavigationService,
        private settingsService: SettingsService,
        private router: Router
    ) {
    }

    ngOnInit() {

        this.navigationService.showBackButton = true;
        this.storeState = true;
    }

    ngOnDestroy(): void {

        this.navigationService.showBackButton = false;

        !this.storeState || this.settingsService.storeInLocalStorage();
    }

    logout() {

        this.settingsService.logout();
        this.router.navigate(['/']);
        this.storeState = false;
    }
}
