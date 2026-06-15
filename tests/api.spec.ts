import { test, expect } from '@playwright/test';

test.describe('API Tests', () => {

    test.skip('GET request @api', async ({ request }) => {
        const response = await request.get('https://restful-booker.herokuapp.com/booking');
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        console.log(JSON.stringify(responseBody)); 
    });


 test('GET request with parameters @api', async ({ request }) => {
        const response = await request.get('/booking', {
            params: {
                firstname: 'Jane',
                lastname: 'Doe'
            }
        });
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        console.log(await response.json());
    });






});

