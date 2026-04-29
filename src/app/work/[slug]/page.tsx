'use client'

import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { DisplayHeading } from '@/components/ui/DisplayHeading'
import { Button } from '@/components/ui/Button'
import { work } from '@/data/work'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { use } from 'react'

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const project = work.find(p => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="bg-adin-black min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src={project.heroImage} 
            alt={project.title} 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-adin-black via-adin-black/85 to-adin-black/10" />
        </div>
        
        {/* Back Link */}
        <div className="absolute top-0 left-0 w-full z-20 pt-32 px-6 md:px-12 lg:px-16">
          <Link href="/work" className="inline-flex items-center gap-2 text-white/50 hover:text-adin-green transition-colors text-[10px] font-bold uppercase tracking-widest group">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:-translate-x-1">
              <path d="M12 7H2M7 2L2 7l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Case Studies
          </Link>
        </div>

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 pb-20 md:pb-32">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <SectionLabel className="mb-6">{project.label}</SectionLabel>
              <DisplayHeading className="text-white mb-12 max-w-5xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px]">
                {project.title}
              </DisplayHeading>
              
              <div className="flex flex-wrap gap-x-12 gap-y-6 border-t border-white/10 pt-10">
                <div className="py-2">
                  <p className="text-adin-green uppercase tracking-[0.2em] mb-2 text-[9px] font-bold">Client</p>
                  <p className="text-white font-bold text-sm">{project.client}</p>
                </div>
                <div className="py-2">
                  <p className="text-adin-green uppercase tracking-[0.2em] mb-2 text-[9px] font-bold">Service</p>
                  <p className="text-white font-bold text-sm">{project.service}</p>
                </div>
                <div className="py-2">
                  <p className="text-adin-green uppercase tracking-[0.2em] mb-2 text-[9px] font-bold">Industry</p>
                  <p className="text-white font-bold text-sm">{project.industry}</p>
                </div>
                <div className="py-2">
                  <p className="text-adin-green uppercase tracking-[0.2em] mb-2 text-[9px] font-bold">Impact</p>
                  <p className="text-white font-bold text-sm">{project.impact}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-16">
              {project.quote && (
                <Reveal>
                  <p className="text-white/80 font-light leading-relaxed border-l-2 border-adin-green pl-10 italic text-2xl md:text-3xl max-w-2xl">
                    &quot;{project.quote.text}&quot;
                  </p>
                </Reveal>
              )}

              {project.content.map((block, i) => (
                <Reveal key={i}>
                  {block.type === 'text' ? (
                    <div className="max-w-2xl">
                      {block.heading && (
                        <h3 className="text-white font-heading font-black text-2xl md:text-3xl mb-8 tracking-tight">
                          {block.heading}
                        </h3>
                      )}
                      <p className="text-white/50 text-lg leading-relaxed mb-8">
                        {block.body}
                      </p>
                    </div>
                  ) : block.type === 'image' && block.src ? (
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm my-16">
                      <Image src={block.src} alt={block.alt || project.title} fill className="object-cover" />
                    </div>
                  ) : null}
                </Reveal>
              ))}

              {project.fullTestimonial && (
                <Reveal>
                  <div className="bg-white/[0.03] p-12 md:p-16 border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                      <svg width="120" height="90" viewBox="0 0 40 28" fill="white">
                        <path d="M0 28V17.5C0 7.833 5.333 2.333 16 1L17.5 3.5C13.5 4.5 10.667 6.167 9 8.5C7.333 10.833 6.667 13.333 7 16H16V28H0ZM24 28V17.5C24 7.833 29.333 2.333 40 1L41.5 3.5C37.5 4.5 34.667 6.167 33 8.5C31.333 10.833 30.667 13.333 31 16H40V28H24Z" />
                      </svg>
                    </div>
                    <p className="text-white/80 italic text-xl md:text-2xl leading-relaxed mb-10 relative z-10">
                      &quot;{project.fullTestimonial.quote}&quot;
                    </p>
                    <div className="relative z-10">
                      <p className="text-white font-heading font-black tracking-tight text-sm uppercase">{project.fullTestimonial.author}</p>
                      <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1">{project.fullTestimonial.role}</p>
                    </div>
                  </div>
                </Reveal>
              )}
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4">
              <Reveal delay={0.2}>
                <div className="bg-adin-light/5 border border-white/5 p-10 lg:p-12 sticky top-32">
                  <span className="text-white/30 text-[9px] font-bold uppercase tracking-[0.2em] mb-12 block border-b border-white/10 pb-6">
                    {project.sidebar.heading}
                  </span>
                  
                  <div className="space-y-10 mb-16">
                    {project.sidebar.rows.map((row, i) => (
                      <div key={i} className="flex flex-col gap-2">
                        <span className="text-adin-green text-[9px] font-bold uppercase tracking-widest">{row.label}</span>
                        <span className="text-white font-heading font-black text-4xl tracking-tighter">{row.value}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <span className="text-white/30 text-[9px] font-bold uppercase tracking-[0.2em] mb-6 block border-b border-white/10 pb-4">
                      Project Scope
                    </span>
                    <p className="text-white/50 text-sm leading-relaxed mb-12">
                      {project.sidebar.description}
                    </p>
                    <Button href="/contact" className="w-full justify-center py-5 bg-adin-green text-white hover:bg-adin-green/90 border-none">
                      Join the Movement →
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT PROJECT CTA */}
      <section className="py-32 px-6 md:px-12 lg:px-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <Reveal>
            <SectionLabel className="mb-4">Next Case Study</SectionLabel>
            <h2 className="text-white font-heading font-black text-3xl md:text-5xl tracking-tight">
              Explore More of Our Work
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <Button href="/work" variant="outline" className="px-12 py-5">Back to Portfolio →</Button>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
