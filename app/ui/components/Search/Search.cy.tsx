import Search from "./Search"; // Import your Search component
import * as nextRouter from "next/navigation"; // Import useRouter to mock the router

describe("<Search />", () => {
  it("should render the search input field", () => {
    cy.mount(<Search />); // Mount the component in Cypress

    // Check that the input field is rendered
    cy.get('input[type="search"]').should("exist");
  });

  it("should update the search input value when typed into", () => {
    cy.mount(<Search />);

    // Simulate typing in the search input
    cy.get('input[type="search"]')
      .type("React Testing")
      .should("have.value", "React Testing");
  });

  it("should update the URL with the search query after debouncing", () => {
    // Spy on the router's replace function
    const replaceSpy = cy.stub();
    cy.stub(nextRouter, "useRouter").returns({
      replace: replaceSpy, // Mock replace function
    });

    cy.mount(<Search />);

    // Simulate typing in the search input with a 100ms delay (debounce)
    cy.get('input[type="search"]')
      .type("React Testing")
      .should("have.value", "React Testing"); // Ensure the input value is updated

    // Wait for the debounce to trigger
    cy.wait(200); // Wait for debounce delay (debounced by 100ms)

    // Check that the replace method was called and the query is updated in the URL
    cy.wrap(replaceSpy).should(
      "have.been.calledWithMatch",
      /search=React%20Testing/
    );
  });

  it("should reflect the search query from the URL on initial render", () => {
    // Simulate the initial URL with a search query parameter
    cy.visit("/?search=React+Testing");

    cy.mount(<Search />);

    // Check that the input field is pre-filled with the search query from the URL
    cy.get('input[type="search"]').should("have.value", "React Testing");
  });

  it("should clear the search input when the query parameter is removed from the URL", () => {
    cy.visit("/?search=React+Testing"); // Simulate initial search in URL

    // Mount the component
    cy.mount(<Search />);

    // Simulate removing the search query parameter from the URL
    cy.visit("/"); // Navigate to the URL without search query

    // Check if the search input field is cleared
    cy.get('input[type="search"]').should("have.value", "");
  });
});
