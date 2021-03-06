import { DocuComponent } from './docu/docu.component';
import { AboutComponent } from './about/about.component';
import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";


export const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'flight-booking',
        loadChildren: './flight-booking/flight-booking.module#FlightBookingModule',
        data: {
            preload: false
        }
    },
    {
        path: 'docu',
        component: DocuComponent,
        outlet: 'aux'
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    },

];