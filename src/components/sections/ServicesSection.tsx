'use client'

import { useRef } from 'react'
import { services } from '@/data/services'
import { Service } from '@/types/services'
import { SectionLabel } from '../ui/SectionLabel'
import { DisplayHeading } from '../ui/DisplayHeading'
import { Reveal } from '../ui/Reveal'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useStickyInternalScroll } from '@/hooks/useStickyInternalScroll'

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useStickyInternalScroll(sectionRef, innerRef)

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative bg-adin-black overflow-hidden"
    >
      <div ref={innerRef} className="flex flex-col">
        <div className="px-6 md:px-12 lg:px-16 pt-32 pb-20 border-b border-white/5">
          <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="max-w-2xl">
              <Reveal>
                <SectionLabel className="mb-6">Our Expertise</SectionLabel>
              </Reveal>
              <DisplayHeading className="text-white text-[clamp(48px,8vw,120px)] leading-[0.95]">
                Where PR Meets Brand Storytelling<span className="text-adin-green">.</span>
              </DisplayHeading>
            </div>
            <Reveal delay={0.4}>
              <p className="font-body text-white/40 max-w-xs text-lg leading-relaxed">
                Three integrated disciplines working together to build lasting brand authority.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="flex flex-col">
          {services.map((service, index) => (
            <ServiceItem key={service.id} service={service} index={index} />
          ))}
        </div>

        <div className="border-t border-white/5 px-6 md:px-12 lg:px-16 py-32">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              title="Founder-Focused"
              description="At ADin, founders work directly with senior experts to transform their vision into powerful narratives that build trust, influence, and long-term growth."
              icon="circle"
            />
            <FeatureCard
              title="Integrated Strategy"
              description="We align communications, media, experiences, and content into cohesive strategies that strengthen brand presence and drive meaningful engagement across channels."
              icon="square"
              delay={0.1}
            />
            <FeatureCard
              title="Results-Driven"
              description="Our work is focused on measurable outcomes, from stronger brand authority to increased audience engagement and tangible business growth."
              icon="diamond"
              delay={0.2}
            />
            <FeatureCard
              title="B2B, B2C & B2B2C Expertise"
              description="We navigate complex business and consumer landscapes, crafting tailored strategies that connect brands with the right audiences across diverse markets."
              icon="sun"
              delay={0.3}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceItem({ service, index }: { service: Service; index: number }) {
  const isEven = index % 2 === 0

  return (
    <div className="group border-b border-white/5 hover:bg-white/[0.02] transition-colors duration-700">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className={cn('lg:col-span-5', !isEven && 'lg:order-2')}>
            <Reveal direction={isEven ? 'left' : 'right'}>
              <div className="relative h-[500px] w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </Reveal>
          </div>
          <div className={cn('lg:col-span-7 relative', !isEven && 'lg:order-1')}>
            <Reveal direction={isEven ? 'right' : 'left'}>
              <span className="absolute -top-20 right-0 font-heading font-black text-transparent text-[clamp(120px,18vw,260px)] leading-none select-none pointer-events-none opacity-10" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.4)' }}>
                {service.icon}
              </span>
              <SectionLabel className="mb-6">Service</SectionLabel>
              <h3 className="font-heading font-black text-white text-[clamp(36px,5vw,72px)] leading-none tracking-tighter mb-8">
                {service.title}
              </h3>
              <p className="font-body text-white/50 text-xl leading-relaxed mb-10 max-w-xl">
                {service.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feature: string) => (
                  <div key={feature} className="flex items-center gap-3 text-white/70 text-sm">
                    <span className="w-1.5 h-1.5 bg-adin-green rounded-full flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ title, description, icon, delay = 0 }: { title: string; description: string; icon: string; delay?: number }) {
  return (
    <Reveal delay={delay} className="group p-10 bg-white/[0.02] border border-white/5 hover:border-adin-green/50 transition-all duration-500">
      <div className="w-14 h-14 bg-adin-green flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
        <FeatureIcon name={icon} />
      </div>
      <h3 className="font-heading font-black text-white text-2xl mb-5 tracking-tight">{title}</h3>
      <p className="font-body text-white/40 leading-relaxed">{description}</p>
    </Reveal>
  )
}

function FeatureIcon({ name }: { name: string }) {
  if (name === 'circle') return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8" strokeLinecap="round"/></svg>
  if (name === 'square') return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M4 4h16v16H4V4z"/><path d="M9 9h6v6H9V9z"/></svg>
  if (name === 'diamond') return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M3 12l6-6 6 6-6 6-6-6z"/><path d="M12 12l6-6 3 3-3 3-3-3z"/></svg>
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round"/></svg>
}
