import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import {
  AuthenticationService,
  SessionUser,
} from '../../../authentication/services/authentication_service/authenticationService.service';
import { MenuItem, NavigationService } from '../../services/navigation_service/navigationService.service';
import { HomePageComponent } from './homePage.component';

describe('HomePageComponent', () => {
  let fixture: ComponentFixture<HomePageComponent>;
  let element: HTMLElement;
  const user = signal<SessionUser | null>({ username: 'admin', roles: ['Administrator'] });
  const menu = signal<MenuItem[]>([]);

  beforeEach(async () => {
    menu.set([]);
    await TestBed.configureTestingModule({
      imports: [HomePageComponent],
      providers: [
        provideRouter([]),
        { provide: AuthenticationService, useValue: { user } },
        { provide: NavigationService, useValue: { menu } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    element = fixture.nativeElement;
    await fixture.whenStable();
  });

  it('should greet the user and show the roles', () => {
    expect(element.querySelector('h1')?.textContent).toContain('Hola, admin');
    expect(element.textContent).toContain('Roles: Administrator');
  });

  it('should explain when there are no applications', () => {
    expect(element.querySelector('[role="status"]')?.textContent).toContain('No tienes aplicaciones');
  });

  it('should link to every accessible application', async () => {
    menu.set([{ path: '/customers', title: 'Clientes', icon: 'groups' }]);
    await fixture.whenStable();

    const link = element.querySelector('a.home__app') as HTMLAnchorElement;
    expect(link.getAttribute('href')).toBe('/customers');
    expect(link.textContent).toContain('Clientes');
  });
});
