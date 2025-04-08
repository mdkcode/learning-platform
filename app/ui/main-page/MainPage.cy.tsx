import MainPage from "./MainPage";
import * as auth from "@/app/api/auth/[...nextauth]/auth";
import "@/app/globals.css";

describe("<MainPage />", () => {
  it("should render the main heading and paragraph", () => {
    cy.mount(<MainPage />);
    cy.contains("Maximize skill, minimize budget").should("exist");
    cy.contains("Our modern courses across a range of in-demand skills").should(
      "exist"
    );
  });

  it("should render Stats with correct values", () => {
    cy.mount(<MainPage />);
    cy.contains("Members").should("exist");
    cy.contains("29k").should("exist");
    cy.contains("Courses").should("exist");
    cy.contains("1,041").should("exist");
  });

  it("should render the reading image", () => {
    cy.mount(<MainPage />);
    cy.get('[data-test="mainPageImage"]')
      .should("have.class", "w-full")
      .and("have.class", "h-auto");
  });

  it("should render the Get started button and click it", () => {
    cy.mount(<MainPage />);
    cy.contains("Get started").should("exist");
    cy.contains("Get started").click();
    // cy.stub(auth, "handleSignIn").as("signIn");
    // cy.get("@signIn").should("have.been.calledOnce");
  });
});
