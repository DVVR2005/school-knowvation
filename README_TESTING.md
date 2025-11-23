# Testing Instructions

## Manual Testing

1. Start the development server:
   ```
   npm run dev
   ```
2. Open a browser and visit http://localhost:3000.
3. Manually navigate through the key pages:
   - Home (/)
   - About (/about)
   - Contact (/contact)
   - Pricing (/pricing)
   - Admissions (/admissions)
   - Events (/events)
   - Faculty (/faculty)
   - Programs (/programs)
   - Register (/register)
   - Register Success (/register-success)
4. Verify UI elements and interactions on each page.
5. Check console for errors or warnings.

## Automated Frontend Testing (Cypress)

1. Install Cypress:
   ```
   npm install --save-dev cypress
   ```
2. Run Cypress tests:
   ```
   npx cypress open
   ```
3. Run the tests in the `cypress/e2e` folder:
   - `navigation.cy.ts`: Tests basic page navigations.
   - `api.cy.ts`: Tests basic responses from payment API endpoints.

## Backend API Testing (Curl)

Use these sample curl commands to test API endpoints:

- Pay API:
  ```
  curl -X GET http://localhost:3000/api/pay
  ```

- Payment Callback API:
  ```
  curl -X GET http://localhost:3000/api/payment-callback
  ```

Check for HTTP 200 OK and valid response data.

---

If you want me to generate additional tests or setup, let me know.
