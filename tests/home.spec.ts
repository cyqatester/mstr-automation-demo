import { test, expect } from '../src/fixtures/test.fixture';

test.describe('MSTR homepage @smoke', () => {
  test('loads the homepage and displays the main heading', async ({ homePage, page }) => {
    await homePage.goto();
    await homePage.expectLoaded();
    await expect(page).toHaveURL(/mstr\.nl/);
  });

  test('shows a primary contact call to action', async ({ homePage }) => {
    await homePage.goto();
    await homePage.expectPrimaryCallToActionVisible();
  });

  test('renders the main service content', async ({ homePage, page }) => {
    await homePage.goto();
    await expect(page.getByText(/AI Consultancy/i).first()).toBeVisible();
    await expect(page.getByText(/Product Development/i).first()).toBeVisible();
  });

  test('does not have horizontal overflow at the current viewport', async ({ homePage }) => {
    await homePage.goto();
    await homePage.expectNoHorizontalOverflow();
  });
});