/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'product-ske.s3.ap-southeast-1.amazonaws.com']
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig
