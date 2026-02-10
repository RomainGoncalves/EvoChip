import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CookieConsentBanner } from "@/components/ui/CookieConsentBanner";

// Mock Next.js Link
vi.mock("next/link", () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

describe("CookieConsentBanner", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("shows the banner when privacyNoticeAccepted is not set", () => {
    render(<CookieConsentBanner />);
    expect(screen.getByText(/EvoChip uses browser storage/)).toBeInTheDocument();
  });

  it("hides the banner when privacyNoticeAccepted is already set", () => {
    localStorage.setItem("privacyNoticeAccepted", "true");
    render(<CookieConsentBanner />);
    expect(screen.queryByText(/EvoChip uses browser storage/)).not.toBeInTheDocument();
  });

  it("renders the Understood button", () => {
    render(<CookieConsentBanner />);
    expect(screen.getByRole("button", { name: "Understood" })).toBeInTheDocument();
  });

  it("renders a link to the privacy page", () => {
    render(<CookieConsentBanner />);
    const link = screen.getByRole("link", { name: "Learn more" });
    expect(link).toHaveAttribute("href", "/privacy");
  });

  it("hides the banner after clicking Understood", async () => {
    render(<CookieConsentBanner />);
    await userEvent.click(screen.getByRole("button", { name: "Understood" }));
    expect(screen.queryByText(/EvoChip uses browser storage/)).not.toBeInTheDocument();
  });

  it("persists the acknowledgment to localStorage on accept", async () => {
    render(<CookieConsentBanner />);
    await userEvent.click(screen.getByRole("button", { name: "Understood" }));
    expect(localStorage.getItem("privacyNoticeAccepted")).toBe("true");
  });
});
