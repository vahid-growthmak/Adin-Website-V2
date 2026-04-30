'use client'

import { Reveal } from '../ui/Reveal'
import { SectionLabel } from '../ui/SectionLabel'
import { DisplayHeading } from '../ui/DisplayHeading'

const testimonials = [
  {
    quote: "ADin didn’t just help us get coverage—they changed how our brand is seen. The way they approached our launch made a real difference.",
    author: "Jamie Morrison",
    role: "Founder, Vitality Wellness Co.",
  },
  {
    quote: "The structure and clarity ADin brought to our communications gave us real confidence. They felt like partners, not just an agency.",
    author: "Rachel Park",
    role: "CEO, Harvest Table Foods",
  },
]

export function TwoTestimonialsSection() {
  return (
    <section className="bg-adin-black py-24 md:py-32 px-6 md:px-12 lg:px-16 border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-20">
          <Reveal>
            <SectionLabel className="mb-8">Feedback</SectionLabel>
            <DisplayHeading className="text-white text-[clamp(40px,6vw,72px)] leading-[0.95]">
              What Our Clients Say<span className="text-adin-green">.</span>
            </DisplayHeading>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {testimonials.map((t, index) => (
            <Reveal key={t.author} delay={index * 0.1}>
              <div className="flex flex-col h-full">
                <p className="font-body text-white/60 text-xl md:text-2xl leading-relaxed mb-10 italic">
                  &quot;{t.quote}&quot;
                </p>
                <div className="mt-auto flex items-center gap-4">
                  <div className="w-10 h-10 bg-adin-green rounded-full flex items-center justify-center font-heading font-black text-adin-black text-xs">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-white text-lg">{t.author}</p>
                    <p className="text-adin-green uppercase tracking-widest text-[10px] font-bold mt-1">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
