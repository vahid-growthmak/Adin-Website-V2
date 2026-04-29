'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import Image from 'next/image'
import { SectionLabel } from './SectionLabel'

interface PageHeroProps {
  title: string
  label: string
  description?: string
  image: string
  className?: string
}

export function PageHero({ title, label, description, image, className }: PageHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo(
      '.hero-reveal',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: 'power3.out', delay: 0.2 }
    )

    gsap.to(bgRef.current, {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className={cn('relative min-h-[60vh] md:min-h-[80vh] flex items-end overflow-hidden pt-40 pb-20 px-6 md:px-12 lg:px-16', className)}>
      <div ref={bgRef} className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-adin-black via-adin-black/70 to-adin-black/30" />
      </div>

      <div className="relative z-10 w-full max-w-screen-2xl mx-auto">
        <div className="max-w-4xl">
          <div className="hero-reveal">
            <SectionLabel className="mb-6">{label}</SectionLabel>
          </div>
          <h1 className="hero-reveal font-heading font-black text-white text-[clamp(40px,8vw,100px)] leading-[0.9] tracking-tighter mb-8">
            {title}
          </h1>
          {description && (
            <p className="hero-reveal font-body text-white/60 text-lg md:text-xl max-w-xl leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

import { cn } from '@/lib/utils'
