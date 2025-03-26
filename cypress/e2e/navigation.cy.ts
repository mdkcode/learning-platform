import { Routes } from "@/app/routes/routes";
const VIEWPORTS = {
  MOBILE: { width: 320, height: 480 },
  TABLET: { width: 1024, height: 768 },
};

describe("Routing Tests", () => {
  it("Should visit the Home page", () => {
    cy.visit(Routes.HOME);
    cy.contains("Maximize skill, minimize budget");
    cy.contains("Check our most popular courses!");
    cy.location("pathname").should("equal", Routes.HOME);
  });

  describe("Menu Navigation", () => {
    beforeEach(() => {
      cy.visit(Routes.DASHBOARD);
    });

    it("should render all Menu Links correctly", () => {
      cy.contains("Dashboard").should("be.visible");
      cy.contains("My courses").should("be.visible");
      cy.contains("Exit").should("be.visible");
    });

    it("should navigate to the Dashboard page when the Dashboard link is clicked", () => {
      cy.contains("Dashboard").click();
      cy.location("pathname").should("equal", Routes.DASHBOARD);
    });

    it("should navigate to the My courses page when the My courses link is clicked", () => {
      cy.contains("My courses").click();
      cy.location("pathname").should("equal", Routes.COURSES);
    });

    it("should navigate to the Home page when the Exit link is clicked", () => {
      cy.contains("Exit").click();
      cy.location("pathname").should("equal", Routes.HOME);
    });
  });

  describe("Responsive Layout", () => {
    beforeEach(() => {
      cy.visit(Routes.DASHBOARD);
    });

    it("should display MobileHeader and Links on mobile view", () => {
      cy.viewport(VIEWPORTS.MOBILE.width, VIEWPORTS.MOBILE.height);
      cy.get('[data-test="mobileHeader"]').should("be.visible");
      cy.get('[data-test="sidenav"]').should("not.be.visible");
      cy.get('[data-test="mobileMenuButton"]').click();
      cy.get('[data-test="mobileMenuRoutes"]').should("exist");
    });

    it("should display MobileHeader and SideNav on larger screens", () => {
      cy.viewport(VIEWPORTS.TABLET.width, VIEWPORTS.TABLET.height);
      cy.get('[data-test="mobileHeader"]').should("not.be.visible");
      cy.get('[data-test="sidenav"]').should("be.visible");
    });
  });

  describe("Search Functionality", () => {
    it("should update the URL with the search query", () => {
      cy.visit(Routes.DASHBOARD);
      cy.get('input[type="search"]').type("Physics", { delay: 110 });
      cy.get('input[type="search"]').should("have.value", "Physics");
      cy.url().should("include", "search=Physics");
    });
  });

  describe("Courses Page", () => {
    it("Should visit the Courses page", () => {
      cy.visit(Routes.COURSES);
      cy.contains("My courses");
      cy.location("pathname").should("equal", Routes.COURSES);
    });
  });
});
