import { Injectable, computed, inject } from '@angular/core';
import { AuthorizationService } from '../../../authorization/services/authorization_service/authorizationService.service';
import { MFE_REGISTRY, MfeRegistryEntry } from '../../../federation/registry';

export interface MenuItem {
  path: string;
  title: string;
  icon: string;
}

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private readonly registry = inject(MFE_REGISTRY);
  private readonly authorization = inject(AuthorizationService);

  /** Features the current user can access; recomputed when the session changes. */
  readonly menu = computed<MenuItem[]>(() =>
    this.registry
      .filter((entry) => this.authorization.canAccess(entry.roles))
      .map((entry: MfeRegistryEntry) => ({ path: `/${entry.path}`, title: entry.title, icon: entry.icon })),
  );
}
