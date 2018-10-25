import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { Routes } from '@angular/router';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightBookingComponent } from './flight-booking.component';
import { AuthGuard } from '../shared/auth.guard';
import { FlightResolver } from './flight-edit/flight.resolver';

export const FLIGHT_BOOKING_ROUTES: Routes = [
    {
        // flight-booking/flight-search
        path: '',
        component: FlightBookingComponent,
        children: [
            {
                path: 'flight-search',
                component: FlightSearchComponent
            },
            {
                path: 'passenger-search',
                component: PassengerSearchComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'flight-edit/:id',
                component: FlightEditComponent,
                resolve: {
                    flight: FlightResolver
                }
            }
        ]
    },

];