# Roadmap

Goal: a multilingual height comparison site that wins organic traffic in markets
the current leaders (howheight.com, heightcomparison.com) serve poorly.

Strategy (from the Sept 2026 competitor research):

- Tool keywords ("height comparison", "comparar altura", "身長比較") rank on fresh domains when the tool is genuinely useful.
- 10+ locales with native copy; prioritise gap markets: Hindi, Indonesian, Turkish, Vietnamese (+ Thai, Polish, Dutch, Chinese next).
- Satellite calculators link back to the main board.
- Curated subject pages (celebrities, athletes, anime characters) with real content — no thin auto-generated pages.
- Ship trend tools within 48 h when a height meme spikes (e.g. howheight's Hug Simulator, July 2026).

## Phase 1 — Foundation ✅

- [x] Next.js 16 app, `/[lang]` routing, Accept-Language redirect from `/`
- [x] 14 locales: en, es, pt-br, hi, id, tr, vi, de, fr, ja + ko, ru, it, ar (RTL) — superset of howheight.com's 10
- [x] SEO base: canonical + hreflang (+ x-default), sitemap with alternates, robots, WebApplication + FAQ JSON-LD, per-locale OG image
- [x] Height board: procedural silhouettes with age-aware proportions, builds, objects, image upload, cm / ft-in, share links, PNG export, difference summary
- [x] Library: athletes, celebrities, anime characters, records, objects/landmarks

## Phase 2 — Satellite tools ✅

- [x] Height converter (cm ↔ ft/in ↔ m ↔ inches) with conversion charts
- [x] Height difference calculator: gap, %, "where heads reach" landmark, mini board, open-in-board link
- [x] Average height by country: 200 countries (NCD-RisC 2020, age 19), localized names, search/sort, change since 1985, Dataset JSON-LD, compare-on-board
- [x] Height percentile calculator: country + world percentile, 1-in-N, z-score, 10-country comparison
- [x] Tools hub, header/footer/home internal links, BreadcrumbList JSON-LD, sitemap entries
- Data pipeline: `scratchpad` scripts → `src/data/heightByCountry.ts` + `heightByAge.ts` (ages 5–19, ready for a growth-chart tool)

## Phase 3 — Engagement & trend tools ✅

- [x] Board: drag handle to resize (pointer + keyboard), Focus mode (clips giants into labelled columns), horizontal scroll with scroll shadows instead of shrinking everything
- [x] Animals & dinosaurs: cat, dogs, horse, elephant, giraffe, ostrich, penguin, T. rex, Brachiosaurus + car/bus silhouettes; heights from standard shoulder/hip measurements; localized names in 10 languages
- [x] Hug simulator (`/tools/hug-simulator`): side-view front/back hug with IK arms, head-landing point, eye-level gap, head tilt, share link + PNG
- [x] 3D view: lazy-loaded R3F scene (mannequins with age-aware proportions, extruded silhouettes, measuring pole, orbit, PNG export) + `/tools/3d-height-comparison` landing page
- [ ] Later: commission professional silhouette/3D art to replace procedural v1 shapes

## Launch checklist ✅ (42-item audit)

- Legal: privacy policy + terms (14 languages), cookie consent (GA loads only after "Accept"; withdraw via footer "Cookie settings")
- Security: HSTS, nosniff, referrer policy, frame-ancestors, permissions policy, no `x-powered-by`; no secrets in client code
- SEO: unique titles/descriptions verified across 140 URLs, 0 broken internal links, localized 404 (real 404 status), apple-touch icon, dateModified + "Last updated"
- UX: mobile menu, site search (/ or ⌘K; pages + library in every language), back-to-top, CSS scroll progress, reset confirmation, input error states, copy buttons, print stylesheet
- Accessibility: WCAG AA contrast (computed), visible focus rings, skip link, aria names; Lighthouse mobile: Perf 96–98, A11y/BP/SEO 100
- Analytics: GA4 via `NEXT_PUBLIC_GA_ID`; share links carry `utm_source=share&utm_medium=copy|native&utm_campaign=chart`
- N/A: password toggle and form spam protection (no accounts or server-side forms)

## Phase 4 — Content at scale (quality-gated)

- [ ] Subject pages: `/[lang]/height/[slug]` with sourced height, board preset, similar-height list
- [ ] Curated "X vs Y" pages for high-demand pairs only
- [ ] Anime / game character hubs (One Piece, Naruto, JJK, Genshin, Uma Musume)
- [ ] Add locales: th, pl, nl, zh-Hans, zh-Hant

## Phase 5 — Launch & growth

- [ ] Pick brand + domain; set `NEXT_PUBLIC_SITE_URL`
- [ ] Deploy (Vercel or Cloudflare Workers via OpenNext)
- [ ] Google Search Console + Bing Webmaster, submit sitemap per locale
- [ ] Analytics (GA4 / Plausible), AdSense after content depth, optional Pro tier
- [ ] Distribution: Reddit/TikTok/X demos, Product Hunt, tool directories
