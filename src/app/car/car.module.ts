import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main/main.component';
import {RouterModule, Routes} from '@angular/router';
import {MapComponent} from './map/map.component';
import {AgmCoreModule} from '@agm/core';
import {AgmDirectionModule} from 'agm-direction';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: '',
                component: MapComponent
            }
        ]
    }
];

@NgModule({
    declarations: [MainComponent, MapComponent],
    imports: [
        CommonModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCMQs50MwDO5NamST3QgdkbS6mnYO-Z4GE'
        }),
        AgmDirectionModule,
        RouterModule.forChild(
            routes
        )
    ],
})
export class CarModule {
}
