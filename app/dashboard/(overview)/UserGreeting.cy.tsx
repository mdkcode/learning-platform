import React from "react";
import { UserGreeting } from "./UserGreeting";
import * as nextAuth from "next-auth/react";
import "@/app/globals.css";

describe("<UserGreeting />", () => {
  it("renders with a mock session", () => {
    // Mocking the useSession hook
    cy.stub(nextAuth, "useSession").returns({
      data: { user: { name: "John Doe" } },
      status: "authenticated",
    });
    cy.mount(<UserGreeting />);
    cy.contains("Welcome, John Doe").should("exist");
  });
});
