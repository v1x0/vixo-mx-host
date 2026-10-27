import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthenticationService } from '../../authentication/services/authentication_service/authenticationService.service';
import { NavigationService } from '../../navigation/services/navigation_service/navigationService.service';

export const APP_NAME = 'Vixo MX';

@Component({
  selector: 'app-main-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatButtonModule, MatIconModule, MatToolbarModule],
  templateUrl: './mainLayout.component.html',
  styleUrl: './mainLayout.component.scss',
})
export class MainLayoutComponent {
  private readonly authentication = inject(AuthenticationService);
  private readonly router = inject(Router);

  protected readonly appName = APP_NAME;
  protected readonly user = this.authentication.user;
  protected readonly menu = inject(NavigationService).menu;

  protected async logout(): Promise<void> {
    await this.authentication.logout();
    await this.router.navigateByUrl('/auth');
  }
}
