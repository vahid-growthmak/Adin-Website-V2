'use client'

import { Reveal } from '../ui/Reveal'
import { SectionLabel } from '../ui/SectionLabel'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We immerse ourselves in your brand, category, and competitive landscape. We listen before we speak. This phase includes stakeholder interviews, media audits, competitive analysis, and a thorough review of your current brand positioning.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'We develop a comprehensive communications plan with clear objectives, target audiences, and message architecture. Every strategy is bespoke — built around your unique story, your specific goals, and the media landscape your audience lives in.',
  },
  {
    number: '03',
    title: 'Execution',
    description: 'Our team activates across media, events, and content channels with precision and creative excellence. We manage every touchpoint — from press outreach and event production to content creation and influencer engagement.',
  },
  {
    number: '04',
    title: 'Measurement',
    description: 'We track every placement, impression, and outcome against your goals, reporting transparently throughout. Monthly performance reviews keep you informed and our team accountable to the results that matter most.',
  },
  {
    number: '05',
    title: 'Optimization',
    description: 'We continuously refine our approach based on performance data and evolving market conditions. Great communications is not static — we iterate, test, and adapt to keep your brand narrative relevant, resonant, and growing.',
  },
]

export function ClientJourney() {
  return (
    <section className="bg-adin-light py-28 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <Reveal>
            <SectionLabel className="mb-4" style={{ color: '#0F5E4E' }}>The Process</SectionLabel>
            <h2 className="font-heading font-black tracking-tighter leading-none text-adin-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              The Client Journey
            </h2>
          </Reveal>
        </div>

        <div className="space-y-0">
          {steps.map((step) => (
            <Reveal key={step.number}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start py-10 border-t border-adin-black/10">
                <div className="md:col-span-2">
                  <span className="font-heading font-black text-[3.5rem] leading-none tracking-tighter text-adin-green/25">
                    {step.number}
                  </span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="font-heading font-black text-adin-black text-2xl tracking-tight">
                    {step.title}
                  </h3>
                </div>
                <div className="md:col-span-7">
                  <p className="font-body text-adin-black/60 text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-adin-black/10 w-full" />
        </div>
      </div>
    </section>
  )
}
