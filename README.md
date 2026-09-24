# Australian Solar Care

Static website for Australian Solar Care, a company that cleans solar panels on homes and commercial sites.

Phone, email, service area, licences, and the production domain are placeholders. Replace them in `src/data/site.ts`, `astro.config.mjs`, and `public/robots.txt` before launch.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

The dev server runs at `http://localhost:4321`.

## Pages

- `/` home
- `/about`
- `/services`
- `/services/residential` and `/services/commercial`, from the services content collection
- `/contact` — the form validates in the browser and does not send a message

## Performance

The site is a static multi-page build. Pages are `.astro` components, so they ship no framework runtime.

- `output: 'static'`, `compressHTML: true`, and `build.inlineStylesheets: 'auto'`
- Internal links prefetch on hover or focus, and fall back to tap on slow connections
- Outfit is self-hosted through Astro’s Fonts API: weights 400 and 600, latin, woff2. Only weight 400 is preloaded. The brand manual specifies NeuSans Trial, which is not included as a licensed webfont, so Outfit is the stand-in until those files are supplied.
- Future images should be imported from `src/assets/` and rendered with `Image` or `Picture`. The default layout is `constrained`. Do not lazy-load the hero image
- No analytics, client router, or third-party scripts

Keep new pages static. Add a client island only when HTML and CSS cannot do the job, and hydrate it with `client:visible` or `client:idle`.
