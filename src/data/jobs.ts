export interface Job {
  id: string
  title: string
  department: string
  type: string
  location: string
  remote: boolean
  salaryRange: string
  posted: string
  active: boolean
  summary: string
  responsibilities: string[]
  requirements: string[]
}

export const jobs: Job[] = [
  {
    id: 'account-manager',
    title: 'Account Manager',
    department: 'Communications',
    type: 'Full-time',
    location: 'New York, NY',
    remote: false,
    salaryRange: 'Competitive salary + benefits',
    posted: '2025-03-01',
    active: true,
    summary: "We're looking for a strategic, media-savvy Account Manager to join our communications team and manage day-to-day client relationships, media outreach, and campaign execution.",
    responsibilities: [
      'Manage a portfolio of 3–5 client accounts across wellness and food & beverage',
      'Develop and execute media relations strategies to secure top-tier placements',
      'Build and maintain strong relationships with journalists, editors, and producers',
      'Draft press materials including pitches, releases, and media alerts',
      'Lead weekly client calls and deliver monthly reporting',
      'Collaborate with the experiences and content teams on integrated campaigns',
      'Monitor and analyze media coverage and campaign performance',
    ],
    requirements: [
      '3–5 years of PR or communications experience, agency preferred',
      'Strong writing, communication, and organizational skills',
      'Existing media relationships in health, wellness, or food & beverage',
      'Experience using media databases (Cision, Muck Rack, or similar)',
      'Bachelor\'s degree in Communications, PR, Journalism, or related field',
    ],
  },
  {
    id: 'content-strategist',
    title: 'Content Strategist',
    department: 'Content Creation',
    type: 'Full-time',
    location: 'New York, NY (Hybrid)',
    remote: true,
    salaryRange: 'Competitive salary + benefits',
    posted: '2025-03-10',
    active: true,
    summary: "We're seeking a creative Content Strategist to develop and produce compelling content across channels — from brand copy and social content to editorial articles and brand films.",
    responsibilities: [
      'Develop content strategies aligned with client brand positioning',
      'Write long- and short-form copy for websites, social media, and editorial',
      'Manage content calendars and coordinate production timelines',
      'Collaborate with the visual production team on multimedia content',
      'Ensure all content reflects client brand voice and messaging frameworks',
    ],
    requirements: [
      '3+ years in content strategy, copywriting, or editorial roles',
      'Exceptional writing across formats (web copy, social, editorial, scripts)',
      'Experience working with consumer health or lifestyle brands',
      'Strong project management and organizational skills',
    ],
  },
  {
    id: 'experiential-marketing-coordinator',
    title: 'Experiential Marketing Coordinator',
    department: 'Experiences',
    type: 'Full-time',
    location: 'New York, NY',
    remote: false,
    salaryRange: 'Competitive salary + benefits',
    posted: '2025-02-15',
    active: true,
    summary: "Join our Experiences team to help plan, coordinate, and execute brand activations, product launches, and immersive events for our clients.",
    responsibilities: [
      'Support planning and logistics for brand events and activations',
      'Coordinate vendor relationships, venue sourcing, and production',
      'Manage on-site event execution and guest experience',
      'Track budgets, timelines, and deliverables across multiple projects',
      'Draft event recaps and performance reports',
    ],
    requirements: [
      '1–3 years in events, experiential marketing, or related field',
      'Strong organizational and multitasking skills',
      'Ability to thrive in fast-paced, deadline-driven environments',
      'Willingness to travel and work evenings/weekends as needed',
    ],
  },
  {
    id: 'junior-pr-associate',
    title: 'Junior PR Associate',
    department: 'Communications',
    type: 'Full-time',
    location: 'New York, NY',
    remote: false,
    salaryRange: 'Competitive entry-level salary',
    posted: '2025-03-15',
    active: true,
    summary: "An entry-level opportunity for a passionate communicator ready to launch their career in strategic PR at an agency where brands genuinely matter.",
    responsibilities: [
      'Support senior team members on media outreach and pitching',
      'Research media contacts, editorial calendars, and coverage opportunities',
      'Monitor and compile daily media coverage reports for clients',
      'Draft basic press materials, bios, and fact sheets',
      'Assist with event coordination and logistics',
    ],
    requirements: [
      '0–2 years of experience (internships count)',
      'Strong writing and communication skills',
      'Passion for wellness, food, sustainability, or social impact brands',
      'Bachelor\'s degree in Communications, PR, Journalism, or related field',
    ],
  },
]
