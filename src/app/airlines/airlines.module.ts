import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AirlinesCRUDComponent } from './airlines-crud/airlines-crud.component';
import { AirlinesComponent } from './airlines/airlines.component';
import { AirlinesRoutingModule } from './airlines-routing/airlines-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AirlinesRoutingModule
    ],
    declarations: [AirlinesCRUDComponent, AirlinesComponent]
})
export class AirlinesModule { }
