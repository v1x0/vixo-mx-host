import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import {
  AuthenticationService,
  BFF_AUTH_URL,
} from '../../services/authentication_service/authenticationService.service';
import { isBffRequest } from '../csrf_interceptor/csrfInterceptor.interceptor';

/**
 * Any 401 from the BFF means the session expired: close it and send the user to the login.
 * The authentication endpoints are excluded: their 401 is an expected answer.
 */
export const sessionExpiredInterceptor: HttpInterceptorFn = (request, next) => {
  const authentication = inject(AuthenticationService);
  const router = inject(Router);

  return next(request).pipe(
    catchError((error: unknown) => {
      if (
        error instanceof HttpErrorResponse &&
        error.status === 401 &&
        isBffRequest(request.url) &&
        !request.url.startsWith(`${BFF_AUTH_URL}/`) &&
        authentication.user()
      ) {
        authentication.clearSession();
        void router.navigate(['/auth'], { queryParams: { returnUrl: router.url } });
      }
      return throwError(() => error);
    }),
  );
};
