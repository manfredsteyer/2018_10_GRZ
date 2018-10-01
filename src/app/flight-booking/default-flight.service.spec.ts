/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DefaultFlightService } from './default-flight.service';

describe('Service: DefaultFlight', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DefaultFlightService]
    });
  });

  it('should ...', inject([DefaultFlightService], (service: DefaultFlightService) => {
    expect(service).toBeTruthy();
  }));
});
