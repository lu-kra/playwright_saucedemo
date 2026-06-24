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
        const response = await request.get('/booking/2', {
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
        const response = await request.post('/booking/2', {
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


    test('PUT request - update booking @api', async ({ request }) => {
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
        console.log(await updateRequest.text());
        expect(updateRequest.ok()).toBeTruthy();
        expect(updateRequest.status()).toBe(200);

        const updatedResponseBody = await updateRequest.json();
        console.log('Updated booking details: ' + JSON.stringify(updatedResponseBody));
        expect(updatedResponseBody).toHaveProperty('firstname', randomFirstName);
        expect(updatedResponseBody).toHaveProperty('lastname', randomLastName);
        expect(updatedResponseBody).toHaveProperty('totalprice', randomNumber);
        expect(updatedResponseBody).toHaveProperty('depositpaid', true);

    });


    test('DELETE request - delete booking @api', async ({ request }) => {
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


        const deleteRequest = await request.delete('/booking/2', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Cookie': `token=${token}`,
            }
        });

        console.log(await deleteRequest.text());
        expect(deleteRequest.status()).toBe(201);
        expect(deleteRequest.statusText()).toBe("Created");

    });



    test.only('Block request @api', async ({ page, context }) => {

        await context.route(/\.(jpg|png)$/, route => route.abort());
        await page.goto('/');
        await page.waitForURL('/');

    });





});
