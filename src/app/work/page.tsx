'use client'

import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { DisplayHeading } from '@/components/ui/DisplayHeading'
import { Button } from '@/components/ui/Button'
import { work } from '@/data/work'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const services = [
  { label: 'All', value: 'all' },
  { label: 'Communications', value: 'Communications' },
  { label: 'Experiences', value: 'Experiences' },
  { label: 'Content Creation', value: 'Content Creation' },
  { label: 'Advisory', value: 'Advisory' }
]

const industries = [
  { label: 'All', value: 'all' },
  { label: 'Wellness & Nutrition', value: 'Wellness' },
  { label: 'Food & Beverage', value: 'Food & Beverage' },
  { label: 'Social Impact', value: 'Social' }
]

export default function WorkPage() {
  const [activeService, setActiveService] = useState('all')
  const [activeIndustry, setActiveIndustry] = useState('all')

  const filteredWork = useMemo(() => {
    return work.filter(item => {
      const serviceMatch = activeService === 'all' || item.service.includes(activeService)
      const industryMatch = activeIndustry === 'all' || item.industry.includes(activeIndustry)
      return serviceMatch && industryMatch
    })
  }, [activeService, activeIndustry])

  return (
    <main className="bg-adin-black min-h-screen">
      {/* HERO SECTION */}
      <section className="px-6 md:px-12 lg:px-16 pt-40 pb-20 md:pt-48 md:pb-24 flex flex-col justify-center min-h-[50vh]">
        <div className="max-w-7xl mx-auto w-full text-center">
          <Reveal>
            <SectionLabel className="mb-6">Case Studies</SectionLabel>
            <DisplayHeading className="text-white mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-[80px] xl:text-[96px]">
              Stories That Move the Needle.
            </DisplayHeading>
            <p className="text-white/50 max-w-2xl mx-auto text-xl leading-relaxed">
              Explore our campaigns and brand stories from 25+ years of purpose-driven communications.
            </p>
          </Reveal>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-adin-green py-8 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-y-8 md:gap-0 md:divide-x md:divide-white/20">
            {[
              { val: '50M+', label: 'Media Impressions' },
              { val: '100+', label: 'Brands Served' },
              { val: '25+', label: 'Years' },
              { val: '4', label: 'Service Areas' }
            ].map((stat, i) => (
              <div key={i} className="px-10 md:px-16 text-center">
                <p className="text-white font-heading font-black text-3xl md:text-4xl tracking-tighter">{stat.val}</p>
                <p className="text-white/60 uppercase tracking-widest text-[9px] font-bold mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <div className="sticky top-[72px] z-40 bg-adin-black/80 backdrop-blur-md border-y border-white/5 py-6 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest mr-4">Service:</span>
            {services.map(s => (
              <button 
                key={s.value}
                onClick={() => setActiveService(s.value)}
                className={`px-6 py-2 border transition-all text-[10px] font-bold uppercase tracking-widest ${activeService === s.value ? 'border-adin-green bg-adin-green/10 text-white' : 'border-white/10 text-white/40 hover:border-white/30'}`}
              >
                {s.label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest mr-4">Industry:</span>
            {industries.map(i => (
              <button 
                key={i.value}
                onClick={() => setActiveIndustry(i.value)}
                className={`px-6 py-2 border transition-all text-[10px] font-bold uppercase tracking-widest ${activeIndustry === i.value ? 'border-adin-green bg-adin-green/10 text-white' : 'border-white/10 text-white/40 hover:border-white/30'}`}
              >
                {i.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* PORTFOLIO GRID */}
      <section className="py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredWork.map((item, idx) => {
                // Mimic the irregular grid of the source
                const isLarge = idx % 4 === 0 || idx % 4 === 3
                const span = isLarge ? 'md:col-span-7' : 'md:col-span-5'
                const height = isLarge ? 'h-[560px]' : 'h-[480px]'
                
                return (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className={`col-span-12 ${span} ${height} relative group overflow-hidden cursor-pointer`}
                  >
                    <Link href={`/work/${item.slug}`} className="block h-full">
                      <Image 
                        src={item.image.startsWith('/') ? item.image : item.heroImage} 
                        alt={item.title} 
                        fill 
                        className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                      />
                      
                      {/* Default View Info */}
                      <div className="absolute inset-0 bg-gradient-to-t from-adin-black/90 via-adin-black/40 to-transparent flex flex-col justify-end p-10 group-hover:opacity-0 transition-opacity">
                        <SectionLabel className="mb-4 text-white/70">{item.service}</SectionLabel>
                        <h3 className="text-white font-heading font-black text-2xl md:text-3xl tracking-tight mb-2">{item.client}</h3>
                        <p className="text-adin-green text-[10px] font-bold uppercase tracking-widest">{item.impact}</p>
                      </div>

                      {/* Hover View Info */}
                      <div className="absolute inset-0 bg-adin-green/90 flex flex-col justify-end p-10 opacity-0 group-hover:opacity-100 transition-opacity">
                        <SectionLabel className="mb-4 text-white/70">{item.service}</SectionLabel>
                        <h3 className="text-white font-heading font-black text-2xl md:text-3xl tracking-tight mb-4">{item.title}</h3>
                        <p className="text-white/80 text-sm leading-relaxed mb-8 max-w-sm">{item.description}</p>
                        <div className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[10px]">
                          View Case Study 
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 px-6 md:px-12 lg:px-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <SectionLabel className="mb-16">Client Voices</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            <Reveal>
              <div className="pt-10 border-t border-white/10">
                <svg className="mb-8 opacity-20" width="40" height="28" viewBox="0 0 40 28" fill="none"><path d="M0 28V17.5C0 7.833 5.333 2.333 16 1L17.5 3.5C13.5 4.5 10.667 6.167 9 8.5C7.333 10.833 6.667 13.333 7 16H16V28H0ZM24 28V17.5C24 7.833 29.333 2.333 40 1L41.5 3.5C37.5 4.5 34.667 6.167 33 8.5C31.333 10.833 30.667 13.333 31 16H40V28H24Z" fill="white"/></svg>
                <p className="text-white/70 italic text-xl leading-relaxed mb-10">&quot;ADIN leveraged our company&apos;s pivot into producing facemasks to generate millions of consumer impressions, driving both brand awareness and sales.&quot;</p>
                <div>
                  <p className="text-white font-heading font-black tracking-tight text-sm uppercase">Barry Cik</p>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1">Founder, Naturepedic</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="pt-10 border-t border-white/10">
                <svg className="mb-8 opacity-20" width="40" height="28" viewBox="0 0 40 28" fill="none"><path d="M0 28V17.5C0 7.833 5.333 2.333 16 1L17.5 3.5C13.5 4.5 10.667 6.167 9 8.5C7.333 10.833 6.667 13.333 7 16H16V28H0ZM24 28V17.5C24 7.833 29.333 2.333 40 1L41.5 3.5C37.5 4.5 34.667 6.167 33 8.5C31.333 10.833 30.667 13.333 31 16H40V28H24Z" fill="white"/></svg>
                <p className="text-white/70 italic text-xl leading-relaxed mb-10">&quot;ADIN has a unique ability to identify opportunities and trends. For purpose-driven entrepreneurs like myself, that insight is invaluable.&quot;</p>
                <div>
                  <p className="text-white font-heading font-black tracking-tight text-sm uppercase">Kari Warberg Block</p>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1">CEO & Founder, EarthKind</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 px-6 md:px-12 lg:px-16 text-center relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--adin-green)_0%,_transparent_70%)]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <Reveal>
            <SectionLabel className="mb-6">Start Your Story</SectionLabel>
            <DisplayHeading className="text-white mb-10 text-4xl md:text-6xl lg:text-[80px] leading-none">
              Ready to Share Your Mission?
            </DisplayHeading>
            <div className="flex justify-center">
              <Button href="/contact" className="px-16 py-6">Begin a Project →</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
