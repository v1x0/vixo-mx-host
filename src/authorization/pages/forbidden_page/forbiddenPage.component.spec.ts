import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ForbiddenPageComponent } from './forbiddenPage.component';

describe('ForbiddenPageComponent', () => {
  it('should explain the denial and link to home', async () => {
    await TestBed.configureTestingModule({
      imports: [ForbiddenPageComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    const fixture = TestBed.createComponent(ForbiddenPageComponent);
    await fixture.whenStable();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('[role="alert"] h1')?.textContent).toContain('Acceso denegado');
    expect(element.querySelector('a')?.getAttribute('href')).toBe('/home');
  });
});
