export const environment = {
  production: true,
  walletAngular: {
    baseUrl: '/v1/wallet',
    remoteEntry: 'remoteEntry.json'
  },
  componentsShared: {
    baseUrl: '/v1/shared', // 🚀 Fuerza el dominio real de producción
    remoteEntry: 'remoteEntry.json'
  },
  resumeApp: {
    baseUrl: 'https://v1x0.github.io',
    remoteEntry: 'resume-project/remoteEntry.json'
  }
};
