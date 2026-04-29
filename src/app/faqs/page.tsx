'use client'

import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { DisplayHeading } from '@/components/ui/DisplayHeading'
import { Button } from '@/components/ui/Button'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const faqData = [
  {
    category: 'About ADIN NYC',
    items: [
      {
        q: 'What is ADIN NYC?',
        a: 'ADIN NYC is a strategic communications and PR agency based in New York City. We specialize in purpose-driven brands — companies whose products and missions create positive impact in the world.'
      },
      {
        q: 'How long has ADIN NYC been in business?',
        a: "ADIN NYC was founded in 1998, giving us over 25 years of experience in strategic communications. Over the decades, we've built deep expertise in wellness, food & beverage, and purpose-driven brands."
      },
      {
        q: 'Where is ADIN NYC located?',
        a: 'Our headquarters is at 7 World Trade Center in New York City, though we work with clients across the United States and internationally.'
      },
      {
        q: 'Who founded ADIN NYC?',
        a: 'ADIN NYC was founded by Sue Asci, a veteran communications strategist with over 25 years in the industry. Sue built the agency on the belief that communications should be purposeful, strategic, and rooted in genuine brand values.'
      }
    ]
  },
  {
    category: 'Services',
    items: [
      {
        q: 'What services does ADIN NYC offer?',
        a: 'We offer four core service areas: Communications (PR, media relations, thought leadership), Experiences (events, brand activations), Content Creation, and Strategic Advisory. These services can be engaged individually or as an integrated program.'
      },
      {
        q: 'Do you work with startups or only established brands?',
        a: 'We work with brands at all stages — from early-stage startups to established companies. Our advisory services are particularly well-suited for founders in growth mode who need strategic guidance alongside hands-on communications support.'
      },
      {
        q: 'Can you help with crisis communications?',
        a: 'Yes, reputation management and crisis communications are a core part of our Communications practice. We help brands navigate challenging moments with clear strategy, message discipline, and proactive media management.'
      },
      {
        q: 'Do you offer project-based work or retainers only?',
        a: 'We offer both. Many clients begin with project-based engagements — such as a product launch or event — and move to ongoing retainers as the relationship develops and strategy deepens.'
      }
    ]
  },
  {
    category: 'Working Together',
    items: [
      {
        q: 'How does the client onboarding process work?',
        a: 'We begin with a discovery call, followed by a comprehensive briefing process where we learn about your brand, goals, target audiences, and competitive landscape. From there we develop a strategic framework before moving into execution.'
      },
      {
        q: 'How long does it take to see results?',
        a: 'PR results timeline varies by objective. Initial media placements can happen within weeks; building sustained brand authority is a longer-term investment, typically 6–12 months.'
      },
      {
        q: 'How often will we communicate with the ADIN team?',
        a: "We provide regular status updates, monthly reporting, and are available for calls or meetings as needed. You'll have direct access to your lead strategist throughout the engagement."
      },
      {
        q: 'Do you sign NDAs?',
        a: 'Yes, we routinely sign NDAs and treat all client information with the highest level of confidentiality. Discretion is foundational to how we operate.'
      }
    ]
  },
  {
    category: 'Industries',
    items: [
      {
        q: 'What industries do you specialize in?',
        a: 'Our core focus areas are wellness & nutrition, food & beverage, and social impact. We also work with lifestyle, beauty, and consumer brands whose missions align with positive change.'
      },
      {
        q: 'Do you work with non-profits?',
        a: 'Yes, we have experience working with non-profit organizations and social enterprises on mission-driven communications campaigns that raise awareness and drive meaningful outcomes.'
      }
    ]
  }
]

function FAQAccordion({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex justify-between items-center text-left group"
      >
        <span className="text-white font-heading font-black text-xl md:text-2xl tracking-tight group-hover:text-adin-green transition-colors pr-8">
          {q}
        </span>
        <span className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-adin-green transition-transform duration-500 ${isOpen ? 'rotate-45' : ''}`}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8">
              <p className="text-white/40 text-lg leading-relaxed max-w-3xl">
                {a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQsPage() {
  return (
    <main className="bg-adin-black min-h-screen">
      {/* HEADER */}
      <section className="px-6 md:px-12 lg:px-16 pt-40 pb-20 md:pt-48 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel className="mb-6">FAQs</SectionLabel>
            <DisplayHeading className="text-white mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              Frequently Asked Questions.
            </DisplayHeading>
            <p className="text-white/50 max-w-2xl text-xl leading-relaxed">
              Find answers to common questions about our services, process, and how we work with clients.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-32">
          {faqData.map((group, i) => (
            <div key={group.category} className="space-y-12">
              <Reveal>
                <SectionLabel className="mb-8">{group.category}</SectionLabel>
                <div className="space-y-0">
                  {group.items.map((item, j) => (
                    <FAQAccordion key={j} q={item.q} a={item.a} />
                  ))}
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-adin-black py-32 px-6 md:px-12 lg:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-16">
          <Reveal>
            <SectionLabel className="mb-8">Still Have Questions?</SectionLabel>
            <DisplayHeading className="text-white max-w-xl text-3xl md:text-5xl lg:text-6xl">
              We&apos;re happy to talk through the details.
            </DisplayHeading>
          </Reveal>
          <Reveal delay={0.2}>
            <Button href="/contact" className="px-12 py-8 justify-center">
              Get in Touch →
            </Button>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
