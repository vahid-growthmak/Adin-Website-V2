export interface Site {
  name: string
  tagline: string
  description: string
  location: string
  address: {
    street: string
    city: string
    state: string
    zip: string
    full: string
  }
  phone: string
  email: string
  social: {
    linkedin: string
    instagram: string
    tiktok: string
  }
  stats: {
    years: string
    impressions: string
    brands: string
    serviceAreas: string
  }
  copyright: string
  marqueeItems: string[]
}
