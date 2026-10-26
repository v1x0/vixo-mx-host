import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import {
  AuthenticationService,
  SessionUser,
} from '../../authentication/services/authentication_service/authenticationService.service';
import { MenuItem, NavigationService } from '../../navigation/services/navigation_service/navigationService.service';
import { MainLayoutComponent } from './mainLayout.component';

describe('MainLayoutComponent', () => {
  let fixture: ComponentFixture<MainLayoutComponent>;
  let element: HTMLElement;
  const user = signal<SessionUser | null>(null);
  const menu = signal<MenuItem[]>([]);
  const logout = vi.fn(() => user.set(null));

  beforeEach(async () => {
    user.set(null);
    menu.set([]);
    logout.mockClear();

    await TestBed.configureTestingModule({
      imports: [MainLayoutComponent],
      providers: [
        provideRouter([]),
        { provide: AuthenticationService, useValue: { user, logout } },
        { provide: NavigationService, useValue: { menu } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MainLayoutComponent);
    element = fixture.nativeElement;
    await fixture.whenStable();
  });

  it('should render the toolbar and the router outlet', () => {
    expect(element.querySelector('mat-toolbar')?.textContent).toContain('Vixo MX');
    expect(element.querySelector('router-outlet')).toBeTruthy();
  });

  it('should not show navigation or session actions without a user', () => {
    expect(element.querySelector('nav')).toBeNull();
    expect(element.querySelector('.layout__logout')).toBeNull();
  });

  it('should show the user, roles and the authorized menu', async () => {
    user.set({ username: 'admin', roles: ['Administrator'] });
    menu.set([{ path: '/customers', title: 'Clientes', icon: 'groups' }]);
    await fixture.whenStable();

    expect(element.querySelector('.layout__user')?.textContent).toContain('admin · Administrator');
    const links = [...element.querySelectorAll('nav a')].map((a) => a.getAttribute('href'));
    expect(links).toEqual(['/home', '/customers']);
  });

  it('should log out and go to the login', async () => {
    const navigate = vi.spyOn(TestBed.inject(Router), 'navigateByUrl').mockResolvedValue(true);
    user.set({ username: 'admin', roles: ['Administrator'] });
    await fixture.whenStable();

    (element.querySelector('.layout__logout') as HTMLButtonElement).click();
    await fixture.whenStable();

    expect(logout).toHaveBeenCalled();
    expect(navigate).toHaveBeenCalledWith('/auth');
    expect(element.querySelector('.layout__logout')).toBeNull();
  });
});
