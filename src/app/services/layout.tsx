import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { default: 'Services', template: '%s | ADIN NYC' },
  description: 'Strategic communications, brand experiences, content narrative, and advisory services from ADin.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
