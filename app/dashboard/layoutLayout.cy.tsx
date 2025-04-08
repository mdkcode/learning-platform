import React from "react";
import Layout from "./layout";
import "@/app/globals.css";
import { SessionProvider } from "next-auth/react";
import * as nextRouter from "next/navigation";

describe("<Layout />", () => {
  it("should redirect to home if the session is invalid", () => {
    cy.stub(nextRouter, "useRouter").returns({
      push: cy.spy(),
    });

    // Mock SessionProvider to simulate an invalid session
    cy.mount(
      <SessionProvider session={null}>
        <Layout>
          <div>Test Child</div>
        </Layout>
      </SessionProvider>
    );

    cy.get("@push").should("have.been.calledWith", "/");
  });

  it("should render children and layout elements when session is valid", () => {
    cy.stub(nextRouter, "useRouter").returns({
      push: cy.spy(),
    });

    // Mock SessionProvider with a valid session
    const mockSession = {
      user: { name: "John Doe" },
      expires: "2025-12-31",
      accessToken: "dsbhkjscd",
      refreshToken: "894655sdc",
      userId: "1111",
    };

    cy.mount(
      <SessionProvider session={mockSession}>
        <Layout>
          <div>Test Child</div>
        </Layout>
      </SessionProvider>
    );

    cy.contains("Test Child").should("exist");
    cy.get("MobileHeader").should("exist");
    cy.get("SideNav").should("exist");
  });
});
