import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapComponent} from './map/map.component';
import {AgmCoreModule} from '@agm/core';
import {MenubarModule} from 'primeng/menubar';
import {MainComponent} from './main/main.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'map',
    component: MapComponent
  }
];

@NgModule({
  declarations: [MapComponent, MainComponent],
  imports: [
    CommonModule,
    MenubarModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCMQs50MwDO5NamST3QgdkbS6mnYO-Z4GE'
    }),
    RouterModule.forChild(
      routes
    )
  ],
  exports: []
})
export class RenterModule {
}
