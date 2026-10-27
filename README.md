# vaish.
A minimal Next.js personal website for Vaishnavi Shivkumar, inspired by the clean editorial feel and professional/personal distinction of thariq.io (not a copy).

## Run

```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Edit content

- `lib/content.ts`: research, projects, publications.
- `lib/writing.ts`: add one verified object per essay; every entry gets `/writing/<slug>`.
- `app/globals.css`: color, type, spacing.
- `public/resume.pdf`: résumé used for the Resume link.

Articles intentionally start EMPTY because the two Substack post directories could not be fully verified. Import exact titles/links/dates from your Substack exports or authorized RSS feeds. Avoid fabricated posts and unreviewed AI-generated article text. Optional `html` should only contain trusted sanitized markup from your own export; otherwise use the external article link.

## Ship to GitHub

Clone `https://github.com/v4ishnavi/vaish`, copy this starter into that clone, then:

```bash
git add .
git commit -m "Build personal website"
git push origin main
```

## Deploy

Import repository into Vercel, choose Next.js, and deploy. Add a custom domain later.

## Next refinements

- Replace placeholder summaries with approved wording and figures.
- Add real project and publication URLs.
- Import essays into `lib/writing.ts` and check that they route correctly.
- Add portrait only if desired.
- Add OG metadata, sitemap, RSS, and accessible keyboard focus states.
