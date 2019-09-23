import { TestBed } from '@angular/core/testing';

import { ProductRegistrationService } from './product-registration.service';

describe('ProductRegistrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductRegistrationService = TestBed.get(ProductRegistrationService);
    expect(service).toBeTruthy();
  });
});
