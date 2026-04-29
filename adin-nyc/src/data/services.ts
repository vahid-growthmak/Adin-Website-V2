import type { Service } from '@/types/services'

export const services: Service[] = [
  {
    id: 'communications',
    title: 'Strategic Media Relations & Brand Narratives',
    href: '/services/communications',
    icon: '01',
    tagline: 'Strategic media relations that build lasting credibility.',
    description:
      'Strategic media relations, thought leadership, and brand narratives that build credibility and drive coverage. We tell your story to the journalists and outlets that matter most to your audience.',
    features: [
      'Media Relations',
      'Reputation Management',
      'Crisis Communications',
      'Thought Leadership',
      'Press Materials',
      'Media Training',
    ],
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 'experiences',
    title: 'Immersive Brand Activations & Events',
    href: '/services/experiences',
    icon: '02',
    tagline: 'Creating lasting connections through immersive moments.',
    description:
      'Immersive brand activations and events that create lasting connections between your brand and your audience. From intimate influencer experiences to large-scale public launches.',
    features: [
      'Brand Activations',
      'Product Launches',
      'Community Events',
      'Influencer Experiences',
      'Pop-Ups',
    ],
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 'content-creation',
    title: 'Multimedia Content That Amplifies Your Story',
    href: '/services/content-creation',
    icon: '03',
    tagline: 'Compelling content crafted for your brand mission.',
    description:
      'Compelling multimedia content that amplifies your brand story across digital channels. From editorial copy to social content to high-production video, we create content that converts.',
    features: [
      'Copywriting',
      'Visual Production',
      'Social Content',
      'Video',
      'Editorial',
    ],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 'advisory',
    title: 'High-Level Counsel for Founders & Executives',
    href: '/services/advisory',
    icon: '04',
    tagline: 'Strategic guidance for mission-driven leaders.',
    description:
      'High-level counsel for founders and executives navigating brand positioning, investor relations, and market entry. We sit at the table with you and help you make the decisions that define your brand\'s future.',
    features: [
      'Brand Positioning',
      'Messaging Frameworks',
      'Investor Communications',
      'Growth Advisory',
    ],
    image: 'https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2000&auto=format&fit=crop',
  },
]
