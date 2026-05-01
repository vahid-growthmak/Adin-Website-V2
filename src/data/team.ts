import type { TeamMember } from '@/types/team'

/**
 * The first four entries (`leadership`) are the four members shown on the
 * About page. The full list (`team`) is shown on the Team page and adds
 * three more strategists below the leadership group.
 */

export const leadership: TeamMember[] = [
  {
    name: 'Sue Taggart',
    role: 'Founder & CEO',
    bio: 'With more than three decades in brand communications, Sue Taggart has built ADin into a trusted strategic partner for leading health, wellness and lifestyle brands. Her expertise spans public relations, experiential strategy and brand positioning.',
    image: '/images/team/sue-taggart.png',
  },
  {
    name: 'Michael Kravit',
    role: 'Creative Director',
    bio: 'Award-winning creative thought leader with a collaborative approach and deep cross-channel experience transforming strategic insight into breakthrough concepts and integrated campaigns.',
    image: '/images/team/michael-kravit.png',
  },
  {
    name: 'Giselle Chollett',
    role: 'Sr. PR Manager',
    bio: 'Former journalist specializing in media strategy, public relations and earned visibility, securing high-impact coverage and thought leadership across health, wellness and lifestyle sectors.',
    image: '/images/team/giselle-chollett.png',
  },
  {
    name: 'Kathleen Silverstein',
    role: 'Sr. PR Media Relations Strategist',
    bio: 'Expert in strategic media placement and storytelling for consumer and wellness brands, Kathy is adept at leveraging her 25 years in TV to land big placements.',
    image: '/images/team/kathleen-silverstein.png',
  },
]

export const team: TeamMember[] = [
  ...leadership,
  {
    name: 'Tanya Abreu',
    role: 'Healthcare Business Strategist',
    bio: 'Leads healthcare communications and strategic partnerships, driving impactful campaigns, stakeholder engagement, and brand growth across medical, wellness, and health innovation sectors.',
    image: '/images/team/tanya-abreu.png',
  },
  {
    name: 'Celeste Kee',
    role: 'Social & Influencer Strategist',
    bio: 'Expert in platform-native content strategy and influencer ecosystems, architecting creator partnerships, cultural moments and data-driven campaigns that accelerate community growth.',
    image: '/images/team/celeste-kee.png',
  },
  {
    name: 'Weston Gardner',
    role: 'Paid Media Specialist',
    bio: 'A seasoned social media strategist specializing in full-funnel strategy, performance media buying, audience segmentation, creative optimization and cross-platform growth.',
    image: '/images/team/weston-gardner.png',
  },
]
