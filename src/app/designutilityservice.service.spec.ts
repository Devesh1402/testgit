import { TestBed } from '@angular/core/testing';

import { DesignutilityserviceService } from './designutilityservice.service';

describe('DesignutilityserviceService', () => {
  let service: DesignutilityserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesignutilityserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
