import React from "react";
import { Table } from "lucide-react";
import { ChartCard } from "@/components/ChartCard";

const datasets = [
  {
    name: "Credit Default",
    laptop: 3798,
    multicore: 41,
    tensorflow: 7,
    tensorflowRUY: 27,
  },
  {
    name: "Credit Fraud",
    laptop: 5011,
    multicore: 51,
    tensorflow: 7,
    tensorflowRUY: 20,
  },
  {
    name: "Give Me Some Credit",
    laptop: 3879,
    multicore: 42,
    tensorflow: 14,
    tensorflowRUY: 43,
  },
  {
    name: "Mfg (High Eff)",
    laptop: 5664,
    multicore: 50,
    tensorflow: 13,
    tensorflowRUY: 64,
  },
  {
    name: "Mfg (Low Eff)",
    laptop: 6012,
    multicore: 50,
    tensorflow: 13,
    tensorflowRUY: 73,
  },
  {
    name: "Machine Failure",
    laptop: 3921,
    multicore: 32,
    tensorflow: 10,
    tensorflowRUY: 24,
  },
  {
    name: "Spect",
    laptop: 8165,
    multicore: 82,
    tensorflow: 21,
    tensorflowRUY: 92,
  },
  {
    name: "HAR",
    laptop: 5913,
    multicore: 292,
    tensorflow: 181,
    tensorflowRUY: 92,
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
      title="AltiCoreAI Vs. Neural Networks (Laptop)"
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
          <div className="text-center">C++ Tensorflow XNN</div>
          <div className="text-center">C++ Tensorflow RUY MT</div>
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
              <HeatmapCell value={ds.multicore} max={292} />
              <HeatmapCell value={ds.tensorflow} max={181} />
              <HeatmapCell value={ds.tensorflowRUY} max={92} />
            </div>
          ))}
        </div>
      </div>
    </ChartCard>
  );
};

export default LaptopComparisonTable;
