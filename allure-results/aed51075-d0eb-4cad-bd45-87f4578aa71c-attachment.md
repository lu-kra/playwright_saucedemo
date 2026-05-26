# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: alerts.spec.ts >> Alerts >> PromptBox Alert
- Location: tests\alerts.spec.ts:26:11

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('#promptButton')

```

# Test source

```ts
  1  | import test, { expect } from '../fixtures/basePages';
  2  | 
  3  | 
  4  | test.describe('Alerts', () => {     
  5  | 
  6  |     test.beforeEach(async ({page }) => {
  7  |         await page.goto('https://demoqa.com/alerts');
  8  | 
  9  |     });
  10 | 
  11 |     test('Simple Alert', async ({ page }) => {
  12 |         page.on('dialog', async dialog => {
  13 |           await dialog.accept();
  14 |         })
  15 |         await page.locator('#alertButton').click();
  16 |     });
  17 | 
  18 |     test('Confirm Alert', async ({ page }) => {
  19 |         page.on('dialog', async dialog => {
  20 |           await dialog.dismiss();
  21 |         })
  22 |         await page.locator('#confirmButton').click();
  23 |         await expect(page.locator('#confirmResult')).toHaveText('You selected Cancel');
  24 |     });
  25 | 
  26 |       test('PromptBox Alert', async ({ page }) => {
  27 |         page.on('dialog', async dialog => {
  28 |           await dialog.accept('Test Input');
  29 |         })
> 30 |         await page.locator('#promptButton').click();
     |                                             ^ Error: locator.click: Target page, context or browser has been closed
  31 |         await expect(page.locator('#promptResult')).toHaveText('You entered: Test Input');
  32 |     });
  33 | })
  34 | 
  35 | 
  36 | 
  37 | 
  38 | 
  39 | 
  40 | 
  41 | 
```