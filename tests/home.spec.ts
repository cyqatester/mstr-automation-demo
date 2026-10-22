import { test, expect } from '../src/fixtures/test.fixture';

test.describe('MSTR homepage @smoke', () => {
    test('loads the homepage and displays the main heading', async ({ homePage, page }) => {
      await homePage.goto();
      await homePage.expectLoaded();
      await expect(page).toHaveURL(/mstr\.nl/);
    });

    test('shows Diensten drop down link', async ({ homePage }) => {
      await homePage.goto();
      await homePage.expectDienstenVisible();
    });

    test('shows Use cases link', async ({ homePage }) => {
      await homePage.goto();
      await homePage.expectUseCasesVisible();
    });

    test('shows Blogs link', async ({ homePage }) => {
      await homePage.goto();
      await homePage.expectBlogsLinkVisible();
    });

    test('does not have horizontal overflow at the current viewport', async ({ homePage }) => {
      await homePage.goto();
      await homePage.expectNoHorizontalOverflow();
    });
});