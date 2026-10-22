import { expect, type Locator, type Page } from '@playwright/test';

export class DienstenAiConsultancyPage {
    readonly page: Page;
    readonly workWithAIHeader: Locator;
    readonly buildWithAIHeader: Locator;
    readonly deepDiveHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        // Prefer accessible roles and visible copy over brittle CSS selectors.
        this.workWithAIHeader = page.getByRole('heading', { name: 'Work with AI', exact: true}).first();
        this.buildWithAIHeader = page.getByRole('heading', { name: 'Build with AI', exact: true});
        this.deepDiveHeader = page.getByRole('heading', { name: 'Deep dive', exact: true});
    }

    async goto(): Promise<void> {
        await this.page.goto('/diensten/consultancy');
    }

    async expectWorkWithAIHeaderVisible(): Promise<void> {
        await expect(this.workWithAIHeader).toBeVisible();  
    }

    async expectBuildWithAIHeaderVisible(): Promise<void> {
        await expect(this.buildWithAIHeader).toBeVisible();  
    }

    async expectDeepDiveHeaderVisible(): Promise<void> {
        await expect(this.deepDiveHeader).toBeVisible();  
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