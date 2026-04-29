'use client'

import { StatCounter } from '../ui/StatCounter'

const stats = [
  { label: 'IMPRESSIONS GENERATED', value: '50M+' },
  { label: 'BRANDS SERVED', value: '100+' },
  { label: 'YEARS', value: '25+' },
  { label: 'HEADQUARTERS', value: 'NYC' },
]

export function WorkStatsBar() {
  return (
    <div className="bg-adin-green/90 backdrop-blur-sm py-8 px-6 md:px-12 lg:px-16">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left border-r border-adin-black/10 last:border-0 pr-4">
              <div className="font-heading font-black text-adin-black text-3xl md:text-4xl mb-1 flex items-baseline justify-center md:justify-start gap-1">
                {stat.value === 'NYC' ? (
                  stat.value
                ) : (
                  <StatCounter value={stat.value} />
                )}
              </div>
              <p className="text-adin-black/60 text-[10px] font-bold uppercase tracking-widest leading-none">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
