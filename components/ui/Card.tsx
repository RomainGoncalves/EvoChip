import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  theme?: "evo" | "alti";
}

export const Card = ({ children, className = "", theme = "evo" }: CardProps) => (
  <div
    className={`backdrop-blur-sm border p-6 md:p-8 rounded-2xl transition-colors ${
      theme === "evo"
        ? "bg-slate-800/40 border-slate-700/50 hover:border-cyan-500/30"
        : "bg-slate-800/80 border-slate-700 hover:border-cyan-500/50"
    } ${className}`}
  >
    {children}
  </div>
);
