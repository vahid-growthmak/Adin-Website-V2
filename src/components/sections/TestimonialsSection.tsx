import { testimonials } from '@/data/testimonials'
import { SectionLabel } from '../ui/SectionLabel'
import { DisplayHeading } from '../ui/DisplayHeading'
import { Reveal } from '../ui/Reveal'

export function TestimonialsSection() {
  const featured = testimonials.filter(t => t.featured)

  return (
    <section id="testimonials" className="bg-adin-black py-32 md:py-48 px-6 md:px-12 lg:px-16 border-t border-white/5 scroll-normal">
      <div className="max-w-screen-2xl mx-auto">
        <div className="max-w-3xl mb-24">
          <Reveal>
            <SectionLabel className="mb-8">Testimonials</SectionLabel>
          </Reveal>
          <DisplayHeading className="text-white text-[clamp(40px,6vw,80px)] leading-[0.95]">
            What Our Clients Say<span className="text-adin-green">.</span>
          </DisplayHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {featured.map((t, index) => (
            <Reveal key={t.author} delay={index * 0.1}>
              <div className="flex flex-col h-full">
                <p className="font-body text-white/60 text-lg md:text-xl leading-relaxed mb-10 italic">
                  &quot;{t.quote}&quot;
                </p>
                <div className="mt-auto">
                  <p className="font-heading font-bold text-white text-lg">{t.author}</p>
                  <p className="text-adin-green uppercase tracking-widest text-[10px] font-bold mt-2">
                    {t.role}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
