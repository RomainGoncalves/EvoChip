import React from "react";

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  align?: "center" | "left";
  theme?: "evo" | "alti";
}

export const SectionHeading = ({
  subtitle,
  title,
  align = "center",
  theme = "evo",
}: SectionHeadingProps) => (
  <div
    className={`mb-12 md:mb-16 ${
      align === "center" ? "text-center" : "text-left"
    }`}
  >
    <span
      className={`${
        theme === "evo" ? "text-cyan-400" : "text-cyan-400"
      } font-mono text-sm tracking-widest uppercase mb-2 block`}
    >
      {subtitle}
    </span>
    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight capitalize">
      {title}
    </h2>
    <div
      className={`h-1 w-24 bg-gradient-to-r ${
        theme === "evo"
          ? "from-cyan-500 to-blue-600"
          : "from-cyan-500 to-blue-600"
      } mt-4 md:mt-6 ${align === "center" ? "mx-auto" : ""} rounded-full`}
    ></div>
  </div>
);
