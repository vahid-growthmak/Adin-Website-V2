'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ReactNode, useRef } from 'react'
import { cn } from '@/lib/utils'

interface DisplayHeadingProps {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3'
  className?: string
  delay?: number
}

export function DisplayHeading({
  children,
  as: Tag = 'h2',
  className,
  delay = 0,
}: DisplayHeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!textRef.current) return

    gsap.fromTo(
      textRef.current,
      {
        y: '100%',
        opacity: 0,
      },
      {
        y: '0%',
        opacity: 1,
        duration: 1.4,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
      }
    )
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="overflow-hidden py-4">
      <Tag ref={textRef} className={cn('display-heading font-heading font-black tracking-tighter -my-4', className)}>
        {children}
      </Tag>
    </div>
  )
}
