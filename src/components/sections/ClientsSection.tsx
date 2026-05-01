'use client'

import { useRef } from 'react'
import { clients } from '@/data/clients'
import { SectionLabel } from '../ui/SectionLabel'
import { DisplayHeading } from '../ui/DisplayHeading'
import { Reveal } from '../ui/Reveal'
import Image from 'next/image'
import { useStickyInternalScroll } from '@/hooks/useStickyInternalScroll'

export function ClientsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useStickyInternalScroll(sectionRef, innerRef)

  return (
    <section
      id="clients"
      ref={sectionRef}
      data-flow="normal"
      className="relative bg-adin-light overflow-hidden"
    >
      <div ref={innerRef} className="py-32 md:py-48 px-6 md:px-12 lg:px-16">
        <div className="max-w-screen-2xl mx-auto">
          <div className="max-w-3xl mb-24">
            <Reveal>
              <SectionLabel light className="mb-8">Our Clients</SectionLabel>
            </Reveal>
            <DisplayHeading className="text-adin-black text-[clamp(40px,6vw,88px)] leading-[0.95] mb-10">
              Brands We’re Proud to Partner With<span className="text-adin-green">.</span>
            </DisplayHeading>
            <Reveal delay={0.4}>
              <div className="space-y-6">
                <p className="font-body text-neutral-500 text-xl leading-relaxed">
                  ADin collaborates with organizations driven by purpose, innovation, and a commitment to doing things differently in evolving and competitive markets.
                </p>
                <p className="font-body text-neutral-500 text-lg leading-relaxed">
                  From emerging companies to established leaders, our clients are recognized for integrity, influence, and lasting impact across industries.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {clients.map((client, index) => (
              <Reveal key={client.name} delay={index * 0.05} className="group">
                <div className="bg-white border border-neutral-200 aspect-[4/3] flex items-center justify-center p-8 md:p-12 transition-all duration-500 group-hover:border-adin-green/30 group-hover:shadow-xl">
                  <div className="relative w-full h-full">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-contain transition-all duration-500"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
