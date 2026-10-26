import { Injectable, Type, inject } from '@angular/core';
import { REMOTE_MODULE_LOADER } from '../../loader';

/** Loads the components that component-based feature MFEs expose (e.g. `./Login`). */
@Injectable({ providedIn: 'root' })
export class RemoteFeatureService {
  private readonly loadRemoteModule = inject(REMOTE_MODULE_LOADER);

  async load<T>(remoteName: string, exposedModule: string, exportName: string): Promise<Type<T>> {
    const remoteModule = (await this.loadRemoteModule(remoteName, exposedModule)) as Record<
      string,
      Type<T> | undefined
    > | null;
    const component = remoteModule?.[exportName];
    if (!component) {
      throw new Error(`${remoteName}${exposedModule.slice(1)} does not export ${exportName}`);
    }
    return component;
  }
}
