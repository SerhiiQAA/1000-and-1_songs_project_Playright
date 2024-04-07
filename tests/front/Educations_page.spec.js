import { test, expect } from '@playwright/test';

test.describe('Educational section', () => {
  test('Educational section', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 1020 });
    await page.goto('https://1000and1songs.com/#/');
    await page.locator(':nth-child(2) > .menu-list__item-link').click();
    // await page.FIXME_should('location.protocol.eq', 'https:');
    await expect(page).toHaveURL(/education/);

    // Header
    await expect(page.locator('.header')).toBeVisible();
    // Footer
    await expect(page.locator('.footer')).toBeVisible();
    //Science container
    await expect(page.locator('.science')).toBeVisible();
    await expect(
      page.locator('.science', { hasText: /Освітній розділ/ }).first()
    ).toBeVisible();
    //Carousel buttons
    // await expect(page.locator('.card')).toBeVisible();
    await expect(
      page.locator('.science__gallery').locator('.card')
    ).toHaveCount(9);
    // Recomendation
    await expect(page.locator('#mat-expansion-panel-header-0')).toBeVisible();
    await expect(
      page
        .locator('#mat-expansion-panel-header-0')
        .getByText(/Рекомендації/)
        .first()
    ).toBeVisible();
    await expect(page.locator('#mat-expansion-panel-header-1')).toBeVisible();
    await expect(
      page
        .locator('#mat-expansion-panel-header-1')
        .getByText(/Рекомендовані джерела/)
        .first()
    ).toBeVisible();
  });
});