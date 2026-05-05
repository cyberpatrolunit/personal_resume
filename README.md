# Bryant Place Portfolio

Personal portfolio website for Bryant Place, focused on creative technology leadership, experiential systems, permanent installations, real-time media, interactive environments, and deployment-ready technical work.

The current site is a Next.js App Router portfolio with a redesigned single-page home experience, project case-study pages, local Slussen display fonts, canvas halftone fields, scroll-aware scramble text, and Vercel hosting for `https://www.bryantplace.com`.

## Quick Start

Use Node with the dependencies already installed in `node_modules` when working offline. If you have a fresh clone and internet access, install first:

```sh
npm install
```

Run the local development server:

```sh
npm run dev
```

Open:

```text
http://localhost:3000
```

If port `3000` is already in use, Next.js will usually move to `3001`. Stop the dev server with `Ctrl+C`.

## Scripts

```sh
npm run dev
```

Starts the Next.js development server.

```sh
npm run build
```

Creates a production build and runs Next.js type/lint checks. Stop `npm run dev` before running this; running `next dev` and `next build` at the same time can race over the `.next` directory and produce temporary manifest errors.

```sh
npm run start
```

Starts the production server after a successful build.

```sh
npm run lint
```

Runs the Next.js lint command.

Focused local tests:

```sh
node --test test/typography-css.test.cjs test/scramble-text.test.cjs test/halftone-field.test.cjs
```

## Tech Stack

- Next.js 14 App Router
- React 18
- TypeScript
- SCSS modules
- GSAP / ScrollTrigger
- Vercel Analytics
- Local Slussen font files
- Node's built-in test runner for small regression tests

Some older dependencies remain in `package.json` from the previous site version. The active redesigned surface mainly uses the files documented below.

## Current Project Structure

```text
app/
  layout.tsx                    Root shell, metadata, JSON-LD, header/footer, analytics
  page.tsx                      Home page section composition
  not-found.tsx                 App Router 404 page
  work/[slug]/page.tsx          Dynamic case-study pages
  work/[slug]/work-page.module.scss

components/
  effects/
    HalftoneField.tsx           Canvas halftone renderer
    halftoneMath.js             Testable halftone color/radius helpers
    ScrambleText.tsx            Reveal/type-on scramble text component
    scrambleFrame.js            Testable scramble frame helpers

  home-redesign/
    WowHero.tsx                 Top hero and capability-line animation
    SelectedWork.tsx            Featured project cards
    ProjectArchive.tsx          Archive list
    Capabilities.tsx            Capability cards
    AboutCredibility.tsx        About/credibility section
    ContactCTA.tsx              Final contact section
    *.module.scss               Section-level layout, gradients, halftone overrides

  site/
    SiteHeader.tsx              Sticky header and nav
    SiteFooter.tsx              Footer links and summary

data/
  site.ts                       Metadata, nav items, email/social links
  projects.ts                   Featured projects, archive projects, case-study content
  capabilities.ts               Capability card content

styles/
  app-globals.scss              Active global styles, colors, gradients, typography, halftone defaults
  _fonts.scss                   Slussen @font-face declarations
  globals.css                   Older/global utility CSS still present
  _*.scss                       Older shared style helpers still present

public/
  fonts/                        Local Slussen font files
  project-imgs/                 Portfolio media
  profile/                      Profile images
  manifest.json                 Web app manifest
  bp_logo.ico                   Site icon

test/
  halftone-field.test.cjs       Halftone math tests
  scramble-text.test.cjs        Scramble/type-on tests
  typography-css.test.cjs       CSS/structure regression tests
```

## Home Page Flow

`app/page.tsx` renders the homepage in this order:

```tsx
<WowHero />
<SelectedWork />
<ProjectArchive />
<Capabilities />
<AboutCredibility />
<ContactCTA />
```

Each section owns its local SCSS module inside `components/home-redesign/`. Shared page-wide styles come from `styles/app-globals.scss`.

## Where To Edit Common Things

Site title, description, canonical URL, email, nav, and social links:

```text
data/site.ts
```

Featured project cards and case-study pages:

```text
data/projects.ts
```

The first three entries in `flagshipProjects` appear in Selected Work and get full `/work/[slug]` case-study pages. Project shape:

```ts
{
  slug: "google-sjt-nyc",
  title: "Google: SJT NYC",
  eyebrow: "Permanent workplace installations",
  summary: "...",
  role: "...",
  client: "...",
  context: "...",
  disciplines: ["..."],
  tools: ["..."],
  projectLink: "https://...",
  heroImage: { src: "/project-imgs/...", alt: "..." },
  images: [{ src: "/project-imgs/...", alt: "..." }],
  caseStudy: [
    { heading: "Challenge", body: "..." },
    { heading: "Approach", body: "..." },
    { heading: "Outcome", body: "..." },
  ],
}
```

