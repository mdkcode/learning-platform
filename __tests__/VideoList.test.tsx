import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { VideoList } from "@/app/dashboard/courses/[courseId]/VideoList";
import { useQuery } from "@tanstack/react-query";
import { convertSecondsToMinutes } from "@/app/configs/utils/format";

vi.mock("@tanstack/react-query", () => ({
  useQuery: vi.fn(),
}));

vi.mock("@/app/configs/utils/format", () => ({
  convertSecondsToMinutes: vi.fn(),
}));

describe("VideoList", () => {
  it("matches snapshot with videos", () => {
    (useQuery as ReturnType<typeof vi.fn>).mockReturnValue({
      data: [
        {
          id: "vid-1",
          title: "Introduction to the Course",
          duration: 600,
          video_url: "https://example.com/video1.mp4",
        },
        {
          id: "vid-2",
          title: "Deep Dive into React",
          duration: 900,
          video_url: "https://example.com/video2.mp4",
        },
      ],
    });

    (convertSecondsToMinutes as ReturnType<typeof vi.fn>).mockImplementation(
      (seconds: number) => (seconds / 60).toFixed(0)
    );

    const { container } = render(<VideoList id="course-123" />);
    expect(container).toMatchSnapshot();
  });

  it("matches snapshot with no videos", () => {
    (useQuery as ReturnType<typeof vi.fn>).mockReturnValue({ data: [] });

    const { container } = render(<VideoList id="course-123" />);
    expect(container).toMatchSnapshot();
  });
});
