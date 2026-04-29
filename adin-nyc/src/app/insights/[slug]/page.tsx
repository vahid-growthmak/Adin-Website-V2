'use client'

import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { DisplayHeading } from '@/components/ui/DisplayHeading'
import { Button } from '@/components/ui/Button'
import { articles } from '@/data/insights'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { use, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const article = articles.find(a => a.slug === slug)
  const [isOpen, setIsOpen] = useState<number | null>(null)

  if (!article) {
    notFound()
  }

  const related = articles.filter(a => a.slug !== slug).slice(0, 3)

  return (
    <main className="bg-adin-black min-h-screen">
      {/* HEADER SECTION */}
      <section className="relative min-h-screen flex items-end overflow-hidden pt-40 pb-20">
        <div className="absolute inset-0">
          <Image 
            src={article.image} 
            alt={article.title} 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-adin-black via-adin-black/70 to-adin-black/30" />
        </div>
        
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
          <Reveal>
            <Link href="/insights" className="inline-flex items-center gap-2 text-white/50 hover:text-adin-green transition-colors text-[10px] font-bold uppercase tracking-widest mb-12 group">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:-translate-x-1">
                <path d="M12 7H2M7 2L2 7l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Insights
            </Link>
            <SectionLabel className="mb-6">{article.category}</SectionLabel>
            <DisplayHeading className="text-white mb-12 text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight max-w-5xl">
              {article.title}
            </DisplayHeading>
            
            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10">
                  <Image src={article.author.image} alt={article.author.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{article.author.name}</p>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest">{article.author.role}</p>
                </div>
              </div>
              <span className="text-white/20 hidden md:block">|</span>
              <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{article.date}</span>
              <span className="text-white/20 hidden md:block">|</span>
              <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{article.readTime}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Main Content */}
            <div className="lg:col-span-8">
              <Reveal>
                <p className="text-white/80 font-light text-2xl md:text-3xl leading-relaxed italic mb-16 border-l-2 border-adin-green pl-10 max-w-3xl">
                  {article.excerpt}
                </p>
              </Reveal>

              <div className="space-y-12">
                {article.content.map((block, i) => (
                  <Reveal key={i}>
                    {block.type === 'text' ? (
                      <p className="text-white/50 text-lg md:text-xl leading-relaxed max-w-2xl">
                        {block.body}
                      </p>
                    ) : block.type === 'heading' ? (
                      <h2 className="text-white font-heading font-black text-2xl md:text-4xl tracking-tight mt-16 mb-8">
                        {block.text}
                      </h2>
                    ) : block.type === 'quote' ? (
                      <blockquote className="my-16 border-l-2 border-adin-green pl-10">
                        <p className="text-white font-light text-2xl md:text-3xl italic leading-relaxed text-adin-green/80">
                          &quot;{block.text}&quot;
                        </p>
                      </blockquote>
                    ) : null}
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-12">
              <Reveal delay={0.2}>
                <div className="space-y-12 sticky top-32">
                  {/* About Author */}
                  <div className="bg-white/[0.03] border border-white/5 p-10">
                    <SectionLabel className="mb-8">About the Author</SectionLabel>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden border border-white/10">
                        <Image src={article.author.image} alt={article.author.name} fill className="object-cover" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">{article.author.name}</p>
                        <p className="text-white/30 text-[9px] uppercase tracking-widest">{article.author.role}</p>
                      </div>
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed">
                      With over 25 years in strategic communications, {article.author.name.split(' ')[0]} founded ADIN NYC to bring purpose-driven PR to brands creating meaningful change.
                    </p>
                  </div>

                  {/* Related */}
                  <div className="bg-white/[0.03] border border-white/5 p-10">
                    <SectionLabel className="mb-8">Related Articles</SectionLabel>
                    <div className="space-y-6">
                      {related.map(a => (
                        <Link 
                          key={a.slug} 
                          href={`/insights/${a.slug}`}
                          className="block group border-b border-white/5 pb-6 last:border-0 last:pb-0"
                        >
                          <h4 className="text-white/60 group-hover:text-adin-green transition-colors font-bold text-sm leading-snug mb-2">
                            {a.title}
                          </h4>
                          <span className="text-[9px] font-bold uppercase tracking-widest text-white/20 group-hover:text-white/40 transition-colors">
                            Read Article →
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION (Article Specific) */}
      {article.faqs && (
        <section className="py-32 px-6 md:px-12 lg:px-16 border-t border-white/10">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <SectionLabel className="mb-6">FAQ</SectionLabel>
              <DisplayHeading className="text-white mb-16 text-3xl md:text-4xl tracking-tight leading-none">
                Questions on This Topic.
              </DisplayHeading>
              
              <div className="space-y-0">
                {article.faqs.map((faq, i) => (
                  <div key={i} className="border-b border-white/10">
                    <button 
                      onClick={() => setIsOpen(isOpen === i ? null : i)}
                      className="w-full py-8 flex justify-between items-center text-left group"
                    >
                      <span className="text-white font-heading font-black text-xl group-hover:text-adin-green transition-colors pr-8">
                        {faq.question}
                      </span>
                      <motion.span 
                        animate={{ rotate: isOpen === i ? 45 : 0 }}
                        className="text-adin-green flex-shrink-0"
                      >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {isOpen === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="pb-8 text-white/50 text-lg leading-relaxed max-w-2xl">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* FOOTER CTA */}
      <section className="bg-adin-green py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <p className="text-white/50 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">Monthly Newsletter</p>
              <DisplayHeading className="text-white mb-8 text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none">
                Get the latest insights delivered to your inbox.
              </DisplayHeading>
              <p className="text-white/60 text-xl max-w-md">
                Trend reports, strategic frameworks, and brand communications perspectives — once a month, no noise.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-6">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 bg-white/10 border-b border-white/40 py-4 text-white outline-none focus:border-white transition-colors placeholder:text-white/40"
                />
                <button className="px-12 py-4 bg-white text-adin-green font-bold uppercase tracking-widest text-[11px] hover:bg-adin-black hover:text-white transition-all">
                  Subscribe
                </button>
              </form>
              <p className="text-white/20 text-[10px] uppercase tracking-widest font-bold mt-6">No spam. Unsubscribe anytime.</p>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}
