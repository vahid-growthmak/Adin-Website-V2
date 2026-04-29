'use client'

import { navigation } from '@/data/navigation'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Logo } from '../ui/Logo'
import { Button } from '../ui/Button'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 md:px-12 lg:px-16',
        scrolled ? 'bg-adin-black/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'
      )}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-10">
          {navigation.main.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "font-heading font-bold text-[11px] uppercase tracking-widest text-white/70 hover:text-white transition-colors link-underline",
                pathname === link.href ? "active text-white" : ""
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-8">
          <Button href="/contact" variant="primary" className="px-6 py-3">
            Contact Us
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="ml-2">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden flex flex-col gap-1.5 interactive"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={cn('w-6 h-0.5 bg-white transition-transform', mobileMenuOpen && 'rotate-45 translate-y-2')} />
          <span className={cn('w-6 h-0.5 bg-white transition-opacity', mobileMenuOpen && 'opacity-0')} />
          <span className={cn('w-6 h-0.5 bg-white transition-transform', mobileMenuOpen && '-rotate-45 -translate-y-2')} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-adin-black z-[110] flex flex-col p-12 transition-all duration-700 ease-in-out',
          mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        )}
      >
        <div className="flex items-center justify-between mb-20">
          <Logo />
          <button className="text-white uppercase tracking-widest font-bold text-xs" onClick={() => setMobileMenuOpen(false)}>
            Close
          </button>
        </div>
        <nav className="flex flex-col gap-5">
          {navigation.mobile.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "font-heading font-black text-4xl sm:text-5xl md:text-7xl text-white hover:text-adin-green transition-colors tracking-tighter",
                pathname === link.href ? "text-adin-green" : ""
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto flex gap-6">
          <a href="https://www.linkedin.com/company/adin-nyc/" target="_blank" className="text-neutral-500 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold">LinkedIn</a>
          <a href="https://www.instagram.com/adin.nyc/" target="_blank" className="text-neutral-500 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold">Instagram</a>
          <a href="https://www.tiktok.com/@adin.nyc" target="_blank" className="text-neutral-500 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold">TikTok</a>
        </div>
      </div>
    </header>
  )
}
