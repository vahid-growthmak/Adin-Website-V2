import { RefObject } from 'react'

/**
 * No-op kept so existing call sites compile. The sticky-stacking effect this
 * hook used to drive was removed because the GSAP inner-scroll math couldn't
 * reliably stay in sync with the browser's sticky duration on variable-height
 * sections, which produced visible dead zones during scroll.
 *
 * Sections now render in normal flow at their natural height.
 */
export function useStickyInternalScroll(
  _sectionRef: RefObject<HTMLElement | null>,
  _innerRef: RefObject<HTMLElement | null>,
) {
  // intentionally empty
}
