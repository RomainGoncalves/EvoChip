import React from "react";

interface SectionDividerProps {
  align?: "center" | "left";
  className?: string;
}

export const SectionDivider = ({
  align = "center",
  className,
}: SectionDividerProps) => (
  <div
    className={`h-1 w-24 bg-linear-to-r from-cyan-500 to-blue-600 mt-4 ${
      align === "center" ? "mx-auto" : ""
    } rounded-full${className ? ` ${className}` : ""}`}
  />
);
