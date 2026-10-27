import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import {
  AuthenticationService,
  SessionUser,
} from '../../services/authentication_service/authenticationService.service';
import { sessionExpiredInterceptor } from './sessionExpiredInterceptor.interceptor';

describe('sessionExpiredInterceptor', () => {
  const user = signal<SessionUser | null>(null);
  const clearSession = vi.fn(() => user.set(null));
  let http: HttpClient;
  let controller: HttpTestingController;
  let navigate: ReturnType<typeof vi.spyOn>;

  const fail = (url: string, status: number) => {
    const error = vi.fn();
    http.get(url).subscribe({ error });
    controller.expectOne(url).flush(null, { status, statusText: 'Error' });
    return error;
  };

  beforeEach(() => {
    user.set({ username: 'dreyes', roles: ['Viewer'] });
    clearSession.mockClear();
    TestBed.configureTestingModule({
      providers: [
        provideRouter([]),
        provideHttpClient(withInterceptors([sessionExpiredInterceptor])),
        provideHttpClientTesting(),
        { provide: AuthenticationService, useValue: { user, clearSession } },
      ],
    });
    http = TestBed.inject(HttpClient);
    controller = TestBed.inject(HttpTestingController);
    navigate = vi.spyOn(TestBed.inject(Router), 'navigate').mockResolvedValue(true);
  });

  afterEach(() => controller.verify());

  it('should close the session and go to the login on a BFF 401', () => {
    const error = fail('/bff/api/customers', 401);

    expect(clearSession).toHaveBeenCalled();
    expect(navigate).toHaveBeenCalledWith(['/auth'], { queryParams: { returnUrl: '/' } });
    expect(error).toHaveBeenCalled();
  });

  it('should ignore other errors, authentication endpoints and other hosts', () => {
    fail('/bff/api/customers', 500);
    fail('/bff/auth/login', 401);
    fail('https://other.example/api', 401);

    expect(clearSession).not.toHaveBeenCalled();
    expect(navigate).not.toHaveBeenCalled();
  });
});
