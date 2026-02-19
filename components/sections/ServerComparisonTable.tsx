import React from "react";
import { Table } from "lucide-react";
import { ChartCard } from "@/components/ChartCard";

const datasets = [
  {
    name: "Credit Default",
    server: 11206,
    smulti: 98,
    stf: 40,
    stfRUY: 40,
  },
  {
    name: "Credit Fraud",
    server: 12488,
    smulti: 88,
    stf: 17,
    stfRUY: 18,
  },
  {
    name: "Give Me Some Credit",
    server: 11882,
    smulti: 63,
    stf: 15,
    stfRUY: 54,
  },
  {
    name: "Mfg (High Eff)",
    server: 18482,
    smulti: 103,
    stf: 19,
    stfRUY: 90,
  },
  {
    name: "Mfg (Low Eff)",
    server: 19119,
    smulti: 107,
    stf: 19,
    stfRUY: 97,
  },
  {
    name: "Machine Failure",
    server: 11801,
    smulti: 85,
    stf: 9,
    stfRUY: 32,
  },
  {
    name: "Spect",
    server: 22376,
    smulti: 143,
    stf: 28,
    stfRUY: 110,
  },
];

const HeatmapCell = ({ value, max = 150 }: { value: number; max: number }) => {
  const intensity = Math.max(0.1, value / max);
  const isHigh = value > 10000;
  return (
    <div
      className={`flex items-center justify-center p-1 rounded border border-slate-800 text-[14px] font-mono font-bold transition-all ${
        isHigh ? "drop-shadow-[0_0_8px_rgba(52,211,153,0.4)]" : ""
      }`}
      style={{
        backgroundColor: `rgba(45, 212, 191, ${intensity * 0.9})`,
        color: intensity > 0.5 ? "#fff" : "#10b981",
      }}
    >
      {Math.round(value).toLocaleString()}x
    </div>
  );
};

const ServerComparisonTable = ({ showFirstColumn = false }) => {
  return (
    <ChartCard
      icon={Table}
      title="AltiCoreSWP Vs. Neural Networks (Server)"
      iconColor="text-emerald-400"
      iconBgColor="bg-emerald-500/10"
      iconBorderColor="border-emerald-500/20"
    >
      <div className="overflow-x-auto h-auto">
        <div
          className={`grid ${
            showFirstColumn ? "grid-cols-5" : "grid-cols-4"
          } gap-2 mb-4 font-mono text-[12px] text-slate-300 uppercase tracking-tighter`}
        >
          <div className="col-span-1 text-slate-400">Dataset</div>
          {showFirstColumn && (
            <div className="text-center">Out of the box Neural Networks</div>
          )}
          <div className="text-center">Multicore Python</div>
          <div className="text-center">C++ TensorFlow XNN</div>
          <div className="text-center">C++ TensorFlow RUY MT</div>
        </div>
        <div className="space-y-2">
          {datasets.map((ds) => (
            <div
              key={ds.name}
              className={`grid ${
                showFirstColumn ? "grid-cols-5" : "grid-cols-4"
              } gap-2 items-center`}
            >
              <div className="text-[12px] text-slate-300 font-sans truncate">
                {ds.name}
              </div>
              {showFirstColumn && <HeatmapCell value={ds.server} max={8165} />}
              <HeatmapCell value={ds.smulti} max={220} />
              <HeatmapCell value={ds.stf} max={220} />
              <HeatmapCell value={ds.stfRUY} max={220} />
            </div>
          ))}
        </div>
      </div>
    </ChartCard>
  );
};

export default ServerComparisonTable;
