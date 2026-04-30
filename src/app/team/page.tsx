'use client'

import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { DisplayHeading } from '@/components/ui/DisplayHeading'
import { Button } from '@/components/ui/Button'
import { TwoTestimonialsSection } from '@/components/sections/TwoTestimonialsSection'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const team = [
  {
    name: 'Sue Asci',
    role: 'Founder & CEO',
    bio: 'With over 25 years in strategic communications, Sue founded ADIN NYC to bring purpose-driven PR to brands creating meaningful change. She is recognized as one of NYC\'s leading communications strategists.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: 'Sarah Chen',
    role: 'Director of Communications',
    bio: 'Sarah leads our media relations practice, with expertise spanning lifestyle, health, and consumer verticals. She has placed stories in every major national publication.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: 'Marcus Williams',
    role: 'Director of Experiences',
    bio: 'Marcus brings 15 years of experiential marketing expertise, creating immersive brand moments that create lasting consumer connections and cultural impact.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: 'Priya Patel',
    role: 'Senior Content Strategist',
    bio: 'Priya crafts compelling brand narratives across digital channels, combining strategic thinking with creative storytelling to build brand authority and audience engagement.',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: 'James Torres',
    role: 'Media Relations Manager',
    bio: 'James manages our day-to-day media relationships, leveraging a vast network of journalist contacts across business, lifestyle, health, and food verticals.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: 'Elena Ross',
    role: 'Advisory Lead',
    bio: 'Elena guides our advisory clients through brand positioning and communications architecture, drawing on extensive experience with startup founders and Fortune 500 executives.',
    image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=1000&auto=format&fit=crop'
  }
]

const faqs = [
  {
    q: 'How does ADIN onboard new clients?',
    a: 'Our onboarding begins with a comprehensive discovery session where we deep-dive into your brand, goals, audience, and competitive landscape. From there, we develop a tailored communications strategy.'
  },
  {
    q: 'Do you work with clients outside New York?',
    a: 'Yes, we work with brands across the US and internationally. While our media relationships are strongest in North America, we have successfully executed campaigns with global reach.'
  },
  {
    q: 'How long does a typical engagement last?',
    a: 'Most retainer engagements are 6–12 months, as meaningful PR results require sustained effort and relationship building. We also offer project-based engagements for specific campaigns.'
  },
  {
    q: 'Can we speak directly with the team working on our account?',
    a: 'Absolutely. We believe in direct, transparent client relationships. You will have direct access to every member of your team, including senior leadership.'
  }
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="border-b border-black/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left"
      >
        <span className="font-heading font-bold text-adin-black text-lg">{q}</span>
        <span className={`text-adin-green transition-transform duration-500 ${isOpen ? 'rotate-45' : ''}`}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-adin-black/60 leading-relaxed text-base">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function TeamPage() {
  return (
    <div className="bg-adin-black min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2400&auto=format&fit=crop" 
            alt="Team" 
            fill 
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-adin-black via-adin-black/40 to-transparent" />
        </div>
        <div className="relative z-10 px-6 md:px-12 lg:px-16 pb-24 pt-48 max-w-7xl mx-auto w-full">
          <Reveal>
            <SectionLabel className="mb-6">The Team</SectionLabel>
            <DisplayHeading className="text-white max-w-4xl mb-8 text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
              The People Behind<br />the Stories.
            </DisplayHeading>
            <p className="text-white/50 max-w-xl text-xl leading-relaxed">
              A team of seasoned communicators, strategists, and creatives united by a shared belief in purpose-driven brand building.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="bg-adin-black py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.1}>
                <div className="group">
                  <div className="relative aspect-[3/4] overflow-hidden mb-8">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-adin-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <SectionLabel className="mb-2 text-adin-green">{member.role}</SectionLabel>
                  <h3 className="text-white font-heading font-black text-2xl mb-4 tracking-tight">{member.name}</h3>
                  <p className="text-white/40 leading-relaxed text-sm max-w-sm">{member.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TwoTestimonialsSection />

      {/* FAQ SECTION */}
      <section className="bg-adin-light py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            <div className="lg:col-span-4">
              <Reveal>
                <SectionLabel className="mb-6 text-adin-green">FAQ</SectionLabel>
                <DisplayHeading className="text-adin-black mb-6 text-3xl md:text-4xl">
                  Working With Our Team.
                </DisplayHeading>
                <p className="text-adin-black/50 text-lg">Everything you need to know about partnering with ADIN NYC.</p>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <Reveal delay={0.2}>
                <div className="space-y-0">
                  {faqs.map((faq, i) => (
                    <FAQItem key={i} q={faq.q} a={faq.a} />
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-adin-black py-40 px-6 md:px-12 lg:px-16 border-t border-white/5 text-center">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <SectionLabel className="mb-8 justify-center">Get in Touch</SectionLabel>
            <DisplayHeading className="text-white mb-10 text-4xl md:text-6xl lg:text-7xl leading-none">
              Let&apos;s Work Together.
            </DisplayHeading>
            <p className="text-white/40 text-xl leading-relaxed mb-16 max-w-xl mx-auto">
              Ready to build something meaningful? Our team is ready to listen, strategize, and get to work.
            </p>
            <Button href="/contact" className="px-12 py-8 mx-auto">
              Start the Conversation →
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
