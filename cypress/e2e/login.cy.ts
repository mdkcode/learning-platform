import { mockUserSession } from "@/app/configs/utils/mocks";
import { Routes } from "@/app/routes/routes";

describe("Google Login Flow", () => {
  it("should mock Google login and redirect to /dashboard", () => {
    /*
     * Mock the POST request to /api/auth/signin/google
     */
    cy.intercept("POST", "/api/auth/signin/google", {
      statusCode: 200,
      body: mockUserSession,
    }).as("googleSignIn");

    /*
     * Mock the session API response
     */
    cy.intercept("GET", "/api/auth/session", {
      statusCode: 200,
      body: mockUserSession,
    }).as("getSession");
    cy.visit(Routes.HOME);
    cy.contains("button", "Get started").click();
    cy.wait("@googleSignIn");
    cy.wait("@getSession");
    cy.url().should("include", Routes.DASHBOARD);
    cy.contains("Jane Doe").should("be.visible");
  });
});
