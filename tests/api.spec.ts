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

    test.only('POST request - create booking @api', async ({ request }) => {
        const response = await request.post('/booking', {
            data: {
                "firstname" : 'Lukas',
                "lastname" : 'Priezvisko',
                "totalprice" : 555,
                "depositpaid" : true,
                "bookingdates" : {
                    "checkin" : "2026-05-06",
                    "checkout" : "2026-05-09"
                },
                "additionalneeds" : "Breakfast, Lunch"
            }
        });
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        console.log(await response.json());

        const responseBody = await response.json();
        expect(responseBody.booking).toHaveProperty('firstname', 'Lukas');
        expect(responseBody.booking).toHaveProperty('lastname', 'Priezvisko');
        expect(responseBody.booking).toHaveProperty('totalprice', 555);
        expect(responseBody.booking).toHaveProperty('depositpaid', true);
    });

});
