# Site Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the approved client-focused portfolio redesign with a light soft-technical visual system, App Router homepage, and three dedicated flagship project pages.

**Architecture:** Migrate the public route surface from `pages/` to `app/`, move project/capability content into typed TypeScript data files, and compose the homepage from focused server/client components. Use client components only where browser animation is required, especially the scroll-driven Wow hero.

**Tech Stack:** Next.js 14 App Router, React 18, TypeScript, SCSS/CSS modules, `next/image`, GSAP for selected scroll animation, Vercel Analytics.

---

## File Structure

Create:

- `app/layout.tsx` - Root HTML shell, global metadata, font/style imports, Vercel Analytics.
- `app/page.tsx` - Homepage composition.
- `app/not-found.tsx` - Replacement for `pages/404.tsx`.
- `app/work/[slug]/page.tsx` - Dynamic flagship case-study route.
- `app/work/[slug]/work-page.module.scss` - Flagship case-study page styles.
- `components/site/SiteHeader.tsx` - Lightweight top navigation.
- `components/site/SiteHeader.module.scss` - Header styles.
- `components/site/SiteFooter.tsx` - Footer/contact fallback.
- `components/site/SiteFooter.module.scss` - Footer styles.
- `components/home-redesign/WowHero.tsx` - Scroll-driven hero client component.
- `components/home-redesign/WowHero.module.scss` - Wow hero styles.
- `components/home-redesign/SelectedWork.tsx` - Flagship project preview section.
- `components/home-redesign/SelectedWork.module.scss` - Selected work styles.
- `components/home-redesign/ProjectArchive.tsx` - Compact archive section.
- `components/home-redesign/ProjectArchive.module.scss` - Archive styles.
- `components/home-redesign/Capabilities.tsx` - Capabilities section.
- `components/home-redesign/Capabilities.module.scss` - Capabilities styles.
- `components/home-redesign/AboutCredibility.tsx` - Short about/credibility section.
- `components/home-redesign/AboutCredibility.module.scss` - About styles.
- `components/home-redesign/ContactCTA.tsx` - Booking placeholder + email CTA.
- `components/home-redesign/ContactCTA.module.scss` - Contact styles.
- `data/site.ts` - Site metadata, nav, contact, social links.
- `data/projects.ts` - Project types, flagship projects, archive projects, lookup helpers.
- `data/capabilities.ts` - Capability records.
- `styles/app-globals.scss` - New global tokens and base styles for the redesign.

Modify:

- `next.config.js` - Keep existing behavior unless App Router/image config requires a small adjustment.
- `tsconfig.json` - Keep current path aliases; verify `app` and `data` are included.
- `styles/_fonts.scss` - Reuse existing Slussen font-face declarations if display typography keeps Slussen.
- `.gitignore` - Already updated for `/.superpowers/`; do not undo.

Delete after replacement is working:

- `pages/index.tsx`
- `pages/_app.tsx`
- `pages/_document.tsx`
- `pages/404.tsx`

Keep legacy `components/home/**`, `components/nav/**`, and modal components until the new App Router routes build. Remove them only after the new app no longer imports them.

Do not touch the existing uncommitted `public/project-imgs/.DS_Store` change.

---

## Task 1: App Router Shell

**Files:**

- Create: `app/layout.tsx`
- Create: `app/not-found.tsx`
- Create: `styles/app-globals.scss`
- Modify: `styles/_fonts.scss` only if import paths fail
- Keep for now: `pages/**`

- [ ] **Step 1: Create the new global stylesheet**

Create `styles/app-globals.scss` with these tokens and base rules:

```scss
@import "./fonts";

:root {
  --color-page: #f6f7f4;
  --color-surface: #ffffff;
  --color-surface-muted: #edf1ee;
  --color-ink: #111614;
  --color-ink-muted: #5d6864;
  --color-line: #dbe2de;
  --color-accent: #5f8f83;
  --color-accent-soft: #d9ebe5;
  --color-blue-soft: #dfe8ef;
  --font-display: "Slussen.Comp", "Arial Narrow", Arial, sans-serif;
  --font-body: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --max-width: 1180px;
  --gutter: clamp(20px, 4vw, 56px);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  background: var(--color-page);
}

body {
  margin: 0;
  min-width: 320px;
  background: var(--color-page);
  color: var(--color-ink);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.5;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
textarea {
  font: inherit;
}

img {
  display: block;
  max-width: 100%;
}

main {
  min-height: 100vh;
}

::selection {
  background: var(--color-accent-soft);
  color: var(--color-ink);
}

.section-shell {
  width: min(100% - (var(--gutter) * 2), var(--max-width));
  margin-inline: auto;
}

.section-kicker {
  margin: 0 0 12px;
  color: var(--color-accent);
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.section-title {
  margin: 0;
  max-width: 760px;
  font-family: var(--font-display);
  font-size: clamp(3rem, 8vw, 7rem);
  font-weight: 900;
  letter-spacing: 0;
  line-height: 0.9;
  text-transform: uppercase;
}

.section-copy {
  max-width: 680px;
  color: var(--color-ink-muted);
  font-size: clamp(1rem, 1.5vw, 1.16rem);
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.001ms !important;
  }
}
```

- [ ] **Step 2: Create the root layout**

Create `app/layout.tsx`:

```tsx
import "@/styles/app-globals.scss";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { siteMeta } from "@/data/site";

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
  metadataBase: new URL(siteMeta.url),
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    url: siteMeta.url,
    siteName: "Bryant Place",
    images: [{ url: "/project-imgs/thumbnail.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@cyberpatrolunit",
    title: siteMeta.title,
    description: siteMeta.description,
    images: ["/project-imgs/thumbnail.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/project-imgs/thumbnail.jpg",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Create a temporary site metadata file so layout imports compile**

Create `data/site.ts`:

```ts
export const siteMeta = {
  title: "Bryant Place | Experiential Technology & Real-Time Systems",
  description:
    "Creative technology leadership for permanent installations, interactive environments, and live experiential systems.",
  url: "https://www.bryantplace.com",
  email: "hello@bryantplace.com",
  bookingUrl: "mailto:hello@bryantplace.com?subject=Project%20Call%20with%20Bryant%20Place",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/cyberpatrolunit" },
    { label: "GitHub", href: "https://github.com/cyberpatrolunit" },
    { label: "X", href: "https://www.twitter.com/cyberpatrolunit" },
  ],
} as const;

