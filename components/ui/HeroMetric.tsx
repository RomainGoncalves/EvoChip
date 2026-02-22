import React from "react";

type ProductColor = "mcu" | "sw" | "hdl";

interface HeroMetricProps {
  value: string;
  label: string;
  color: ProductColor;
  prefix?: string;
  suffix?: string;
  asterisks?: number;
  labelColor?: string;
}

const colorMap: Record<ProductColor, { text: string; glow: string; shadow: string }> = {
  mcu: {
    text: "text-mcu",
    glow: "bg-blue-400/20",
    shadow: "drop-shadow-[0_0_20px_rgba(96,165,250,0.5)]",
  },
  sw: {
    text: "text-cyan-400",
    glow: "bg-cyan-500/20",
    shadow: "drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]",
  },
  hdl: {
    text: "text-hdl",
    glow: "bg-amber-500/20",
    shadow: "drop-shadow-[0_0_20px_rgba(245,158,11,0.5)]",
  },
};

export const HeroMetric = ({
  value,
  label,
  color,
  prefix,
  suffix,
  asterisks,
  labelColor,
}: HeroMetricProps) => {
  const { text, glow, shadow } = colorMap[color];
  return (
    <div className="flex flex-col items-center justify-center mb-16 text-center">
      <div className="relative">
        <div className={`absolute -inset-8 ${glow} blur-3xl rounded-full`} />
        {/* {prefix && (
          <p className="text-2xl md:text-3xl text-white font-bold mb-2">{prefix}</p>
        )} */}
        <h2 className={`text-7xl md:text-9xl font-black ${text} ${shadow} tracking-tighter mb-2`}>
          {value}
          {suffix && <span className="text-4xl md:text-6xl">{suffix}</span>}
          {asterisks && <span className="text-2xl md:text-3xl align-top">{"*".repeat(asterisks).split("").join("\u2002")}</span>}
        </h2>
        <p className={`text-xl md:text-2xl font-mono ${labelColor ?? text} uppercase tracking-widest font-bold`}>
          {label}
        </p>
      </div>
    </div>
  );
};
