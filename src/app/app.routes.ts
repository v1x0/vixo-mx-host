import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { MFResumePage } from './pages/mf-resume/mf-resume.page';

export const routes: Routes = [{
  path: 'resume',
  component: MFResumePage,
  //loadComponent: () => import('../pages/mf-resume/mf-resume.page').then(m => m.MFResumePage),
  children: [
    {
      path: '',
      loadChildren: () =>
        loadRemoteModule({
          remoteName: 'resumeApp',
          exposedModule: './routes'
        }).then(m => m.routes)
    }
  ]
}, {
  path: 'wallet',
  loadChildren: () =>
    loadRemoteModule({
      remoteName: 'wallet-angular',
      exposedModule: './routes'
    }).then(m => m.routes)
}];
