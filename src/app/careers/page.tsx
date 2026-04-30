'use client'

import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { DisplayHeading } from '@/components/ui/DisplayHeading'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const jobs = [
  {
    id: 'account-manager',
    category: 'Communications',
    title: 'Account Manager',
    type: 'Full-Time',
    location: 'New York, NYC',
    description: 'Lead day-to-day client relationships, drive media strategy, and manage integrated PR campaigns for a portfolio of purpose-driven consumer brands.'
  },
  {
    id: 'content-strategist',
    category: 'Content Creation',
    title: 'Content Strategist',
    type: 'Full-Time',
    location: 'NYC / Remote',
    description: 'Develop and execute content strategies across owned and earned channels, including editorial calendars, social copy, long-form thought leadership, and brand storytelling.'
  },
  {
    id: 'experiential-coordinator',
    category: 'Experiences',
    title: 'Experiential Marketing Coordinator',
    type: 'Full-Time',
    location: 'New York, NYC',
    description: 'Support the planning and execution of brand events, activations, and experiential campaigns — from concept through on-site logistics and post-event reporting.'
  },
  {
    id: 'junior-pr',
    category: 'Communications',
    title: 'Junior PR Associate',
    type: 'Full-Time',
    location: 'New York, NYC',
    description: 'Support senior account leads with media outreach, press monitoring, clip reports, media list management, and client communications across a variety of accounts.'
  }
]

