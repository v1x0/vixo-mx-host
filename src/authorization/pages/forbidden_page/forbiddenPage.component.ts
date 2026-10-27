import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-forbidden-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './forbiddenPage.component.html',
  styleUrl: './forbiddenPage.component.scss',
})
export class ForbiddenPageComponent {}
