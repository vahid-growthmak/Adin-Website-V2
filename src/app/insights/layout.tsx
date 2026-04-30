import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { default: 'Insights', template: '%s | ADIN NYC' },
  description: 'Trend reports, strategic frameworks, and brand communications perspectives from ADin.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
