'use client'

import { Reveal } from '../ui/Reveal'
import { Button } from '../ui/Button'
import Image from 'next/image'

export function ArchitectureSection() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-adin-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop"
          alt="Strategic Brand Advisory"
          fill
          sizes="100vw"
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-adin-black via-adin-black/40 to-transparent" />
        <div className="absolute inset-0 bg-adin-black/40" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <Reveal>
              <p className="font-heading font-black text-white uppercase tracking-[0.2em] text-[11px] mb-8">
                ADVISORY
              </p>
              <h2 className="font-heading font-black text-white text-[clamp(48px,8vw,100px)] leading-[0.95] tracking-tighter mb-10">
                Strategic Brand Advisory<span className="text-adin-green">.</span>
              </h2>
              <div className="space-y-6 mb-12">
                <p className="font-body text-white/70 text-lg md:text-xl leading-relaxed">
                  ADin works with founders and leadership teams to define positioning, refine narratives, and build strategies that drive influence, credibility, and measurable growth.
                </p>
                <p className="font-body text-white/50 text-base md:text-lg leading-relaxed">
                  From emerging startups to global brands, we help organizations navigate complexity and establish a distinct, lasting presence in competitive markets.
                </p>
              </div>
              <Button href="/work" variant="primary" className="bg-white text-adin-black border-white hover:bg-transparent hover:text-white transition-all duration-500">
                Explore Our Work →
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
