# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api.spec.ts >> API Tests >> PUT request - update booking @api
- Location: tests\api.spec.ts:84:10

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  18  | 
  19  | 
  20  |  test('GET request with parameters @api', async ({ request }) => {
  21  |         const response = await request.get('/booking/2', {
  22  |             params: {
  23  |                 firstname: 'Jane',
  24  |                 lastname: 'Doe'
  25  |             }
  26  |         });
  27  |         expect(response.ok()).toBeTruthy();
  28  |         expect(response.status()).toBe(200);
  29  |         console.log(await response.json());
  30  |     });
  31  | 
  32  |     test('POST request - create booking @api', async ({ request }) => {
  33  |         const response = await request.post('/booking', {
  34  |             data: {
  35  |                 "firstname" : 'Lukas',
  36  |                 "lastname" : 'Priezvisko',
  37  |                 "totalprice" : 555,
  38  |                 "depositpaid" : true,
  39  |                 "bookingdates" : {
  40  |                     "checkin" : "2026-05-06",
  41  |                     "checkout" : "2026-05-09"
  42  |                 },
  43  |                 "additionalneeds" : "Breakfast, Lunch"
  44  |             }
  45  |         });
  46  |         expect(response.ok()).toBeTruthy();
  47  |         expect(response.status()).toBe(200);
  48  |         console.log(await response.json());
  49  | 
  50  |         const responseBody = await response.json();
  51  |         expect(responseBody.booking).toHaveProperty('firstname', 'Lukas');
  52  |         expect(responseBody.booking).toHaveProperty('lastname', 'Priezvisko');
  53  |         expect(responseBody.booking).toHaveProperty('totalprice', 555);
  54  |         expect(responseBody.booking).toHaveProperty('depositpaid', true);
  55  |     });
  56  | 
  57  | 
  58  |  test('POST request - dynamic data @api', async ({ request }) => {
  59  |         const response = await request.post('/booking', {
  60  |             data: {
  61  |                 "firstname" : randomFirstName,
  62  |                 "lastname" : randomLastName,
  63  |                 "totalprice" : randomNumber,
  64  |                 "depositpaid" : true,
  65  |                 "bookingdates" : {
  66  |                     "checkin" : "2026-05-06",
  67  |                     "checkout" : "2026-05-09"
  68  |                 },
  69  |                 "additionalneeds" : "Breakfast, Lunch"
  70  |             }
  71  |         });
  72  |         expect(response.ok()).toBeTruthy();
  73  |         expect(response.status()).toBe(200);
  74  |         console.log(await response.json());
  75  | 
  76  |         const responseBody = await response.json();
  77  |         expect(responseBody.booking).toHaveProperty('firstname', randomFirstName);
  78  |         expect(responseBody.booking).toHaveProperty('lastname', randomLastName);
  79  |         expect(responseBody.booking).toHaveProperty('totalprice', randomNumber);
  80  |         expect(responseBody.booking).toHaveProperty('depositpaid', true);
  81  |     });
  82  | 
  83  | 
  84  |     test.only('PUT request - update booking @api', async ({ request }) => {
  85  |         const response = await request.post('/auth', {
  86  |             data: {
  87  |                 "username" : "admin",
  88  |                 "password" : "password123"
  89  |             }
  90  |         });
  91  |         console.log(await response.json());
  92  |         expect(response.ok()).toBeTruthy();
  93  |         expect(response.status()).toBe(200);
  94  | 
  95  |         const responseBody = await response.json();
  96  |         token = responseBody.token;
  97  |         console.log('New token is: ' + token);
  98  | 
  99  |         const updateRequest = await request.put('/booking/2', {
  100 |             headers: {
  101 |                 'Content-Type': 'application/json',
  102 |                 'Accept': 'application/json',
  103 |                 'Cookie': `token=${token}`,
  104 |             },
  105 |             data: {
  106 |                 "firstname" : randomFirstName,
  107 |                 "lastname" : randomLastName,
  108 |                 "totalprice" : randomNumber,
  109 |                 "depositpaid" : true,
  110 |                 "bookingdates" : {
  111 |                     "checkin" : "2026-05-06",
  112 |                     "checkout" : "2026-05-09"
  113 |                 },
  114 |                 "additionalneeds" : "Breakfast"
  115 |             }
  116 |         });     
  117 |         console.log(await updateRequest.text());
> 118 |         expect(updateRequest.ok()).toBeTruthy();
      |                                    ^ Error: expect(received).toBeTruthy()
  119 |         expect(updateRequest.status()).toBe(200);
  120 | 
  121 |         const updatedResponseBody = await updateRequest.json();
  122 |         console.log('Updated booking details: ' + JSON.stringify(updatedResponseBody));
  123 |         expect(updatedResponseBody).toHaveProperty('firstname', randomFirstName);
  124 |         expect(updatedResponseBody).toHaveProperty('lastname', randomLastName);
  125 |         expect(updatedResponseBody).toHaveProperty('totalprice', randomNumber);
  126 |         expect(updatedResponseBody).toHaveProperty('depositpaid', true);
  127 | 
  128 |     });
  129 | 
  130 | 
  131 |     test('DELETE request - delete booking @api', async ({ request }) => {
  132 |         const response = await request.post('/auth', {
  133 |             data: {
  134 |                 "username" : "admin",
  135 |                 "password" : "password123"
  136 |             }
  137 |         });
  138 |         console.log(await response.json());
  139 |         expect(response.ok()).toBeTruthy();
  140 |         expect(response.status()).toBe(200);
  141 | 
  142 |         const responseBody = await response.json();
  143 |         token = responseBody.token;
  144 |         console.log('New token is: ' + token);
  145 | 
  146 | 
  147 |         const deleteRequest = await request.delete('/booking/2', {
  148 |             headers: {
  149 |                 'Content-Type': 'application/json',
  150 |                 'Accept': 'application/json',
  151 |                 'Cookie': `token=${token}`,
  152 |             }
  153 |         });
  154 | 
  155 |         console.log(await deleteRequest.text());
  156 |         expect(deleteRequest.status()).toBe(201);
  157 |         expect(deleteRequest.statusText()).toBe("Created");
  158 | 
  159 |     });
  160 | 
  161 | 
  162 | });
  163 | 
```