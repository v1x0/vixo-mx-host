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
    // Configuramos el tema aquí, cuando el componente ya está en fase de ejecución
    // Esto evita el error "Should be run in update mode"
    this.primeng.theme.update(current => ({
      ...current,
      preset: Aura,
      options: {
        ...current?.options,
        prefix: 'p-resume'
      }
    }));
    this.cdr.detectChanges();
  }
}