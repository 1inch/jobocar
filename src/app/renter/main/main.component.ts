import {Component, OnInit} from '@angular/core';
import {faArrowLeft, faCog} from '@fortawesome/free-solid-svg-icons';
import {Location} from '@angular/common';
import {NavigationService} from './navigation.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  settingsIcon = faCog;
  backIcon = faArrowLeft;

  constructor(
    private location: Location,
    private navigationService: NavigationService
  ) {
  }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}
