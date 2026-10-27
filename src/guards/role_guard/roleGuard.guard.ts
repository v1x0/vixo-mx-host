import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthorizationService } from '../../authorization/services/authorization_service/authorizationService.service';
import { Role } from '../../roles';

/** Requires any of the roles in `data.roles` (from the registry). Runs after authGuard. */
export const roleGuard: CanMatchFn = (route) => {
  const requiredRoles = (route.data?.['roles'] as Role[] | undefined) ?? [];
  if (inject(AuthorizationService).canAccess(requiredRoles)) {
    return true;
  }
  return inject(Router).createUrlTree(['/forbidden']);
};
