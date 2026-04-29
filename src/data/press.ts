export interface PressItem {
  date: string
  outlet: string
  category: 'business' | 'pr' | 'lifestyle' | 'health'
  title: string
  summary: string
  href: string
}

export const pressItems: PressItem[] = [
  {
    date: 'Jan 2025',
    outlet: 'Forbes',
    category: 'business',
    title: 'ADIN NYC Named Among Top PR Firms for Purpose-Driven Brands',
    summary: "Forbes recognized ADIN NYC among the leading communications agencies working with purpose-driven brands, citing the firm's selective client approach and consistent results across wellness and food & beverage categories.",
    href: '#',
  },
  {
    date: 'Dec 2024',
    outlet: 'PR Week',
    category: 'pr',
    title: "The Changing Face of Purpose-Led Communications: ADIN NYC's Approach",
    summary: "PR Week profiled ADIN NYC's methodology for building authentic brand narratives, exploring how the agency's founder-focused approach and category expertise produce results that outlast traditional PR campaigns.",
    href: '#',
  },
  {
    date: 'Nov 2024',
    outlet: 'Fast Company',
    category: 'business',
    title: 'How This NYC Agency Is Redefining PR for Conscious Brands',
    summary: 'Fast Company featured ADIN NYC as a model for the new generation of communications agencies, exploring how the firm navigates the intersection of purpose, authenticity, and measurable business impact for its clients.',
    href: '#',
  },
  {
    date: 'Oct 2024',
    outlet: 'Inc.',
    category: 'business',
    title: 'Sue Asci on Building a Communications Agency With Purpose at Its Core',
    summary: "Inc. Magazine featured a profile of ADIN NYC founder Sue Asci, tracing the agency's evolution from a boutique communications shop to one of New York's most respected purpose-driven PR firms over 25 years.",
    href: '#',
  },
  {
    date: 'Sep 2024',
    outlet: "Crain's New York",
    category: 'business',
    title: 'ADIN NYC Marks 25 Years of Purpose-Driven Brand Communications',
    summary: "Crain's New York Business covered ADIN NYC's 25th anniversary milestone, examining the agency's founding philosophy, key client milestones, and its enduring commitment to brands creating positive change in the world.",
    href: '#',
  },
  {
    date: 'Aug 2024',
    outlet: 'Ad Age',
    category: 'pr',
    title: 'Brand Communications in 2024: Why Authenticity Wins',
    summary: "Advertising Age cited ADIN NYC's communications philosophy in an industry analysis of the shift toward authentic storytelling, featuring commentary from Sue Asci on why purpose-led brands are outperforming peers in earned media.",
    href: '#',
  },
  {
    date: 'Jul 2024',
    outlet: "O'Dwyer's",
    category: 'pr',
    title: 'ADIN NYC Expands Advisory Practice for Startup Founders',
    summary: "O'Dwyer's PR Report covered the expansion of ADIN NYC's advisory practice, including a new consulting offering designed specifically for early-stage founders looking to build their communications foundation before a formal PR launch.",
    href: '#',
  },
  {
    date: 'Jun 2024',
    outlet: 'Wellness Trade',
    category: 'health',
    title: 'Top PR Firms for Wellness Brands: ADIN NYC Leads the Pack',
    summary: "Wellness Trade Magazine's annual ranking of top PR agencies for the health and wellness industry named ADIN NYC among the leading firms, praising the agency's deep category knowledge and established media relationships.",
    href: '#',
  },
  {
    date: 'May 2024',
    outlet: 'Food Business News',
    category: 'lifestyle',
    title: "Communications Strategy for F&B Brands: ADIN NYC's Playbook",
    summary: "Food Business News featured ADIN NYC's strategic approach to food and beverage brand communications, including the agency's framework for navigating the complex landscape of health claims, trend cycles, and retail partnerships.",
    href: '#',
  },
  {
    date: 'Apr 2024',
    outlet: 'NY Business Journal',
    category: 'business',
    title: 'NYC Agency Celebrates 25 Years of Authentic Brand Storytelling',
    summary: "The New York Business Journal marked ADIN NYC's 25th anniversary with a feature on the agency's history, philosophy, and the clients who have defined its legacy — from emerging wellness brands to established food & beverage companies.",
    href: '#',
  },
]
