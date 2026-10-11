const { withNativeFederation, shareAll, share } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'vixo-mx-host',
  shared: shareAll({ 
    singleton: true, 
    strictVersion: true, 
    requiredVersion: 'auto',
    includeSecondaries: true
  }),

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket'
  ],

  features: {
    ignoreUnusedDeps: true,
    denseChunking: true
  }
});
