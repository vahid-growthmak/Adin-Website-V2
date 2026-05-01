import type { Metadata } from 'next'
import { Inter, Inter_Tight } from 'next/font/google'
import './globals.css'
import { GSAPProvider } from '@/components/providers/GSAPProvider'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { SmoothScroll } from '@/components/SmoothScroll'
import { site } from '@/data/site'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body-name',
  display: 'swap',
})

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-heading-name',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL('https://adinnyc.com'),
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    url: 'https://adinnyc.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <head>
        <noscript>
          <style>{`.opacity-0 { opacity: 1 !important; }`}</style>
        </noscript>
      </head>
      <body className="bg-adin-black text-adin-white">
        <GSAPProvider>
          {/* Fixed-position UI lives outside the SmoothScroll wrapper so
              it stays glued to the real viewport. */}
          <CustomCursor />
          <Navbar />
          <SmoothScroll>
            <main>{children}</main>
            <Footer />
          </SmoothScroll>
        </GSAPProvider>
      </body>
    </html>
  )
}
