import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://sonhtests-env.eba-vrwkd3a3.eu-north-1.elasticbeanstalk.com/admin/login/?next=/admin/');
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('admin@admin.com');
  await page.getByLabel('Password:').click();
  await page.getByLabel('Password:').fill('admin');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Groups' }).click();
  await page.getByRole('link', { name: 'Educational sections' }).click();
  await page.getByRole('rowheader', { name: 'Expeditions' }).getByRole('link').click();
  await page.getByRole('rowheader', { name: 'Songs', exact: true }).getByRole('link').click();
  await page.getByRole('cell', { name: '1859696b-5eb4-4c4d-b15c-' }).click();
  await page.getByRole('cell', { name: 'f09dd9bf-ebfd-499c-9709-' }).click();
  await page.getByRole('link', { name: 'Songs Details' }).click();
  await page.getByRole('link', { name: 'Ой ти Галино' }).click();
  await page.getByRole('button', { name: 'Save', exact: true }).click();
});