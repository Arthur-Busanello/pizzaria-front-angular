import { TestBed } from '@angular/core/testing';

import { HttpinterceptorService } from 'src/app/interceptors/httpinterceptor.service';

describe('HttpInterceptorService', () => {
  let service: HttpinterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpinterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
