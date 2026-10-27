import { DOCUMENT, InjectionToken, inject } from '@angular/core';

export type RemoteModuleLoader = (remoteName: string, exposedModule: string) => Promise<unknown>;

/** The `loadRemoteModule` returned by `initFederation`; provided in bootstrap.ts. */
export const REMOTE_MODULE_LOADER = new InjectionToken<RemoteModuleLoader>('REMOTE_MODULE_LOADER');

/**
 * Retrying a failed remote reloads the page: the module loader (es-module-shims) caches failed
 * imports by URL, so importing the same remote again fails even when it is back.
 */
export const RELOAD_PAGE = new InjectionToken<() => void>('RELOAD_PAGE', {
  providedIn: 'root',
  factory: () => {
    const document = inject(DOCUMENT);
    return () => document.location.reload();
  },
});
