import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { RefObject } from 'react'

/**
 * Hook to handle internal scrolling for sections that are sticky but taller than the viewport.
 */
export function useStickyInternalScroll(
  sectionRef: RefObject<HTMLElement | null>,
  innerRef: RefObject<HTMLElement | null>
) {
  useGSAP(() => {
    const section = sectionRef.current
    const inner = innerRef.current
    
    if (!section || !inner) return

    // Don't apply on mobile as sticky is disabled in CSS
    const isMobile = window.matchMedia('(max-width: 767px)').matches
    if (isMobile) return

    const updateScroll = () => {
      const scrollDist = Math.max(0, inner.scrollHeight - window.innerHeight)
      
      if (scrollDist <= 0) return

      gsap.to(inner, {
        y: -scrollDist,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${scrollDist}`,
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      })
    }

    updateScroll()
  }, { scope: sectionRef })
}
