'use client'

import { useState } from 'react'
import { Reveal } from '../ui/Reveal'
import { SectionLabel } from '../ui/SectionLabel'
import { DisplayHeading } from '../ui/DisplayHeading'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'How do we start working together?',
    answer: 'We begin with a discovery call to understand your goals, followed by a strategic workshop where we define your brand narrative and key objectives.',
  },
  {
    question: 'What types of brands do you work with?',
    answer: 'We specialize in purpose-driven brands across wellness, nutrition, food & beverage, and lifestyle categories, focusing on mission-driven founders.',
  },
  {
    question: 'Do you offer project-based engagements?',
    answer: 'While we primarily work on long-term retainer basis to ensure consistent brand growth, we occasionally take on high-impact projects or launches.',
  },
  {
    question: 'How do you measure campaign success?',
    answer: 'Success is measured through a combination of quantitative metrics (media impressions, sales growth) and qualitative outcomes (brand sentiment, cultural relevance).',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-adin-black py-24 md:py-32 px-6 md:px-12 lg:px-16 border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel className="mb-8">Support</SectionLabel>
              <DisplayHeading className="text-white text-[clamp(40px,6vw,72px)] leading-[0.95] mb-8">
                Questions & Answers<span className="text-adin-green">.</span>
              </DisplayHeading>
            </Reveal>
          </div>
          
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Reveal key={index} delay={index * 0.1}>
                  <div className="border-b border-white/10">
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full py-8 flex items-center justify-between text-left group"
                    >
                      <h3 className="font-heading font-black text-white text-xl md:text-2xl tracking-tight group-hover:text-adin-green transition-colors">
                        {faq.question}
                      </h3>
                      <span className={cn(
                        "flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-all duration-500",
                        openIndex === index ? "bg-adin-green border-adin-green rotate-45" : "group-hover:border-adin-green"
                      )}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={cn(
                          "transition-colors",
                          openIndex === index ? "text-adin-black" : "text-white"
                        )}>
                          <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </button>
                    <div className={cn(
                      "overflow-hidden transition-all duration-500 ease-in-out",
                      openIndex === index ? "max-h-[500px] pb-8 opacity-100" : "max-h-0 opacity-0"
                    )}>
                      <p className="font-body text-white/50 text-lg leading-relaxed max-w-2xl">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
