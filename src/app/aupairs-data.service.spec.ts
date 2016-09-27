/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { AupairsDataService } from './aupairs-data.service';

describe('Service: AupairsData', () => {
  beforeEach(() => {
    addProviders([AupairsDataService]);
  });

  it('should ...',
    inject([AupairsDataService],
      (service: AupairsDataService) => {
        expect(service).toBeTruthy();
      }));
});
