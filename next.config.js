module.exports = {
  experimental: {
    appDir: true,
    serverComponents: true,
    cpus: 10,
    workerThreads: true,
  },
  // productionBrowserSourceMaps: true,
  webpack: (config) => {
    // config.optimization.chunkIds = "named";
    // config.optimization.concatenateModules = false;
    // config.optimization.minimize = false;
    // config.optimization.mangleExports = false;
    // config.output.pathinfo = "verbose";
    return config;
  },
  redirects: () => [
    {
      source: "/",
      destination: "/app",
      permanent: false,
    },
  ],
};
