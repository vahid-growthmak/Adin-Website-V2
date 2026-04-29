import { SectionLabel } from '../ui/SectionLabel'
import { DisplayHeading } from '../ui/DisplayHeading'
import { Reveal } from '../ui/Reveal'

export function AwardsSection() {
  return (
    <section id="awards" className="bg-adin-black py-32 px-6 md:px-12 lg:px-16 border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center mb-20">
          <Reveal>
            <SectionLabel className="justify-center mb-6">Recognitions & Awards</SectionLabel>
          </Reveal>
          <DisplayHeading className="text-white text-[clamp(40px,6vw,80px)] leading-none">
            Industry Excellence<span className="text-adin-green">.</span>
          </DisplayHeading>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-white/10 border border-white/10">
          <AwardBox label="PR WEEK TOP 50" />
          <AwardBox label="CRAIN'S FAST 50" delay={0.1} />
          <AwardBox label="SABRE AWARDS" delay={0.2} />
          <AwardBox label="PR NEWS" delay={0.3} />
          <AwardBox label="HOLMES REPORT" delay={0.4} />
        </div>
      </div>
    </section>
  )
}

function AwardBox({ label, delay = 0 }: { label: string; delay?: number }) {
  return (
    <Reveal delay={delay} className="bg-adin-black p-12 flex flex-col items-center justify-center text-center group hover:bg-white/[0.03] transition-colors">
      <div className="w-12 h-12 mb-6 opacity-30 group-hover:opacity-100 transition-opacity">
        <svg viewBox="0 0 24 24" fill="none" stroke="#0F5E4E" strokeWidth="1.5">
          <path d="M12 15l-2 5 2-1 2 1-2-5zm0 0l-3-7 3 2 3-2-3 7z" />
          <circle cx="12" cy="8" r="4" />
        </svg>
      </div>
      <span className="font-heading font-bold text-white/40 group-hover:text-white transition-colors text-xs tracking-[0.2em] leading-relaxed uppercase whitespace-pre-line">
        {label.replace(' ', '\n')}
      </span>
    </Reveal>
  )
}
