# Antigravity Migration Guide
## Adin NYC — HTML → Next.js 14

---

## How to Use This Document

This guide has two parts:

1. **The Master Prompt** — paste this into Antigravity once, with the zip uploaded. It sets the full context and tells Antigravity exactly what to build and in what order.

2. **Phase Prompts** — one focused prompt per phase. Use these if you want to work step-by-step, or if you need to re-run a specific phase after reviewing the output.

Upload the skill file (`adin-nextjs-migration.skill`) into Antigravity first, then use the prompts below.

---

## Files to Upload to Antigravity

| File | Purpose |
|---|---|
| `Adin-Website-main.zip` | Source HTML codebase |
| `adin-nextjs-migration.skill` | The migration skill (instructions + code patterns) |

---

---

# THE MASTER PROMPT
### (Use this for a full one-shot migration)

---

```
I'm migrating the Adin NYC website from a flat HTML/GSAP/Tailwind-CDN structure to Next.js 14 with the App Router. I've attached the full source zip and a skill file that contains all the patterns, component code, data structures, and architecture decisions you need.

## Your job

Build the complete Next.js project from scratch following the skill exactly. Do not skip phases. Do not improvise a different architecture.

## Source zip contents

- 33 HTML pages + 4 article pages in /articles/
- 1 shared navbar.js (DOM injection — replace with React component)
- GSAP 3.12.2 + ScrollTrigger animations (loaded from CDN — migrate to npm package)
- Tailwind CSS loaded from CDN (replace with tailwind.config.ts)
- _data/*.yml — 8 YAML data files (migrate to src/data/*.ts TypeScript modules)
- "Adin Landing page - Assets/" — all image assets (move to public/images/)

## Critical bug to fix

The original HTML puts JS code inside <script src="..."> tag bodies, which browsers silently ignore. This is why animations are broken. All GSAP must be rewritten inside useGSAP() hooks in 'use client' components.

## Tech stack

- Next.js 14 (App Router, TypeScript, src/ directory)
- Tailwind CSS (with custom config — no CDN)
- GSAP 3 + @gsap/react (npm — no CDN)
- next/font for Inter and Inter Tight
- next/image for all images

## Phase order — follow this exactly

**Phase 1 — Scaffold**
Run: npx create-next-app@latest adin-nyc --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
Install: npm install gsap @gsap/react clsx tailwind-merge

**Phase 2 — Design Tokens**
- Extract all CSS variables from HTML <style> blocks → src/app/globals.css
- Extend tailwind.config.ts with brand colors (adin-black #0A0A0A, adin-green #0F5E4E, adin-white #FFFFFF, adin-light #F3F3F3), font families, shadows, radii
- Add all custom CSS classes to globals.css: .btn-primary, .btn-outline, .btn-green, .display-heading, .section-label, .accent-rule, .cursor-dot, .cursor-ring, .link-underline, .marquee-track, .client-item, sticky section stacking system

**Phase 3 — Fonts**
Replace Google Fonts link tags with next/font in src/app/layout.tsx
Inter (body, weights 300-600, variable --font-body-name)
Inter Tight (heading, weights 300-900 + italic, variable --font-heading-name)

**Phase 4 — Data Layer**
Convert all _data/*.yml → src/data/*.ts TypeScript modules with proper types in src/types/
Files: site.ts, navigation.ts, services.ts, clients.ts, team.ts, jobs.ts, insights.ts, testimonials.ts
Navigation: convert all .html hrefs to clean /route paths

**Phase 5 — Assets**
Copy all images from "Adin Landing page - Assets/" → public/images/
Copy client logos → public/images/client-logos/
Rename files: remove spaces, lowercase, use hyphens (e.g. "Hero BG.jpg" → hero-bg.jpg)

**Phase 6 — Core Components**
Build in this order (all specs are in the skill file):
1. src/lib/utils.ts — cn() helper
2. src/components/layout/GSAPProvider.tsx — 'use client', registers ScrollTrigger once
3. src/components/ui/CustomCursor.tsx — GSAP cursor dot + ring tracking
4. src/components/layout/Navbar.tsx — replaces navbar.js, uses useScrolled() hook + Next.js Link
5. src/components/layout/Footer.tsx — server component, from navigation.ts data
6. src/components/ui/Marquee.tsx — CSS animation + GSAP pause on hover
7. src/components/ui/AnimatedCounter.tsx — GSAP number count-up
8. src/components/animations/RevealOnScroll.tsx — scroll-triggered fade/slide, accepts direction prop
9. src/components/animations/DisplayHeading.tsx — clip-path reveal animation
10. src/components/animations/ParallaxImage.tsx — clip-path reveal + yPercent parallax
11. src/components/ui/Button.tsx — btn-primary, btn-outline, btn-green variants
12. src/components/ui/SectionLabel.tsx — accent-rule + uppercase label
13. src/components/cards/WorkCard.tsx — GSAP entrance + hover lift
14. src/components/cards/ClientLogoCard.tsx — next/image lazy load
15. src/components/cards/ServiceCard.tsx — grid layout with ParallaxImage

**Phase 7 — Root Layout**
src/app/layout.tsx — wraps all pages with GSAPProvider, CustomCursor, Navbar, Footer
Apply font CSS variables to <html> tag
Set base metadata (title template "%s | ADIN NYC", description from site.ts)

**Phase 8 — Pages (in priority order)**
For each page: read the original HTML → recreate as Next.js page → use components → export metadata
Page order:
1. src/app/page.tsx (index.html) — HeroSection + Marquee + AboutSection + PhilosophySection + ServicesSection + WorkSection + ClientsSection + AdvisorySection + ContactSection
2. src/app/about/page.tsx
3. src/app/services/page.tsx
4. src/app/services/communications/page.tsx
5. src/app/services/experiences/page.tsx
6. src/app/services/content-creation/page.tsx
7. src/app/services/advisory/page.tsx
8. src/app/our-approach/page.tsx
9. src/app/work/page.tsx
10. src/app/work/earthkind/page.tsx
11. src/app/work/naturepedic/page.tsx
12. src/app/work/naturepedic-covid/page.tsx
13. src/app/work/kari-warberg/page.tsx
14. src/app/work/designs-for-health/page.tsx
15. src/app/work/hooray-foods/page.tsx
16. src/app/clients/page.tsx
17. src/app/insights/page.tsx
18. src/app/insights/[slug]/page.tsx (dynamic — generateStaticParams from insights.ts)
19. src/app/team/page.tsx
20. src/app/careers/page.tsx
21. src/app/careers/[slug]/page.tsx (dynamic — from jobs.ts)
22. src/app/press/page.tsx
23. src/app/recognitions/page.tsx
24. src/app/faqs/page.tsx
25. src/app/contact/page.tsx
26. src/app/thank-you/page.tsx
27. src/app/expertise/page.tsx
28. src/app/wellness/page.tsx
29. src/app/food-beverage/page.tsx
30. src/app/privacy-policy/page.tsx
31. src/app/terms-of-use/page.tsx
32. src/app/not-found.tsx (404)

**Phase 9 — Route Redirects**
Add redirects() to next.config.ts mapping all old .html URLs → clean /routes
Include: /articles/:slug.html → /insights/:slug

## Rules for every page

- No inline style="" attributes — use Tailwind utility classes
- No <img> tags — use next/image with fill for backgrounds, explicit width/height for logos
- No <a href="page.html"> — use Next.js <Link href="/page">
- No document.querySelector or DOM manipulation
- All GSAP inside useGSAP() with scope ref
- 'use client' on any component using GSAP, useState, useRef
- Server components for data-only/static pages
- Export metadata from every page.tsx

## Quality check before finishing

For each page, verify:
☐ No inline styles
☐ All images use next/image
☐ All internal links use Next.js Link
☐ No direct DOM manipulation
☐ All GSAP in useGSAP() hooks
☐ 'use client' on client components
☐ Metadata exported
☐ No hardcoded strings that exist in data files

Start with Phase 1 and work through all phases in order. After each phase, confirm what was built before moving to the next.
```

