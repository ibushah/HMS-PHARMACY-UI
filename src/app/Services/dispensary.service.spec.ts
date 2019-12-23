import { TestBed } from '@angular/core/testing';

import { DispensaryService } from './dispensary.service';

describe('DispensaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DispensaryService = TestBed.get(DispensaryService);
    expect(service).toBeTruthy();
  });
});
