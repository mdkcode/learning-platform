import React from "react";
import Courses from "./Courses";
import "@/app/globals.css";

describe("<Courses />", () => {
  it("renders", () => {
    cy.mount(<Courses />);
  });
});
