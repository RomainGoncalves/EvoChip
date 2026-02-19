import React from "react";
import { Table } from "lucide-react";
import { ChartCard } from "@/components/ChartCard";

const datasets = [
  {
    name: "Credit Default",
    laptop: 3798,
    multicore: 41,
    TensorFlow: 7,
    TensorFlowRUY: 27,
  },
  {
    name: "Credit Fraud",
    laptop: 5011,
    multicore: 51,
    TensorFlow: 7,
    TensorFlowRUY: 20,
  },
  {
    name: "Give Me Some Credit",
    laptop: 3879,
    multicore: 42,
    TensorFlow: 14,
    TensorFlowRUY: 43,
  },
  {
    name: "Mfg (High Eff)",
    laptop: 5664,
    multicore: 50,
    TensorFlow: 13,
    TensorFlowRUY: 64,
  },
  {
    name: "Mfg (Low Eff)",
    laptop: 6012,
    multicore: 50,
    TensorFlow: 13,
    TensorFlowRUY: 73,
  },
  {
    name: "Machine Failure",
    laptop: 3921,
    multicore: 32,
    TensorFlow: 10,
    TensorFlowRUY: 24,
  },
  {
    name: "Spect",
    laptop: 8165,
    multicore: 82,
    TensorFlow: 21,
    TensorFlowRUY: 92,
  },
];

const HeatmapCell = ({
  value,
  max = 22300,
}: {
  value: number;
  max: number;
}) => {
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

const LaptopComparisonTable = ({ showFirstColumn = false }) => {
  return (
    <ChartCard
      icon={Table}
      title="AltiCoreSWP Vs. Neural Networks (Laptop)"
      iconColor="text-cyan-400"
      iconBgColor="bg-cyan-500/10"
      iconBorderColor="border-cyan-500/20"
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
              {showFirstColumn && <HeatmapCell value={ds.laptop} max={8165} />}
              <HeatmapCell value={ds.multicore} max={150} />
              <HeatmapCell value={ds.TensorFlow} max={150} />
              <HeatmapCell value={ds.TensorFlowRUY} max={150} />
            </div>
          ))}
        </div>
      </div>
    </ChartCard>
  );
};

export default LaptopComparisonTable;
