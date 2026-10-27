import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthenticationService } from '../../services/authentication_service/authenticationService.service';

const MUTATING_METHODS = ['POST', 'PUT', 'PATCH', 'DELETE'];

/** Adds the session CSRF token to every mutating request to the BFF. Feature MFEs inherit it. */
export const csrfInterceptor: HttpInterceptorFn = (request, next) => {
  const csrfToken = inject(AuthenticationService).csrfToken();
  if (!csrfToken || !isBffRequest(request.url) || !MUTATING_METHODS.includes(request.method)) {
    return next(request);
  }
  return next(request.clone({ setHeaders: { 'X-CSRF-Token': csrfToken } }));
};

export function isBffRequest(url: string): boolean {
  return url === '/bff' || url.startsWith('/bff/');
}
