import { Provider } from '@angular/core';
import { PLATFORM_SESSION } from '@vixo/platform-contracts';
import { AuthenticationService } from '../authentication/services/authentication_service/authenticationService.service';

/**
 * Read-only platform contracts shared with every feature MFE (shell/10-identity-propagation).
 * PLATFORM_ENVIRONMENT, PLATFORM_REMOTE_LOADER and PLATFORM_EVENTS are added here
 * when @vixo/platform-contracts 2.0.0 is released.
 */
export function providePlatformContracts(): Provider[] {
  return [{ provide: PLATFORM_SESSION, useExisting: AuthenticationService }];
}
