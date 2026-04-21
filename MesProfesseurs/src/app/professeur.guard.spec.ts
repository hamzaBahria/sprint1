import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { professeurGuard } from './professeur.guard';

describe('professeurGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => professeurGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
