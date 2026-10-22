import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly heading: Locator;
  readonly planGesprekLinks: Locator;
  readonly navigation: Locator;
  readonly mainContent: Locator;
  readonly dienstenLink: Locator;
  readonly useCasesLink: Locator;
  readonly blogsLink: Locator;

  constructor(page: Page) {
      this.page = page;
      // Prefer accessible roles and visible copy over brittle CSS selectors.
      this.heading = page.getByRole('heading', {
        name: /richting en resultaat met ai/i
      }).first();
      this.planGesprekLinks = page.getByRole('link', { name: /plan gesprek/i });
      this.navigation = page.getByRole('navigation').first();
      this.mainContent = page.locator('main').first();
      this.dienstenLink = page.getByRole('heading', { name: 'Diensten', exact: true}).first();
      this.useCasesLink = page.getByRole('link', {name: 'Use cases', exact: true}).first();
      this.blogsLink = page.getByRole('link', { name: 'Blogs', exact: true,}).first();
  }

    async goto(): Promise<void> {
      await this.page.goto('/');
    }

    async expectLoaded(): Promise<void> {
      const mstrLink = this.page.getByRole('link', { name: 'MSTR', exact: true });
      await expect(mstrLink).toBeVisible();
      await mstrLink.click();
    }

    async expectDienstenVisible(): Promise<void> {
      await expect(this.dienstenLink).toBeVisible();  
    }

    async expectUseCasesVisible(): Promise<void> {
      await expect(this.useCasesLink).toBeVisible();  
    }

    async expectBlogsLinkVisible(): Promise<void> {
      await expect(this.blogsLink).toBeVisible();  
    }

    async expectPrimaryCallToActionVisible(): Promise<void> {
      await expect(this.planGesprekLinks.first()).toBeVisible();
    }

    async expectNoHorizontalOverflow(): Promise<void> {
      const dimensions = await this.page.evaluate(() => ({
        viewportWidth: document.documentElement.clientWidth,
        documentWidth: document.documentElement.scrollWidth
      }));
      expect(
        dimensions.documentWidth,
        `Horizontal overflow: document ${dimensions.documentWidth}px, viewport ${dimensions.viewportWidth}px`
      ).toBeLessThanOrEqual(dimensions.viewportWidth + 1);
    }
}