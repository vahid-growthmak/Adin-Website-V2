import Link from 'next/link'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-adin-black flex flex-col items-center justify-center p-6 text-center">
      <div className="mb-12">
        <Logo />
      </div>
      <Reveal>
        <p className="text-adin-green font-heading font-bold uppercase tracking-[0.3em] text-[11px] mb-6">404 Error</p>
        <h1 className="font-heading font-black text-white text-[clamp(48px,10vw,120px)] leading-[0.9] tracking-tighter mb-8">
          Page Not Found<span className="text-adin-green">.</span>
        </h1>
        <p className="font-body text-white/40 text-lg md:text-xl max-w-md mx-auto leading-relaxed mb-12">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex justify-center gap-6">
          <Button href="/" variant="primary">
            Back to Home
          </Button>
          <Button href="/contact" variant="outline">
            Contact Support
          </Button>
        </div>
      </Reveal>
    </div>
  )
}
