import { test, expect } from '@playwright/test';

test.describe('Filter map', () => {
  test('Filter', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 1020 });
    await page.goto('https://1000and1songs.com/#/');
    await page.locator(':nth-child(4) > .menu-list__item-link').click();
    // await page.FIXME_should('location.protocol.eq', 'https:');
    // Filter button
    await expect(page.locator('.filter__header')).toBeVisible();
    await page
      .locator('.filter__header')
      .getByText(/Фільтр/)
      .first()
      .click();

    // Open filter
    await expect(page.locator('.filter__body')).toBeVisible();
    const scope = page.locator('.filter__body');
    await expect(scope.getByText(/Сховати фільтр/).first()).toBeVisible();
    await expect(scope.getByText(/Пошук/).first()).toBeVisible();
    // await expect(scope.getByText(/Місцевість/).first()).toBeVisible();

    // Input data by song title
    await expect(page.locator('#mat-input-1')).toBeVisible();
    await page
      .locator('#mat-input-1')
      .fill('\u0417\u043E\u0437\u0443\u043B\u0435\u043D\u044C\u043A\u0430');
    await page.locator('#mat-input-1').press('Enter');

    // Check the search by song title
    await expect(page.locator('.song__card__header')).toBeVisible();
    await expect(
      page
        .locator('.song__card__header')
        .getByText(/Зозуленька/)
        .first()
    ).toBeVisible();

    // Check the song card
    await expect(page.locator('.song__card__btn')).toBeVisible();
    await page
      .locator('.song__card__btn')
      .getByText(/Деталі/)
      .first()
      .click();
    await expect(page.locator('.info__btn__more__detail')).toBeVisible();
    await page
      .locator('.info__btn__more__detail')
      .getByText(/Більше деталей/)
      .first()
      .click();
    await expect(page.locator('.song-page__text-title')).toBeVisible();
    await expect(
      page
        .locator('.song-page__text-title')
        .getByText(/Зозуленька/)
        .first()
    ).toBeVisible();

    // Check the player
    await expect(
      page.locator('button[class="btn__player play ng-star-inserted"]')
    ).toBeVisible();
    await page
      .locator('button[class="btn__player play ng-star-inserted"]')
      .click();
    await expect(
      page.locator('button[class="btn__player pause ng-star-inserted"]')
    ).toBeVisible();
    await page
      .locator('button[class="btn__player pause ng-star-inserted"]')
      .click();
    await expect(
      page.locator('button[class="btn__player pause ng-star-inserted"]')
    ).not.toBeVisible();
    await expect(
      page.locator('button[class="btn__player play ng-star-inserted"]')
    ).toBeVisible();
  });
});
