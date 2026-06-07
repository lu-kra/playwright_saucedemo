import { test as setup } from '@playwright/test';

let adminUsername = 'lukas_admin';
let adminPassword = 'P@sword1234';
const adminAuthFile = '.auth/admin.json';

let userName = 'lukas';
let userPassword = 'P@sword1234';
const userAuthFile = '.auth/user.json';

setup("Create Admin Auth", async ({ page, context }) => {
    await page.goto('https://demoqa.com/login');
    await page.getByPlaceholder('UserName').fill(adminUsername);
    await page.getByPlaceholder('Password').fill(adminPassword);
    await page.getByRole('button', { name: 'Login' }).click();

    //check if we successfully logged in by checking if the site has change the url to profile page
    await page.waitForURL('https://demoqa.com/profile');

    //save the storage state to a file
    await context.storageState({ path: adminAuthFile });
});

setup("Create User Auth", async ({ page, context }) => {
    await page.goto('https://demoqa.com/login');
    await page.getByPlaceholder('UserName').fill(userName);
    await page.getByPlaceholder('Password').fill(userPassword);
    await page.getByRole('button', { name: 'Login' }).click();  

    //check if we successfully logged in by checking if the site has change the url to profile page
    await page.waitForURL('https://demoqa.com/profile');    

    //save the storage state to a file
    await context.storageState({ path: userAuthFile });
});
