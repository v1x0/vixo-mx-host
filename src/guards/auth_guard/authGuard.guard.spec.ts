import { TestBed } from '@angular/core/testing';
import { Route, Router, UrlSegment, UrlTree, provideRouter } from '@angular/router';
import { AuthorizationService } from '../../authorization/services/authorization_service/authorizationService.service';
import { authGuard } from './authGuard.guard';

describe('authGuard', () => {
  let isAuthenticated: boolean;

  const run = () =>
    TestBed.runInInjectionContext(() =>
      authGuard(
        {} as Route,
        [new UrlSegment('customers', {}), new UrlSegment('c-1', {})],
        {} as Parameters<typeof authGuard>[2],
      ),
    );

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter([]),
        { provide: AuthorizationService, useValue: { isAuthenticated: () => isAuthenticated } },
      ],
    });
  });

  it('should allow navigation with a session', () => {
    isAuthenticated = true;

    expect(run()).toBe(true);
  });

  it('should redirect to the login keeping the requested url', () => {
    isAuthenticated = false;

    const result = run() as UrlTree;

    expect(TestBed.inject(Router).serializeUrl(result)).toBe('/auth?returnUrl=%2Fcustomers%2Fc-1');
  });
});
