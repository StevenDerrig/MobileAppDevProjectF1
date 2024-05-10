import { TestBed } from '@angular/core/testing';

import { F1APIService } from './f1-api.service';

describe('F1APIService', () => {
  let service: F1APIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(F1APIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
