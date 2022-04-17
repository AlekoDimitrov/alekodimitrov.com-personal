/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

const withMDX = require("@next/mdx")();
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "tx", "tsx", "md", "mdx"],
});