'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQ {
  question: string
  answer: string
}

export function ArticleFAQ({ faqs }: { faqs: FAQ[] }) {
  const [isOpen, setIsOpen] = useState<number | null>(null)

  return (
    <div className="space-y-0">
      {faqs.map((faq, i) => (
        <div key={i} className="border-b border-white/10">
          <button
            type="button"
            onClick={() => setIsOpen(isOpen === i ? null : i)}
            aria-expanded={isOpen === i}
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
                <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
  )
}
