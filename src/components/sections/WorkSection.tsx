'use client'

import { useRef } from 'react'
import { SectionLabel } from '../ui/SectionLabel'
import { DisplayHeading } from '../ui/DisplayHeading'
import { Reveal } from '../ui/Reveal'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useStickyInternalScroll } from '@/hooks/useStickyInternalScroll'

export function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useStickyInternalScroll(sectionRef, innerRef)

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative bg-adin-black overflow-hidden"
    >
      <div ref={innerRef} className="py-32 md:py-48 px-6 md:px-12 lg:px-16">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
            <div className="max-w-2xl">
              <Reveal>
                <SectionLabel className="mb-6">Our Work in Action</SectionLabel>
              </Reveal>
              <DisplayHeading className="text-white text-[clamp(48px,7vw,100px)] leading-[0.95]">
                Our Portfolio<span className="text-adin-green">.</span>
              </DisplayHeading>
            </div>
            <Reveal delay={0.4}>
              <p className="font-body text-white/40 max-w-xs text-lg leading-relaxed">
                From integrated campaigns to multi-channel initiatives, ADin delivers work that engages audiences, strengthens positioning, and creates meaningful business impact.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <WorkCard
              href="/work/designs-for-health"
              title="Designs for Health"
              label="Strategic PR Campaign"
              image="/images/designs-for-health.jpg"
              className="md:col-span-7 h-[600px]"
            />
            <div className="md:col-span-5 flex flex-col gap-6">
              <WorkCard
                href="/work/earthkind"
                title="EarthKind"
                label="Brand Storytelling"
                image="/images/earthkind.webp"
                className="h-[288px]"
              />
              <WorkCard
                href="/work/hooray-foods"
                title="Hooray Foods"
                label="Product Launch"
                image="/images/hooray-foods.webp"
                className="h-[288px]"
              />
            </div>
            <WorkCard
              href="/work/naturepedic"
              title="Naturepedic"
              label="Brand Awareness Campaign"
              image="/images/naturepedic.webp"
              className="md:col-span-12 h-[400px]"
              horizontal
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function WorkCard({
  href,
  title,
  label,
  image,
  className,
  horizontal = false,
}: {
  href: string
  title: string
  label: string
  image: string
  className?: string
  horizontal?: boolean
}) {
  return (
    <Reveal className={cn('relative group overflow-hidden', className)}>
      <Link href={href} className="block relative w-full h-full cursor-none">
        <Image
          src={image}
          alt={title}
          fill
          sizes={horizontal ? '100vw' : '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px'}
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-adin-black/90 via-adin-black/20 to-transparent p-8 md:p-12 flex flex-col justify-end transition-opacity duration-500",
          horizontal ? "md:bg-gradient-to-r md:p-20" : ""
        )}>
          <span className="section-label mb-2 text-adin-green">{label}</span>
          <h3 className={cn(
            "font-heading font-black text-white tracking-tight leading-none mb-4",
            horizontal ? "text-4xl md:text-6xl" : "text-3xl md:text-4xl"
          )}>
            {title}
          </h3>
          <span className="flex items-center gap-2 text-white/40 font-bold uppercase tracking-widest text-[10px] group-hover:text-white transition-colors">
            View Project
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </Link>
    </Reveal>
  )
}
