import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationService} from '../main/navigation.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit, OnDestroy {

  constructor(private navigationService: NavigationService) {
  }

  ngOnInit() {

    this.navigationService.showBackButton = true;
  }

  ngOnDestroy(): void {

    this.navigationService.showBackButton = false;
  }

}
