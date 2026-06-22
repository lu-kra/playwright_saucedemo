import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test.describe('API Tests', () => {

    const randomFirstName = faker.person.firstName();
    const randomLastName = faker.person.lastName();
    const randomNumber = faker.number.int({ min: 10, max: 100 });
    var token = '';

    test('GET request @api', async ({ request }) => {
        const response = await request.get('https://restful-booker.herokuapp.com/booking/2');
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

    test('POST request - create booking @api', async ({ request }) => {
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


 test('POST request - dynamic data @api', async ({ request }) => {
        const response = await request.post('/booking', {
            data: {
                "firstname" : randomFirstName,
                "lastname" : randomLastName,
                "totalprice" : randomNumber,
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
        expect(responseBody.booking).toHaveProperty('firstname', randomFirstName);
        expect(responseBody.booking).toHaveProperty('lastname', randomLastName);
        expect(responseBody.booking).toHaveProperty('totalprice', randomNumber);
        expect(responseBody.booking).toHaveProperty('depositpaid', true);
    });


    test.only('PUT request - update booking @api', async ({ request }) => {
        const response = await request.post('/auth', {
            data: {
                "username" : "admin",
                "password" : "password123"
            }
        });
        console.log(await response.json());
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        token = responseBody.token;
        console.log('New token is: ' + token);

        const updateRequest = await request.put('/booking/2', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Cookie': `token=${token}`,
            },
            data: {
                "firstname" : randomFirstName,
                "lastname" : randomLastName,
                "totalprice" : randomNumber,
                "depositpaid" : true,
                "bookingdates" : {
                    "checkin" : "2026-05-06",
                    "checkout" : "2026-05-09"
                },
                "additionalneeds" : "Breakfast"
            }
        });     
        console.log(await updateRequest.json());

    });
});
