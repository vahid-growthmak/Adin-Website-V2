'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SectionLabel } from '../ui/SectionLabel'
import { DisplayHeading } from '../ui/DisplayHeading'
import { Reveal } from '../ui/Reveal'
import { useStickyInternalScroll } from '@/hooks/useStickyInternalScroll'

export function PhilosophySection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)

  useStickyInternalScroll(containerRef, innerRef)

  useGSAP(() => {
    if (!imgRef.current) return

    gsap.fromTo(
      imgRef.current,
      { y: '-10%' },
      {
        y: '10%',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    )
  }, { scope: containerRef })

  return (
    <section id="philosophy" ref={containerRef} className="relative bg-adin-black overflow-hidden">
      <div ref={innerRef} className="flex flex-col">
        <div className="relative h-[70vh] w-full overflow-hidden">
          <div className="absolute inset-0 scale-110">
            <Image
              ref={imgRef}
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2500&auto=format&fit=crop"
              alt="Philosophy"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-adin-black via-adin-black/60 to-transparent" />
          </div>

          <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-12 lg:p-16 pb-24">
            <div className="max-w-5xl">
              <Reveal>
                <SectionLabel className="mb-6">Our Philosophy</SectionLabel>
              </Reveal>
              <DisplayHeading className="text-white text-[clamp(32px,6vw,88px)] leading-[0.95]">
                Building Impactful Brands Through Strategic Storytelling<span className="text-adin-green">.</span>
              </DisplayHeading>
              <Reveal delay={0.4}>
                <p className="font-body text-white/60 max-w-2xl mt-8 text-lg md:text-xl leading-relaxed">
                  At ADin, we believe strong brands are built on clarity, purpose, and trust—creating stories that resonate deeply and leave a lasting impression.
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 h-[30vh] min-h-[240px] bg-adin-black">
          <div className="relative overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop"
              alt="Team"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
          </div>
          <div className="relative overflow-hidden group border-x border-white/5">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
              alt="Collaboration"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
          </div>
          <div className="relative overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2670&auto=format&fit=crop"
              alt="Strategy"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
