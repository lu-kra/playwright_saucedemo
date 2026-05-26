# Playwright SauceDemo

Automated UI tests for the SauceDemo demo application using Playwright, with Allure reporting enabled.

## Overview

This project contains Playwright end-to-end tests for the SauceDemo website and supports the following scenarios:

- Login success and failure flows
- Locked-out user validation
- Home page title verification
- Add to cart / remove from cart flows
- Navigation back to products

## Technology Stack

- [Playwright](https://playwright.dev/)
- [Allure Report](https://allurereport.org/)
- [Allure Playwright adapter](https://github.com/allure-framework/allure-js/tree/main/packages/allure-playwright)

## Project Structure

- `tests/` - Playwright test specs
- `fixtures/` - Custom test fixtures
- `page-objects/` - Page Object Model classes
- `playwright.config.ts` - Playwright configuration and reporters
- `allure-results/` - Raw Allure JSON results
- `allure-report/` - Generated HTML report
- `playwright-report/` - HTML reporter output

## Prerequisites

- Node.js 18+
- npm 9+

## Installation

```bash
npm install
npx playwright install
```

## Running Tests

### Run the full test suite

```bash
npm run allTests
```

### Run a specific test file

```bash
npx playwright test tests/login.spec.ts
```

### Run a single test by name

```bash
npx playwright test tests/login.spec.ts --grep "Successful login"
```

## Reports

### HTML report

```bash
npx playwright show-report
```

### Allure report

Generate the Allure report after running tests:

```bash
npx allure generate ./allure-results --clean
```

Open the report:

```bash
npx allure open ./allure-report
```

## Browser Coverage

The Playwright config runs the suite across these browsers/projects:

- Chromium
- Firefox
- WebKit
- Mobile Chrome

## Notes

- The tests currently target the public SauceDemo site at `https://www.saucedemo.com/`.
- The default Playwright reporter is configured to output both HTML and Allure artifacts.
- The test suite uses page objects under `page-objects/` to keep the spec files readable and maintainable.

## Useful Commands

| Command | Description |
| --- | --- |
| `npm run allTests` | Run the full Playwright suite |
| `npx playwright test` | Run Playwright tests |
| `npx playwright show-report` | Open the HTML report |
| `npx allure generate ./allure-results --clean` | Generate the Allure HTML report |
| `npx allure open ./allure-report` | Open the generated Allure report |

## CI / Automation

If you run this project in CI, set `CI=true` to enable retry behavior defined in `playwright.config.ts`.
