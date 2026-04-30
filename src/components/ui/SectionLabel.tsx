import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: ReactNode
  className?: string
  light?: boolean
}

export function SectionLabel({ children, className, light = false }: SectionLabelProps) {
  return (
    <div className={cn('section-label', light && 'text-adin-green', className)}>
      <span className="accent-rule" />
      {children}
    </div>
  )
}
