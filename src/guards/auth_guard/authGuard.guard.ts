import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthorizationService } from '../../authorization/services/authorization_service/authorizationService.service';

/**
 * Requires a session; otherwise sends the user to the login keeping the requested url.
 * canMatch (never canActivate): with canActivate, Angular downloads loadChildren before the guard runs.
 */
export const authGuard: CanMatchFn = (_route, segments) => {
  if (inject(AuthorizationService).isAuthenticated()) {
    return true;
  }
  const router = inject(Router);
  const requestedUrl =
    router.currentNavigation()?.extractedUrl.toString() ?? `/${segments.map((segment) => segment.path).join('/')}`;
  return router.createUrlTree(['/auth'], { queryParams: { returnUrl: requestedUrl } });
};
