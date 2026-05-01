'use client'

import { navigation } from '@/data/navigation'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Logo } from '../ui/Logo'
import { Button } from '../ui/Button'
import { ScrollTrigger } from '@/lib/gsap'

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

  // Lock background scroll while the mobile menu is open. `overflow:
  // hidden` alone isn't enough because GSAP's
  // `ScrollTrigger.normalizeScroll(true)` (set in HomepageStacking)
  // intercepts wheel/touch events before browser scroll containment
  // applies. Two-part lock:
  //   1. Disable normalizeScroll so GSAP releases its scroll hijack.
  //   2. Pin <body> with position:fixed and a negative top offset so
  //      the document physically cannot scroll. On close, restore the
  //      saved scrollY so the page stays where the user left it.
  useEffect(() => {
    if (!mobileMenuOpen) return
    const scrollY = window.scrollY
    const body = document.body
    const prev = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
    }
    ScrollTrigger.normalizeScroll(false)
    body.style.position = 'fixed'
    body.style.top = `-${scrollY}px`
    body.style.left = '0'
    body.style.right = '0'
    body.style.width = '100%'
    return () => {
      body.style.position = prev.position
      body.style.top = prev.top
      body.style.left = prev.left
      body.style.right = prev.right
      body.style.width = prev.width
      window.scrollTo(0, scrollY)
      ScrollTrigger.normalizeScroll(true)
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-[2000] transition-all duration-500 px-6 md:px-12 lg:px-16',
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
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
      </header>

      {/* Mobile Menu — rendered outside the header because the header's
          `backdrop-blur-md` (when scrolled) establishes a containing block
          for fixed descendants, which would clip this overlay's background
          to the header's height and let page content show through. */}
      <div
        className={cn(
          'fixed inset-0 bg-adin-black z-[2100] flex flex-col transition-all duration-700 ease-in-out',
          mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        )}
      >
        {/* Top bar mirrors the <header> exactly so Logo + close icon land
            in the same spot the Logo + hamburger sit in when the menu is
            closed. Padding tracks `scrolled` so there's no jump if the
            menu is opened after scrolling. */}
        <div
          className={cn(
            'px-6 md:px-12 lg:px-16 transition-all duration-500',
            scrolled ? 'py-4' : 'py-8'
          )}
        >
          <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
            <Logo />
            <button
              className="flex items-center justify-center text-white hover:text-adin-green transition-colors interactive"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex-1 flex flex-col px-6 md:px-12 lg:px-16 pt-12 pb-12">
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
      </div>
    </>
  )
}
