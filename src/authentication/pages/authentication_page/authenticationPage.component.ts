import {
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  ViewContainerRef,
  effect,
  inject,
  signal,
  untracked,
  viewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  LOGIN_REMOTE_MODULES,
  LOGIN_REMOTE_NAME,
  LoginCredentials,
  LoginFeatureContract,
  PasswordRecoveryFeatureContract,
  PasswordResetRequest,
} from '../../../federation/contracts';
import { RELOAD_PAGE } from '../../../federation/loader';
import { RemoteFeatureService } from '../../../federation/services/remote_feature_service/remoteFeatureService.service';
import {
  AuthenticationService,
  LoginResult,
} from '../../services/authentication_service/authenticationService.service';

export type AuthenticationView = 'login' | 'password-recovery';
export type RemoteState = 'loading' | 'ready' | 'error';

const DEFAULT_REDIRECT = '/home';

/** Generic texts: they never reveal whether an account exists. */
export const LOGIN_ERRORS: Record<Exclude<LoginResult, { ok: true }>['reason'], string> = {
  'invalid-credentials': 'Usuario o contraseña incorrectos.',
  'too-many-attempts': 'Demasiados intentos. Espera unos minutos e inténtalo de nuevo.',
  unavailable: 'El servicio no está disponible. Inténtalo más tarde.',
};

/** Only internal paths: prevents open redirects through ?returnUrl=. */
export function safeReturnUrl(value: string | null): string {
  return value?.startsWith('/') && !value.startsWith('//') ? value : DEFAULT_REDIRECT;
}

/**
 * Login feature host: embeds `./Login` and `./PasswordRecovery` of mfe-login,
 * sets their inputs and decides on their outputs (authenticate through the BFF, navigate).
 */
@Component({
  selector: 'app-authentication-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, MatCardModule, MatIconModule, MatProgressSpinnerModule],
  templateUrl: './authenticationPage.component.html',
  styleUrl: './authenticationPage.component.scss',
})
export class AuthenticationPageComponent {
  private readonly remoteFeatures = inject(RemoteFeatureService);
  private readonly authentication = inject(AuthenticationService);
  private readonly reloadPage = inject(RELOAD_PAGE);
  private readonly router = inject(Router);
  private readonly returnUrl = safeReturnUrl(inject(ActivatedRoute).snapshot.queryParamMap.get('returnUrl'));
  private readonly outlet = viewChild('featureOutlet', { read: ViewContainerRef });

  protected readonly user = this.authentication.user;
  protected readonly view = signal<AuthenticationView>('login');
  protected readonly remoteState = signal<RemoteState>('loading');

  /** Prevents a slow load from replacing a more recent one (e.g. switching views quickly). */
  private renderId = 0;

  constructor() {
    effect(() => {
      const outlet = this.outlet();
      const view = this.view();
      if (outlet) {
        untracked(() => void this.render(outlet, view));
      }
    });

    // With an open session (just opened or restored) the login is left
    effect(() => {
      if (this.user()) {
        untracked(() => void this.router.navigateByUrl(this.returnUrl));
      }
    });
  }

  protected retry(): void {
    this.reloadPage();
  }

  private async render(outlet: ViewContainerRef, view: AuthenticationView): Promise<void> {
    const renderId = ++this.renderId;
    this.remoteState.set('loading');
    outlet.clear();

    try {
      if (view === 'login') {
        const { exposedModule, exportName } = LOGIN_REMOTE_MODULES.login;
        const component = await this.remoteFeatures.load<LoginFeatureContract>(LOGIN_REMOTE_NAME, exposedModule, exportName);
        if (renderId !== this.renderId) return;
        this.wireLogin(outlet.createComponent(component));
      } else {
        const { exposedModule, exportName } = LOGIN_REMOTE_MODULES.passwordRecovery;
        const component = await this.remoteFeatures.load<PasswordRecoveryFeatureContract>(
          LOGIN_REMOTE_NAME,
          exposedModule,
          exportName,
        );
        if (renderId !== this.renderId) return;
        this.wirePasswordRecovery(outlet.createComponent(component));
      }
      this.remoteState.set('ready');
    } catch (error) {
      if (renderId !== this.renderId) return;
      console.error(error);
      this.remoteState.set('error');
    }
  }

  private wireLogin(ref: ComponentRef<LoginFeatureContract>): void {
    ref.instance.forgotPassword.subscribe(() => this.view.set('password-recovery'));
    ref.instance.loginSubmit.subscribe((credentials) => void this.login(ref, credentials));
  }

  private wirePasswordRecovery(ref: ComponentRef<PasswordRecoveryFeatureContract>): void {
    ref.instance.backToLogin.subscribe(() => this.view.set('login'));
    ref.instance.passwordResetSubmit.subscribe((request) => void this.requestPasswordReset(ref, request));
  }

  private async login(ref: ComponentRef<LoginFeatureContract>, credentials: LoginCredentials): Promise<void> {
    ref.setInput('errorMessage', '');
    ref.setInput('loading', true);

    // The credentials object is only passed to the BFF call: never stored, logged or shared
    const result = await this.authentication.login(credentials);

    // On success the session effect navigates to returnUrl
    if (!result.ok) {
      ref.setInput('loading', false);
      ref.setInput('errorMessage', LOGIN_ERRORS[result.reason]);
    }
  }

  private async requestPasswordReset(
    ref: ComponentRef<PasswordRecoveryFeatureContract>,
    request: PasswordResetRequest,
  ): Promise<void> {
    ref.setInput('errorMessage', '');
    ref.setInput('loading', true);

    const sent = await this.authentication.requestPasswordReset(request);

    ref.setInput('loading', false);
    if (sent) {
      ref.setInput('sent', true);
    } else {
      ref.setInput('errorMessage', LOGIN_ERRORS.unavailable);
    }
  }
}
