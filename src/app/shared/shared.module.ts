import { CityPipe } from './city.pipe';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CityDirective } from './city.directive';
import { RoundTripDirective } from './round-trip.directive';
import { AsyncCityDirective } from './async-city.directive';

@NgModule({
   imports: [
      CommonModule
   ],
   declarations: [
      CityPipe,
      CityDirective,
      RoundTripDirective,
      AsyncCityDirective
   ],
   exports: [
      CityPipe,
      CityDirective,
      RoundTripDirective,
      AsyncCityDirective
   ]
})
export class SharedModule {
}