'use client'

import { useRef } from 'react'
import { Reveal } from '../ui/Reveal'
import { SectionLabel } from '../ui/SectionLabel'
import { DisplayHeading } from '../ui/DisplayHeading'
import { StatCounter } from '../ui/StatCounter'
import { Button } from '../ui/Button'
import { site } from '@/data/site'
import { useStickyInternalScroll } from '@/hooks/useStickyInternalScroll'
import { cn } from '@/lib/utils'

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useStickyInternalScroll(sectionRef, innerRef)

  return (
    <section id="about" ref={sectionRef} className="bg-adin-black">
      <div ref={innerRef} className="py-24 md:py-40 px-6 md:px-12 lg:px-16 border-t border-white/5">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionLabel className="mb-8">About ADIN</SectionLabel>
              <DisplayHeading className="text-white text-[clamp(40px,5vw,72px)] leading-[0.9] mb-12">
                Strategic Partners for Purpose-Driven Founders<span className="text-adin-green">.</span>
              </DisplayHeading>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:offset-1 space-y-8">
              <Reveal delay={0.2}>
                <p className="font-body text-white/60 leading-relaxed text-lg md:text-xl">
                  ADIN not only builds brand awareness and sales across multiple lifestyle categories, but also becomes a trusted strategic partner for our clients.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="font-body text-white/40 leading-relaxed border-l-2 border-adin-green pl-6 text-lg">
                  From brand launches to global campaigns, we help organizations tell stories that inspire trust, influence culture and drive measurable growth.
                </p>
              </Reveal>
              <Reveal delay={0.4} className="pt-8">
                <Button href="/about" variant="green">
                  Learn More
                </Button>
              </Reveal>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-24 border border-white/10 bg-white/10">
            <StatBox label="YEARS EXPERIENCE" value="25+" />
            <StatBox label="IMPRESSIONS GENERATED" value="50M+" />
            <StatBox label="BRANDS SERVED" value="100+" />
            <StatBox label="HEADQUARTERS" value="NYC" isAccent />
          </div>
        </div>
      </div>
    </section>
  )
}

function StatBox({ label, value, isAccent = false }: { label: string; value: string; isAccent?: boolean }) {
  return (
    <div className="bg-adin-black px-8 py-12 hover:bg-white/[0.03] transition-colors group">
      <Reveal>
        <p className={cn('font-heading font-black text-5xl md:text-6xl mb-3', isAccent ? 'text-adin-green' : 'text-white')}>
          <StatCounter value={value} />
        </p>
        <p className="text-white/40 uppercase tracking-widest text-[10px] font-bold">
          {label}
        </p>
      </Reveal>
    </div>
  )
}

