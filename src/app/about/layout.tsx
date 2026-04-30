import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { default: 'About', template: '%s | ADIN NYC' },
  description: 'Learn about ADin — our team, mission, and approach to strategic communications.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