const faqs = [
  {
    question: 'What is the culture like at ADIN NYC?',
    answer: "We're a collaborative, purpose-driven team that takes the work seriously without taking ourselves too seriously. We value curiosity, initiative, and genuine care for the brands and people we work with."
  },
  {
    question: 'Do you offer remote or hybrid work options?',
    answer: "Most roles are based in our New York City office, with flexible hybrid arrangements available. Some content and strategy roles can be performed remotely — this is noted in individual job listings."
  },
  {
    question: 'What benefits does ADIN NYC offer?',
    answer: "We offer competitive salaries, health benefits, paid time off, professional development funding, and access to some of the most interesting brands in wellness, food & beverage, and beyond."
  },
  {
    question: 'What does the interview process look like?',
    answer: "Our process typically involves an initial screening call, one to two interviews with team members, and for some roles, a brief work exercise. We aim to keep the process efficient and communicative throughout."
  },
  {
    question: 'Do you offer internships?',
    answer: "Yes, we periodically offer internship opportunities for students and recent graduates interested in PR, communications, and brand strategy. Reach out via our contact page to inquire."
  }
]

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex justify-between items-center text-left hover:text-adin-green transition-colors group"
      >
        <span className="font-heading font-semibold text-white group-hover:text-adin-green pr-8 text-lg md:text-xl transition-colors">
          {question}
        </span>
        <motion.span 
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="text-adin-green flex-shrink-0"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-white/50 leading-relaxed text-lg max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function CareersPage() {
  return (
    <div className="bg-adin-black min-h-screen">
      {/* PAGE HERO */}
      <section className="relative min-h-[65vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2400&auto=format&fit=crop" 
            alt="Careers Hero" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-adin-black via-adin-black/60 to-adin-black/20" />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 pb-20 pt-40">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <SectionLabel className="mb-6">Join Our Team</SectionLabel>
              <DisplayHeading className="text-white max-w-4xl mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px]">
                Build a Career with Purpose.
              </DisplayHeading>
              <p className="text-white/60 max-w-xl text-xl leading-relaxed">
                We&apos;re looking for passionate communicators, strategists, and creatives who believe brands can change the world.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY ADIN */}
      <section className="py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel className="mb-6">Why ADIN?</SectionLabel>
            <DisplayHeading className="text-white mb-16 text-3xl md:text-5xl">More than a job.<br />A mission.</DisplayHeading>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Collaborative Culture', desc: "We're a tight-knit team of sharp thinkers who challenge each other, celebrate wins together, and support each other's growth. Every voice matters here." },
              { num: '02', title: 'Growth & Learning', desc: "You'll work across industries, service lines, and client types — building a diverse skills portfolio. We invest in professional development and industry training." },
              { num: '03', title: 'Meaningful Impact', desc: "Our clients are building brands that make the world better. Your work here contributes to that mission every day." }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="p-10 border border-white/5 bg-white/[0.02] hover:border-adin-green transition-colors">
                  <span className="text-adin-green font-heading font-black text-4xl block mb-8">{item.num}</span>
                  <h3 className="text-white font-bold text-xl mb-6 tracking-tight">{item.title}</h3>
                  <p className="text-white/40 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* JOBS */}
      <section className="py-32 px-6 md:px-12 lg:px-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionLabel className="mb-6">Open Positions</SectionLabel>
            <DisplayHeading className="text-white mb-16 text-3xl md:text-5xl">We&apos;re hiring.</DisplayHeading>
          </Reveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobs.map((job, i) => (
              <Reveal key={job.id} delay={i * 0.1}>
                <div className="p-10 border border-white/5 bg-white/[0.02] hover:border-adin-green transition-all group">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <SectionLabel className="mb-2 text-adin-green">{job.category}</SectionLabel>
                      <h3 className="text-white font-heading font-black text-2xl tracking-tight">{job.title}</h3>
                    </div>
                    <div className="flex flex-col gap-2 text-right">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-white/30 border border-white/10 px-3 py-1">{job.type}</span>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-white/30 border border-white/10 px-3 py-1">{job.location}</span>
                    </div>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed mb-10">{job.description}</p>
                  <Button variant="outline" href="/contact" className="py-3 text-[10px] tracking-[0.2em]">Apply Now →</Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section className="py-32 px-6 md:px-12 lg:px-16 bg-adin-light">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <Reveal>
              <SectionLabel className="text-adin-green mb-6">Apply Now</SectionLabel>
              <DisplayHeading className="text-adin-black mb-16 text-3xl md:text-5xl">Tell us about yourself.</DisplayHeading>
              
              <form className="space-y-8">
                <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-adin-black/20 py-4 text-adin-black focus:border-adin-green outline-none transition-colors" required />
                <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-adin-black/20 py-4 text-adin-black focus:border-adin-green outline-none transition-colors" required />
                <input type="tel" placeholder="Phone Number" className="w-full bg-transparent border-b border-adin-black/20 py-4 text-adin-black focus:border-adin-green outline-none transition-colors" />
                
                <select className="w-full bg-transparent border-b border-adin-black/20 py-4 text-adin-black focus:border-adin-green outline-none transition-colors appearance-none cursor-pointer" defaultValue="">
                  <option value="" disabled>Position Applying For</option>
                  {jobs.map(j => <option key={j.id} value={j.id}>{j.title}</option>)}
                  <option value="other">Other / General Application</option>
                </select>
                
                <input type="url" placeholder="LinkedIn Profile URL" className="w-full bg-transparent border-b border-adin-black/20 py-4 text-adin-black focus:border-adin-green outline-none transition-colors" />
                <textarea rows={6} placeholder="Cover Letter — Tell us why you're a fit for ADIN..." className="w-full bg-transparent border-b border-adin-black/20 py-4 text-adin-black focus:border-adin-green outline-none transition-colors resize-none" />
                
                <div className="relative group">
                  <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                  <div className="border-2 border-dashed border-adin-black/10 group-hover:border-adin-green transition-colors p-8 flex items-center justify-center gap-4 text-adin-black/40">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 4v12m-4-4l4 4 4-4M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="font-bold uppercase tracking-widest text-[10px]">Upload Resume (PDF, DOC, DOCX)</span>
                  </div>
                </div>

                <Button type="submit" className="w-full mt-12 py-6 flex justify-center bg-adin-green hover:bg-adin-green/90 text-white">
                  Submit Application →
                </Button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* LIFE AT ADIN */}
      <section className="py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <SectionLabel className="mb-6">Working at ADIN</SectionLabel>
            <DisplayHeading className="text-white mb-16 text-3xl md:text-5xl">Life at the agency.</DisplayHeading>
            <div className="space-y-0">
              {faqs.map((f, i) => (
                <FAQItem key={i} question={f.question} answer={f.answer} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 lg:px-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          <Reveal>
            <SectionLabel className="mb-4">Open Application</SectionLabel>
            <h2 className="text-white font-heading font-black text-3xl md:text-5xl max-w-2xl tracking-tight leading-tight">
              Don&apos;t see your role? Send us your resume anyway.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <Button href="/contact" variant="outline" className="px-12 py-5">Get in Touch →</Button>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
