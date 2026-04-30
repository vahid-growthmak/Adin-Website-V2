import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { default: 'Press', template: '%s | ADIN NYC' },
  description: 'Press coverage, mentions, and recognition of ADin and its clients.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
