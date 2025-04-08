import { MyCoursesList } from "./MyCoursesList";
import * as nextAuth from "next-auth/react"; // Import next-auth to mock useSession
import * as reactQuery from "@tanstack/react-query"; // Import react-query to mock useQuery

describe("<MyCoursesList />", () => {
  it("should render courses when session is valid and data is fetched", () => {
    // Mock the session to simulate a valid user session
    cy.stub(nextAuth, "useSession").returns({
      data: { userId: "user123" }, // Simulating a valid user with userId
      status: "authenticated",
    });

    // Mock the useQuery hook to simulate fetching courses
    const mockCourses = [
      { id: "1", name: "Course 1" },
      { id: "2", name: "Course 2" },
    ];
    cy.stub(reactQuery, "useQuery").returns({
      data: mockCourses, // Mock the fetched courses
      isLoading: false, // Simulate loading state as complete
    });

    // Mount the component
    cy.mount(<MyCoursesList />);

    // Check if the courses are displayed
    cy.contains("Course 1").should("exist");
    cy.contains("Course 2").should("exist");
    cy.get("a").should("have.length", 2); // Check that there are 2 links for 2 courses
  });

  it("should show loading state when data is still being fetched", () => {
    // Mock the session
    cy.stub(nextAuth, "useSession").returns({
      data: { userId: "user123" },
      status: "authenticated",
    });

    // Mock the useQuery hook to simulate loading state
    cy.stub(reactQuery, "useQuery").returns({
      data: null, // No courses yet
      isLoading: true, // Simulate loading
    });

    // Mount the component
    cy.mount(<MyCoursesList />);

    // Check if the loading state is displayed
    cy.contains("Loading...").should("exist");
  });

  it("should not render courses if session is invalid", () => {
    // Mock the session to simulate an invalid session
    cy.stub(nextAuth, "useSession").returns({
      data: null, // No user session
      status: "unauthenticated",
    });

    // Mock the useQuery hook to simulate no course data
    cy.stub(reactQuery, "useQuery").returns({
      data: [],
      isLoading: false,
    });

    // Mount the component
    cy.mount(<MyCoursesList />);

    // Check that no courses are rendered
    cy.contains("My courses").should("exist");
    cy.get(".flex").should("not.exist"); // No courses should be listed
  });
});
