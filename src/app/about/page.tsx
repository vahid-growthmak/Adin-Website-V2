'use client'

import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { DisplayHeading } from '@/components/ui/DisplayHeading'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { animate } from 'framer-motion'

const team = [
  {
    name: 'Sue Asci',
    role: 'Founder & CEO',
    image: '/images/team-sue.png',
    bio: 'With over 25 years of experience in strategic communications, Sue founded ADin NYC to support purpose-driven brands making a meaningful impact.'
  },
  {
    name: 'Sarah Chen',
    role: 'Director of Communications',
    image: '/images/team-2.png',
    bio: 'Sarah leads media relations, building strong connections with top-tier journalists across lifestyle, health, and consumer sectors.'
  },
  {
    name: 'Marcus Williams',
    role: 'Director of Experiences',
    image: '/images/team-3.png',
    bio: 'Marcus Williams brings 15 years of experience, designing immersive brand experiences that engage audiences and create meaningful, lasting connections.'
  }
]

const values = [
  {
    title: 'Authentic Storytelling',
    description: 'We create narratives that stay true to your brand and connect naturally with your audience. For us, authenticity is not a tactic, it’s the starting point.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-adin-green">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: 'Cultural Relevance',
    description: 'We position brands where culture, media, and society meet, helping them stay relevant, visible, and ahead of the conversation.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-adin-green">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: 'Measurable Impact',
    description: 'Every strategy we shape is designed to deliver clear results and long-term growth, with a focus on outcomes that truly matter to your business.',
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
    <div className="bg-adin-black min-h-screen">
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
              <SectionLabel className="mb-6">ABOUT ADIN NYC</SectionLabel>
              <DisplayHeading className="text-white max-w-4xl mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px]">
                A Strategic Communications Partner
              </DisplayHeading>
              <p className="text-white/60 max-w-xl text-xl md:text-2xl leading-relaxed">
                We deliver purpose-driven communications for founders and brands shaping a better, more meaningful future.
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
                  ADin NYC is a strategic communications firm based in New York City, with over 30 years of experience, helping founders and purpose-driven brands build influence and shape the future. Our work is rooted in understanding each brand’s vision and translating it into clear, compelling communication that resonates with the right audience.
                </p>
                <p>
                  We’re not a traditional PR agency. We’re a team of strategists, storytellers, and relationship builders who believe strong brands are built on clarity and authenticity. By combining insight and creativity, we help brands stand out in competitive markets.
                </p>
                <p>
                  From emerging wellness startups to established food and beverage brands, we work closely with our clients to build credibility, gain meaningful media coverage, and drive real business growth.
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
            <SectionLabel className="mb-10">OUR PHILOSOPHY</SectionLabel>
            <DisplayHeading className="text-white mb-10 text-3xl md:text-5xl lg:text-6xl italic font-light">
              Strategic Storytelling for Purpose-Driven Brands
            </DisplayHeading>
            <p className="text-white/50 text-xl leading-relaxed">
              We believe the most impactful brands are those with a genuine mission to make a difference in people’s lives, communities, and the world. Our role is to make sure those stories are seen and heard. Every strategy we create, every story we tell, and every experience we design is rooted in authenticity, purpose, and meaningful impact.
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
              <Counter target={30} suffix="+" />
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
            <SectionLabel className="mb-6">NEXT STEPS</SectionLabel>
            <DisplayHeading className="text-white mb-10 text-4xl md:text-6xl lg:text-7xl leading-tight">
              Ready to build your brand story?
            </DisplayHeading>
            <p className="text-white/40 text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
              Let&apos;s talk about your brand, your mission, and how ADIN NYC can help you tell a story that changes everything.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" className="px-12 py-6">Start a Conversation →</Button>
              <Button href="/work" variant="outline" className="px-12 py-6">View Case Studies</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
