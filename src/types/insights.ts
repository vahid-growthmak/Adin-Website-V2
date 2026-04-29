export interface Article {
  title: string
  slug: string
  category: string
  tags: string[]
  date: string
  author: string
  readTime: string
  summary: string
  image: string
  featured?: boolean
  href: string
}
