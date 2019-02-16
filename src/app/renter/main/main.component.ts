import {Component, OnInit} from '@angular/core';
import {faArrowLeft, faCog} from '@fortawesome/free-solid-svg-icons';
import {NavigationService} from './navigation.service';
import {UPortService} from './uport.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    settingsIcon = faCog;
    backIcon = faArrowLeft;

    constructor(
        private navigationService: NavigationService,
        private uPortService: UPortService,
        private route: ActivatedRoute,
        private router: Router
    ) {
    }

    ngOnInit() {

        this.uPortService.requestDisclosure();
    }

    goBack() {
        this.router.navigate(['/renter']);
    }
}
