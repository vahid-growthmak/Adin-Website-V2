'use client'

import { Reveal } from '../ui/Reveal'
import { DisplayHeading } from '../ui/DisplayHeading'
import { Button } from '../ui/Button'
import Image from 'next/image'

export function ApproachCTA() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-adin-black">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
          alt="Collaborative meeting"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-adin-black via-transparent to-adin-black/50" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <Reveal>
          <p className="font-heading font-bold text-adin-green text-[10px] uppercase tracking-[0.3em] mb-8">
            Next Steps
          </p>
          <DisplayHeading className="text-white text-[clamp(40px,7vw,96px)] leading-[0.9] mb-12">
            Let&apos;s Build Something Together<span className="text-adin-green">.</span>
          </DisplayHeading>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button href="/contact" variant="primary" className="w-full sm:w-auto px-10">
              Start a Conversation
            </Button>
            <Button href="/work" variant="outline" className="w-full sm:w-auto px-10">
              View Our Work
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
