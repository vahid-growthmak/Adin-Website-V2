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
    text: 'We define how your brand is perceived in the market, helping you stand out with clear positioning, strong identity, and relevance to your audience.'
  },
  {
    num: '02',
    title: 'Communications Strategy',
    text: 'We build messaging frameworks that guide your communication, including key messages, audience insights, and tone of voice for consistent brand alignment.'
  },
  {
    num: '03',
    title: 'Growth Advisory',
    text: 'ADin supports brands through growth stages, including market expansion, funding, and new opportunities, with strategies that strengthen positioning and long-term success.'
  }
]

const steps = [
  {
    num: '01',
    title: 'Discovery',
    text: 'We begin with detailed sessions to understand your brand, goals, audience, and market. This helps ADin build a clear foundation before developing any strategy.'
  },
  {
    num: '02',
    title: 'Strategy',
    text: 'ADin creates a structured communication strategy covering positioning, messaging, and channel direction, aligned with your business goals and long-term growth.'
  },
  {
    num: '03',
    title: 'Deliver',
    text: 'We deliver a complete strategy with clear documentation and support, allowing your team or ADin to implement it smoothly across communication and brand initiatives.'
  }
]

export default function AdvisoryPage() {
  return (
    <div className="bg-adin-black min-h-screen">
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
              Strategic Guidance for Founders and Leaders
            </DisplayHeading>
            <p className="text-white/60 max-w-2xl text-xl leading-relaxed">
              Adin work with founders to define positioning, refine messaging, and create strategies that support visibility, credibility and growth.
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
              <SectionLabel className="mb-8">OUR ADVISORY PRACTICE</SectionLabel>
              <DisplayHeading className="text-white mb-10 text-4xl md:text-5xl lg:text-6xl leading-tight">
                Building Brands with Purpose and Strategy
              </DisplayHeading>
              <p className="text-white/50 text-xl leading-relaxed mb-12">
                ADin works with founders and leadership teams to bring clarity to their brand and direction. We focus on positioning, messaging, and communication strategy to help your brand stand out and grow with consistency. From early-stage planning to market expansion, our advisory approach supports better decision-making, stronger brand presence, and long-term business growth.
              </p>
              <ul className="space-y-6 mb-12">
                {['Brand Strategy', 'Stakeholder Communication', 'Growth Planning'].map((item) => (
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

      {/* CLIENT VOICES */}
      <section className="bg-adin-black py-32 px-6 md:px-12 lg:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-20">
            <SectionLabel className="mb-4 text-adin-green">Client Voices</SectionLabel>
            <DisplayHeading className="text-white text-3xl sm:text-4xl md:text-5xl">What Our Clients Say</DisplayHeading>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <Reveal>
              <div className="border-t border-white/10 pt-12">
                <p className="text-white/70 italic text-xl leading-relaxed mb-10">
                  &quot;ADin really helped us figure out who we are as a brand and how to talk about it. That clarity has shaped everything we do—from pitches to campaigns.&quot;
                </p>
                <div className="mb-8">
                  <p className="text-white font-heading font-bold text-sm uppercase tracking-tight">Kari Warberg Block</p>
                  <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest mt-1">CEO & Founder, EarthKind</p>
                </div>
                <Link href="/work" className="text-adin-green font-heading text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors">
                  View Case Study →
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="border-t border-white/10 pt-12">
                <p className="text-white/70 italic text-xl leading-relaxed mb-10">
                  &quot;They have a great sense of what’s working and where the opportunities are. As a founder, that kind of guidance has been incredibly valuable.&quot;
                </p>
                <div className="mb-8">
                  <p className="text-white font-heading font-bold text-sm uppercase tracking-tight">Barry Cik</p>
                  <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest mt-1">Founder, Naturepedic</p>
                </div>
                <Link href="/work" className="text-adin-green font-heading text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors">
                  View Case Study →
                </Link>
              </div>
            </Reveal>
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
              Start Your Brand Strategy With ADin
            </DisplayHeading>
            <p className="text-white/40 text-xl leading-relaxed mb-16 max-w-xl mx-auto">
              Partner with ADin to build a clear strategy that strengthens your positioning and supports long-term growth.
            </p>
            <Button href="/contact" className="px-12 py-8 mx-auto">
              Start a Conversation →
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
