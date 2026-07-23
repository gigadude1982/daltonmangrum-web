# AGENTS.md

## Project shape
- This is a small Create React App site (`react-scripts` + React 18) with client-side routing via `react-router-dom` v6.
- The app shell lives in `src/App.js`: it composes `BrowserRouter`, `<Navbar/>`, the page `<Routes>`, and `<Footer/>`. Navbar and Footer are their own components under `src/components/`.
- Pages are simple presentational components under `src/pages/` (`index.js`, `about.js`, `contact.js`, `portfolio.js`, `nopage.js`). There is no API layer, global store, or server-side rendering.

## Routing and navigation
- Routes are declared directly in `src/App.js` with `<Routes>` / `<Route element={...} />`.
- Navigation labels are duplicated in `src/components/Navbar.js` for both desktop (`NavMenu`) and mobile (`HamburgerSubMenu`). If you add or rename a route, update **all three places**: the page file, `App.js`, and both nav menus.
- `Navbar` uses styled `react-router-dom` links from `src/components/Navbar/NavbarElements.js`; active-state styling comes from the `.active` class in those styled components.

## Styling conventions
- This codebase mixes global CSS and `styled-components`:
  - `src/App.css` / `src/index.css` handle app-wide classes like `.App-header`, `.App-footer`, `.Main-image`.
  - `src/components/Navbar/NavbarElements.js` contains all navbar layout/colors/media queries.
- Keep navbar styling changes inside `NavbarElements.js`; keep page-level/class-based styling in the CSS files unless you are intentionally refactoring the pattern.

## Content and assets
- Static images are imported from `src/images/`. Example: `src/pages/about.js` intentionally uses `mangrum_family_low_res.jpg` and comments that the hi-res image is much larger.
- `src/components/Footer.js` reads the site version from `package.json` (`require("../../package.json").version`) and shows `React.version`. Do not hardcode version text elsewhere.

## Component reality
- `src/components/Navbar.js` (+ `src/components/Navbar/NavbarElements.js`) and `src/components/Footer.js` are the real, live components rendered by `App.js`. There is no `Header.js`.
- Treat the current structure as the source of truth.

## Verified workflows
- Install/run with npm, not yarn:
  - `npm start`
  - `npm run build`
  - `npm test -- --watchAll=false`
  - `npm run ci-cd` (build + test + lint — this is what CI runs before deploying)
- As of 2026-07-22, `npm run ci-cd` passes clean (build + test + lint), aside from pre-existing CRA deprecation warnings.
- `src/App.test.js` renders `<App/>` and asserts the home hero text (`/Hey, I'm Dalton/i`). If you change that hero copy in `src/pages/index.js`, update this test.

## Deployment
- **Live deploy path:** pushing to `main` runs `.github/workflows/deploy.yml` — `npm run ci-cd`, then `aws s3 sync ./build s3://$AWS_S3_BUCKET --delete`, then a CloudFront invalidation. Target is set by repo Actions secrets (`AWS_S3_BUCKET` = `www.daltonmangrum.com`, `AWS_CLOUDFRONT_DISTRIBUTION_ID`, `AWS_REGION`, plus the AWS key pair). Site: https://www.daltonmangrum.com.
- The `Dockerfile`/`nginx.conf`/`docker-compose.yml` below are NOT part of the live deploy — they're leftover local-container scaffolding.
- `Dockerfile` builds the CRA app and serves `build/` from Nginx. Note that it uses `yarn install` / `yarn run build` even though the checked-in lockfile is `package-lock.json`; keep that mismatch in mind before changing container workflows.
- `nginx.conf` is configured for SPA routing with `try_files $uri $uri/ /index.html;`.
- `docker-compose.yml` is currently a Traefik/whoami example, not an app-local development stack for this React site.

## Agent tips for making changes
- For a new page/route, follow the existing pattern: create `src/pages/<name>.js`, import it into `src/App.js`, add a `<Route>`, then add matching desktop/mobile links in `src/components/Navbar.js`.
- When adjusting navbar link behavior, remember `activeStyle` props are currently passed through to DOM output and produce warnings in tests; preserve or clean up deliberately rather than accidentally.
- Prefer small edits that preserve the current simple structure over introducing new state libraries or folder abstractions unless the task explicitly requires that refactor.

