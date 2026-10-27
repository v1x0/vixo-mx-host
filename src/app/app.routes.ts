import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { MFResumePage } from './pages/mf-resume/mf-resume.page';

export const routes: Routes = [
  {
    path: 'resume',
    component: MFResumePage,
    children: [
      {
        path: '',
        loadChildren: () => loadRemoteModule({ remoteName: 'resumeApp', exposedModule: './routes' }).then(m => m.routes)
      }
    ]
  },
  {
    path: 'wallet',
    loadChildren: () => loadRemoteModule({ remoteName: 'wallet-angular', exposedModule: './routes' }).then(m => m.routes)
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./pages/mfe-auth/mfe-auth.page').then(m => m.MfeAuthPage),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth'
  }
];
