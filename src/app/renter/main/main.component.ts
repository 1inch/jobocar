import {Component, OnInit} from '@angular/core';
import {faArrowLeft, faCog} from '@fortawesome/free-solid-svg-icons';
import {NavigationService} from './navigation.service';
import {UPortService} from './uport.service';
import {ActivatedRoute, Router} from '@angular/router';

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
        private navigationService: NavigationService,
        private uPortService: UPortService,
        private route: ActivatedRoute,
        private router: Router
    ) {
    }

    ngOnInit() {

        if (this.uPortService.isConnected()) {
            this.gravatarUrl = gravatar.url(this.uPortService.uport.state.email);
            this.loading = false;
        } else {

            this.uPortService.requestDisclosure()
                .subscribe(state => {
                    this.gravatarUrl = gravatar.url(state.email);
                    this.loading = false;
                });
        }
    }

    goBack() {
        this.router.navigate(['/renter']);
    }
}
