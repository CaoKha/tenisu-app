import { test, expect } from '@playwright/test'

test('Examples of tenisu-app tests', async ({ page }) => {
  await page.goto('/')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Tenisu/)

  // Expect to find Novak Djokovic
  await page.getByRole('textbox').fill('Djokovic')
  expect(page.locator('.Novak')).toBeTruthy()

  // Expect id of Novak to be 52
  await page.locator('.Novak').click()
  await expect(page).toHaveURL(/.*52/)
  // Return to homepage
  await page.getByRole('button').click()

  // Expect to find Venus Williams and Serena Williamns
  await page.getByRole('textbox').fill('Williams')
  expect(page.locator('.Venus')).toBeTruthy()
  expect(page.locator('.Serena')).toBeTruthy()

  // Expect id of Venus to be 95
  await page.locator('.Venus').click()
  await expect(page).toHaveURL(/.*95/)
  // Return to homepage
  await page.getByRole('button').click()

  // Expect id of Serena to be 102
  await page.getByRole('textbox').fill('Williams')
  await page.locator('.Serena').click()
  await expect(page).toHaveURL(/.*102/)

})
