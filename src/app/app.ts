/// src/app/app.ts (HOST)
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true
})
export class App implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit() {
    console.log('Shell corriendo en producción de forma limpia y optimizada.');
  }

  wallet() { this.router.navigate(['/wallet']); }
  resume() { this.router.navigate(['/resume']); }
}
