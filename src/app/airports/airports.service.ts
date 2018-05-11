import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from "../../environments/environment";
import { Airport } from "./airport";

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
                            catchError(this.handleError<Airport>(`getAirport id=${id}`))
                        );
    }

    updateAirport (airport: Airport): Observable<any> {
        const url = `${this.airportsUrl}/${airport.id}`;
        return this.http.put(url, airport, httpOptions)
                        .pipe(
                            catchError(this.handleError<any>('updateAirport'))
                        );
    }

    addAirport (airport: Airport): Observable<Airport> {
        return this.http.post<Airport>(this.airportsUrl, airport, httpOptions)
                        .pipe(
                            catchError(this.handleError<Airport>('addAirport'))
                        );
    }

    deleteAirport (airport: Airport | number): Observable<Airport> {
        const id = typeof airport === 'number' ? airport : airport.id;
        const url = `${this.airportsUrl}/${id}`;
        return this.http.delete<Airport>(url, httpOptions)
                        .pipe(
                            catchError(this.handleError<Airport>('deleteAirport'))
                        );
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }
}
