'use client'

import { useRef } from 'react'
import { Reveal } from '../ui/Reveal'
import { SectionLabel } from '../ui/SectionLabel'
import { DisplayHeading } from '../ui/DisplayHeading'
import { StatCounter } from '../ui/StatCounter'
import { Button } from '../ui/Button'
import { Marquee } from '../ui/Marquee'
import { useStickyInternalScroll } from '@/hooks/useStickyInternalScroll'
import { cn } from '@/lib/utils'

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useStickyInternalScroll(sectionRef, innerRef)

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-adin-black overflow-hidden"
    >
      {/* Marquee sits at the top edge of About so it reads as the divider
          between Hero and the rest of the page. */}
      <Marquee />
      <div ref={innerRef} className="py-24 md:py-40 px-6 md:px-12 lg:px-16 border-t border-white/5">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionLabel className="mb-8">About ADIN</SectionLabel>
              <DisplayHeading className="text-white text-[clamp(40px,5vw,72px)] leading-[0.9] mb-12">
                Strategic PR and Brand Communications Agency<span className="text-adin-green">.</span>
              </DisplayHeading>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:offset-1 space-y-8">
              <Reveal delay={0.2}>
                <p className="font-body text-white/60 leading-relaxed text-lg md:text-xl">
                  ADin delivers strategic communications that elevate brand presence, strengthen authority, and ensure businesses reach and resonate with the right audiences.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="font-body text-white/40 leading-relaxed border-l-2 border-adin-green pl-6 text-lg">
                  We combine media, storytelling, digital amplification, and positioning to shape perception, spark engagement, and build meaningful, lasting brand connections.
                </p>
                <p className="font-body text-white/40 leading-relaxed mt-6 text-lg">
                  From brand strategy to campaigns and launches, ADin helps clients grow influence, amplify their voice, and achieve measurable success in competitive markets.
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

