/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static-cdn.jtvnw.net',
      },
    ],
    minimumCacheTTL: 1500000,
  },
}

module.exports = nextConfig
