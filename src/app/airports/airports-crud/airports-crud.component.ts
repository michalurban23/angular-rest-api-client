import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

import { Airport } from "../airport"
import { AirportsService } from "../airports.service"

@Component({
    selector: 'app-airports-crud',
    templateUrl: './airports-crud.component.html',
    styleUrls: ['./airports-crud.component.css']
})
export class AirportsCRUDComponent implements OnInit {

    @Input()
    airport: Airport;

    constructor(private route: ActivatedRoute,
                private airportsService: AirportsService,
                private location: Location) {}

    ngOnInit(): void {
        this.getAirport();
    }

    getAirport(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.airportsService.getAirport(id)
                        .subscribe(airport => this.airport = airport);
    }

    save(): void {
        this.airportsService.updateAirport(this.airport)
                        .subscribe(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }
}
