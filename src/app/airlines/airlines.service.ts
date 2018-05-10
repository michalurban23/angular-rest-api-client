import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from "../../environments/environment";
import { Airline } from "./airline"

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'some-token'
    })
};

@Injectable({
    providedIn: 'root'
})
export class AirlinesService {

    airlinesUrl = environment.apiUrl + "/airlines";

    constructor(private http: HttpClient) { }

    getAirlines (): Observable<Airline[]> {
        return this.http.get<Airline[]>(this.airlinesUrl)
                        .pipe(
                            catchError(this.handleError('get', []))
                        );
    }

    getAirline(id: number): Observable<Airline> {
        const url = `${this.airlinesUrl}/${id}`;
        return this.http.get<Airline>(url)
                        .pipe(
                            catchError(this.handleError<Airline>(`getAirline id=${id}`))
                        );
    }

    updateAirline (Airline: Airline): Observable<any> {
        return this.http.put(this.airlinesUrl, Airline, httpOptions)
                        .pipe(
                            catchError(this.handleError<any>('updateAirline'))
                        );
    }

    addAirline (Airline: Airline): Observable<Airline> {
        return this.http.post<Airline>(this.airlinesUrl, Airline, httpOptions)
                        .pipe(
                            catchError(this.handleError<Airline>('addAirline'))
                        );
    }

    deleteAirline (Airline: Airline | number): Observable<Airline> {
        const id = typeof Airline === 'number' ? Airline : Airline.id;
        const url = `${this.airlinesUrl}/${id}`;
        return this.http.delete<Airline>(url, httpOptions)
                        .pipe(
                            catchError(this.handleError<Airline>('deleteAirline'))
                        );
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }
}
