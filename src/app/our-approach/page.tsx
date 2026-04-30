'use client'

import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { DisplayHeading } from '@/components/ui/DisplayHeading'
import { Button } from '@/components/ui/Button'
import { CorePillars } from '@/components/sections/CorePillars'
import { TwoTestimonialsSection } from '@/components/sections/TwoTestimonialsSection'
import Image from 'next/image'

const steps = [
  {
    num: '01',
    title: 'Discovery',
    text: 'We take time to understand your brand, audience, and market. ADin uses research and conversations to build a clear foundation that guides strategy and aligns every decision with your goals.'
  },
  {
    num: '02',
    title: 'Strategy',
    text: 'A focused communications plan is developed with clear objectives, defined audiences, and strong messaging. ADin ensures every strategy is tailored to your brand and supports visibility, growth, and long term success.'
  },
  {
    num: '03',
    title: 'Execution',
    text: 'We bring strategy to life across media, content, and experiences. ADin ensures every touchpoint is consistent, clear, and engaging, helping your brand communicate effectively and connect with the right audience.'
  },
  {
    num: '04',
    title: 'Measurement',
    text: 'Performance is tracked against clear goals, with regular updates and insights. ADin focuses on understanding what works, identifying improvements, and ensuring your brand continues to grow with measurable progress.'
  },
  {
    num: '05',
    title: 'Optimization',
    text: 'We refine strategies based on performance and changing market conditions. ADin continuously improves communication efforts to keep your brand relevant, effective, and aligned with long term growth and audience expectations.'
  }
]

export default function OurApproachPage() {
  return (
    <div className="bg-adin-black min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2400&auto=format&fit=crop" 
            alt="Approach" 
            fill 
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-adin-black via-adin-black/40 to-transparent" />
        </div>
        <div className="relative z-10 px-6 md:px-12 lg:px-16 pb-24 pt-48 max-w-7xl mx-auto w-full">
          <Reveal>
            <SectionLabel className="mb-6">Our Methodology</SectionLabel>
            <DisplayHeading className="text-white max-w-4xl mb-8 text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
              Strategic Approach to Brand Building
            </DisplayHeading>
            <p className="text-white/60 max-w-xl text-xl leading-relaxed">
              Our founder-focused approach combines strategy, storytelling, and execution to help brands grow with clarity and measurable results.
            </p>
          </Reveal>
        </div>
      </section>

      {/* DIFFERENCE SECTION */}
      <section className="py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <Reveal className="relative aspect-[4/5] lg:aspect-auto lg:h-[600px]">
              <Image 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2400&auto=format&fit=crop" 
                alt="Architecture" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 border border-white/10 m-8" />
            </Reveal>
            <Reveal delay={0.2}>
              <SectionLabel className="mb-8">THE ADIN DIFFERENCE</SectionLabel>
              <DisplayHeading className="text-white mb-10 text-4xl md:text-6xl lg:text-7xl leading-tight">
                Beyond Campaigns. Built for Long-Term Growth.
              </DisplayHeading>
              <div className="space-y-6 text-white/50 text-xl leading-relaxed mb-12">
                <p>At ADin, we go beyond executing PR campaigns. We build communications systems that shape how your brand connects with the world. Our approach is grounded in careful listening, clear strategy, and consistent execution from start to finish.</p>
                <p>We begin every engagement by understanding your business, your market, your audience, and your goals. Only then do we develop strategies that are tailored to your brand and designed for long term growth.</p>
                <p>The result is communication that feels natural and impactful. Stories are thoughtfully crafted and well placed to build credibility, strengthen connections, and deliver real business results.</p>
              </div>
              <Button href="/contact" className="px-10 py-8">
                Work With Us →
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CORE PILLARS */}
      <CorePillars />

      {/* CLIENT JOURNEY */}
      <section className="bg-white py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel className="mb-6 text-adin-green">Our Process</SectionLabel>
            <DisplayHeading className="text-adin-black mb-24 text-4xl md:text-6xl">
              From Insight to Impact
            </DisplayHeading>
          </Reveal>

          <div className="space-y-0">
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.1}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 py-16 border-t border-black/5 items-start group">
                  <div className="md:col-span-2">
                    <span className="font-heading font-black text-6xl md:text-7xl lg:text-8xl text-adin-green/10 group-hover:text-adin-green/20 transition-colors">
                      {step.num}
                    </span>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-adin-black font-heading font-black text-2xl lg:text-3xl tracking-tight group-hover:text-adin-green transition-colors">
                      {step.title}
                    </h3>
                  </div>
                  <div className="md:col-span-7">
                    <p className="text-adin-black/60 text-lg leading-relaxed max-w-2xl">
                      {step.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TwoTestimonialsSection />

      {/* CTA SECTION */}
      <section className="relative py-48 px-6 md:px-12 lg:px-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2400&auto=format&fit=crop" 
            alt="Collaboration" 
            fill 
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-adin-black/90" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Reveal>
            <SectionLabel className="mb-8 justify-center">GET STARTED</SectionLabel>
            <DisplayHeading className="text-white mb-10 text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-none">
              Ready to Grow Your Brand?
            </DisplayHeading>
            <p className="text-white/50 text-xl leading-relaxed mb-16 max-w-xl mx-auto">
              Connect with our team to create a communication strategy that helps your brand stand out and grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button href="/contact" className="px-12 py-8 justify-center">
                Start a Conversation →
              </Button>
              <Button variant="outline" href="/services" className="px-12 py-8 justify-center">
                View Our Services →
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
