'use client'

import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { DisplayHeading } from '@/components/ui/DisplayHeading'
import { Button } from '@/components/ui/Button'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const categories = ['all', 'business', 'pr', 'lifestyle', 'health']

const pressItems = [
  {
    category: 'business',
    pub: 'Forbes',
    date: 'Jan 2025',
    title: 'ADIN NYC Named Among Top PR Firms for Purpose-Driven Brands',
    excerpt: "Forbes recognized ADIN NYC among the leading communications agencies working with purpose-driven brands, citing the firm's selective client approach and consistent results across wellness and food & beverage categories.",
    href: '#'
  },
  {
    category: 'pr',
    pub: 'PR Week',
    date: 'Dec 2024',
    title: "The Changing Face of Purpose-Led Communications: ADIN NYC's Approach",
    excerpt: "PR Week profiled ADIN NYC's methodology for building authentic brand narratives, exploring how the agency's founder-focused approach and category expertise produce results that outlast traditional PR campaigns.",
    href: '#'
  },
  {
    category: 'business',
    pub: 'Fast Company',
    date: 'Nov 2024',
    title: 'How This NYC Agency Is Redefining PR for Conscious Brands',
    excerpt: 'Fast Company featured ADIN NYC as a model for the new generation of communications agencies, exploring how the firm navigates the intersection of purpose, authenticity, and measurable business impact for its clients.',
    href: '#'
  },
  {
    category: 'business',
    pub: 'Inc.',
    date: 'Oct 2024',
    title: 'Sue Asci on Building a Communications Agency With Purpose at Its Core',
    excerpt: "Inc. Magazine featured a profile of ADIN NYC founder Sue Asci, tracing the agency's evolution from a boutique communications shop to one of New York's most respected purpose-driven PR firms over 25 years.",
    href: '#'
  },
  {
    category: 'business',
    pub: "Crain's New York",
    date: 'Sep 2024',
    title: 'ADIN NYC Marks 25 Years of Purpose-Driven Brand Communications',
    excerpt: "Crain's New York Business covered ADIN NYC's 25th anniversary milestone, examining the agency's founding philosophy, key client milestones, and its enduring commitment to brands creating positive change in the world.",
    href: '#'
  },
  {
    category: 'pr',
    pub: 'Ad Age',
    date: 'Aug 2024',
    title: 'Brand Communications in 2024: Why Authenticity Wins',
    excerpt: "Advertising Age cited ADIN NYC's communications philosophy in an industry analysis of the shift toward authentic storytelling, featuring commentary from Sue Asci on why purpose-led brands are outperforming peers in earned media.",
    href: '#'
  },
  {
    category: 'pr',
    pub: "O'Dwyer's",
    date: 'Jul 2024',
    title: 'ADIN NYC Expands Advisory Practice for Startup Founders',
    excerpt: "O'Dwyer's PR Report covered the expansion of ADIN NYC's advisory practice, including a new consulting offering designed specifically for early-stage founders looking to build their communications foundation.",
    href: '#'
  },
  {
    category: 'health',
    pub: 'Wellness Trade',
    date: 'Jun 2024',
    title: 'Top PR Firms for Wellness Brands: ADIN NYC Leads the Pack',
    excerpt: "Wellness Trade Magazine's annual ranking of top PR agencies for the health and wellness industry named ADIN NYC among the leading firms, praising the agency's deep category knowledge.",
    href: '#'
  },
  {
    category: 'lifestyle',
    pub: 'Food Business News',
    date: 'May 2024',
    title: "Communications Strategy for F&B Brands: ADIN NYC's Playbook",
    excerpt: "Food Business News featured ADIN NYC's strategic approach to food and beverage brand communications, including the agency's framework for navigating the complex landscape of health claims.",
    href: '#'
  }
]

