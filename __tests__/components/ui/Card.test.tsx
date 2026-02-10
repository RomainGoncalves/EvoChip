import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card } from "@/components/ui/Card";

describe("Card", () => {
  it("renders children", () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText("Card content")).toBeInTheDocument();
  });

  it("defaults to evo theme", () => {
    const { container } = render(<Card>Content</Card>);
    expect(container.firstChild).toHaveClass("bg-slate-800/40");
  });

  it("applies alti theme classes", () => {
    const { container } = render(<Card theme="alti">Content</Card>);
    expect(container.firstChild).toHaveClass("bg-slate-800/80");
  });

  it("merges custom className", () => {
    const { container } = render(<Card className="custom-class">Content</Card>);
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("always has rounded-2xl and border", () => {
    const { container } = render(<Card>Content</Card>);
    expect(container.firstChild).toHaveClass("rounded-2xl", "border");
  });
});
