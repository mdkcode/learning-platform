import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { UserGreeting } from "@/app/dashboard/(overview)/UserGreeting";
import { useSession } from "next-auth/react";

vi.mock("next-auth/react", () => ({
  useSession: vi.fn(),
}));

describe("UserGreeting", () => {
  it("matches snapshot with user name", () => {
    (useSession as ReturnType<typeof vi.fn>).mockReturnValue({
      data: {
        user: {
          name: "Alice",
        },
        expires: "future-date",
      },
    });

    const { container } = render(<UserGreeting />);
    expect(container).toMatchSnapshot();
  });

  it("matches snapshot without user name", () => {
    (useSession as ReturnType<typeof vi.fn>).mockReturnValue({
      data: null,
    });

    const { container } = render(<UserGreeting />);
    expect(container).toMatchSnapshot();
  });
});
