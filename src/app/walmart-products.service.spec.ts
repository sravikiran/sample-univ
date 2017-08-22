import { TestBed, inject } from '@angular/core/testing';

import { WalmartProductsService } from './walmart-products.service';

describe('WalmartProductsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WalmartProductsService]
    });
  });

  it('should be created', inject([WalmartProductsService], (service: WalmartProductsService) => {
    expect(service).toBeTruthy();
  }));
});
