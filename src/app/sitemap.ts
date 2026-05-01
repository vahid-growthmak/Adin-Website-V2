import type { MetadataRoute } from 'next'
import { work } from '@/data/work'
import { articles } from '@/data/insights'

const BASE = 'https://adinnyc.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/about',
    '/services',
    '/services/advisory',
    '/services/communications',
    '/services/content-narrative',
    '/services/digital-enablement',
    '/services/experiences',
    '/our-approach',
    '/work',
    '/insights',
    '/contact',
    '/team',
    '/careers',
    '/press',
    '/faqs',
    '/privacy-policy',
    '/terms-of-use',
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.7,
  }))

  const workRoutes: MetadataRoute.Sitemap = work.map((p) => ({
    url: `${BASE}/work/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const insightRoutes: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${BASE}/insights/${a.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...workRoutes, ...insightRoutes]
}
