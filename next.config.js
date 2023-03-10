/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    minimumCacheTTL: 60,
    domains: ["image.tmdb.org"],
  },
}

module.exports = nextConfig
