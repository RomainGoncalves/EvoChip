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
  subtitle?: string;
  legend?: LegendItem[];
  children: React.ReactNode;
  iconColor?: string;
  iconBgColor?: string;
  iconBorderColor?: string;
  className?: string;
  id?: string;
}

export const ChartCard: React.FC<ChartCardProps> = ({
  icon: Icon,
  title,
  subtitle,
  legend,
  children,
  iconColor = "text-teal-400",
  iconBgColor = "bg-teal-500/10",
  iconBorderColor = "border-teal-500/20",
  className,
  id,
}) => {
  return (
    <div id={id} className="max-w-6xl">
      {/* Main Analytics Card */}
      <div className="bg-slate-900/40 border border-slate-800/80 rounded-[2rem] px-4 pt-6 md:px-6 shadow-3xl backdrop-blur-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 blur-[100px] rounded-full -mr-20 -mt-20"></div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-6 ">
          <div className="flex items-center gap-4">
            <div
              className={`p-3 ${iconBgColor} rounded-2xl border ${iconBorderColor}`}
            >
              <Icon className={`w-6 h-6 ${iconColor}`} />
            </div>
            <div>
              <h4 className="text-white font-mono font-bold uppercase text-sm tracking-widest">
                {title}
              </h4>
            </div>
          </div>

          {/* Legend Component */}
          {legend && legend.length > 0 && (
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
          )}
        </div>

        {subtitle && (
          <p className="text-[15px] text-white text-center font-mono uppercase tracking-tighter mb-10">
            {subtitle}
          </p>
        )}

        {/* Chart Section */}
        <div className={`mb-6 w-full ${className}`}>{children}</div>
      </div>
    </div>
  );
};
