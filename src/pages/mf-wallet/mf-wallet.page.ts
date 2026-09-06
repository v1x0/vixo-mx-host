import { ChangeDetectorRef, Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import Aura from '@primeuix/themes/aura';
import { PrimeNG } from "primeng/config";

@Component({
  standalone: true,
  imports: [RouterOutlet],
  template: `<h1>Page wrapper</h1><router-outlet></router-outlet>`
})
export class MFResumePage {
    // Inyectamos el servicio global de PrimeNG
  // private primeng = inject(PrimeNG);
  constructor(private readonly primeng: PrimeNG, private readonly cdr: ChangeDetectorRef) {}

  ngOnInit() {
    setTimeout(() => {
      this.primeng.theme.update(config => ({
        ...config,
        theme: {
          preset: Aura,
          options: {
            // El prefijo debe ser consistente para que los componentes encuentren las variables
            prefix: 'p-resume'
          }
        }
      }));
      this.cdr.markForCheck();
    }, 0);
  }
}