Archive list items:

```text
data/projects.ts
```

Edit `archiveProjects`.

Capability cards:

```text
data/capabilities.ts
```

Capabilities section heading:

```text
components/home-redesign/Capabilities.tsx
```

Contact headline and buttons:

```text
components/home-redesign/ContactCTA.tsx
data/site.ts
```

Header nav:

```text
data/site.ts
components/site/SiteHeader.tsx
components/site/SiteHeader.module.scss
```

Footer:

```text
components/site/SiteFooter.tsx
components/site/SiteFooter.module.scss
data/site.ts
```

Metadata and Open Graph image:

```text
app/layout.tsx
data/site.ts
public/project-imgs/thumbnail.jpg
```

## Gradients And Halftones

Global gradient tokens live in:

```text
styles/app-globals.scss
```

Look for:

```scss
--gradient-wow
--gradient-work
--gradient-archive
--gradient-capabilities
--gradient-about
--gradient-contact
--gradient-case
```

Default CSS halftone variables also live in `styles/app-globals.scss`:

```scss
--halftone-color-a
--halftone-color-b
--halftone-dot-a
--halftone-dot-b
--halftone-size-a
--halftone-size-b
--halftone-opacity-a
--halftone-opacity-b
--halftone-angle-a
--halftone-angle-b
```

Sections can override those variables at the top of their SCSS module:

```text
components/home-redesign/SelectedWork.module.scss
components/home-redesign/ProjectArchive.module.scss
components/home-redesign/Capabilities.module.scss
components/home-redesign/AboutCredibility.module.scss
```

The animated/canvas halftones are `HalftoneField` instances. Tweak their props in the section components:

```tsx
<HalftoneField
  colors={["#f7f4ff", "#d9ebe5", "#edf7f2", "#f9faf6"]}
  spacing={17}
  minRadius={0.55}
  maxRadius={8}
  angle={0}
  toneAngle={0}
/>
```

Useful knobs:

- `colors`: sampled gradient palette for dots
- `spacing`: distance between dot centers
- `minRadius` / `maxRadius`: dot size range
- `angle`: dot grid rotation
- `toneAngle`: hue offset for tonal variation

Math helpers are in `components/effects/halftoneMath.js` and covered by `test/halftone-field.test.cjs`.

## Typography

Active font setup:

```text
styles/_fonts.scss
styles/app-globals.scss
public/fonts/
```

Current direction:

- Body, header, general headings, section titles: `--font-body`
- Display accent moments: `--font-wide`, which maps to `Slussen.Exp`
- Legacy Slussen faces remain available in `public/fonts`

Global font variables:

```scss
--font-display: "Slussen.Comp", "Arial Narrow", Arial, sans-serif;
--font-wide: "Slussen.Exp", "Arial Black", Arial, sans-serif;
--font-body: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

If a mobile text block overflows, first check whether it uses `--font-wide`; wide Slussen needs tighter mobile sizing.

## Scramble Text Animation

The reusable component is:

```text
components/effects/ScrambleText.tsx
```

Frame logic is in:

```text
components/effects/scrambleFrame.js
```

Modes:

```tsx
<ScrambleText text="Bryant Place" mode="reveal" />
<ScrambleText text="Creative Direction" mode="type-on" />
```

- `mode="reveal"` keeps the full string width present and resolves random placeholders into final text.
- `mode="type-on"` starts empty, types the visible slice on, preserves spaces, and scrambles a trailing moving window.

Useful props:

```tsx
<ScrambleText
  text="Field-Ready Deployment"
  mode="type-on"
  duration={1240}
  delay={120}
  trigger="view"
  viewportAmount={0.72}
  viewportMargin="0px 0px -38% 0px"
