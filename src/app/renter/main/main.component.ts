import {Component, OnInit} from '@angular/core';
import {faArrowLeft, faCog} from '@fortawesome/free-solid-svg-icons';
import {NavigationService} from './navigation.service';
import {UPortService} from './uport.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

import gravatar from 'gravatar';
import {SettingsService} from '../settings/settings.service';
import {MerkleTree} from '../../util/merkle-tree';

declare let Buffer: any;

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
        private settingsService: SettingsService,
        private route: ActivatedRoute,
        private router: Router
    ) {
    }

    ngOnInit() {

        this.route.queryParams.subscribe(params => {
            console.log('Query Params', params);

            if (params['index']) {
                this.settingsService.store.selectedCar = params;
                console.log('Selected Car', params);

                const data = params['proof'];


                const buffer = Buffer.from(data, 'base64');
                const privateKey = buffer.slice(0, 32);
                const proof = buffer.slice(32);

                console.log('privateKey', privateKey);
                console.log('proof', proof);

                // MerkleTree.applyProof();
            }

            const scope = this;
            setTimeout(function() {
                scope.router.navigate(['/renter']);
            }, 500);
        });

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

                    this.router.navigate(['/renter']);
                });
        }
    }

    goBack() {
        this.router.navigate(['../']);
    }
}
