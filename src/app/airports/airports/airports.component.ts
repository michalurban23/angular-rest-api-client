import { Component, OnInit, SimpleChanges } from '@angular/core';

import { Airport } from "../airport"
import { AirportsService } from "../airports.service"

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.css']
})
export class AirportsComponent implements OnInit {

    airports: Airport[];
    new: boolean = false;

    constructor(private airportsService: AirportsService) {}

    ngOnInit() {
        this.getAirports();
    }

    getAirports(): void {
        this.airportsService.getAirports()
                            .subscribe(airports => this.airports = airports);
        }

    add(country: string, shortName: string, longName: string): void {

        this.airportsService.addAirport({ country, shortName, longName } as Airport)
                            .subscribe(airport => { if(!shortName) this.airports.push(airport);});
        this.new = false;
    }

    delete(airport: Airport): void {
        this.airports = this.airports.filter(a => a !== airport);
        this.airportsService.deleteAirport(airport).subscribe();
    }

    setNewTrue(): void {
        this.new = true;
    }

    setNewFalse(): void {
        this.new = false;
        this.getAirports();
    }
}
