import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { default: 'Careers', template: '%s | ADIN NYC' },
  description: 'Open roles at ADin — join a team building brand authority for purpose-driven companies.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
