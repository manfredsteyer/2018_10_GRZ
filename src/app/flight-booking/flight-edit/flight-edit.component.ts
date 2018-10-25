import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Flight } from '../../entities/flight';

@Component({
  selector: 'flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder) { }


    
  ngOnInit() {


    this.formGroup = this.fb.group({
      'id': [],
      'from': ['Graz', [Validators.required]],
      'to': [],
      'date': []
    });

    this.formGroup.valueChanges.subscribe(v => {
      console.debug('form changed', v);
    });

    this.route.data.subscribe(data => {
      const flight = data['flight'] as Flight;
      this.formGroup.patchValue(flight);
    });
    
    /*
    this.route.params.subscribe(params => {
      let flight = {
        id: params['id'],
        from: 'Graz',
        to: 'Hamburg',
        date: new Date().toISOString()
      }

      this.formGroup.patchValue(flight);

    });
    */

  }

  save(): void {
    console.debug('save', this.formGroup.value);
  }

}