---

---

# PHASE PROMPTS
### (Use these one at a time if working incrementally)

---

## Phase 1 — Project Scaffold

```
Scaffold the Next.js 14 project for the Adin NYC website.

Run this command:
npx create-next-app@latest adin-nyc --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

Then install dependencies:
npm install gsap @gsap/react clsx tailwind-merge
npm install @types/node --save-dev

After scaffolding, create the full folder structure exactly as described in the skill's references/architecture.md. Create all empty directories and placeholder index files so the structure is ready for the next phases. Show me the final folder tree when done.
```

---

## Phase 2 — Design Tokens & Global CSS

```
Set up design tokens and global styles for the Adin NYC Next.js project.

**tailwind.config.ts** — Extend with:
- Colors: adin-black #0A0A0A, adin-green #0F5E4E, adin-white #FFFFFF, adin-light #F3F3F3
- Font families: heading → var(--font-heading-name), body → var(--font-body-name)
- Box shadows: custom and custom-hover from the CSS variables
- Border radius: small and large (both 0px — sharp edges are the design intent)

**src/app/globals.css** — Add:
1. :root CSS variables (all from the HTML <style> block)
2. Base body styles (bg-adin-black, cursor: none, overflow-x hidden)
3. All custom component classes: .btn-primary, .btn-outline, .btn-green (with mobile media query)
4. .display-heading, .section-label, .accent-rule
5. .cursor-dot, .cursor-ring, .cursor-ring.hover
6. .link-underline with ::after pseudo-element underline animation, .link-underline.active
7. .client-item hover state
8. .marquee-track and @keyframes marquee
9. The sticky section stacking system (position: sticky, z-index ladder from 10 to 130, depth shadow ::before, scroll-normal override, mobile reset)

All CSS values must come from the original HTML — do not invent new values.
```

