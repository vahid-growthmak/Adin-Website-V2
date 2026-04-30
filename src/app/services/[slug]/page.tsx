import { notFound } from 'next/navigation'
import { serviceDetails } from '@/data/service-details'
import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { ContactSection } from '@/components/sections/ContactSection'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({
    slug,
  }))
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params
  const service = serviceDetails[slug]

  if (!service) {
    notFound()
  }

  return (
    <>
      <section style={{ minHeight: '75vh', position: 'relative', overflow: 'hidden' }} className="flex items-end">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.heroImage}
            alt={service.label}
            fill
            className="object-cover"
            priority
          />
          <div 
            className="absolute inset-0" 
            style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.97) 0%, rgba(10,10,10,0.75) 40%, rgba(10,10,10,0.35) 100%)' }} 
          />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 pb-20 md:pb-28">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <SectionLabel className="mb-6">{service.label}</SectionLabel>
              <h1 className="font-heading font-black text-white max-w-4xl mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] leading-[0.92] tracking-tighter">
                {service.title}
              </h1>
              <p className="text-white/60 max-w-2xl text-xl leading-relaxed">
                {service.description}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* APPROACH SECTION */}
      <section className="bg-adin-black py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative h-[520px] overflow-hidden">
              <Reveal direction="left" className="h-full">
                <Image
                  src={service.approach.image}
                  alt={service.approach.title}
                  fill
                  className="object-cover"
                />
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:pl-12">
              <Reveal>
                <SectionLabel className="mb-6">Our Approach</SectionLabel>
                <h2 className="font-heading font-black text-white mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.92] tracking-tighter">
                  {service.approach.title}
                </h2>
                <p className="text-white/55 leading-relaxed mb-10 text-lg max-w-[560px]">
                  {service.approach.description}
                </p>
                <div className="flex flex-col gap-8">
                  {service.approach.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="w-2 h-2 rounded-full bg-adin-green mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-heading font-bold text-white tracking-tight mb-1 text-lg">
                          {feature.title}
                        </p>
                        <p className="text-white/45 leading-relaxed text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-adin-black py-24 px-6 md:px-12 lg:px-16 border-t border-white/8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <Reveal>
              <SectionLabel className="mb-4">What We Do</SectionLabel>
              <h2 className="font-heading font-black text-white text-3xl sm:text-4xl md:text-5xl tracking-tighter">
                {service.label} Services
              </h2>
            </Reveal>
            <Reveal direction="right">
              <p className="text-white/40 max-w-sm leading-relaxed text-sm">
                A comprehensive suite of offerings built to elevate your brand&apos;s visibility, credibility, and cultural relevance.
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8 border border-white/8">
            {service.services.map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-adin-black p-10 lg:p-14 h-full hover:bg-white/[0.02] transition-colors">
                  <p className="font-heading font-black text-white/10 mb-6 tracking-tighter text-4xl md:text-5xl">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="font-heading font-bold text-white mb-3 tracking-tight text-xl">
                    {s.title}
                  </h3>
                  <p className="text-white/45 leading-relaxed text-sm">
                    {s.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY (FOR EXPERIENCES) */}
      {service.gallery && (
        <section className="bg-adin-black py-24 px-6 md:px-12 lg:px-16 border-t border-white/8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <Reveal>
                <SectionLabel className="mb-4">Portfolio</SectionLabel>
                <h2 className="font-heading font-black text-white text-3xl sm:text-4xl md:text-5xl tracking-tighter">
                  Moments We&apos;ve Created
                </h2>
              </Reveal>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {service.gallery.map((img, i) => (
                <Reveal key={i} delay={i * 0.05} className="relative h-[300px] overflow-hidden group">
                  <Image
                    src={img}
                    alt={`Gallery ${i}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* TESTIMONIALS */}
      <section className="bg-adin-black py-28 px-6 md:px-12 lg:px-16 border-t border-white/8">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel className={cn("mb-16", service.testimonials.length === 1 && "text-center")}>
              Client Voices
            </SectionLabel>
          </Reveal>
          <div className={cn(
            "grid gap-16",
            service.testimonials.length > 1 ? "grid-cols-1 lg:grid-cols-2" : "max-w-4xl mx-auto text-center"
          )}>
            {service.testimonials.map((t, i) => (
              <Reveal key={i} direction={service.testimonials.length > 1 ? (i % 2 === 0 ? 'left' : 'right') : 'up'} className="border-t border-white/10 pt-12">
                <svg width="32" height="24" viewBox="0 0 32 24" fill="none" className={cn("mb-8 opacity-30", service.testimonials.length === 1 && "mx-auto")}>
                  <path d="M0 24V14.4C0 10.56 0.96 7.28 2.88 4.56C4.96 1.68 8 0.08 12 0V4.56C9.92 4.88 8.4 5.84 7.44 7.44C6.64 8.88 6.24 10.56 6.24 12.48H12V24H0ZM20 24V14.4C20 10.56 20.96 7.28 22.88 4.56C24.96 1.68 28 0.08 32 0V4.56C29.92 4.88 28.4 5.84 27.44 7.44C26.64 8.88 26.24 10.56 26.24 12.48H32V24H20Z" fill="white"/>
                </svg>
                <p className={cn(
                  "text-white/75 leading-relaxed mb-10 italic",
                  service.testimonials.length > 1 ? "text-lg" : "text-2xl md:text-3xl font-light"
                )}>
                  &quot;{t.quote}&quot;
                </p>
                <div className={cn("flex items-center gap-4", service.testimonials.length === 1 && "justify-center")}>
                  <div className="w-10 h-10 rounded-full bg-adin-green flex items-center justify-center flex-shrink-0">
                    <span className="font-heading font-black text-white text-sm">{t.initials}</span>
                  </div>
                  <div className="text-left">
                    <p className="font-heading font-semibold text-white tracking-tight text-sm">{t.author}</p>
                    <p className="text-white/40 uppercase tracking-widest mt-0.5 text-[10px]">{t.role}</p>
                    {t.caseStudyHref && (
                      <a href={t.caseStudyHref} className="inline-block mt-4 text-adin-green font-bold uppercase tracking-widest hover:text-white transition-colors text-[10px]">
                        View Case Study →
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* METRICS STRIP */}
      <section className="bg-adin-black border-t border-white/8 py-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {service.metrics.map((m, i) => (
              <Reveal key={i} delay={i * 0.1} className="text-center lg:text-left">
                <p className="font-heading font-black text-white mb-2 text-3xl sm:text-4xl md:text-6xl tracking-tighter leading-none">
                  {m.value}
                </p>
                <p className="text-white/40 uppercase tracking-widest text-[10px] font-bold">
                  {m.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-40 px-6 md:px-12 lg:px-16 overflow-hidden bg-adin-black border-t border-white/8">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2400&auto=format&fit=crop"
            alt="Contact"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-adin-black/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <Reveal>
            <SectionLabel className="mb-6">Ready to Begin</SectionLabel>
            <h2 className="font-heading font-black text-white mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] max-w-[900px] mx-auto leading-[0.9] tracking-tighter">
              Let&apos;s Build Your Brand&apos;s Credibility.
            </h2>
            <p className="text-white/50 mb-12 text-lg max-w-[520px] mx-auto leading-relaxed">
              Tell us about your brand. We&apos;ll show you what&apos;s possible when storytelling meets strategy.
            </p>
            <Button href="/contact" variant="primary">
              Start the Conversation →
            </Button>
          </Reveal>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
