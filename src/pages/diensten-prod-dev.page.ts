import { expect, type Locator, type Page } from '@playwright/test';

export class DienstenProdDevPage {
    readonly page: Page;
    readonly jouwProbleemHeader: Locator;
    readonly aiNativeDevHeader: Locator;
    readonly gebouwdHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        // Prefer accessible roles and visible copy over brittle CSS selectors.
        this.jouwProbleemHeader = page.getByRole('heading', { name: 'Jouw probleem is het startpunt', exact: true});
        this.aiNativeDevHeader = page.getByRole('heading', { name: 'AI-native development', exact: true});
        this.gebouwdHeader = page.getByRole('heading', { name: 'Gebouwd voor de lange termijn', exact: true});
    }

    async goto(): Promise<void> {
        await this.page.goto('/diensten/product-development');
    }

    async expectJouwProbleemHeaderVisible(): Promise<void> {
        await expect(this.jouwProbleemHeader).toBeVisible();  
    }

    async expectAiNativeHeaderVisible(): Promise<void> {
        await expect(this.aiNativeDevHeader).toBeVisible();  
    }

    async expectGebouwdHeaderVisible(): Promise<void> {
        await expect(this.gebouwdHeader).toBeVisible();  
    }
}