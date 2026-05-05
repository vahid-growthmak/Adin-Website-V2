'use client'

import { usePathname } from 'next/navigation'
import { SmoothScroll } from '@/components/SmoothScroll'
import { Footer } from '@/components/layout/Footer'
import { ReactNode } from 'react'

export function LayoutContent({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <SmoothScroll>
      <main key={pathname}>{children}</main>
      <Footer />
    </SmoothScroll>
  )
}
