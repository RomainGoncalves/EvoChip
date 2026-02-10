import React from "react";
import { LucideIcon } from "lucide-react";

interface IPPortfolioItem {
  label: string;
  text: string;
}

interface IPPortfolioCardProps {
  title: string;
  focus: string;
  subHeader?: string;
  items: IPPortfolioItem[];
  color: string;
  icon: LucideIcon;
  highlights?: string[];
}

function highlightText(text: string, highlights: string[]): React.ReactNode {
  if (!highlights.length) return text;

  const escaped = highlights
    .map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");
  const regex = new RegExp(`(${escaped})`, "g");
  const parts = text.split(regex);

  return parts.map((part, i) =>
    highlights.includes(part) ? (
      <span key={i} className="font-bold text-cyan-400">
        {part}
      </span>
    ) : (
      part
    )
  );
}

export const IPPortfolioCard = ({
  title,
  focus,
  subHeader,
  items,
  color,
  icon: Icon,
  highlights = [],
}: IPPortfolioCardProps) => (
  <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 transition-all hover:border-cyan-500/50 flex flex-col font-sans">
    <div className="flex items-center gap-3 mb-1">
      {Icon && <Icon className={`w-6 h-6 ${color} shrink-0`} />}
      <h4 className={`text-xl font-bold ${color} font-sans`}>{title}</h4>
    </div>
    <p className="text-md font-mono uppercase tracking-wider mb-2 text-slate-400 font-bold">
      {focus}
    </p>
    {subHeader && (
      <p className="text-sm italic text-slate-300 mb-4 border-l-2 border-cyan-500/50 pl-3 font-sans">
        &ldquo;{subHeader}&rdquo;
      </p>
    )}
    <div className="space-y-3 flex-grow font-sans">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-start gap-2 font-sans">
          <span
            className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${color.replace(
              "text-",
              "bg-"
            )} font-bold`}
          ></span>
          <p className="text-md text-slate-300 font-sans">
            <span className="font-mono font-bold text-slate-100 uppercase text-md tracking-tight">
              {item.label}:
            </span>{" "}
            {highlightText(item.text, highlights)}
          </p>
        </div>
      ))}
    </div>
  </div>
);
