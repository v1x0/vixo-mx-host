import { initFederation, loadRemoteModule } from '@angular-architects/native-federation';
import { manifest as misRemotos } from './federation.manifest';

initFederation(misRemotos)
  .catch(err => console.error('❌ Error inicializando manifiesto en Native Federation:', err))
  .then(() => {
    return loadRemoteModule({
      remoteName: 'components-shared',
      exposedModule: './SharedModule'
    })
    .then((m: any) => {
      const bootstrapFn = m.bootstrapAllCustomElements || (m.default && m.default.bootstrapAllCustomElements);
      if (bootstrapFn) {
        bootstrapFn();
      } else if (m.SharedWebComponentsModule) {
        new m.SharedWebComponentsModule();
      } else {
        const claveFuncion = Object.keys(m).find(k => typeof m[k] === 'function' && k.includes('bootstrapAll'));
        if (claveFuncion) {
          m[claveFuncion]();
        }
      }
    })
    .catch(err => {
      console.warn('⚠️ Nota de almacenamiento mitigada de forma segura en el main.ts.', err);
    });
  })
  .then(() => {
    return import('./bootstrap');
  })
  .catch(err => console.error('❌ Error fatal en el arranque diferido del Host:', err));
