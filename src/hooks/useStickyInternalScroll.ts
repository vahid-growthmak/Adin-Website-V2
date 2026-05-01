'use client'

import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { RefObject } from 'react'

/**
 * Internal scroll for sections that are `position: sticky` AND taller
 * than the viewport.
 *
 * Mirrors the vanilla-JS `initStickyInternalScroll` from the original
 * Adin site: while the section is pinned at the top of the viewport
 * (CSS sticky), GSAP translates the inner content upward by exactly
 * `scrollHeight - viewportHeight` over the same scroll distance, so
 * everything below the first viewport's worth of content scrolls into
 * view inside the pinned frame instead of being clipped by the
 * section's `overflow: hidden`.
 *
 *   gsap.to(inner, {
 *     y: () => -scrollDist,
 *     scrollTrigger: {
 *       trigger: section,
 *       start: 'top top',
 *       end:   () => '+=' + scrollDist,   // matches the sticky duration exactly
 *       scrub: 1,
 *       invalidateOnRefresh: true,
 *     }
 *   })
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
