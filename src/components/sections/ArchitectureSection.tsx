'use client'

import { Reveal } from '../ui/Reveal'
import { SectionLabel } from '../ui/SectionLabel'
import { Button } from '../ui/Button'
import Image from 'next/image'

export function ArchitectureSection() {
  return (
    <section className="bg-adin-black py-28 px-6 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative h-[580px] w-full overflow-hidden">
            <Reveal direction="left" className="h-full">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2400&auto=format&fit=crop"
                alt="ADIN Approach"
                fill
                className="object-cover"
              />
            </Reveal>
          </div>
          <div>
            <Reveal direction="right">
              <SectionLabel className="mb-6">The ADIN Difference</SectionLabel>
              <h2 className="font-heading font-black tracking-tighter leading-none text-white mb-8 text-4xl md:text-5xl lg:text-6xl">
                Not a Campaign.<br />An Architecture.
              </h2>
              <div className="space-y-6 mb-10">
                <p className="font-body text-white/60 text-lg leading-relaxed">
                  At ADIN, we don&apos;t just execute PR campaigns — we build communications architectures that define how your brand speaks to the world. Our approach is built on deep listening, strategic positioning, and relentless follow-through.
                </p>
                <p className="font-body text-white/50 text-base leading-relaxed">
                  We begin every engagement by immersing ourselves in your world — your category, your competition, your customer, and your aspirations. Only then do we craft strategies that are bespoke to you and built for the long term.
                </p>
                <p className="font-body text-white/50 text-base leading-relaxed">
                  The result is communications that feel inevitable — stories so well-crafted and perfectly placed that they don&apos;t just generate coverage, they build brand equity, deepen loyalty, and drive real business outcomes.
                </p>
              </div>
              <Button href="/contact" variant="primary">
                Work With Us →
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
