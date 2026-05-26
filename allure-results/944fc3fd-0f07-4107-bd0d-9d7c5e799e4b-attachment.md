# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Login Tests >> Cannot login with invalid username and valid password
- Location: tests\login.spec.ts:41:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Epic sadface: Username and password do not match any user in this service')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Epic sadface: Username and password do not match any user in this service')

```

```yaml
- text: Swag Labs
- textbox "Username": meno
- textbox "Password": secret_sauce
- button "Login"
- heading "Accepted usernames are:" [level=4]
- text: standard_user locked_out_user problem_user performance_glitch_user error_user visual_user
- heading "Password for all users:" [level=4]
- text: secret_sauce
```

# Test source

```ts
  1  | import test, { expect } from '../fixtures/basePages';
  2  | 
  3  | 
  4  | test.describe('Login Tests', () => {     
  5  | 
  6  |     test.beforeEach(async ({loginPage }) => {
  7  |         await loginPage.gotoLoginPage();
  8  | 
  9  |     });
  10 | 
  11 |     test('Successful login', async ({ page, loginPage }) => {
  12 |         await loginPage.enterValidUsername();
  13 |         await loginPage.enterValidPassword();
  14 |         await loginPage.clickLoginButton();
  15 |     
  16 |         await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  17 |     });
  18 | 
  19 |     test('Successful login_Shorter', async ({ page, loginPage }) => {
  20 |         await loginPage.login();
  21 |     
  22 |         await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  23 |     });
  24 | 
  25 |     test('Cannot login with valid username and invalid password', async ({ page, loginPage }) => {
  26 |         test.info().annotations.push({ type: 'Test', description: 'This test will pass if the username is valid and the password is invalid' });
  27 |         await test.step('Enter valid username', async () => {
  28 |             await loginPage.enterValidUsername();
  29 |         });
  30 |         await test.step('Enter invalid password', async () => {
  31 |             await loginPage.enterInvalidPassword();
  32 |         });
  33 |         await test.step('Click login button', async () => {
  34 |             await loginPage.clickLoginButton();
  35 |         });
  36 |          await test.step('Verify error message is visible', async () => {
  37 |             await expect(loginPage.invalidCredentialErrorMessage, 'Invalid credential error message is not visible').toBeVisible();
  38 |         });     
  39 |     });
  40 | 
  41 |     test('Cannot login with invalid username and valid password', async ({ page, loginPage }) => {
  42 |         test.info().annotations.push({ type: 'Test', description: 'This test will pass if the username is invalid and the password is valid' });
  43 |         await test.step('Enter invalid username', async () => {
  44 |             await loginPage.enterInvalidUsername();
  45 |         });
  46 |         await test.step('Enter valid password', async () => {
  47 |             await loginPage.enterValidPassword();
  48 |         });
  49 |         // await test.step('Click login button', async () => {
  50 |         //     await loginPage.clickLoginButton();
  51 |         // });
  52 |         await test.step('Verify error message is visible', async () => {
> 53 |             await expect(loginPage.invalidCredentialErrorMessage).toBeVisible();
     |                                                                   ^ Error: expect(locator).toBeVisible() failed
  54 |         });
  55 |     });
  56 | 
  57 |     test('Cannot login with blank fields', async ({ page, loginPage }) => {
  58 |         test.info().annotations.push({ type: 'Test', description: 'This test will pass if both username and password fields are blank' });
  59 |         await test.step('Click login button', async () => {
  60 |             await loginPage.clickLoginButton();
  61 |         });
  62 |         await test.step('Verify error message is visible', async () => {
  63 |             await expect(loginPage.requiredCredentialErrorMessage).toBeVisible();
  64 |         });
  65 |     });
  66 | 
  67 |     test('Cannot login with locked out user', async ({ page, loginPage   }) => {
  68 |         test.info().annotations.push({ type: 'Test', description: 'This test will pass if the user is locked out' });
  69 |         await test.step('Enter locked out user', async () => {
  70 |             await loginPage.enterLockedOutUser();
  71 |         });
  72 |         await test.step('Enter valid password', async () => {
  73 |             await loginPage.enterValidPassword();
  74 |         });
  75 |         await test.step('Click login button', async () => {
  76 |             await loginPage.clickLoginButton();
  77 |         });
  78 |         await test.step('Verify error message is visible', async () => {
  79 |             await expect(loginPage.lockedOutUserErrorMessage).toBeVisible();
  80 |         });
  81 |     });
  82 | 
  83 | });
  84 | 
  85 | 
  86 | 
  87 | 
  88 | 
  89 | 
```