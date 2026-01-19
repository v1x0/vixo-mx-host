import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true
})
export class App {
  protected readonly title = signal('vixo-mx-host');
  constructor(private readonly router: Router, private readonly cdr: ChangeDetectorRef) {}
  changeRouter() {
    this.router.navigate(['/wallet-view']);
  }
}
