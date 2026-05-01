import { Hero } from '@/components/sections/Hero'
import { AboutSection } from '@/components/sections/AboutSection'
import { PhilosophySection } from '@/components/sections/PhilosophySection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { WorkSection } from '@/components/sections/WorkSection'
import { ArchitectureSection } from '@/components/sections/ArchitectureSection'
import { ClientsSection } from '@/components/sections/ClientsSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { InsightsSection } from '@/components/sections/InsightsSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <PhilosophySection />
      <ServicesSection />
      <ArchitectureSection />
      <WorkSection />
      <ClientsSection />
      <TestimonialsSection />
      <InsightsSection />
      <ContactSection />
    </>
  )
}
