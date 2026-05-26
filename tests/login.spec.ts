import test, { expect } from '../fixtures/basePages';


test.describe('Login Tests', () => {     

    test.beforeEach(async ({loginPage }) => {
        await loginPage.gotoLoginPage();

    });

    test('Successful login', async ({ page, loginPage }) => {
        await loginPage.enterValidUsername();
        await loginPage.enterValidPassword();
        await loginPage.clickLoginButton();
    
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    });

    test('Successful login_Shorter', async ({ page, loginPage }) => {
        await loginPage.login();
    
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    });

    test('Cannot login with valid username and invalid password', async ({ page, loginPage }) => {
        test.info().annotations.push({ type: 'Test', description: 'This test will pass if the username is valid and the password is invalid' });
        await test.step('Enter valid username', async () => {
            await loginPage.enterValidUsername();
        });
        await test.step('Enter invalid password', async () => {
            await loginPage.enterInvalidPassword();
        });
        await test.step('Click login button', async () => {
            await loginPage.clickLoginButton();
        });
         await test.step('Verify error message is visible', async () => {
            await expect(loginPage.invalidCredentialErrorMessage, 'Invalid credential error message is not visible').toBeVisible();
        });     
    });

    test('Cannot login with invalid username and valid password', async ({ page, loginPage }) => {
        test.info().annotations.push({ type: 'Test', description: 'This test will pass if the username is invalid and the password is valid' });
        await test.step('Enter invalid username', async () => {
            await loginPage.enterInvalidUsername();
        });
        await test.step('Enter valid password', async () => {
            await loginPage.enterValidPassword();
        });
        await test.step('Click login button', async () => {
            await loginPage.clickLoginButton();
        });
        await test.step('Verify error message is visible', async () => {
            await expect(loginPage.invalidCredentialErrorMessage).toBeVisible();
        });
    });

    test('Cannot login with blank fields', async ({ page, loginPage }) => {
        test.info().annotations.push({ type: 'Test', description: 'This test will pass if both username and password fields are blank' });
        await test.step('Click login button', async () => {
            await loginPage.clickLoginButton();
        });
        await test.step('Verify error message is visible', async () => {
            await expect(loginPage.requiredCredentialErrorMessage).toBeVisible();
        });
    });

    test('Cannot login with locked out user', async ({ page, loginPage   }) => {
        test.info().annotations.push({ type: 'Test', description: 'This test will pass if the user is locked out' });
        await test.step('Enter locked out user', async () => {
            await loginPage.enterLockedOutUser();
        });
        await test.step('Enter valid password', async () => {
            await loginPage.enterValidPassword();
        });
        await test.step('Click login button', async () => {
            await loginPage.clickLoginButton();
        });
        await test.step('Verify error message is visible', async () => {
            await expect(loginPage.lockedOutUserErrorMessage).toBeVisible();
        });
    });

});





