import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { default: 'FAQs', template: '%s | ADIN NYC' },
  description: 'Common questions about ADin — services, engagement model, timelines, and outcomes.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
