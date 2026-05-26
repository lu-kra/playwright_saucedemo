import test, { expect } from '../fixtures/basePages';


test.describe('Alerts', () => {     

    test.beforeEach(async ({page }) => {
        await page.goto('https://demoqa.com/alerts');

    });

    test('Simple Alert', async ({ page }) => {
        page.on('dialog', async dialog => {
          await dialog.accept();
        })
        await page.locator('#alertButton').click();
    });

    test('Confirm Alert', async ({ page }) => {
        page.on('dialog', async dialog => {
          await dialog.dismiss();
        })
        await page.locator('#confirmButton').click();
        await expect(page.locator('#confirmResult')).toHaveText('You selected Cancel');
    });

    test('PromptBox Alert', async ({ page }) => {
        page.on('dialog', async dialog => {
          await dialog.accept('Test Input');
        })
        await page.locator('#promtButton').click();
        await expect(page.locator('#promptResult')).toHaveText('You entered Test Input');
    });
})







