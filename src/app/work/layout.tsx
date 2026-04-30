import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { default: 'Case Studies', template: '%s | ADIN NYC' },
  description: 'Selected work — campaigns, launches, and brand stories ADin has shaped for clients across industries.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
