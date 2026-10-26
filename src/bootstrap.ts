import { mergeApplicationConfig } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import type { NativeFederationResult } from '@angular-architects/native-federation';
import { App } from './app/app';
import { appConfig } from './app/app.config';
import { REMOTE_MODULE_LOADER, RemoteModuleLoader } from './federation/loader';
import { MFE_REGISTRY, loadMfeRegistry } from './federation/registry';
import { buildRoutes } from './routes/app.routes';

/** Published by the deployment under /config/ for each environment (development: config/development). */
const MFE_REGISTRY_URL = 'config/mfe.registry.json';

export async function bootstrap(federation: NativeFederationResult | null) {
  const loader: RemoteModuleLoader = federation
    ? (remoteName, exposedModule) => federation.loadRemoteModule(remoteName, exposedModule)
    : () => Promise.reject(new Error('Native Federation could not be initialized'));

  const registry = await loadMfeRegistry(MFE_REGISTRY_URL);

  const config = mergeApplicationConfig(appConfig, {
    providers: [
      { provide: REMOTE_MODULE_LOADER, useValue: loader },
      { provide: MFE_REGISTRY, useValue: registry },
      provideRouter(buildRoutes(registry)),
    ],
  });

  return bootstrapApplication(App, config).catch((err) => console.error(err));
}
