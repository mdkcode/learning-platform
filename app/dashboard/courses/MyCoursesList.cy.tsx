import { MyCoursesList } from "./MyCoursesList";
import * as nextAuth from "next-auth/react";
import * as reactQuery from "@tanstack/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("<MyCoursesList />", () => {
  const createQueryClient = () => new QueryClient();
  const mountWithQueryClient = (ui: React.ReactNode) => {
    const queryClient = createQueryClient();
    return cy.mount(
      <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
    );
  };

  it("should show loading state when data is still being fetched", () => {
    cy.stub(nextAuth, "useSession").returns({
      data: { userId: "user123" },
      status: "authenticated",
    });

    cy.stub(reactQuery, "useQuery").returns({
      data: null,
      isLoading: true,
    });
    mountWithQueryClient(<MyCoursesList />);
    cy.contains("Loading...").should("exist");
  });

  it("should not render courses if session is invalid", () => {
    cy.stub(nextAuth, "useSession").returns({
      data: null,
      status: "unauthenticated",
    });
    cy.stub(reactQuery, "useQuery").returns({
      data: [],
      isLoading: false,
    });
    mountWithQueryClient(<MyCoursesList />);
    cy.contains("My courses").should("exist");
    cy.get("a").should("not.exist");
  });

  it("should render courses when session is valid and data is fetched", () => {
    cy.stub(nextAuth, "useSession").returns({
      data: { userId: "user123" },
      status: "authenticated",
    });

    const mockCourses = [
      { id: "1", name: "Course 1" },
      { id: "2", name: "Course 2" },
    ];
    cy.stub(reactQuery, "useQuery").returns({
      data: mockCourses,
      isLoading: false,
    });
    mountWithQueryClient(<MyCoursesList />);
    cy.contains("Course 1").should("exist");
    cy.contains("Course 2").should("exist");
    cy.get("a").should("have.length", 2);
  });
});
