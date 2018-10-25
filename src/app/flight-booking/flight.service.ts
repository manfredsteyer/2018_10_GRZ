import { HttpClient, HttpParams, HttpHeaders, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../entities/flight';
import { DefaultFlightService, DummyFlightService } from './default-flight.service';
import { BASE_URL } from '../../app.tokens';

let DEBUG = true;

@Injectable({
  providedIn: 'root',
  //useClass: DummyFlightService,
  
  useFactory: (http: HttpClient) => {
    if (DEBUG) {
       return new DummyFlightService(http);
     }
     else {
       return new DefaultFlightService(http, '');
     }
  },
  deps: [HttpClient, BASE_URL]
})
export abstract class FlightService {
  
  abstract findById(id: string): Observable<Flight>;
  abstract find(from: string, to: string): Observable<Flight[]>;
}


