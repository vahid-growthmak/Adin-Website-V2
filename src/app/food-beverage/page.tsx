import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'
import { DisplayHeading } from '@/components/ui/DisplayHeading'
import Image from 'next/image'

export const metadata = {
  title: 'Food & Beverage PR | ADIN NYC',
}

const additionalServices = [
  {
    id: '01',
    title: 'Product Launch PR',
    description: 'Full-spectrum launch campaigns for new F&B products — from pre-launch buzz building and media seeding to national coverage. We coordinate everything into a single integrated strategy.',
    tags: ['Launch Strategy', 'Media Seeding', 'Influencer Sampling']
  },
  {
    id: '02',
    title: 'Event Activations & Demos',
    description: 'Consumer-facing brand activations and in-store demonstration programs that put your product directly in the hands of your ideal customers. We design, produce, and staff tasting events.',
    tags: ['In-Store Demos', 'Pop-Ups', 'Sampling']
  },
  {
    id: '03',
    title: 'Thought Leadership',
    description: 'Positioning F&B founders as authoritative voices in food innovation, sustainability, and entrepreneurship. Through op-eds, podcasts, and speaking engagements.',
    tags: ['Op-Eds', 'Speaking', 'Podcasts']
  }
]

const foodGallery = [
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1543353071-873f17a7a088?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=800&auto=format&fit=crop'
]

const successStories = [
  {
    title: 'Hooray Foods',
    label: 'Product Launch Campaign',
    description: 'Launched Hooray Foods\' plant-based bacon nationwide with a comprehensive PR campaign that secured placements in Food & Wine, VegNews, Forbes, and over 40 regional publications.',
    image: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?q=80&w=1000&auto=format&fit=crop',
    stat: '40+ National & Regional Placements'
  },
  {
    title: 'Kamut International',
    label: 'Brand Storytelling',
    description: 'Repositioned Kamut\'s ancient grain narrative from niche health food to premium culinary ingredient — securing editorial coverage in Bon Appétit, Saveur, and The New York Times.',
    image: 'https://images.unsplash.com/photo-1536304993881-ff86e0c9e3e5?q=80&w=1000&auto=format&fit=crop',
    stat: 'NYT, Bon Appétit, Saveur Coverage'
  }
]

