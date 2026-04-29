export interface Article {
  slug: string
  title: string
  category: string
  featured?: boolean
  author: {
    name: string
    role: string
    image: string
  }
  date: string
  readTime: string
  image: string
  excerpt: string
  href: string
  content: {
    type: 'text' | 'quote' | 'heading'
    body?: string
    text?: string
  }[]
  faqs?: {
    question: string
    answer: string
  }[]
}

export const articles: Article[] = [
  {
    slug: 'future-of-purpose-driven-pr',
    title: 'The Future of Purpose-Driven PR: How Brands Are Rewriting the Rules',
    category: 'Strategy',
    featured: true,
    author: {
      name: 'Sue Asci',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop'
    },
    date: 'March 15, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop',
    href: '/insights/future-of-purpose-driven-pr',
    excerpt: 'The PR industry is undergoing a fundamental shift. As consumers demand greater transparency, purpose, and authenticity...',
    content: [
      {
        type: 'text',
        body: 'The PR industry is undergoing a fundamental shift. As consumers demand greater transparency, purpose, and authenticity from the brands they support, communications strategy must evolve in kind. The agencies and brands that understand this are the ones building lasting relationships — not just media hits.'
      },
      {
        type: 'heading',
        text: 'The Rise of the Authentic Brand'
      },
      {
        type: 'text',
        body: 'For decades, PR was largely transactional: get placement, manage reputation, control narrative. The best campaigns were measured in column inches and broadcast minutes. But something changed. Consumers — particularly younger generations — began to look past polished messaging toward the actual values, practices, and people behind a brand.'
      },
      {
        type: 'quote',
        text: 'The brands winning in media today are not the loudest. They are the most consistent — consistent in their values, their voice, and their willingness to stand for something even when it\'s uncomfortable.'
      },
      {
        type: 'heading',
        text: 'Media Has Changed — Has Your Strategy?'
      },
      {
        type: 'text',
        body: 'The media landscape that most PR textbooks describe no longer exists. The consolidation of traditional outlets, the rise of independent journalists and Substacks, the dominance of social platforms as primary news sources — all of this demands a fundamentally different approach to media relations.'
      }
    ],
    faqs: [
      {
        question: 'Is purpose-driven PR only for nonprofits?',
        answer: 'Not at all. Purpose-driven PR is for any brand whose product or mission creates genuine value — whether that\'s improving health, reducing environmental impact, or simply making an exceptional product with integrity.'
      },
      {
        question: 'How long before a strategy shows results?',
        answer: 'Early media placements can happen within 60–90 days. But deeper results — brand authority and sustained relationships — take 6–12 months to build meaningfully.'
      }
    ]
  },
  {
    slug: 'media-strategy-brand-trust',
    title: 'How Media Strategy Builds Brand Trust',
    category: 'Media',
    featured: true,
    author: {
      name: 'Sarah Chen',
      role: 'Director of Communications',
      image: 'https://adin-nyc.com/images/team-2.png'
    },
    date: 'Feb 10, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop',
    href: '/insights/media-strategy-brand-trust',
    excerpt: 'Trust is the most valuable currency in modern brand building. Learn how a strategic media approach can earn it.',
    content: []
  },
  {
    slug: 'future-conscious-consumer-brands',
    title: 'The Future of Conscious Consumer Brands',
    category: 'Trends',
    featured: true,
    author: {
      name: 'Sue Asci',
      role: 'Founder & CEO',
      image: 'https://adin-nyc.com/images/team-sue.png'
    },
    date: 'Jan 22, 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop',
    href: '/insights/future-conscious-consumer-brands',
    excerpt: 'Analyzing the shift in consumer behavior toward mission-driven and environmentally conscious companies.',
    content: []
  }
]
