import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-mfe-auth',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div style="display: flex; justify-content: center; align-items: center; min-height: 80vh; width: 100%;">
      @if (cargado()) {
        <auth-mfe-app
          [attr.initial-route]="'/login'"
          (authSuccess)="onAuthSuccess($event)">
        </auth-mfe-app>
      } @else {
        <p>Cargando módulo de autenticación...</p>
      }
    </div>
  `,
})
export class MfeAuthPage implements OnInit {
  cargado = signal(false);

  ngOnInit() {
    if (customElements.get('auth-mfe-app')) {
      this.cargado.set(true);
      return;
    }

    const script = document.createElement('script');
    script.src = `${environment.auth_mfe.baseUrl}/${environment.auth_mfe.remoteEntry}`;
    script.onload = () => {
      this.cargado.set(true);
    };
    script.onerror = (err) => {
      console.error('Error cargando el script de React:', err);
    };
    document.body.appendChild(script);
  }

  onAuthSuccess(event: Event) {
    const customEvt = event as CustomEvent;
    console.log('✅ Evento authSuccess recibido en Angular Shell:', customEvt.detail);
  }
}