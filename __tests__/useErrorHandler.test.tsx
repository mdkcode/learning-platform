import { renderHook } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { useErrorHandler } from "@/app/configs/hooks/useErrorHandler";
import { toast } from "react-toastify";

vi.mock("react-toastify", () => ({
  toast: {
    error: vi.fn(),
  },
}));

describe("useErrorHandler", () => {
  it("should call toast.error with the correct message", () => {
    const { result } = renderHook(() => useErrorHandler());
    const error = new Error("Something went wrong");

    result.current(error);

    expect(toast.error).toHaveBeenCalledWith("Something went wrong", {
      position: "top-center",
    });
  });
});