---

## Phase 3 — Fonts & Root Layout

```
Set up next/font and create the root layout for the Adin NYC project.

**Fonts to load:**
- Inter: subsets latin, weights 300/400/500/600, CSS variable --font-body-name
- Inter Tight: subsets latin, weights 300/400/500/600/700/800/900, styles normal+italic, CSS variable --font-heading-name

**src/app/layout.tsx:**
- Import both fonts and apply their variables to <html className>
- Import and render: GSAPProvider, CustomCursor, Navbar, Footer (these components will be created in Phase 6 — use placeholder imports for now)
- Wrap children in <main>
- Set base metadata: title template "%s | ADIN NYC", description from src/data/site.ts
- Body classes: bg-adin-black text-white overflow-x-hidden cursor-none

**next.config.ts:**
- Add remotePatterns for images.unsplash.com (used in insight article images)
- Set up redirects() stub (to be filled in Phase 9)
```

---

## Phase 4 — Data Layer

```
Migrate all _data/*.yml files from the source zip to TypeScript modules in src/data/.

For each file, first create the TypeScript type in src/types/, then create the data module in src/data/.

Files to migrate:
1. site.yml → src/types/site.ts + src/data/site.ts
2. navigation.yml → src/types/navigation.ts + src/data/navigation.ts
3. services.yml → src/types/services.ts + src/data/services.ts
4. clients.yml → src/types/clients.ts + src/data/clients.ts
5. team.yml → src/types/team.ts + src/data/team.ts
6. jobs.yml → src/types/jobs.ts + src/data/jobs.ts
7. insights.yml → src/types/insights.ts + src/data/insights.ts
8. testimonials.yml → src/types/testimonials.ts + src/data/testimonials.ts

Critical for navigation.ts: convert ALL .html href values to clean /route paths.
Examples: "about.html" → "/about", "services.html" → "/services", "communications.html" → "/services/communications", "articles/slug.html" → "/insights/slug"

For image paths in data files: update to use /images/ prefix matching the public/images/ directory.

Every data file must be typed — no 'any'. Use 'as const' where appropriate for static data.
```

---

## Phase 5 — Assets

```
Set up the public/images directory with all assets from the source zip.

Copy files from "Adin Landing page - Assets/" → public/images/ following this rename map:
- "Hero BG.jpg" → hero-bg.jpg
- "Communications Image.jpg" → communications.jpg
- "Experiences Image.jpg" → experiences.jpg
- "Content Image.jpg" → content.jpg
- "Strategic Advisory BG.jpg" → advisory-bg.jpg
- "Naturepedic image.webp" → naturepedic.webp
- "Face mask image.webp" → face-mask.webp
- "Hooray Foods image.webp" → hooray-foods.webp
- "Earth kind image.webp" → earthkind.webp
- "earthkind-hero.png" → earthkind-hero.png
- "naturepedic-hero.png" → naturepedic-hero.png
- "kari-warberg-hero.png" → kari-warberg-hero.png
- "design for health image.jpg" → design-for-health.jpg
- "naturepedic-nursery.png" → naturepedic-nursery.png
- "naturepedic-covid-hero.png" → naturepedic-covid-hero.png
- "naturepedic-factory.png" → naturepedic-factory.png

Copy client logos from "Adin Landing page - Assets/client logos/" → public/images/client-logos/
Name them logo-01.webp through logo-12.webp in the order they appear in the folder.
Update src/data/clients.ts to reference /images/client-logos/logo-01.webp etc.

After copying, update any remaining image paths in data files that still reference the old "Adin Landing page - Assets/" paths.
```

