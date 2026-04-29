'use client'

import { Reveal } from '../ui/Reveal'
import { SectionLabel } from '../ui/SectionLabel'
import { DisplayHeading } from '../ui/DisplayHeading'
import Image from 'next/image'
import Link from 'next/link'

const results = [
  {
    brand: 'Designs for Health',
    category: 'Communications',
    title: 'Secured 150+ top-tier media placements in wellness and trade verticals.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2000&auto=format&fit=crop',
    href: '/work/designs-for-health'
  },
  {
    brand: 'Hooray Foods',
    category: 'Experiences',
    title: 'Produced a high-impact NYC pop-up launch with 50+ media and influencer attendees.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop',
    href: '/work/hooray-foods'
  },
  {
    brand: 'EarthKind',
    category: 'Content Creation',
    title: 'Developed an integrated content strategy that grew social engagement by 45%.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop',
    href: '/work/earthkind'
  },
  {
    brand: 'Naturepedic',
    category: 'Strategic Advisory',
    title: 'Led strategic brand repositioning to capture 20% more market share in organic bedding.',
    image: 'https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2000&auto=format&fit=crop',
    href: '/work/naturepedic'
  },
]

export function FeaturedResults() {
  return (
    <section className="bg-adin-black py-24 md:py-32 px-6 md:px-12 lg:px-16 border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-16">
          <Reveal>
            <SectionLabel className="mb-8">Impact</SectionLabel>
            <DisplayHeading className="text-white text-[clamp(40px,6vw,72px)] leading-[0.95]">
              Featured Results<span className="text-adin-green">.</span>
            </DisplayHeading>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result, index) => (
            <Reveal key={result.brand} delay={index * 0.1}>
              <Link href={result.href} className="group block h-full">
                <div className="bg-white/[0.03] border border-white/5 group-hover:border-adin-green/40 transition-colors h-full flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={result.image}
                      alt={result.brand}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <p className="font-heading font-bold text-adin-green text-[10px] uppercase tracking-widest mb-3">
                      {result.category}
                    </p>
                    <h3 className="font-heading font-black text-white text-xl mb-4 tracking-tight leading-tight">
                      {result.brand}
                    </h3>
                    <p className="font-body text-white/40 text-sm leading-relaxed mb-8">
                      {result.title}
                    </p>
                    <div className="mt-auto pt-4 border-t border-white/5">
                      <span className="text-white uppercase tracking-widest text-[10px] font-bold group-hover:text-adin-green transition-colors flex items-center gap-2">
                        View Project <span className="text-lg">→</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
