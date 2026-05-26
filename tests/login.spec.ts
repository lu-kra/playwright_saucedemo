import test, { expect } from '../fixtures/basePages';

test('Successful login', async ({ page, loginPage }) => {
    await loginPage.gotoLoginPage();
    await loginPage.enterValidUsername();
    await loginPage.enterValidPassword();
    await loginPage.clickLoginButton();
   
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('Successful login_Shorter', async ({ page, loginPage }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login();
   
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('Cannot login with valid username and invalid password', async ({ page, loginPage }) => {
    await loginPage.gotoLoginPage();
    await loginPage.enterValidUsername();
    await loginPage.enterInvalidPassword();
    await loginPage.clickLoginButton();

    await expect(loginPage.invalidCredentialErrorMessage).toBeVisible();
});

test('Cannot login with invalid username and valid password', async ({ page, loginPage }) => {
    await loginPage.gotoLoginPage();
    await loginPage.enterInvalidUsername();
    await loginPage.enterValidPassword();
    await loginPage.clickLoginButton();

    await expect(loginPage.invalidCredentialErrorMessage).toBeVisible();
});

test('Cannot login with blank fields', async ({ page, loginPage }) => {
    await loginPage.gotoLoginPage();
    await loginPage.clickLoginButton();

    await expect(loginPage.requiredCredentialErrorMessage).toBeVisible();
});

test('Cannot login with locked out user', async ({ page, loginPage   }) => {
    await loginPage.gotoLoginPage();
    await loginPage.enterLockedOutUser();
    await loginPage.enterValidPassword();
    await loginPage.clickLoginButton();

    await expect(loginPage.lockedOutUserErrorMessage).toBeVisible();
});




