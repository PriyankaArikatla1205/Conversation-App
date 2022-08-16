import { TestBed } from '@angular/core/testing';

import { XttpInterceptorInterceptor } from './xttp-interceptor.interceptor';

describe('XttpInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      XttpInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: XttpInterceptorInterceptor = TestBed.inject(XttpInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
