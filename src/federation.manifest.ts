import { environment } from "./environments/environment";

export const manifest = {
  "wallet-angular": `${environment.walletAngular.baseUrl}/${environment.walletAngular.remoteEntry}`,
  "components-shared": `${environment.componentsShared.baseUrl}/${environment.componentsShared.remoteEntry}`,
  "resumeApp": `${environment.resumeApp.baseUrl}/${environment.resumeApp.remoteEntry}`
}