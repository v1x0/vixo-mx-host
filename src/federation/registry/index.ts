import { InjectionToken } from '@angular/core';
import type { MfeRegistryEntry } from '@vixo/platform-contracts';
import { isRole } from '../../roles';

export type { MfeRegistryEntry } from '@vixo/platform-contracts';

/** Top-level paths owned by the shell: a feature can never take them. */
export const SHELL_PATHS = ['auth', 'home', 'forbidden'] as const;

/** Catalog of route-based feature MFEs, loaded before bootstrap (shell/05-mfe-registry). */
export const MFE_REGISTRY = new InjectionToken<readonly MfeRegistryEntry[]>('MFE_REGISTRY', {
  factory: () => [],
});

export async function loadMfeRegistry(url: string, fetchFn: typeof fetch = fetch): Promise<MfeRegistryEntry[]> {
  try {
    const response = await fetchFn(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const data: unknown = await response.json();
    return Array.isArray(data) ? validEntries(data) : [];
  } catch (error) {
    // Without a registry the shell still works (authentication, home), only without features
    console.error('The MFE registry could not be loaded', error);
    return [];
  }
}

function validEntries(data: unknown[]): MfeRegistryEntry[] {
  const usedPaths = new Set<string>(SHELL_PATHS);
  return data.filter((value): value is MfeRegistryEntry => {
    if (!isValidEntry(value) || usedPaths.has(value.path)) {
      console.error('Invalid MFE registry entry dropped', value);
      return false;
    }
    usedPaths.add(value.path);
    return true;
  });
}

function isValidEntry(value: unknown): value is MfeRegistryEntry {
  const entry = value as Partial<MfeRegistryEntry> | null;
  return (
    typeof entry?.remoteName === 'string' &&
    typeof entry.exposedModule === 'string' &&
    typeof entry.path === 'string' &&
    /^[a-z0-9-]+$/.test(entry.path) &&
    typeof entry.title === 'string' &&
    typeof entry.icon === 'string' &&
    Array.isArray(entry.roles) &&
    entry.roles.every(isRole)
  );
}
