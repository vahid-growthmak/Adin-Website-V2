'use client'

import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { DisplayHeading } from '@/components/ui/DisplayHeading'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import Link from 'next/link'

export default function WellnessIndustryPage() {
  return (
    <main className="bg-adin-black min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[75vh] flex items-end">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2400&auto=format&fit=crop" 
            alt="Wellness Industry" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-adin-black via-adin-black/60 to-adin-black/30" />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 pb-20 md:pb-28 pt-40">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <SectionLabel className="mb-6">Wellness & Nutrition</SectionLabel>
              <DisplayHeading className="text-white max-w-4xl mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px]">
                Communications for Brands Elevating Human Health.
              </DisplayHeading>
              <p className="text-white/60 max-w-2xl text-xl leading-relaxed">
                Purpose-driven PR and communications for wellness brands changing how the world approaches health and wellbeing.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <SectionLabel className="mb-6">Deep Expertise</SectionLabel>
              <h2 className="text-white font-heading font-black text-3xl md:text-5xl lg:text-6xl mb-10 tracking-tight leading-[1.1]">
                A Deep Understanding of Wellness Trends and Insights.
              </h2>
              <p className="text-white/50 text-lg md:text-xl leading-relaxed mb-12 max-w-xl">
                The wellness space is complex — consumers are sophisticated, media is scrutinizing, and credibility is everything. ADIN brings decades of experience to help brands cut through the noise.
              </p>
              <div className="space-y-6">
                {['Wellness Media Relations', 'Supplement & Nutrition PR', 'Lifestyle Brand Positioning'].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="w-2 h-2 rounded-full bg-adin-green" />
                    <span className="text-white font-bold uppercase tracking-widest text-xs">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="relative h-[520px] overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2000&auto=format&fit=crop" 
                  alt="Wellness expertise" 
                  fill 
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="py-32 px-6 md:px-12 lg:px-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <SectionLabel className="mb-6">What We Do</SectionLabel>
            <DisplayHeading className="text-white text-3xl md:text-5xl">Core Wellness Services</DisplayHeading>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { id: '01', title: 'Thought Leadership', desc: 'We position wellness founders as authoritative voices through strategic media placement and expert commentary.' },
              { id: '02', title: 'Influencer Partnerships', desc: 'We identify and cultivate relationships with authentic wellness influencers whose audiences align with your values.' },
              { id: '03', title: 'Brand Storytelling', desc: 'From ingredient sourcing to founder stories, we craft narratives that resonate with health-conscious consumers.' }
            ].map((item, i) => (
              <Reveal key={item.id} delay={i * 0.1}>
                <div className="pt-10 border-t border-white/10">
                  <span className="text-white/10 font-heading font-black text-6xl block mb-6">{item.id}</span>
                  <h3 className="text-white font-bold text-xl mb-6 tracking-tight">{item.title}</h3>
                  <p className="text-white/40 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 px-6 md:px-12 lg:px-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <SectionLabel className="mb-16">Client Voices</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            {[
              {
                quote: "ADIN leveraged our company's pivot into producing facemasks to generate millions of consumer impressions, driving both brand awareness and sales.",
                author: "Barry Cik",
                role: "Founder, Naturepedic",
                link: "/work/naturepedic"
              },
              {
                quote: "ADIN has a unique ability to identify opportunities and trends. For purpose-driven entrepreneurs like myself, that insight is invaluable.",
                author: "Kari Warberg Block",
                role: "CEO & Founder, EarthKind",
                link: "/work/earthkind"
              }
            ].map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="border-t border-white/10 pt-10">
                  <p className="text-white/70 italic text-xl leading-relaxed mb-10">&quot;{t.quote}&quot;</p>
                  <div>
                    <p className="text-white font-heading font-black tracking-tight text-sm uppercase">{t.author}</p>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1">{t.role}</p>
                    <Link href={t.link} className="inline-block mt-6 text-adin-green font-bold uppercase tracking-widest text-[10px] hover:text-white transition-colors">
                      View Case Study →
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 px-6 md:px-12 lg:px-16 text-center relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--adin-green)_0%,_transparent_70%)]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <Reveal>
            <SectionLabel className="mb-6">Get Started</SectionLabel>
            <DisplayHeading className="text-white mb-10 text-4xl md:text-6xl lg:text-7xl leading-tight">
              Ready to Elevate Your Wellness Brand?
            </DisplayHeading>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" className="px-12 py-6">Start a Conversation →</Button>
              <Button href="/work" variant="outline" className="px-12 py-6">View Our Work</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
