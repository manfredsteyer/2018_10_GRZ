import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AsyncValidator, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { FlightService } from '../flight-booking/flight.service';

@Directive({
  selector: 'input[asyncCity]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: AsyncCityDirective,
      multi: true
    }
  ]
})
export class AsyncCityDirective implements AsyncValidator {
  

  constructor(private flightService: FlightService) { }

  validate(c: AbstractControl): Observable<object> {
    
    return this.flightService.find(c.value, '').pipe(
      map(flights => flights.length > 0? {} : {asyncCity:true}),
      delay(5000)
    );
    
  }

}
