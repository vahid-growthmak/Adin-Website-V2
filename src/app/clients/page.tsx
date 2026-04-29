'use client'

import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { DisplayHeading } from '@/components/ui/DisplayHeading'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

const featuredClients = [
  { name: 'EarthKind', href: '/work/earthkind' },
  { name: 'Kamut', href: '#' },
  { name: 'Setria', href: '#' },
  { name: 'Designs for Health', href: '/work/designs-for-health' },
  { name: 'Kyowa Hakko', href: '#' },
  { name: 'Teens for Food Justice', href: '#' },
  { name: 'Cognizin', href: '#' },
  { name: 'Hooray Foods', href: '/work/hooray-foods' },
  { name: 'Naturepedic', href: '/work/naturepedic' },
  { name: 'Dukan Diet', href: '#' },
  { name: 'Trilogy', href: '#' },
  { name: 'EarthFruits', href: '#' }
]

const fullRoster = [
  { id: '01', name: 'EarthKind', category: 'Wellness / Sustainability', href: '/work/earthkind' },
  { id: '02', name: 'Kamut', category: 'Food & Beverage', href: '#' },
  { id: '03', name: 'Setria', category: 'Health / Supplements', href: '#' },
  { id: '04', name: 'Designs for Health', category: 'Health / Nutrition', href: '/work/designs-for-health' },
  { id: '05', name: 'Kyowa Hakko', category: 'Biotech / Wellness', href: '#' },
  { id: '06', name: 'Teens for Food Justice', category: 'Nonprofit / Social Impact', href: '#' },
  { id: '07', name: 'Cognizin', category: 'Cognitive Health', href: '#' },
  { id: '08', name: 'Hooray Foods', category: 'Food & Beverage', href: '/work/hooray-foods' },
  { id: '09', name: 'Naturepedic', category: 'Home / Wellness', href: '/work/naturepedic' },
  { id: '10', name: 'Dukan Diet', category: 'Nutrition / Lifestyle', href: '#' },
  { id: '11', name: 'Trilogy', category: 'Beauty / Skincare', href: '#' },
  { id: '12', name: 'EarthFruits', category: 'Food & Beverage', href: '#' }
]

const testimonials = [
  {
    quote: "ADIN NYC didn't just tell our story — they helped us understand it. Their strategic guidance elevated our brand in ways we hadn't imagined possible.",
    author: "Jessica Lee",
    role: "Founder, EarthKind",
    initials: "JL"
  },
  {
    quote: "Their deep network of media contacts and genuine understanding of the wellness space set them apart from every other agency we considered.",
    author: "Michael Romano",
    role: "CEO, Cognizin",
    initials: "MR"
  },
  {
    quote: "Working with ADIN NYC transformed how we communicate our mission. They understand purpose-driven brands at a fundamental level.",
    author: "Alicia Park",
    role: "Director, Teens for Food Justice",
    initials: "AP"
  }
]

export default function ClientsPage() {
  return (
    <main className="bg-adin-black min-h-screen">
      {/* HERO SECTION */}
      <section className="px-6 md:px-12 lg:px-16 pt-40 pb-20 md:pt-48 md:pb-24">
        <div className="max-w-7xl mx-auto w-full">
          <Reveal>
            <SectionLabel className="mb-6">Our Clients</SectionLabel>
            <DisplayHeading className="text-white mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px]">
              Brands We&apos;re Proud<br />to Champion.
            </DisplayHeading>
            <p className="text-white/50 max-w-2xl leading-relaxed text-xl">
              The brands we represent are companies whose products we proudly use ourselves. They may not always be the largest in their category, but they are among the most respected for their integrity, innovation and commitment to purpose.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FEATURED CLIENTS GRID */}
      <section className="bg-adin-light py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel className="text-adin-green mb-10">Featured Clients</SectionLabel>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-l border-t border-adin-black/5">
            {featuredClients.map((client, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <Link 
                  href={client.href}
                  className="group aspect-square flex items-center justify-center p-8 border-r border-b border-adin-black/5 hover:bg-white transition-all duration-500"
                >
                  <span className="font-heading font-black text-adin-black tracking-tighter text-xl md:text-2xl lg:text-3xl text-center group-hover:text-adin-green transition-colors leading-tight">
                    {client.name}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FULL ROSTER LIST */}
      <section className="py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
            <Reveal>
              <SectionLabel className="mb-6">Complete Roster</SectionLabel>
              <DisplayHeading className="text-white text-3xl md:text-5xl lg:text-6xl tracking-tight leading-none">
                Full Client Roster.
              </DisplayHeading>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-white/30 text-lg max-w-xs md:text-right">
                Representing purpose-driven brands across wellness, food & beverage, and beyond.
              </p>
            </Reveal>
          </div>

          <div className="border-t border-white/5">
            {fullRoster.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.05}>
                <Link 
                  href={item.href}
                  className="grid grid-cols-12 items-center py-8 px-4 border-b border-white/5 group hover:bg-white/[0.02] transition-colors"
                >
                  <span className="col-span-1 font-mono text-white/20 text-xs">{item.id}</span>
                  <span className="col-span-7 md:col-span-5 text-white font-heading font-black text-2xl md:text-3xl tracking-tight group-hover:text-adin-green transition-colors">
                    {item.name}
                  </span>
                  <span className="col-span-4 hidden md:block text-white/30 uppercase tracking-widest text-[10px] font-bold">
                    {item.category}
                  </span>
                  <div className="col-span-2 md:col-span-1 flex justify-end">
                    <div className="w-2 h-2 rounded-full bg-adin-green opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 px-6 md:px-12 lg:px-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel className="mb-16">What Clients Say</SectionLabel>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="border-t border-white/10 pt-10">
                  <p className="text-white/70 text-lg leading-relaxed mb-10 italic">&quot;{t.quote}&quot;</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-adin-green rounded-full flex items-center justify-center text-white font-black text-xs">{t.initials}</div>
                    <div>
                      <p className="text-white font-bold text-sm tracking-tight">{t.author}</p>
                      <p className="text-white/30 text-[10px] uppercase tracking-widest mt-1">{t.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-adin-green py-32 px-6 md:px-12 lg:px-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <SectionLabel className="text-white/50 mb-6">Work With Us</SectionLabel>
              <DisplayHeading className="text-white mb-8 text-4xl md:text-6xl lg:text-7xl leading-tight">
                Join Our Client Roster.
              </DisplayHeading>
              <p className="text-white/70 text-xl leading-relaxed max-w-xl">
                We partner selectively with brands whose products and missions we believe in. If you&apos;re building something meaningful, we&apos;d love to hear about it.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="lg:flex lg:justify-end">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 px-12 py-6 border border-white text-white font-bold uppercase tracking-widest text-[11px] hover:bg-white hover:text-adin-green transition-all group"
              >
                Start a Conversation 
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}
