/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    typedRoutes: true,
    serverActions: true,
  },

  async redirects() {
    return [
      {
        source: '/new',
        destination: '/note/new',
        permanent: true,
      },
      {
        source: '/notes',
        destination: '/',
        permanent: true,
      },
      {
        source: '/note',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
