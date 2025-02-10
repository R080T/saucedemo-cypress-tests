# SauceDemo Cypress Tests

This repository contains automated end-to-end tests for the [Sauce Demo](https://www.saucedemo.com/) web application using Cypress with TypeScript. These tests cover the main functionalities of the site and serve as a demonstration of automated testing for critical user flows.

## Test Cases Overview

### 1. Successful Login with Valid Credentials

- **Description:**  
  Verifies that a valid user can log in successfully and be redirected to the inventory page.
- **Why it's essential:**  
  A successful login is the primary gateway for users to access the application's features. This test ensures that the authentication mechanism works as expected.
- **Key Check:**
  - The URL should include `/inventory.html`.
  - The inventory list is visible.

### 2. Unsuccessful Login with Locked Out User

- **Description:**  
  Ensures that a locked-out user is prevented from logging in and receives an appropriate error message.
- **Why it's essential:**  
  Proper error handling for locked-out users is critical for security and user management. This test verifies that unauthorized access is correctly handled.
- **Key Check:**
  - The error message contains "Epic sadface: Sorry, this user has been locked out."

### 3. Add Product to Cart

- **Description:**  
  Confirms that a user can add a product to the shopping cart and that the cart badge updates to reflect the addition.
- **Why it's essential:**  
  Adding items to the cart is a core functionality for any e-commerce platform. This test ensures that the product selection mechanism and cart counter work as expected.
- **Key Check:**
  - The shopping cart badge displays the correct count (e.g., "1" after adding one product).

### 4. Complete Checkout Process

- **Description:**  
  Validates the entire checkout process, from adding a product to completing the purchase.
- **Why it's essential:**  
  The checkout flow is critical for converting a shopping session into an order. This test confirms that every step—from cart review to order confirmation—works seamlessly.
- **Key Check:**
  - The user is taken through the checkout steps and ends on the order confirmation page with a success message ("Thank you for your order").

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (which includes npm)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/R080T/saucedemo-cypress-tests.git
   cd saucedemo-cypress-tests

   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the Tests

1. **Headless Mode (Command Line)**

   ```bash
   npm run headless

   ```

2. **Interactive Mode (Cypress Test Runner)**

   ```bash
   npm run open

   ```
