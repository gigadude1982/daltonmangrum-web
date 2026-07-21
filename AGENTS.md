# AGENTS.md

## Project shape
- This is a small Create React App site (`react-scripts` + React 18) with client-side routing via `react-router-dom` v6.
- The entire app shell lives in `src/App.js`: `BrowserRouter`, top nav, page routes, rotating logo header, and footer are all composed there.
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
- `src/App.js` reads the site version from `package.json` (`require("../package.json").version`) and shows `React.version` in the footer. Do not hardcode version text elsewhere.

## Existing component reality
- `src/components/Header.js` and `src/components/Footer.js` exist but are not used by `App.js`; the live header/footer markup is inline in `App.js`.
- There are several TODO comments in `src/App.js`, but they are not backed by existing implementations. Treat the current structure as the source of truth.

## Verified workflows
- Install/run with npm, not yarn:
  - `npm start`
  - `npm run build`
  - `npm test -- --watchAll=false`
- As of 2026-04-08, `npm run build` succeeds with an ESLint warning for unused `useState` in `src/App.js`.
- As of 2026-04-08, `npm test -- --watchAll=false` fails because `src/App.test.js` is still the default CRA test looking for “learn react”. If you touch UI text or test setup, update this test first.

## Deployment-related files
- `Dockerfile` builds the CRA app and serves `build/` from Nginx. Note that it uses `yarn install` / `yarn run build` even though the checked-in lockfile is `package-lock.json`; keep that mismatch in mind before changing container workflows.
- `nginx.conf` is configured for SPA routing with `try_files $uri $uri/ /index.html;`.
- `docker-compose.yml` is currently a Traefik/whoami example, not an app-local development stack for this React site.

## Agent tips for making changes
- For a new page/route, follow the existing pattern: create `src/pages/<name>.js`, import it into `src/App.js`, add a `<Route>`, then add matching desktop/mobile links in `src/components/Navbar.js`.
- When adjusting navbar link behavior, remember `activeStyle` props are currently passed through to DOM output and produce warnings in tests; preserve or clean up deliberately rather than accidentally.
- Prefer small edits that preserve the current simple structure over introducing new state libraries or folder abstractions unless the task explicitly requires that refactor.

