import { TestBed } from '@angular/core/testing';

import { GirlService } from './girl.service';

describe('GirlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GirlService = TestBed.get(GirlService);
    expect(service).toBeTruthy();
  });
});
