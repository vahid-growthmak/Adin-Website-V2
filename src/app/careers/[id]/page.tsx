import { jobs } from '@/data/jobs'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'

export async function generateStaticParams() {
  return jobs.map((job) => ({
    id: job.id,
  }))
}

export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const job = jobs.find((j) => j.id === id)

  if (!job) notFound()

  return (
    <div className="bg-adin-black min-h-screen">
      <section className="relative pt-48 pb-24 px-6 md:px-12 lg:px-16 border-b border-white/5">
        <div className="max-w-screen-2xl mx-auto">
          <Reveal>
            <Link href="/careers" className="inline-flex items-center gap-2 text-white uppercase tracking-widest hover:text-adin-green transition-colors text-[10px] font-bold mb-12">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M12 7H2M7 2L2 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Back to Careers
            </Link>
            <div className="flex items-center gap-6 mb-8">
              <SectionLabel className="text-adin-green">{job.department}</SectionLabel>
              <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Posted {new Date(job.posted).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <h1 className="font-heading font-black text-white text-[clamp(40px,7vw,100px)] leading-[0.9] tracking-tighter mb-12 max-w-4xl">
              {job.title}
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <InfoRow label="Location" value={job.location} />
              <InfoRow label="Type" value={job.type} />
              <InfoRow label="Remote" value={job.remote ? 'Yes' : 'No'} />
              <InfoRow label="Salary" value={job.salaryRange} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-8 space-y-20">
            <Reveal>
              <h3 className="font-heading font-black text-white text-3xl mb-8">Role Overview</h3>
              <p className="font-body text-white/60 text-xl leading-relaxed">
                {job.summary}
              </p>
            </Reveal>

            <Reveal>
              <h3 className="font-heading font-black text-white text-3xl mb-8">Responsibilities</h3>
              <ul className="space-y-4">
                {job.responsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-white/60 text-lg leading-relaxed">
                    <span className="w-1.5 h-1.5 bg-adin-green rounded-full mt-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h3 className="font-heading font-black text-white text-3xl mb-8">Requirements</h3>
              <ul className="space-y-4">
                {job.requirements.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-white/60 text-lg leading-relaxed">
                    <span className="w-1.5 h-1.5 bg-adin-green rounded-full mt-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-4">
            <Reveal direction="right" className="sticky top-32">
              <div className="bg-white/[0.03] border border-white/10 p-10 md:p-12">
                <h3 className="font-heading font-black text-white text-2xl mb-8">Interested?</h3>
                <p className="font-body text-white/40 text-sm leading-relaxed mb-10">
                  Please send your resume and a brief cover letter explaining why you are the right fit for ADIN NYC.
                </p>
                <Button href={`mailto:careers@adinnyc.com?subject=Application for ${job.title}`} variant="primary" className="w-full justify-center py-5">
                  Apply Now
                </Button>
                <div className="mt-12 pt-8 border-t border-white/10 text-center">
                  <p className="text-white/20 text-[10px] uppercase tracking-widest font-bold">
                    ADIN NYC is an equal opportunity employer.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-adin-green uppercase tracking-widest mb-2 text-[10px] font-bold">{label}</p>
      <p className="text-white font-bold text-sm md:text-base">{value}</p>
    </div>
  )
}
