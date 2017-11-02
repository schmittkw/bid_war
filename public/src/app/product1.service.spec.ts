import { TestBed, inject } from '@angular/core/testing';

import { Product1Service } from './product1.service';

describe('Product1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Product1Service]
    });
  });

  it('should be created', inject([Product1Service], (service: Product1Service) => {
    expect(service).toBeTruthy();
  }));
});
