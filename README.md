# Anika Mehendiratta — a Netflix-inspired portfolio

A dark, cinematic portfolio for **Anika Mehendiratta** (Growth & Commercial
Marketing Manager) that opens like a premium streaming service: a dramatic
animated "A" intro, a Netflix-Original hero, horizontally-scrolling "title"
rows, and case-study pages that feel like opening a featured show.

Built with **React + Vite + Framer Motion + Lenis** smooth scroll. No heavy UI libraries.

> **All text content is real, taken from Anika's CV.** The only placeholders are
> visual assets — see "Replace the placeholders" below.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:5177
npm run build    # production build → dist/
npm run preview  # preview the production build
```

> Node.js 18+ required.

---

## Make it yours — edit ONE file

Everything personal lives in **[`src/data/content.js`](src/data/content.js)**.
You don't need to touch any component to rebrand the whole site:

| What | Where in `content.js` |
|------|------------------------|
| Your name, title, tagline, socials | `profile` |
| The big intro letter | derived from `profile.firstName[0]` |
| Hero & portrait images | `profile.heroImage`, `profile.portrait` |
| About-page counters | `stats` |
| Projects (cards + detail pages) | `projects[]` |
| Which rows appear on the home page | `rows[]` |
| Skills / "genres" | `skillCollections` |
| Résumé as seasons & episodes | `seasons[]` |
| Contact / credits copy | `contact` |

### Replace the placeholders (visual assets only)
Everything textual is real CV content. Swap these for Anika's real assets by
dropping files in **`public/`** and referencing them with a leading slash:

| Placeholder | Field in `content.js` | Notes |
|-------------|-----------------------|-------|
| Portrait photo | `profile.portrait` | **Use a real photo of Anika** (currently a stock stand-in) |
| Hero background video | `profile.heroVideo` | Optional cinematic loop, e.g. `/hero.mp4` — the hero autoplays it muted; falls back to the ken-burns image if empty |
| Hero image | `profile.heroImage` | Dubai skyline placeholder |
| Project banners / posters / galleries | `projects[].banner` / `poster` / `gallery` | Real campaign & brand visuals |

Placeholder images are royalty-free Unsplash URLs.

### Adding a project
Copy any object in `projects[]`, change the `id` (it becomes the URL slug),
fill in the copy, images, `impact`, `caseStudy`, and `gallery`. Set
`video: '/demo.mp4'` to get an autoplaying muted background video on its detail page.

---

## Structure

```
src/
  data/content.js      ← ALL your content
  lib/motion.js        ← shared animation variants
  components/          Loader, Navbar, Hero, Row, Card, Particles, Footer …
  pages/               Home, TitleDetail, About, Resume, Contact
  index.css            design tokens (colors, type scale, spacing, motion)
```

## Design notes
- **Colours:** near-black surfaces, muted whites, one red accent (`--accent`).
- **Type:** Sora (display) + Inter (UI), loaded from Google Fonts.
- **Motion:** cinematic easing, scroll reveals, hover-expand cards, parallax hero —
  all of it respects `prefers-reduced-motion`.
- **Performance:** every page is code-split; images lazy-load; particles pause off-screen.
- **Accessibility:** semantic landmarks, keyboard focus states, skip-on-keypress intro.

---

## Push to GitHub

This folder is a complete, self-contained project. To publish it to your
existing **netflix portfolio** repo:

```bash
cd netflix-portfolio
git init
git add .
git commit -m "Cinematic Netflix-inspired redesign"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main        # add --force only if intentionally replacing history
```

Then deploy with any static host (Vercel, Netlify, GitHub Pages). On Vercel/Netlify
the framework preset is **Vite**; build command `npm run build`, output `dist`.
```