export const navItems = [
  { label: "Work", href: "/#work" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;
```

- [ ] **Step 4: Create temporary header and footer components**

Create `components/site/SiteHeader.tsx`:

```tsx
import Link from "next/link";
import { navItems } from "@/data/site";
import styles from "./SiteHeader.module.scss";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/" aria-label="Bryant Place home">
        Bryant Place
      </Link>
      <nav className={styles.nav} aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
```

Create `components/site/SiteHeader.module.scss`:

```scss
.header {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 18px var(--gutter);
  background: color-mix(in srgb, var(--color-page) 88%, transparent);
  border-bottom: 1px solid var(--color-line);
  backdrop-filter: blur(18px);
}

.logo {
  font-weight: 800;
  letter-spacing: 0.01em;
}

.nav {
  display: flex;
  gap: clamp(14px, 2vw, 28px);
  color: var(--color-ink-muted);
  font-size: 0.9rem;
}

.nav a:hover {
  color: var(--color-ink);
}

@media (max-width: 640px) {
  .header {
    align-items: flex-start;
    flex-direction: column;
  }

  .nav {
    flex-wrap: wrap;
  }
}
```

Create `components/site/SiteFooter.tsx`:

```tsx
import Link from "next/link";
import { siteMeta } from "@/data/site";
import styles from "./SiteFooter.module.scss";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div>
        <p className={styles.kicker}>Bryant Place</p>
        <p className={styles.copy}>
          Creative technology leadership for permanent installations, interactive environments, and real-time systems.
        </p>
      </div>
      <div className={styles.links}>
        <Link href={siteMeta.bookingUrl}>Book a Project Call</Link>
        <Link href={`mailto:${siteMeta.email}`}>Email Bryant</Link>
      </div>
    </footer>
  );
}
```

Create `components/site/SiteFooter.module.scss`:

```scss
.footer {
  display: flex;
  justify-content: space-between;
  gap: 32px;
  padding: 48px var(--gutter);
  color: var(--color-ink-muted);
  border-top: 1px solid var(--color-line);
}

.kicker {
  margin: 0 0 8px;
  color: var(--color-ink);
  font-weight: 800;
}

.copy {
  max-width: 520px;
  margin: 0;
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  align-content: flex-start;
}

.links a {
  border-bottom: 1px solid currentColor;
}

