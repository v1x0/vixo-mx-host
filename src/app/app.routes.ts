import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: 'wallet-view',
    loadChildren: () =>
      loadRemoteModule({
        //remoteEntry: 'http://localhost:4201/remoteEntry.json',
        remoteName: 'walletApp',
        exposedModule: './routes' // Name of the exposed module in the remote
      }).then(m => m.routes) // Assuming remote exposes a 'remoteRoutes' array
  },];
