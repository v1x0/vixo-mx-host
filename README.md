# VixoMxHost

Shell (integrator) of the Vixo MX platform: an Angular + Native Federation **dynamic host** that integrates feature MFEs and component libraries, authenticates through the BFF and shares the platform contracts (`@vixo/platform-contracts`). It exposes nothing.

## UI libraries

- The shell UI (layout, menu, home, error pages) uses **Angular Material**.
- **PrimeNG** is shared as a singleton only for the feature MFEs that use it (wallet, resume). The shell configures it once (`providePrimeNG` in `app.config.ts`); features never change the theme.

## Configuration per environment

The same build works in every environment. At startup the shell reads:

| File | Content |
|---|---|
| `config/federation.manifest.json` | Remote name → `remoteEntry.json` URL (feature MFEs and the component libraries they use) |
| `config/mfe.registry.json` | Route-based feature MFEs: path, title, icon and roles |

- Development: `config/development/` (copied by `ng serve` only).
- Production: published by the deployment under `/config/` (`config/production/`, see `deploy.sh`).

## Running locally

| Process | Port | Command |
|---|---|---|
| Mock BFF (development only) | 4300 | `npm run mock-bff` |
| `mfe-login` | 4202 | `npm start` in the mfe-login project |
| `libreria-personal` (optional; mfe-login falls back to Material inputs) | 4201 | `npm start` in the library project |
| Shell | 4200 | `npm start` |

The dev server proxies `/bff` to the mock BFF (`proxy.conf.json`), so the session cookie is same-origin. The test users are defined in `mock-bff/server.mjs` and are valid only there.

Never run `ng build` while the dev server is running, and restart it after changing `federation.config.mjs`.

## Tests

```bash
npm test -- --watch=false
```

Includes the router integration test: an unauthorized navigation never downloads the feature MFE.

## Adding a route-based feature MFE

1. Add its `remoteEntry.json` URL to `config/<environment>/federation.manifest.json`.
2. Add its entry to `config/<environment>/mfe.registry.json`. No shell code changes.
