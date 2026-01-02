import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "cta_nav" | "devPrimary" | "devSecondary" | "white";
  className?: string;
}

export const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyle =
    "px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap relative overflow-hidden group";

  const variants = {
    primary:
      "bg-cyan-500 text-slate-900 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:bg-cyan-400",
    secondary:
      "bg-transparent border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500",
    outline:
      "bg-transparent border border-slate-600 text-slate-300 hover:border-white hover:text-white",
    cta_nav:
      "bg-cyan-500 text-slate-900 text-xs px-4 py-2 shadow-[0_0_10px_rgba(6,182,212,0.3)]",
    devPrimary:
      "bg-cyan-500 text-slate-900 shadow-[0_0_20px_rgba(6,182,212,0.5)] font-mono hover:bg-cyan-400",
    devSecondary:
      "bg-transparent border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-mono",
    white: "bg-white text-slate-900 hover:bg-gray-100",
  };
  return (
    <button
      className={`${baseStyle} ${
        variants[variant] || variants.primary
      } ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};
