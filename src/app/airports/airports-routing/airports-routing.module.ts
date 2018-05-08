import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AirportsComponent }    from '../airports/airports.component';
import { AirportsCRUDComponent }    from '../airports-crud/airports-crud.component';

const airportsRoutes: Routes = [
    { path: 'airports',  component: AirportsComponent },
    { path: 'airports/:id', component: AirportsCRUDComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(airportsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AirportsRoutingModule { }
