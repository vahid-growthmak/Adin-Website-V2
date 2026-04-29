import { navigation } from '@/data/navigation'
import { site } from '@/data/site'
import Link from 'next/link'
import { Logo } from '../ui/Logo'

export function Footer() {
  const { footer, legal } = navigation

  return (
    <footer id="contact" className="bg-adin-black pt-24 pb-8 px-6 md:px-12 lg:px-16 border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8 mb-24">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <Logo />
            <div className="mt-8 space-y-2">
              <p className="font-body text-white/40 text-sm leading-relaxed">
                The Change Agency.
              </p>
              <p className="font-body text-white/40 text-sm leading-relaxed">
                New York City.
              </p>
            </div>
            <div className="flex gap-5 mt-10">
              <SocialIcon
                href={site.social.linkedin}
                icon={<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />}
              />
              <SocialIcon
                href={site.social.instagram}
                icon={<><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" /></>}
              />
              <SocialIcon
                href={site.social.tiktok}
                icon={<path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />}
              />
            </div>
          </div>

          {/* Company Column */}
          <div>
            <p className="section-label text-[10px] mb-8">{footer.company.heading}</p>
            <div className="flex flex-col gap-4">
              {footer.company.links.map((link) => (
                <FooterLink key={link.label} href={link.href}>{link.label}</FooterLink>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <p className="section-label text-[10px] mb-8">{footer.services.heading}</p>
            <div className="flex flex-col gap-4">
              {footer.services.links.map((link) => (
                <FooterLink key={link.label} href={link.href}>{link.label}</FooterLink>
              ))}
            </div>
          </div>

          {/* Industries Column */}
          <div>
            <p className="section-label text-[10px] mb-8">{footer.industries.heading}</p>
            <div className="flex flex-col gap-4">
              {footer.industries.links.map((link) => (
                <FooterLink key={link.label} href={link.href}>{link.label}</FooterLink>
              ))}
            </div>
          </div>

          {/* Resources Column */}
          <div>
            <p className="section-label text-[10px] mb-8">{footer.resources.heading}</p>
            <div className="flex flex-col gap-4">
              {footer.resources.links.map((link) => (
                <FooterLink key={link.label} href={link.href}>{link.label}</FooterLink>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 items-center gap-8">
          {/* Copyright */}
          <p className="text-white/20 text-[10px] uppercase tracking-[0.1em] font-bold">
            {site.copyright}
          </p>

          {/* Legal Links */}
          <div className="flex justify-center gap-10">
            {legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white/20 hover:text-white transition-colors text-[10px] uppercase tracking-[0.1em] font-bold"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Address */}
          <p className="text-white/20 text-[10px] uppercase tracking-[0.1em] font-bold text-right hidden md:block">
            {site.address.full}
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="font-body text-[13px] text-white/40 hover:text-adin-green transition-colors"
    >
      {children}
    </Link>
  )
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white/40 hover:text-white transition-colors"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        {icon}
      </svg>
    </a>
  )
}
