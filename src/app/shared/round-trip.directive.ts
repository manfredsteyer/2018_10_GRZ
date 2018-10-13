import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
  selector: 'form[roundTrip]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: RoundTripDirective,
      multi: true
    }
  ]
})
export class RoundTripDirective implements Validator {
 

  constructor() { }

  validate(c: AbstractControl): ValidationErrors {
    
    let formGroup = c as FormGroup;
    let fromCtrl = formGroup.controls['from'];
    let toCtrl = formGroup.controls['to'];

    if (!fromCtrl || !toCtrl) return {};

    if (fromCtrl.value === toCtrl.value) {
      return { roundTrip: true };
    }

    return {};

  }
 
}
