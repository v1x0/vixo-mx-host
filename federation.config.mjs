import {
  withNativeFederation,
  fromPackageJson,
} from '@angular-architects/native-federation/config';

export default withNativeFederation({
  name: 'vixo-mx-host',

  // The shell is a dynamic host: it exposes nothing

  shared: fromPackageJson({
    singleton: true,
    strictVersion: true,
    requiredVersion: 'auto',
    build: 'package',
  })
    .patch(['@angular/*'], { includeSecondaries: { keepAll: true } })
    .get(),

  skip: [
    'rxjs/ajax', 'rxjs/fetch', 'rxjs/testing', 'rxjs/webSocket',
    // Legacy animations: require @angular/animations, which Material no longer uses
    '@angular/platform-browser/animations',
    '@angular/platform-browser/animations/async',
    // Node-only entry points (schematics) and testing: never shared in the browser
    (pkg) => /^@angular\/(cdk|material)\/(schematics|testing)/.test(pkg),
    // JIT compiler: the application is compiled AOT
    '@angular/compiler',
  ],

  // Please read our docs about configuring native federation:
  // https://native-federation.com/docs/v4/angular-adapter/configuration/

  features: {
    // The shell must share everything its remotes may need, even if it does not use it
    // (e.g. @angular/forms for Material forms in remotes)
    ignoreUnusedDeps: false,
    denseChunking: true,
    denseExternals: true,
    strictImports: false,
  },
});
