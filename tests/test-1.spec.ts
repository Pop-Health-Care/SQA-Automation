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
  await page.getByPlaceholder('Search...').fill('901045300');
  await page.getByPlaceholder('Search...').press('Enter');
  await page.locator('li').filter({ hasText: 'Home Phone(904) 324-' }).locator('span').click();
  await page.locator('lightning-formatted-text').filter({ hasText: 'Work Phone' }).click();
  await page.getByLabel('Accounts||List View').getByText('(904) 324-').click();
  await page.locator('td:nth-child(6)').first().click();
  await page.locator('td:nth-child(7)').first().click();
  await page.getByText('iuser').click();
  await page.getByRole('button', { name: 'User View profile' }).click();
  await page.getByRole('link', { name: 'Log Out', exact: true }).click();
});