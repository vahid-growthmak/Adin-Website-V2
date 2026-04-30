'use client'

import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { DisplayHeading } from '@/components/ui/DisplayHeading'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import Link from 'next/link'

const expertiseItems = [
  {
    num: '01',
    label: 'Discipline',
    title: 'Brand Strategy',
    text: 'We help brands define their unique positioning, develop compelling messaging architectures, and build the strategic foundation for long-term growth.',
    image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=2000&auto=format&fit=crop',
    capabilities: ['Positioning', 'Messaging', 'Brand Audits', 'Competitive Analysis'],
    link: '/services/advisory'
  },
  {
    num: '02',
    label: 'Discipline',
    title: 'Media Relations',
    text: 'Two decades of cultivated relationships with top-tier journalists, editors, and producers across lifestyle, health, food, and consumer verticals.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2000&auto=format&fit=crop',
    capabilities: ['Media Outreach', 'Press Releases', 'Feature Stories', 'Broadcast Placement'],
    link: '/services/communications',
    reverse: true
  },
  {
    num: '03',
    label: 'Discipline',
    title: 'Thought Leadership',
    text: 'We position founders and executives as authoritative voices in their industry through strategic bylines, speaking opportunities, and expert commentary.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop',
    capabilities: ['Op-Eds', 'Speaking Engagements', 'Podcast Placement', 'Expert Commentary'],
    link: '/services/communications'
  }
]

const industries = [
  { 
    title: 'Wellness & Health', 
    text: 'From supplements to mental health platforms, fitness brands to holistic practitioners.', 
    link: '/wellness' 
  },
  { 
    title: 'Food & Beverage', 
    text: 'Emerging CPG brands, restaurant concepts, beverage innovators.', 
    link: '/food-beverage' 
  },
  { 
    title: 'Social Impact', 
    text: 'Nonprofits, B Corps, and mission-driven companies with a powerful purpose.', 
    link: '/work' 
  }
]

export default function ExpertisePage() {
  return (
    <div className="bg-adin-black min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[100vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2400&auto=format&fit=crop" 
            alt="Expertise" 
            fill 
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-adin-black via-adin-black/65 to-transparent" />
        </div>
        <div className="relative z-10 px-6 md:px-12 lg:px-16 pb-24 max-w-7xl mx-auto w-full">
          <Reveal>
            <SectionLabel className="mb-6">Our Expertise</SectionLabel>
            <DisplayHeading className="text-white max-w-4xl mb-8 text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
              Deep Knowledge.<br />Proven Results.
            </DisplayHeading>
            <p className="text-white/60 max-w-xl text-xl leading-relaxed">
              Specialized expertise across communications, experiences, and content for purpose-driven brands.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="py-32 px-6 md:px-12 lg:px-16 bg-adin-black">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-20">
            <SectionLabel className="mb-4">Core Capabilities</SectionLabel>
            <DisplayHeading className="text-white text-4xl md:text-6xl">Where We Excel.</DisplayHeading>
          </Reveal>
          
          <div className="space-y-32">
            {expertiseItems.map((item, i) => (
              <Reveal key={item.num} delay={i * 0.1}>
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center ${item.reverse ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:col-span-5 relative aspect-square lg:aspect-auto lg:h-[600px] overflow-hidden group">
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      fill 
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 border border-white/10 m-8" />
                  </div>
                  <div className="lg:col-span-7">
                    <SectionLabel className="mb-6">{item.num} — {item.label}</SectionLabel>
                    <h3 className="text-white font-heading font-black text-3xl md:text-5xl mb-8 tracking-tight">{item.title}</h3>
                    <p className="text-white/50 text-lg leading-relaxed mb-12 max-w-xl">
                      {item.text}
                    </p>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-12 max-w-lg">
                      {item.capabilities.map((cap) => (
                        <div key={cap} className="flex items-center gap-3 py-4 border-b border-white/5">
                          <span className="w-1 h-1 bg-adin-green rounded-full" />
                          <span className="text-white/40 font-heading font-bold text-[10px] uppercase tracking-widest">{cap}</span>
                        </div>
                      ))}
                    </div>
                    <Button href={item.link}>Explore Service →</Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY FOCUS */}
      <section className="relative py-48 px-6 md:px-12 lg:px-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2400&auto=format&fit=crop" 
            alt="Industry Focus" 
            fill 
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-adin-black/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <Reveal>
              <SectionLabel className="mb-8">Where We Focus</SectionLabel>
              <DisplayHeading className="text-white mb-10 text-4xl md:text-5xl lg:text-7xl leading-tight">
                Specializing in High-Growth Categories.
              </DisplayHeading>
              <p className="text-white/50 text-xl leading-relaxed mb-8 max-w-xl">
                Our expertise runs deepest in the categories where purpose and commerce intersect most powerfully.
              </p>
              <div className="flex flex-wrap gap-3 mt-12">
                {['Wellness', 'Food & Beverage', 'Social Impact', 'Lifestyle', 'Sustainability'].map(tag => (
                  <span key={tag} className="border border-white/20 px-6 py-2 font-heading font-bold text-[10px] uppercase tracking-widest text-white/50 hover:border-adin-green hover:text-white transition-all">
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
            <div className="space-y-0">
              {industries.map((ind, i) => (
                <Reveal key={ind.title} delay={i * 0.1} className={`py-12 border-white/10 ${i === industries.length - 1 ? 'border-y' : 'border-t'}`}>
                  <Link href={ind.link} className="flex justify-between items-center group">
                    <div className="max-w-xs">
                      <h3 className="text-white font-heading font-black text-2xl mb-3 tracking-tight group-hover:text-adin-green transition-colors">{ind.title}</h3>
                      <p className="text-white/40 text-sm leading-relaxed">{ind.text}</p>
                    </div>
                    <span className="text-adin-green group-hover:text-white group-hover:translate-x-2 transition-all">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M4 12h16M12 4l8 8-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-adin-green py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
            {[
              { val: '25+', label: 'Years Experience' },
              { val: '500+', label: 'Media Placements' },
              { val: '3', label: 'Core Disciplines' },
              { val: 'NYC', label: 'Based & Connected' }
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="text-white font-heading font-black text-4xl md:text-5xl mb-2">{stat.val}</p>
                <p className="text-white/60 uppercase tracking-widest text-[10px] font-bold">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRESS STRIP */}
      <section className="bg-adin-black py-32 px-6 md:px-12 lg:px-16 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-16">
            <SectionLabel className="justify-center">As Seen In</SectionLabel>
          </Reveal>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
            {['Vogue', 'Forbes', 'NYT', 'Bon Appétit', 'Fast Company'].map((logo) => (
              <span key={logo} className="font-heading font-black text-white/20 text-2xl md:text-3xl tracking-tighter hover:text-white/50 transition-colors cursor-default">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-adin-black py-40 px-6 md:px-12 lg:px-16 text-center">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <SectionLabel className="mb-8 justify-center">Next Steps</SectionLabel>
            <DisplayHeading className="text-white mb-10 text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-none">
              Explore Our Services.
            </DisplayHeading>
            <p className="text-white/40 text-xl leading-relaxed mb-16 max-w-xl mx-auto">
              Ready to put our expertise to work for your brand? Explore our full range of services or start a conversation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/services" className="px-12 py-8">
                View All Services →
              </Button>
              <Button href="/contact" variant="outline" className="px-12 py-8">
                Start a Conversation
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
