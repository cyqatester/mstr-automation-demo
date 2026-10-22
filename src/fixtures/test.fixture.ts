import { test as base, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { DienstenAiConsultancyPage } from '../pages/diensten-ai-consultancy.page';
import { DienstenProdDevPage } from '../pages/diensten-prod-dev.page';
import { DienstenSaasDevPage } from '../pages/diensten-saas-dev.page';

type AppFixtures = {
  homePage: HomePage;
  dienstenAiConsultancy: DienstenAiConsultancyPage;
  dienstenProdDevPage: DienstenProdDevPage;
  dienstenSaasDevPage: DienstenSaasDevPage;
};

export const test = base.extend<AppFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  dienstenAiConsultancy: async ({ page }, use) => {
    await use(new DienstenAiConsultancyPage(page));
  },
  dienstenProdDevPage: async ({ page }, use) => {
    await use(new DienstenProdDevPage(page));
  },
  dienstenSaasDevPage: async ({ page }, use) => {
    await use(new DienstenSaasDevPage(page));
  }
});

export { expect };