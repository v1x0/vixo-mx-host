import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import {
  AuthenticationService,
  SessionUser,
} from '../authentication/services/authentication_service/authenticationService.service';
import { MFE_REGISTRY, MfeRegistryEntry } from '../federation/registry';
import { REMOTE_MODULE_LOADER } from '../federation/loader';
import { RemoteRoutesService } from '../federation/services/remote_routes_service/remoteRoutesService.service';
import { authGuard } from '../guards/auth_guard/authGuard.guard';
import { roleGuard } from '../guards/role_guard/roleGuard.guard';
import { buildRoutes } from './app.routes';

const ENTRY: MfeRegistryEntry = {
  remoteName: 'customers-mfe',
  exposedModule: './Routes',
  path: 'customers',
  title: 'Clientes',
  icon: 'groups',
  roles: ['Administrator'],
};

describe('buildRoutes', () => {
  const children = (registry: MfeRegistryEntry[]) => buildRoutes(registry)[0].children ?? [];

  it('should include the shell routes', () => {
    expect(children([]).map((route) => route.path)).toEqual(['auth', 'home', 'forbidden', '']);
  });

  it('should protect home and forbidden with the session guard', () => {
    const routes = children([]);

    expect(routes.find((route) => route.path === 'home')?.canMatch).toEqual([authGuard]);
    expect(routes.find((route) => route.path === 'forbidden')?.canMatch).toEqual([authGuard]);
  });

  it('should mount each registered MFE with session and role guards', () => {
    const mfeRoute = children([ENTRY]).find((route) => route.path === 'customers');

    expect(mfeRoute?.canMatch).toEqual([authGuard, roleGuard]);
    expect(mfeRoute?.data).toEqual({ roles: ['Administrator'] });
    expect(mfeRoute?.loadChildren).toBeTypeOf('function');
  });

  describe('with the router', () => {
    const user = signal<SessionUser | null>(null);
    const loadRoutes = vi.fn().mockResolvedValue([{ path: '', component: FakeCustomerListComponent }]);

    const navigate = async (url: string) => {
      const harness = await RouterTestingHarness.create();
      await harness.navigateByUrl(url);
      return TestBed.inject(Router).url;
    };

    beforeEach(() => {
      user.set(null);
      loadRoutes.mockClear();
      TestBed.configureTestingModule({
        providers: [
          provideRouter(buildRoutes([ENTRY])),
          { provide: AuthenticationService, useValue: { user, logout: vi.fn() } },
          { provide: MFE_REGISTRY, useValue: [ENTRY] },
          { provide: RemoteRoutesService, useValue: { loadRoutes } },
          // La página de login carga su componente remoto; aquí basta con que quede pendiente
          { provide: REMOTE_MODULE_LOADER, useValue: () => new Promise(() => undefined) },
        ],
      });
    });

    it('should send anonymous users to the login without downloading the MFE', async () => {
      expect(await navigate('/customers')).toBe('/auth?returnUrl=%2Fcustomers');
      expect(loadRoutes).not.toHaveBeenCalled();
    });

    it('should deny users without the role without downloading the MFE', async () => {
      user.set({ username: 'dreyes', roles: ['Viewer'] });

      expect(await navigate('/customers')).toBe('/forbidden');
      expect(loadRoutes).not.toHaveBeenCalled();
    });

    it('should load the MFE routes for authorized users', async () => {
      user.set({ username: 'admin', roles: ['Administrator'] });

      expect(await navigate('/customers')).toBe('/customers');
      expect(loadRoutes).toHaveBeenCalledWith(ENTRY);
    });
  });
});

@Component({ template: 'clientes' })
class FakeCustomerListComponent {}
