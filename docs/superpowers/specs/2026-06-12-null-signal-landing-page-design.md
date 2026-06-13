# null_signal Landing Page — Design

**Date:** 2026-06-12 · **Route:** `/null-signal` · **Approach:** Long-scroll landing page styled as the instrument (approved)

## Goal

A landing page for null_signal — a generative VJ instrument being open-sourced as a gift to the live visuals community — at `bryantplace.com/null-signal`. Complete visual departure from the main site: dark minimal techno, matching the app's own UI.

## Architecture

- **Route group restructure:** existing pages move into `app/(main)/` with a `layout.tsx` that owns `SiteHeader`/`SiteFooter`. Root `app/layout.tsx` keeps only html/body, global metadata, JSON-LD, Analytics. URLs unchanged. `/null-signal` lives outside the group → no site chrome.
- **Page:** `app/null-signal/page.tsx` (server component) + `null-signal.module.scss`, own metadata (title, description, OG image from hero screenshot).
- **Data:** `data/null-signal.ts` — features, credits, screenshot manifest. Page is data-driven like the rest of the site.
- **Nav:** add `{ label: "null_signal", href: "/null-signal" }` to `navItems` in `data/site.ts`.
- **Images:** screenshots from `~/projects/null_signal_screenshots/` renamed (kebab-case) and resized (max 1920w) into `public/project-imgs/null-signal/`, served via `next/image`.

## Visual language (from the app's `src/styles.css`)

`#000` bg · `#00ffff` cyan accents with glow · `#ecfff7` text · dimmed `rgba(186,230,236,.68)` · `#ff2244`/`#00ff88` status dots only · cut-corner panels (clip-path) · 1px borders · uppercase monospace labels · subtle 34px grid texture · scanlines. Fonts via `next/font/google`: Audiowide (display), Quantico (UI), Silkscreen (labels) — scoped to this page.

## Sections

1. **Hero** — `null_signal` wordmark, "generative VJ instrument" tagline, full-UI screenshot (3436×2152), GitHub button + FREE & OPEN SOURCE badge.
2. **Features grid** — 6 panels: 69 visual modes / 4-layer compositing + 13 blends / audio reactivity + tap tempo / MIDI learn / 64 presets + scene sequencer / master FX chain. Backed by matching screenshots.
3. **AI section** — ORACLE / INTERPRETER / LISTEN with local-LLM settings screenshot.
4. **Output** — fullscreen output/REC screenshot, full-bleed.
5. **Credits** — mode designers from the repo's `CREDITS.txt`, terminal-style list + demo-loop audio credit (djfroyd, CC-BY 3.0).
6. **CTA footer** — live GitHub button → `github.com/cyberpatrolunit/null-signal` (404s until repo flips public — accepted), Win/Mac availability badges, `← bryantplace.com` link home.

## Out of scope (YAGNI)

Downloads hosting, video embeds, newsletter, analytics beyond existing Vercel Analytics, near-duplicate screenshots (~10 of 16 used).

## Verification & deploy

`npm run build` passes; existing routes unaffected (URLs identical post-restructure). Commit and push → Vercel auto-deploy for mobile review.

## Post-launch updates

- **2026-06-12** — Wordmark/headers switched to Geostar Fill (the app's actual `.app-title` font, with Geo fallback). Static CSS grid replaced by `GridField.tsx` — an interactive dot field at 34px intersections that shifts cyan→red near the pointer with a fading trail (full-viewport canvas, idles when the pointer rests, respects reduced motion). Added `null_signal` nav chip on the main site, a build-time branded OG share card (`opengraph-image.tsx`), and a route-scoped black document backdrop so mobile overscroll doesn't expose the light main-site background.
- **2026-06-13** — Feature 05 (PRESETS + SCENES) screenshot swapped from the full `control-deck.png` to a dedicated `presets.png` (preset memory bank with bank tabs and scene slots) for a clearer, more focused panel.
