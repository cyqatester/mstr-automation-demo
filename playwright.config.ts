import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'node:path';

const envName = process.env.TEST_ENV ?? 'dev';
const envFile = path.resolve(process.cwd(), `.env.${envName}`);

dotenv.config({ path: envFile, override: false });

// const baseURL = process.env.BASE_URL ?? 'https://www.mstr.nl/';
const isCI = Boolean(process.env.CI);

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  workers: isCI ? 2 : undefined,
  timeout: 30_000,
  expect: { timeout: 7_000 },
  globalTimeout: isCI ? 12 * 60 * 1000 : undefined,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ],
  outputDir: 'test-results',
  use: {
    // baseURL,
    baseURL: 'https://www.mstr.nl/',
    actionTimeout: 10_000,
    navigationTimeout: 20_000,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  projects: [
    {
      name: 'desktop-chromium',
      testMatch: '**/*.spec.ts',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'mobile-chrome',
      testMatch: '**/*.spec.ts',
      use: { ...devices['Pixel 7'] }
    }
  ]
});