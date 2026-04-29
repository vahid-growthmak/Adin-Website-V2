import { cn } from '@/lib/utils'
import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  href?: string
  children: ReactNode
  className?: string
  variant?: 'primary' | 'outline' | 'green'
  onClick?: () => void
  type?: 'button' | 'submit'
}

export function Button({
  href,
  children,
  className,
  variant = 'primary',
  onClick,
  type = 'button',
}: ButtonProps) {
  const baseClass = cn(
    variant === 'primary' && 'btn-primary',
    variant === 'outline' && 'btn-outline',
    variant === 'green' && 'btn-green',
    className
  )

  if (href) {
    return (
      <Link href={href} className={baseClass}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={baseClass}>
      {children}
    </button>
  )
}
