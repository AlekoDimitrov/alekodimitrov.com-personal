/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;

const withMDX = require("@next/mdx")();
module.exports = withMDX({
  pageExtensions: ["tx", "tsx", "md", "mdx"],
});