---

## Phase 6 — Core Components

```
Build all core components for the Adin NYC Next.js project. Follow the exact implementations in the skill file's references/components.md and references/gsap-patterns.md.

Build in this exact order:

1. src/lib/utils.ts — cn() with clsx + tailwind-merge

2. src/hooks/useIsomorphicLayoutEffect.ts — useLayoutEffect on client, useEffect on server

3. src/hooks/useScrolled.ts — scroll position hook for navbar

4. src/components/layout/GSAPProvider.tsx — 'use client', registers ScrollTrigger plugin once, sets gsap defaults

5. src/components/ui/CustomCursor.tsx — 'use client', GSAP cursor-dot + cursor-ring tracking with hover state on all a/button elements

6. src/components/layout/Navbar.tsx — 'use client', uses useScrolled() + usePathname() for active state, hamburger menu with animated open/close, all links from navigation.ts, mobile menu fullscreen overlay

7. src/components/layout/Footer.tsx — server component, 4-column layout from navigation.ts footer data, social links from site.ts

8. src/components/ui/Marquee.tsx — 'use client', CSS marquee animation + mouseenter/mouseleave pause

9. src/components/ui/AnimatedCounter.tsx — 'use client', useGSAP counter with ScrollTrigger

10. src/components/animations/RevealOnScroll.tsx — 'use client', useGSAP from @gsap/react, accepts direction ('up'|'left'|'right') and variant ('fade'|'scale') props, scope ref

11. src/components/animations/DisplayHeading.tsx — 'use client', clip-path + y reveal animation

12. src/components/animations/ParallaxImage.tsx — 'use client', clip-path reveal + scrubbed yPercent parallax, wraps next/image with fill

13. src/components/ui/Button.tsx — server component, variants: primary/outline/green, renders Link for internal href, <a> for external

14. src/components/ui/SectionLabel.tsx — server component, accent-rule + section-label class

15. src/components/ui/ArrowIcon.tsx — SVG arrow for buttons/CTAs

16. src/components/cards/WorkCard.tsx — 'use client', GSAP entrance animation + hover lift

17. src/components/cards/ClientLogoCard.tsx — uses next/image, grayscale → color hover

18. src/components/cards/ServiceCard.tsx — grid layout, uses RevealOnScroll + ParallaxImage

19. src/components/ui/AnimatedCounter.tsx + src/components/ui/StatsGrid.tsx — 4-stat grid from site.ts stats

Critical GSAP rules for every component:
- Always use useGSAP() from @gsap/react, never useEffect
- Always pass { scope: containerRef } to useGSAP
- Register plugins in GSAPProvider only, not in individual components
- Add 'use client' to any component using GSAP, useState, or useRef
```

---

## Phase 7 — Home Page

```
Migrate index.html to src/app/page.tsx. This is the most complex page — it has 9 sections, all animations, the hero timeline, sticky stacking, marquee, stats counter, and work cards.

Sections to build (in order, matching the original HTML structure):
1. HeroSection — full viewport, background image with GSAP parallax, hero text timeline animation (label → h1 → subtitle → buttons entrance), fade-out on scroll
2. Marquee — the green ticker bar between hero and about
3. AboutSection — two-column layout, DisplayHeading, stats grid with AnimatedCounter x4, RevealOnScroll
4. PhilosophySection — full-height parallax image + 3 image collage grid
5. ServicesSection — 4 service blocks using ServiceCard (alternating image left/right), DisplayHeading header
6. WorkSection — work case study cards grid using WorkCard
7. ClientsSection — 12 logo grid using ClientLogoCard
8. AdvisorySection — dark section with parallax background
9. ContactSection — CTA section (position: relative, not sticky)
10. Footer — already handled by layout

For each section, extract the exact copy, classes, and layout from index.html. Use components from Phase 6. All section IDs must match the originals (id="home", id="about", id="philosophy", etc.) so the sticky CSS stacking works correctly.

Export metadata:
title: "ADIN NYC | The Change Agency"
description: from site.ts
```

