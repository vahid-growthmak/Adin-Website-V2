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

  useGSAP(() => {
    // Cinematic entrance — runs once on mount.
    gsap.fromTo(
      bgRef.current,
      { scale: 1.15, force3D: true },
      { scale: 1, duration: 2.8, ease: 'power2.out', force3D: true },
    )

    const tl = gsap.timeline({ delay: 0.3 })
    tl.fromTo(
      '.hero-reveal',
      { y: 60, opacity: 0, force3D: true },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
        force3D: true,
        // Drop the inline transform once the entrance is done so the
        // text renders crisply when the scroll-driven parent transform
        // composes with it later.
        clearProps: 'transform,willChange',
      },
    )

    // Background parallax — image element only, so glyph scaling can't
    // jitter the headline.
    gsap.to(bgRef.current, {
      yPercent: -15,
      ease: 'none',
      force3D: true,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.5,
      },
    })

    // No foreground content fade-out: Hero is now pinned by
    // HomepageStacking so About can rise up over it. A second
    // scroll-driven transform on the headline subtree would compound
    // with the pin's transform and shake the text.
  }, { scope: containerRef })

  return (
    <section id="home" ref={containerRef} className="relative h-screen flex flex-col overflow-hidden">
      <div className="relative flex-grow flex items-center">
        <div ref={bgRef} className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt={site.name}
            fill
            sizes="(max-width: 768px) 200vw, 100vw"
            quality={95}
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-adin-black/40 via-adin-black/20 to-adin-black" />
        </div>

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16">
          <div className="max-w-screen-2xl mx-auto">
            <div className="max-w-4xl">
              <h1 className="hero-reveal font-heading font-black text-white text-[clamp(48px,10vw,120px)] leading-[0.95] tracking-tighter mb-8">
                The Growth Agency<span className="text-adin-green">.</span>
              </h1>
              <p className="hero-reveal font-body text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
                ADin transforms bold ideas into influence through strategic communications, helping founders build authority, expand reach, and drive lasting market impact.
              </p>
              <div className="hero-reveal flex flex-col sm:flex-row sm:flex-wrap gap-4">
                <Button href="/work" variant="primary" className="w-full sm:w-auto justify-center sm:justify-start">
                  View Case Studies
                </Button>
                <Button href="/contact" variant="outline" className="w-full sm:w-auto justify-center sm:justify-start">
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
