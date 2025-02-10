/// <reference types="cypress" />

describe("SauceDemo E2E Tests", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });

  // Test 1: Successful Login with Valid Credentials
  it("should log in successfully with valid credentials", () => {
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    // Verify that the inventory page is displayed.
    cy.url().should("include", "/inventory.html");
    cy.get(".inventory_list").should("be.visible");
  });

  // Test 2: Unsuccessful Login with Locked Out User
  it("should not allow login with a locked out user", () => {
    cy.get('[data-test="username"]').type("locked_out_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    // Check that the error message is displayed.
    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain", "Epic sadface: Sorry, this user has been locked out.");
  });

  // Test 3: Add a Product to the Cart
  it("should add a product to the cart successfully", () => {
    // Login with a valid user.
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    // Add the first product on the list to the cart.
    cy.get(".inventory_item")
      .first()
      .within(() => {
        cy.get("button").click();
      });

    // Verify that the shopping cart badge shows "1".
    cy.get(".shopping_cart_badge").should("contain", "1");
  });

  // Test 4: Complete the Checkout Process
  it("should complete the checkout process successfully", () => {
    // Step 1: Log in.
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    // Step 2: Add a product to the cart.
    cy.get(".inventory_item")
      .first()
      .within(() => {
        cy.get("button").click();
      });

    // Step 3: Navigate to the cart.
    cy.get(".shopping_cart_link").click();
    cy.url().should("include", "/cart.html");

    // Step 4: Initiate the checkout process.
    cy.get('[data-test="checkout"]').click();

    // Step 5: Enter checkout information.
    cy.get('[data-test="firstName"]').type("Robert");
    cy.get('[data-test="lastName"]').type("Navaril");
    cy.get('[data-test="postalCode"]').type("123");
    cy.get('[data-test="continue"]').click();

    // Step 6: Verify that the overview page is displayed and finish checkout.
    cy.url().should("include", "/checkout-step-two.html");
    cy.get('[data-test="finish"]').click();

    // Step 7: Confirm that the order completion page is shown.
    cy.url().should("include", "/checkout-complete.html");
    cy.get(".complete-header").should("contain", "Thank you for your order");
  });
});
