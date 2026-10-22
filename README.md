# MSTR Playwright Framework

A maintainable end-to-end UI test framework for [MSTR](https://www.mstr.nl/) using TypeScript, Playwright Test, Page Object Model (POM), custom fixtures, desktop/mobile device projects, and GitHub Actions.

> **Environment note:** The dev, test, and prod environment files default to the supplied MSTR URL so the framework can be tried immediately. Replace them with your own deployment URLs when separate environments exist. Production runs should remain read-only smoke tests.

## Stack

- TypeScript and Playwright Test
- Page Object Model with accessible, resilient locators
- Custom typed fixtures
- Desktop Chrome and Pixel 7 mobile emulation
- English browser locale (`en-GB`) and `Accept-Language` header
- HTML report, traces, screenshots and video on failures
- GitHub Actions CI with manual environment selection

## Project structure

```text
.
├── .github/workflows/playwright.yml
├── src/
│   ├── config/env.ts
│   ├── fixtures/test.fixture.ts
│   └── pages/home.page.ts
├── tests/home.spec.ts
├── .env.dev.example
├── .env.test.example
├── .env.prod.example
├── playwright.config.ts
├── package.json
└── tsconfig.json
```

## Setup

Requires a supported Node.js LTS release and npm.

```bash
npm install
npx playwright install chromium
```

Copy the example environment file for the environment you want to use, for example:

```bash
cp .env.dev.example .env.dev
```

On Windows PowerShell:

```powershell
Copy-Item .env.dev.example .env.dev
```

Install the other environment files as needed (`.env.test` and `.env.prod`). These local files are ignored by Git.

## Run tests

```bash
npm test                 # all configured desktop and mobile projects
npm run test:desktop     # desktop project only
npm run test:mobile      # mobile emulation only
npm run test:dev         # target dev environment
npm run test:test        # target test environment
npm run test:prod        # target production environment
npm run test:smoke        # tests tagged @smoke
npm run typecheck
npm run report
```

`TEST_ENV` selects `.env.dev`, `.env.test`, or `.env.prod`. `BASE_URL` supplied in the process environment overrides the value in the file, which is useful in CI.

## Environment configuration

Each environment has its own file and can point to a different deployment:

```dotenv
BASE_URL=https://your-environment.example.com/
```

The Playwright browser context requests English using `locale: 'en-GB'` and an `Accept-Language` header. This affects browser language preferences and formatting; it does not force a website to translate itself. If MSTR ignores the language header, add a page-object step to use the site's language selector or configure an English-specific URL if one exists. The sample files use `https://www.mstr.nl/` as the starting URL because no separate dev/test deployments were provided. For GitHub Actions, optionally define the repository variable `PLAYWRIGHT_BASE_URL` under **Settings → Secrets and variables → Actions → Variables**. Set it to the environment URL you intend to test. If unset, the config falls back to the selected `.env.*` file.

For safety, the workflow defaults to `TEST_ENV=test` for push and pull-request runs. Use **Actions → Playwright CI → Run workflow** to choose `dev`, `test`, or `prod`. Do not put credentials in these files; use GitHub Secrets for sensitive values.

## Adding tests

1. Add or extend a page class in `src/pages/`.
2. Add reusable setup to `src/fixtures/` when needed.
3. Write test intent and assertions in `tests/`.
4. Prefer role, label, and text locators; avoid brittle CSS/XPath selectors.
5. Use Playwright assertions (`expect(locator).toBeVisible()`, etc.) instead of fixed sleeps. Playwright auto-waits for actionable elements and retrying assertions.

## GitHub Actions

The workflow runs on pushes and pull requests to `main`/`master`, and can be started manually with an environment selection. It installs dependencies and Chromium, type-checks TypeScript, runs both desktop and mobile projects, and uploads HTML reports and failure diagnostics.

## Important caveats

- Mobile coverage uses Playwright's device emulation; it is not a substitute for testing on physical devices.
- The supplied site is a live third-party website. Content, cookies, localization, or site changes can affect selectors and assertions. Keep tests read-only and avoid submitting real contact forms.
- The project scaffold has not been executed against the live site in this generated environment. Run it locally and adjust locators if the website changes.
