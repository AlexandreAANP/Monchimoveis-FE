import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Add valid config options here
  output: 'export',
  basePath: '/Monchimoveis-FE',
  assetPrefix: '/Monchimoveis-FE/', // Set if your app will be served from a subdirectory
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
