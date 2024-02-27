import { test, expect } from '@playwright/test';

test('test', async ({ page, request }) => {
  await page.goto('file:///Y:/VENDORS/MuleSoft/FROM_PHC/QA/');
  await page.getByRole('link', { name: 'Archive/' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'Member Ingestion_02052024.csv' }).click();
  const download = await downloadPromise;
});