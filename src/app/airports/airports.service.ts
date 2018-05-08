import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from "../../environments/environment";
import { Airport } from "./airport"

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'some-token'
    })
};

@Injectable({
    providedIn: 'root'
})
export class AirportsService {

    airportsUrl = environment.apiUrl + "/airports";

    constructor(private http: HttpClient) { }

    getAirports (): Observable<Airport[]> {
        return this.http.get<Airport[]>(this.airportsUrl)
                        .pipe(
                            catchError(this.handleError('get', []))
                        );
    }

    getAirport(id: number): Observable<Airport> {
        const url = `${this.airportsUrl}/${id}`;
        return this.http.get<Airport>(url)
                        .pipe(
                            catchError(this.handleError<Airport>(`getHero id=${id}`))
                        );
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }
}
