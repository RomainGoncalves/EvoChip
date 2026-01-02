import React from "react";
import { LucideIcon } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  color: string;
  subtitle: string;
}

export const KPICard = ({ title, value, icon: Icon, color, subtitle }: KPICardProps) => (
  <div className="bg-slate-900 p-5 rounded-xl border border-slate-700 shadow-xl flex flex-col items-start min-h-0 h-auto font-sans">
    <Icon className={`w-6 h-6 ${color} mb-3 font-bold`} />
    <p className="text-sm text-slate-400 uppercase tracking-widest font-mono font-bold uppercase">
      {title}
    </p>
    <h3
      className={`text-xl sm:text-2xl font-extrabold text-white mt-1 ${color} font-sans`}
    >
      {value}
    </h3>
    <p className="text-[10px] text-slate-500 mt-1 uppercase font-semibold font-sans">
      {subtitle}
    </p>
  </div>
);
