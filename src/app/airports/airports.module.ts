import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AirportsCRUDComponent } from './airports-crud/airports-crud.component';
import { AirportsComponent } from './airports/airports.component';
import { AirportsRoutingModule } from './airports-routing/airports-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AirportsRoutingModule
    ],
    declarations: [AirportsCRUDComponent, AirportsComponent]
})
export class AirportsModule { }
