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
}

export const IPPortfolioCard = ({
  title,
  focus,
  subHeader,
  items,
  color,
  icon: Icon,
}: IPPortfolioCardProps) => (
  <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 transition-all hover:border-cyan-500/50 flex flex-col font-sans">
    {Icon && <Icon className={`w-8 h-8 ${color} mb-4 font-bold`} />}
    <h4 className={`text-xl font-bold text-white mb-1 font-sans`}>{title}</h4>
    <p
      className={`text-md font-mono uppercase tracking-wider mb-2 ${color} font-bold`}
    >
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
            {item.text}
          </p>
        </div>
      ))}
    </div>
  </div>
);
