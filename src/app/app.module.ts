import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AirportsModule } from "./airports/airports.module";
import { AirlinesModule } from "./airlines/airlines.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AirportsModule,
    AirlinesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
