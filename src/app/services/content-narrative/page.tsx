'use client'

import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { DisplayHeading } from '@/components/ui/DisplayHeading'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'

const disciplines = [
  {
    num: '01',
    title: 'Copywriting',
    text: 'We create clear, engaging content including website copy, social posts, product descriptions, and long-form articles, all written in your brand’s voice.',
    tags: ['Editorial Content', 'Website Copy', 'Social Copy']
  },
  {
    num: '02',
    title: 'Visual Production',
    text: 'ADin produces photography and video content that strengthens your brand identity, from product shoots to brand films designed for digital platforms.',
    tags: ['Photo Direction', 'Video Production', 'Brand Films']
  },
  {
    num: '03',
    title: 'Social Content',
    text: 'We plan and create platform-ready content for Instagram, TikTok, LinkedIn, and more, helping your brand stay relevant and consistently engage your audience.',
    tags: ['Content Strategy', 'Content Creation', 'Short-Form Video']
  },
  {
    num: '04',
    title: 'Campaign Content',
    text: 'We develop integrated content campaigns built around strong ideas, delivered across digital channels to increase reach, engagement, and consistent brand messaging.',
    tags: ['Multi-Channel Campaigns', 'Campaign Strategy', 'Launch Execution']
  }
]

export default function ContentNarrativePage() {
  return (
    <div className="bg-adin-black min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2400&auto=format&fit=crop" 
            alt="Content Narrative" 
            fill 
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-adin-black via-adin-black/70 to-transparent" />
        </div>
        <div className="relative z-10 px-6 md:px-12 lg:px-16 pb-24 pt-48 max-w-7xl mx-auto w-full">
          <Reveal>
            <SectionLabel className="mb-6">Content Creation</SectionLabel>
            <DisplayHeading className="text-white max-w-4xl mb-8 text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
              Content That Brings Brands to Life
            </DisplayHeading>
            <p className="text-white/60 max-w-2xl text-xl leading-relaxed">
              We produce clear, engaging content that helps your brand stand out, connect with audiences, and maintain a strong presence across platforms.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <Reveal className="relative aspect-square lg:aspect-auto lg:h-[600px]">
              <Image 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop" 
                alt="Expertise" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 border border-white/10 m-8" />
            </Reveal>
            <Reveal delay={0.2}>
              <SectionLabel className="mb-8">Our Expertise</SectionLabel>
              <DisplayHeading className="text-white mb-10 text-4xl md:text-5xl lg:text-6xl leading-tight">
                Strategic Content Creation for Modern Brands
              </DisplayHeading>
              <p className="text-white/50 text-xl leading-relaxed mb-12">
                Great content is more than just visuals, it should connect and make an impact. At ADin, we create video, photography, and written content that reflects your brand and speaks to your audience. Everything we produce is designed to grab attention, keep people engaged, and build a strong, consistent presence across digital platforms.
              </p>
              <div className="space-y-10">
                {[
                  { 
                    title: 'Video Production', 
                    text: 'We create brand videos, social media reels, founder stories, and documentary-style content that communicate your message clearly while driving engagement and emotional connection with your audience.' 
                  },
                  { 
                    title: 'Photography Direction', 
                    text: 'Our team develops art-directed photo shoots that build strong visual identity, including product, lifestyle, and editorial imagery that keeps your brand consistent and recognizable.' 
                  },
                  { 
                    title: 'Brand Copywriting', 
                    text: 'We craft website content, social copy, and long-form editorial that reflects your brand voice, connects with your audience, and supports clear, effective communication.' 
                  }
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
          </div>
        </div>
      </section>

      {/* DISCIPLINES */}
      <section className="bg-adin-black py-32 px-6 md:px-12 lg:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel className="mb-20">Our Services</SectionLabel>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {disciplines.map((item, i) => (
              <Reveal key={item.num} delay={i * 0.1}>
                <div className="border border-white/10 p-12 h-full hover:border-adin-green transition-all hover:bg-adin-green/5 group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-0 bg-adin-green group-hover:h-full transition-all duration-500" />
                  <div className="flex justify-between items-start mb-10">
                    <p className="text-white/5 font-heading font-black text-7xl leading-none">{item.num}</p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-adin-green group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-white font-heading font-black text-3xl mb-6 tracking-tight group-hover:text-adin-green transition-colors">{item.title}</h3>
                  <p className="text-white/40 text-lg leading-relaxed mb-10">{item.text}</p>
                  <div className="flex flex-wrap gap-3">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-white/30 border border-white/10 px-4 py-1.5 font-heading text-[10px] uppercase tracking-widest font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT EXPERIENCES */}
      <section className="bg-adin-black py-32 px-6 md:px-12 lg:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-20">
            <SectionLabel className="mb-4 text-adin-green">Client Experiences</SectionLabel>
            <DisplayHeading className="text-white text-3xl sm:text-4xl md:text-5xl">Real Stories From Our Clients.</DisplayHeading>
          </Reveal>
          <div className="max-w-4xl border-t border-white/10 pt-12">
            <Reveal>
              <p className="text-white/70 italic text-xl md:text-2xl leading-relaxed mb-10">
                &quot;The content ADin created for us didn’t just look good—it actually worked. Within the first month, our organic reach grew significantly, and the brand voice they developed still shapes everything we publish today.&quot;
              </p>
              <div>
                <p className="text-white font-heading font-bold text-sm uppercase tracking-tight">Amanda Chen</p>
                <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest mt-1">Founder, Wellness Brand Partner</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="bg-adin-black py-32 px-6 md:px-12 lg:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel className="mb-12">Our Work</SectionLabel>
            <DisplayHeading className="text-white mb-20 text-4xl md:text-6xl">Our Content in Action.</DisplayHeading>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { src: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop', h: 'h-[400px]' },
              { src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop', h: 'h-[300px]' },
              { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop', h: 'h-[400px]' },
              { src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop', h: 'h-[300px]' },
              { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop', h: 'h-[400px]' },
              { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop', h: 'h-[300px]' }
            ].map((img, i) => (
              <Reveal key={i} delay={i * 0.05} className={`relative overflow-hidden ${img.h}`}>
                <Image 
                  src={img.src} 
                  alt="Work" 
                  fill 
                  className="object-cover hover:scale-110 transition-transform duration-1000"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-adin-black py-40 px-6 md:px-12 lg:px-16 border-t border-white/5 text-center">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <SectionLabel className="mb-8 justify-center">Ready to Begin</SectionLabel>
            <DisplayHeading className="text-white mb-10 text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-none">
              Let’s Shape Your Brand Story
            </DisplayHeading>
            <p className="text-white/40 text-xl leading-relaxed mb-16 max-w-xl mx-auto">
              Your content represents your brand every day. At ADin, we make sure it speaks clearly, connects with your audience, and reflects who you are.
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
