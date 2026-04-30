'use client'

import { useRef } from 'react'
import { articles } from '@/data/insights'
import { SectionLabel } from '../ui/SectionLabel'
import { DisplayHeading } from '../ui/DisplayHeading'
import { Reveal } from '../ui/Reveal'
import { Button } from '../ui/Button'
import Image from 'next/image'
import Link from 'next/link'
import { useStickyInternalScroll } from '@/hooks/useStickyInternalScroll'

export function InsightsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const featured = articles.filter(a => a.featured).slice(0, 3)

  useStickyInternalScroll(sectionRef, innerRef)

  return (
    <section
      id="insights"
      ref={sectionRef}
      className="relative bg-white overflow-hidden"
    >
      <div ref={innerRef} className="py-32 md:py-48 px-6 md:px-12 lg:px-16">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-24">
            <div className="max-w-2xl">
              <Reveal>
                <SectionLabel light className="mb-8">Journal</SectionLabel>
              </Reveal>
              <DisplayHeading className="text-adin-black text-[clamp(48px,7vw,100px)] leading-[0.95]">
                Insights<span className="text-adin-green">.</span>
              </DisplayHeading>
            </div>
            <Reveal delay={0.4}>
              <Button href="/insights" variant="green">
                View All
              </Button>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {featured.map((article, index) => (
              <Reveal key={article.slug} delay={index * 0.1}>
                <Link href={article.href} className="group block cursor-none">
                  <div className="relative aspect-[4/3] overflow-hidden mb-8">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                  <SectionLabel light className="mb-4">{article.category}</SectionLabel>
                  <h3 className="font-heading font-bold text-adin-black text-2xl lg:text-3xl leading-tight mb-6 group-hover:text-adin-green transition-colors">
                    {article.title}
                  </h3>
                  <span className="link-underline font-bold uppercase tracking-widest text-[10px] text-neutral-400 group-hover:text-adin-black transition-colors">
                    Read Article
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
