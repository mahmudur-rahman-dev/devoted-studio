/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'ext.same-assets.com',
      'placehold.co',
      'oceandrive.com',
      'www.minimallimited.com'
    ],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    typedRoutes: true,
  },
  eslint: {
    dirs: ['app', 'components', 'lib'],
  },
  compress: true,
  poweredByHeader: false,
}

export default nextConfig; 