import test, { expect } from '../fixtures/basePages';

test.describe('Console Log Errors', () => {

    test.only('Page hasno console log errors', async ({ page }) => {

        const logs = [] as any;
        page.on("console", (message) => {
            return logs.push({ message, type: message.type() });
        });

        await page.goto('https://demoqa.com/');
        console.log(logs);
        expect(logs.length).toBe(0);
    });

});