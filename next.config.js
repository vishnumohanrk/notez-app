// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    appDir: true,
    typedRoutes: true,
  },

  async redirects() {
    return [
      { source: '/note', destination: '/', permanent: true },
      { source: '/note/all', destination: '/', permanent: true },
    ];
  },
};

module.exports = nextConfig;
