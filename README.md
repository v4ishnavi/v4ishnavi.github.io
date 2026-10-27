# vaish.

Personal site for Vaishnavi Shivkumar: research, writing and other things. It's inspired by the
professional/personal toggle on [thariq.io](https://www.thariq.io/).

Live at **https://v4ishnavi.github.io/vaish/**.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Where things live

| What | File |
| --- | --- |
| Name, links, publications, experience, "other things" (life mode) | `lib/site.ts` |
| Research projects (each gets `/research/<slug>`) and "stuff I've made" cards | `lib/research.ts` |
| Substack posts (each gets `/writing/<slug>`) | `content/posts.json`, generated |
| Colours, type, spacing | `app/globals.css` |
| CV linked from the homepage | `public/resume.pdf` |

## Writing

Posts come from the RSS feeds of
[tacksforsnaccs](https://tacksforsnaccs.substack.com) (personal) and
[vaishnavishivkumar](https://vaishnavishivkumar.substack.com) (professional).

```bash
npm run sync       # refreshes content/posts.json
```

The deploy workflow also runs this every day, so new posts show up on their own.
Every post from `vaishnavishivkumar` lands under ◉ research, except the ones listed in `MODE_OVERRIDES`
in `scripts/sync-substack.mjs`, which go under ✳ life. *The girlboss dad* is already listed there.

## Deploy

Every push to `main` builds a static export and publishes it to GitHub Pages
(`.github/workflows/deploy.yml`). For a custom domain, add it under the repo's Settings → Pages and set
`NEXT_PUBLIC_BASE_PATH` to an empty string in the workflow.
