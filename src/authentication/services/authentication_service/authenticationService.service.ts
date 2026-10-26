import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import type { PlatformSession, SessionUser } from '@vixo/platform-contracts';
import { firstValueFrom, timeout } from 'rxjs';
import { LoginCredentials, PasswordResetRequest } from '../../../federation/contracts';
import { Role, isRole } from '../../../roles';

export type { SessionUser } from '@vixo/platform-contracts';

/** The BFF is served under the same origin as the shell (shell/06-authentication). */
export const BFF_AUTH_URL = '/bff/auth';

const SESSION_RESTORE_TIMEOUT_MS = 5000;

export type LoginResult =
  | { ok: true }
  | { ok: false; reason: 'invalid-credentials' | 'too-many-attempts' | 'unavailable' };

interface BffSession {
  username: string;
  roles: unknown[];
  csrfToken: string;
}

/**
 * The shell is the only owner of the session. Tokens stay in the BFF (httpOnly cookie):
 * the browser only knows the user, the roles and the CSRF token.
 */
@Injectable({ providedIn: 'root' })
export class AuthenticationService implements PlatformSession {
  private readonly http = inject(HttpClient);
  private readonly session = signal<{ user: SessionUser; csrfToken: string } | null>(null);

  readonly user = computed(() => this.session()?.user ?? null);

  /** Stays inside the shell HTTP layer; never shared with feature MFEs. */
  csrfToken(): string | null {
    return this.session()?.csrfToken ?? null;
  }

  hasRole(...roles: Role[]): boolean {
    return this.user()?.roles.some((role) => roles.includes(role)) ?? false;
  }

  /** Restores the session after a reload. If the BFF does not answer, there is no session. */
  async restoreSession(): Promise<void> {
    try {
      const session = await firstValueFrom(
        this.http.get<BffSession>(`${BFF_AUTH_URL}/session`).pipe(timeout(SESSION_RESTORE_TIMEOUT_MS)),
      );
      this.session.set({
        user: { username: session.username, roles: session.roles.filter(isRole) },
        csrfToken: session.csrfToken,
      });
    } catch {
      this.session.set(null);
    }
  }

  /** The credentials travel only to the BFF and are never stored or logged. */
  async login(credentials: LoginCredentials): Promise<LoginResult> {
    try {
      await firstValueFrom(this.http.post<void>(`${BFF_AUTH_URL}/login`, credentials));
    } catch (error) {
      const status = error instanceof HttpErrorResponse ? error.status : 0;
      if (status === 401) return { ok: false, reason: 'invalid-credentials' };
      if (status === 429) return { ok: false, reason: 'too-many-attempts' };
      return { ok: false, reason: 'unavailable' };
    }
    await this.restoreSession();
    return this.session() ? { ok: true } : { ok: false, reason: 'unavailable' };
  }

  /** The BFF always answers 202, so the response never reveals whether the account exists. */
  async requestPasswordReset(request: PasswordResetRequest): Promise<boolean> {
    try {
      await firstValueFrom(this.http.post<void>(`${BFF_AUTH_URL}/password-reset`, request));
      return true;
    } catch {
      return false;
    }
  }

  async logout(): Promise<void> {
    try {
      await firstValueFrom(this.http.post<void>(`${BFF_AUTH_URL}/logout`, null));
    } catch {
      // The local session is closed anyway
    }
    this.clearSession();
  }

  clearSession(): void {
    this.session.set(null);
  }
}