@media (max-width: 720px) {
  .footer {
    flex-direction: column;
  }
}
```

- [ ] **Step 5: Create a temporary homepage and not-found page**

Create `app/page.tsx`:

```tsx
export default function HomePage() {
  return (
    <main>
      <section className="section-shell" style={{ paddingBlock: "120px" }}>
        <p className="section-kicker">Experiential Technology</p>
        <h1 className="section-title">Concept to field-ready systems.</h1>
        <p className="section-copy">
          Bryant Place leads complex creative technology for permanent installations, interactive environments, and live experiences.
        </p>
      </section>
    </main>
  );
}
```

Create `app/not-found.tsx`:

```tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <section className="section-shell" style={{ paddingBlock: "120px" }}>
        <p className="section-kicker">404</p>
        <h1 className="section-title">Page not found.</h1>
        <p className="section-copy">The page you requested does not exist.</p>
        <Link href="/">Return home</Link>
      </section>
    </main>
  );
}
```

- [ ] **Step 6: Run the build**

Run: `npm run build`

Expected: build completes or reports only duplicate route conflict with `pages/index.tsx`. If duplicate route conflict occurs, leave it for Task 5 where `pages/**` is removed after the new app is complete.

- [ ] **Step 7: Commit**

Run:

```bash
git add app components/site data/site.ts styles/app-globals.scss
git commit -m "feat: add app router shell"
```

---

## Task 2: Typed Content Data

**Files:**

- Create: `data/projects.ts`
- Create: `data/capabilities.ts`
- Modify: `data/site.ts`

- [ ] **Step 1: Replace `data/site.ts` with final site metadata**

Use:

```ts
export const siteMeta = {
  title: "Bryant Place | Experiential Technology & Real-Time Systems",
  description:
    "Creative technology leadership for permanent installations, interactive environments, and live experiential systems.",
  url: "https://www.bryantplace.com",
  email: "hello@bryantplace.com",
  bookingUrl: "mailto:hello@bryantplace.com?subject=Project%20Call%20with%20Bryant%20Place",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/cyberpatrolunit" },
    { label: "TikTok", href: "https://www.tiktok.com/@cyberpatrolunit" },
    { label: "GitHub", href: "https://github.com/cyberpatrolunit" },
    { label: "X", href: "https://www.twitter.com/cyberpatrolunit" },
  ],
} as const;

export const navItems = [
  { label: "Selected Work", href: "/#work" },
  { label: "Archive", href: "/#archive" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Contact", href: "/#contact" },
] as const;
```

- [ ] **Step 2: Create `data/capabilities.ts`**

Use:

```ts
export type Capability = {
  title: string;
  summary: string;
  proof: string;
};

export const capabilities: Capability[] = [
  {
    title: "Creative Direction & Experience Design",
    summary:
      "Translate artistic and client ambitions into buildable experiential concepts with clear technical paths.",
    proof:
      "Useful when a project needs both visual conviction and practical leadership from concept through execution.",
  },
  {
    title: "Real-Time Systems & Interactive Software",
    summary:
      "Design and implement real-time software for interactive environments, generative visuals, and responsive media systems.",
    proof:
      "Grounded in TouchDesigner, Ventuz, Python, web interfaces, data visualization, and site-specific control needs.",
  },
  {
    title: "Permanent Installation Deployment",
    summary:
      "Deliver robust systems for public, workplace, and venue environments where reliability matters after launch.",
    proof:
      "Includes remote management, fleet deployment, calibration, documentation, and operational handoff.",
  },
  {
    title: "Technical Leadership & Team Coordination",
    summary:
      "Lead cross-functional creative, engineering, design, and deployment teams through complex production constraints.",
    proof:
      "Built for projects with multiple vendors, changing site conditions, distributed teams, and real deadlines.",
  },
];
```

- [ ] **Step 3: Create project types and flagship data in `data/projects.ts`**

Use this file as the source of truth:

```ts
export type ProjectImage = {
  src: string;
  alt: string;
};

export type CaseStudySection = {
  heading: "Challenge" | "Approach" | "Outcome";
  body: string;
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  role: string;
  client: string;
  context: string;
  disciplines: string[];
  tools: string[];
  projectLink?: string;
  heroImage: ProjectImage;
  images: ProjectImage[];
  caseStudy?: CaseStudySection[];
};

export const flagshipProjects: Project[] = [
  {
    slug: "google-sjt-nyc",
    title: "Google: SJT NYC",
    eyebrow: "Permanent workplace installations",
    summary:
      "Lead technical direction and programming for a range of interactive installations at Google's St. John's Terminal in New York.",
    role: "Lead Technical Director @ Downstream",
    client: "Google",
    context: "St. John's Terminal, NYC",
    disciplines: ["Generative artwork", "Interactive installation", "Remote management", "Deployment leadership"],
    tools: ["TouchDesigner", "Vue", "Cloud media synchronization", "Projection and LED calibration"],
    projectLink: "https://www.sjt-nyc.xyz/",
    heroImage: {
      src: "/project-imgs/sjt/sjt-00.jpg",
      alt: "Google St. John's Terminal media installation",
    },
    images: [
      { src: "/project-imgs/sjt/sjt-00.jpg", alt: "Google SJT installation overview" },
      { src: "/project-imgs/sjt/sjt-01.jpg", alt: "Google SJT generative media wall" },
      { src: "/project-imgs/sjt/sjt-02.jpg", alt: "Google SJT interactive display" },
      { src: "/project-imgs/sjt/sjt-03.jpg", alt: "Google SJT installation detail" },
      { src: "/project-imgs/sjt/sjt-04.jpg", alt: "Google SJT public media environment" },
      { src: "/project-imgs/sjt/sjt-05.jpg", alt: "Google SJT deployed visual system" },
    ],
    caseStudy: [
      {
        heading: "Challenge",
        body:
          "Deliver multiple bespoke generative and informational installations across a new multifaceted workplace while coordinating evolving network, control, construction, and content requirements.",
      },
      {
        heading: "Approach",
        body:
          "Built modular TouchDesigner systems, integrated Vue information layers, created calibration tools for projection and LED surfaces, and supported cloud-based synchronization for media servers throughout the building.",
      },
      {
        heading: "Outcome",
        body:
          "Completed deployment and burn-in for a cohesive set of installations designed to enrich the visitor and employee experience across the site.",
      },
    ],
  },
  {
    slug: "google-pier-57-nyc",
    title: "Google: Pier 57 NYC",
    eyebrow: "Real-time wayfinding system",
    summary:
      "Technical programming lead for a Ventuz-based digital wayfinding and generative media system at Google's Pier 57 Event Center.",
    role: "Lead Technical Director @ Downstream",
    client: "Google",
    context: "Pier 57 Event Center, NYC",
    disciplines: ["Wayfinding", "Generative visuals", "CMS-driven media", "Operational handoff"],
    tools: ["Ventuz", "Google Cloud Platform", "Unified endpoint management", "Web-based CMS"],
    projectLink: "https://www.p57.xyz/",
    heroImage: {
      src: "/project-imgs/p57/p57-00.jpg",
      alt: "Google Pier 57 event center display system",
    },
    images: [
      { src: "/project-imgs/p57/p57-00.jpg", alt: "Google Pier 57 media system overview" },
      { src: "/project-imgs/p57/p57-01.jpg", alt: "Google Pier 57 LED wayfinding display" },
      { src: "/project-imgs/p57/p57-02.jpg", alt: "Google Pier 57 event center display" },
      { src: "/project-imgs/p57/p57-03.jpg", alt: "Google Pier 57 generative visual system" },
      { src: "/project-imgs/p57/p57-04.jpg", alt: "Google Pier 57 deployment detail" },
      { src: "/project-imgs/p57/p57-05.jpg", alt: "Google Pier 57 installed screen system" },
      { src: "/project-imgs/p57/p57-06.jpg", alt: "Google Pier 57 completed installation" },
    ],
    caseStudy: [
      {
        heading: "Challenge",
        body:
          "Create a real-time content-driven wayfinding system across many LED screens with different space requirements, screen formats, and operational needs.",
      },
      {
        heading: "Approach",
        body:
          "Organized repositories and templates for the development team, programmed Ventuz systems, integrated cloud and endpoint management workflows, and worked directly with the client through design revisions.",
      },
      {
        heading: "Outcome",
        body:
          "Delivered a controllable building-wide media system that supports event scheduling, preset generative looks, custom media uploads, documentation, and operations team handoff.",
      },
    ],
  },
  {
    slug: "adriatique-projekt-x",
    title: "Adriatique: Projekt X",
    eyebrow: "Touring LED sculpture",
    summary:
      "Creative direction and live show implementation for Adriatique's modular Projekt X LED sculpture.",
    role: "Creative Director",
    client: "Adriatique",
    context: "Global touring live show",
    disciplines: ["Creative direction", "Sculptural LED system", "Live show implementation", "Team leadership"],
    tools: ["Previsualization", "3D model workflows", "LED integration", "Structural coordination"],
    projectLink: "https://www.projekt-x.xyz/",
    heroImage: {
      src: "/project-imgs/projektx/x-00.jpg",
      alt: "Adriatique Projekt X modular LED sculpture",
    },
    images: [
      { src: "/project-imgs/projektx/x-00.jpg", alt: "Projekt X live show sculpture" },
      { src: "/project-imgs/projektx/x-01.jpg", alt: "Projekt X stage view" },
      { src: "/project-imgs/projektx/x-02.jpg", alt: "Projekt X LED sculpture detail" },
      { src: "/project-imgs/projektx/x-03.jpg", alt: "Projekt X live performance environment" },
      { src: "/project-imgs/projektx/x-04.jpg", alt: "Projekt X modular scenic design" },
      { src: "/project-imgs/projektx/x-05.jpg", alt: "Projekt X touring show installation" },
    ],
    caseStudy: [
      {
        heading: "Challenge",
        body:
          "Transform Adriatique's artistic concept into a modular touring sculpture that could become a visual identity for live shows while remaining safe, transportable, and adaptable.",
      },
      {
        heading: "Approach",
        body:
          "Assembled and coordinated the team, shaped the modular design strategy, collaborated on safety and hoisting requirements, and used previsualization workflows to test the sculpture in virtual stage environments.",
      },
      {
        heading: "Outcome",
        body:
          "Projekt X debuted in Zurich in December 2022 and became a globally touring centerpiece for Adriatique's live shows.",
      },
    ],
  },
];
```

- [ ] **Step 4: Append archive data and helpers to `data/projects.ts`**

Add below `flagshipProjects`:

```ts
export const archiveProjects: Project[] = [
  {
    slug: "nike-nms-experience",
    title: "Nike NMS Experience",
    eyebrow: "Data visualization experience",
    summary:
      "Interactive manufacturing data visualization with physical controls for stakeholder decision-making.",
    role: "Creative Technologist",
    client: "Nike",
    context: "NMS Experience",
    disciplines: ["Programming", "Data visualization", "Additive manufacturing"],
    tools: ["Python", "TouchDesigner", "USB serial encoders", "Multi-jet fusion"],
    heroImage: { src: "/project-imgs/nms/nms-tri-image.png", alt: "Nike NMS interactive data visualization" },
    images: [{ src: "/project-imgs/nms/nms-tri-image.png", alt: "Nike NMS project imagery" }],
  },
  {
    slug: "newave-flying-art-uap",
    title: "NEWAVE: Flying Art UAP",
    eyebrow: "Flying art installation",
    summary:
      "Engineering and design of a 36-square-foot airborne artwork for light artist Eric Staller.",
    role: "Creative Director",
    client: "Eric Staller",
    context: "Flying light sculpture",
    disciplines: ["Design", "Engineering", "Fabrication"],
    tools: ["Fusion 360", "Ardupilot", "Pixhawk Cube", "Carbon fiber"],
    projectLink: "https://ericstaller.com/",
    heroImage: { src: "/project-imgs/newave/newave-00.gif", alt: "NEWAVE flying art installation" },
    images: [{ src: "/project-imgs/newave/newave-00.gif", alt: "NEWAVE flying light artwork" }],
  },
  {
    slug: "coachella-gateway",
    title: "The Coachella Gateway",
    eyebrow: "Interactive projection mapping",
    summary:
      "3D projection-mapped interactive installation for the 2012 Coachella Music Festival.",
    role: "Project Director",
    client: "Coachella",
    context: "Festival installation",
    disciplines: ["Interactive installation", "Projection mapping", "Show systems"],
    tools: ["TouchDesigner", "StereoBot"],
    projectLink: "https://youtu.be/c1FQj9VPuZg?si=QZeApOPCZ5xEcNic",
    heroImage: { src: "/project-imgs/gateway/gateway-02.jpg", alt: "The Coachella Gateway projection mapped installation" },
    images: [{ src: "/project-imgs/gateway/gateway-02.jpg", alt: "Coachella Gateway project image" }],
  },
  {
    slug: "coachella-lightweaver",
    title: "The Coachella Lightweaver",
    eyebrow: "Mapped light sculpture",
    summary:
      "Large-scale 3D lighting mapped installation for the 2014 Coachella Music Festival.",
    role: "Lighting Director",
    client: "Coachella",
    context: "Festival installation",
    disciplines: ["Lighting direction", "Interactive installation", "Spatial media"],
    tools: ["TouchDesigner", "WYSIWYG", "StereoBot"],
    projectLink: "https://vimeo.com/94600058",
    heroImage: { src: "/project-imgs/lightweaver/lightweaver-00.jpg", alt: "Coachella Lightweaver installation" },
    images: [{ src: "/project-imgs/lightweaver/lightweaver-00.jpg", alt: "Coachella Lightweaver project image" }],
  },
  {
    slug: "fiat-lux-vatican",
    title: "Fiat Lux: Illuminating our Common Home",
    eyebrow: "Architectural projection",
    summary:
      "Large-scale projection event at St. Peter's Basilica for Pope Francis' Extraordinary Jubilee of Mercy.",
    role: "Interactive Engineer",
    client: "Obscura Digital / Vatican",
    context: "St. Peter's Basilica",
    disciplines: ["Interactive engineering", "Projection systems", "Show control"],
    tools: ["TouchDesigner", "High-lumen projection", "Media systems"],
    projectLink: "https://vimeo.com/152015806",
    heroImage: { src: "/project-imgs/ops-vatican/ops-vatican-00.jpg", alt: "Fiat Lux projection on St. Peter's Basilica" },
    images: [{ src: "/project-imgs/ops-vatican/ops-vatican-00.jpg", alt: "Fiat Lux Vatican project image" }],
  },
  {
    slug: "cnn-road-to-270",
    title: "CNN: Road to 270",
    eyebrow: "Live data projection",
    summary:
      "Live election results projected onto the Empire State Building as a real-time election tracker.",
    role: "Interactive Engineer",
    client: "CNN / Obscura Digital",
    context: "Empire State Building",
    disciplines: ["Show control", "Real-time data", "Projection"],
    tools: ["TouchDesigner", "Live data systems"],
    projectLink:
      "https://www.washingtonpost.com/news/arts-and-entertainment/wp/2016/11/08/the-empire-state-building-has-transformed-into-a-giant-glowing-election-tracker-tonight/",
    heroImage: { src: "/project-imgs/cnn-debates/cnn-debates-00.jpg", alt: "CNN Road to 270 projection on the Empire State Building" },
    images: [{ src: "/project-imgs/cnn-debates/cnn-debates-00.jpg", alt: "CNN Road to 270 project image" }],
  },
  {
    slug: "dubai-360-sphere",
    title: "Dubai 360: Spherical Projection Theater",
    eyebrow: "Immersive projection theater",
    summary:
      "Interactive spherical projection theater presenting high-resolution panoramic Dubai 360 content.",
    role: "Lead Interactive Engineer",
    client: "Dubai 360 / Obscura Digital",
    context: "The Dubai Mall",
    disciplines: ["Playback system", "Mapping", "Immersive media"],
    tools: ["TouchDesigner", "Projection mapping", "Synchronized playback"],
    projectLink: "https://vimeo.com/123011724",
    heroImage: { src: "/project-imgs/dubai-sphere/dubai-sphere-00.jpg", alt: "Dubai 360 spherical projection theater" },
    images: [{ src: "/project-imgs/dubai-sphere/dubai-sphere-00.jpg", alt: "Dubai 360 Sphere project image" }],
  },
  {
    slug: "illuminations-un-nyc",
    title: "illUmiNations: Protecting Our Planet",
    eyebrow: "Architectural projection",
    summary:
      "30-story architectural projection at the United Nations for a global climate action event.",
    role: "Interactive Engineer",
    client: "United Nations / Obscura Digital",
    context: "UN Headquarters, NYC",
    disciplines: ["Show control", "Projection", "Interactive engineering"],
    tools: ["TouchDesigner", "Media servers", "Projection systems"],
    projectLink: "https://vimeo.com/106991647",
    heroImage: { src: "/project-imgs/ops-un-nyc/ops-un-nyc-00.jpg", alt: "illUmiNations projection at the United Nations" },
    images: [{ src: "/project-imgs/ops-un-nyc/ops-un-nyc-00.jpg", alt: "illUmiNations UN project image" }],
  },
  {
    slug: "amon-tobin-isam-live",
    title: "Amon Tobin: ISAM Live",
    eyebrow: "Immersive live show",
    summary:
      "Playback system and content creation support for the immersive Amon Tobin ISAM live audiovisual show.",
    role: "Playback System / Content Creation",
    client: "Amon Tobin / Xite Labs",
    context: "Touring live show",
    disciplines: ["Playback", "Projection mapping", "Content creation"],
    tools: ["TouchDesigner", "3D projection mapping", "Real-time graphics"],
    projectLink: "https://xitelabs.com/portfolio/amon-tobin/",
    heroImage: { src: "/project-imgs/isam/isam-00-web.jpg", alt: "Amon Tobin ISAM live projection mapped show" },
    images: [{ src: "/project-imgs/isam/isam-00-web.jpg", alt: "Amon Tobin ISAM project image" }],
  },
];

export const allProjects = [...flagshipProjects, ...archiveProjects];

export function getProjectBySlug(slug: string) {
  return flagshipProjects.find((project) => project.slug === slug);
}
```

- [ ] **Step 5: Type-check via build**

Run: `npm run build`

Expected: build succeeds or reports only known duplicate route conflict before Task 5. Type errors in `data/projects.ts`, `data/capabilities.ts`, or `data/site.ts` must be fixed before continuing.

- [ ] **Step 6: Commit**

Run:

```bash
git add data
git commit -m "feat: add typed portfolio content"
```

---

## Task 3: Homepage Components

**Files:**

- Modify: `app/page.tsx`
- Create: `components/home-redesign/WowHero.tsx`
- Create: `components/home-redesign/WowHero.module.scss`
- Create: `components/home-redesign/SelectedWork.tsx`
- Create: `components/home-redesign/SelectedWork.module.scss`
- Create: `components/home-redesign/ProjectArchive.tsx`
- Create: `components/home-redesign/ProjectArchive.module.scss`
- Create: `components/home-redesign/Capabilities.tsx`
- Create: `components/home-redesign/Capabilities.module.scss`
- Create: `components/home-redesign/AboutCredibility.tsx`
- Create: `components/home-redesign/AboutCredibility.module.scss`
- Create: `components/home-redesign/ContactCTA.tsx`
- Create: `components/home-redesign/ContactCTA.module.scss`

- [ ] **Step 1: Create `WowHero.tsx`**

Use a client component because GSAP reads DOM and scroll state:

```tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./WowHero.module.scss";

const lines = [
  { primary: "Creative Direction", secondary: "Technical Execution" },
  { primary: "Experiential Concepts", secondary: "Real-World Systems" },
  { primary: "Public Installations", secondary: "Field-Ready Deployment" },
  { primary: "Cinematic Moments", secondary: "Reliable Infrastructure" },
];

export function WowHero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(`.${styles.fill}`).forEach((element) => {
        gsap.fromTo(
          element,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top 78%",
              end: "bottom 44%",
              scrub: true,
            },
          },
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.hero} ref={rootRef} aria-labelledby="hero-title">
      <div className="section-shell">
        <p className="section-kicker">Bryant Place</p>
        <h1 id="hero-title" className={styles.title}>
          Experiential technology from concept to field-ready systems.
        </h1>
        <div className={styles.lines} aria-label="Core capabilities">
          {lines.map((line) => (
            <div className={styles.line} key={line.primary}>
              <span className={styles.primary}>{line.primary}</span>
              <span className={styles.secondary}>
                <span className={styles.fill} aria-hidden="true" />
                <span className={styles.secondaryText}>{line.secondary}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create `WowHero.module.scss`**

Use:

```scss
.hero {
  padding: clamp(88px, 12vw, 170px) 0 clamp(54px, 9vw, 120px);
  overflow: hidden;
}

.title {
  max-width: 980px;
  margin: 0 0 clamp(48px, 8vw, 92px);
  font-family: var(--font-display);
  font-size: clamp(4.2rem, 12vw, 11rem);
  font-weight: 900;
  letter-spacing: 0;
  line-height: 0.84;
  text-transform: uppercase;
}

.lines {
  border-top: 1px solid var(--color-line);
}

.line {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  min-height: clamp(72px, 9vw, 112px);
  border-bottom: 1px solid var(--color-line);
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 6vw, 6.4rem);
  font-weight: 900;
  letter-spacing: 0;
  line-height: 0.9;
  text-transform: uppercase;
}

.primary,
.secondary {
  position: relative;
  display: flex;
  align-items: center;
  min-width: 0;
  padding: 18px 0;
}

.primary {
  color: color-mix(in srgb, var(--color-ink) 34%, transparent);
}

.secondary {
  justify-content: flex-end;
  color: var(--color-ink);
  text-align: right;
}

.fill {
  position: absolute;
  inset: 18px -10px;
  z-index: 0;
  background: var(--color-accent-soft);
  transform: scaleX(0);
  transform-origin: left center;
}

.secondaryText {
  position: relative;
  z-index: 1;
}

@media (max-width: 760px) {
  .line {
    grid-template-columns: 1fr;
    gap: 0;
    padding: 14px 0;
  }

  .primary,
  .secondary {
    justify-content: flex-start;
    padding: 4px 0;
    text-align: left;
  }

  .fill {
    inset: 0 -8px;
  }
}
```

- [ ] **Step 3: Create `SelectedWork.tsx`**

Use:

```tsx
import Image from "next/image";
import Link from "next/link";
import { flagshipProjects } from "@/data/projects";
import styles from "./SelectedWork.module.scss";

export function SelectedWork() {
  return (
    <section className={styles.section} id="work">
      <div className="section-shell">
        <div className={styles.header}>
          <p className="section-kicker">Selected Work</p>
          <h2 className="section-title">Built for real rooms, real audiences, and real deadlines.</h2>
        </div>
        <div className={styles.grid}>
          {flagshipProjects.map((project, index) => (
            <article className={styles.card} key={project.slug}>
              <Link href={`/work/${project.slug}`} className={styles.imageLink}>
                <Image
                  src={project.heroImage.src}
                  alt={project.heroImage.alt}
                  width={1200}
                  height={780}
                  sizes="(max-width: 900px) 100vw, 50vw"
                  priority={index === 0}
                />
              </Link>
              <div className={styles.copy}>
                <p className={styles.eyebrow}>{project.eyebrow}</p>
                <h3>
                  <Link href={`/work/${project.slug}`}>{project.title}</Link>
                </h3>
                <p>{project.summary}</p>
                <Link className={styles.cta} href={`/work/${project.slug}`}>
                  View case study
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Create `SelectedWork.module.scss`**

Use:

```scss
.section {
  padding: clamp(64px, 10vw, 130px) 0;
  background: var(--color-surface);
}

.header {
  margin-bottom: 42px;
}

.grid {
  display: grid;
  gap: 28px;
}

.card {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(280px, 0.65fr);
  gap: clamp(24px, 4vw, 48px);
  align-items: end;
  padding-bottom: 28px;
  border-bottom: 1px solid var(--color-line);
}

.imageLink {
  display: block;
  overflow: hidden;
  background: var(--color-surface-muted);
}

.imageLink img {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  transition: transform 420ms ease;
}

.imageLink:hover img {
  transform: scale(1.025);
}

.copy {
  padding-bottom: 8px;
}

.eyebrow {
  margin: 0 0 10px;
  color: var(--color-accent);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.copy h3 {
  margin: 0 0 14px;
  font-size: clamp(1.8rem, 4vw, 3.8rem);
  line-height: 0.95;
}

.copy p {
  margin: 0 0 22px;
  color: var(--color-ink-muted);
}

.cta {
  display: inline-flex;
  border-bottom: 1px solid currentColor;
  font-weight: 800;
}

@media (max-width: 860px) {
  .card {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 5: Create archive, capabilities, about, and contact components**

Create `components/home-redesign/ProjectArchive.tsx`:

```tsx
import Image from "next/image";
import Link from "next/link";
import { archiveProjects } from "@/data/projects";
import styles from "./ProjectArchive.module.scss";

export function ProjectArchive() {
  return (
    <section className={styles.section} id="archive">
      <div className="section-shell">
        <p className="section-kicker">Archive</p>
        <h2 className={styles.title}>Additional proof across live shows, projection, data, and immersive systems.</h2>
        <div className={styles.list}>
          {archiveProjects.map((project) => (
            <article className={styles.item} key={project.slug}>
              <Image src={project.heroImage.src} alt={project.heroImage.alt} width={280} height={180} sizes="140px" />
              <div>
                <p>{project.eyebrow}</p>
                <h3>{project.title}</h3>
                <span>{project.role}</span>
              </div>
              {project.projectLink ? (
                <Link href={project.projectLink} target="_blank" rel="noreferrer">
                  External link
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
```

Create `components/home-redesign/ProjectArchive.module.scss`:

```scss
.section {
  padding: clamp(64px, 10vw, 120px) 0;
}

.title {
  max-width: 780px;
  margin: 0 0 32px;
  font-size: clamp(1.8rem, 4vw, 3.8rem);
  line-height: 1;
}

.list {
  display: grid;
  border-top: 1px solid var(--color-line);
}

.item {
  display: grid;
  grid-template-columns: 140px minmax(0, 1fr) auto;
  gap: 22px;
  align-items: center;
  padding: 18px 0;
  border-bottom: 1px solid var(--color-line);
}

.item img {
  width: 140px;
  height: 92px;
  object-fit: cover;
  background: var(--color-surface-muted);
}

.item p {
  margin: 0 0 4px;
  color: var(--color-accent);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.item h3 {
  margin: 0 0 4px;
  font-size: clamp(1.2rem, 2.4vw, 2rem);
}

.item span {
  color: var(--color-ink-muted);
}

.item a {
  border-bottom: 1px solid currentColor;
  font-weight: 800;
}

@media (max-width: 720px) {
  .item {
    grid-template-columns: 96px 1fr;
  }

  .item a {
    grid-column: 2;
  }

  .item img {
    width: 96px;
    height: 72px;
  }
}
```

Create `components/home-redesign/Capabilities.tsx`:

```tsx
import { capabilities } from "@/data/capabilities";
import styles from "./Capabilities.module.scss";

export function Capabilities() {
  return (
    <section className={styles.section} id="capabilities">
      <div className="section-shell">
        <p className="section-kicker">Capabilities</p>
        <h2 className="section-title">Leadership across concept, system, site, and team.</h2>
        <div className={styles.grid}>
          {capabilities.map((capability) => (
            <article className={styles.card} key={capability.title}>
              <h3>{capability.title}</h3>
              <p>{capability.summary}</p>
              <span>{capability.proof}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
```

Create `components/home-redesign/Capabilities.module.scss`:

```scss
.section {
  padding: clamp(64px, 10vw, 130px) 0;
  background: var(--color-blue-soft);
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1px;
  margin-top: 42px;
  background: var(--color-line);
  border: 1px solid var(--color-line);
}

.card {
  min-height: 280px;
  padding: 24px;
  background: var(--color-page);
}

.card h3 {
  margin: 0 0 18px;
  font-size: 1.35rem;
  line-height: 1.05;
}

.card p {
  margin: 0 0 24px;
  color: var(--color-ink-muted);
}

.card span {
  display: block;
  color: var(--color-ink);
  font-size: 0.9rem;
}

@media (max-width: 960px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 620px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
```

Create `components/home-redesign/AboutCredibility.tsx`:

```tsx
import styles from "./AboutCredibility.module.scss";

export function AboutCredibility() {
  return (
    <section className={styles.section} id="about">
      <div className="section-shell">
        <p className="section-kicker">About</p>
        <div className={styles.layout}>
          <h2>Creative technologist and technical leader for complex experiential systems.</h2>
          <div className={styles.copy}>
            <p>
              Bryant Place brings 13+ years of global experience across permanent installations, live events,
              interactive systems, and technical direction.
            </p>
            <p>
              His work spans 40+ successful installations and shows for major brands, artists, venues, and institutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

Create `components/home-redesign/AboutCredibility.module.scss`:

```scss
.section {
  padding: clamp(64px, 10vw, 120px) 0;
  background: var(--color-surface);
}

.layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 0.7fr);
  gap: clamp(28px, 6vw, 80px);
}

.layout h2 {
  margin: 0;
  font-size: clamp(2rem, 5vw, 5rem);
  line-height: 0.95;
}

.copy {
  color: var(--color-ink-muted);
  font-size: 1.08rem;
}

.copy p {
  margin: 0 0 18px;
}

@media (max-width: 780px) {
  .layout {
    grid-template-columns: 1fr;
  }
}
```

Create `components/home-redesign/ContactCTA.tsx`:

```tsx
import Link from "next/link";
import { siteMeta } from "@/data/site";
import styles from "./ContactCTA.module.scss";

export function ContactCTA() {
  return (
    <section className={styles.section} id="contact">
      <div className="section-shell">
        <p className="section-kicker">Contact</p>
        <h2 className="section-title">Planning a permanent installation or real-time experiential system?</h2>
        <p className="section-copy">
          Available for select project leadership, creative technology, technical direction, and deployment engagements.
        </p>
        <div className={styles.actions}>
          <Link className={styles.primary} href={siteMeta.bookingUrl}>
            Book a Project Call
          </Link>
          <Link className={styles.secondary} href={`mailto:${siteMeta.email}`}>
            Email Bryant
          </Link>
        </div>
      </div>
    </section>
  );
}
```

Create `components/home-redesign/ContactCTA.module.scss`:

```scss
.section {
  padding: clamp(72px, 12vw, 150px) 0;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 32px;
}

.primary,
.secondary {
  display: inline-flex;
  align-items: center;
  min-height: 48px;
  padding: 0 18px;
  border: 1px solid var(--color-ink);
  font-weight: 800;
}

.primary {
  background: var(--color-ink);
  color: var(--color-page);
}

.secondary {
  background: transparent;
}
```

- [ ] **Step 6: Compose the homepage**

Replace `app/page.tsx` with:

```tsx
import { AboutCredibility } from "@/components/home-redesign/AboutCredibility";
import { Capabilities } from "@/components/home-redesign/Capabilities";
import { ContactCTA } from "@/components/home-redesign/ContactCTA";
import { ProjectArchive } from "@/components/home-redesign/ProjectArchive";
import { SelectedWork } from "@/components/home-redesign/SelectedWork";
import { WowHero } from "@/components/home-redesign/WowHero";

export default function HomePage() {
  return (
    <main>
      <WowHero />
      <SelectedWork />
      <ProjectArchive />
      <Capabilities />
      <AboutCredibility />
      <ContactCTA />
    </main>
  );
}
```

- [ ] **Step 7: Build and commit**

Run: `npm run build`

Expected: build completes or reports only duplicate route conflict before Task 5.

Run:

```bash
git add app/page.tsx components/home-redesign
git commit -m "feat: build redesigned homepage"
```

---

## Task 4: Flagship Case Study Routes

**Files:**

- Create: `app/work/[slug]/page.tsx`
- Create: `app/work/[slug]/work-page.module.scss`
- Modify: `data/projects.ts` only if route helpers need adjustment

- [ ] **Step 1: Create the dynamic route page**

Create `app/work/[slug]/page.tsx`:

```tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { flagshipProjects, getProjectBySlug } from "@/data/projects";
import styles from "./work-page.module.scss";

type WorkPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return flagshipProjects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: WorkPageProps): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Bryant Place`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | Bryant Place`,
      description: project.summary,
      images: [{ url: project.heroImage.src }],
    },
  };
}

export default function WorkPage({ params }: WorkPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project || !project.caseStudy) {
    notFound();
  }

  const currentIndex = flagshipProjects.findIndex((item) => item.slug === project.slug);
  const nextProject = flagshipProjects[(currentIndex + 1) % flagshipProjects.length];

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className="section-shell">
          <Link className={styles.backLink} href="/#work">
            Back to selected work
          </Link>
          <p className="section-kicker">{project.eyebrow}</p>
          <h1>{project.title}</h1>
          <p className={styles.summary}>{project.summary}</p>
        </div>
        <div className={styles.heroImage}>
          <Image
            src={project.heroImage.src}
            alt={project.heroImage.alt}
            width={1600}
            height={980}
            sizes="100vw"
            priority
          />
        </div>
      </section>

      <section className={styles.facts}>
        <div className="section-shell">
          <dl>
            <div>
              <dt>Client</dt>
              <dd>{project.client}</dd>
            </div>
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Context</dt>
              <dd>{project.context}</dd>
            </div>
            <div>
              <dt>Disciplines</dt>
              <dd>{project.disciplines.join(", ")}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className={styles.caseStudy}>
        <div className="section-shell">
          {project.caseStudy.map((section) => (
            <article key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.gallery} aria-label={`${project.title} selected images`}>
        <div className="section-shell">
          {project.images.slice(1, 5).map((image) => (
            <Image key={image.src} src={image.src} alt={image.alt} width={900} height={620} sizes="(max-width: 800px) 100vw, 50vw" />
          ))}
        </div>
      </section>

      <section className={styles.next}>
        <div className="section-shell">
          <p className="section-kicker">Next Case Study</p>
          <Link href={`/work/${nextProject.slug}`}>{nextProject.title}</Link>
        </div>
      </section>
    </main>
  );
}
```

- [ ] **Step 2: Create case-study route styles**

Create `app/work/[slug]/work-page.module.scss`:

```scss
.page {
  background: var(--color-page);
}

.hero {
  padding-top: clamp(64px, 10vw, 120px);
}

.backLink {
  display: inline-flex;
  margin-bottom: 32px;
  color: var(--color-ink-muted);
  border-bottom: 1px solid currentColor;
}

.hero h1 {
  max-width: 1000px;
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(4rem, 11vw, 11rem);
  font-weight: 900;
  letter-spacing: 0;
  line-height: 0.86;
  text-transform: uppercase;
}

.summary {
  max-width: 760px;
  margin: 28px 0 48px;
  color: var(--color-ink-muted);
  font-size: clamp(1.1rem, 2vw, 1.45rem);
}

.heroImage {
  width: min(100% - (var(--gutter) * 2), 1400px);
  margin: 0 auto;
  background: var(--color-surface-muted);
}

.heroImage img {
  width: 100%;
  height: auto;
  max-height: 760px;
  object-fit: cover;
}

.facts {
  padding: clamp(42px, 7vw, 82px) 0;
}

.facts dl {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1px;
  margin: 0;
  background: var(--color-line);
  border: 1px solid var(--color-line);
}

.facts div {
  min-height: 150px;
  padding: 18px;
  background: var(--color-surface);
}

.facts dt {
  margin-bottom: 16px;
  color: var(--color-accent);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.facts dd {
  margin: 0;
  color: var(--color-ink);
}

.caseStudy {
  padding: clamp(48px, 8vw, 96px) 0;
  background: var(--color-surface);
}

.caseStudy :global(.section-shell) {
  display: grid;
  gap: 1px;
  background: var(--color-line);
  border: 1px solid var(--color-line);
}

.caseStudy article {
  display: grid;
  grid-template-columns: minmax(180px, 0.35fr) minmax(0, 0.65fr);
  gap: 32px;
  padding: clamp(24px, 4vw, 48px);
  background: var(--color-page);
}

.caseStudy h2 {
  margin: 0;
  font-size: clamp(1.5rem, 3vw, 3rem);
}

.caseStudy p {
  margin: 0;
  color: var(--color-ink-muted);
  font-size: 1.08rem;
}

.gallery {
  padding: clamp(56px, 9vw, 110px) 0;
}

.gallery :global(.section-shell) {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.gallery img {
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  background: var(--color-surface-muted);
}

.next {
  padding: clamp(54px, 8vw, 100px) 0;
  border-top: 1px solid var(--color-line);
}

.next a {
  display: inline-flex;
  max-width: 900px;
  font-family: var(--font-display);
  font-size: clamp(3rem, 8vw, 8rem);
  font-weight: 900;
  line-height: 0.9;
  text-transform: uppercase;
}

@media (max-width: 900px) {
  .facts dl {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .caseStudy article {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .facts dl,
  .gallery :global(.section-shell) {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 3: Build and check generated routes**

Run: `npm run build`

Expected:

- Build includes static pages for `/work/google-sjt-nyc`, `/work/google-pier-57-nyc`, and `/work/adriatique-projekt-x`.
- No TypeScript error for `params.slug`.
- No missing image path errors.

- [ ] **Step 4: Commit**

Run:

```bash
git add app/work
git commit -m "feat: add flagship case study pages"
```

---

## Task 5: Remove Legacy Route Surface and Spline Path

**Files:**

- Delete: `pages/index.tsx`
- Delete: `pages/_app.tsx`
- Delete: `pages/_document.tsx`
- Delete: `pages/404.tsx`
- Keep unless unused cleanup is chosen later: `components/home/**`, `components/nav/**`
- Modify: `package.json` only if removing unused runtime dependencies is safe after build

- [ ] **Step 1: Delete legacy route files**

Delete these files:

```text
pages/index.tsx
pages/_app.tsx
pages/_document.tsx
pages/404.tsx
```

Use `git rm` so deletion is tracked.

- [ ] **Step 2: Run build**

Run: `npm run build`

Expected:

- No duplicate route conflict for `/`.
- App Router homepage builds.
- App Router not-found page builds.

- [ ] **Step 3: Check for active Spline imports**

Run: `rg '@splinetool|spline|Application' app components data pages`

Expected:

- No matches under `app/`, `components/home-redesign/`, `components/site/`, or `data/`.
- Matches in old unused `components/home/Home.tsx` are acceptable only if that file is not imported anywhere.

- [ ] **Step 4: Check imports of legacy homepage**

Run: `rg 'components/home|components/nav|ProjectModal|emailjs|react-toastify' app components/site components/home-redesign data`

Expected:

- No matches.

- [ ] **Step 5: Commit**

Run:

```bash
git add -u pages
git commit -m "refactor: remove legacy pages router routes"
```

---

## Task 6: Polish Navigation, Accessibility, and Metadata

**Files:**

- Modify: `components/site/SiteHeader.tsx`
- Modify: `components/site/SiteHeader.module.scss`
- Modify: `components/site/SiteFooter.tsx`
- Modify: `app/layout.tsx`
- Modify: `app/work/[slug]/page.tsx`

- [ ] **Step 1: Add skip link to header**

Update `SiteHeader.tsx` to include:

```tsx
<a className={styles.skipLink} href="#main-content">
  Skip to content
</a>
```

Place it as the first child inside `<header>`.

- [ ] **Step 2: Add skip-link styles**

Add to `SiteHeader.module.scss`:

```scss
.skipLink {
  position: absolute;
  left: var(--gutter);
  top: 8px;
  z-index: 100;
  padding: 8px 10px;
  background: var(--color-ink);
  color: var(--color-page);
  transform: translateY(-140%);
}

.skipLink:focus {
  transform: translateY(0);
}
```

- [ ] **Step 3: Add main content IDs**

Change `app/page.tsx` from:

```tsx
<main>
```

to:

```tsx
<main id="main-content">
```

Change `app/work/[slug]/page.tsx` from:

```tsx
<main className={styles.page}>
```

to:

```tsx
<main className={styles.page} id="main-content">
```

- [ ] **Step 4: Add structured person JSON-LD**

In `app/layout.tsx`, add this inside `<body>` before `<SiteHeader />`:

```tsx
<script
  type="application/ld+json"
  suppressHydrationWarning
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Bryant Place",
      jobTitle: "Creative Technologist",
      url: siteMeta.url,
      sameAs: siteMeta.socials.map((social) => social.href),
    }),
  }}
/>
```

- [ ] **Step 5: Build and commit**

Run: `npm run build`

Expected: build passes.

Run:

```bash
git add app components/site
git commit -m "chore: polish navigation and metadata"
```

---

## Task 7: Final Verification

**Files:**

- Modify only files required by verification fixes.

- [ ] **Step 1: Run lint**

Run: `npm run lint`

Expected: no lint errors. If `next lint` reports deprecation only, record the warning and continue after confirming no lint failures.

- [ ] **Step 2: Run production build**

Run: `npm run build`

Expected: build passes.

- [ ] **Step 3: Start dev server**

Run: `npm run dev`

Expected: Next dev server starts and prints a local URL, usually `http://localhost:3000`.

- [ ] **Step 4: Browser-check pages**

Open:

```text
http://localhost:3000/
http://localhost:3000/work/google-sjt-nyc
http://localhost:3000/work/google-pier-57-nyc
http://localhost:3000/work/adriatique-projekt-x
```

Expected:

- Homepage loads with Wow hero, selected work, archive, capabilities, about, and contact.
- All three project pages load.
- No modal behavior remains for flagship projects.
- Header links navigate to homepage anchors.
- Booking CTA uses the placeholder mail link.
- Email CTA opens a mail link.

- [ ] **Step 5: Mobile viewport check**

Check at 390px width:

- Wow hero text wraps without overlap.
- Selected work cards stack cleanly.
- Archive rows remain readable.
- Capabilities stack to one column.
- Project page facts and gallery stack cleanly.
- Header navigation wraps without covering content.

- [ ] **Step 6: Reduced-motion check**

In browser devtools, emulate `prefers-reduced-motion: reduce`.

Expected:

- Wow hero remains readable.
- GSAP scroll reveal does not hide content.
- No essential content depends on animation.

- [ ] **Step 7: Commit verification fixes**

If verification required fixes, commit them:

```bash
git add app components data styles
git commit -m "fix: resolve redesign verification issues"
```

If no fixes were required, do not create an empty commit.

---

## Self-Review Notes

Spec coverage:

- App Router migration: Tasks 1, 4, and 5.
- Light soft-technical visual system: Tasks 1 and 3.
- Reworked scroll-driven Wow hero: Task 3.
- Three flagship projects and pages: Tasks 2 and 4.
- Archive projects without pages: Tasks 2 and 3.
- Capabilities, concise about, and contact CTA: Tasks 2 and 3.
- Vercel Analytics and metadata: Tasks 1 and 6.
- No Spline launch path: Task 5.
- Typed content files for easy updates: Task 2.
- Verification: Task 7.

Deferred decisions:

- Exact final typography pairing remains an implementation decision because the approved spec explicitly deferred it.
- Exact booking URL remains a placeholder until selected.
- Package dependency cleanup is intentionally not required for launch unless imports or build behavior require it.
