import type { Navigation } from '@/types/navigation'

export const navigation: Navigation = {
  main: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Our Approach', href: '/our-approach' },
    { label: 'Case Studies', href: '/work' },
    { label: 'Insights', href: '/insights' },
  ],
  mobile: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Our Approach', href: '/our-approach' },
    { label: 'Case Studies', href: '/work' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' },
  ],
  footer: {
    company: {
      heading: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Team', href: '/team' },
        { label: 'Our Approach', href: '/our-approach' },
        { label: 'Careers', href: '/careers' },
      ],
    },
    services: {
      heading: 'Services',
      links: [
        { label: 'Strategic Communications', href: '/services/communications' },
        { label: 'Brand Experiences', href: '/services/experiences' },
        { label: 'Content Narrative', href: '/services/content-narrative' },
        { label: 'Strategic Brand Advisory', href: '/services/advisory' },
      ],
    },
    industries: {
      heading: 'Industries',
      links: [
        { label: 'Wellness', href: '/wellness' },
        { label: 'Food & Beverage', href: '/food-beverage' },
      ],
    },
    resources: {
      heading: 'Resources',
      links: [
        { label: 'Insights', href: '/insights' },
        { label: 'Press', href: '/press' },
        { label: 'FAQs', href: '/faqs' },
        { label: 'Contact', href: '/contact' },
      ],
    },
  },
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Use', href: '/terms-of-use' },
  ],
}
