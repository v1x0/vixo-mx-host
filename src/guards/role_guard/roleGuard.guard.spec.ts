import { TestBed } from '@angular/core/testing';
import { Route, Router, UrlTree, provideRouter } from '@angular/router';
import { AuthorizationService } from '../../authorization/services/authorization_service/authorizationService.service';
import { Role } from '../../roles';
import { roleGuard } from './roleGuard.guard';

describe('roleGuard', () => {
  const canAccess = vi.fn<(roles: readonly Role[]) => boolean>();

  const run = (roles?: Role[]) =>
    TestBed.runInInjectionContext(() =>
      roleGuard({ data: roles ? { roles } : {} } as Route, [], {} as Parameters<typeof roleGuard>[2]),
    );

  beforeEach(() => {
    canAccess.mockReset();
    TestBed.configureTestingModule({
      providers: [provideRouter([]), { provide: AuthorizationService, useValue: { canAccess } }],
    });
  });

  it('should check the roles declared in the route data', () => {
    canAccess.mockReturnValue(true);

    expect(run(['Administrator'])).toBe(true);
    expect(canAccess).toHaveBeenCalledWith(['Administrator']);
  });

  it('should treat a route without roles as requiring only a session', () => {
    canAccess.mockReturnValue(true);

    run();

    expect(canAccess).toHaveBeenCalledWith([]);
  });

  it('should redirect to /forbidden when the user lacks the role', () => {
    canAccess.mockReturnValue(false);

    const result = run(['Administrator']) as UrlTree;

    expect(TestBed.inject(Router).serializeUrl(result)).toBe('/forbidden');
  });
});
