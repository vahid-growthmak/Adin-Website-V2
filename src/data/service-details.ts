export interface ServiceDetail {
  slug: string
  title: string
  label: string
  description: string
  heroImage: string
  approach: {
    title: string
    description: string
    image: string
    features: {
      title: string
      description: string
    }[]
  }
  services: {
    title: string
    description: string
  }[]
  metrics: {
    value: string
    label: string
  }[]
  testimonials: {
    quote: string
    author: string
    role: string
    initials: string
    caseStudyHref?: string
  }[]
  gallery?: string[]
}

export const serviceDetails: Record<string, ServiceDetail> = {
  communications: {
    slug: 'communications',
    label: 'Communications',
    title: 'Strategic Communications for Purpose-Driven Brands.',
    description: 'Building credibility, shaping narratives, and driving meaningful media coverage for brands that matter.',
    heroImage: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2400&auto=format&fit=crop',
    approach: {
      title: 'Strategic Media Relations for Founders and Brands.',
      description: "We don't spray-and-pray. Every pitch is crafted for specific journalists and outlets with deep relevance to your brand story. Our relationships span lifestyle, health, food, business, and culture verticals — built over 25+ years of consistent, trust-based engagement with editors, producers, and reporters who shape the cultural conversation.",
      image: 'https://images.unsplash.com/photo-1573167243872-43c6433b9d40?q=80&w=2000&auto=format&fit=crop',
      features: [
        {
          title: 'Reputation Management',
          description: 'We proactively shape how your brand is perceived — monitoring narratives, positioning your voice, and ensuring consistent credibility across every touchpoint.'
        },
        {
          title: 'Crisis Communications',
          description: 'When the unexpected happens, our rapid-response approach protects your brand equity and guides your team through complexity with clarity and confidence.'
        },
        {
          title: 'Thought Leadership Development',
          description: 'We transform founders and executives into recognized industry voices — developing op-eds, speaking opportunities, podcast features, and editorial strategies that establish lasting authority.'
        }
      ]
    },
    services: [
      {
        title: 'Media Relations',
        description: 'Proactive and reactive pitching to targeted journalists across print, digital, broadcast, and podcast platforms. We secure coverage that moves the needle — not just fills a clip report.'
      },
      {
        title: 'Press Material Development',
        description: "Compelling press releases, media kits, brand bibles, and pitch decks crafted to communicate your story with precision and narrative power that resonates with today's editors."
      },
      {
        title: 'Media Training',
        description: "Prepare your founders, executives, and spokespeople to speak with confidence, clarity, and conviction — whether facing a live broadcast, print interview, or podcast conversation."
      },
      {
        title: 'Messaging Frameworks',
        description: "Develop the core narratives that anchor your brand's public identity — ensuring consistent, resonant messaging across all communications channels and stakeholder touchpoints."
      },
      {
        title: 'Reputation Management',
        description: 'Long-term brand equity building through strategic narrative control, executive profiling, awards submissions, and ongoing media presence management.'
      },
      {
        title: 'Crisis Communications',
        description: "Rapid-response protocols, stakeholder messaging, media statements, and real-time counsel to protect your brand's reputation when it matters most."
      }
    ],
    metrics: [
      { value: '50M+', label: 'Media Impressions (Single Campaign)' },
      { value: '25+', label: 'Years of Media Relationships' },
      { value: '500+', label: 'Media Placements Secured' },
      { value: '100+', label: 'Brands Elevated' }
    ],
    testimonials: [
      {
        quote: "During the onset of COVID-19, ADIN coordinated with experts and local media outlets across multiple locations to execute a PR campaign that generated nearly 50 million impressions across television, radio, print and online.",
        author: 'Neal Mercado',
        role: 'CMO, Designs for Health',
        initials: 'NM',
        caseStudyHref: '/work/designs-for-health'
      },
      {
        quote: "ADIN has a unique ability to identify opportunities and trends. For purpose-driven entrepreneurs like myself, that insight is invaluable. They don't just place stories — they shape the conversation your brand belongs in.",
        author: 'Kari Warberg Block',
        role: 'CEO & Founder, EarthKind',
        initials: 'KB',
        caseStudyHref: '/work/earthkind'
      }
    ]
  },
  experiences: {
    slug: 'experiences',
    label: 'Experiences',
    title: 'Creating Moments That Move People.',
    description: 'From intimate brand activations to large-scale events, we craft experiences that leave lasting impressions and build communities around the brands we believe in.',
    heroImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2400&auto=format&fit=crop',
    approach: {
      title: 'Signature Experiences That Define Brands.',
      description: 'We believe the most powerful form of brand building happens in person — when a brand stops being an abstraction and becomes something you feel. Our team designs and produces immersive experiences that create genuine emotional connections between brands and the people they serve.',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000&auto=format&fit=crop',
      features: [
        {
          title: 'End-to-End Production',
          description: 'From concept and venue sourcing to logistics, talent, and post-event amplification — we handle every element.'
        },
        {
          title: 'Media & Influencer Integration',
          description: 'We embed media strategy directly into every experience — ensuring the moments we create extend far beyond the room.'
        },
        {
          title: 'Community-First Design',
          description: "Every event we produce is designed to bring together a brand's most important stakeholders in ways that foster genuine connection."
        }
      ]
    },
    services: [
      {
        title: 'Brand Activations',
        description: 'Pop-ups, immersive installations, and multi-sensory brand environments designed to turn curious consumers into devoted advocates.'
      },
      {
        title: 'Product Launches',
        description: 'High-impact launch events that command media attention and create the cultural moment your new product deserves.'
      },
      {
        title: 'Community Events',
        description: 'Panels, dinners, workshops, and gatherings that bring your brand\'s most important communities together.'
      }
    ],
    metrics: [
      { value: '150+', label: 'Events Produced' },
      { value: '2M+', label: 'Attendees Reached' },
      { value: '50+', label: 'Brand Partners' },
      { value: '25', label: 'Years Experience' }
    ],
    testimonials: [
      {
        quote: "The activation ADIN created for our product launch exceeded every expectation. The engagement was incredible and the brand awareness we generated was unmatched.",
        author: 'Brand Partner',
        role: 'ADIN NYC Client',
        initials: 'BP'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1530023367847-a683933f4172?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551818255-e6e10579723a?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format&fit=crop'
    ]
  },
  'content-creation': {
    slug: 'content-creation',
    label: 'Content Creation',
    title: 'Visual Stories That Command Attention.',
    description: 'We bridge the gap between high-level strategy and beautiful execution, creating content that lives at the heart of your brand narrative.',
    heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2400&auto=format&fit=crop',
    approach: {
      title: 'A Narrative-First Approach to Content.',
      description: 'In a world of infinite scrolling, only the most authentic and visually compelling stories stop the thumb. We don\'t just create content; we build visual assets that are strategically aligned with your brand\'s broader communications goals.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop',
      features: [
        {
          title: 'Strategic Alignment',
          description: 'Every piece of content we produce is designed to support your core brand messaging and media strategy.'
        },
        {
          title: 'High-Production Standards',
          description: 'We work with top-tier creators to ensure your brand always looks as premium as its purpose.'
        },
        {
          title: 'Multi-Channel Optimization',
          description: 'From social-first video to long-form editorial, we tailor every asset for maximum engagement across platforms.'
        }
      ]
    },
    services: [
      {
        title: 'Brand Photography',
        description: 'Professional lifestyle and product photography that captures the essence of your brand and its mission.'
      },
      {
        title: 'Video Storytelling',
        description: 'From brand films and founder profiles to social-first short-form video that resonates with digital audiences.'
      },
      {
        title: 'Copywriting & Messaging',
        description: 'Compelling brand voice development and copy that translates complex missions into resonant stories.'
      },
      {
        title: 'Digital Assets',
        description: 'Strategic visual content for websites, social media, and digital advertising campaigns.'
      }
    ],
    metrics: [
      { value: '10K+', label: 'Assets Created' },
      { value: '100+', label: 'Production Shoots' },
      { value: '50M+', label: 'Content Reach' },
      { value: '25', label: 'Years Experience' }
    ],
    testimonials: [
      {
        quote: "ADIN has an incredible eye for storytelling. They transformed our complex mission into visual content that immediately resonated with our audience and secured tier-1 media interest.",
        author: 'Content Partner',
        role: 'ADIN NYC Client',
        initials: 'CP'
      }
    ]
  },
  advisory: {
    slug: 'advisory',
    label: 'Advisory',
    title: 'Strategic Guidance for Modern Founders.',
    description: 'High-level counsel for brands navigating complexity, scaling fast, and building a purpose-driven future.',
    heroImage: 'https://images.unsplash.com/photo-1454165833767-0230230238e8?q=80&w=2400&auto=format&fit=crop',
    approach: {
      title: 'Partnering with Founders at Every Stage.',
      description: 'The journey of a purpose-driven brand is rarely linear. We provide the strategic perspective and steady hand that founders need to navigate growth, manage transitions, and build lasting authority in their category.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop',
      features: [
        {
          title: 'Executive Counsel',
          description: 'Direct partnership with CEOs and founders on high-stakes communications and brand positioning.'
        },
        {
          title: 'Market Intelligence',
          description: 'Deep-dive audits and trend analysis that help brands stay ahead of cultural shifts.'
        },
        {
          title: 'Strategic Partnerships',
          description: 'Identifying and facilitating connections with mission-aligned brands, influencers, and experts.'
        }
      ]
    },
    services: [
      {
        title: 'Brand Positioning',
        description: 'Defining your unique space in the market and crafting a narrative that makes your brand inevitable.'
      },
      {
        title: 'Founder Profiling',
        description: 'Building the personal brand and authority of the visionaries behind the mission.'
      },
      {
        title: 'Crisis Counseling',
        description: 'High-level advisory and reputation protection for brands navigating complex public challenges.'
      },
      {
        title: 'Strategic Networking',
        description: 'Facilitating high-value introductions and partnerships within our global network.'
      }
    ],
    metrics: [
      { value: '25+', label: 'Years Advisory' },
      { value: '50+', label: 'Founder Partnerships' },
      { value: '100%', label: 'Commitment' },
      { value: 'NYC', label: 'Headquarters' }
    ],
    testimonials: [
      {
        quote: "Sue and the ADIN team provide a level of strategic depth that is rare in the industry. They are truly an extension of our leadership team, providing counsel that is as insightful as it is actionable.",
        author: 'Founder & CEO',
        role: 'Advisory Client',
        initials: 'FC'
      }
    ]
  }
}
