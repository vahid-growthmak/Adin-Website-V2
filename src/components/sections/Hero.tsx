'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import Image from 'next/image'
import { Button } from '../ui/Button'
import { site } from '@/data/site'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Cinematic entrance
    gsap.fromTo(
      bgRef.current,
      { scale: 1.15 },
      { scale: 1, duration: 2.8, ease: 'power2.out' }
    )

    const tl = gsap.timeline({ delay: 0.3 })
    tl.fromTo(
      '.hero-reveal',
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: 'power3.out' }
    )

    // Scroll parallax
    gsap.to(bgRef.current, {
      yPercent: -15,
      scale: 1.1,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })

    gsap.to(contentRef.current, {
      opacity: 0,
      y: -80,
      scale: 0.96,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: '20% top',
        end: '70% top',
        scrub: true,
      },
    })
  }, { scope: containerRef })

  return (
    <section id="home" ref={containerRef} className="relative h-screen flex flex-col overflow-hidden">
      <div className="relative flex-grow flex items-center">
        <div ref={bgRef} className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt={site.name}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-adin-black/40 via-adin-black/20 to-adin-black" />
        </div>

        <div ref={contentRef} className="relative z-10 w-full px-6 md:px-12 lg:px-16">
          <div className="max-w-screen-2xl mx-auto">
            <div className="max-w-4xl">
              <h1 className="hero-reveal font-heading font-black text-white text-[clamp(48px,10vw,120px)] leading-[0.95] tracking-tighter mb-8">
                The Growth Agency<span className="text-adin-green">.</span>
              </h1>
              <p className="hero-reveal font-body text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
                ADin transforms bold ideas into influence through strategic communications, helping founders build authority, expand reach, and drive lasting market impact.
              </p>
              <div className="hero-reveal flex flex-wrap gap-4">
                <Button href="/work" variant="primary">
                  View Case Studies
                </Button>
                <Button href="/contact" variant="outline">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
