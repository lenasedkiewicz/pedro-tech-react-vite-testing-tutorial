import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import UserProfile from "./UserProfile";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("User Profile", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn());
  });

  afterEach(() => {
    vi.resetAllMocks();
    vi.unstubAllGlobals();
  });

  it("Fetches and displays the user data", async () => {
    vi.mocked(globalThis.fetch).mockResolvedValueOnce({
      json: async () => ({
        id: 4,
        name: "John",
        email: "john@gmail.com",
      }),
    });
    render(<UserProfile userId={4} />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: /john/i }),
      ).toBeInTheDocument();
      expect(screen.getByText(/john@gmail.com/i)).toBeInTheDocument();
    });
  });
});
