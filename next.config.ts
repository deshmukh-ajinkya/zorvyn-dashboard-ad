/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/expense-tracker",     // 👈 your repo name
  assetPrefix: "/expense-tracker/",
};

module.exports = nextConfig;