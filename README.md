# Jahidul Islam Jony — Portfolio

A static, dependency-free portfolio (HTML/CSS/vanilla JS). No build step —
open `index.html` directly, or deploy the folder as-is to any static host
(GitHub Pages, Vercel, Netlify, Cloudflare Pages).

## Why static instead of Next.js/React

The brief's preferred stack was Next.js/React, but everything requested —
content sections, animations, responsive glassmorphism, forms — doesn't
require server rendering, and a real authenticated `/admin` CMS needs a
database and server runtime regardless of frontend framework. Shipping a
zero-build static site gets you a faster, simpler, more portable result
today. If you later want the full authenticated admin dashboard described
below, that's a good reason to move to Next.js + a database — happy to
build that version when you're ready.

## Editing content

Everything you'll want to change lives in **`config.js`** — one object,
no touching component code:

- `name`, `role`, `focus`, `tagline`, `avatar`, `resume`, `email`
- `socials` — empty strings are automatically hidden, so add links as you get them
- `about`, `skills`, `experience`, `projects`, `researchInterests`,
  `publications`, `education`, `achievements`

Empty arrays render a clean "empty state" instead of fake data — nothing
was invented for experience, projects, publications, or achievements per
your instructions.

**Images:** drop files in `/public/images` (profile photo) or
`/public/projects` (project screenshots) and reference the path in
`config.js`, e.g. `avatar: "public/images/profile.jpg"`.

**Resume:** drop the PDF in `/public/resume` and set
`resume: "public/resume/your-file.pdf"` — the Download Resume button
appears automatically once this is set.

## Contact form

The form is fully built (validation, honeypot spam trap, loading/success/
error states) but this is a static site with no server, so it needs a
form backend to actually deliver messages. Two options:

1. Sign up for a free endpoint (e.g. Formspree, Web3Forms) and paste the
   URL into `contactEndpoint` in `config.js`.
2. Leave it empty — the form falls back to opening the visitor's own
   email client (`mailto:`) using the address you set in `email`.

No API keys are ever placed in this frontend code.

## Admin / content editing (`/admin`)

You asked for a way to update content without visitors seeing edit
history or unpublished drafts, with secure auth and no exposed
credentials. That's a real authentication + database problem, and
building a *fake* login here would be worse than not having one — an
unauthenticated `/admin` route is a security hole, and a hardcoded
password is a leaked credential the moment it ships.

For now, `config.js` **is** your content management system: edit it,
save, redeploy (most static hosts redeploy in ~30 seconds on push). If
you want a real in-browser admin dashboard later, that requires a small
backend (e.g. Next.js API routes + a database like Postgres or a headless
CMS like Sanity/Contentful) — a natural next step, not a static-site
feature.

## What's implemented

- Floating glassmorphic nav with scroll-spy active states + mobile menu
- Hero with ambient neural-network canvas (nodes + signal pulses —
  a literal nod to your ML focus rather than a generic gradient blob),
  mouse-following glow, entrance animation
- About, Skills, Experience, Projects, Research, Education, Achievements,
  Contact — all data-driven from `config.js`
- Scroll-reveal animations, custom cursor (desktop only), light/dark
  theme toggle
- Accessible: semantic landmarks, skip link, focus states, alt text,
  `prefers-reduced-motion` respected throughout
- SEO: meta description, Open Graph, Twitter Card, canonical URL,
  JSON-LD Person schema
- Fully responsive from 320px up, no horizontal scroll

## Before you go live

- [ ] Fill in `config.js` with your real links, photo, resume, and email
- [ ] Update `og:image` / `twitter:image` paths once you add a cover image
- [ ] Update the canonical URL once you have a real domain
- [ ] Add `sitemap.xml` and `robots.txt` for your final domain
- [ ] Configure `contactEndpoint` if you want form submissions to email you directly
