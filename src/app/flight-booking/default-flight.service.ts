import { Injectable, Inject } from '@angular/core';
import { FlightService } from './flight.service';
import { Observable, of } from 'rxjs';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { Flight } from '../entities/flight';
import { BASE_URL } from '../../app.tokens';

@Injectable()
export class DefaultFlightService implements FlightService {

  constructor(
    private http: HttpClient,
    @Inject(BASE_URL) private baseUrl: string) { }

  find(from: string, to: string): Observable<Flight[]> {
    const url = this.baseUrl + '/flight';
    const params = new HttpParams().set('from', from).set('to', to);
    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.get<Flight[]>(url, { headers, params });
  }

}



@Injectable()
export class DummyFlightService implements FlightService {

  constructor(private http: HttpClient) { }

  find(from: string, to: string): Observable<Flight[]> {
    return of([
      { id: 17, from: 'Graz', to: 'Andritz', date: '2018-10-01T17:00+02:00'},
      { id: 18, from: 'Graz', to: 'Andritz', date: '2018-10-01T17:30+02:00'},
      { id: 19, from: 'Graz', to: 'Andritz', date: '2018-10-01T17:55+02:00'}
    ]);
  }

}