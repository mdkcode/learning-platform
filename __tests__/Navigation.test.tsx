import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Navigation from "@/app/ui/main-page/Navigation/Navigation";

vi.mock("@/app/api/auth/[...nextauth]/auth", () => ({
  handleSignIn: vi.fn(),
}));

describe("Navigation", () => {
  it("matches snapshot", () => {
    const { container } = render(<Navigation />);
    expect(container).toMatchSnapshot();
  });

  it("matches snapshot with custom button class", () => {
    const { container } = render(
      <Navigation buttonClassName="bg-blue-500 text-white" />
    );
    expect(container).toMatchSnapshot();
  });
});
