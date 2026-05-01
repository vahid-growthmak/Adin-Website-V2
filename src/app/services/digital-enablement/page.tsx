'use client'

import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { DisplayHeading } from '@/components/ui/DisplayHeading'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'

const serviceTiles = [
  {
    num: '01',
    title: 'White-Label Web Development',
    text: 'Marketing sites, landing pages, and product surfaces built on Next.js, Webflow, and headless CMS platforms — with handoff packages your developers can own end-to-end.'
  },
  {
    num: '02',
    title: 'Content Management Systems',
    text: 'Headless CMS architecture (Sanity, Contentful, Strapi) tuned to your editorial workflows, with author training and governance baked in.'
  },
  {
    num: '03',
    title: 'SEO & Performance',
    text: 'Technical SEO audits, Core Web Vitals tuning, schema markup, and structured-data rollouts that move organic rank and conversion together.'
  },
  {
    num: '04',
    title: 'Analytics & Reporting',
    text: 'GA4, server-side tracking, and dashboards configured for your stack so your account team can present clean numbers without wrangling pipes.'
  },
  {
    num: '05',
    title: 'Marketing Automation',
    text: 'Lifecycle email, lead-routing, and CRM integrations across HubSpot, Klaviyo, Customer.io, and the rest of the modern stack.'
  },
  {
    num: '06',
    title: 'Partner Enablement',
    text: 'Reusable component libraries, brand-themable templates, and SOPs your agency can deploy across multiple clients without duplicate engineering spend.'
  }
]

const principles = [
  {
    num: '01',
    title: 'White-Label Delivery',
    text: 'Every artifact — code, content, decks, dashboards — ships under your branding, with documentation and handoff materials your team can present as their own.'
  },
  {
    num: '02',
    title: 'Senior Engineering Bench',
    text: 'On-demand access to product, design, and engineering capacity that scales with your pipeline, without the cost of a full in-house team.'
  },
  {
    num: '03',
    title: 'Operational Discretion',
    text: 'We never client-face unless you invite us in. Status, communication, and credit all flow through your account leads.'
  }
]

const steps = [
  {
    num: '01',
    title: 'Scope',
    text: 'We start with a detailed brief — your client requirements, brand guidelines, and delivery expectations. We align on timeline, tooling, and communication protocols before a single line of code is written.'
  },
  {
    num: '02',
    title: 'Build',
    text: 'Our engineering and design teams execute against the brief, delivering iterative builds with staging previews. You review, we refine — all under your project management rhythm.'
  },
  {
    num: '03',
    title: 'Handoff',
    text: 'Final deliverables ship with complete documentation, branded assets, and training materials. Your team presents the work to the client as if it was built in-house — because that&apos;s the point.'
  }
]

