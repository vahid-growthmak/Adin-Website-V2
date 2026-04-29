export interface CaseStudy {
  id: string
  slug: string
  title: string
  label: string
  client: string
  service: string
  industry: string
  impact: string
  description: string
  quote?: {
    text: string
    author?: string
  }
  content: {
    type: 'text' | 'image' | 'stats'
    heading?: string
    body?: string
    src?: string
    alt?: string
    items?: { label: string; value: string }[]
  }[]
  sidebar: {
    heading: string
    rows: { label: string; value: string }[]
    description: string
  }
  image: string
  heroImage: string
  wide?: boolean
  bottomStats?: { label: string; value: string }[]
  fullTestimonial?: {
    quote: string
    author: string
    role: string
  }
}