export default function PressPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredItems = pressItems.filter(item => 
    activeFilter === 'all' || item.category === activeFilter
  )

  return (
    <main className="bg-adin-black min-h-screen">
      {/* HEADER SECTION */}
      <section className="px-6 md:px-12 lg:px-16 pt-40 pb-20 md:pt-48 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <SectionLabel className="mb-6">In the Press</SectionLabel>
                <DisplayHeading className="text-white mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px]">
                  ADIN NYC<br />in the Media.
                </DisplayHeading>
                <p className="text-white/50 max-w-2xl leading-relaxed text-xl">
                  Recent press coverage, media mentions, and industry recognition highlighting ADIN NYC&apos;s work and impact.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.2}>
                <div className="grid grid-cols-3 border border-white/10 bg-white/[0.02]">
                  <div className="p-8 text-center border-r border-white/10">
                    <p className="text-white font-heading font-black text-3xl mb-1">25+</p>
                    <p className="text-white/30 text-[9px] uppercase tracking-widest font-bold">Years</p>
                  </div>
                  <div className="p-8 text-center border-r border-white/10">
                    <p className="text-white font-heading font-black text-3xl mb-1">100+</p>
                    <p className="text-white/30 text-[9px] uppercase tracking-widest font-bold">Placements</p>
                  </div>
                  <div className="p-8 text-center">
                    <p className="text-white font-heading font-black text-3xl mb-1">50+</p>
                    <p className="text-white/30 text-[9px] uppercase tracking-widest font-bold">Pubs</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FILTERABLE LIST */}
      <section className="py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <Reveal>
            <div className="flex flex-wrap gap-4 mb-20">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                    activeFilter === cat 
                      ? 'bg-adin-green text-white' 
                      : 'border border-white/10 text-white/40 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          {/* List */}
          <div className="space-y-0">
            <AnimatePresence mode="wait">
              {filteredItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="group"
                >
                  <div className="py-12 border-b border-white/5 group-hover:bg-white/[0.01] transition-colors flex flex-col md:flex-row gap-12 items-start md:px-8 -mx-8">
                    <div className="w-40 h-20 bg-white/[0.03] border border-white/5 flex items-center justify-center p-6 flex-shrink-0 group-hover:border-adin-green transition-colors">
                      <span className="text-white font-heading font-black text-center leading-tight tracking-tight text-lg">
                        {item.pub}
                      </span>
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-4">
                        <SectionLabel className="text-white/40">{item.date}</SectionLabel>
                        <span className="w-1 h-1 rounded-full bg-adin-green" />
                        <span className="text-adin-green text-[10px] font-bold uppercase tracking-widest">{item.category}</span>
                      </div>
                      <h3 className="text-white font-heading font-black text-2xl md:text-3xl tracking-tight leading-tight group-hover:text-adin-green transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-white/40 text-lg leading-relaxed max-w-3xl">
                        {item.excerpt}
                      </p>
                      <Link 
                        href={item.href}
                        className="inline-flex items-center gap-2 text-white font-bold text-[10px] uppercase tracking-widest hover:text-adin-green transition-colors"
                      >
                        Read Article 
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* MEDIA INQUIRIES CTA */}
      <section className="bg-adin-black py-32 px-6 md:px-12 lg:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <SectionLabel className="mb-8">Media Inquiries</SectionLabel>
              <DisplayHeading className="text-white mb-8 text-4xl md:text-6xl lg:text-7xl leading-tight">
                Press &amp; Media<br />Contact.
              </DisplayHeading>
              <p className="text-white/50 text-xl leading-relaxed max-w-xl mb-12">
                For press kits, interviews, speaking requests, or media inquiries about ADIN NYC, our team is ready to assist.
              </p>
              
              <div className="space-y-6">
                <Link href="mailto:press@adinnyc.com" className="flex items-center gap-4 text-white group">
                  <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-adin-green transition-colors">
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none"><path d="M2 4l6 5 6-5M2 4h12v8H2V4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span className="text-lg font-medium group-hover:text-adin-green transition-colors">press@adinnyc.com</span>
                </Link>
                <Link href="tel:+12125550100" className="flex items-center gap-4 text-white group">
                  <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-adin-green transition-colors">
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none"><path d="M3 3h3l1.5 3.5-1.75 1A9 9 0 009.5 10.25l1-1.75L14 10v3a1 1 0 01-1 1C6.373 14 2 9.627 2 4a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span className="text-lg font-medium group-hover:text-adin-green transition-colors">+1 (212) 555-0100</span>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="bg-white/[0.03] border border-white/5 p-12">
                <SectionLabel className="mb-10">Press Kit Includes</SectionLabel>
                <ul className="space-y-6">
                  {[
                    'Agency overview & founding story',
                    'Founder biography & headshots',
                    'Brand guidelines & logo files',
                    'Client roster & case summaries',
                    'Recent press coverage & awards',
                    'Subject matter expertise'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-white/60 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-adin-green" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="w-full justify-center mt-12 py-6">Download Press Kit →</Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}
