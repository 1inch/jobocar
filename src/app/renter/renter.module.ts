import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapComponent} from './map/map.component';
import {AgmCoreModule} from '@agm/core';
import {MenubarModule} from 'primeng/menubar';
import {MainComponent} from './main/main.component';
import {RouterModule, Routes} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SettingsComponent} from './settings/settings.component';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'map',
                component: MapComponent
            },
            {
                path: 'settings',
                component: SettingsComponent
            }
        ]
    }
];

@NgModule({
    declarations: [
        MapComponent,
        MainComponent,
        SettingsComponent
    ],
    imports: [
        CommonModule,
        MenubarModule,
        FontAwesomeModule,
        FormsModule,
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
