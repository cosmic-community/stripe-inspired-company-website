/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.cosmicjs.com', 'imgix.cosmicjs.com'],
  },
  // Disable typedRoutes to prevent deployment errors
  typedRoutes: false,
}

module.exports = nextConfig