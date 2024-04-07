import { test, expect } from '@playwright/test';

test.describe('About page', () => {
  test('About page', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 1020 });
    await page.goto('https://1000and1songs.com/#/');
    await page.locator(':nth-child(1) > .menu-list__item-link').click();
    // await page.FIXME_should('location.protocol.eq', 'https:');
    await expect(page).toHaveURL(/about/);

    // Header
    await expect(page.locator('.header')).toBeVisible();
    // Footer
    await expect(page.locator('.footer')).toBeVisible();
    //About container
    // await expect(page.locator('.about')).toBeVisible();
    await expect(
      page.locator('.about', { hasText: /Про нас/ }).first()
    ).toBeVisible();
    //Carousel buttons
    // cy.get('.slider__nav').should('be.visible')
    // Video youtube
    // await expect(page.locator('.ql-video')).toBeVisible();
    // Team
    // await expect(page.locator('.team')).toBeVisible();
    await expect(
      page.locator('.team', { hasText: /Команда/ }).first()
    ).toBeVisible();
  });
});
