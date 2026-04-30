'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ReactNode, useRef } from 'react'
import { cn } from '@/lib/utils'

interface RevealProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  delay?: number
  duration?: number
  className?: string
}

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 1.2,
  className,
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!elementRef.current) return

    const x = direction === 'left' ? -60 : direction === 'right' ? 60 : 0
    const y = direction === 'up' ? 60 : direction === 'down' ? -60 : 0

    gsap.fromTo(
      elementRef.current,
      {
        x,
        y,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: elementRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, { scope: elementRef })

  return (
    <div ref={elementRef} className={cn('opacity-0', className)}>
      {children}
    </div>
  )
}
