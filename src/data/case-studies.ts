export interface CaseStudy {
  slug: string
  title: string
  client: string
  service: string
  industry: string
  campaign: string
  impact?: string
  heroImage: string
  quote: string
  strategy: {
    title: string
    description: string
  }
  content: {
    type: 'text' | 'image' | 'stats'
    title?: string
    text?: string
    image?: string
    stats?: { label: string; value: string }[]
    list?: string[]
  }[]
  sidebar: {
    data: { label: string; value: string }[]
    scope: string
  }
  statsStrip?: { label: string; value: string }[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'naturepedic',
    title: 'Naturepedic: Elevating the Organic Experience.',
    client: 'Naturepedic',
    service: 'Brand Communications',
    industry: 'Wellness & Retail',
    campaign: 'Year of Healthy Sleep',
    heroImage: 'https://adinnyc.com/images/naturepedic-hero.png', // Assuming relative or use absolute placeholder
    quote: 'For this award-winning U.S. certified organic mattress and bedding manufacturer, we lean heavily into their stellar brand reputation – for quality, authenticity, safety, innovation, honesty and integrity – the hallmarks of this sustainable family business.',
    strategy: {
      title: 'The Strategy',
      description: 'Our job was to translate the core values of Naturepedic against a changing consumer landscape, across multiple consumer touchpoints, in compelling ways that impact purchasing decisions. The overarching mission was defined as "Elevate the Naturepedic Experience."'
    },
    content: [
      {
        type: 'text',
        title: 'The “Year of Healthy Sleep”',
        text: 'We are still navigating the enormous challenges that the pandemic has had on our physical and mental health. Sleep, one of the key healers, is essential because it enables the body to repair and be fit and ready for another day. Advocating for a year of healthy sleep, our PR initiatives featured crib, kids, and adult mattress and bedding in various campaigns including:',
        list: [
          'The 9-month baby campaign',
          'Pillow talk',
          'Ditch the chemicals',
          'The Naturepedic difference',
          'Brand purpose'
        ]
      },
      {
        type: 'image',
        image: 'https://adinnyc.com/images/naturepedic-nursery.png'
      },
      {
        type: 'text',
        title: 'The 9-Month Baby Campaign: “Breathability Done Right”',
        text: 'This video-driven initiative was created to explain the Naturepedic difference when it came to their Breathe Safe crib mattresses. It served as a primary media communications and outreach educational tool to cut through the noise of the competitive nursery market.'
      },
      {
        type: 'text',
        title: 'Baby Sleep Training and Myths',
        text: 'Our research showed most parents believe in sleeping myths, prompting many to keep their kids up all day to tire them out before bedtime. A survey of 2,000 parents of children ages 0 to 5 looked at some of the concerns when it comes to their child sleeping and found that more than two-thirds of parents believe in sleeping myths or urban legends (68%). We used this data in a robust media campaign that captured national attention.'
      },
      {
        type: 'stats',
        stats: [
          { label: 'Pieces of coverage', value: '158' },
          { label: 'Online Readership', value: '5.36B' },
          { label: 'Estimated Views', value: '7.24M' }
        ]
      },
      {
        type: 'text',
        title: 'Awards & Recognition',
        text: 'We continually put the brand forward for meaningful awards. We worked to build a very strong relationship for the Naturepedic brand with Good Housekeeping because readers wholeheartedly trust the authority and expertise behind their product recommendations. In April of 2021, our submission of Naturepedic in The Good Housekeeping 2021 Best Bedding Awards won in the Best Sustainable category for their EOS® Pillowtop Organic Mattress! This was a defining win for the brand, validating their commitment to chemical-free comfort.'
      },
      {
        type: 'image',
        image: 'https://adinnyc.com/images/naturepedic-factory.png'
      },
      {
        type: 'text',
        title: 'The Naturepedic Photoshoot',
        text: 'While the brand had a good catalog of product images, there was a lack of dynamic shots of the founders, the manufacturing plant, and the artisanal processes that set them apart. One of the first things we did when COVID restrictions were lifted was to head to Chagrin Falls, Ohio for a intensive 3-day shoot. This content refresh provided the visual backbone for the ensuing digital campaigns.'
      },
      {
        type: 'text',
        title: 'Sustainability & Purpose',
        text: 'For Earth Day 2021, we elevated Naturepedic’s Sustainability initiatives. In an industry notorious for greenwashing, we shed a spotlight on Naturepedic’s genuine commitment to the health of families and the planet. This purpose-driven storytelling reinforced that this brand truly walks-the-walk.'
      }
    ],
    sidebar: {
      data: [
        { label: 'Impressions', value: '1.78B+' },
        { label: 'Placements', value: '1,508' },
        { label: 'Social Growth', value: '+2,220%' },
        { label: 'Duration', value: 'Ongoing Strategy' }
      ],
      scope: 'Strategic PR, Social Media Management, Content Production, and Sustainability Reporting.'
    },
    statsStrip: [
      { label: 'PR Impressions', value: '1.1B+' },
      { label: 'PR Placements', value: '1,327' },
      { label: 'Initial Campaign', value: '8mo' },
      { label: 'Organic Certified', value: '100%' }
    ]
  },
  {
    slug: 'earthkind',
    title: 'EarthKind: Harmonious Pest Prevention.',
    client: 'EarthKind',
    service: 'Brand Communications',
    industry: 'Sustainability & Home',
    campaign: 'Naturally Smarter',
    impact: '1.2B+ Impressions',
    heroImage: 'https://adinnyc.com/images/earthkind-hero.png',
    quote: 'Reducing the need for poison/kill pest control from 98% to 90% through a more harmonious approach that works with nature, not against it.',
    strategy: {
      title: 'The Strategy',
      description: 'The consumer-facing brand communications strategy focused on PR to deliver consistent dynamic storytelling across multiple media channels. We leveraged the expertise of Kari Warberg Block to provide expert pest prevention advice that resonates with families looking for naturally smarter solutions.'
    },
    content: [
      {
        type: 'text',
        title: 'The Year of "Naturally Smarter®"',
        text: 'In 2021, we noticed a big shift in consumer purchasing trends. families were looking for comfort, peace of mind, and authenticity. Authenticity is the cornerstone of EarthKind®, and our campaign echoed this theme by highlighting nature-based solutions for a toxin-free home.'
      },
      {
        type: 'image',
        image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2000&auto=format&fit=crop'
      },
      {
        type: 'text',
        title: 'Year of the Monarch: Harmony Heroes',
        text: 'A rallying call to protect pollinators, the Harmony Hero Award recognized teachers across the country who lead eco-education initiatives. We amplified their achievements through local media outreach, leading to 325M+ impressions for this specific campaign.'
      },
      {
        type: 'text',
        title: 'Sustainability Initiative of the Year',
        text: 'The campaign was recognized by the Business Intelligence Group as the “Sustainability Initiative of the Year” in their 2021 Sustainability Awards. This solidified EarthKind’s position as a leader in environmental excellence.'
      },
      {
        type: 'stats',
        stats: [
          { label: 'Total Impressions', value: '1.2B' },
          { label: 'Media Placements', value: '973' },
          { label: 'Reduction in poison use', value: '8%' }
        ]
      },
      {
        type: 'text',
        title: 'A World of Protection',
        text: 'Launched to coincide with the 50th Anniversary of Earth Day, this initiative highlighted the value EarthKind® brings to customers through safety and health. As Kari says, "Change begins at home... a toxin-free home."'
      }
    ],
    sidebar: {
      data: [
        { label: 'Impressions', value: '1.202B+' },
        { label: 'Placements', value: '973' },
        { label: 'Local Outreach', value: '24 Locations' },
        { label: 'Duration', value: '12 Month Campaign' }
      ],
      scope: 'PR Strategy, Activism Campaigns, Award Submissions, and Expert Positioning.'
    }
  },
  {
    slug: 'hooray-foods',
    title: 'Hooray Foods: A Sizzling Market Launch.',
    client: 'Hooray Foods',
    service: 'Launch Strategy',
    industry: 'Plant-Based Food',
    campaign: 'Market Launch',
    impact: '494M+ Impressions',
    heroImage: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=2000&auto=format&fit=crop',
    quote: 'Developing a vibrant, quirky brand tone helped push Hooray Foods into a unique position at the front of the line.',
    strategy: {
      title: 'The Strategy',
      description: 'Hooray Foods was launching in the booming plant-based meat industry. Traditional talking points were going to get lost in the shuffle. We developed sizzling conversations with the media which led to significant coverage, establishing a strong consumer demand for Hooray’s plant-based bacon.'
    },
    content: [
      {
        type: 'text',
        title: 'World Vegan Day Launch',
        text: 'We launched on World Vegan Day with a virtual brunch event. This fun event introduced the brand to America’s plates and palates. Speakers included founders, chefs, and food scientists, all highlighting the "Naturally Smarter" choice.'
      },
      {
        type: 'image',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2000&auto=format&fit=crop'
      },
      {
        type: 'text',
        title: 'Something to Cheer About',
        text: 'Launching in a pandemic seemed risky, but food was on people’s minds. People were looking for vegan bacon to accompany their plant-based burgers. Hooray delivered it all: minimally processed, zero cholesterol, and clean ingredients.'
      },
      {
        type: 'text',
        title: 'Media Success',
        text: 'The media agreed that Hooray was something to cheer about. With over 494M impressions and 186 placements in just 4 months, the brand voice was heard loud and clear over the competitive noise.'
      }
    ],
    sidebar: {
      data: [
        { label: 'Impressions', value: '494M+' },
        { label: 'Placements', value: '186' },
        { label: 'Launch Event', value: 'Virtual Brunch' },
        { label: 'Duration', value: '4 Month Launch' }
      ],
      scope: 'Launch PR, Social Media, Virtual Events, and Brand Voice Development.'
    }
  },
  {
    slug: 'designs-for-health',
    title: 'Designs for Health: Protecting the Workforce.',
    client: 'Designs for Health',
    service: 'Crisis PR & Comms',
    industry: 'Essential Business',
    campaign: 'Antibody Testing',
    impact: '50M+ Impressions',
    heroImage: 'https://images.unsplash.com/photo-1579152276503-34079860b29a?q=80&w=2000&auto=format&fit=crop',
    quote: 'Immediate regional TV, Radio, Print and Online placements through coordinated medical expert outreach.',
    strategy: {
      title: 'The Strategy',
      description: 'As an essential business, Designs for Health took the steps to ensure their workforce was protected during the pandemic. We initiated voluntary antibody testing in all four of their US locations: Florida, Connecticut, Nevada, and Montana.'
    },
    content: [
      {
        type: 'text',
        title: 'Coordinated Response',
        text: 'We coordinated efforts that involved company medical experts and spokespeople, obtaining B-roll and quotes for media outlets. This proactive approach allowed for rapid dissemination of the story across multiple regions.'
      },
      {
        type: 'image',
        image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=2000&auto=format&fit=crop'
      },
      {
        type: 'text',
        title: 'The Antibody Testing Campaign',
        text: 'The campaign focused on regional awareness and safety. We successfully secured 125 placements in just 3 weeks, reaching over 50 million consumers with the message of corporate responsibility and health protection.'
      },
      {
        type: 'text',
        title: 'Widespread Coverage',
        text: 'The story was featured in immediate regional TV, Radio, and major print publications, reinforcing Designs for Health\'s commitment to their employees and the larger community.'
      }
    ],
    sidebar: {
      data: [
        { label: 'Impressions', value: '50M+' },
        { label: 'Placements', value: '125' },
        { label: 'Locations', value: 'FL, CT, NV, MT' },
        { label: 'Duration', value: '3 Week Response' }
      ],
      scope: 'Crisis Communications, Medical Expert Coordination, and Regional PR.'
    }
  },
  {
    slug: 'kari-warberg',
    title: 'Kari Warberg Block: A One-of-a-Kind CEO.',
    client: 'Kari Warberg Block',
    service: 'CEO Branding',
    industry: 'Thought Leadership',
    campaign: 'Personal Branding',
    impact: 'Best-Selling Author',
    heroImage: 'https://adinnyc.com/images/kari-warberg-hero.png',
    quote: 'Establish Kari as a \'One-of-a-Kind\' female CEO thought-leader who spoke her mind and her truth. Fearless and compassionate, Kari is a true Renaissance woman.',
    strategy: {
      title: 'The Strategy',
      description: 'Our brand strategy for building the “Kari” brand began big and bold, with a controversial piece on CNBC in 2017. That news placement was the beginning of establishing Kari as a “One-of-a-Kind” female CEO thought-leader who spoke her mind and her truth. We aimed to leverage her unique pest expertise to make her a sought-after expert for big media outlets.'
    },
    content: [
      {
        type: 'text',
        title: 'The New York Photoshoot',
        text: 'Getting Kari ready for her “One-of-a-Kind” moments in the media started with a 3-day shoot in NYC. What began in a snowstorm, has now taken an industry by storm! Kari has since said not only was this the most fun shoot she had ever done, it was the best investment she had ever made for her brand.'
      },
      {
        type: 'image',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop'
      },
      {
        type: 'text',
        title: 'Thought Leadership in Business',
        text: 'The story that was the catalyst for Kari’s “One-of-a-Kind” reputation! The interview clearly demonstrated that she was going to do business her way. Her remarkable brand story was later highlighted by a cover story in Brand Packaging Magazine. We were able to leverage a front cover as we had great assets from the New York photoshoot.'
      },
      {
        type: 'text',
        title: 'Pest Prevention Expert',
        text: 'When media are looking for an expert on pest prevention, they turn to Kari. Regularly seen in Martha Stewart Living, Kari’s practical advice resonates with readers looking for Naturally Smarter® solutions for their home and family. She is now featured in numerous outlets including SWAAY, Authority Magazine, and Thrive Global.'
      },
      {
        type: 'text',
        title: 'Best-Selling Author',
        text: 'To get Kari prepared for the launch of her book, we created a new brand and website. Kari then took to the airwaves to become a best-selling author, establishing herself as a leader for a new generation of business thinkers.'
      }
    ],
    sidebar: {
      data: [
        { label: 'Media Reach', value: '120+ Placements' },
        { label: 'Key Outlets', value: 'CNBC, Forbes, Martha Stewart' },
        { label: 'Status', value: 'Best-Selling Author' },
        { label: 'Project Type', value: 'Personal Branding' }
      ],
      scope: 'Strategic Positioning, Media Training, and Book Launch Strategy.'
    }
  },
  {
    slug: 'naturepedic-covid',
    title: 'Naturepedic: Pivoting with Purpose.',
    client: 'Naturepedic',
    service: 'Rapid PR Response',
    industry: 'Manufacturing & Wellness',
    campaign: 'Pivot for Good',
    impact: '400M+ Impressions',
    heroImage: 'https://adinnyc.com/images/naturepedic-covid-hero.png',
    quote: 'In the wake of the Coronavirus pandemic, Naturepedic decided to pivot production to help fill the demand for face masks. The response was overwhelming.',
    strategy: {
      title: 'The Strategy',
      description: 'When the pandemic hit, traditional business as usual was no longer an option. Naturepedic, known for their organic mattresses, recognized an urgent need. We helped them announce their pivot to producing organic cotton face masks, sold at cost and not for profit.'
    },
    content: [
      {
        type: 'text',
        title: 'Pivoting for Good',
        text: 'The Naturepedic organic cotton face masks were produced to help fill the massive demand during the initial COVID-19 surge. ADIN leveraged this authentic commitment to safety and community to generate a surge of national media interest.'
      },
      {
        type: 'image',
        image: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?q=80&w=2000&auto=format&fit=crop'
      },
      {
        type: 'text',
        title: 'The Results',
        text: 'The PR response was overwhelming. In just a 4-week campaign, we generated over 400M consumer impressions and 195 placements in major outlets. This initiative not only helped the community but also reinforced Naturepedic\'s status as a brand of integrity and purpose.'
      },
      {
        type: 'text',
        title: 'Continued Support',
        text: 'Beyond the masks, Naturepedic continued to make donations to various local facilities, further establishing their role as an essential and compassionate business during trying times.'
      }
    ],
    sidebar: {
      data: [
        { label: 'Impressions', value: '400M+' },
        { label: 'Placements', value: '195' },
        { label: 'Goal', value: 'Non-Profit' },
        { label: 'Duration', value: '4 Week Pivot' }
      ],
      scope: 'Crisis Communications, Rapid PR Response, and Impact Messaging.'
    }
  }
]
