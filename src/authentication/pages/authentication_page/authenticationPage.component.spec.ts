import { Component, input, output, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router, convertToParamMap, provideRouter } from '@angular/router';
import { LoginCredentials, PasswordResetRequest } from '../../../federation/contracts';
import { RELOAD_PAGE } from '../../../federation/loader';
import { RemoteFeatureService } from '../../../federation/services/remote_feature_service/remoteFeatureService.service';
import {
  AuthenticationService,
  LoginResult,
  SessionUser,
} from '../../services/authentication_service/authenticationService.service';
import { AuthenticationPageComponent } from './authenticationPage.component';

const CREDENTIALS: LoginCredentials = { username: 'dreyes', password: 'x', rememberMe: false };

class FakeAuthenticationService {
  readonly user = signal<SessionUser | null>(null);
  login = vi.fn<(credentials: LoginCredentials) => Promise<LoginResult>>();
  requestPasswordReset = vi.fn<(request: PasswordResetRequest) => Promise<boolean>>();
}

// Doubles of the hosted features: same inputs and outputs as their contracts (mfe-login CONTRACT.md)
@Component({ selector: 'fake-login', template: 'login' })
class FakeLoginComponent {
  readonly loading = input(false);
  readonly errorMessage = input('');
  readonly loginSubmit = output<LoginCredentials>();
  readonly forgotPassword = output<void>();
}

@Component({ selector: 'fake-password-recovery', template: 'recovery' })
class FakePasswordRecoveryComponent {
  readonly loading = input(false);
  readonly errorMessage = input('');
  readonly sent = input(false);
  readonly passwordResetSubmit = output<PasswordResetRequest>();
  readonly backToLogin = output<void>();
}

