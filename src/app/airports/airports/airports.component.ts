import { Component, OnInit } from '@angular/core';

import { Airport } from "../airport"
import { AirportsService } from "../airports.service"

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.css']
})
export class AirportsComponent implements OnInit {

    airports: Airport[];

    constructor(private airportsService: AirportsService) { }

    ngOnInit() {
        this.getAirports();
    }

    getAirports(): void {
        this.airportsService.getAirports()
                            .subscribe(airports => this.airports = airports);
    }
}
