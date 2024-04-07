import { test, expect } from '@playwright/test';

test.describe('Expeditions page', () => {
  test('Expeditions page', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 1020 });
    await page.goto('https://1000and1songs.com/#/');
    await page.locator(':nth-child(3) > .menu-list__item-link').click();
    // await page.FIXME_should('location.protocol.eq', 'https:');
    await expect(page).toHaveURL(/expeditions/);

    // Header
    await expect(page.locator('.header')).toBeVisible();
    // Footer
    await expect(page.locator('.footer')).toBeVisible();
    //Science container
    // await expect(page.locator('.expeditions')).toBeVisible();
    await expect(
      page.locator('.expeditions', { hasText: /Експедиції/ }).first()
    ).toBeVisible();
    // Expeditions__categories
    await expect(page.locator('.expeditions__gallery')).toBeVisible();
    // Expeditions filter
    const buttonNames = [
      'Усі',
      'Розвідка',
      'Статичний',
      'Міждисциплінарна',
      'Тематична',
      'Відеозапис обряду',
      'Цифровий запис',
    ];
    buttonNames.forEach(async (buttonName) => {
      await page
        .locator('.news__filter')
        // .FIXME_should('contain.text', buttonName);
    });
  });
});