---

## Phase 8A — About & Services Pages

```
Migrate these pages from the source HTML. For each page, read the original HTML carefully, extract all content and layout, then recreate using Next.js components.

Pages to build:
1. src/app/about/page.tsx (about.html)
   - Export metadata: title "About"
   
2. src/app/services/page.tsx (services.html)
   - Use services data from src/data/services.ts
   - Export metadata: title "Services"
   
3. src/app/services/communications/page.tsx (communications.html)
   - Export metadata: title "Communications"
   
4. src/app/services/experiences/page.tsx (experiences.html)
   - Export metadata: title "Experiences"
   
5. src/app/services/content-creation/page.tsx (content-creation.html)
   - Export metadata: title "Content Creation"
   
6. src/app/services/advisory/page.tsx (advisory.html)
   - Export metadata: title "Strategic Advisory"
   
7. src/app/our-approach/page.tsx (our-approach.html)
   - Export metadata: title "Our Approach"

Rules:
- No inline styles
- All <img> → next/image
- All internal <a href="*.html"> → <Link href="/route">
- All GSAP in useGSAP() with scope ref
- Server components where no interactivity needed
```

---

## Phase 8B — Work / Case Study Pages

```
Migrate all work and case study pages from the source HTML.

Pages to build:
1. src/app/work/page.tsx (work.html) — grid of all case studies
   Export metadata: title "Work"
   
2. src/app/work/earthkind/page.tsx (earthkind.html)
3. src/app/work/naturepedic/page.tsx (naturepedic.html)
4. src/app/work/naturepedic-covid/page.tsx (naturepedic-covid.html)
5. src/app/work/kari-warberg/page.tsx (kari-warberg.html)
6. src/app/work/designs-for-health/page.tsx (designs-for-health.html)
7. src/app/work/hooray-foods/page.tsx (hooray-foods.html)

For each case study page: extract the hero image, headline, client name, services, body copy, and any statistics. Use ParallaxImage for hero images. Export relevant metadata per page.

Tip: the original case-study.html is a template — each of the above pages is a concrete instance. Read the actual specific page HTML (earthkind.html etc.), not the template.
```

---

## Phase 8C — Insights, Team, Clients Pages

```
Migrate remaining content pages:

1. src/app/clients/page.tsx (clients.html)
   - 12 client logo grid using ClientLogoCard
   - Pull logos from src/data/clients.ts
   - Export metadata: title "Clients"

2. src/app/insights/page.tsx (insights.html)
   - Article listing grid from src/data/insights.ts
   - Featured article hero treatment
   - Export metadata: title "Insights"

3. src/app/insights/[slug]/page.tsx (article.html template)
   - Dynamic route: generateStaticParams() from insights.ts slugs
   - generateMetadata() per article
   - Full article layout with hero image, author, date, read time, body

4. src/app/team/page.tsx (team.html)
   - Team grid from src/data/team.ts
   - Export metadata: title "Team"

5. src/app/careers/page.tsx (careers.html)
   - Job listings from src/data/jobs.ts
   - Export metadata: title "Careers"

6. src/app/careers/[slug]/page.tsx (job-listing.html template)
   - Dynamic route: generateStaticParams() from jobs.ts
   - Full job detail layout
```

---

## Phase 8D — Remaining Pages

