'use client'

import { useGSAP } from '@gsap/react'
import { gsap, ScrollSmoother } from '@/lib/gsap'
import { useRef, type ReactNode } from 'react'

/**
 * Wraps the page content in ScrollSmoother's required `wrapper > content`
 * structure and initializes the smoother.
 *
 * Why we need this:
 *
 * GSAP's `ScrollTrigger.pin` writes `transform: translate(0, Y)` to the
 * pinned section every scroll frame, where Y is the live scroll delta.
 * On a smooth scroll input (trackpad / momentum wheel) Y lands on
 * fractional pixels, which causes the browser to re-rasterize the
 * pinned section's text glyphs every frame — that's the vibration.
 *
 * `ScrollSmoother` takes over the scroll loop, **rounds the scroll
 * value before feeding it to ScrollTrigger**, and synchronises scroll
 * updates with the requestAnimationFrame paint cycle. The pin's
 * transform now always lands on integer pixels and the section's
 * text doesn't re-rasterize.
 *
 * Layout requirements:
 *
 *   <body>
 *     <Navbar />          ← fixed, outside the smoother
 *     <CustomCursor />    ← fixed, outside the smoother
 *     <SmoothScroll>      ← the wrapper this component renders
 *       <main>{children}</main>
 *       <Footer />
 *     </SmoothScroll>
 *   </body>
 *
 * Anything inside SmoothScroll moves with the smoothed scroll.
 * Anything outside (fixed-positioned UI) stays glued to the real
 * viewport.
 *
 * Disabled on mobile (`smoothTouch: 0`) and when the user prefers
 * reduced motion — both groups get native scroll.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

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

        const smoother = ScrollSmoother.create({
          wrapper: wrapperRef.current!,
          content: contentRef.current!,
          smooth: 1,
          // Forces ScrollTrigger.normalizeScroll(true) — the bit that
          // rounds scroll position to integer pixels and aligns updates
          // to the paint cycle so pin transforms don't shake.
          normalizeScroll: true,
          // Touch devices already have native momentum; opt out of
          // double-smoothing.
          smoothTouch: 0,
          // Allow data-speed / data-lag attributes for parallax effects
          // if we ever want them; harmless if unused.
          effects: true,
        })

        return () => {
          smoother.kill()
        }
      },
    )
  })

  return (
    <div ref={wrapperRef} id="smooth-wrapper">
      <div ref={contentRef} id="smooth-content">
        {children}
      </div>
    </div>
  )
}
