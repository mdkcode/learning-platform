describe("Cypress login", () => {
  it("should trigger handleSignIn when 'Get started' button is clicked", () => {
    cy.visit("http://localhost:3000/");
    cy.get("button").contains("Get started").click();
  });
});
