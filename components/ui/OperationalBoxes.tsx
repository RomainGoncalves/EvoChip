import React from "react";

type ProductColor = "mcu" | "sw" | "hdl";

export interface OperationalBoxItem {
  label: string;
  val: string;
  sub: string;
}

interface OperationalBoxesProps {
  items: OperationalBoxItem[];
  color: ProductColor;
  className?: string;
}

const colorMap: Record<ProductColor, { border: string; text: string }> = {
  mcu: { border: "border-mcu", text: "text-mcu" },
  sw: { border: "border-sw", text: "text-sw" },
  hdl: { border: "border-hdl", text: "text-hdl" },
};

const colsMap: Record<number, string> = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
};

export const OperationalBoxes = ({
  items,
  color,
  className,
}: OperationalBoxesProps) => {
  const { border, text } = colorMap[color];
  const cols =
    colsMap[items.length] ?? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
  return (
    <div className={`max-w-5xl mx-auto${className ? ` ${className}` : ""}`}>
      <div className={`grid ${cols} gap-4 mb-20`}>
        {items.map((s, i) => (
          <div
            key={i}
            className={`bg-slate-800 border-l-4 ${border} p-6 rounded-r-xl`}
          >
            <p
              className={`text-[10px] font-black ${text} uppercase tracking-widest`}
            >
              {s.label}
            </p>
            <p className="text-2xl font-black text-white italic my-1">
              {s.val}
            </p>
            <p className="text-[10px] font-black text-slate-500 uppercase">
              {s.sub}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
