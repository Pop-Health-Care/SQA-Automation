import { test, expect } from '@playwright/test';
 
test('athena_login', async ({ page }) => {
  await page.goto('https://preview.athenahealth.com/29290/6/login.esp');
  await expect(page).toHaveTitle('athenaOne')
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('blewis191');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Q1M!dgetG!dget2024');
  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page).toHaveURL('https://preview.athenahealth.com/29290/6/login.esp');
  await page.getByLabel('Practice').selectOption('2929001');
  await page.getByRole('button', { name: 'Go' }).click();
  await expect(page).toHaveURL('https://preview.athenahealth.com/2929001/12/login/choosedepartment.esp');
  await page.getByRole('button', { name: 'Go' }).click();
  await expect(page).toHaveURL('https://preview.athenahealth.com/2929001/12/globalframeset.esp?MAIN=https%3A%2F%2Fpreview%2Eathenahealth%2Ecom%2F2929001%2F12%2Fax%2Fnon%5Fclinician');
  await page.frameLocator('#GlobalNav').getByText('Log out').click();
  await expect(page).toHaveURL('https://preview.athenahealth.com/2929001/12/globalframeset.esp?MAIN=https%3A%2F%2Fpreview%2Eathenahealth%2Ecom%2F2929001%2F12%2Fax%2Fnon%5Fclinician');
  await page.frameLocator('#simplemodal-data').getByRole('button', { name: 'Yes' }).click();
});