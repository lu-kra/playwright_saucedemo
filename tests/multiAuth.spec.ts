import { test, expect } from '@playwright/test';


test.use({ storageState: '.auth/user.json' });
test.describe('User Authentication', () => {

    test.only('Verify user is logged in', async ({ page }) => {
        await page.goto('https://demoqa.com/login');
        await page.getByText('lukas').isVisible();
        expect(page.getByRole('button', { name: 'Log out' })).toBeVisible();
    });
});    

test.use({ storageState: '.auth/admin.json' });
test.describe('Admin Authentication', () => {

    test.only('Verify admin is logged in', async ({ page }) => {
        await page.goto('https://demoqa.com/login');
        await page.getByText('lukas_admin').isVisible();
        expect(page.getByRole('button', { name: 'Log out' })).toBeVisible();
    });
});    
