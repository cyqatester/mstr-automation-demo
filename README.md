# MSTR Playwright Framework

## Description
A maintainable end-to-end UI testing framework for [MSTR](https://www.mstr.nl/), designed to automate browser testing across desktop and mobile viewports. It uses the Page Object Model (POM), reusable custom fixtures, and resilient, accessible locators to support scalable test development. The framework includes environment-based configuration for dev, test, and prod, with GitHub Actions for automated CI/CD execution and test reporting.

## Tech Stack
- **Language:** TypeScript
- **Test Automation:** Playwright Test
- **Design Pattern:** Page Object Model (POM)
- **Test Architecture:** Custom typed fixtures and reusable page classes
- **Browser Testing:** Desktop Chrome and Pixel 7 mobile emulation
- **Assertions:** Playwright `expect` with auto-waiting
- **Reporting & Debugging:** HTML reports, traces, screenshots, and videos on failure
- **CI/CD:** GitHub Actions
- **Configuration:** Environment-specific `.env` files and environment variables
- **Runtime & Package Management:** Node.js LTS and npm

## Prerequisites
- **Node.js:** A supported LTS version installed.
- **npm:** Included with Node.js.
- **Git:** Required to clone the repository and manage source code.
- **Code Editor:** Visual Studio Code or another TypeScript-compatible editor.
- **Playwright Browsers:** Install Chromium and its required dependencies.
- **GitHub Account:** Required to use GitHub Actions CI/CD.
- **Internet Access:** Required to install dependencies and access the MSTR website.

## Initial Setup
```bash
npm install
npx playwright install chromium
```

Configure the appropriate environment file (`.env.dev`, `.env.test`, or `.env.prod`) with the target `BASE_URL` before running tests.