import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NoContentComponent} from './no-content/no-content.component';
import {PanelModule} from 'primeng/panel';
import {RenterModule} from './renter/renter.module';
import { BaseComponent } from './base/base.component';

export const routes: Routes = [
  {
    path: '',
    component: BaseComponent
  },
  {
    path: 'renter',
    loadChildren: './renter/renter.module#RenterModule'
  },
  {
    path: '**',
    component: NoContentComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NoContentComponent,
    BaseComponent
  ],
  imports: [
    CommonModule,
    PanelModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false,
        useHash: true
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
