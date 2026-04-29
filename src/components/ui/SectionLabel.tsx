import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: ReactNode
  className?: string
  light?: boolean
}

import { ReactNode } from 'react'

export function SectionLabel({ children, className, light = false }: SectionLabelProps) {
  return (
    <div className={cn('section-label', light && 'text-adin-green', className)}>
      <span className="accent-rule" />
      {children}
    </div>
  )
}
