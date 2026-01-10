import React from "react";
import { LucideIcon } from "lucide-react";

interface LegendItem {
  label: string;
  dotColor: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
}

interface ChartCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  legend: LegendItem[];
  children: React.ReactNode;
}

export const ChartCard: React.FC<ChartCardProps> = ({
  icon: Icon,
  title,
  subtitle,
  legend,
  children,
}) => {
  return (
    <div className="max-w-5xl">
      {/* Main Analytics Card */}
      <div className="bg-slate-900/40 border border-slate-800/80 rounded-[2rem] px-6 pt-6 md:px-10 shadow-3xl backdrop-blur-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 blur-[100px] rounded-full -mr-20 -mt-20"></div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-teal-500/10 rounded-2xl border border-teal-500/20">
              <Icon className="w-6 h-6 text-teal-400" />
            </div>
            <div>
              <h4 className="text-white font-mono font-bold uppercase text-sm tracking-widest">
                {title}
              </h4>
              <p className="text-[10px] text-slate-300 font-mono uppercase tracking-tighter">
                {subtitle}
              </p>
            </div>
          </div>

          {/* Legend Component */}
          <div className="flex flex-wrap gap-4 items-center">
            {legend.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 ${item.bgColor} px-3 py-1 rounded-full ${item.borderColor}`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${item.dotColor}`}
                ></div>
                <span
                  className={`text-[9px] font-mono ${item.textColor} uppercase tracking-widest`}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Chart Section */}
        <div className="h-[450px] w-full">{children}</div>
      </div>
    </div>
  );
};
