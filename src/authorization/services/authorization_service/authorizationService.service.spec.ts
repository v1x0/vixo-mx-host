import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  AuthenticationService,
  SessionUser,
} from '../../../authentication/services/authentication_service/authenticationService.service';
import { AuthorizationService } from './authorizationService.service';

describe('AuthorizationService', () => {
  const user = signal<SessionUser | null>(null);
  let service: AuthorizationService;

  beforeEach(() => {
    user.set(null);
    TestBed.configureTestingModule({
      providers: [{ provide: AuthenticationService, useValue: { user } }],
    });
    service = TestBed.inject(AuthorizationService);
  });

  it('should deny everything without a session', () => {
    expect(service.isAuthenticated()).toBe(false);
    expect(service.canAccess()).toBe(false);
    expect(service.canAccess(['Viewer'])).toBe(false);
  });

  it('should allow routes without required roles to any signed-in user', () => {
    user.set({ username: 'dreyes', roles: ['Viewer'] });

    expect(service.isAuthenticated()).toBe(true);
    expect(service.canAccess()).toBe(true);
  });

  it('should allow access when the user has any of the required roles', () => {
    user.set({ username: 'manager', roles: ['Manager'] });

    expect(service.canAccess(['Administrator', 'Manager'])).toBe(true);
    expect(service.canAccess(['Administrator'])).toBe(false);
  });
});
