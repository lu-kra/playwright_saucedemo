import test, { expect } from '../fixtures/basePages';


test.describe('Screenshots', () => {     

    test.beforeEach(async ({loginPage }) => {
        await loginPage.gotoLoginPage();
        await loginPage.login();
    });

    test('Viewport Screenshot', async ({ page }) => {
        await page.screenshot({ path: 'screenshots/viewport-screenshot.png' });
    });

    test('Fullpage Screenshot', async ({ page }) => {
        await page.screenshot({ path: 'screenshots/fullpage-screenshot.png', fullPage: true });
    });

     test('Element Screenshot', async ({ page }) => {
        await page.locator('#item_4_img_link').screenshot({ path: 'screenshots/element-screenshot.png'});
    });


})







