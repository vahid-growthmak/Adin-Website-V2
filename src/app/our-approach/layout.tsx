import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { default: 'Our Approach', template: '%s | ADIN NYC' },
  description: 'How ADin combines strategy, narrative, and media to build lasting brand authority.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
