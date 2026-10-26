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
    // Theme presets ('@primeuix/themes/aura') are exported through a "./*" wildcard
    .patch(['@primeuix/themes'], { includeSecondaries: { keepAll: true, resolveGlob: true } })
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
    // PrimeNG entry points that need optional peers the shell does not install (chart.js, quill)
    'primeng/chart',
    'primeng/editor',
  ],

  // Please read our docs about configuring native federation:
  // https://native-federation.com/docs/v4/angular-adapter/configuration/

  features: {
    // The shell must share everything its remotes may need, even if it does not use it
    // (e.g. PrimeNG for wallet and resume, @angular/forms for Material forms in remotes)
    ignoreUnusedDeps: false,
    denseChunking: true,
    denseExternals: true,
    strictImports: false,
  },
});
