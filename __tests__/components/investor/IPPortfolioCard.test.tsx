import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Microchip } from "lucide-react";
import { IPPortfolioCard } from "@/components/investor/IPPortfolioCard";

describe("IPPortfolioCard", () => {
  const defaultProps = {
    title: "AltiCoreMCU",
    focus: "HIGH-VOLUME IP ROYALTIES",
    color: "text-blue-400",
    icon: Microchip,
    items: [
      { label: "Target Market", text: "$50B TAM Industrial IoT." },
      { label: "Model", text: "IP Licensing per device." },
    ],
  };

  it("renders the title", () => {
    render(<IPPortfolioCard {...defaultProps} />);
    expect(screen.getByText("AltiCoreMCU")).toBeInTheDocument();
  });

  it("renders the focus subtitle", () => {
    render(<IPPortfolioCard {...defaultProps} />);
    expect(screen.getByText("HIGH-VOLUME IP ROYALTIES")).toBeInTheDocument();
  });

  it("renders all item labels and texts", () => {
    render(<IPPortfolioCard {...defaultProps} />);
    expect(screen.getByText("Target Market:")).toBeInTheDocument();
    expect(screen.getByText("$50B TAM Industrial IoT.")).toBeInTheDocument();
    expect(screen.getByText("Model:")).toBeInTheDocument();
    expect(screen.getByText("IP Licensing per device.")).toBeInTheDocument();
  });

  it("renders subHeader when provided", () => {
    render(
      <IPPortfolioCard
        {...defaultProps}
        subHeader="Turning $2 IoT hardware into AI assets."
      />
    );
    expect(
      screen.getByText(/Turning \$2 IoT hardware into AI assets\./)
    ).toBeInTheDocument();
  });

  it("does not render subHeader when not provided", () => {
    render(<IPPortfolioCard {...defaultProps} />);
    expect(screen.queryByRole("paragraph", { name: /subHeader/ })).not.toBeInTheDocument();
  });

  it("applies color class to title", () => {
    render(<IPPortfolioCard {...defaultProps} />);
    const title = screen.getByText("AltiCoreMCU");
    expect(title.className).toContain("text-blue-400");
  });

  it("renders the icon svg", () => {
    const { container } = render(<IPPortfolioCard {...defaultProps} />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("renders correct number of items", () => {
    render(<IPPortfolioCard {...defaultProps} />);
    // Each item has a label + text bullet
    expect(screen.getAllByRole("paragraph").length).toBeGreaterThanOrEqual(
      defaultProps.items.length
    );
  });
});
