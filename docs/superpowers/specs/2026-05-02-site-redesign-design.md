# Site Redesign Design

Date: 2026-05-02
Branch: `redesign-site-rework`

## Goal

Rework Bryant Place's portfolio into a client-focused case-study site for high-end experiential and permanent installation clients. The site should quickly communicate that Bryant can lead complex experiential technology from concept through reliable real-world execution.

The first redesign will use existing content and assets from the public `personal_resume` repo and the sibling `private_personal_resume` repo. New copy, new imagery, booking tooling, and future generative backgrounds are out of scope for the first pass unless needed to complete the approved structure.

## Audience

Primary audience: high-end experiential, installation, and live environment clients evaluating Bryant for project leadership, creative technology, real-time systems, and deployment execution.

The first ten seconds of the site should communicate:

- Bryant can lead complex experiential technology from concept to execution.
- Bryant builds technically ambitious interactive systems that work in real-world environments.

## Recommended Approach

Use a client-focused case-study site with a concise homepage and dedicated flagship project pages.

This approach combines:

- Strong first impression and proof through selected work.
- Clear client-facing capabilities.
- Dedicated, shareable case-study pages for the strongest projects.
- A maintainable TypeScript data structure for future project updates.

The design should borrow some clarity from a technical studio site, especially in case-study pages and capabilities, but should not become a dashboard or technical documentation site.

## Site Structure

Use the Next.js App Router.

Routes:

- `/`
- `/work/google-sjt-nyc`
- `/work/google-pier-57-nyc`
- `/work/adriatique-projekt-x`

Homepage order:

1. Reworked scroll-driven Wow hero
2. Selected Work: three flagship project previews
3. Project Archive: compact list or grid of remaining work
4. Capabilities
5. About / credibility
6. Contact CTA

Flagship projects:

- Google: SJT NYC
- Google: Pier 57 NYC
- Adriatique: Projekt X

Archive projects stay on the homepage only for launch. They should not get dedicated pages in this iteration.

## Visual Direction

Use a soft technical / premium cinematic visual direction.

Principles:

- Move away from the current black and neon-green dominant identity.
- Use a light, clean base with off-white, pale gray, precise line work, and muted blue/green accents.
- Let project imagery provide most of the drama and color.
- Keep the interface efficient and polished.
- Avoid decorative complexity that competes with project work.

Typography:

- Decide during visual implementation whether to keep Slussen.
- Test Slussen as a display accent.
- Use a clean, readable body/UI type system.
- Prioritize readability on project pages and mobile.

## Interaction Direction

Remove Spline from the launch path. Do not use load-blocking 3D.

Use GSAP selectively:

- Reworked Wow hero text reveal
- Section entrance polish where useful
- Subtle project transition or reveal effects

The Wow hero should be scroll-driven only. Do not add an automatic intro loop for launch.

Respect `prefers-reduced-motion`. Reduced-motion users should receive static readable content with no loss of information.

Project clicks should navigate to dedicated project pages, not open modals.

## Wow Hero

The current `components/home/wow` idea should be reworked rather than copied directly.

The redesigned hero should:

- Lead the homepage before selected projects.
- Use 3-4 paired positioning lines instead of the current longer list.
- Tie the copy directly to client trust and real-world execution.
- Create visual impact through typography, spacing, and scroll reveal.
- Avoid load blocking, heavy loops, and distracting hover-only behavior.

Candidate phrase pairs:

- `CREATIVE DIRECTION` / `TECHNICAL EXECUTION`
- `EXPERIENTIAL CONCEPTS` / `REAL-WORLD SYSTEMS`
- `PUBLIC INSTALLATIONS` / `FIELD-READY DEPLOYMENT`
- `CINEMATIC MOMENTS` / `RELIABLE INFRASTRUCTURE`

## Content Model

Move content into typed TypeScript data files so new projects are easy to add.

Recommended data groups:

- `flagshipProjects`
- `archiveProjects`
- `capabilities`
- `siteMeta`

`flagshipProjects` should power both homepage previews and dedicated case-study pages.

`archiveProjects` should power compact archive entries only.

`siteMeta` should include navigation, social links, email, and a placeholder booking URL.

## Flagship Project Pages

Tone: hybrid. Start with an executive summary, then include a concise technical/process section.

Each page should include:

1. Hero with project title, role, short summary, and strongest image
2. At-a-glance facts: client/context, role, discipline, year if available, tools where useful
3. Executive case study:
   - Challenge
   - Approach
   - Outcome
4. Selected images
5. Related or next project link
6. Contact CTA

The pages should be concise and client-friendly. They should prove leadership and execution without becoming long technical reports.

## Homepage Sections

### Selected Work

Feature the three flagship projects prominently:

- Google: SJT NYC
- Google: Pier 57 NYC
- Adriatique: Projekt X

Each preview should include:

- Strong image
- Title
- Role or client context
- One-sentence outcome or value summary
- Link to the dedicated project page

### Archive

Show breadth without overwhelming the homepage.

Archive entries should include:

- Title
- Short description
- Role or tech tags
- Thumbnail where available
- External link where available

Initial archive candidates:

- Nike NMS Experience
- NEWAVE: Flying Art UAP
- The Coachella Gateway
- The Coachella Lightweaver
- Fiat Lux: Illuminating our Common Home
- CNN: Road to 270
- Dubai 360: Spherical Projection Theater
- illUmiNations: Protecting Our Planet
- Amon Tobin: ISAM Live

### Capabilities

Capabilities should be prominent after selected work and archive.

Primary groups:

- Creative Direction & Experience Design
- Real-Time Systems & Interactive Software
- Permanent Installation Deployment
- Technical Leadership & Team Coordination

Each capability should make clear what Bryant can own for a client. Use direct, outcome-oriented copy based on existing project material.

### About

Keep About concise. It should support credibility rather than act as the main sales section.

Include:

- Bryant's positioning as a creative technologist and technical leader
- 13+ years of global experience
- 40+ interactive installations and live event shows
- Current/recent leadership context from existing content

### Contact

Use a primary booking CTA placeholder and a direct email fallback.

Primary CTA:

- `Book a Project Call`
- Placeholder booking URL until a booking tool is chosen

Secondary CTA:

- `Email Bryant`

Contact copy should invite permanent installations, interactive environments, real-time systems, and live experiential work.

## Technical Plan

Migrate from `pages/` to `app/`.

Implementation should:

- Keep Vercel deployment.
- Use `next/image` for project imagery.
- Remove Spline runtime from the launch path.
- Replace modal-based project detail with dedicated flagship routes.
- Keep the code easy to update through typed content files.
- Use GSAP only where it materially improves the experience.
- Preserve or reorganize SCSS/CSS based on what best fits the new App Router structure.
- Add metadata for homepage and project pages.

## Constraints

- Use existing content and assets for the first pass.
- No new visual assets are required before implementation.
- Keep deployment on Vercel.
- Keep some polished GSAP motion, but reduce processing load compared with the current site.
- Make adding a new project soon straightforward.
- Do not add a CMS for launch.
- Do not add Spline or another load-blocking 3D experience for launch.

## Verification Plan

Before considering implementation complete:

- Run `npm run lint` if available.
- Run `npm run build`.
- Browser-check the homepage and all three flagship pages.
- Check mobile viewport behavior for hero, selected work, archive, navigation, and contact.
- Check browser console for runtime errors.
- Confirm reduced-motion users get readable static content.

## Open Implementation Decisions

These are intentionally deferred until implementation:

- Whether Slussen remains as display typography.
- Exact light palette values.
- Exact booking URL.
- Whether to keep npm lockfile behavior as-is or normalize it.
