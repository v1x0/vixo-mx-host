import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PLATFORM_SESSION } from '@vixo/platform-contracts';
import { AuthenticationService } from '../authentication/services/authentication_service/authenticationService.service';
import { providePlatformContracts } from './index';

describe('providePlatformContracts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting(), providePlatformContracts()],
    });
  });

  it('should share the session as the same read-only instance the shell owns', () => {
    const session = TestBed.inject(PLATFORM_SESSION);

    expect(session).toBe(TestBed.inject(AuthenticationService));
    expect(session.user()).toBeNull();
    expect(session.hasRole('Viewer')).toBe(false);
  });
});
