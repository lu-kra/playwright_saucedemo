import { chromium } from "@playwright/test";

async function globalSetup() {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto('https://demoqa.com/login');
    await page.getByPlaceholder('UserName').fill('lukas');
    await page.getByPlaceholder('Password').fill('P@sword1234');
    await page.getByRole('button', { name: 'Login' }).click();
    

    //check if we successfully logged in by checking if the site has change the url to profile page
    await page.waitForURL('https://demoqa.com/profile');

    //save the storage state to a file
    await page.context().storageState({ path: './loginAuth.json' });
    await browser.close();
}

export default globalSetup;

