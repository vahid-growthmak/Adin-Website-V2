import type { Metadata } from 'next'
import { Inter, Inter_Tight } from 'next/font/google'
import './globals.css'
import { GSAPProvider } from '@/components/providers/GSAPProvider'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CustomCursor } from '@/components/ui/CustomCursor'
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <body className="bg-adin-black text-adin-white">
        <GSAPProvider>
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </GSAPProvider>
      </body>
    </html>
  )
}
