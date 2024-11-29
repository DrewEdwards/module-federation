const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
// loading remotes on demand, not ideal for SSR
const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    "dedicated-account": `dedicated-account@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
  };
};
const config = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "dedicated-account",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./Module": "./pages/index.tsx",
        },
        remotes: remotes(options.isServer),
        shared: {},
        extraOptions: {
          automaticAsyncBoundary: true,
        },
      })
    );
    return config;
  },
};

module.exports = config;
