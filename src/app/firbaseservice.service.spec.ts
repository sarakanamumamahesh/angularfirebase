import { TestBed } from '@angular/core/testing';

import { FirbaseserviceService } from './firbaseservice.service';

describe('FirbaseserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirbaseserviceService = TestBed.get(FirbaseserviceService);
    expect(service).toBeTruthy();
  });
});
