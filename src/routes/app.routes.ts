import { inject } from '@angular/core';
import { Route, Routes } from '@angular/router';
import { MfeRegistryEntry } from '../federation/registry';
import { RemoteRoutesService } from '../federation/services/remote_routes_service/remoteRoutesService.service';
import { authGuard } from '../guards/auth_guard/authGuard.guard';
import { roleGuard } from '../guards/role_guard/roleGuard.guard';
import { APP_NAME, MainLayoutComponent } from '../layouts/main_layout';

/** Top-level routes belong to the shell; each route-based feature owns everything below its path. */
export function buildRoutes(registry: readonly MfeRegistryEntry[]): Routes {
  return [
    {
      path: '',
      component: MainLayoutComponent,
      children: [
        {
          path: 'auth',
          title: `Iniciar sesión · ${APP_NAME}`,
          loadComponent: () =>
            import('../authentication/pages/authentication_page').then((m) => m.AuthenticationPageComponent),
        },
        {
          path: 'home',
          title: `Inicio · ${APP_NAME}`,
          canMatch: [authGuard],
          loadComponent: () => import('../navigation/pages/home_page').then((m) => m.HomePageComponent),
        },
        {
          path: 'forbidden',
          title: `Acceso denegado · ${APP_NAME}`,
          canMatch: [authGuard],
          loadComponent: () =>
            import('../authorization/pages/forbidden_page').then((m) => m.ForbiddenPageComponent),
        },
        ...registry.map(toFeatureRoute),
        { path: '', pathMatch: 'full', redirectTo: 'home' },
      ],
    },
    { path: '**', redirectTo: '' },
  ];
}

function toFeatureRoute(entry: MfeRegistryEntry): Route {
  return {
    path: entry.path,
    title: `${entry.title} · ${APP_NAME}`,
    canMatch: [authGuard, roleGuard],
    data: { roles: entry.roles },
    loadChildren: () => inject(RemoteRoutesService).loadRoutes(entry),
  };
}
