import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  AuthenticationService,
  SessionUser,
} from '../../../authentication/services/authentication_service/authenticationService.service';
import { MFE_REGISTRY, MfeRegistryEntry } from '../../../federation/registry';
import { NavigationService } from './navigationService.service';

const entry = (path: string, roles: MfeRegistryEntry['roles']): MfeRegistryEntry => ({
  remoteName: `${path}-mfe`,
  exposedModule: './Routes',
  path,
  title: path.toUpperCase(),
  icon: 'apps',
  roles,
});

describe('NavigationService', () => {
  const user = signal<SessionUser | null>(null);
  let service: NavigationService;

  beforeEach(() => {
    user.set(null);
    TestBed.configureTestingModule({
      providers: [
        { provide: AuthenticationService, useValue: { user } },
        {
          provide: MFE_REGISTRY,
          useValue: [entry('customers', ['Administrator']), entry('reports', ['Administrator', 'Viewer']), entry('help', [])],
        },
      ],
    });
    service = TestBed.inject(NavigationService);
  });

  it('should be empty without a session', () => {
    expect(service.menu()).toEqual([]);
  });

  it('should only list the MFE the user can access', () => {
    user.set({ username: 'dreyes', roles: ['Viewer'] });

    expect(service.menu().map((item) => item.path)).toEqual(['/reports', '/help']);
  });

  it('should update when the session changes', () => {
    user.set({ username: 'admin', roles: ['Administrator'] });
    expect(service.menu()).toHaveLength(3);

    user.set(null);
    expect(service.menu()).toEqual([]);
  });
});
