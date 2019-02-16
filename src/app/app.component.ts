import { Component } from '@angular/core';
import {UPortService} from './renter/main/uport.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private uPortService: UPortService) {

    }
}
