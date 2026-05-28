# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: visual.spec.ts >> Visual testing >> Visual test - login page
- Location: tests\visual.spec.ts:10:9

# Error details

```
Error: expect(page).toHaveScreenshot(expected) failed

  Expected an image 1280px by 720px, received 428px by 746px. 267854 pixels (ratio 0.29 of all image pixels) are different.

Call log:
  - Expect "toHaveScreenshot" with timeout 5000ms
    - verifying given screenshot expectation
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - Expected an image 1280px by 720px, received 428px by 746px. 267854 pixels (ratio 0.29 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - captured a stable screenshot
  - Expected an image 1280px by 720px, received 428px by 746px. 267854 pixels (ratio 0.29 of all image pixels) are different.

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_user
        - text: locked_out_user
        - text: problem_user
        - text: performance_glitch_user
        - text: error_user
        - text: visual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | import test, { expect } from '../fixtures/basePages';
  2  | 
  3  | 
  4  | test.describe('Visual testing', () => {     
  5  | 
  6  |     test.beforeEach(async ({loginPage }) => {
  7  |         await loginPage.gotoLoginPage();
  8  |     });
  9  | 
  10 |     test('Visual test - login page', async ({ page }) => {
> 11 |         await expect(page).toHaveScreenshot();
     |                            ^ Error: expect(page).toHaveScreenshot(expected) failed
  12 |     });
  13 | 
  14 | 
  15 | })
  16 | 
  17 | 
  18 | 
  19 | 
  20 | 
  21 | 
  22 | 
  23 | 
```