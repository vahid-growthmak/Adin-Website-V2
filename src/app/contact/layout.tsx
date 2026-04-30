import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { default: 'Contact', template: '%s | ADIN NYC' },
  description: 'Get in touch with ADin to start a conversation about your brand and communications strategy.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