export default function DigitalEnablementPage() {
  return (
    <div className="bg-adin-black min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2400&auto=format&fit=crop" 
            alt="Digital Enablement" 
            fill 
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-adin-black via-adin-black/70 to-transparent" />
        </div>
        <div className="relative z-10 px-6 md:px-12 lg:px-16 pb-24 pt-48 max-w-7xl mx-auto w-full">
          <Reveal>
            <SectionLabel className="mb-6">Digital Enablement</SectionLabel>
            <DisplayHeading className="text-white max-w-4xl mb-8 text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
              White-Label Digital Infrastructure
            </DisplayHeading>
            <p className="text-white/60 max-w-2xl text-xl leading-relaxed">
              Turnkey websites, content systems, and growth infrastructure — built by ADin, delivered under your brand.
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
                src="https://images.unsplash.com/photo-1517436026-0c2e6e0c5f0e?q=80&w=2000&auto=format&fit=crop" 
                alt="Engineering team" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 border border-white/10 m-8" />
            </Reveal>
            <Reveal delay={0.2}>
              <SectionLabel className="mb-8">OUR MODEL</SectionLabel>
              <DisplayHeading className="text-white mb-10 text-4xl md:text-5xl lg:text-6xl leading-tight">
                Your Brand on the Front. Our Engineering Behind It.
              </DisplayHeading>
              <p className="text-white/50 text-xl leading-relaxed mb-12">
                We partner with agencies, holding companies, and in-house teams who need senior digital execution without standing up the practice themselves. Every deliverable ships under your name — the strategy, the build, the ongoing optimization. We stay invisible so your client relationship stays uncomplicated.
              </p>
              <ul className="space-y-6 mb-12">
                {['Full White-Label Delivery', 'NDA-First Posture', 'Scalable Engineering Capacity'].map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <span className="w-2 h-2 rounded-full bg-adin-green" />
                    <span className="text-white/70 font-heading font-black uppercase tracking-widest text-xs">{item}</span>
                  </li>
                ))}
              </ul>
              <Button href="/contact" className="px-10 py-8">
                Discuss a Partnership →
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-adin-black py-32 px-6 md:px-12 lg:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel className="mb-20">How We Operate</SectionLabel>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {principles.map((principle, i) => (
              <Reveal key={principle.num} delay={i * 0.1} className={`pt-12 pb-12 ${i !== 0 ? 'md:pl-12 md:border-l border-white/5' : ''} ${i !== 2 ? 'md:pr-12' : ''} border-t md:border-t-0 border-white/5`}>
                <p className="text-white/5 font-heading font-black text-8xl mb-8 leading-none">{principle.num}</p>
                <h3 className="text-white font-heading font-black text-2xl mb-6 tracking-tight">{principle.title}</h3>
                <p className="text-white/40 leading-relaxed">{principle.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-adin-black py-32 px-6 md:px-12 lg:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel className="mb-20">What We Build</SectionLabel>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {serviceTiles.map((tile, i) => (
              <Reveal key={tile.num} delay={i * 0.1}>
                <div className="bg-adin-black p-12 h-full hover:bg-adin-green/5 transition-colors group">
                  <p className="text-white/10 font-heading font-black text-6xl mb-8 group-hover:text-adin-green/20 transition-colors">{tile.num}</p>
                  <h3 className="text-white font-heading font-black text-2xl mb-6 tracking-tight group-hover:text-adin-green transition-colors">{tile.title}</h3>
                  <p className="text-white/40 leading-relaxed">{tile.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel className="mb-6 text-adin-green">Process</SectionLabel>
            <DisplayHeading className="text-adin-black mb-20 text-4xl md:text-6xl">How It Works.</DisplayHeading>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.1}>
                <div className="border-t-4 border-adin-green pt-10">
                  <div className="flex items-end gap-4 mb-6">
                    <span className="text-adin-green font-heading font-black text-5xl leading-none">{step.num}</span>
                    <h3 className="text-adin-black font-heading font-black text-2xl tracking-tight">{step.title}</h3>
                  </div>
                  <p className="text-adin-black/60 leading-relaxed">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="bg-adin-black border-t border-white/5 py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left">
            {[
              { val: '40+', label: 'Partner Engagements' },
              { val: '120+', label: 'Sites Shipped' },
              { val: '99.9%', label: 'Confidentiality' },
              { val: 'NDA', label: 'Default Posture' }
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="text-white font-heading font-black text-4xl md:text-6xl mb-2">{stat.val}</p>
                <p className="text-white/30 uppercase tracking-widest text-[10px] font-bold">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-adin-black py-32 px-6 md:px-12 lg:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-20">
            <SectionLabel className="mb-4">Partner Voices</SectionLabel>
            <DisplayHeading className="text-white text-3xl sm:text-4xl md:text-5xl">What Our Partners Say</DisplayHeading>
          </Reveal>
          <div className="max-w-3xl">
            <Reveal>
              <div className="border-t border-white/10 pt-12">
                <p className="text-white/70 italic text-xl leading-relaxed mb-10">
                  &quot;ADin operates like a senior in-house team that no one else knows exists. We pitch the work, they ship the work, our clients never see the seams.&quot;
                </p>
                <div>
                  <p className="text-white font-heading font-bold text-sm uppercase tracking-tight">Managing Partner</p>
                  <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest mt-1">Agency Partner</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-adin-black py-40 px-6 md:px-12 lg:px-16 border-t border-white/5 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--adin-green)_0%,_transparent_70%)]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <Reveal>
            <SectionLabel className="mb-8 justify-center">Partner With Us</SectionLabel>
            <DisplayHeading className="text-white mb-10 text-4xl md:text-6xl lg:text-7xl leading-none">
              Scale Your Digital Practice Without Scaling Your Team.
            </DisplayHeading>
            <p className="text-white/40 text-xl leading-relaxed mb-16 max-w-xl mx-auto">
              Tell us about your pipeline. We&apos;ll show you how ADin can serve as your invisible digital department.
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
