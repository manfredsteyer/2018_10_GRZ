import { Pipe, PipeTransform } from '@angular/core';
import { FlightService } from '../flight-booking/flight.service';

@Pipe({
  name: 'city',
  pure: true
})
export class CityPipe implements PipeTransform {

  // constructor(private flightService: FlightService) {
  // }

  transform(value: string, fmt: string, lang: string): string {
    let long, short;

    switch(value) {
      case 'Graz':
        long = 'Flughafen Graz-Thalerhof';
        short = 'GRZ'
        break;
      case 'Hamburg':
        long = 'Airport Hamburg Fuhlsbüttel -- Helmut Schmidt';
        short = 'HAM'
        break;
      default:
        long = short = value;
      }

    if (fmt === 'short') return short;
    return long;
  }

}
