import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { SectionDivider } from "@/components/ui/SectionDivider";

describe("SectionDivider", () => {
  it("renders a div with gradient classes", () => {
    const { container } = render(<SectionDivider />);
    const el = container.firstChild as HTMLElement;
    expect(el).toBeInTheDocument();
    expect(el.className).toContain("from-cyan-500");
    expect(el.className).toContain("to-blue-600");
  });

  it("centers by default", () => {
    const { container } = render(<SectionDivider />);
    expect((container.firstChild as HTMLElement).className).toContain("mx-auto");
  });

  it("centers when align is center", () => {
    const { container } = render(<SectionDivider align="center" />);
    expect((container.firstChild as HTMLElement).className).toContain("mx-auto");
  });

  it("does not center when align is left", () => {
    const { container } = render(<SectionDivider align="left" />);
    expect((container.firstChild as HTMLElement).className).not.toContain("mx-auto");
  });

  it("has fixed height and width classes", () => {
    const { container } = render(<SectionDivider />);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain("h-1");
    expect(el.className).toContain("w-24");
    expect(el.className).toContain("rounded-full");
  });
});
