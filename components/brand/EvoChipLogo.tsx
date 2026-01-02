import React from "react";

interface EvoChipLogoProps {
  className?: string;
}

export const EvoChipLogo = ({ className = "h-8" }: EvoChipLogoProps) => (
  <svg
    viewBox="0 0 200 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`text-cyan-400 ${className}`}
  >
    <text
      x="100"
      y="32"
      dominantBaseline="middle"
      textAnchor="middle"
      fill="currentColor"
      fontFamily="sans-serif"
      fontWeight="900"
      fontSize="24"
      letterSpacing="2"
    >
      EVOCHIP
    </text>
    <path
      d="M 10 42 H 190"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M 10 42 V 12 H 40"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="46" cy="12" r="3" fill="currentColor" />
    <path
      d="M 52 12 H 190 V 42"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="190" cy="42" r="2" fill="currentColor" />
  </svg>
);
