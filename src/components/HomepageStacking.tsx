'use client'

import { gsap, useGSAP, ScrollTrigger } from '@/lib/gsap'

/**
 * Drives the homepage's "stack at the bottom" effect.
 *
 * Each section pins at the moment its bottom edge reaches the viewport's
 * bottom edge — i.e. as soon as the user has scrolled all the way through
 * the section. The pin holds for one viewport-height of scroll while the
 * next section rises up from below over it, then releases as the next
 * section pins in turn. Translated to ScrollTrigger:
 *
 *   start: 'bottom bottom'  → pin when section.bottom hits viewport.bottom
 *   end:   'bottom top'     → unpin when section.bottom hits viewport.top
 *
 * Pin duration is always exactly one viewport height, regardless of
 * section height. Tall sections (Services ~2800, Work ~1500, Clients
 * ~1500, About ~1000) are scrolled through naturally first — every row
 * of their content gets a normal scroll pass — and then the pin engages
 * only at the end. Short sections (Hero, Philosophy, Advisory, etc.) pin
 * the moment they're fully in view.
 *
 * `pinSpacing: false` lets the next section, at its natural document
 * position, rise up over the pinned one.
 *
 * `pinType: 'transform'` avoids the pin-spacer wrapper that the default
 * `'fixed'` mode adds, which conflicted with React's reconciler on
 * route changes (the "removeChild on Node" error).
 *
 * `anticipatePin: 1` pre-applies the pin one frame early so engagement
 * is jitter-free.
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
          // Contact must scroll normally so the footer can appear.
          if (section.id === 'contact-section') return

          ScrollTrigger.create({
            trigger: section,
            start: 'bottom bottom',
            end: 'bottom top',
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
