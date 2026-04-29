import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about.html',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/services.html',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/work.html',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/contact.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/team.html',
        destination: '/team',
        permanent: true,
      },
      {
        source: '/careers.html',
        destination: '/careers',
        permanent: true,
      },
      {
        source: '/insights.html',
        destination: '/insights',
        permanent: true,
      },
      {
        source: '/clients.html',
        destination: '/clients',
        permanent: true,
      },
      {
        source: '/faqs.html',
        destination: '/faqs',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
