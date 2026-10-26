import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AuthenticationService } from '../../services/authentication_service/authenticationService.service';
import { csrfInterceptor } from './csrfInterceptor.interceptor';

describe('csrfInterceptor', () => {
  let http: HttpClient;
  let controller: HttpTestingController;
  let csrfToken: string | null;

  const headerFor = (method: string, url: string) => {
    http.request(method, url).subscribe();
    const request = controller.expectOne(url);
    request.flush(null);
    return request.request.headers.get('X-CSRF-Token');
  };

  beforeEach(() => {
    csrfToken = 'csrf-1';
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptors([csrfInterceptor])),
        provideHttpClientTesting(),
        { provide: AuthenticationService, useValue: { csrfToken: () => csrfToken } },
      ],
    });
    http = TestBed.inject(HttpClient);
    controller = TestBed.inject(HttpTestingController);
  });

  afterEach(() => controller.verify());

  it('should add the header to mutating requests to the BFF', () => {
    for (const method of ['POST', 'PUT', 'PATCH', 'DELETE']) {
      expect(headerFor(method, '/bff/api/customers')).toBe('csrf-1');
    }
  });

  it('should not add the header to reads, other hosts or without a session', () => {
    expect(headerFor('GET', '/bff/api/customers')).toBeNull();
    expect(headerFor('POST', 'https://other.example/bff/api')).toBeNull();
    expect(headerFor('POST', '/bffx/api')).toBeNull();

    csrfToken = null;
    expect(headerFor('POST', '/bff/api/customers')).toBeNull();
  });
});
