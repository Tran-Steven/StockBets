/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    STOCK_KEY: process.env.STOCK_KEY,
  },
};

module.exports = nextConfig;
