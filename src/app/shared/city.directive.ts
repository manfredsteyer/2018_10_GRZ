import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: 'input[city]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CityDirective,
      multi: true
    }
  ]
})
export class CityDirective implements Validator {

  @Input() city: string[] = [];
  @Input() strategy: string;

  constructor() { }

  validate(c: AbstractControl): ValidationErrors {
    
    if (this.city.indexOf(c.value) > -1) {
    //if (c.value == 'Graz' || c.value == 'Hamburg') {
      return {};
    }
    return {
      city: {
        reason:42,
        actual: c.value,
        tryAgain:2019 
      }
    }

  }

}
