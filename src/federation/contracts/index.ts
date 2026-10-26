import { OutputRef } from '@angular/core';

/**
 * Contracts of the component-based features the shell hosts.
 * They mirror each feature's CONTRACT.md: projects never import each other's source code.
 */

/** mfe-login 1.0.0 — remote name as it appears in the federation manifest. */
export const LOGIN_REMOTE_NAME = 'mfe-login';

export const LOGIN_REMOTE_MODULES = {
  login: { exposedModule: './Login', exportName: 'LoginComponent' },
  passwordRecovery: { exposedModule: './PasswordRecovery', exportName: 'PasswordRecoveryComponent' },
} as const;

export interface LoginCredentials {
  username: string;
  password: string;
  rememberMe: boolean;
}

export interface PasswordResetRequest {
  email: string;
}

/** `./Login` — inputs: `loading`, `errorMessage`. */
export interface LoginFeatureContract {
  loginSubmit: OutputRef<LoginCredentials>;
  forgotPassword: OutputRef<void>;
}

/** `./PasswordRecovery` — inputs: `loading`, `errorMessage`, `sent`. */
export interface PasswordRecoveryFeatureContract {
  passwordResetSubmit: OutputRef<PasswordResetRequest>;
  backToLogin: OutputRef<void>;
}
