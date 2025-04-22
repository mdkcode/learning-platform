import React from "react";
import Layout from "./layout";
import "@/app/globals.css";
import { AppRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { SessionProvider } from "next-auth/react";
import * as nextRouter from "next/navigation";
import { mockUserSession } from "@/app/configs/utils/mocks";

describe("<Layout />", () => {
  it("should redirect to home if the session is invalid", () => {
    const router = {
      push: cy.stub().as("router:push"),
      back: cy.stub(),
      forward: cy.stub(),
      refresh: cy.stub(),
      replace: cy.stub(),
      prefetch: cy.stub(),
    };
    // Mock useRouter to return the mocked router
    cy.stub(nextRouter, "useRouter").returns(router);

    cy.mount(
      <AppRouterContext value={router}>
        <SessionProvider session={mockUserSession}>
          <Layout>
            <div>Test Child</div>
          </Layout>
        </SessionProvider>
      </AppRouterContext>
    );
    cy.contains("Test Child").should("exist");
    cy.get('[data-test="mobileHeader"]').should("exist");
    cy.get('[data-test="sidenav"]').should("exist");
  });
});
