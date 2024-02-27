import { test, expect } from '@playwright/test';

test('test', async ({ page, request }) => {
  await page.goto('https://pophealthcare--phcsit.sandbox.my.salesforce.com/');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('bruce.lewis@pophealthcare.com');
  await page.getByLabel('Username').press('Tab');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Q1M!dgetG!dget2024');
  await page.getByLabel('Password').press('Tab');
  await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
  await page.goto('https://pophealthcare--phcsit.sandbox.lightning.force.com/lightning/r/Account/0017d00001OJSJtAAP/view');
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByPlaceholder('Search...').fill('13603130');
  await page.getByPlaceholder('Search...').press('Enter');
  await expect.soft(page.locator('text=Don\'t give up yet!')).toBeVisible();
  await page.goto('https://pophealthcare--phcsit.sandbox.lightning.force.com/lightning/r/User/0057d000007fZiRAAU/view');
  await page.getByRole('button', { name: 'User View profile' }).click();
  await page.getByRole('link', { name: 'Log Out', exact: true }).click();
});