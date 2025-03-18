describe("Routing Tests", () => {
  it("Should visit the Home page", () => {
    cy.visit("/");
    cy.contains("Maximize skill, minimize budget");
  });

  it("Should visit the Dashboard", () => {
    cy.visit("/dashboard");
    cy.contains("Welcome");
    cy.contains("Take a look at the available courses");
    cy.url().should("include", "/dashboard");
  });

  it("Should visit the Courses", () => {
    cy.visit("/dashboard/courses");
    cy.contains("My courses");
    cy.url().should("include", "/dashboard/courses");
  });
});
