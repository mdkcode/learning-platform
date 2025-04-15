import { render, fireEvent, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MobileHeader } from "@/app/ui/dashboard/MobileHeader";

describe("MobileHeader", () => {
  it("matches snapshot when menu is closed", () => {
    const { container } = render(<MobileHeader />);
    expect(container).toMatchSnapshot();
  });

  it("matches snapshot when menu is open", () => {
    const { container } = render(<MobileHeader />);
    const [toggleButton] = screen.getAllByTestId("mobileMenuButton");
    fireEvent.click(toggleButton);
    expect(container).toMatchSnapshot();
  });
});
