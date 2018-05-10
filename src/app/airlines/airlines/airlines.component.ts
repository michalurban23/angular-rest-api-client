import { Component, OnInit } from '@angular/core';
import { Airline } from '../airline';

import { Airline } from "../airline"
import { AirlinesService } from "../airlines.service"

@Component({
  selector: 'app-airlines',
  templateUrl: './airlines.component.html',
  styleUrls: ['./airlines.component.css']
})
export class AirlinesComponent implements OnInit {

    airlines: Airline[];

    constructor(private airlinesService: AirlinesService) { }

    ngOnInit() {
        this.getAirlines();
    }

    getAirlines(): void {
        this.airlinesService.getAirlines()
                            .subscribe(airlines => this.airlines = airlines);
    }

    add(name: string, countryOfOrigin: string): void {
        this.airlinesService.addAirline({ name, countryOfOrigin } as Airline)
                            .subscribe(airline => {this.airlines.push(airline)});
    }

    delete(airline: Airline): void {
        this.airlines = this.airlines.filter(a => a !== airline);
        this.airlinesService.deleteAirline(airline).subscribe();
    }
}
