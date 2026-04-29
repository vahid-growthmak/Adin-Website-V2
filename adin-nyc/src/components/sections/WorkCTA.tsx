'use client'

import { Reveal } from '../ui/Reveal'
import { DisplayHeading } from '../ui/DisplayHeading'
import { Button } from '../ui/Button'
import Image from 'next/image'

export function WorkCTA() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-adin-black">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2670&auto=format&fit=crop"
          alt="Brand storytelling"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-adin-black via-transparent to-adin-black" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <Reveal>
          <DisplayHeading className="text-white text-[clamp(40px,7vw,96px)] leading-[0.9] mb-12">
            Start Your Brand Story<span className="text-adin-green">.</span>
          </DisplayHeading>
          <Button href="/contact" variant="primary" className="px-12 py-6">
            Let&apos;s Get Started
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
