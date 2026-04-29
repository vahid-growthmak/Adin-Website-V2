'use client'

import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { DisplayHeading } from '@/components/ui/DisplayHeading'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { animate } from 'framer-motion'

const team = [
  {
    name: 'Sue Asci',
    role: 'Founder & CEO',
    image: '/images/team-sue.png',
    bio: 'With over 25 years in strategic communications, Sue founded ADIN NYC to bring purpose-driven PR to brands making a meaningful difference in the world.'
  },
  {
    name: 'Sarah Chen',
    role: 'Director of Communications',
    image: '/images/team-2.png',
    bio: 'Sarah leads our media relations practice, cultivating relationships with top-tier journalists across lifestyle, health, and consumer verticals.'
  },
  {
    name: 'Marcus Williams',
    role: 'Director of Experiences',
    image: '/images/team-3.png',
    bio: 'Marcus brings 15 years of experiential marketing expertise, creating immersive brand moments that forge lasting consumer connections.'
  }
]

const values = [
  {
    title: 'Authentic Storytelling',
    description: 'We craft narratives that are true to your brand\'s identity and resonate deeply with target audiences. Authenticity isn\'t a strategy — it\'s our foundation.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-adin-green">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: 'Cultural Relevance',
    description: 'We position brands at the intersection of culture, media and society to maximize impact and reach. We don\'t follow trends — we help our clients shape them.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-adin-green">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: 'Measurable Impact',
    description: 'Every strategy we execute is designed to deliver quantifiable results and sustainable brand growth. We tie every initiative to outcomes that matter to your business.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-adin-green">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
]

function Counter({ target, suffix = '', duration = 2 }: { target: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })

  useEffect(() => {
    if (inView) {
      const controls = animate(0, target, {
        duration,
        onUpdate: (value) => setCount(Math.ceil(value))
      })
      return () => controls.stop()
    }
  }, [inView, target, duration])

  return (
    <span ref={ref} className="font-heading font-black tracking-tighter text-adin-black text-4xl sm:text-4xl md:text-6xl lg:text-7xl">
      {count}{suffix}
    </span>
  )
}

export default function AboutPage() {
  return (
    <main className="bg-adin-black min-h-screen">
      {/* PAGE HERO */}
      <section className="relative min-h-screen flex items-end">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2400&auto=format&fit=crop" 
            alt="About ADIN NYC" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-adin-black via-adin-black/70 to-adin-black/30" />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 pb-20">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <SectionLabel className="mb-6">About ADIN NYC</SectionLabel>
              <DisplayHeading className="text-white max-w-4xl mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px]">
                We Are The Change Agency.
              </DisplayHeading>
              <p className="text-white/60 max-w-xl text-xl md:text-2xl leading-relaxed">
                Purpose-driven communications for founders and brands shaping a better future.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            <Reveal>
              <SectionLabel className="mb-6">Who We Are</SectionLabel>
              <h2 className="text-white font-heading font-black text-4xl md:text-6xl mb-10 leading-[1.1] tracking-tight">
                Built on Purpose.<br />Driven by Story.
              </h2>
              <div className="space-y-8 text-white/50 text-lg leading-relaxed max-w-xl">
                <p>
                  ADIN NYC is a strategic communications firm headquartered in the heart of New York City. Founded with over 25 years of collective expertise, we exist to amplify the voices of founders, innovators, and purpose-driven brands who are actively changing the world.
                </p>
                <p>
                  We are not a traditional PR agency. We are architects of brand narrative — a team of strategic thinkers, storytellers, and relationship builders who understand that in today&apos;s saturated media landscape, the brands that win are the ones with the most compelling and authentic stories to tell.
                </p>
              </div>
              <div className="flex gap-6 mt-12">
                <Button href="/contact">Work With Us →</Button>
                <Button href="/our-approach" variant="outline">Our Approach</Button>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="relative h-[600px] overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2400&auto=format&fit=crop" 
                  alt="Team collaboration" 
                  fill 
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="relative py-40 px-6 md:px-12 lg:px-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2500&auto=format&fit=crop" 
            alt="Philosophy background" 
            fill 
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-adin-black/90" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <Reveal>
            <SectionLabel className="mb-10">Our Philosophy</SectionLabel>
            <DisplayHeading className="text-white mb-10 text-3xl md:text-5xl lg:text-6xl italic font-light">
              &quot;Purpose-Driven Brands Deserve Powerful Stories.&quot;
            </DisplayHeading>
            <p className="text-white/50 text-xl leading-relaxed">
              We believe that the most transformative brands are those with a genuine mission to improve lives, communities, and the planet. Our role is to ensure the world hears about them. Every strategy we develop is guided by an commitment to authenticity, impact, and excellence.
            </p>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel className="mb-6">What Guides Us</SectionLabel>
            <DisplayHeading className="text-white mb-20 text-4xl md:text-6xl">Mission & Values</DisplayHeading>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="p-12 border border-white/5 hover:border-adin-green transition-colors bg-white/[0.02]">
                  <div className="w-12 h-12 flex items-center justify-center mb-8 border border-adin-green/20">
                    {v.icon}
                  </div>
                  <h3 className="text-white font-heading font-black text-2xl mb-6 tracking-tight">{v.title}</h3>
                  <p className="text-white/40 leading-relaxed text-sm">{v.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-32 px-6 md:px-12 lg:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel className="mb-6">The People</SectionLabel>
            <DisplayHeading className="text-white mb-20 text-4xl md:text-6xl">Our Leadership</DisplayHeading>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group">
                  <div className="relative h-[480px] mb-8 overflow-hidden">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill 
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                  <SectionLabel className="mb-2 text-adin-green">{member.role}</SectionLabel>
                  <h3 className="text-white font-heading font-black text-2xl mb-4 tracking-tight">{member.name}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 px-6 md:px-12 lg:px-16 bg-adin-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="text-center md:text-left">
              <Counter target={25} suffix="+" />
              <p className="text-adin-black/50 uppercase tracking-widest font-bold text-[10px] mt-4">Years Experience</p>
            </div>
            <div className="text-center md:text-left">
              <Counter target={50} suffix="M+" />
              <p className="text-adin-black/50 uppercase tracking-widest font-bold text-[10px] mt-4">Impressions Generated</p>
            </div>
            <div className="text-center md:text-left">
              <Counter target={100} suffix="+" />
              <p className="text-adin-black/50 uppercase tracking-widest font-bold text-[10px] mt-4">Brands Served</p>
            </div>
            <div className="text-center md:text-left">
              <span className="font-heading font-black tracking-tighter text-adin-black text-4xl sm:text-4xl md:text-6xl lg:text-7xl">NYC</span>
              <p className="text-adin-black/50 uppercase tracking-widest font-bold text-[10px] mt-4">Headquarters</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 px-6 md:px-12 lg:px-16 text-center">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <SectionLabel className="mb-6">Next Steps</SectionLabel>
            <DisplayHeading className="text-white mb-10 text-4xl md:text-6xl lg:text-7xl leading-tight">
              Ready to Build Your Brand Story?
            </DisplayHeading>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" className="px-12 py-6">Start a Conversation →</Button>
              <Button href="/work" variant="outline" className="px-12 py-6">View Case Studies</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
