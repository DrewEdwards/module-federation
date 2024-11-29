const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    "dedicated-account": `dedicated-account@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
    // checkout: `checkout@http://localhost:3002/_next/static/${location}/remoteEntry.js`,
  };
};

const config = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "app-host",
        filename: "static/chunks/remoteEntry.js",
        exposes: {},
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