export default function FoodBeveragePage() {
  return (
    <div className="bg-adin-black min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2400&auto=format&fit=crop" 
            alt="Food & Beverage" 
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-adin-black via-adin-black/75 to-adin-black/25" />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 pb-20 md:pb-28">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <SectionLabel className="mb-6">Food & Beverage</SectionLabel>
              <DisplayHeading className="text-white max-w-5xl mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px]">
                PR for Brands That Feed a Better Future.
              </DisplayHeading>
              <p className="text-white/60 max-w-2xl text-xl md:text-2xl leading-relaxed">
                Specialized communications for food & beverage founders building brands worth believing in — from farm-to-shelf storytelling to national media coverage.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <SectionLabel className="mb-6 text-adin-green">Our Expertise</SectionLabel>
                <DisplayHeading className="text-white mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  Specialized Media Relations for Food & Beverage Brands.
                </DisplayHeading>
                <p className="text-white/50 leading-relaxed mb-12 text-lg md:text-xl">
                  With 20+ years operating at the intersection of food culture, wellness, and retail, we have the relationships to get your brand in front of the editors who define what consumers reach for.
                </p>
                <div className="space-y-10">
                  <FandBExpertiseItem 
                    title="Food Media Relations"
                    description="Earned coverage in top food, lifestyle, and consumer media outlets — from national magazines to morning television segments."
                  />
                  <FandBExpertiseItem 
                    title="Trade Publications"
                    description="Strategic placements in grocery trade and industry publications that open doors with buyers and retail partners."
                  />
                  <FandBExpertiseItem 
                    title="Culinary Influencers"
                    description="Authentic partnerships with food content creators, chefs, and dietitians whose audiences trust their recommendations."
                  />
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6 relative aspect-square md:aspect-[4/5] lg:aspect-auto lg:h-[650px] overflow-hidden rounded-sm">
              <Reveal className="h-full">
                <Image 
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2000&auto=format&fit=crop" 
                  alt="Food Media Relations" 
                  fill
                  className="object-cover"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ADDITIONAL SERVICES */}
      <section className="bg-adin-black py-32 px-6 md:px-12 lg:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-20">
            <SectionLabel className="mb-4">Additional Services</SectionLabel>
            <DisplayHeading className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Beyond the Press Release
            </DisplayHeading>
          </Reveal>
          <div className="space-y-0">
            {additionalServices.map((service, i) => (
              <Reveal key={service.id} delay={i * 0.1} className="group border-t border-white/10 py-12 hover:bg-white/[0.02] transition-colors">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-1">
                    <span className="font-heading font-black text-3xl text-adin-green">
                      {service.id}
                    </span>
                  </div>
                  <div className="lg:col-span-7">
                    <h3 className="font-heading font-bold text-white text-2xl mb-4 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-white/40 leading-relaxed text-base md:text-lg max-w-2xl">
                      {service.description}
                    </p>
                  </div>
                  <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end">
                    {service.tags.map(tag => (
                      <span key={tag} className="px-4 py-2 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-adin-black py-32 px-6 md:px-12 lg:px-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <svg width="48" height="36" viewBox="0 0 32 24" fill="none" className="mb-12 opacity-20 mx-auto text-adin-green"><path d="M0 24V14.4C0 10.56 0.96 7.28 2.88 4.56C4.96 1.68 8 0.08 12 0V4.56C9.92 4.88 8.4 5.84 7.44 7.44C6.64 8.88 6.24 10.56 6.24 12.48H12V24H0ZM20 24V14.4C20 10.56 20.96 7.28 22.88 4.56C24.96 1.68 28 0.08 32 0V4.56C29.92 4.88 28.4 5.84 27.44 7.44C26.64 8.88 26.24 10.56 26.24 12.48H32V24H20Z" fill="currentColor"/></svg>
            <p className="text-white/80 leading-relaxed mb-12 text-2xl md:text-3xl lg:text-4xl italic font-heading font-light">
              &ldquo;ADIN&apos;s deep knowledge of the food media landscape helped us secure coverage in outlets we never thought possible. They truly understand what food journalists are looking for.&rdquo;
            </p>
            <div className="flex items-center justify-center gap-6">
              <div className="w-14 h-14 rounded-full bg-adin-green flex items-center justify-center font-heading font-black text-white text-xl">HF</div>
              <div className="text-left">
                <p className="font-heading font-bold text-white text-lg">Sean O&apos;Brien</p>
                <p className="text-white/30 uppercase tracking-widest text-[10px] font-bold">CEO, Hooray Foods</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-adin-black py-32 px-6 md:px-12 lg:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-20">
            <SectionLabel className="mb-4">The World We Work In</SectionLabel>
            <DisplayHeading className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Food & Beverage, Elevated
            </DisplayHeading>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
            {foodGallery.map((src, i) => (
              <Reveal key={i} delay={i * 0.05} className={`relative aspect-square overflow-hidden rounded-sm group ${i % 2 !== 0 ? 'translate-y-8' : ''}`}>
                <Image 
                  src={src} 
                  alt={`Food piece ${i + 1}`} 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-adin-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="bg-adin-light py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-20">
            <SectionLabel className="mb-4 text-adin-green">Success Stories</SectionLabel>
            <DisplayHeading className="text-adin-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              F&B Brands We&apos;ve Grown
            </DisplayHeading>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {successStories.map((story, i) => (
              <Reveal key={story.title} delay={i * 0.1} className="bg-white rounded-sm overflow-hidden shadow-xl shadow-black/5 group">
                <div className="relative aspect-video overflow-hidden">
                  <Image 
                    src={story.image} 
                    alt={story.title} 
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="p-10 lg:p-12">
                  <SectionLabel className="text-adin-green mb-4">{story.label}</SectionLabel>
                  <h3 className="font-heading font-black text-adin-black text-3xl mb-6 tracking-tight">
                    {story.title}
                  </h3>
                  <p className="text-adin-black/60 leading-relaxed text-base md:text-lg mb-10">
                    {story.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="w-2 h-2 rounded-full bg-adin-green" />
                    <span className="text-[11px] font-bold uppercase tracking-widest text-adin-black/40">{story.stat}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MEDIA STRIP */}
      <section className="bg-adin-black py-24 px-6 md:px-12 lg:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <Reveal className="mb-12">
            <SectionLabel className="mb-4">Media We&apos;ve Secured Coverage In</SectionLabel>
          </Reveal>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
            {['Bon Appétit', 'Food & Wine', 'Forbes', 'The New York Times', 'VegNews', 'Saveur', 'Today Show'].map(brand => (
              <span key={brand} className="font-heading font-black text-white/10 text-xl md:text-2xl lg:text-3xl tracking-tighter hover:text-white/40 transition-colors cursor-default">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-adin-black py-40 px-6 md:px-12 lg:px-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <SectionLabel className="mb-8">Ready to Begin</SectionLabel>
            <DisplayHeading className="text-white mb-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Let&apos;s Grow Your F&B Brand.
            </DisplayHeading>
            <p className="text-white/40 mb-16 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re launching your first product or expanding into new markets, we know how to tell your story to the people who need to hear it.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button href="/contact">Start the Conversation →</Button>
              <Button href="/work" variant="outline">View Our Work</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

function FandBExpertiseItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex items-start gap-6 group">
      <span className="w-2 h-2 rounded-full bg-adin-green mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
      <div>
        <h4 className="font-heading font-bold text-white mb-2 text-xl tracking-tight">{title}</h4>
        <p className="text-white/40 leading-relaxed text-base">{description}</p>
      </div>
    </div>
  )
}
