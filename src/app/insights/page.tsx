'use client'

import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { DisplayHeading } from '@/components/ui/DisplayHeading'
import { Button } from '@/components/ui/Button'
import { articles } from '@/data/insights'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function InsightsPage() {
  const featured = articles[0]
  const list = articles.slice(1)
  const [email, setEmail] = useState('')

  return (
    <div className="bg-adin-black min-h-screen">
      {/* HERO SECTION */}
      <section className="px-6 md:px-12 lg:px-16 pt-40 pb-20 md:pt-48 md:pb-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel className="mb-6">Journal</SectionLabel>
            <DisplayHeading className="text-white mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px]">
              Brand Insights, Ideas, and Industry Articles
            </DisplayHeading>
            <p className="text-white/50 max-w-2xl leading-relaxed text-xl">
              Stay updated with trends, insights, and ideas shaping modern brand communication.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <Link 
              href={`/insights/${featured.slug}`}
              className="group relative block aspect-[21/9] min-h-[500px] overflow-hidden rounded-sm"
            >
              <Image 
                src={featured.image} 
                alt={featured.title} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-adin-black via-adin-black/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
                <SectionLabel className="mb-6">{featured.category}</SectionLabel>
                <h2 className="text-white font-heading font-black text-3xl md:text-5xl lg:text-6xl tracking-tight mb-8 max-w-4xl leading-tight">
                  {featured.title}
                </h2>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-white/50 text-[10px] font-bold uppercase tracking-widest">
                  <span>{featured.author.name} — {featured.author.role}</span>
                  <span className="hidden md:block w-1 h-1 rounded-full bg-adin-green" />
                  <span>{featured.date}</span>
                  <span className="hidden md:block w-1 h-1 rounded-full bg-adin-green" />
                  <span className="text-white flex items-center gap-2 group-hover:text-adin-green transition-colors">
                    Read Article 
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ALL ARTICLES GRID */}
      <section className="py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel className="mb-16">All Articles</SectionLabel>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {list.map((article, i) => (
              <Reveal key={article.slug} delay={i * 0.1}>
                <Link href={`/insights/${article.slug}`} className="group">
                  <div className="relative aspect-[4/3] mb-8 overflow-hidden rounded-sm bg-white/[0.03]">
                    <Image 
                      src={article.image} 
                      alt={article.title} 
                      fill 
                      className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest">{article.date}</span>
                      <span className="w-1 h-1 rounded-full bg-adin-green" />
                      <span className="text-adin-green text-[10px] font-bold uppercase tracking-widest">{article.category}</span>
                    </div>
                    <h3 className="text-white font-heading font-black text-2xl tracking-tight leading-tight group-hover:text-adin-green transition-colors">
                      {article.title}
                    </h3>
                    <span className="inline-block text-white/50 text-[10px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">
                      Read Article →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-adin-light py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <SectionLabel className="text-adin-green mb-6">FAQ</SectionLabel>
                <DisplayHeading className="text-adin-black mb-6 text-3xl md:text-5xl tracking-tight leading-none">
                  About Our Insights
                </DisplayHeading>
                <p className="text-adin-black/50 text-lg">Common questions about our articles, content, and contributions.</p>
              </Reveal>
            </div>
            <div className="lg:col-span-8 space-y-0">
              {[
                { 
                  q: 'What type of content can I find in this blog section?', 
                  a: 'Our blog features insights, industry trends, and practical ideas around brand strategy, PR, content, and communication to help businesses grow and stay relevant.' 
                },
                { 
                  q: 'How often do you publish new content?', 
                  a: 'We regularly publish fresh articles covering the latest trends, strategies, and insights to keep you informed and updated on what’s happening in the industry.' 
                },
                { 
                  q: 'How can these blogs help my business?', 
                  a: 'Our blogs provide actionable insights that help improve brand visibility, communication strategies, audience engagement, and overall business growth.' 
                },
                { 
                  q: 'Can I share or use the content from this blog?', 
                  a: 'Yes, you can share our blog content for learning and reference, but proper credit to ADin is appreciated when using or referencing our insights.' 
                }
              ].map((faq, i) => (
                <Reveal key={i}>
                  <div className="border-b border-adin-black/10 py-8">
                    <h3 className="text-adin-black font-heading font-black text-xl mb-4 tracking-tight">{faq.q}</h3>
                    <p className="text-adin-black/50 text-lg leading-relaxed max-w-2xl">{faq.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="py-32 px-6 md:px-12 lg:px-16 border-t border-white/10 overflow-hidden relative">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--adin-green)_0%,_transparent_70%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <SectionLabel className="mb-8">Newsletter</SectionLabel>
              <DisplayHeading className="text-white mb-6 text-4xl md:text-6xl lg:text-7xl tracking-tight leading-none">
                Stay Ahead of<br />the Curve.
              </DisplayHeading>
              <p className="text-white/40 text-xl leading-relaxed max-w-md">
                Strategic insights, trend reports, and perspectives on purpose-driven brand communications — delivered monthly.
              </p>
            </Reveal>
            
            <Reveal delay={0.2}>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-12">
                <div>
                  <label className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em] block mb-4">Email Address</label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com" 
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white text-xl placeholder:text-white/10 outline-none focus:border-adin-green transition-colors"
                  />
                </div>
                <Button className="w-full justify-center py-6">Subscribe Now →</Button>
                <p className="text-white/20 text-[10px] uppercase tracking-widest font-bold">No spam, ever. Unsubscribe at any time.</p>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
