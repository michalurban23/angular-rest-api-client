import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

import { Airline } from "../airline"
import { AirlinesService } from "../airlines.service"

@Component({
    selector: 'app-airlines-crud',
    templateUrl: './airlines-crud.component.html',
    styleUrls: ['./airlines-crud.component.css']
})
export class AirlinesCRUDComponent implements OnInit {

    @Input()
    airline: Airline;

    constructor(private route: ActivatedRoute,
                private airlinesService: AirlinesService,
                private location: Location) {}

    ngOnInit(): void {
        this.getAirline();
    }

    getAirline(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.airlinesService.getAirline(id)
                        .subscribe(airline => this.airline = airline);
    }

    save(): void {
        this.airlinesService.updateAirline(this.airline)
                        .subscribe(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }
}
