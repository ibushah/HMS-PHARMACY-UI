import { TestBed } from '@angular/core/testing';

import { DrugformationService } from './drugformation.service';

describe('DrugformationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrugformationService = TestBed.get(DrugformationService);
    expect(service).toBeTruthy();
  });
});
