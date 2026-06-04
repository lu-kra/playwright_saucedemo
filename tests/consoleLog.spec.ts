import test, { expect } from '../fixtures/basePages';

test.describe('Console Log Errors', () => {

    test('Page hasno console log errors', async ({ page }) => {

        const logs = [] as any;
        page.on("console", (message) => {
            return logs.push({ message, type: message.type() });
        });

        const errors = [] as any;
        page.on("pageerror", (exception) => {
            return errors.push(exception);
        });

        await page.goto('https://demoqa.com/');
        console.log(logs);
        expect.soft(logs.length).toBe(0);
        console.log(errors);
        expect.soft(errors.length).toBe(0);
    });

});