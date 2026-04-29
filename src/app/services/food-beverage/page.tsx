'use client'

import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { DisplayHeading } from '@/components/ui/DisplayHeading'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import Link from 'next/link'

const additionalServices = [
  {
    num: '01',
    title: 'Product Launch PR',
    description: 'Full-spectrum launch campaigns for new F&B products — from pre-launch buzz building and media seeding to launch day coverage and post-launch momentum.',
    tags: ['Launch Strategy', 'Media Seeding', 'Influencer Sampling']
  },
  {
    num: '02',
    title: 'Event Activations & Demos',
    description: 'Consumer-facing brand activations and in-store demonstration programs that put your product directly in the hands of your ideal customers.',
    tags: ['In-Store Demos', 'Pop-Ups', 'Sampling']
  },
  {
    num: '03',
    title: 'Thought Leadership',
    description: 'Positioning F&B founders as authoritative voices in food innovation, sustainability, nutrition, and entrepreneurship.',
    tags: ['Op-Eds', 'Speaking', 'Podcasts']
  }
]

const galleryImages = [
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1543353071-873f17a7a088?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=800&auto=format&fit=crop'
]

export default function FoodBeverageIndustryPage() {
  return (
    <main className="bg-adin-black min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[75vh] flex items-end">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2400&auto=format&fit=crop" 
            alt="Food & Beverage Industry" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-adin-black via-adin-black/60 to-adin-black/30" />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 pb-20 md:pb-28 pt-40">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <SectionLabel className="mb-6">Food & Beverage</SectionLabel>
              <DisplayHeading className="text-white max-w-5xl mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px]">
                PR for Brands That Feed a Better Future.
              </DisplayHeading>
              <p className="text-white/60 max-w-2xl text-xl leading-relaxed">
                Specialized communications for food & beverage founders building brands worth believing in — from farm-to-shelf storytelling to national media coverage.
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
              <SectionLabel className="mb-6">Our Expertise</SectionLabel>
              <h2 className="text-white font-heading font-black text-3xl md:text-5xl lg:text-6xl mb-10 tracking-tight leading-[1.1]">
                Specialized Media Relations for F&B Brands.
              </h2>
              <p className="text-white/55 text-lg md:text-xl leading-relaxed mb-12 max-w-xl">
                With 20+ years operating at the intersection of food culture, wellness, and retail, we have the relationships and the instincts to get your brand in front of the editors who define what consumers reach for.
              </p>
              <div className="space-y-8">
                {[
                  { title: 'Food Media Relations', desc: 'Earned coverage in top food, lifestyle, and consumer media outlets — from national magazines to broadcast segments.' },
                  { title: 'Trade Publications', desc: 'Strategic placements in grocery trade and industry publications that open doors with buyers and retail partners.' },
                  { title: 'Culinary Influencers', desc: 'Authentic partnerships with food content creators and chefs whose audiences trust their recommendations.' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="w-2 h-2 rounded-full bg-adin-green mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-white font-bold uppercase tracking-widest text-[11px] mb-2">{item.title}</p>
                      <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="relative h-[600px] overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2000&auto=format&fit=crop" 
                  alt="Food Media Relations" 
                  fill 
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ADDITIONAL SERVICES */}
      <section className="py-32 px-6 md:px-12 lg:px-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <SectionLabel className="mb-6">Additional Services</SectionLabel>
            <DisplayHeading className="text-white text-3xl md:text-5xl">Beyond the Press Release</DisplayHeading>
          </div>
          
          <div className="space-y-0">
            {additionalServices.map((service, i) => (
              <Reveal key={service.num} delay={i * 0.1}>
                <div className="py-12 border-t border-white/5 flex flex-col md:flex-row gap-12 group hover:bg-white/[0.02] transition-colors px-4">
                  <div className="md:w-16 flex-shrink-0">
                    <span className="text-adin-green font-heading font-black text-3xl">{service.num}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                      <div className="flex-1">
                        <h3 className="text-white font-heading font-black text-2xl mb-4 tracking-tight">{service.title}</h3>
                        <p className="text-white/40 text-base leading-relaxed max-w-xl">{service.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 lg:justify-end lg:max-w-[300px]">
                        {service.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 border border-white/10 text-[9px] font-bold uppercase tracking-widest text-white/30">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-32 px-6 md:px-12 lg:px-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <svg width="40" height="30" viewBox="0 0 32 24" fill="none" className="mb-12 opacity-20 mx-auto">
              <path d="M0 24V14.4C0 10.56 0.96 7.28 2.88 4.56C4.96 1.68 8 0.08 12 0V4.56C9.92 4.88 8.4 5.84 7.44 7.44C6.64 8.88 6.24 10.56 6.24 12.48H12V24H0ZM20 24V14.4C20 10.56 20.96 7.28 22.88 4.56C24.96 1.68 28 0.08 32 0V4.56C29.92 4.88 28.4 5.84 27.44 7.44C26.64 8.88 26.24 10.56 26.24 12.48H32V24H20Z" fill="white"/>
            </svg>
            <p className="text-white/70 italic text-2xl md:text-3xl leading-relaxed mb-12">
              &quot;ADIN&apos;s deep knowledge of the food media landscape helped us secure coverage in outlets we never thought possible. They truly understand what food journalists are looking for.&quot;
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-adin-green rounded-full flex items-center justify-center text-white font-black">HF</div>
              <div className="text-left">
                <p className="text-white font-bold text-sm tracking-tight">Sean O&apos;Brien</p>
                <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1">CEO, Hooray Foods</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-32 px-6 md:px-12 lg:px-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel className="mb-6">The World We Work In</SectionLabel>
            <DisplayHeading className="text-white mb-16 text-3xl md:text-5xl">Food & Beverage, Elevated</DisplayHeading>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {galleryImages.map((src, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className={`relative h-[400px] overflow-hidden ${i % 2 === 1 ? 'mt-12' : ''}`}>
                  <Image src={src} alt={`Food gallery ${i}`} fill className="object-cover transition-transform duration-1000 hover:scale-105" />
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
            <SectionLabel className="mb-6">Ready to Begin</SectionLabel>
            <DisplayHeading className="text-white mb-10 text-4xl md:text-6xl lg:text-[80px] leading-none">
              Let&apos;s Grow Your F&B Brand.
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
