import { Injectable, inject } from '@angular/core';
import { Routes } from '@angular/router';
import { REMOTE_MODULE_LOADER } from '../../loader';
import { MfeRegistryEntry } from '../../registry';

@Injectable({ providedIn: 'root' })
export class RemoteRoutesService {
  private readonly loadRemoteModule = inject(REMOTE_MODULE_LOADER);

  /**
   * Loads the routes a route-based feature exposes (contract: the module exports `routes`).
   * If the feature fails, resolves to a fallback route instead of breaking navigation.
   */
  async loadRoutes(entry: MfeRegistryEntry): Promise<Routes> {
    try {
      const remoteModule = (await this.loadRemoteModule(entry.remoteName, entry.exposedModule)) as {
        routes?: Routes;
      } | null;
      if (!Array.isArray(remoteModule?.routes)) {
        throw new Error(`${entry.remoteName}${entry.exposedModule.slice(1)} does not export routes`);
      }
      return remoteModule.routes;
    } catch (error) {
      console.error(error);
      return [
        {
          path: '**',
          data: { mfeTitle: entry.title },
          loadComponent: () =>
            import('../../pages/remote_unavailable_page').then((m) => m.RemoteUnavailablePageComponent),
        },
      ];
    }
  }
}
