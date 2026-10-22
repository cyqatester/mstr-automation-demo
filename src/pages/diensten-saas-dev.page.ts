import { expect, type Locator, type Page } from '@playwright/test';

export class DienstenSaasDevPage {
    readonly page: Page;
    readonly vanNulHeader: Locator;
    readonly allesOnderHeader: Locator;
    readonly langdurigHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        // Prefer accessible roles and visible copy over brittle CSS selectors.
        this.vanNulHeader = page.getByRole('heading', { name: 'Van nul tot markt', exact: true});
        this.allesOnderHeader = page.getByRole('heading', { name: 'Alles onder een dak', exact: true});
        this.langdurigHeader = page.getByRole('heading', { name: 'Langdurig partnerschap', exact: true});
    }

    async goto(): Promise<void> {
        await this.page.goto('/diensten/saas-ontwikkeling');
    }

    async expectVanNulHeaderVisible(): Promise<void> {
        await expect(this.vanNulHeader).toBeVisible();  
    }

    async expectAllesOnderHeaderVisible(): Promise<void> {
        await expect(this.allesOnderHeader).toBeVisible();  
    }

    async expectLangdurigHeaderVisible(): Promise<void> {
        await expect(this.langdurigHeader).toBeVisible();  
    }
}