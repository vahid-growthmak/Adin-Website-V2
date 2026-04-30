import type { Service } from '@/types/services'

export const services: Service[] = [
  {
    id: 'communications',
    title: 'Strategic Communications',
    href: '/services/communications',
    icon: '01',
    tagline: 'Strategic communications that build brand authority.',
    description:
      'We shape communications strategies that build credibility, influence perception, and position brands across media, culture, and industry conversations.',
    features: [
      'Media Relations',
      'Brand Messaging',
      'PR Campaigns',
      'Reputation Management',
      'Thought Leadership',
      'Strategic Partnerships',
    ],
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 'experiences',
    title: 'Brand Experiences',
    href: '/services/experiences',
    icon: '02',
    tagline: 'Impactful brand experiences that foster engagement.',
    description:
      'ADin designs impactful brand experiences that bring audiences closer, foster engagement, and create moments that strengthen perception and community presence.',
    features: [
      'Brand Activations',
      'Community Engagement',
      'Experiential Campaigns',
      'Partnership Experiences',
      'Events and Launches',
      'Influencer Collaborations',
    ],
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 'content-narrative',
    title: 'Content Narrative',
    href: '/services/content-narrative',
    icon: '03',
    tagline: 'Compelling content that amplifies brand voice.',
    description:
      'We craft compelling content and digital strategies that amplify brand voice, engage audiences, and expand visibility across modern media platforms.',
    features: [
      'Brand Storytelling',
      'Social Media Strategy',
      'Editorial Content',
      'Campaign Content',
      'Video Production',
      'Content Distribution',
    ],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop',
  },
]
