export interface NavLink {
  label: string
  href: string
  children?: NavLink[]
}

export interface FooterColumn {
  heading: string
  links: NavLink[]
}

export interface Navigation {
  main: NavLink[]
  mobile: NavLink[]
  footer: {
    company: FooterColumn
    services: FooterColumn
    industries: FooterColumn
    resources: FooterColumn
  }
  legal: NavLink[]
}
