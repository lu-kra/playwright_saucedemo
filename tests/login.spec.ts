import { test, expect } from '@playwright/test';
import  { LoginPage } from '../page-objects/LoginPage';


// test('Successful login', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');
//   await page.locator('[data-test="username"]').click();
//   await page.locator('[data-test="username"]').fill('standard_user');
//   await page.locator('[data-test="password"]').click();
//   await page.locator('[data-test="password"]').fill('secret_sauce');
//   await page.locator('[data-test="login-button"]').click();
//   await expect(page.getByText('Swag Labs')).toBeVisible();
// });


test('Successful login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.enterValidUsername();
    await loginPage.enterValidPassword();
    await loginPage.clickLoginButton();
   
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('Successful login_Shorter', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.Login();
   
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
