# HeightCompareChart

Multilingual height comparison site — [heightcomparechart.com](https://heightcomparechart.com).

- Visual height comparison board (2D + 3D) with people, characters, animals and objects
- Tools: height converter, difference calculator, average height by country, percentile, height predictor, growth chart, BMI, hug simulator, 3D comparison
- ~60 celebrity/character height pages and guides
- 14 languages: en, es, pt-br, hi, id, tr, vi, de, fr, ja, ko, ru, it, ar (RTL)

## Develop

```bash
npm install
npm run dev
```

## Deploy (Cloudflare Workers)

Deployed with [OpenNext for Cloudflare](https://opennext.js.org/cloudflare) as the Worker `charth` (see `wrangler.jsonc`, `open-next.config.ts`).

- **Workers Builds (Git):** build command `npm run build`, deploy command `npx wrangler deploy`. On CI (`WORKERS_CI=1`) the `postbuild` step bundles the app with OpenNext and copies the prerendered pages into static assets.
- **From your machine:** `npm run deploy` (or `npm run preview` to test the Worker locally).
- Add `heightcomparechart.com` and `www.heightcomparechart.com` as custom domains on the Worker; `www` redirects to the apex.

## Environment variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical origin (default `https://heightcomparechart.com`) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact address on legal pages and footer (default `hello@heightcomparechart.com`) |
| `NEXT_PUBLIC_GA_ID` | GA4 ID (default `G-ZKPKJYVS4C`), loaded on every page. Set to empty to disable |
| `NEXT_PUBLIC_ADSENSE_CLIENT` | AdSense publisher ID (default `ca-pub-3245687391344995`, must match `public/ads.txt`). Set to empty to disable |

## Data

Average heights come from NCD-RisC (CC BY 4.0). Refresh with the scripts in [`scripts/ncd`](scripts/ncd/README.md).

See [ROADMAP.md](ROADMAP.md) for the plan and progress.
