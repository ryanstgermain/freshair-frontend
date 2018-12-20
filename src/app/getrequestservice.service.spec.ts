import { TestBed } from '@angular/core/testing';

import { GetrequestserviceService } from './getrequestservice.service';

describe('GetrequestserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetrequestserviceService = TestBed.get(GetrequestserviceService);
    expect(service).toBeTruthy();
  });
});
