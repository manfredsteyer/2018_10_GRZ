import { CityPipe } from './city.pipe';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CityDirective } from './city.directive';

@NgModule({
   imports: [
      CommonModule
   ],
   declarations: [
      CityPipe,
      CityDirective
   ],
   exports: [
      CityPipe,
      CityDirective
   ]
})
export class SharedModule {
}