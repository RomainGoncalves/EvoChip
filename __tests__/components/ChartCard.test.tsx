import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Activity } from "lucide-react";
import { ChartCard } from "@/components/ChartCard";

describe("ChartCard", () => {
  const defaultProps = {
    icon: Activity,
    title: "Inference Speed",
    children: <div>Chart content</div>,
  };

  it("renders the title", () => {
    render(<ChartCard {...defaultProps} />);
    expect(screen.getByText("Inference Speed")).toBeInTheDocument();
  });

  it("renders children", () => {
    render(<ChartCard {...defaultProps} />);
    expect(screen.getByText("Chart content")).toBeInTheDocument();
  });

  it("renders the icon", () => {
    const { container } = render(<ChartCard {...defaultProps} />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("renders subtitle when provided", () => {
    render(<ChartCard {...defaultProps} subtitle="Tokens per second" />);
    expect(screen.getByText("Tokens per second")).toBeInTheDocument();
  });

  it("does not render subtitle when not provided", () => {
    render(<ChartCard {...defaultProps} />);
    expect(screen.queryByText(/subtitle/i)).not.toBeInTheDocument();
  });

  it("renders legend items when provided", () => {
    const legend = [
      {
        label: "AltiCore",
        dotColor: "bg-teal-400",
        bgColor: "bg-teal-500/10",
        borderColor: "border-teal-500/20",
        textColor: "text-teal-400",
      },
      {
        label: "Baseline",
        dotColor: "bg-slate-400",
        bgColor: "bg-slate-500/10",
        borderColor: "border-slate-500/20",
        textColor: "text-slate-400",
      },
    ];
    render(<ChartCard {...defaultProps} legend={legend} />);
    expect(screen.getByText("AltiCore")).toBeInTheDocument();
    expect(screen.getByText("Baseline")).toBeInTheDocument();
  });

  it("does not render legend section when not provided", () => {
    render(<ChartCard {...defaultProps} />);
    expect(screen.queryByText("AltiCore")).not.toBeInTheDocument();
  });
});
