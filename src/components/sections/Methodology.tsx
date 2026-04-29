'use client'

import { Reveal } from '../ui/Reveal'
import { SectionLabel } from '../ui/SectionLabel'
import { DisplayHeading } from '../ui/DisplayHeading'

const phases = [
  {
    number: '01',
    label: 'Phase One',
    title: 'Discovery',
    description: 'Deep-dive research and stakeholder immersion. We learn everything about your brand, your audience, and your competitive landscape before developing a single strategy.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 22 22" fill="none">
        <circle cx="10" cy="10" r="7" stroke="#0F5E4E" strokeWidth="1.5" />
        <path d="M15 15L19 19" stroke="#0F5E4E" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    number: '02',
    label: 'Phase Two',
    title: 'Execution',
    description: 'Precise, relentless activation across every relevant channel. We deploy our media relationships, creative capabilities, and event expertise to bring your strategy to life with excellence.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 22 22" fill="none">
        <path d="M4 11L9 16L18 6" stroke="#0F5E4E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    number: '03',
    label: 'Phase Three',
    title: 'Measurement',
    description: 'Transparent performance tracking against agreed KPIs with regular reporting and strategic optimization. We tie every action to business outcomes and continuously improve our approach.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 22 22" fill="none">
        <polyline points="3 15 8 10 12 13 17 7 21 10" stroke="#0F5E4E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
]

export function Methodology() {
  return (
    <section className="bg-adin-light py-24 md:py-32 px-6 md:px-12 lg:px-16">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-20">
          <Reveal>
            <SectionLabel className="mb-8 !text-adin-green">How We Work</SectionLabel>
            <DisplayHeading className="text-adin-black text-[clamp(40px,6vw,72px)] leading-[0.95]">
              Methodology<span className="text-adin-green">.</span>
            </DisplayHeading>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <Reveal key={phase.number} delay={index * 0.1}>
              <div className="bg-white/40 p-10 md:p-12 border border-adin-black/5 h-full flex flex-col hover:border-adin-green/40 transition-colors group">
                <div className="w-12 h-12 bg-adin-green/5 border border-adin-green/10 flex items-center justify-center mb-10 group-hover:bg-adin-green group-hover:text-white transition-all duration-300">
                  <div className="group-hover:text-white transition-colors">
                    {phase.icon}
                  </div>
                </div>
                <p className="font-heading font-bold text-adin-green text-[10px] uppercase tracking-[0.2em] mb-4">
                  {phase.label}
                </p>
                <h3 className="font-heading font-black text-adin-black text-3xl mb-6 tracking-tight">
                  {phase.title}
                </h3>
                <p className="font-body text-adin-black/60 text-base md:text-lg leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
