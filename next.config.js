/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['clsx', 'tailwind-merge']
  }
}

module.exports = nextConfig