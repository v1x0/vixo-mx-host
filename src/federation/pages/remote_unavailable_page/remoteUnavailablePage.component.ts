import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RELOAD_PAGE } from '../../loader';

@Component({
  selector: 'app-remote-unavailable-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './remoteUnavailablePage.component.html',
  styleUrl: './remoteUnavailablePage.component.scss',
})
export class RemoteUnavailablePageComponent {
  private readonly reloadPage = inject(RELOAD_PAGE);

  protected readonly mfeTitle: string = inject(ActivatedRoute).snapshot.data['mfeTitle'] ?? 'La aplicación';

  protected retry(): void {
    this.reloadPage();
  }
}
