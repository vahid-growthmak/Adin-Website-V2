'use client'

import { site } from '@/data/site'

export function Marquee() {
  const items = site.marqueeItems

  return (
    <div className="bg-adin-green py-4 overflow-hidden border-y border-white/10">
      <div className="marquee-track">
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="font-heading font-black text-white uppercase tracking-widest text-sm px-8 whitespace-nowrap">
              {item}
            </span>
            <span className="w-2 h-2 bg-white/30 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  )
}
