import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TrendingUp } from "lucide-react";
import { KPICard } from "@/components/investor/KPICard";

describe("KPICard", () => {
  const defaultProps = {
    title: "Exit Valuation",
    value: "> $1 Billion",
    icon: TrendingUp,
    color: "text-green-400",
    subtitle: "Strategic acquisition roadmap.",
  };

  it("renders the title", () => {
    render(<KPICard {...defaultProps} />);
    expect(screen.getByText("Exit Valuation")).toBeInTheDocument();
  });

  it("renders the value", () => {
    render(<KPICard {...defaultProps} />);
    expect(screen.getByText("> $1 Billion")).toBeInTheDocument();
  });

  it("renders the subtitle", () => {
    render(<KPICard {...defaultProps} />);
    expect(screen.getByText("Strategic acquisition roadmap.")).toBeInTheDocument();
  });

  it("applies the color class to the value element", () => {
    render(<KPICard {...defaultProps} />);
    const value = screen.getByText("> $1 Billion");
    expect(value.className).toContain("text-green-400");
  });

  it("renders the icon", () => {
    const { container } = render(<KPICard {...defaultProps} />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });
});
