import type { Site } from '@/types/site'

export const site: Site = {
  name: 'ADIN NYC',
  tagline: 'The Change Agency',
  description:
    'Strategic PR & communications agency for purpose-driven brands and founders. Building authentic connections between brands and audiences for 25+ years.',
  location: 'New York City',
  address: {
    street: '7 World Trade Center, 250 Greenwich St',
    city: 'New York',
    state: 'NY',
    zip: '10007',
    full: '7 World Trade Center, 250 Greenwich St, New York, NY 10007',
  },
  phone: '917-833-8101',
  email: 'sue@adinnyc.com',
  social: {
    linkedin: 'https://www.linkedin.com/company/adinnyc',
    instagram: 'https://www.instagram.com/adinnyc',
    tiktok: 'https://www.tiktok.com/@adinnyc',
  },
  stats: {
    years: '25+',
    impressions: '50M+',
    brands: '100+',
    serviceAreas: '3',
  },
  copyright: '© 2025 ADIN NYC. All rights reserved.',
  marqueeItems: [
    'Communications',
    'Brand Strategy',
    'Media Relations',
    'Thought Leadership',
    'Experiential',
    'Content Creation',
  ],
} as const
