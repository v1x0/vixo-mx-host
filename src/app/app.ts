import { loadRemoteModule } from '@angular-architects/native-federation';
import { ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, signal } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ CommonModule, RouterOutlet, RouterModule ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true
})
export class App implements OnInit {
  protected readonly title = signal('vixo-mx-host');
  miBalanceActual = 11;
  repositorioListo = false;
  constructor(private readonly router: Router, private readonly cdr: ChangeDetectorRef) {}

  ngOnInit() {
    loadRemoteModule<any>('components-shared', './BalanceUI')
      .then(() => {
        console.log('Web Component cargado de forma remota.');
        // 🚀 ¡CLAVE!: Cuando el código remoto ya se ejecutó y registró la etiqueta, permitimos el render
        this.repositorioListo = true;
        this.cdr.detectChanges();
      })
      .catch(err => console.error('Error inyectando repositorio de componentes:', err));
  }

  wallet() {
    this.router.navigate(['/wallet-view']);
  }
  resume() {
    this.router.navigate(['/resume']);
  }
}
