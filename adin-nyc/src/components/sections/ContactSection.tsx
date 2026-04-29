'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SectionLabel } from '../ui/SectionLabel'
import { DisplayHeading } from '../ui/DisplayHeading'
import { Reveal } from '../ui/Reveal'
import { Button } from '../ui/Button'
import { site } from '@/data/site'

export function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)

  useGSAP(() => {
    if (!imgRef.current) return

    gsap.fromTo(
      imgRef.current,
      { yPercent: -10 },
      {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    )
  }, { scope: containerRef })

  return (
    <section id="contact-section" ref={containerRef} className="relative bg-adin-black overflow-hidden">
      <div className="absolute inset-0">
        <Image
          ref={imgRef}
          src="https://images.unsplash.com/photo-1542811869-c10bcd3b1b31?q=80&w=1474&auto=format&fit=crop"
          alt="NYC Skyline"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-adin-black/80 via-adin-black/95 to-adin-black" />
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-16 py-32 md:py-48">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <Reveal>
                <SectionLabel className="mb-8">Contact Us</SectionLabel>
              </Reveal>
              <DisplayHeading className="text-white text-[clamp(40px,6vw,88px)] leading-[0.95] mb-10">
                Start a Conversation<span className="text-adin-green">.</span>
              </DisplayHeading>
              <Reveal delay={0.4}>
                <p className="font-body text-white/50 text-xl leading-relaxed mb-16 max-w-lg">
                  If you are building a brand that aims to create positive impact, we&apos;d love to explore how we can help.
                </p>
              </Reveal>
              
              <div className="space-y-12">
                <Reveal delay={0.5}>
                  <p className="section-label mb-4">Office</p>
                  <p className="font-body text-white/70 text-lg leading-relaxed whitespace-pre-line">
                    {site.address.street}
                    {'\n'}
                    {site.address.city}, {site.address.state} {site.address.zip}
                  </p>
                </Reveal>
                <Reveal delay={0.6}>
                  <p className="section-label mb-4">Email</p>
                  <a href={`mailto:${site.email}`} className="font-heading font-black text-2xl text-white hover:text-adin-green transition-colors link-underline">
                    {site.email}
                  </a>
                </Reveal>
              </div>
            </div>

            <Reveal delay={0.4} className="bg-white/5 backdrop-blur-sm p-8 md:p-12 border border-white/10">
              <form className="space-y-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="section-label mb-4">First Name</label>
                    <input type="text" className="form-input" placeholder="Jane" />
                  </div>
                  <div>
                    <label className="section-label mb-4">Last Name</label>
                    <input type="text" className="form-input" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="section-label mb-4">Email Address</label>
                  <input type="email" className="form-input" placeholder="jane@company.com" />
                </div>
                <div>
                  <label className="section-label mb-4">Message</label>
                  <textarea className="form-input resize-none" rows={4} placeholder="Tell us about your project..." />
                </div>
                <Button type="submit" variant="primary" className="w-full justify-center py-5">
                  Send Message
                </Button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
