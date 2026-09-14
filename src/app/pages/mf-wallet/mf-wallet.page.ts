import { ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import Aura from '@primeuix/themes/aura';
import { PrimeNG } from "primeng/config";

@Component({
  standalone: true,
  imports: [RouterOutlet],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `<h1>Page wrapper</h1><router-outlet></router-outlet>`
})
export class MFResumePage {
    // Inyectamos el servicio global de PrimeNG
  // private primeng = inject(PrimeNG);
  constructor(private readonly primeng: PrimeNG, private readonly cdr: ChangeDetectorRef) {}

  ngOnInit() {
    
  }
}