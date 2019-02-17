import {Component, OnInit} from '@angular/core';
import {faArrowLeft, faCog} from '@fortawesome/free-solid-svg-icons';
import {NavigationService} from './navigation.service';
import {UPortService} from './uport.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

import gravatar from 'gravatar';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    settingsIcon = faCog;
    backIcon = faArrowLeft;
    gravatarUrl = '';
    loading = true;

    constructor(
        private location: Location,
        private navigationService: NavigationService,
        private uPortService: UPortService,
        private route: ActivatedRoute,
        private router: Router
    ) {
    }

    ngOnInit() {

        this.navigationService.showBackButton = true;

        if (this.uPortService.isConnected()) {
            this.gravatarUrl = gravatar.url(this.uPortService.uport.state.email);
            this.loading = false;

            console.log('Existing state', this.uPortService.uport.state);
        } else {

            this.uPortService.requestDisclosure()
                .subscribe(state => {
                    this.gravatarUrl = gravatar.url(state.email);
                    this.loading = false;

                    console.log('State', state);

                    this.router.navigate(['/owner']);
                });
        }
    }

    goBack() {
        this.router.navigate(['../']);
    }
}
