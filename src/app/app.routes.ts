/// src/app/app.routes.ts (HOST)
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
    path: '',
    pathMatch: 'full'
  }
];
