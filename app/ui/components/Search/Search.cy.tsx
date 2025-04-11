import Search from "./Search";
import * as nextRouter from "next/navigation";
import { AppRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

describe("<Search />", () => {
  it("should render the search input field", () => {
    const router = {
      push: cy.stub().as("router:push"),
      back: cy.stub(),
      forward: cy.stub(),
      refresh: cy.stub(),
      replace: cy.stub(),
      prefetch: cy.stub(),
      query: {},
    };

    cy.stub(nextRouter, "useRouter").returns(router);
    cy.mount(
      <AppRouterContext.Provider value={router}>
        <Search />
      </AppRouterContext.Provider>
    );

    cy.get('input[type="search"]').should("exist");
  });
});
