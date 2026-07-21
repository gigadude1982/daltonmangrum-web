# daltonmangrum.com

Personal website for Dalton B. Mangrum, built with React 18.

**Live site:** [daltonmangrum.com](https://www.daltonmangrum.com)

## Tech Stack

- React 18
- React Router v6
- styled-components v6
- react-icons v5
- Create React App

## Pages

- **Home** — Hero/landing section
- **About** — Family photo + bio card
- **Portfolio** — Coming soon
- **Contact** — Email card
- **404** — Not found

## Design

Mountain forest theme — deep forest green (`#0e1a0e`) background, Inter font, earthy warm text tones, forest green and warm amber accents. CSS custom properties defined in `src/index.css`.

## Scripts

```bash
npm start        # Dev server at http://localhost:3000
npm run build    # Production build
npm test         # Run tests
npm run lint     # Lint src/
npm run lint:fix # Lint and auto-fix
npm run format   # Prettier format src/
npm run verify   # Build + test + lint
```

## Deployment

Pushes to `main` build the CRA app and sync `build/` to S3, then invalidate CloudFront,
via `.github/workflows/deploy.yml`. The deploy target is controlled by the repo's GitHub
Actions secrets (`AWS_S3_BUCKET`, `AWS_CLOUDFRONT_DISTRIBUTION_ID`, `AWS_REGION`).
