import React from "react";
import { SectionDivider } from "./SectionDivider";

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  align?: "center" | "left";
}

export const SectionHeading = ({
  subtitle,
  title,
  align = "center",
}: SectionHeadingProps) => (
  <div
    className={`mb-12 md:mb-16 ${
      align === "center" ? "text-center" : "text-left"
    }`}
  >
    <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-2 block">
      {subtitle}
    </span>
    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight capitalize">
      {title}
    </h2>
    <SectionDivider align={align} />
  </div>
);
