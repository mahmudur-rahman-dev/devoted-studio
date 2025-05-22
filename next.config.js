/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'ext.same-assets.com',
      'placehold.co',
      'oceandrive.com',
      'www.minimallimited.com'
    ],
  },
  experimental: {
    typedRoutes: true,
  },
  eslint: {
    dirs: ['app', 'components', 'lib'],
  },
}

export default nextConfig; 