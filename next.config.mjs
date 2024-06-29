import { NextFederationPlugin } from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { isServer } = options;
    config.experiments = { topLevelAwait: true };
    config.devtool = "source-map"; // Corrected the placement of this line
    config.plugins.push(
      new NextFederationPlugin({
        name: "hostApp",
        remotes: {
          remoteApp: `remoteApp@http://localhost:3001/_next/static/${isServer ? "ssr" : "chunks"}/remoteEntry.js`,
        },
        filename: "static/chunks/remoteEntry.js",
      }),
    );
    return config;
  },
};

export default nextConfig;
