'use client'

import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { DisplayHeading } from '@/components/ui/DisplayHeading'
import Link from 'next/link'

const sections = [
  { id: 'acceptance', title: 'Acceptance of Terms' },
  { id: 'use-of-site', title: 'Use of the Website' },
  { id: 'intellectual-property', title: 'Intellectual Property' },
  { id: 'user-conduct', title: 'User Conduct' },
  { id: 'disclaimers', title: 'Disclaimers' },
  { id: 'limitation-of-liability', title: 'Limitation of Liability' },
  { id: 'indemnification', title: 'Indemnification' },
  { id: 'governing-law', title: 'Governing Law' },
  { id: 'changes-to-terms', title: 'Changes to Terms' },
  { id: 'contact-information', title: 'Contact Information' }
]

export default function TermsOfUsePage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-adin-black min-h-screen">
      {/* PAGE HEADER */}
      <section className="pt-40 pb-16 px-6 md:px-12 lg:px-16 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel className="mb-6">Legal</SectionLabel>
            <DisplayHeading className="text-white mb-6 text-4xl md:text-6xl tracking-tight">
              Terms of Use
            </DisplayHeading>
            <p className="text-white/30 text-sm font-mono tracking-widest uppercase">Last Updated: January 1, 2025</p>
          </Reveal>
        </div>
      </section>

      {/* BODY */}
      <section className="py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

            {/* Content */}
            <div className="lg:col-span-8 space-y-16">
              <Reveal>
                <div id="acceptance" className="space-y-6">
                  <h2 className="text-white font-heading font-black text-2xl md:text-3xl tracking-tight">Acceptance of Terms</h2>
                  <div className="space-y-4 text-white/50 text-lg leading-relaxed">
                    <p>By accessing or using the ADIN NYC website at adinnyc.com (the &quot;Site&quot;), you agree to be bound by these Terms of Use (&quot;Terms&quot;). Please read these Terms carefully before using the Site. If you do not agree to all of these Terms, do not use the Site.</p>
                    <p>These Terms apply to all visitors, users, and others who access or use the Site. We reserve the right to change or modify these Terms at any time at our sole discretion.</p>
                  </div>
                </div>
              </Reveal>

              <Reveal>
                <div id="use-of-site" className="space-y-8">
                  <h2 className="text-white font-heading font-black text-2xl md:text-3xl tracking-tight">Use of the Website</h2>
                  <div className="space-y-4 text-white/50 text-lg leading-relaxed">
                    <p>You may use the Site only for lawful purposes and in accordance with these Terms. You agree not to use the Site:</p>
                    <ul className="space-y-4 list-disc pl-5">
                      <li>In any way that violates any applicable law or regulation</li>
                      <li>To transmit any unsolicited or unauthorized advertising material</li>
                      <li>To impersonate ADIN NYC or any other person or entity</li>
                      <li>To engage in any conduct that restricts or inhibits anyone&apos;s use or enjoyment of the Site</li>
                      <li>To introduce any viruses, Trojan horses, worms, or other harmful material</li>
                    </ul>
                  </div>
                </div>
              </Reveal>

              <Reveal>
                <div id="intellectual-property" className="space-y-8">
                  <h2 className="text-white font-heading font-black text-2xl md:text-3xl tracking-tight">Intellectual Property</h2>
                  <div className="space-y-4 text-white/50 text-lg leading-relaxed">
                    <p>The Site and its entire contents, features, and functionality are owned by ADIN NYC, its licensors, or other providers of such material and are protected by intellectual property or proprietary rights laws.</p>
                    <h3 className="text-white font-bold mt-8">Permitted Use</h3>
                    <p>You may access and use the Site for your personal, non-commercial use only. You must not reproduce, distribute, or modify any material on our Site without ADIN NYC&apos;s prior written consent.</p>
                  </div>
                </div>
              </Reveal>

              <Reveal>
                <div id="contact-information" className="space-y-8 border-t border-white/5 pt-16">
                  <h2 className="text-white font-heading font-black text-2xl md:text-3xl tracking-tight">Contact Information</h2>
                  <div className="space-y-6 text-white/50 text-lg leading-relaxed">
                    <p>Questions or comments about the Site or these Terms may be directed to us at:</p>
                    <div className="space-y-4">
                      <p><strong className="text-white">Email:</strong> <Link href="mailto:sue@adinnyc.com" className="text-adin-green hover:text-white transition-colors">sue@adinnyc.com</Link></p>
                      <p><strong className="text-white">Phone:</strong> <Link href="tel:9178338101" className="text-adin-green hover:text-white transition-colors">917-833-8101</Link></p>
                      <p><strong className="text-white">Address:</strong> 7 World Trade Center, 250 Greenwich St, New York, NY 10007</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Sidebar TOC */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="sticky top-32 space-y-12">
                <div>
                  <SectionLabel className="mb-8">Jump to Section</SectionLabel>
                  <nav className="flex flex-col gap-2">
                    {sections.map(s => (
                      <button 
                        key={s.id}
                        onClick={() => scrollToSection(s.id)}
                        className="text-left text-white/30 hover:text-adin-green transition-colors py-2 border-b border-white/5 text-xs font-bold uppercase tracking-widest"
                      >
                        {s.title}
                      </button>
                    ))}
                  </nav>
                </div>
                
                <div className="pt-12 border-t border-white/5">
                  <SectionLabel className="mb-6 text-[10px]">Related</SectionLabel>
                  <div className="space-y-4">
                    <Link href="/privacy-policy" className="block text-white/40 hover:text-white transition-colors text-sm font-medium underline underline-offset-4 decoration-white/10">Privacy Policy</Link>
                    <Link href="/contact" className="block text-white/40 hover:text-white transition-colors text-sm font-medium underline underline-offset-4 decoration-white/10">Contact Us</Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
