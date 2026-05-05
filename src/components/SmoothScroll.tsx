'use client'

import { useGSAP } from '@gsap/react'
import { gsap, ScrollSmoother } from '@/lib/gsap'
import { usePathname } from 'next/navigation'
import { useRef, useEffect, type ReactNode } from 'react'

/**
 * Wraps the page content in ScrollSmoother's required `wrapper > content`
 * structure and initializes the smoother.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const smootherRef = useRef<ScrollSmoother | null>(null)
  const pathname = usePathname()

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add(
      {
        smooth: '(min-width: 768px)',
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (context) => {
        const { smooth, reduceMotion } = context.conditions!
        if (!smooth || reduceMotion) return

        smootherRef.current = ScrollSmoother.create({
          wrapper: wrapperRef.current!,
          content: contentRef.current!,
          smooth: 1,
          normalizeScroll: true,
          smoothTouch: 0,
          effects: true,
        })

        return () => {
          smootherRef.current?.kill()
          smootherRef.current = null
        }
      },
    )
  })

  // Refresh ScrollSmoother and reset scroll position on every route change.
  // We use requestAnimationFrame to ensure React has finished its DOM
  // updates before GSAP tries to recalculate heights, which prevents
  // the "removeChild" error during rapid navigation.
  useEffect(() => {
    if (smootherRef.current) {
      requestAnimationFrame(() => {
        smootherRef.current?.scrollTo(0)
        smootherRef.current?.refresh()
      })
    }
  }, [pathname])

  return (
    <div ref={wrapperRef} id="smooth-wrapper">
      <div ref={contentRef} id="smooth-content">
        {/* Isolated container for React to manage without GSAP interference */}
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}
