import { initFederation } from '@angular-architects/native-federation';

initFederation('config/federation.manifest.json')
  // If federation fails, the shell boots anyway and remote loading rejects with a clear error
  .catch((err) => {
    console.error(err);
    return null;
  })
  .then((federation) => import('./bootstrap').then((m) => m.bootstrap(federation)))
  .catch((err) => console.error(err));
