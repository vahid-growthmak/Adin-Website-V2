'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  // Only mount the cursor on devices with a fine pointer (mouse/trackpad)
  // and where the user hasn't asked to reduce motion.
  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setEnabled(mq.matches && !reduce.matches)
    update()
    mq.addEventListener('change', update)
    reduce.addEventListener('change', update)
    return () => {
      mq.removeEventListener('change', update)
      reduce.removeEventListener('change', update)
    }
  }, [])

  useGSAP(() => {
    if (!enabled) return
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    // quickTo creates reusable setter functions — far cheaper than allocating
    // a fresh tween on every mousemove.
    const dotX = gsap.quickTo(dot, 'x', { duration: 0.1, ease: 'power2.out' })
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.1, ease: 'power2.out' })
    const ringX = gsap.quickTo(ring, 'x', { duration: 0.4, ease: 'power2.out' })
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.4, ease: 'power2.out' })

    const moveCursor = (e: MouseEvent) => {
      dotX(e.clientX)
      dotY(e.clientY)
      ringX(e.clientX)
      ringY(e.clientY)
    }

    // Event delegation — works for elements added after mount too.
    const isInteractive = (el: EventTarget | null): el is Element =>
      el instanceof Element &&
      Boolean(el.closest('a, button, .interactive, input, textarea, select, [role="button"]'))

    const onOver = (e: MouseEvent) => {
      if (isInteractive(e.target)) ring.classList.add('hover')
    }
    const onOut = (e: MouseEvent) => {
      if (isInteractive(e.target)) ring.classList.remove('hover')
    }

    window.addEventListener('mousemove', moveCursor, { passive: true })
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, { dependencies: [enabled] })

  if (!enabled) return null

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  )
}
