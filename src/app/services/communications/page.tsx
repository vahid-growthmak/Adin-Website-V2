'use client'

import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { DisplayHeading } from '@/components/ui/DisplayHeading'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'

const serviceTiles = [
  {
    num: '01',
    title: 'Media Relations',
    text: 'We execute targeted media relations across print, digital, broadcast, and podcasts, securing coverage that boosts brand visibility, credibility, and audience engagement.'
  },
  {
    num: '02',
    title: 'Press Material Development',
    text: 'ADin creates press releases, media kits, and brand content that clearly communicate your story and attract strong media attention.'
  },
  {
    num: '03',
    title: 'Media Training',
    text: 'Our media training prepares founders and executives to speak confidently across interviews, broadcasts, and podcasts while maintaining clear messaging and strong brand presence.'
  },
  {
    num: '04',
    title: 'Messaging Frameworks',
    text: 'We develop clear messaging frameworks that define your brand voice and ensure consistent communication across channels, strengthening positioning and audience connection.'
  },
  {
    num: '05',
    title: 'Reputation Management',
    text: 'ADin builds long-term brand credibility through strategic reputation management, maintaining consistent media presence and strong narrative control across key communication channels.'
  },
  {
    num: '06',
    title: 'Crisis Communications',
    text: 'Our crisis communication strategies deliver rapid response, clear messaging, and effective media handling to protect your brand reputation during critical situations.'
  }
]

export default function CommunicationsPage() {
  return (
    <div className="bg-adin-black min-h-screen">
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
              Shaping Brands Through Strategic Communications
            </DisplayHeading>
            <p className="text-white/60 max-w-2xl text-xl leading-relaxed">
              We help brands increase visibility, build credibility, and connect with the right audience through strategic communication.
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
                We focus on targeted media outreach, not mass pitching. Every story is crafted for the right journalists and platforms with strong relevance to your brand. ADin builds trusted relationships across lifestyle, health, business, and culture media to secure meaningful coverage that increases visibility and audience reach.
              </p>
              <div className="space-y-10">
                {[
                  {
                    title: 'Audience and Message Alignment',
                    text: 'We understand your audience and refine your messaging to ensure consistent communication that connects clearly and effectively across all channels.'
                  },
                  {
                    title: 'Media Outreach and Engagement',
                    text: 'Our targeted media outreach builds relationships with journalists and platforms to secure relevant coverage that increases visibility and audience reach.'
                  },
                  {
                    title: 'Consistent Brand Communication',
                    text: 'We ensure your brand voice remains consistent across all channels, building trust, recognition, and long-term credibility with your audience and market presence.'
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

      {/* TESTIMONIALS */}
      <section className="bg-adin-black py-32 px-6 md:px-12 lg:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-20">
            <SectionLabel className="mb-4">Client Voices</SectionLabel>
            <DisplayHeading className="text-white text-3xl sm:text-4xl md:text-5xl">What Our Clients Say</DisplayHeading>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[
              {
                quote: "During COVID, ADin helped us bring together experts and media across different locations to run a campaign that reached nearly 50 million people across TV, radio, print, and online. It had a real impact on our visibility.",
                author: "Neal Mercado",
                role: "CMO, Designs for Health"
              },
              {
                quote: "ADin has a strong ability to spot the right opportunities and trends. For founders like me, that kind of insight is incredibly valuable. They don’t just get coverage, they help position your brand in the right conversations.",
                author: "Kari Warberg Block",
                role: "CEO & Founder, EarthKind"
              }
            ].map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="border-t border-white/10 pt-12 h-full flex flex-col justify-between">
                  <p className="text-white/70 italic text-lg leading-relaxed mb-10">&quot;{t.quote}&quot;</p>
                  <div>
                    <p className="text-white font-heading font-bold text-sm uppercase tracking-tight">{t.author}</p>
                    <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest mt-1">{t.role}</p>
                  </div>
                </div>
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
    </div>
  )
}
