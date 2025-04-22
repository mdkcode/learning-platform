import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { CourseCardsList, CourseCard } from "@/app/ui/dashboard/CourseCard";
import { useQuery } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { mockUserSession } from "@/app/configs/utils/mocks";

vi.mock("@tanstack/react-query", () => ({
  useQuery: vi.fn(),
  useMutation: vi.fn(() => ({
    mutate: vi.fn(),
  })),
}));

vi.mock("react-toastify", () => ({
  toast: { success: vi.fn() },
}));

describe("CourseCardsList", () => {
  it("matches snapshot with courses", () => {
    (useQuery as ReturnType<typeof vi.fn>).mockReturnValue({
      data: [
        {
          id: "course-1",
          name: "React Basics",
          description: "Learn the basics of React.js",
        },
        {
          id: "course-2",
          name: "Advanced TypeScript",
          description: "Deep dive into TypeScript features",
        },
      ],
    });

    const { container } = render(
      <SessionProvider session={mockUserSession}>
        <CourseCardsList searchQuery="React" />
      </SessionProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it("matches snapshot with no courses", () => {
    (useQuery as ReturnType<typeof vi.fn>).mockReturnValue({
      data: [],
    });

    const { container } = render(
      <SessionProvider session={mockUserSession}>
        <CourseCardsList searchQuery="React" />
      </SessionProvider>
    );
    expect(container).toMatchSnapshot();
  });
});

describe("CourseCard", () => {
  it("matches snapshot with a course", () => {
    const { container } = render(
      <SessionProvider session={mockUserSession}>
        <CourseCard
          id="course-1"
          name="React Basics"
          description="Learn the basics of React.js"
          image_url="/"
          created_at=""
          duration={5}
        />
      </SessionProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
