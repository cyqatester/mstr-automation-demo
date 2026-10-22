import { test, expect } from '../src/fixtures/test.fixture';

test.describe('MSTR Diensten - AI Consultancy @smoke', () => {

    test('shows Work with AI Header', async ({ dienstenAiConsultancy }) => {
        await dienstenAiConsultancy.goto();
        await dienstenAiConsultancy.expectWorkWithAIHeaderVisible();
    });

    test('shows Build with AI Header', async ({ dienstenAiConsultancy, page }) => {
        await dienstenAiConsultancy.goto();
        await dienstenAiConsultancy.expectBuildWithAIHeaderVisible();
    });

    test('shows Deep Dive Header', async ({ dienstenAiConsultancy, page }) => {
        await dienstenAiConsultancy.goto();
        await dienstenAiConsultancy.expectDeepDiveHeaderVisible();
    });
});