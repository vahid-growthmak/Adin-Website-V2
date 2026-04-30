'use client'

import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { DisplayHeading } from '@/components/ui/DisplayHeading'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import Link from 'next/link'

const experienceTypes = [
  {
    num: '01',
    title: 'Brand Activations',
    text: 'Pop-ups, immersive installations, and multi-sensory brand environments designed to turn curious consumers into devoted advocates.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1000&auto=format&fit=crop'
  },
  {
    num: '02',
    title: 'Product Launches',
    text: 'High-impact launch events that command media attention and create the cultural moment your new product deserves.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop'
  },
  {
    num: '03',
    title: 'Community Events',
    text: 'Panels, dinners, workshops, and gatherings that bring your brand&apos;s most important communities together — creating genuine belonging.',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1000&auto=format&fit=crop'
  }
]

export default function ExperiencesPage() {
  return (
    <div className="bg-adin-black min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2400&auto=format&fit=crop" 
            alt="Experiences" 
            fill 
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-adin-black via-adin-black/70 to-transparent" />
        </div>
        <div className="relative z-10 px-6 md:px-12 lg:px-16 pb-24 pt-48 max-w-7xl mx-auto w-full">
          <Reveal>
            <SectionLabel className="mb-6">Experiences</SectionLabel>
            <DisplayHeading className="text-white max-w-4xl mb-8 text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
              Creating Moments That Move People.
            </DisplayHeading>
            <p className="text-white/60 max-w-2xl text-xl leading-relaxed">
              From intimate brand activations to large-scale events, we craft experiences that leave lasting impressions and build communities.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <Reveal>
              <SectionLabel className="mb-8">Our Philosophy</SectionLabel>
              <DisplayHeading className="text-white mb-10 text-4xl md:text-5xl lg:text-6xl leading-tight">
                Signature Experiences That Define Brands.
              </DisplayHeading>
              <p className="text-white/50 text-xl leading-relaxed mb-12">
                We believe the most powerful form of brand building happens in person — when a brand stops being an abstraction and becomes something you feel.
              </p>
              <div className="space-y-10">
                {[
                  { title: 'End-to-End Production', text: 'From concept and venue sourcing to logistics, talent, and post-event amplification.' },
                  { title: 'Media Integration', text: 'We embed media strategy directly into every experience — ensuring moments extend far beyond the room.' },
                  { title: 'Community-First', text: 'Designed to bring together consumers, press, and partners in ways that foster genuine connection.' }
                ].map((item) => (
                  <div key={item.title} className="flex gap-6">
                    <span className="w-2 h-2 rounded-full bg-adin-green mt-3 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-heading font-black text-xl mb-2 tracking-tight">{item.title}</h4>
                      <p className="text-white/40 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.2} className="relative aspect-square lg:aspect-auto lg:h-[600px]">
              <Image 
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000&auto=format&fit=crop" 
                alt="Experiences" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 border border-white/10 m-8" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* EXPERIENCE TYPES */}
      <section className="bg-adin-black py-32 px-6 md:px-12 lg:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel className="mb-20">What We Create</SectionLabel>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experienceTypes.map((exp, i) => (
              <Reveal key={exp.num} delay={i * 0.1} className="group relative h-[600px] overflow-hidden">
                <Image 
                  src={exp.image} 
                  alt={exp.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-adin-black via-adin-black/40 to-transparent" />
                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                  <SectionLabel className="mb-4">{exp.num}</SectionLabel>
                  <h3 className="text-white font-heading font-black text-3xl mb-4 tracking-tight">{exp.title}</h3>
                  <p className="text-white/60 leading-relaxed group-hover:text-white transition-colors">{exp.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-adin-light py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { val: '150+', label: 'Events Produced' },
              { val: '2M+', label: 'Attendees Reached' },
              { val: '50+', label: 'Brand Partners' },
              { val: '25', label: 'Years Experience' }
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="text-adin-black font-heading font-black text-4xl md:text-7xl mb-2">{stat.val}</p>
                <p className="text-adin-black/40 uppercase tracking-widest text-[10px] font-bold">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-adin-black py-32 px-6 md:px-12 lg:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel className="mb-12">Portfolio</SectionLabel>
            <DisplayHeading className="text-white mb-20 text-4xl md:text-6xl">Moments We&apos;ve Created.</DisplayHeading>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1530023367847-a683933f4172?q=80&w=800&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1551818255-e6e10579723a?q=80&w=800&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format&fit=crop'
            ].map((src, i) => (
              <Reveal key={i} delay={i * 0.05} className="relative aspect-[4/3] overflow-hidden">
                <Image 
                  src={src} 
                  alt="Event" 
                  fill 
                  className="object-cover hover:scale-110 transition-transform duration-1000"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-adin-black py-40 px-6 md:px-12 lg:px-16 border-t border-white/5 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <Reveal>
            <SectionLabel className="mb-8 justify-center">Ready to Begin</SectionLabel>
            <DisplayHeading className="text-white mb-10 text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-none">
              Let&apos;s Create Something Unforgettable.
            </DisplayHeading>
            <p className="text-white/40 text-xl leading-relaxed mb-16 max-w-xl mx-auto">
              Every great experience starts with a conversation. Tell us your vision and we&apos;ll bring it to life.
            </p>
            <Button href="/contact" className="px-12 py-8 mx-auto">
              Start a Conversation →
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
