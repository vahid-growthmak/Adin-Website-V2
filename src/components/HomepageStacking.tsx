'use client'

import { gsap, useGSAP, ScrollTrigger } from '@/lib/gsap'

/**
 * Drives the homepage's "stacked sections" effect.
 *
 * Every section gets pinned with `ScrollTrigger.pin({ pinSpacing: false,
 * pinType: 'transform' })` — UNLESS it's tagged `data-flow="normal"`
 * (Services, Work, Clients) or is the contact block. Pinning is opt-out
 * rather than opt-in so adding a new section automatically participates
 * in the stack.
 *
 * Pin duration is `min(sectionHeight, viewportHeight)`:
 *   - Sections that fit in 100vh pin for their full height — when the
 *     pin ends, the next section's top is exactly at the viewport top,
 *     so it picks up its own pin without a gap.
 *   - Sections taller than 100vh (only About on this page) pin for
 *     exactly one viewport — long enough for the rise-over moment to
 *     register — and then unpin and scroll naturally for the
 *     remaining content (e.g. About's stat boxes) before the next
 *     section's top reaches viewport top.
 *
 * `pinSpacing: false` is what makes the rise-over work: the next
 * section stays at its natural document position, so as scroll
 * progresses it rises up over the pinned one via DOM paint order.
 *
 * `pinType: 'transform'` keeps the pinned element in place in the DOM
 * tree and translates it with CSS transform — unlike the default
 * `'fixed'` which wraps the element in a pin-spacer div, conflicting
 * with React's reconciler on route changes (the "removeChild on Node"
 * runtime error).
 *
 * `anticipatePin: 1` pre-applies the pin one frame early so the moment
 * of engagement is jitter-free.
 */
export function HomepageStacking() {
  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add(
      {
        isWide: '(min-width: 768px) and (min-height: 600px)',
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (context) => {
        const { isWide, reduceMotion } = context.conditions!
        if (!isWide || reduceMotion) return

        const sections = gsap.utils.toArray<HTMLElement>('main > section')

        sections.forEach((section) => {
          if (section.id === 'contact-section') return
          if (section.dataset.flow === 'normal') return

          ScrollTrigger.create({
            trigger: section,
            start: 'top top',
            end: () =>
              `+=${Math.min(section.offsetHeight, window.innerHeight)}`,
            pin: true,
            pinSpacing: false,
            anticipatePin: 1,
            pinType: 'transform',
            invalidateOnRefresh: true,
          })
        })

        ScrollTrigger.refresh()
      },
    )
  })

  return null
}
