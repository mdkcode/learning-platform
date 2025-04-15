import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Layout from "@/app/dashboard/layout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

vi.mock("next-auth/react", () => ({
  useSession: vi.fn(),
}));

vi.mock("next/navigation", () => ({
  useRouter: vi.fn(),
}));

vi.mock("@/app/ui/dashboard/MobileHeader", () => ({
  MobileHeader: () => <div data-testid="mobile-header">MobileHeader</div>,
}));

vi.mock("@/app/ui/dashboard/sidenav", () => ({
  default: () => <div data-testid="side-nav">SideNav</div>,
}));

describe("Layout", () => {
  it("matches snapshot when session is valid", () => {
    (useSession as ReturnType<typeof vi.fn>).mockReturnValue({
      data: { user: { name: "Test User" }, expires: "future-date" },
    });

    const mockPush = vi.fn();
    (useRouter as ReturnType<typeof vi.fn>).mockReturnValue({ push: mockPush });

    const { container } = render(
      <Layout>
        <div>Test Child</div>
      </Layout>
    );

    expect(container).toMatchSnapshot();
  });
});
