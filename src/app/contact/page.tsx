'use client'

import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { DisplayHeading } from '@/components/ui/DisplayHeading'
import { Button } from '@/components/ui/Button'
import { useState } from 'react'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    interest: '',
    referral: '',
    message: ''
  })
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error(`status ${res.status}`)
      setStatus('success')
      setFormData({ firstName: '', lastName: '', email: '', company: '', interest: '', referral: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="bg-adin-black min-h-screen">
      {/* PAGE HEADER */}
      <section className="pt-40 pb-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel className="mb-6">Get In Touch</SectionLabel>
            <DisplayHeading className="text-white max-w-4xl mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px]">
              We&apos;d Love to Hear From You.
            </DisplayHeading>
            <p className="text-white/50 max-w-2xl text-xl leading-relaxed">
              Whether you&apos;re ready to launch a PR campaign, explore advisory services, or simply want to connect — our team is here.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-20 px-6 md:px-12 lg:px-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <Reveal>
              <SectionLabel className="mb-6">Send a Message</SectionLabel>
              <h2 className="text-white font-heading font-black text-3xl md:text-5xl mb-12 tracking-tight">
                Start the Conversation.
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <input 
                      type="text" 
                      name="firstName"
                      placeholder="First Name" 
                      className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:border-adin-green outline-none transition-colors"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      name="lastName"
                      placeholder="Last Name" 
                      className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:border-adin-green outline-none transition-colors"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email Address" 
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:border-adin-green outline-none transition-colors"
                    required
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <input 
                    type="text" 
                    name="company"
                    placeholder="Company / Brand" 
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:border-adin-green outline-none transition-colors"
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <select 
                    name="interest"
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:border-adin-green outline-none transition-colors appearance-none cursor-pointer"
                    onChange={handleChange}
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-adin-black">Service Interest</option>
                    <option value="communications" className="bg-adin-black">Communications & PR</option>
                    <option value="experiences" className="bg-adin-black">Experiences & Events</option>
                    <option value="content" className="bg-adin-black">Content Creation</option>
                    <option value="advisory" className="bg-adin-black">Strategic Advisory</option>
                    <option value="multiple" className="bg-adin-black">Multiple Services</option>
                    <option value="other" className="bg-adin-black">Other / Not Sure Yet</option>
                  </select>
                </div>

                <div>
                  <select 
                    name="referral"
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:border-adin-green outline-none transition-colors appearance-none cursor-pointer"
                    onChange={handleChange}
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-adin-black">How did you hear about us?</option>
                    <option value="referral" className="bg-adin-black">Referral</option>
                    <option value="google" className="bg-adin-black">Google Search</option>
                    <option value="linkedin" className="bg-adin-black">LinkedIn</option>
                    <option value="instagram" className="bg-adin-black">Instagram</option>
                    <option value="press" className="bg-adin-black">Press / Media</option>
                    <option value="event" className="bg-adin-black">Event or Conference</option>
                    <option value="other" className="bg-adin-black">Other</option>
                  </select>
                </div>
                
                <div>
                  <textarea 
                    name="message"
                    rows={6} 
                    placeholder="Tell us about your project, goals, and timeline..." 
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:border-adin-green outline-none transition-colors resize-none"
                    onChange={handleChange}
                  />
                </div>
                
                <div className="pt-4">
                  <Button type="submit" className="w-full py-6 flex justify-center">
                    {status === 'submitting' ? 'Sending…' : 'Send Message →'}
                  </Button>
                </div>

                {status === 'success' && (
                  <p role="status" className="text-adin-green text-sm">
                    Thanks — we&apos;ll be in touch shortly.
                  </p>
                )}
                {status === 'error' && (
                  <p role="alert" className="text-red-400 text-sm">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* LOCATION SECTION */}
      <section className="bg-adin-light py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel className="text-adin-green mb-6">Our Location</SectionLabel>
            <DisplayHeading className="text-adin-black mb-16 text-3xl md:text-5xl">Where to Find Us.</DisplayHeading>
          </Reveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Reveal delay={0.1}>
              <div className="bg-white p-12 border border-adin-black/5 h-full">
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-2 h-2 rounded-full bg-adin-green" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-adin-green">Headquarters</span>
                </div>
                <h3 className="text-adin-black font-heading font-black text-3xl mb-2 tracking-tight">ADIN NYC</h3>
                <p className="text-adin-black/30 uppercase tracking-widest text-[10px] font-bold mb-8">New York City</p>
                
                <div className="space-y-6 mb-12">
                  <p className="text-adin-black/60 text-lg leading-relaxed">
                    7 World Trade Center<br />
                    250 Greenwich St<br />
                    New York, NY 10007
                  </p>
                  <div className="space-y-3">
                    <p className="flex items-center gap-3 text-adin-black/60">
                      <span className="text-adin-green font-bold">T</span>
                      <a href="tel:9178338101" className="hover:text-adin-green transition-colors">917-833-8101</a>
                    </p>
                    <p className="flex items-center gap-3 text-adin-black/60">
                      <span className="text-adin-green font-bold">E</span>
                      <a href="mailto:sue@adinnyc.com" className="hover:text-adin-green transition-colors">sue@adinnyc.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-adin-black/5">
                  <p className="text-adin-black/30 uppercase tracking-widest text-[9px] font-bold mb-2">Office Hours</p>
                  <p className="text-adin-black/60">Mon–Fri &nbsp;9:00am – 6:00pm ET</p>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="bg-white border border-adin-black/5 h-full min-h-[400px] flex flex-col items-center justify-center p-12 text-center">
                <div className="w-20 h-20 bg-adin-green/5 rounded-full flex items-center justify-center mb-8">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-adin-green">
                    <path d="M16 3C11.582 3 8 6.582 8 11c0 6.627 8 18 8 18s8-11.373 8-18c0-4.418-3.582-8-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="text-adin-black font-heading font-black text-2xl mb-2 tracking-tight">7 World Trade Center</h3>
                <p className="text-adin-black/40 text-sm mb-10">250 Greenwich St, New York, NY 10007</p>
                <a 
                  href="https://maps.google.com/?q=7+World+Trade+Center+New+York" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-adin-green font-bold uppercase tracking-widest text-[10px] hover:underline"
                >
                  Get Directions →
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
