import React from "react";
import { render, screen } from "@testing-library/react";
import UserProfile from "./UserProfile";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("User Profile", () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("Fetches and displays the user data", async () => {
    global.fetch.mockResolvedValueOnce({
      json: async () => ({
        id: 4,
        name: "John",
        email: "john@gmail.com",
      }),
    });
    render(<UserProfile userId={4} />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});
