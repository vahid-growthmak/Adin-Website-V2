import { Reveal } from '../ui/Reveal'
import { StatCounter } from '../ui/StatCounter'

const stats = [
  { label: 'YEARS EXPERIENCE', value: '25+' },
  { label: 'IMPRESSIONS GENERATED', value: '50M+' },
  { label: 'BRANDS SERVED', value: '100+' },
  { label: 'HEADQUARTERS', value: 'NYC' },
]

export function StatsSection() {
  return (
    <section className="bg-adin-light py-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.1}>
              <div className="text-center">
                <p className="font-heading font-black text-adin-black text-6xl md:text-7xl mb-4 tracking-tighter">
                  <StatCounter value={stat.value} />
                </p>
                <p className="font-heading font-bold text-adin-black/40 text-[10px] uppercase tracking-[0.2em]">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
