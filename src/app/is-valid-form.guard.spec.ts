import { TestBed } from '@angular/core/testing';

import { IsValidFormGuard } from './is-valid-form.guard';

describe('IsValidFormGuard', () => {
  let guard: IsValidFormGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsValidFormGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
