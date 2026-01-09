import React, { useMemo } from "react";
import { Activity, Cpu, Layers, Zap, LayoutGrid } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const App = () => {
  // Accuracy datasets for comparison
  const datasets = {
    accuracyAlticore: [0.8, 1, 0.91, 1, 1, 0.95, 0.85, 1],
    accuracyNN: [0.81, 1, 0.93, 1, 0.96, 0.96, 0.81, 1],
  };

  const labels = [
    "Credit Default",
    "Credit Fraud",
    "Give me some credit",
    "Intelligent Mfgr (High)",
    "Intelligent Mfgr (Low)",
    "Machine Failure",
    "SPECT",
    "UCI_HAR",
  ];

  // Transform data for Recharts - keeping as decimal values
  const chartData = useMemo(() => {
    return labels.map((label, idx) => ({
      name: label,
      alticore: datasets.accuracyAlticore[idx],
      nn: datasets.accuracyNN[idx],
    }));
  }, []);

  const meanAlticore =
    datasets.accuracyAlticore.reduce((a, b) => a + b, 0) /
    datasets.accuracyAlticore.length;
  const meanNN =
    datasets.accuracyNN.reduce((a, b) => a + b, 0) / datasets.accuracyNN.length;

  const longerLabels = {
    UCI_HAR: "UCI Human Activity Recognition",
    SPECT: "SPECT Heart Dataset",
    "Intelligent Mfgr (Low)": "Intelligent Manufacturing (Low Complexity)",
    "Intelligent Mfgr (High)": "Intelligent Manufacturing (High Complexity)",
  };

  // Custom Tooltip Component
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900/95 border border-slate-700 p-4 rounded-xl shadow-2xl backdrop-blur-md">
          <p className="text-[10px] text-slate-400 font-mono mb-3 uppercase tracking-widest border-b border-slate-800 pb-2">
            {longerLabels[label] || label}
          </p>
          <div className="space-y-2">
            <div className="flex justify-between items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.6)]"></div>
                <span className="text-[10px] text-teal-100 font-mono">
                  ALTICORE
                </span>
              </div>
              <span className="text-xs text-white font-mono font-bold">
                {payload[0].value.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]"></div>
                <span className="text-[10px] text-indigo-200 font-mono">
                  Neural Network
                </span>
              </div>
              <span className="text-xs text-white font-mono font-bold">
                {payload[1].value.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="max-w-5xl">
      {/* Main Analytics Card */}
      <div className="bg-slate-900/40 border border-slate-800/80 rounded-[2rem] px-6 pt-6 md:px-10 shadow-3xl backdrop-blur-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 blur-[100px] rounded-full -mr-20 -mt-20"></div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-teal-500/10 rounded-2xl border border-teal-500/20">
              <Activity className="w-6 h-6 text-teal-400" />
            </div>
            <div>
              <h4 className="text-white font-mono font-bold uppercase text-sm tracking-widest">
                Global Accuracy
              </h4>
              <p className="text-[10px] text-slate-300 font-mono uppercase tracking-tighter">
                Alticore vs Neural Network
              </p>
            </div>
          </div>

          {/* Legend Component */}
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">
              <div className="w-2 h-2 rounded-full bg-teal-400"></div>
              <span className="text-[9px] font-mono text-teal-100 uppercase tracking-widest">
                AltiCore
              </span>
            </div>
            <div className="flex items-center gap-2 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
              <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
              <span className="text-[9px] font-mono text-indigo-100 uppercase tracking-widest">
                Neural Network
              </span>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="h-[450px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 10, left: -20, bottom: 80 }}
            >
              <defs>
                <linearGradient id="barTeal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2dd4bf" stopOpacity={1} />
                  <stop offset="100%" stopColor="#2dd4bf" stopOpacity={0.3} />
                </linearGradient>
                <linearGradient id="barIndigo" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity={1} />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity={0.3} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#1e293b"
                vertical={false}
                opacity={0.5}
              />
              <XAxis
                dataKey="name"
                angle={-45}
                textAnchor="end"
                interval={0}
                stroke="#475569"
                fontSize={10}
                tick={{ fill: "#cad5e2", fontFamily: "monospace" }}
                height={80}
              />
              <YAxis
                stroke="#475569"
                fontSize={10}
                tick={{ fill: "#cad5e2", fontFamily: "monospace" }}
                domain={[0, 1.2]}
                ticks={[0, 0.2, 0.4, 0.6, 0.8, 1.0, 1.2]}
                tickFormatter={(val) => val.toFixed(1)}
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: "rgba(255,255,255,0.03)" }}
              />
              <Bar
                dataKey="alticore"
                fill="url(#barTeal)"
                radius={[4, 4, 0, 0]}
                barSize={14}
              />
              <Bar
                dataKey="nn"
                fill="url(#barIndigo)"
                radius={[4, 4, 0, 0]}
                barSize={14}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default App;
