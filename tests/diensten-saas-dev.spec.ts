import { test, expect } from '../src/fixtures/test.fixture';

test.describe('MSTR Diensten - Saas Development @smoke', () => {

    test('shows Van nul tot markt Header', async ({ dienstenSaasDevPage }) => {
        await dienstenSaasDevPage.goto();
        await dienstenSaasDevPage.expectVanNulHeaderVisible();
    });

    test('shows Alles onder een dak Header', async ({ dienstenSaasDevPage }) => {
        await dienstenSaasDevPage.goto();
        await dienstenSaasDevPage.expectAllesOnderHeaderVisible();
    });

    test('shows Langdurig partnerschap Header', async ({ dienstenSaasDevPage }) => {
        await dienstenSaasDevPage.goto();
        await dienstenSaasDevPage.expectLangdurigHeaderVisible();
    });
});