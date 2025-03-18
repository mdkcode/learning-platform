describe("Routing Tests", () => {
  it("Should visit the Home page", () => {
    cy.visit("/");
    cy.contains("Maximize skill, minimize budget");
    cy.contains("Check our most popular courses!");
    cy.location("pathname").should("equal", "/");
  });

  describe("Menu Navigation", () => {
    beforeEach(() => {
      cy.visit("/dashboard");
    });

    it("should render all Menu Links correctly", () => {
      cy.contains("Dashboard").should("be.visible");
      cy.contains("My courses").should("be.visible");
      cy.contains("Exit").should("be.visible");
    });

    it("should navigate to the Dashboard page when the Dashboard link is clicked", () => {
      cy.contains("Dashboard").click();
      cy.location("pathname").should("equal", "/dashboard");
    });

    it("should navigate to the My courses page when the My courses link is clicked", () => {
      cy.contains("My courses").click();
      cy.location("pathname").should("equal", "/dashboard/courses");
    });

    it("should navigate to the Home page when the Exit link is clicked", () => {
      cy.contains("Exit").click();
      cy.location("pathname").should("equal", "/");
    });
  });

  describe("Responsive Layout", () => {
    beforeEach(() => {
      cy.visit("/dashboard");
    });

    it("should display MobileHeader and Links on mobile view", () => {
      cy.viewport(320, 480);
      cy.get('[data-test="mobileHeader"]').should("be.visible");
      cy.get('[data-test="sidenav"]').should("not.be.visible");
      cy.get('[data-test="mobileMenuButton"]').click();
      cy.get('[data-test="mobileMenuRoutes"]').should("exist");
    });

    it("should display MobileHeader and SideNav on larger screens", () => {
      cy.viewport(1024, 768);
      cy.get('[data-test="mobileHeader"]').should("not.be.visible");
      cy.get('[data-test="sidenav"]').should("be.visible");
    });
  });

  describe("Search Functionality", () => {
    it("should update the URL with the search query", () => {
      cy.visit("/dashboard");
      cy.get('input[type="search"]').type("Physics", { delay: 110 });
      cy.get('input[type="search"]').should("have.value", "Physics");
      cy.url().should("include", "search=Physics");
    });
  });

  describe("Courses Page", () => {
    it("Should visit the Courses page", () => {
      cy.visit("/dashboard/courses");
      cy.contains("My courses");
      cy.location("pathname").should("equal", "/dashboard/courses");
    });
  });
});
