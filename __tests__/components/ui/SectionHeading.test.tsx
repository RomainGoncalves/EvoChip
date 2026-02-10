import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SectionHeading } from "@/components/ui/SectionHeading";

describe("SectionHeading", () => {
  it("renders subtitle and title", () => {
    render(<SectionHeading subtitle="Sub" title="Main Title" />);
    expect(screen.getByText("Sub")).toBeInTheDocument();
    expect(screen.getByText("Main Title")).toBeInTheDocument();
  });

  it("defaults to center alignment", () => {
    const { container } = render(
      <SectionHeading subtitle="Sub" title="Title" />
    );
    expect(container.firstChild).toHaveClass("text-center");
  });

  it("applies left alignment", () => {
    const { container } = render(
      <SectionHeading subtitle="Sub" title="Title" align="left" />
    );
    expect(container.firstChild).toHaveClass("text-left");
  });

  it("renders subtitle in uppercase mono font", () => {
    render(<SectionHeading subtitle="My Subtitle" title="Title" />);
    const subtitle = screen.getByText("My Subtitle");
    expect(subtitle.className).toContain("font-mono");
    expect(subtitle.className).toContain("uppercase");
  });

  it("renders title as h2", () => {
    render(<SectionHeading subtitle="Sub" title="The Title" />);
    expect(screen.getByRole("heading", { level: 2, name: "The Title" })).toBeInTheDocument();
  });

  it("centers the underline bar for center alignment", () => {
    const { container } = render(
      <SectionHeading subtitle="Sub" title="Title" align="center" />
    );
    const bar = container.querySelector(".h-1");
    expect(bar?.className).toContain("mx-auto");
  });

  it("does not center the underline bar for left alignment", () => {
    const { container } = render(
      <SectionHeading subtitle="Sub" title="Title" align="left" />
    );
    const bar = container.querySelector(".h-1");
    expect(bar?.className).not.toContain("mx-auto");
  });
});
