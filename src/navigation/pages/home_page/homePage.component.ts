import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AuthenticationService } from '../../../authentication/services/authentication_service/authenticationService.service';
import { NavigationService } from '../../services/navigation_service/navigationService.service';

@Component({
  selector: 'app-home-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, MatCardModule, MatIconModule],
  templateUrl: './homePage.component.html',
  styleUrl: './homePage.component.scss',
})
export class HomePageComponent {
  protected readonly user = inject(AuthenticationService).user;
  protected readonly menu = inject(NavigationService).menu;
}
