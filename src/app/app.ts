import { Component, OnInit, Injector, NgZone, ChangeDetectorRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Mantiene el soporte de Web Components
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true
})
export class App implements OnInit {

  constructor(
    private injector: Injector, // 🚀 Captura el inyector principal
    private readonly router: Router,
    private zone: NgZone,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    console.log('Shell corriendo en producción de forma limpia.');
    // 🚀 LA SOLUCIÓN: Invocamos la inicialización global en el arranque de la Shell
    this.inicializarRepositorioComponentes();
  }

  inicializarRepositorioComponentes() {
    console.log('Shell descargando el repositorio central de componentes...');

    loadRemoteModule({
      remoteName: 'components-shared',
      exposedModule: './SharedModule'
    })
      .then((m: any) => {
        this.zone.run(() => {
          if (m && m.bootstrapAllCustomElements) {
            // Ejecuta la función unificada. Al usar la bandera 'inicializadoGlobal',
            // si la Shell la ejecuta primero, la Wallet la ignorará de forma segura, evitando colisiones.
            m.bootstrapAllCustomElements().then(() => {
              this.cdr.detectChanges();
            });
          }
        });
      })
      .catch(err => console.error('❌ Error registrando repositorio en la Shell:', err));
  }

  wallet() { this.router.navigate(['/wallet']); }
  resume() { this.router.navigate(['/resume']); }
}
