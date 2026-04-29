'use client'

import { Reveal } from '../ui/Reveal'
import { SectionLabel } from '../ui/SectionLabel'
import { DisplayHeading } from '../ui/DisplayHeading'

const points = [
  {
    title: '25+ Years Experience',
    description: "Two-and-a-half decades of navigating the ever-evolving media landscape means we've seen it all — and we know exactly how to get your brand in front of the right people.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="7" stroke="#0F5E4E" strokeWidth="1.5" />
        <path d="M9 5v4l3 2" stroke="#0F5E4E" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Founder-First Approach',
    description: 'We work directly with founders and senior leadership — not intermediaries. Your vision drives our strategy, and your success is our singular focus from day one.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 18 18" fill="none">
        <path d="M9 2L11 7H16L12 10.5L13.5 15.5L9 12.5L4.5 15.5L6 10.5L2 7H7L9 2Z" stroke="#0F5E4E" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Purpose-Driven Focus',
    description: "We exclusively partner with brands that are genuinely trying to make a difference. This focus makes us sharper, more passionate advocates for our clients' stories.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 18 18" fill="none">
        <path d="M9 16C9 16 2 13 2 7.5V4L9 2L16 4V7.5C16 13 9 16 9 16Z" stroke="#0F5E4E" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Measurable Results',
    description: 'We hold ourselves accountable to real outcomes — placements, impressions, brand lift, and business growth. Our work is always tied to what matters most to you.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 18 18" fill="none">
        <polyline points="2 11 6 7 9 10 13 5 16 8" stroke="#0F5E4E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="2" y1="15" x2="16" y2="15" stroke="#0F5E4E" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

export function AdinDifference() {
  return (
    <section className="bg-adin-black py-24 md:py-32 px-6 md:px-12 lg:px-16 border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-20">
          <Reveal>
            <SectionLabel className="mb-8">Why ADIN</SectionLabel>
            <DisplayHeading className="text-white text-[clamp(40px,6vw,72px)] leading-[0.95]">
              The ADIN Difference<span className="text-adin-green">.</span>
            </DisplayHeading>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {points.map((point, index) => (
            <Reveal key={point.title} delay={index * 0.1}>
              <div className="flex gap-8 group p-8 border border-white/5 hover:border-adin-green/40 transition-colors bg-white/[0.02]">
                <div className="flex-shrink-0 w-12 h-12 bg-adin-green/10 border border-adin-green/20 flex items-center justify-center group-hover:bg-adin-green group-hover:text-white transition-all duration-300">
                  {point.icon}
                </div>
                <div>
                  <h3 className="font-heading font-black text-white text-2xl mb-4 tracking-tight">
                    {point.title}
                  </h3>
                  <p className="font-body text-white/50 text-base md:text-lg leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
