import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AuthenticationService, BFF_AUTH_URL } from './authenticationService.service';

const CREDENTIALS = { username: 'dreyes', password: 'secret', rememberMe: false };
const SESSION = { username: 'dreyes', roles: ['Manager', 'SuperUser'], csrfToken: 'csrf-1' };

describe('AuthenticationService', () => {
  let service: AuthenticationService;
  let http: HttpTestingController;

  const flushSession = (body: object = SESSION) =>
    http.expectOne({ method: 'GET', url: `${BFF_AUTH_URL}/session` }).flush(body);

  const settle = () => new Promise((resolve) => setTimeout(resolve));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(AuthenticationService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('should restore the session keeping only known roles', async () => {
    const restore = service.restoreSession();
    flushSession();
    await restore;

    expect(service.user()).toEqual({ username: 'dreyes', roles: ['Manager'] });
    expect(service.csrfToken()).toBe('csrf-1');
    expect(service.hasRole('Administrator', 'Manager')).toBe(true);
    expect(service.hasRole('Viewer')).toBe(false);
  });

  it('should have no session when the BFF answers 401 or is unavailable', async () => {
    let restore = service.restoreSession();
    http.expectOne(`${BFF_AUTH_URL}/session`).flush(null, { status: 401, statusText: 'Unauthorized' });
    await restore;
    expect(service.user()).toBeNull();

    restore = service.restoreSession();
    http.expectOne(`${BFF_AUTH_URL}/session`).error(new ProgressEvent('error'));
    await restore;
    expect(service.user()).toBeNull();
  });

  it('should send the credentials only to the BFF login and open the session', async () => {
    const login = service.login(CREDENTIALS);
    const request = http.expectOne({ method: 'POST', url: `${BFF_AUTH_URL}/login` });
    expect(request.request.body).toEqual(CREDENTIALS);
    request.flush(null, { status: 204, statusText: 'No Content' });
    await settle();
    flushSession();

    expect(await login).toEqual({ ok: true });
    expect(service.user()).toEqual({ username: 'dreyes', roles: ['Manager'] });
  });

  it.each([
    [401, 'invalid-credentials'],
    [429, 'too-many-attempts'],
    [503, 'unavailable'],
  ])('should map a %s login answer to %s', async (status, reason) => {
    const login = service.login(CREDENTIALS);
    http.expectOne(`${BFF_AUTH_URL}/login`).flush(null, { status, statusText: 'Error' });

    expect(await login).toEqual({ ok: false, reason });
    expect(service.user()).toBeNull();
  });

  it('should report whether the password reset request reached the BFF', async () => {
    let reset = service.requestPasswordReset({ email: 'dreyes@veritran.com' });
    http.expectOne({ method: 'POST', url: `${BFF_AUTH_URL}/password-reset` }).flush(null, { status: 202, statusText: 'Accepted' });
    expect(await reset).toBe(true);

    reset = service.requestPasswordReset({ email: 'dreyes@veritran.com' });
    http.expectOne(`${BFF_AUTH_URL}/password-reset`).error(new ProgressEvent('error'));
    expect(await reset).toBe(false);
  });

  it('should close the session on logout even if the BFF fails', async () => {
    const restore = service.restoreSession();
    flushSession();
    await restore;

    const logout = service.logout();
    http.expectOne({ method: 'POST', url: `${BFF_AUTH_URL}/logout` }).error(new ProgressEvent('error'));
    await logout;

    expect(service.user()).toBeNull();
    expect(service.csrfToken()).toBeNull();
  });
});
