'use client'

import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { DisplayHeading } from '@/components/ui/DisplayHeading'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    id: 'communications',
    number: '01',
    label: 'Communications',
    title: 'Strategic Media Relations & Brand Communications',
    description: 'We deliver strategic media relations, brand messaging, and PR campaigns that position your brand with credibility and influence across key media channels.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2000&auto=format&fit=crop',
    capabilities: ['Media Relations', 'Reputation Management', 'Crisis Communications', 'Thought Leadership', 'Press Materials', 'Media Training'],
    link: '/services/communications'
  },
  {
    id: 'experiences',
    number: '02',
    label: 'Experiences',
    title: 'Immersive Brand Experiences & Activations',
    description: 'We design and execute brand activations and experiential campaigns that connect with audiences, create engagement, and build lasting brand recall.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop',
    capabilities: ['Brand Activations', 'Product Launches', 'Community Events', 'Influencer Experiences', 'Pop-Ups'],
    link: '/services/experiences',
    reverse: true
  },
  {
    id: 'content-narrative',
    number: '03',
    label: 'Content Creation',
    title: 'Multimedia Content & Brand Storytelling',
    description: 'We create high-impact content across digital platforms, combining storytelling, visual production, and social strategy to amplify your brand voice.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop',
    capabilities: ['Copywriting', 'Visual Production', 'Social Content', 'Video Production', 'Editorial Content'],
    link: '/services/content-narrative'
  },
  {
    id: 'advisory',
    number: '04',
    label: 'Strategic Advisory',
    title: 'Brand Strategy & Executive Advisory',
    description: 'We provide senior-level strategic advisory for founders and leadership teams, helping define brand positioning, messaging frameworks, and long-term growth strategies.',
    image: 'https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2000&auto=format&fit=crop',
    capabilities: ['Brand Positioning', 'Messaging Frameworks', 'Investor Communications', 'Market Entry Strategy', 'Growth Advisory'],
    link: '/services/advisory',
    reverse: true
  },
  {
    id: 'digital-enablement',
    number: '05',
    label: 'Digital Enablement',
    title: 'White-Label Digital Infrastructure',
    description: 'We deliver turnkey digital services — websites, content systems, analytics, and growth infrastructure — engineered for partners and agencies to ship under their own brand.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop',
    capabilities: ['White-Label Web Development', 'Content Management Systems', 'SEO & Performance', 'Analytics & Reporting', 'Marketing Automation', 'Partner Enablement'],
    link: '/services/digital-enablement'
  }
]

