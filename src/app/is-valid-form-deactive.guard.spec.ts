import { TestBed } from '@angular/core/testing';

import { IsValidFormDeactiveGuard } from './is-valid-form-deactive.guard';

describe('IsValidFormDeactiveGuard', () => {
  let guard: IsValidFormDeactiveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsValidFormDeactiveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
