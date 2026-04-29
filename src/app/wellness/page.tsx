import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'
import { DisplayHeading } from '@/components/ui/DisplayHeading'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Wellness Communications | ADIN NYC',
}

const wellnessServices = [
  {
    id: '01',
    title: 'Thought Leadership',
    description: 'We position wellness founders as authoritative voices through strategic media placement, expert commentary, and bylined articles in top health publications.'
  },
  {
    id: '02',
    title: 'Influencer Partnerships',
    description: 'We identify and cultivate relationships with authentic wellness influencers whose audiences align precisely with your brand\'s values.'
  },
  {
    id: '03',
    title: 'Brand Storytelling',
    description: 'From ingredient sourcing narratives to founder stories, we craft the compelling brand stories that resonate with health-conscious consumers.'
  }
]

export default function WellnessPage() {
  return (
    <main className="bg-adin-black min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2400&auto=format&fit=crop" 
            alt="Wellness" 
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-adin-black via-adin-black/95 to-adin-black/30" />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 pb-20 md:pb-28 pt-40">
          <div className="max-w-4xl">
            <Reveal>
              <SectionLabel className="mb-6">Wellness & Nutrition</SectionLabel>
              <DisplayHeading className="text-white mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px]">
                Communications for Brands Elevating Human Health.
              </DisplayHeading>
              <p className="text-white/60 max-w-2xl text-xl md:text-2xl leading-relaxed">
                Purpose-driven PR and communications for wellness brands changing how the world approaches health and wellbeing.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <SectionLabel className="mb-6 text-adin-green">Deep Expertise</SectionLabel>
                <DisplayHeading className="text-white mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  A Deep Understanding of Wellness Trends and Insights.
                </DisplayHeading>
                <p className="text-white/50 leading-relaxed mb-12 text-lg md:text-xl">
                  The wellness space is complex — consumers are sophisticated, media is scrutinizing, and credibility is everything. ADIN brings decades of experience to help brands cut through the noise.
                </p>
                <div className="space-y-6">
                  {['Wellness Media Relations', 'Supplement & Nutrition PR', 'Lifestyle Brand Positioning'].map((item) => (
                    <div key={item} className="flex items-center gap-4 group">
                      <span className="w-2 h-2 rounded-full bg-adin-green group-hover:scale-125 transition-transform" />
                      <span className="text-white/70 font-bold uppercase tracking-[0.2em] text-xs">{item}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6 relative aspect-square md:aspect-[4/5] lg:aspect-auto lg:h-[650px] overflow-hidden rounded-sm">
              <Reveal delay={0.2} className="h-full">
                <Image 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2000&auto=format&fit=crop" 
                  alt="Wellness expertise" 
                  fill
                  className="object-cover"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-adin-black py-32 px-6 md:px-12 lg:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-20">
            <SectionLabel className="mb-4">What We Do</SectionLabel>
            <DisplayHeading className="text-white text-3xl sm:text-4xl md:text-5xl">
              Core Wellness Services
            </DisplayHeading>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 overflow-hidden rounded-sm">
            {wellnessServices.map((service, i) => (
              <Reveal key={service.id} delay={i * 0.1} className="bg-adin-black p-12 lg:p-16 hover:bg-white/[0.02] transition-colors">
                <span className="font-heading font-black text-6xl text-white/5 block mb-8 tracking-tighter">
                  {service.id}
                </span>
                <h3 className="font-heading font-bold text-white mb-4 text-xl lg:text-2xl tracking-tight">
                  {service.title}
                </h3>
                <p className="text-white/40 leading-relaxed text-base">
                  {service.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-adin-black py-32 px-6 md:px-12 lg:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-16">
            <SectionLabel className="mb-4">Client Voices</SectionLabel>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <Reveal className="border-t border-white/10 pt-12">
              <svg className="mb-8 opacity-30 text-adin-green" width="48" height="34" viewBox="0 0 40 28" fill="none"><path d="M0 28V17.5C0 7.833 5.333 2.333 16 1L17.5 3.5C13.5 4.5 10.667 6.167 9 8.5C7.333 10.833 6.667 13.333 7 16H16V28H0ZM24 28V17.5C24 7.833 29.333 2.333 40 1L41.5 3.5C37.5 4.5 34.667 6.167 33 8.5C31.333 10.833 30.667 13.333 31 16H40V28H24Z" fill="currentColor"/></svg>
              <p className="text-white/70 leading-relaxed mb-12 text-xl md:text-2xl italic font-heading font-light">
                &ldquo;ADIN leveraged our company&apos;s pivot into producing facemasks to generate millions of consumer impressions, driving both brand awareness and sales.&rdquo;
              </p>
              <div>
                <p className="font-heading font-bold text-white text-lg">Barry Cik</p>
                <p className="text-white/30 uppercase tracking-widest text-[10px] font-bold">Founder, Naturepedic</p>
                <Link href="/work/naturepedic" className="inline-block mt-4 text-adin-green font-bold uppercase tracking-widest text-[10px] hover:text-white transition-colors">
                  View Case Study →
                </Link>
              </div>
            </Reveal>
            <Reveal className="border-t border-white/10 pt-12" delay={0.1}>
              <svg className="mb-8 opacity-30 text-adin-green" width="48" height="34" viewBox="0 0 40 28" fill="none"><path d="M0 28V17.5C0 7.833 5.333 2.333 16 1L17.5 3.5C13.5 4.5 10.667 6.167 9 8.5C7.333 10.833 6.667 13.333 7 16H16V28H0ZM24 28V17.5C24 7.833 29.333 2.333 40 1L41.5 3.5C37.5 4.5 34.667 6.167 33 8.5C31.333 10.833 30.667 13.333 31 16H40V28H24Z" fill="currentColor"/></svg>
              <p className="text-white/70 leading-relaxed mb-12 text-xl md:text-2xl italic font-heading font-light">
                &ldquo;ADIN has a unique ability to identify opportunities and trends. For purpose-driven entrepreneurs like myself, that insight is invaluable.&rdquo;
              </p>
              <div>
                <p className="font-heading font-bold text-white text-lg">Kari Warberg Block</p>
                <p className="text-white/30 uppercase tracking-widest text-[10px] font-bold">CEO & Founder, EarthKind</p>
                <Link href="/work/earthkind" className="inline-block mt-4 text-adin-green font-bold uppercase tracking-widest text-[10px] hover:text-white transition-colors">
                  View Case Study →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-adin-black py-40 px-6 md:px-12 lg:px-16 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-adin-green/10 via-transparent to-transparent opacity-50" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Reveal>
            <SectionLabel className="mb-8">Get Started</SectionLabel>
            <DisplayHeading className="text-white mb-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Ready to Elevate Your Wellness Brand?
            </DisplayHeading>
            <p className="text-white/40 mb-16 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed">
              We know how to tell the wellness story in a way that builds trust and drives growth. Let&apos;s talk about yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button href="/contact">Start the Conversation →</Button>
              <Button href="/work" variant="outline">View Our Work</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
