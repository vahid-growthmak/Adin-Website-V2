'use client'

import { gsap, useGSAP, ScrollTrigger } from '@/lib/gsap'

/**
 * Drives the homepage's "stacked sections" effect.
 *
 * Pins every section that fits in one viewport (`section.offsetHeight <=
 * window.innerHeight + a small slack`) using
 * `ScrollTrigger.pin({ pinSpacing: false })`. The next section, which
 * lives at its natural document position because pinSpacing is off,
 * rises up over the pinned one and pins in turn when its own top reaches
 * the viewport top.
 *
 * Tall sections (Services, Work, Clients) are intentionally NOT pinned.
 * Pinning them would either:
 *   1. Hide the bottom of their content under the section's
 *      `overflow: hidden` for the entire pin duration, or
 *   2. (with a viewport-capped pin) compress the rest of their content
 *      into a brief unpinned window, *and* break every `Reveal`-wrapped
 *      element inside them — Reveal's own ScrollTrigger never fires
 *      because the trigger element stops moving relative to the viewport
 *      while its parent is pinned.
 * Tall sections instead scroll naturally and provide the rise-over
 * effect for the section pinned above them.
 *
 * `anticipatePin: 1` smooths the start of each pin by pre-applying the
 * fixed positioning a frame early, removing the brief jitter you'd
 * otherwise see at the moment of pin engagement.
 */
export function HomepageStacking() {
  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add(
      {
        // Pin only on viewports tall enough to make stacking feel right.
        isWide: '(min-width: 768px) and (min-height: 600px)',
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (context) => {
        const { isWide, reduceMotion } = context.conditions!
        if (!isWide || reduceMotion) return

        const sections = gsap.utils.toArray<HTMLElement>('main > section')
        // Allow a small slack so a section a few px taller than the
        // viewport (typical for content with fluid typography) still pins.
        const pinSlack = 32

        sections.forEach((section) => {
          if (section.id === 'contact-section') return
          // Hero has its own scroll-driven fade and parallax in
          // Hero.tsx. Pinning it here would stack a second
          // scroll-driven transform on the same subtree, which makes
          // the headline visibly shake as the two transforms fight
          // sub-pixel positions on every scroll frame. About rises in
          // and covers Hero anyway, so skip the pin here.
          if (section.id === 'home') return
          if (section.offsetHeight > window.innerHeight + pinSlack) return

          ScrollTrigger.create({
            trigger: section,
            start: 'top top',
            end: () => `+=${section.offsetHeight}`,
            pin: true,
            pinSpacing: false,
            anticipatePin: 1,
            // `pinType: 'transform'` keeps the pinned element in its
            // original DOM position and just translates it with scroll —
            // unlike the default `'fixed'` mode, which wraps the element
            // in a pin-spacer div. The wrapper conflicts with React's
            // reconciler on route changes and produces:
            //   "Failed to execute 'removeChild' on 'Node': The node
            //    to be removed is not a child of this node."
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
