'use client'

import { Reveal } from '../ui/Reveal'
import { SectionLabel } from '../ui/SectionLabel'
import { team } from '@/data/team'
import Image from 'next/image'

export function TeamSection() {
  return (
    <section className="bg-adin-black py-32 px-6 md:px-12 lg:px-16 border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-20">
          <Reveal>
            <SectionLabel className="mb-6">The Collective</SectionLabel>
            <h2 className="font-heading font-black text-white text-[clamp(36px,5vw,72px)] leading-none tracking-tighter">
              Our Team
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {team.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.1}>
              <div className="group space-y-6">
                <div className="relative aspect-[9/16] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-adin-black/20 group-hover:bg-adin-black/0 transition-colors" />
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="font-heading font-bold text-adin-green text-[10px] uppercase tracking-[0.2em] mb-2">
                      {member.role}
                    </p>
                    <h3 className="font-heading font-black text-white text-2xl tracking-tight">
                      {member.name}
                    </h3>
                  </div>
                  <p className="font-body text-white/50 leading-relaxed text-sm">
                    {member.bio}
                  </p>
                  {member.linkedin && (
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-adin-green hover:text-white transition-colors gap-2 text-[10px] font-bold uppercase tracking-widest"
                    >
                      LinkedIn <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 11h10M1 1h10M1 6h10" stroke="currentColor" strokeWidth="1.5"/></svg>
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
