import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/login');    
});

test.describe('Authentication', () => {
    test.skip('User can login with valid credentials', async ({ page }) => {
        await page.getByText('lukas').isVisible();
        expect(page.getByRole('button', { name: 'Log out' })).toBeVisible();
    });
});
  