```
Migrate all remaining pages:

1. src/app/press/page.tsx (press.html) — metadata: title "Press"
2. src/app/recognitions/page.tsx (recognitions.html) — metadata: title "Recognitions"
3. src/app/faqs/page.tsx (faqs.html) — metadata: title "FAQs"
4. src/app/contact/page.tsx (contact.html) — metadata: title "Contact"
   Note: contact page uses position: relative (not sticky). Add id="contact" to the section.
5. src/app/thank-you/page.tsx (thank-you.html) — metadata: title "Thank You"
6. src/app/expertise/page.tsx (expertise.html) — metadata: title "Expertise"
7. src/app/wellness/page.tsx (wellness.html) — metadata: title "Wellness & Nutrition"
8. src/app/food-beverage/page.tsx (food-beverage.html) — metadata: title "Food & Beverage"
9. src/app/privacy-policy/page.tsx (privacy-policy.html) — metadata: title "Privacy Policy"
10. src/app/terms-of-use/page.tsx (terms-of-use.html) — metadata: title "Terms of Use"
11. src/app/not-found.tsx (404.html) — Next.js 404 convention

For legal pages (privacy, terms): these are long-form text — use prose styling, no complex animations needed.
```

---

## Phase 9 — Redirects & Final Audit

```
Complete the migration with redirects and a final quality pass.

**next.config.ts redirects:**
Add permanent: true redirects for every .html URL to its clean Next.js path:
- /index.html → /
- /about.html → /about
- /services.html → /services
- /communications.html → /services/communications
- /experiences.html → /services/experiences
- /content-creation.html → /services/content-creation
- /advisory.html → /services/advisory
- /our-approach.html → /our-approach
- /work.html → /work
- /earthkind.html → /work/earthkind
- /naturepedic.html → /work/naturepedic
- /naturepedic-covid.html → /work/naturepedic-covid
- /kari-warberg.html → /work/kari-warberg
- /designs-for-health.html → /work/designs-for-health
- /hooray-foods.html → /work/hooray-foods
- /clients.html → /clients
- /insights.html → /insights
- /articles/:slug* → /insights/:slug*
- /team.html → /team
- /careers.html → /careers
- /press.html → /press
- /recognitions.html → /recognitions
- /faqs.html → /faqs
- /contact.html → /contact
- /privacy-policy.html → /privacy-policy
- /terms-of-use.html → /terms-of-use
- /wellness.html → /wellness
- /food-beverage.html → /food-beverage
- /expertise.html → /expertise

**Final audit — check every page for:**
☐ No inline style="" attributes
☐ All <img> replaced with next/image
☐ All internal links use Next.js <Link>
☐ No direct DOM manipulation (document.querySelector etc.)
☐ All GSAP inside useGSAP() hooks with scope ref
☐ 'use client' on all components using GSAP/useState/useRef
☐ Metadata exported from every page.tsx
☐ No hardcoded strings that exist in data files
☐ ScrollTrigger.refresh() called where needed after layout changes
☐ Hero images have priority prop on next/image
☐ All fonts loading from next/font (no Google Fonts link tags)
☐ TypeScript: no 'any' types

Run: npx tsc --noEmit to check for TypeScript errors
Run: npm run build to verify production build succeeds
```

---

## Quick Reference: Animation Class Replacements

When you encounter these classes in the HTML, use these components instead:

| HTML | Next.js |
|---|---|
| `class="reveal"` | `<RevealOnScroll>` |
| `class="reveal-left"` | `<RevealOnScroll direction="left">` |
| `class="reveal-right"` | `<RevealOnScroll direction="right">` |
| `class="reveal-scale"` | `<RevealOnScroll variant="scale">` |
| `class="display-heading"` | `<DisplayHeading>` |
| `class="parallax-img-wrap"` | `<ParallaxImage>` |
| `class="work-card"` | `<WorkCard>` |
| `class="client-logo-card"` | `<ClientLogoCard>` |
| `<a href="*.html">` | `<Link href="/route">` |
| `<img src="...">` | `<Image src="..." />` |

## Quick Reference: Route Mapping

| HTML | Next.js |
|---|---|
| `index.html` | `/` |
| `about.html` | `/about` |
| `services.html` | `/services` |
| `communications.html` | `/services/communications` |
| `experiences.html` | `/services/experiences` |
| `content-creation.html` | `/services/content-creation` |
| `advisory.html` | `/services/advisory` |
| `our-approach.html` | `/our-approach` |
| `work.html` | `/work` |
| `earthkind.html` | `/work/earthkind` |
| `naturepedic.html` | `/work/naturepedic` |
| `clients.html` | `/clients` |
| `insights.html` | `/insights` |
| `articles/*.html` | `/insights/[slug]` |
| `team.html` | `/team` |
| `careers.html` | `/careers` |
| `contact.html` | `/contact` |
