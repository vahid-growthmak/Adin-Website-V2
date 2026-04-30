'use client'

import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { DisplayHeading } from '@/components/ui/DisplayHeading'
import { Button } from '@/components/ui/Button'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const awards = [
  { title: 'PR Week Top 50 Firms', year: '2024', category: 'Industry Ranking' },
  { title: "Crain's New York Fast 50", year: '2023', category: 'Business Growth' },
  { title: 'Women-Led Business Excellence', year: '2023', category: 'Leadership' },
  { title: 'PR News PR People Award', year: '2022', category: 'Individual Excellence' },
  { title: 'PR Daily Digital PR Award', year: '2022', category: 'Digital Excellence' },
  { title: 'NYC Small Business of the Year', year: '2021', category: 'Business Excellence' },
  { title: 'Holmes Report Innovation SABRE', year: '2020', category: 'Innovation' },
  { title: 'Industry Communicator Award', year: '2019', category: 'Communications' }
]

const achievements = [
  {
    num: '01',
    title: 'Top 50 PR Firm',
    text: "Named to PR Week's Top 50 PR Firms list in 2024, placing ADIN NYC among the most respected communications agencies in the United States — a recognition driven by client results, team caliber, and industry impact."
  },
  {
    num: '02',
    title: 'Women-Led Leadership',
    text: "Recognized in 2023 for excellence in women-led business leadership, honoring founder Sue Asci's 25-year journey building an agency grounded in integrity, expertise, and purpose."
  },
  {
    num: '03',
    title: 'Innovation in PR',
    text: "Recipient of the Holmes Report Innovation SABRE Award in 2020, recognizing ADIN NYC's forward-thinking approach to integrated communications — blending earned media strategy with digital."
  }
]

export default function RecognitionsPage() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <div className="bg-adin-black min-h-screen">
      {/* HERO SECTION */}
      <section ref={containerRef} className="relative min-h-[70vh] flex items-end overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 scale-110">
          <Image 
            src="https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9?q=80&w=2400&auto=format&fit=crop" 
            alt="Recognition" 
            fill 
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-adin-black via-adin-black/60 to-transparent" />
        <div className="relative z-10 px-6 md:px-12 lg:px-16 pb-24 pt-48 max-w-7xl mx-auto w-full">
          <Reveal>
            <SectionLabel className="mb-6">Recognition</SectionLabel>
            <DisplayHeading className="text-white max-w-4xl mb-8 text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
              25 Years of Excellence, Recognized.
            </DisplayHeading>
            <p className="text-white/60 max-w-xl text-xl leading-relaxed">
              Industry awards and honors reflecting our commitment to strategic communications excellence.
            </p>
          </Reveal>
        </div>
      </section>

      {/* AWARDS GRID */}
      <section className="bg-white py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel className="mb-6 text-adin-green">Awards & Honors</SectionLabel>
            <DisplayHeading className="text-adin-black mb-20 text-4xl md:text-6xl">
              Recognized by the industry.
            </DisplayHeading>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, i) => (
              <Reveal key={award.title} delay={i * 0.1}>
                <div className="bg-white border border-black/5 p-10 h-full flex flex-col items-center text-center group hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 hover:-translate-y-2">
                  <div className="w-14 h-14 rounded-full bg-adin-green/5 flex items-center justify-center mb-8 group-hover:bg-adin-green/10 transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#0F5E4E"/>
                    </svg>
                  </div>
                  <h3 className="text-adin-black font-heading font-black text-lg leading-tight mb-4">{award.title}</h3>
                  <div className="mt-auto pt-6 border-t border-black/5 w-full">
                    <p className="text-adin-black/40 font-mono text-[10px] uppercase tracking-widest font-bold mb-1">{award.year}</p>
                    <p className="text-adin-green font-mono text-[9px] uppercase tracking-widest font-bold">{award.category}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MILESTONE */}
      <section className="bg-adin-black py-32 px-6 md:px-12 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <Reveal>
              <SectionLabel className="mb-8">Milestone</SectionLabel>
              <DisplayHeading className="text-white mb-10 text-4xl md:text-6xl lg:text-7xl leading-tight">
                25 Years<br />in Business.
              </DisplayHeading>
              <div className="space-y-6 text-white/50 text-xl leading-relaxed max-w-xl">
                <p>Founded in 1998, ADIN NYC has spent a quarter century building some of the most meaningful brand narratives in wellness, food &amp; beverage, and social impact.</p>
                <p>What started as a focused PR practice has grown into a full-service communications and strategy agency — one that has earned the trust of hundreds of purpose-driven brands.</p>
              </div>
              <div className="grid grid-cols-3 gap-12 mt-16 pt-16 border-t border-white/10">
                <div>
                  <p className="text-white font-heading font-black text-4xl mb-2">25+</p>
                  <p className="text-white/30 text-[9px] uppercase tracking-widest font-bold">Years</p>
                </div>
                <div>
                  <p className="text-white font-heading font-black text-4xl mb-2">300+</p>
                  <p className="text-white/30 text-[9px] uppercase tracking-widest font-bold">Brands</p>
                </div>
                <div>
                  <p className="text-white font-heading font-black text-4xl mb-2">8+</p>
                  <p className="text-white/30 text-[9px] uppercase tracking-widest font-bold">Awards</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2} className="relative aspect-square lg:aspect-[4/5]">
              <Image 
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000&auto=format&fit=crop" 
                alt="Legacy" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 border border-white/10 m-8" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="bg-adin-black py-32 px-6 md:px-12 lg:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel className="mb-20">Key Achievements</SectionLabel>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {achievements.map((item, i) => (
              <Reveal key={item.num} delay={i * 0.1}>
                <div className="group">
                  <p className="text-adin-green font-heading font-black text-7xl mb-8 group-hover:translate-x-2 transition-transform duration-500">{item.num}</p>
                  <h3 className="text-white font-heading font-black text-2xl mb-6">{item.title}</h3>
                  <p className="text-white/40 text-lg leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-adin-black py-32 px-6 md:px-12 lg:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-16">
          <Reveal>
            <SectionLabel className="mb-8">Work With Us</SectionLabel>
            <DisplayHeading className="text-white max-w-xl text-3xl md:text-5xl lg:text-6xl">
              Experience award-winning communications.
            </DisplayHeading>
          </Reveal>
          <Reveal delay={0.2} className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
            <Button href="/contact" className="px-10 py-8 justify-center">
              Get in Touch →
            </Button>
            <Button variant="outline" href="/work" className="px-10 py-8 justify-center">
              View Our Work →
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
