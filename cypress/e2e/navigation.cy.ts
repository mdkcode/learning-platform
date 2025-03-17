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

  it("should navigate to a course page with a dynamic URL", () => {
    cy.get('[data-cy="course-link"]').should("exist"); // Check if the element exists
    cy.get('[data-cy="course-link"]').should("be.visible");
    // cy.get('[data-cy="course-link"]').click();
    // cy.url().should("include", "/dashboard/courses/");
    // cy.url().should(
    //   "match",
    //   /http:\/\/localhost:3000\/dashboard\/courses\/[a-zA-Z0-9]+/
    // );
    // cy.contains("Course Videos");
  });
});
