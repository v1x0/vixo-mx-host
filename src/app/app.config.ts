import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { csrfInterceptor } from '../authentication/interceptors/csrf_interceptor/csrfInterceptor.interceptor';
import { sessionExpiredInterceptor } from '../authentication/interceptors/session_expired_interceptor/sessionExpiredInterceptor.interceptor';
import { AuthenticationService } from '../authentication/services/authentication_service/authenticationService.service';
import { providePlatformContracts } from '../platform';

// The router is provided in bootstrap.ts: its routes depend on the MFE registry loaded at startup
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // Provided once: feature MFEs inherit this HttpClient with its interceptors
    provideHttpClient(withInterceptors([csrfInterceptor, sessionExpiredInterceptor])),
    provideAppInitializer(() => inject(AuthenticationService).restoreSession()),
    providePlatformContracts(),
  ],
};
