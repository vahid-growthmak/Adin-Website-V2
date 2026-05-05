'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { DisplayHeading } from '@/components/ui/DisplayHeading'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Next.js App Router Error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-adin-black flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-2xl mx-auto">
        <p className="text-adin-green font-heading font-bold uppercase tracking-[0.3em] text-[11px] mb-6">
          Application Error
        </p>
        <DisplayHeading className="text-white mb-8 text-4xl md:text-6xl">
          Something went wrong<span className="text-adin-green">.</span>
        </DisplayHeading>
        <p className="text-white/40 text-lg mb-12 max-w-md mx-auto leading-relaxed">
          {error.message || "We encountered an unexpected issue while loading this page."}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            onClick={() => reset()}
            variant="primary"
          >
            Try Again
          </Button>
          <Button
            href="/"
            variant="outline"
          >
            Go to Homepage
          </Button>
        </div>
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-12 p-6 bg-white/5 border border-white/10 text-left overflow-auto max-h-60 rounded">
            <p className="text-adin-green font-mono text-xs mb-2 uppercase tracking-widest">Debug Info:</p>
            <pre className="text-white/60 font-mono text-xs whitespace-pre-wrap">
              {error.stack}
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}
