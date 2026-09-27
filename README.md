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

## Environment variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical origin (default `https://heightcomparechart.com`) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact address on legal pages and footer (default `hello@heightcomparechart.com`) |
| `NEXT_PUBLIC_GA_ID` | Optional GA4 ID; enables analytics and the cookie banner |

## Data

Average heights come from NCD-RisC (CC BY 4.0). Refresh with the scripts in [`scripts/ncd`](scripts/ncd/README.md).

See [ROADMAP.md](ROADMAP.md) for the plan and progress.
