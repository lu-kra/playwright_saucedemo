# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: alerts.spec.ts >> Alerts >> Confirm Alert
- Location: tests\alerts.spec.ts:18:9

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('#confirmResult')
Expected: "You selected Cancel"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('#confirmResult')

```

```yaml
- banner:
  - link:
    - /url: https://demoqa.com
    - img
- img
- text: Elements
- img
- img
- text: Forms
- img
- img
- text: Alerts, Frame & Windows
- img
- list:
  - listitem:
    - link "Browser Windows":
      - /url: /browser-windows
      - img
      - text: Browser Windows
  - listitem:
    - link "Alerts":
      - /url: /alerts
      - img
      - text: Alerts
  - listitem:
    - link "Frames":
      - /url: /frames
      - img
      - text: Frames
  - listitem:
    - link "Nested Frames":
      - /url: /nestedframes
      - img
      - text: Nested Frames
  - listitem:
    - link "Modal Dialogs":
      - /url: /modal-dialogs
      - img
      - text: Modal Dialogs
- img
- text: Widgets
- img
- img
- text: Interactions
- img
- img
- text: Book Store Application
- img
- heading "Alerts" [level=1]
- text: Click Button to see alert
- button "Click me"
- text: On button click, alert will appear after 5 seconds
- button "Click me"
- text: On button click, confirm box will appear
- button "Click me"
- text: On button click, prompt box will appear
- button "Click me"
- contentinfo: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
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
> 23 |         await expect(page.locator('#confirmResult')).toHaveText('You selected Cancel');
     |                                                      ^ Error: expect(locator).toHaveText(expected) failed
  24 |     });
  25 | 
  26 |     test('PromptBox Alert', async ({ page }) => {
  27 |         page.on('dialog', async dialog => {
  28 |           await dialog.accept('Test Input');
  29 |         })
  30 |         await page.locator('#promtButton').click();
  31 |         await expect(page.locator('#promptResult')).toHaveText('You entered Test Input');
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