import { TestBed } from '@angular/core/testing';

import { LogingaurdGuard } from './logingaurd.guard';

describe('LogingaurdGuard', () => {
  let guard: LogingaurdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LogingaurdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
