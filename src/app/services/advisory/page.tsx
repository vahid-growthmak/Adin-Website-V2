'use client'

import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { DisplayHeading } from '@/components/ui/DisplayHeading'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import Link from 'next/link'

const pillars = [
  {
    num: '01',
    title: 'Brand Positioning',
    text: 'Defining how your brand is perceived in the market — from category leadership to cultural relevance. We develop positioning platforms that guide every communication decision.'
  },
  {
    num: '02',
    title: 'Communications Architecture',
    text: 'Building the comprehensive messaging framework your entire team operates from — key messages, proof points, audience personas, and tone of voice guidelines.'
  },
  {
    num: '03',
    title: 'Growth Advisory',
    text: 'Communications strategy specifically designed for brands navigating funding rounds, market expansion, new category entry, or acquisition positioning.'
  }
]

const steps = [
  {
    num: '01',
    title: 'Discovery',
    text: 'In-depth discovery sessions to understand your brand, goals, competitive landscape, and target audiences. We listen deeply before we advise.'
  },
  {
    num: '02',
    title: 'Strategy',
    text: 'We develop your comprehensive communications architecture — positioning, messaging, channel strategy, and roadmap aligned to your growth objectives.'
  },
  {
    num: '03',
    title: 'Handoff',
    text: 'Strategy delivery with full documentation and optional execution handoff to our communications and experiences teams for seamless implementation.'
  }
]

export default function AdvisoryPage() {
  return (
    <main className="bg-adin-black min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2400&auto=format&fit=crop" 
            alt="Strategic Advisory" 
            fill 
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-adin-black via-adin-black/60 to-transparent" />
        </div>
        <div className="relative z-10 px-6 md:px-12 lg:px-16 pb-24 pt-48 max-w-7xl mx-auto w-full">
          <Reveal>
            <SectionLabel className="mb-6">Advisory</SectionLabel>
            <DisplayHeading className="text-white max-w-4xl mb-8 text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
              Strategic Counsel for Founders Who Mean Business.
            </DisplayHeading>
            <p className="text-white/60 max-w-2xl text-xl leading-relaxed">
              High-level brand positioning, messaging architecture, and growth communications for founders building with purpose.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <Reveal className="relative aspect-square lg:aspect-auto lg:h-[600px]">
              <Image 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2000&auto=format&fit=crop" 
                alt="Strategy" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 border border-white/10 m-8" />
            </Reveal>
            <Reveal delay={0.2}>
              <SectionLabel className="mb-8">Our Advisory Practice</SectionLabel>
              <DisplayHeading className="text-white mb-10 text-4xl md:text-5xl lg:text-6xl leading-tight">
                Strategic Brand Positioning and Narrative Development.
              </DisplayHeading>
              <p className="text-white/50 text-xl leading-relaxed mb-12">
                We guide founders through the critical work of brand architecture — building the stories, structures, and strategic frameworks that define how your brand is understood in the market.
              </p>
              <ul className="space-y-6 mb-12">
                {['Brand Positioning', 'Investor Communications', 'Market Entry Strategy'].map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <span className="w-2 h-2 rounded-full bg-adin-green" />
                    <span className="text-white/70 font-heading font-black uppercase tracking-widest text-xs">{item}</span>
                  </li>
                ))}
              </ul>
              <Button href="/contact" className="px-10 py-8">
                Work With Us →
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-adin-black py-32 px-6 md:px-12 lg:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel className="mb-20">Framework</SectionLabel>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.num} delay={i * 0.1} className={`pt-12 pb-12 ${i !== 0 ? 'md:pl-12 md:border-l border-white/5' : ''} ${i !== 2 ? 'md:pr-12' : ''} border-t md:border-t-0 border-white/5`}>
                <p className="text-white/5 font-heading font-black text-8xl mb-8 leading-none">{pillar.num}</p>
                <h3 className="text-white font-heading font-black text-2xl mb-6 tracking-tight">{pillar.title}</h3>
                <p className="text-white/40 leading-relaxed">{pillar.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel className="mb-6 text-adin-green">Process</SectionLabel>
            <DisplayHeading className="text-adin-black mb-20 text-4xl md:text-6xl">How It Works.</DisplayHeading>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.1}>
                <div className="border-t-4 border-adin-green pt-10">
                  <div className="flex items-end gap-4 mb-6">
                    <span className="text-adin-green font-heading font-black text-5xl leading-none">{step.num}</span>
                    <h3 className="text-adin-black font-heading font-black text-2xl tracking-tight">{step.title}</h3>
                  </div>
                  <p className="text-adin-black/60 leading-relaxed">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-adin-black py-40 px-6 md:px-12 lg:px-16 border-t border-white/5 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--adin-green)_0%,_transparent_70%)]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <Reveal>
            <SectionLabel className="mb-8 justify-center">Work With Us</SectionLabel>
            <DisplayHeading className="text-white mb-10 text-4xl md:text-6xl lg:text-7xl leading-none">
              Let&apos;s Build Your Brand Strategy.
            </DisplayHeading>
            <p className="text-white/40 text-xl leading-relaxed mb-16 max-w-xl mx-auto">
              Ready to define how the world understands your brand? Let&apos;s start with a conversation.
            </p>
            <Button href="/contact" className="px-12 py-8 mx-auto">
              Start a Conversation →
            </Button>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
