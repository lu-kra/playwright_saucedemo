import test, { expect } from '../fixtures/basePages';


test.describe('Upload', () => {     

    test.beforeEach(async ({page }) => {
        await page.goto('https://demoqa.com/upload-download');

    });

    test('Upload File', async ({ page }) => {
        await page.locator('#uploadFile').setInputFiles('./speedTest.png');
        await expect(page.locator('#uploadedFilePath')).toContainText('speedTest.png');
    });
})







