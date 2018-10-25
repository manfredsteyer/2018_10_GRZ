import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Flight } from "../../entities/flight";
import { Observable } from "rxjs";
import { FlightService } from "../flight.service";
import { delay } from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class FlightResolver implements Resolve<Flight> {

    constructor(private flightService: FlightService) {
    }

    resolve(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Observable<Flight>   {
        
            const id = route.params['id'];
            return this.flightService.findById(id).pipe(delay(5000));
    }

}