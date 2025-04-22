import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import MainPage from "@/app/ui/main-page/MainPage";

vi.mock("assets/img/reading.svg", () => ({
  default: () => <svg data-testid="mock-reading-img" />,
}));

vi.mock("@/app/api/auth/[...nextauth]/auth", () => ({
  handleSignIn: vi.fn(),
}));

describe("MainPage", () => {
  it("matches snapshot", () => {
    const { container } = render(<MainPage />);
    expect(container).toMatchSnapshot();
  });
});
