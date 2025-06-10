/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/thinkcraft',
  assetPrefix: '/thinkcraft/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
