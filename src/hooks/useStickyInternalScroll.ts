'use client'

import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { RefObject } from 'react'

/**
 * Internal scroll for sections that are pinned via CSS `position: sticky`
 * AND taller than the viewport.
 *
 * Mirrors the vanilla-JS `initStickyInternalScroll` from the original
 * Adin site. While the section is stuck at the top of the viewport,
 * GSAP translates its inner child upward by exactly
 * `scrollHeight - viewportHeight` over the same scroll distance — so
 * everything below the first viewport's worth of content scrolls into
 * view inside the pinned frame instead of being hidden by the section's
 * `overflow: hidden`.
 *
 * Crucially, the transform is on the inner child, NOT the section. That
 * means the section itself stays pixel-stable while CSS sticky holds
 * it at top — no GSAP-driven per-frame transform on the parent, so no
 * sub-pixel re-rasterization (no vibration) on the headlines.
 *
 * Skipped on mobile because the CSS rule for `position: sticky` is
 * gated to `(min-width: 768px)`.
 */
export function useStickyInternalScroll(
  sectionRef: RefObject<HTMLElement | null>,
  innerRef: RefObject<HTMLElement | null>,
) {
  useGSAP(
    () => {
      const section = sectionRef.current
      const inner = innerRef.current
      if (!section || !inner) return

      const mm = gsap.matchMedia()
      mm.add('(min-width: 768px)', () => {
        const getScrollDist = () =>
          Math.max(0, inner.scrollHeight - window.innerHeight)

        gsap.to(inner, {
          y: () => -getScrollDist(),
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => '+=' + getScrollDist(),
            scrub: 1,
            invalidateOnRefresh: true,
          },
        })

        ScrollTrigger.refresh()
      })
    },
    { scope: sectionRef },
  )
}