export default function ServicesPage() {
  return (
    <div className="bg-adin-black min-h-screen">
      {/* PAGE HERO */}
      <section className="relative min-h-[70vh] flex items-end">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2400&auto=format&fit=crop" 
            alt="Services Hero" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-adin-black via-adin-black/70 to-adin-black/30" />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 pb-20">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <SectionLabel className="mb-6">OUR SERVICES</SectionLabel>
              <DisplayHeading className="text-white mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px]">
                Strategic Communications That Drive Brand Growth
              </DisplayHeading>
              <p className="text-white/50 max-w-xl text-xl md:text-2xl leading-relaxed">
                Four disciplines. One strategic vision. Measurable results
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-32">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.1}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${service.reverse ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`relative h-[400px] md:h-[520px] overflow-hidden ${service.reverse ? 'lg:order-2' : ''}`}>
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 hover:scale-105"
                  />
                </div>
                <div className={`${service.reverse ? 'lg:order-1' : ''}`}>
                  <div className="flex items-start justify-between mb-10">
                    <SectionLabel>{service.label}</SectionLabel>
                    <span className="font-heading font-black text-white/5 text-6xl md:text-8xl leading-none tracking-tighter">
                      {service.number}
                    </span>
                  </div>
                  <h3 className="text-white font-heading font-black text-3xl md:text-5xl mb-8 leading-[1.1] tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-lg md:text-xl leading-relaxed mb-12">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-y-4 gap-x-8 mb-12">
                    {service.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-center gap-3 text-white/40 uppercase tracking-widest text-[10px] font-bold">
                        <span className="w-1 h-1 bg-adin-green rounded-full flex-shrink-0" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                  <Button href={service.link}>
                    Explore {service.label} →
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURED RESULTS */}
      <section className="bg-adin-black py-28 px-6 md:px-12 lg:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-16">
            <SectionLabel className="mb-4">Impact</SectionLabel>
            <DisplayHeading className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Featured Results</DisplayHeading>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                client: 'Designs for Health',
                service: 'Communications',
                desc: 'Secured 150+ top-tier media placements in wellness and trade verticals.',
                image: 'https://images.unsplash.com/photo-1579152276503-34079860b29a?q=80&w=800&auto=format&fit=crop',
                link: '/work/designs-for-health'
              },
              {
                client: 'Hooray Foods',
                service: 'Experiences',
                desc: 'Produced a high-impact NYC pop-up launch with 50+ media and influencer attendees.',
                image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=800&auto=format&fit=crop',
                link: '/work/hooray-foods'
              },
              {
                client: 'EarthKind',
                service: 'Content Creation',
                desc: 'Developed an integrated content strategy that grew social engagement by 45%.',
                image: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?q=80&w=800&auto=format&fit=crop',
                link: '/work/earthkind'
              },
              {
                client: 'Naturepedic',
                service: 'Strategic Advisory',
                desc: 'Led strategic brand repositioning to capture 20% more market share in organic bedding.',
                image: 'https://images.unsplash.com/photo-1505691722718-4684375e7970?q=80&w=800&auto=format&fit=crop',
                link: '/work/naturepedic'
              }
            ].map((study, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <Link href={study.link} className="group block bg-white/[0.02] border border-white/5 hover:border-adin-green/40 transition-colors">
                  <div className="relative h-64 overflow-hidden">
                    <Image src={study.image} alt={study.client} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-8">
                    <p className="text-adin-green uppercase tracking-widest text-[9px] font-bold mb-2">{study.service}</p>
                    <h3 className="text-white font-heading font-bold text-lg mb-3 tracking-tight">{study.client}</h3>
                    <p className="text-white/40 text-sm mb-6 leading-relaxed">{study.desc}</p>
                    <span className="text-white uppercase tracking-widest text-[9px] font-black group-hover:text-adin-green transition-colors">View Project →</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY SECTION */}
      <section className="bg-adin-light py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel className="text-adin-green mb-6">How We Work</SectionLabel>
            <DisplayHeading className="text-adin-black mb-16 text-4xl sm:text-5xl md:text-6xl">Methodology</DisplayHeading>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: 'PHASE ONE',
                title: 'Discovery',
                desc: 'We start by understanding your brand, audience, and market. Through research and stakeholder alignment, we build a clear foundation for strategy.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                )
              },
              {
                step: 'PHASE TWO',
                title: 'Execution',
                desc: 'We activate your strategy across the right channels, combining media, content, and experiences to deliver consistent and impactful brand visibility.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                )
              },
              {
                step: 'PHASE THREE',
                title: 'Measurement',
                desc: 'We track performance against clear goals, providing transparent reporting and continuous optimization to ensure meaningful, measurable business results.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                )
              }
            ].map((phase, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white/40 backdrop-blur-sm border border-adin-black/5 p-12 h-full hover:border-adin-green transition-colors">
                  <div className="w-12 h-12 bg-adin-green/10 border border-adin-green/20 flex items-center justify-center mb-8 text-adin-green">
                    {phase.icon}
                  </div>
                  <SectionLabel className="text-adin-green mb-4">{phase.step}</SectionLabel>
                  <h4 className="text-adin-black font-heading font-black text-2xl mb-6 tracking-tight">{phase.title}</h4>
                  <p className="text-adin-black/60 leading-relaxed">{phase.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* THE ADIN DIFFERENCE */}
      <section className="bg-adin-black py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-20">
            <SectionLabel className="mb-4">Why ADIN</SectionLabel>
            <DisplayHeading className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              The ADIN Difference
            </DisplayHeading>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: '25+ Years of Experience',
                desc: 'With over two decades in strategic communications, we understand how to position brands in a constantly evolving media landscape.'
              },
              {
                title: 'Founder-First Approach',
                desc: 'You work directly with senior experts. We stay close to your vision, ensuring every strategy is aligned with your goals from the start.'
              },
              {
                title: 'Purpose-Driven Focus',
                desc: 'We partner with brands that are committed to making a difference, allowing us to create more meaningful and impactful work.'
              },
              {
                title: 'Measurable Results',
                desc: 'We turn strategy into results, helping your brand gain visibility, build credibility, and achieve consistent, measurable growth.'
              }
            ].map((diff, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="border border-white/5 p-12 hover:border-adin-green/30 transition-colors group">
                  <h3 className="text-white font-heading font-black text-2xl mb-6 tracking-tight group-hover:text-adin-green transition-colors">{diff.title}</h3>
                  <p className="text-white/40 leading-relaxed text-lg">{diff.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-adin-black py-32 px-6 md:px-12 lg:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-20">
            <SectionLabel className="mb-4">Client Voices</SectionLabel>
            <DisplayHeading className="text-white text-3xl sm:text-4xl md:text-5xl">What Clients Say</DisplayHeading>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                quote: "ADin completely changed how we approached our launch. Their media connections and storytelling helped us get coverage we wouldn’t have reached on our own.",
                author: "Alexandra Torres",
                role: "Founder, Green Root Wellness"
              },
              {
                quote: "The event ADin created for us was beyond what we expected. It felt thoughtful, well-executed, and made a real impression on everyone who attended.",
                author: "David Kim",
                role: "CEO, Nourish Collective"
              },
              {
                quote: "They guided us through a major brand shift with clarity and confidence. The team is honest, sharp, and genuinely invested in helping you succeed.",
                author: "Maya Patel",
                role: "Co-Founder, Rooted Foods"
              }
            ].map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="border-t border-white/10 pt-12 h-full flex flex-col justify-between">
                  <p className="text-white/70 italic text-lg leading-relaxed mb-10">&quot;{t.quote}&quot;</p>
                  <div>
                    <p className="text-white font-heading font-bold text-sm uppercase tracking-tight">{t.author}</p>
                    <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest mt-1">{t.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="bg-adin-black py-32 px-6 md:px-12 lg:px-16 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-16">
            <SectionLabel className="mb-4">Common Inquiries</SectionLabel>
            <DisplayHeading className="text-white text-3xl sm:text-4xl md:text-5xl">Service FAQs</DisplayHeading>
          </Reveal>
          <div className="space-y-4">
            {[
              {
                q: "What services are included in a standard engagement?",
                a: "Most engagements start with our core Communications discipline, including media relations and brand narrative development. We tailor every partnership to include Experiences, Content, or Advisory as needed."
              },
              {
                q: "How do you measure the success of a PR campaign?",
                a: "Success is measured through a combination of media quality, key message pull-through, audience reach, and business impact like brand awareness and web traffic."
              },
              {
                q: "Do you work with startups or established brands?",
                a: "Both. Our 'Founder-First' approach is ideal for high-growth startups building authority, while our experience provides the depth needed by established brands."
              }
            ].map((faq, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <details className="group border-b border-white/5 py-8">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="text-white font-heading font-bold text-xl pr-8">{faq.q}</span>
                    <span className="text-adin-green transition-transform duration-300 group-open:rotate-45">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><line x1="10" y1="3" x2="10" y2="17" stroke="currentColor" strokeWidth="2"/><line x1="3" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="2"/></svg>
                    </span>
                  </summary>
                  <p className="text-white/40 mt-6 leading-relaxed text-lg max-w-2xl">{faq.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-40 px-6 md:px-12 lg:px-16 border-t border-white/5 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--adin-green)_0%,_transparent_70%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal>
            <SectionLabel className="mb-6">Start Your Story</SectionLabel>
            <DisplayHeading className="text-white mb-12 text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
              Ready to Amplify Your Brand?
            </DisplayHeading>
            <Button href="/contact" className="px-16 py-8">
              Begin a Project →
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
