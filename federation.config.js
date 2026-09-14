const { withNativeFederation, shareAll, share } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'vixo-mx-host',

  // 🚀 LA SOLUCIÓN DEFINITIVA: Forzamos el empaquetado profundo de singletons para todo el package.json
  shared: shareAll({ 
    singleton: true, 
    strictVersion: true, 
    requiredVersion: 'auto',
    includeSecondaries: true // 👈 Obliga a mapear todos los sub-paquetes secundarios de Material, CDK y PrimeNG
  }),

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket'
  ],

  features: {
    ignoreUnusedDeps: true
  }
});
