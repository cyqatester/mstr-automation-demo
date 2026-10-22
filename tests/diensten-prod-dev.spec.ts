import { test, expect } from '../src/fixtures/test.fixture';

test.describe('MSTR Diensten - Product Development @smoke', () => {

    test('shows Jouw probleem is het startpunt Header', async ({ dienstenProdDevPage }) => {
        await dienstenProdDevPage.goto();
        await dienstenProdDevPage.expectJouwProbleemHeaderVisible();
    });

    test('shows AI-native development Header', async ({ dienstenProdDevPage }) => {
        await dienstenProdDevPage.goto();
        await dienstenProdDevPage.expectAiNativeHeaderVisible();
    });

    test('shows Gebouwd voor de lange termijn Header', async ({ dienstenProdDevPage }) => {
        await dienstenProdDevPage.goto();
        await dienstenProdDevPage.expectGebouwdHeaderVisible();
    });
});