describe('AuthenticationPageComponent', () => {
  let fixture: ComponentFixture<AuthenticationPageComponent>;
  let element: HTMLElement;
  let load: ReturnType<typeof vi.fn>;
  let authentication: FakeAuthenticationService;
  let reloadPage: ReturnType<typeof vi.fn>;
  let queryParams: Record<string, string>;
  let navigateByUrl: ReturnType<typeof vi.spyOn>;

  const settle = async () => {
    // Lets the async remote load and the following render resolve
    for (let i = 0; i < 3; i++) {
      await fixture.whenStable();
    }
  };

  const createPage = async () => {
    fixture = TestBed.createComponent(AuthenticationPageComponent);
    element = fixture.nativeElement;
    await settle();
  };

  const feature = <T>(type: new (...args: never[]) => T): T => {
    const node = fixture.debugElement.query((de) => de.componentInstance instanceof type);
    return node?.componentInstance as T;
  };

  beforeEach(async () => {
    load = vi.fn((_remote: string, exposedModule: string) =>
      Promise.resolve(exposedModule === './Login' ? FakeLoginComponent : FakePasswordRecoveryComponent),
    );
    authentication = new FakeAuthenticationService();
    reloadPage = vi.fn();
    queryParams = {};

    await TestBed.configureTestingModule({
      imports: [AuthenticationPageComponent],
      providers: [
        { provide: RemoteFeatureService, useValue: { load } },
        { provide: AuthenticationService, useValue: authentication },
        { provide: RELOAD_PAGE, useValue: reloadPage },
        provideRouter([]),
        {
          provide: ActivatedRoute,
          // Getter: each page reads the query params current when it is created
          useValue: {
            get snapshot() {
              return { queryParamMap: convertToParamMap(queryParams) };
            },
          },
        },
      ],
    }).compileComponents();

    navigateByUrl = vi.spyOn(TestBed.inject(Router), 'navigateByUrl').mockResolvedValue(true);
    await createPage();
  });

  it('should host ./Login of mfe-login by default', () => {
    expect(load).toHaveBeenCalledWith('mfe-login', './Login', 'LoginComponent');
    expect(element.querySelector('fake-login')).toBeTruthy();
  });

  it('should switch between login and password recovery on the feature outputs', async () => {
    feature(FakeLoginComponent).forgotPassword.emit();
    await settle();

    expect(load).toHaveBeenCalledWith('mfe-login', './PasswordRecovery', 'PasswordRecoveryComponent');
    expect(element.querySelector('fake-password-recovery')).toBeTruthy();
    expect(element.querySelector('fake-login')).toBeNull();

    feature(FakePasswordRecoveryComponent).backToLogin.emit();
    await settle();

    expect(element.querySelector('fake-login')).toBeTruthy();
  });

  it('should authenticate through the BFF and go to returnUrl once the session opens', async () => {
    authentication.login.mockImplementation(async () => {
      authentication.user.set({ username: 'dreyes', roles: ['Viewer'] });
      return { ok: true };
    });

    const login = feature(FakeLoginComponent);
    login.loginSubmit.emit(CREDENTIALS);
    expect(login.loading()).toBe(true);
    await settle();

    expect(authentication.login).toHaveBeenCalledWith(CREDENTIALS);
    expect(navigateByUrl).toHaveBeenCalledWith('/home');
  });

  it.each([
    ['invalid-credentials', 'Usuario o contraseña incorrectos.'],
    ['too-many-attempts', 'Demasiados intentos'],
    ['unavailable', 'El servicio no está disponible'],
  ] as const)('should show a generic error when login fails with %s', async (reason, message) => {
    authentication.login.mockResolvedValue({ ok: false, reason });

    const login = feature(FakeLoginComponent);
    login.loginSubmit.emit(CREDENTIALS);
    await settle();

    expect(login.loading()).toBe(false);
    expect(login.errorMessage()).toContain(message);
    expect(navigateByUrl).not.toHaveBeenCalled();
  });

  it('should return to the requested url and ignore external ones (open redirect)', async () => {
    for (const [returnUrl, expected] of [
      ['/wallet/movements', '/wallet/movements'],
      ['https://evil.example', '/home'],
      ['//evil.example', '/home'],
    ]) {
      navigateByUrl.mockClear();
      authentication.user.set(null);
      queryParams = { returnUrl };
      await createPage();

      authentication.user.set({ username: 'dreyes', roles: ['Viewer'] });
      await settle();

      expect(navigateByUrl).toHaveBeenCalledWith(expected);
    }
  });

  it('should mark the password recovery as sent, or show an error when the BFF fails', async () => {
    feature(FakeLoginComponent).forgotPassword.emit();
    await settle();
    const recovery = feature(FakePasswordRecoveryComponent);

    authentication.requestPasswordReset.mockResolvedValueOnce(false);
    recovery.passwordResetSubmit.emit({ email: 'dreyes@veritran.com' });
    await settle();
    expect(recovery.sent()).toBe(false);
    expect(recovery.errorMessage()).toContain('no está disponible');

    authentication.requestPasswordReset.mockResolvedValueOnce(true);
    recovery.passwordResetSubmit.emit({ email: 'dreyes@veritran.com' });
    await settle();
    expect(recovery.loading()).toBe(false);
    expect(recovery.sent()).toBe(true);
  });

  it('should leave the login right away when a session already exists', async () => {
    authentication.user.set({ username: 'dreyes', roles: ['Viewer'] });
    await createPage();

    expect(navigateByUrl).toHaveBeenCalledWith('/home');
    expect(element.querySelector('fake-login')).toBeNull();
  });

  it('should show the unavailable message with retry when mfe-login cannot be loaded', async () => {
    load.mockRejectedValueOnce(new Error('Failed to fetch'));
    vi.spyOn(console, 'error').mockImplementation(() => undefined);
    await createPage();

    expect(element.querySelector('[role="alert"]')?.textContent).toContain('no está disponible temporalmente');
    expect(element.querySelector('form')).toBeNull();

    (element.querySelector('.authentication__retry') as HTMLButtonElement).click();

    // The module loader caches the failure by URL: retrying reloads the page
    expect(reloadPage).toHaveBeenCalledTimes(1);
  });
});
