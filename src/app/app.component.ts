import { Component, OnInit } from '@angular/core';
import { FlightService } from './flight-booking/flight.service';
import { Route } from '@angular/compiler/src/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { filter, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Hello World!';
  loading = false;
  constructor(
    private router: Router,
    private flightService: FlightService) {
    
      console.debug('flightService', flightService);

      router
        .events
        .pipe(
          filter(e => e instanceof NavigationStart || e instanceof NavigationEnd),
          debounceTime(300)
        )
        .subscribe(e => {
          
          if (e instanceof NavigationStart) {
            this.loading = true;
          }
          else {
            this.loading = false;
          }

        });

  }
}
