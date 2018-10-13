import { FLIGHT_BOOKING_ROUTES } from './flight-booking.routes';
import { RouterModule } from '@angular/router';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { SharedModule } from './../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightBookingComponent } from './flight-booking.component';

@NgModule({
    imports: [
        CommonModule, 
        FormsModule, 
        ReactiveFormsModule,
        SharedModule, 
        MatFormFieldModule,
        MatInputModule,
        RouterModule.forChild(FLIGHT_BOOKING_ROUTES)
    ],
    declarations: [
        FlightSearchComponent, 
        FlightCardComponent, 
        FlightEditComponent,
        PassengerSearchComponent,
        FlightBookingComponent
    ],
    exports: [
        FlightSearchComponent
    ]
})
export class FlightBookingModule {

}