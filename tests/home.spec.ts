import { test, expect } from '@playwright/test';
import  { HomePage } from '../page-objects/HomePage';
import { LoginPage } from '../page-objects/LoginPage';



test('Verify home title', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login();
   
    await expect(homePage.title).toBeVisible();
});

test('Verify add to cart functionality', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login();
    await homePage.clickOnAddToCart();
   
    await expect(homePage.cartBadge).toHaveText("1");  
});

test('Remove item from cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login();
    await homePage.clickOnAddToCart();
   
    await expect(homePage.cartBadge).toHaveText("1");  
    await homePage.clickOnRemoveFromCart();
    await expect(homePage.cartBadge).not.toBeVisible();
});


