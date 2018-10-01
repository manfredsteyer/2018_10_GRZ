import { DefaultFlightService } from './../default-flight.service';
import { Component, OnInit } from '@angular/core';
import { Flight } from '../../entities/flight';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { FlightService } from '../flight.service';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  providers: [{ provide: FlightService, useClass: DefaultFlightService}]

})
export class FlightSearchComponent implements OnInit {

  from: string;
  to: string;
  flights: Array<Flight> = [];
  selectedFlight: Flight;

  cityFormat: string = 'long';

  basket: object = {
    "3": true,
    "5": true
  };

  // private http: HttpClient;

  constructor(
    private flightService: FlightService) {
    //this.http = http;
  }

  ngOnInit() {
  }

  search(): void {

    this
      .flightService
      .find(this.from, this.to)
      .subscribe(
        flights => { this.flights = flights; },
        err => { console.debug('Error loading flights', err); }
      );
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }

}
