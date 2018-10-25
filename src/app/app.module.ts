import { APP_ROUTES } from './app.routes';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { DocuComponent } from './docu/docu.component';
import { CustomPreloadingStrategy } from './shared/custom-preloading-strategy.service';

@NgModule({
   imports: [
      BrowserModule,
      HttpClientModule,

      // FlightBookingModule, // would prevent lazy loading!
      
      BrowserAnimationsModule,
      MatFormFieldModule,
      RouterModule.forRoot(APP_ROUTES, { preloadingStrategy: CustomPreloadingStrategy})
      
   ],
   declarations: [
       DocuComponent,
      AppComponent,
      SidebarComponent,
      NavbarComponent,
      HomeComponent,
      AboutComponent
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
