import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MyCoursesList } from "@/app/dashboard/courses/MyCoursesList";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";

vi.mock("next-auth/react", () => ({
  useSession: vi.fn(),
}));

vi.mock("@tanstack/react-query", () => ({
  useQuery: vi.fn(),
}));

vi.mock("@/app/ui/components/Link/Link", () => ({
  default: ({ label, href }: { label: string; href: string }) => (
    <a href={href}>{label}</a>
  ),
}));

describe("MyCoursesList", () => {
  it("matches snapshot with loaded courses", () => {
    (useSession as ReturnType<typeof vi.fn>).mockReturnValue({
      data: { userId: "user-123" },
    });

    (useQuery as ReturnType<typeof vi.fn>).mockReturnValue({
      data: [
        { id: "course-1", name: "React Basics" },
        { id: "course-2", name: "Advanced TypeScript" },
      ],
      isLoading: false,
    });

    const { container } = render(<MyCoursesList />);
    expect(container).toMatchSnapshot();
  });

  it("matches snapshot while loading", () => {
    (useSession as ReturnType<typeof vi.fn>).mockReturnValue({
      data: { userId: "user-123" },
    });

    (useQuery as ReturnType<typeof vi.fn>).mockReturnValue({
      data: undefined,
      isLoading: true,
    });

    const { container } = render(<MyCoursesList />);
    expect(container).toMatchSnapshot();
  });
});
