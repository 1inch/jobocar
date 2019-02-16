import { Component, OnInit } from '@angular/core';
import {UPortService} from '../renter/main/uport.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
