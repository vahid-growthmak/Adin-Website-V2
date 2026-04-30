'use client'

import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { DisplayHeading } from '@/components/ui/DisplayHeading'
import Link from 'next/link'

const sections = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'information-we-collect', title: 'Information We Collect' },
  { id: 'how-we-use', title: 'How We Use Your Information' },
  { id: 'information-sharing', title: 'Information Sharing & Disclosure' },
  { id: 'data-security', title: 'Data Security' },
  { id: 'cookies', title: 'Cookies & Tracking' },
  { id: 'your-rights', title: 'Your Rights & Choices' },
  { id: 'third-party-links', title: 'Third-Party Links' },
  { id: 'childrens-privacy', title: 'Children\'s Privacy' },
  { id: 'policy-changes', title: 'Changes to This Policy' },
  { id: 'contact-us', title: 'Contact Us' }
]

export default function PrivacyPolicyPage() {
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
              Privacy Policy
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
                <div id="introduction" className="space-y-6">
                  <h2 className="text-white font-heading font-black text-2xl md:text-3xl tracking-tight">Introduction</h2>
                  <div className="space-y-4 text-white/50 text-lg leading-relaxed">
                    <p>ADIN NYC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at adinnyc.com (the &quot;Site&quot;) or interact with our services.</p>
                    <p>Please read this policy carefully. If you disagree with its terms, please discontinue use of the Site. We reserve the right to make changes to this policy at any time. We will alert you to any changes by updating the &quot;Last Updated&quot; date of this policy.</p>
                  </div>
                </div>
              </Reveal>

              <Reveal>
                <div id="information-we-collect" className="space-y-8">
                  <h2 className="text-white font-heading font-black text-2xl md:text-3xl tracking-tight">Information We Collect</h2>
                  <div className="space-y-8 text-white/50 text-lg leading-relaxed">
                    <div className="space-y-4">
                      <h3 className="text-white font-bold">Personal Information</h3>
                      <p>Personally identifiable information, such as your name, email address, telephone number, and company name, that you voluntarily give to us when you fill out a contact form, submit a job application, or subscribe to our newsletter.</p>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-white font-bold">Usage Data</h3>
                      <p>Information automatically collected when you visit the Site, such as your IP address, browser type, operating system, referring URLs, and pages viewed. This data is used in aggregate form to improve the user experience.</p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal>
                <div id="how-we-use" className="space-y-8">
                  <h2 className="text-white font-heading font-black text-2xl md:text-3xl tracking-tight">How We Use Your Information</h2>
                  <ul className="space-y-4 text-white/50 text-lg leading-relaxed list-disc pl-5">
                    <li>Respond to your inquiries and fulfill your requests for information</li>
                    <li>Send you communications about our services, including newsletters and updates</li>
                    <li>Process job applications and evaluate candidates for employment</li>
                    <li>Improve our website and services through analytics and user feedback</li>
                    <li>Monitor and analyze usage and trends to improve your experience</li>
                    <li>Comply with applicable legal requirements and protect our legal rights</li>
                  </ul>
                </div>
              </Reveal>

              <Reveal>
                <div id="contact-us" className="space-y-8 border-t border-white/5 pt-16">
                  <h2 className="text-white font-heading font-black text-2xl md:text-3xl tracking-tight">Contact Us</h2>
                  <div className="space-y-6 text-white/50 text-lg leading-relaxed">
                    <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
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
                    <Link href="/terms-of-use" className="block text-white/40 hover:text-white transition-colors text-sm font-medium underline underline-offset-4 decoration-white/10">Terms of Use</Link>
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
