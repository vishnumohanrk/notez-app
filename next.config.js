// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    appDir: true,
    typedRoutes: true,
  },

  async rewrites() {
    return [
      { source: '/note', destination: '/' },
      { source: '/note/all', destination: '/' },
    ];
  },
};

module.exports = nextConfig;
