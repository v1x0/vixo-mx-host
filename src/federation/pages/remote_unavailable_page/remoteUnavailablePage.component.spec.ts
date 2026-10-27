import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { RELOAD_PAGE } from '../../loader';
import { RemoteUnavailablePageComponent } from './remoteUnavailablePage.component';

describe('RemoteUnavailablePageComponent', () => {
  let fixture: ComponentFixture<RemoteUnavailablePageComponent>;
  let element: HTMLElement;
  const reloadPage = vi.fn();

  beforeEach(async () => {
    reloadPage.mockReset();
    await TestBed.configureTestingModule({
      imports: [RemoteUnavailablePageComponent],
      providers: [
        provideRouter([]),
        { provide: ActivatedRoute, useValue: { snapshot: { data: { mfeTitle: 'Clientes' } } } },
        { provide: RELOAD_PAGE, useValue: reloadPage },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RemoteUnavailablePageComponent);
    element = fixture.nativeElement;
    await fixture.whenStable();
  });

  it('should name the unavailable MFE', () => {
    expect(element.querySelector('h1')?.textContent).toContain('Clientes no está disponible');
  });

  it('should reload the page on retry', () => {
    (element.querySelector('.unavailable__retry') as HTMLButtonElement).click();

    expect(reloadPage).toHaveBeenCalledTimes(1);
  });
});
