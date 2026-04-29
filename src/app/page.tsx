import { Hero } from '@/components/sections/Hero'
import { AboutSection } from '@/components/sections/AboutSection'
import { PhilosophySection } from '@/components/sections/PhilosophySection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { WorkSection } from '@/components/sections/WorkSection'
import { AwardsSection } from '@/components/sections/AwardsSection'
import { ClientsSection } from '@/components/sections/ClientsSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { InsightsSection } from '@/components/sections/InsightsSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { Marquee } from '@/components/ui/Marquee'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <AboutSection />
      <PhilosophySection />
      <ServicesSection />
      <WorkSection />
      <AwardsSection />
      <ClientsSection />
      <TestimonialsSection />
      <InsightsSection />
      <ContactSection />
    </>
  )
}
