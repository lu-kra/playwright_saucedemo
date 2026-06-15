import { test, expect } from '@playwright/test';

test.describe('API Tests', () => {

    test('GET request @api', async ({ request }) => {
        const response = await request.get('https://restful-booker.herokuapp.com/booking');
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        console.log(JSON.stringify(responseBody)); 
    });

});

