import type { Navigation } from '@/types/navigation'

export const navigation: Navigation = {
  main: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Our Approach', href: '/our-approach' },
    { label: 'Case Studies', href: '/work' },
    { label: 'Clients', href: '/clients' },
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
        { label: 'Communications', href: '/services/communications' },
        { label: 'Experiences', href: '/services/experiences' },
        { label: 'Content Creation', href: '/services/content-creation' },
        { label: 'Advisory', href: '/services/advisory' },
      ],
    },
    industries: {
      heading: 'Industries',
      links: [
        { label: 'Wellness', href: '/wellness' },
        { label: 'Food & Beverage', href: '/food-beverage' },
        { label: 'Clients', href: '/clients' },
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