/>
```

- `duration`: animation duration in milliseconds
- `delay`: delay after trigger, in milliseconds
- `trigger`: `"view"` or `"mount"`
- `viewportAmount`: IntersectionObserver threshold
- `viewportMargin`: IntersectionObserver root margin

Wow hero line animations are in:

```text
components/home-redesign/WowHero.tsx
```

Tests:

```sh
node --test test/scramble-text.test.cjs
```

## Case Studies

Dynamic case-study route:

```text
app/work/[slug]/page.tsx
```

Case-study styles:

```text
app/work/[slug]/work-page.module.scss
```

Case-study content comes from `flagshipProjects` in `data/projects.ts`. A project can include:

- hero image
- summary
- facts
- challenge / approach / outcome sections
- gallery images
- next-project navigation

If a slug does not exist, the route calls `notFound()`.

## Images And Media

Use files under:

```text
public/project-imgs/
```

Refer to them with root-relative URLs:

```ts
src: "/project-imgs/sjt/sjt-00.jpg"
```

Recommended image habits:

- Keep descriptive `alt` text in `data/projects.ts`.
- Prefer project-specific folders.
- Use JPG/PNG/GIF already present unless there is a strong reason to add another format.
- Avoid committing `.DS_Store`; it is ignored at the repo root, but one nested file has appeared before.

## Styling Conventions

- Active redesigned sections use SCSS modules in `components/home-redesign/`.
- Shared color/type/layout tokens live in `styles/app-globals.scss`.
- Repeated section width is handled by `.section-shell`.
- Section kicker/title/copy classes are global utilities:

```scss
.section-kicker
.section-title
.section-copy
```

- Section modules should own section-specific layout, spacing, and local overrides.
- Keep decorative effects behind content and non-interactive.
- Respect `prefers-reduced-motion`; `ScrambleText` and `HalftoneField` already account for reduced motion behavior.

## Tests And Verification

Run focused regression tests:

```sh
node --test test/typography-css.test.cjs test/scramble-text.test.cjs test/halftone-field.test.cjs
```

Run production build:

```sh
npm run build
```

Clean verification sequence:

```sh
# Stop dev server first if it is running.
node --test test/typography-css.test.cjs test/scramble-text.test.cjs test/halftone-field.test.cjs
npm run build
npm run dev
curl -I http://localhost:3000
```

Expected local response:

```text
HTTP/1.1 200 OK
```

## Git Workflow

Check status:

```sh
git status --short
```

Review changes:

```sh
git diff
git diff --stat
```

Stage intended files only:

```sh
git add path/to/file
```

Commit:

```sh
git commit -m "Describe the change"
```

Push current branch:

```sh
git push origin <branch-name>
```

Push main:

```sh
git push origin main
```

Known local noise that should usually not be committed:

```text
public/project-imgs/.DS_Store
next-env.d.ts
```

`next-env.d.ts` can change its documentation comment depending on the installed Next.js version. If only that comment changed, it is usually not meaningful.

## Deployment

Production is served through Vercel:

```text
https://www.bryantplace.com
```

The GitHub repository is:

```text
https://github.com/cyberpatrolunit/personal_resume
```

Main branch pushes trigger Vercel deployments through the GitHub integration. After pushing, check:

```sh
curl -I https://www.bryantplace.com
```

Expected:

```text
HTTP/2 200
server: Vercel
```

The Vercel project has also been seen at:

```text
https://personal-resume-kohl.vercel.app
```

Preview deployment URLs may be protected by Vercel authentication. The custom domain is the public production target.

If Vercel CLI is available:

```sh
npx vercel --prod
```

In this working environment, the Vercel GitHub integration has been the reliable production path.

## Offline Work Checklist

Before a long offline session, make sure you have:

- `node_modules/` present
- `package-lock.json` present
- project images in `public/project-imgs/`
- local fonts in `public/fonts/`
- this README
- the latest `main` branch

Useful offline commands:

```sh
npm run dev
node --test test/typography-css.test.cjs test/scramble-text.test.cjs test/halftone-field.test.cjs
npm run build
git diff
git status --short
```

Work that is easy offline:

- copy/content edits in `data/*.ts`
- section styling in `components/home-redesign/*.module.scss`
- gradient and halftone tuning in `styles/app-globals.scss`
- image swaps using already-downloaded files in `public/project-imgs/`
- animation timing changes in `ScrambleText.tsx` and `WowHero.tsx`

Work that may need internet:

- installing new packages
- adding remote fonts
- deploying to Vercel
- pulling latest Git changes
- checking external links or social previews

## Design Notes

Current visual direction:

- Quiet portfolio structure with dense project information.
- Pale section gradients and subtle halftone texture.
- Slussen only as a deliberate display accent.
- Inter/system sans for legibility and mobile fit.
- Homepage hero uses type-on scramble text that waits for viewport entry.
- Project imagery should remain real and inspectable, not decorative filler.

## Historical Docs

Redesign planning documents are in:

```text
docs/superpowers/specs/
docs/superpowers/plans/
```

These are useful for understanding why the redesign moved toward:

- App Router
- data-driven project content
- pastel section gradients
- halftone fields
- Slussen as a display accent
- scramble/type-on reveal behavior

## License

See [LICENSE](./LICENSE).
