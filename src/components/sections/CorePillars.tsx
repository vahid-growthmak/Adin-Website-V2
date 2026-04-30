'use client'

import { Reveal } from '../ui/Reveal'
import { SectionLabel } from '../ui/SectionLabel'

const pillars = [
  {
    title: 'Strategic Storytelling',
    description: 'We shape clear, authentic brand stories that connect with audiences and reflect your purpose. Every message is thoughtful, relevant, and aligned with your long-term vision.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#0F5E4E" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Relationship Building',
    description: 'Strong, trusted media relationships help your brand reach the right audience at the right time. We focus on meaningful connections that lead to consistent visibility.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3" stroke="#0F5E4E" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 3L17 3L17 6" stroke="#0F5E4E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 7V10L12 12" stroke="#0F5E4E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Results Measurement',
    description: 'We track performance through clear metrics, providing transparent insights and continuous improvements to ensure your communications deliver real, measurable impact.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <polyline points="3 13 7 9 10 12 14 7 17 10" stroke="#0F5E4E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="3" y1="17" x2="17" y2="17" stroke="#0F5E4E" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

export function CorePillars() {
  return (
    <section className="bg-adin-black py-28 px-6 md:px-12 lg:px-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <Reveal>
            <SectionLabel className="mb-4">What We Stand On</SectionLabel>
            <h2 className="font-heading font-black tracking-tighter leading-none text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Our Core Pillars
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.12}>
              <div className="border border-white/8 p-10 hover:border-adin-green transition-all hover:bg-adin-green/5 group h-full">
                <div className="w-10 h-10 bg-adin-green/10 border border-adin-green/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="font-heading font-black text-white text-2xl mb-4 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="font-body text-white/50 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
