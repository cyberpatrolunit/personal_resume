# Bryant Place Portfolio

Personal portfolio website for Bryant Place, focused on creative technology, experiential systems, interactive installations, digital storytelling, and production leadership.

The site is built as a single-page Next.js portfolio with project case studies, a contact form, scroll-triggered motion, and a custom animated starfield background.

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- SCSS modules
- Framer Motion
- GSAP / ScrollTrigger
- EmailJS contact form
- Vercel Analytics

## Notable Features

- Custom responsive portfolio layout with project case-study modals
- Local animated starfield background with scroll-responsive stars and occasional shooting stars
- Reduced-motion handling for decorative background animation
- Image-forward project presentation with slideshow transitions
- Contact form powered by EmailJS
- Local Slussen font files served from `public/fonts`

## Getting Started

Install dependencies:

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

Create `.env.local` in the project root for the contact form:

```sh
NEXT_PUBLIC_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_PUBLIC_KEY=your_emailjs_public_key
```

## Scripts

```sh
npm run dev
```

Starts the Next.js development server.

```sh
npm run build
```

Creates a production build and runs type/lint checks as part of the Next.js build pipeline.

```sh
npm run start
```

Starts the production server after a successful build.

```sh
npm run lint
```

Runs the Next.js lint command.

## Project Structure

```text
components/
  home/
    background/     Custom starfield and shooting-star background
    projects/       Project cards and case-study modal
    contact/        Contact section and EmailJS form
    about/          About and stats sections
    hero/           Hero typography and visual mark
  nav/              Sidebar and header navigation
  utils/            Shared reveal/loader/header utilities
pages/              Next.js page entry points
public/             Fonts, profile photos, project media, icons
styles/             Global CSS, font declarations, variables
```

## Deployment

The project is linked to Vercel and can be deployed with:

```sh
npx vercel --yes
```

Production deployment:

```sh
npx vercel --prod
```

## Notes

- Decorative background animation is implemented in `components/home/background`.
- The project detail experience is implemented in `components/home/projects/ProjectModal.tsx`.
- Project data currently lives in `components/home/projects/Projects.tsx`.
- The contact form requires valid EmailJS environment variables to send email.

## License

See [LICENSE](./LICENSE).
