import { Injectable, inject } from '@angular/core';
import { AuthenticationService } from '../../../authentication/services/authentication_service/authenticationService.service';
import { Role } from '../../../roles';

@Injectable({ providedIn: 'root' })
export class AuthorizationService {
  private readonly authentication = inject(AuthenticationService);

  isAuthenticated(): boolean {
    return this.authentication.user() !== null;
  }

  /** true with a session and any of the required roles (no required roles: the session is enough). */
  canAccess(requiredRoles: readonly Role[] = []): boolean {
    const user = this.authentication.user();
    if (!user) {
      return false;
    }
    return requiredRoles.length === 0 || user.roles.some((role) => requiredRoles.includes(role));
  }
}
