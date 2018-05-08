import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AirlinesComponent }    from '../airlines/airlines.component';
import { AirlinesCRUDComponent }    from '../airlines-crud/airlines-crud.component';

const airlinesRoutes: Routes = [
    { path: 'airlines',  component: AirlinesComponent },
    { path: 'airlines/:id', component: AirlinesCRUDComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(airlinesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AirlinesRoutingModule { }
