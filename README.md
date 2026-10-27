# VixoMxHost

Shell (integrator) of the Vixo MX platform: an Angular + Native Federation **dynamic host** that integrates feature MFEs and component libraries, authenticates through the BFF and shares the platform contracts (`@vixo/platform-contracts`). It exposes nothing.

## UI libraries

- The shell UI (layout, menu, home, error pages) uses **Angular Material**.
- The shell does not install or share PrimeNG (PrimeUI requires a commercial license). A feature MFE that uses it brings its own copy and configures it itself.

## Configuration per environment

The same build works in every environment. At startup the shell reads:

| File | Content |
|---|---|
| `config/federation.manifest.json` | Remote name → `remoteEntry.json` URL (feature MFEs and the component libraries they use) |
| `config/mfe.registry.json` | Route-based feature MFEs: path, title, icon and roles |

- Development: `config/development/` (copied by `ng serve` only).
- Production: `config/production/`, copied into the build output as `config/` (Raspberry Pi reverse proxy paths).

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

## Raspberry Pi deployment

1. `npm run build`. The production build includes `config/production` as `config/`.
2. Copy `dist/vixo-mx-host/browser` to `proyectos/sitio_a/shell/vixo-mx-host/browser` on the Pi. The `mfe-a-shell` nginx container serves it as is.

The Pi's compose must provide, behind the reverse proxy (same origin as the shell):

| Path | Service |
|---|---|
| `/` | `mfe-a-shell` (`shell-mfe.conf` falls back to `index.html` for deep links such as `/wallet`) |
| `/bff/` | The BFF (cookie session + `X-CSRF-Token`, see `mock-bff/server.mjs` for the contract) |
| `/mfe/auth/` | `mfe-login` remote (`./Login`, `./PasswordRecovery`) |
| `/mfe/wallet/` | `walletApp` remote |
| `/mfe/shared/` | `components-shared` remote |

Changing those paths only requires editing `config/*.json` in the copied folder, no rebuild.

## Adding a route-based feature MFE

1. Add its `remoteEntry.json` URL to `config/<environment>/federation.manifest.json`.
2. Add its entry to `config/<environment>/mfe.registry.json`. No shell code changes.
