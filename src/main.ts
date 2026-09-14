import { initFederation } from '@angular-architects/native-federation';
import { manifest } from './federation.manifest';

initFederation(manifest)
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
