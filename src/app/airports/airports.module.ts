import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirportsCRUDComponent } from './airports-crud/airports-crud.component';
import { AirportsComponent } from './airports/airports.component';
import { AirportsRoutingModule } from './airports-routing/airports-routing.module';

@NgModule({
    imports: [
        CommonModule,
        AirportsRoutingModule
    ],
    declarations: [AirportsCRUDComponent, AirportsComponent]
})
export class AirportsModule { }
