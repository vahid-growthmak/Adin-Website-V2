'use client'

import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { DisplayHeading } from '@/components/ui/DisplayHeading'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import Link from 'next/link'

const serviceTiles = [
  {
    num: '01',
    title: 'Media Relations',
    text: 'Proactive and reactive pitching to targeted journalists across print, digital, broadcast, and podcast platforms. We secure coverage that moves the needle — not just fills a clip report.'
  },
  {
    num: '02',
    title: 'Press Material Development',
    text: 'Compelling press releases, media kits, brand bibles, and pitch decks crafted to communicate your story with precision and narrative power that resonates with today&apos;s editors.'
  },
  {
    num: '03',
    title: 'Media Training',
    text: 'Prepare your founders, executives, and spokespeople to speak with confidence, clarity, and conviction — whether facing a live broadcast, print interview, or podcast conversation.'
  },
  {
    num: '04',
    title: 'Messaging Frameworks',
    text: 'Develop the core narratives that anchor your brand&apos;s public identity — ensuring consistent, resonant messaging across all communications channels and stakeholder touchpoints.'
  },
  {
    num: '05',
    title: 'Reputation Management',
    text: 'Long-term brand equity building through strategic narrative control, executive profiling, awards submissions, and ongoing media presence management.'
  },
  {
    num: '06',
    title: 'Crisis Communications',
    text: 'Rapid-response protocols, stakeholder messaging, media statements, and real-time counsel to protect your brand&apos;s reputation when it matters most.'
  }
]

export default function CommunicationsPage() {
  return (
    <main className="bg-adin-black min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2400&auto=format&fit=crop" 
            alt="Communications" 
            fill 
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-adin-black via-adin-black/70 to-transparent" />
        </div>
        <div className="relative z-10 px-6 md:px-12 lg:px-16 pb-24 pt-48 max-w-7xl mx-auto w-full">
          <Reveal>
            <SectionLabel className="mb-6">Communications</SectionLabel>
            <DisplayHeading className="text-white max-w-4xl mb-8 text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
              Strategic Communications for Purpose-Driven Brands.
            </DisplayHeading>
            <p className="text-white/60 max-w-2xl text-xl leading-relaxed">
              Building credibility, shaping narratives, and driving meaningful media coverage for brands that matter.
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
                src="https://images.unsplash.com/photo-1573167243872-43c6433b9d40?q=80&w=2000&auto=format&fit=crop" 
                alt="Strategy" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 border border-white/10 m-8" />
            </Reveal>
            <Reveal delay={0.2}>
              <SectionLabel className="mb-8">Our Approach</SectionLabel>
              <DisplayHeading className="text-white mb-10 text-4xl md:text-5xl lg:text-6xl leading-tight">
                Strategic Media Relations for Founders and Brands.
              </DisplayHeading>
              <p className="text-white/50 text-xl leading-relaxed mb-12">
                We don&apos;t spray-and-pray. Every pitch is crafted for specific journalists and outlets with deep relevance to your brand story.
              </p>
              <div className="space-y-10">
                {[
                  {
                    title: 'Reputation Management',
                    text: 'We proactively shape how your brand is perceived — monitoring narratives and ensuring consistent credibility.'
                  },
                  {
                    title: 'Crisis Communications',
                    text: 'When the unexpected happens, our rapid-response approach protects your brand equity with clarity and confidence.'
                  },
                  {
                    title: 'Thought Leadership',
                    text: 'We transform founders into recognized industry voices through editorial strategies that establish lasting authority.'
                  }
                ].map((item) => (
                  <div key={item.title} className="flex gap-6">
                    <span className="w-2 h-2 rounded-full bg-adin-green mt-3 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-heading font-black text-xl mb-2 tracking-tight">{item.title}</h4>
                      <p className="text-white/40 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-adin-black py-32 px-6 md:px-12 lg:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel className="mb-20">What We Do</SectionLabel>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {serviceTiles.map((tile, i) => (
              <Reveal key={tile.num} delay={i * 0.1}>
                <div className="bg-adin-black p-12 h-full hover:bg-adin-green/5 transition-colors group">
                  <p className="text-white/10 font-heading font-black text-6xl mb-8 group-hover:text-adin-green/20 transition-colors">{tile.num}</p>
                  <h3 className="text-white font-heading font-black text-2xl mb-6 tracking-tight group-hover:text-adin-green transition-colors">{tile.title}</h3>
                  <p className="text-white/40 leading-relaxed">{tile.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="bg-adin-black border-t border-white/5 py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left">
            {[
              { val: '50M+', label: 'Impressions' },
              { val: '25+', label: 'Years Experience' },
              { val: '500+', label: 'Placements' },
              { val: '100+', label: 'Brands Elevated' }
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="text-white font-heading font-black text-4xl md:text-6xl mb-2">{stat.val}</p>
                <p className="text-white/30 uppercase tracking-widest text-[10px] font-bold">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-48 px-6 md:px-12 lg:px-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2400&auto=format&fit=crop" 
            alt="Contact" 
            fill 
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-adin-black/90" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Reveal>
            <SectionLabel className="mb-8 justify-center">Ready to Begin</SectionLabel>
            <DisplayHeading className="text-white mb-10 text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-none">
              Let&apos;s Build Your Brand&apos;s Credibility.
            </DisplayHeading>
            <p className="text-white/50 text-xl leading-relaxed mb-16 max-w-xl mx-auto">
              Tell us about your brand. We&apos;ll show you what&apos;s possible when storytelling meets strategy.
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
