import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://baza-trainee.github.io/1001-songs-frontend/#/');
  await page.getByRole('navigation').getByRole('link', { name: 'Про проєкт' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Освітній розділ' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Експедиції' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Мапа' }).click();
  await page.locator('app-map-filter').getByRole('img').nth(1).click();
  await page.getByLabel('Країна').locator('svg').click();
  await page.locator('div').filter({ hasText: /^Для навігації використовуйте клавіші зі стрілками\.$/ }).first().click();
  await page.getByRole('navigation').getByRole('link', { name: 'Новини' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Мапа' }).click();
  await page.locator('div').filter({ hasText: /^Для навігації використовуйте клавіші зі стрілками\.$/ }).nth(1).click();
  await page.locator('app-stereo-player div').first().click();
  await page.getByRole('button', { name: 'Підтримати', exact: true }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Buy Me A Coffe' }).click();
  const page1 = await page1Promise;
  await page1.locator('div').filter({ hasText: /^3$/ }).getByRole('radio').check();
  await page1.locator('div').filter({ hasText: /^5$/ }).getByRole('radio').check();
});