# appdev.kolawoles.com

Full-Stack Engineering portfolio — the App Dev vertical of the Kolawoles ecosystem.

## Stack

- **Next.js 14** (App Router)
- **Framer Motion** — scroll-triggered animations, entrance sequences
- **Tailwind CSS**
- **Syne + DM Sans** via `next/font/google`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Structure

```
src/
  app/
    layout.tsx      # Root layout, fonts, metadata
    page.tsx        # Full page — Hero, Projects, Stack, About, Contact
    globals.css     # CSS variables (orange accent), base styles
  components/
    Cursor.tsx      # Spring-animated custom cursor
    Nav.tsx         # Fixed nav with section links
```

## Sections

- **Hero** — Headline, description, CTAs, scroll indicator
- **Projects** — 5 projects (majorsegun.com, HBGI portal, admin.kolawoles.com, Grill & Glam, Worship tool)
- **Stack** — 6 categories: Frontend, Backend, Database, Auth & Services, DevOps, Languages
- **About** — Bio paragraph
- **Contact** — CTA card with email link

## Accent Color

Orange: `#f07040` — defined as `--accent` in `globals.css`. Change once, updates everywhere.

## Deploy

Push to GitHub, connect to Vercel. Set custom domain to `appdev.kolawoles.com`.
