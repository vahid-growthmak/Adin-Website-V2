'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

const categories = [
  ['ALL', 'PR', 'CONTENT STRATEGY', 'SOCIAL MEDIA', 'EVENTS', 'EXECUTION'],
  ['BRANDING', 'UX/UI', 'PHOTOGRAPHY/VIDEO', 'INFLUENCER', 'RETAIL DESIGN', 'CONSULTING']
]

export function WorkFilters() {
  const [active, setActive] = useState('ALL')

  return (
    <div className="bg-adin-black py-12 px-6 md:px-12 lg:px-16 border-b border-white/5">
      <div className="max-w-screen-2xl mx-auto space-y-6">
        {categories.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap gap-4 md:gap-8 items-center justify-center lg:justify-start">
            {row.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  "text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:text-adin-green",
                  active === cat ? "text-adin-green" : "text-white/40"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
