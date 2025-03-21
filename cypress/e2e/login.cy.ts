describe("Cypress login", () => {
  it("should trigger handleSignIn when 'Get started' button is clicked", () => {
    cy.visit("/");
    cy.get("button").contains("Get started").click();
  });
});
