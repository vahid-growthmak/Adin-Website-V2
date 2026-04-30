import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { default: 'Team', template: '%s | ADIN NYC' },
  description: 'Meet the strategists, storytellers, and operators behind ADin.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
