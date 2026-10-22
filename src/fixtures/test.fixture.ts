import { test as base, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { DienstenAiConsultancyPage } from '../pages/diensten-ai-consultancy.page';

type AppFixtures = {
  homePage: HomePage;
  dienstenAiConsultancy: DienstenAiConsultancyPage;
};

export const test = base.extend<AppFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  dienstenAiConsultancy: async ({ page }, use) => {
    await use(new DienstenAiConsultancyPage(page));
  }
});

export { expect };