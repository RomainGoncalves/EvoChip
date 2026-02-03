import React, { useMemo } from "react";
import { Gauge } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  ReferenceLine,
  Label,
} from "recharts";
import { ChartCard } from "@/components/ChartCard";

// Speed Advantage Dataset (x multiplier)
const speedDataRaw = [17.2, 11.7, 10.1, 9.9, 8.2, 7.5, 5.0];

const labels = [
  "SPECT",
  "Credit Fraud",
  "Intelligent Mfgr (Low)",
  "Intelligent Mfgr (High)",
  "Give me some credit",
  "Credit Default",
  "Machine Failure",
];

const longerLabels = {
  SPECT: "SPECT Heart Dataset",
  "Intelligent Mfgr (Low)": "Intelligent Manufacturing (Low Complexity)",
  "Intelligent Mfgr (High)": "Intelligent Manufacturing (High Complexity)",
};

const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900/95 border border-teal-500/30 p-4 rounded-xl shadow-2xl backdrop-blur-md">
        <p className="text-[10px] text-slate-300 font-mono mb-2 uppercase tracking-widest border-b border-slate-800 pb-2">
          {longerLabels[label as keyof typeof longerLabels] || label}
        </p>
        <div className="flex justify-between items-center gap-6">
          <span className="text-[10px] text-teal-400 font-mono font-bold italic">
            SPEED ADVANTAGE
          </span>
          <span className="text-sm text-white font-mono font-black">
            {payload[0].value.toFixed(1)}x
          </span>
        </div>
      </div>
    );
  }
  return null;
};

const App = () => {
  const chartData = useMemo(() => {
    return labels.map((label, idx) => ({
      name: label,
      speed: speedDataRaw[idx],
    }));
  }, []);

  // Specific requested metrics
  const medianValue = 9.9;
  const geometricMeanValue = 9.3;

  return (
    <ChartCard
      className="h-112.5 mb-0!"
      icon={Gauge}
      title="Inference Gains"
      subtitle="AltiCore on Laptop vs Best Neural Network on Server"
      legend={[
        {
          label: `Median: ${medianValue}x`,
          dotColor: "bg-teal-400",
          bgColor: "bg-teal-500/10",
          borderColor: "border border-teal-500/20",
          textColor: "text-teal-100",
        },
        {
          label: `Geo-Mean: ${geometricMeanValue}x`,
          dotColor: "bg-indigo-400",
          bgColor: "bg-indigo-500/10",
          borderColor: "border border-indigo-500/20",
          textColor: "text-indigo-100",
        },
      ]}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{ top: 40, right: 30, left: 10, bottom: 80 }}
        >
          <defs>
            <linearGradient id="speedGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2dd4bf" stopOpacity={1} />
              <stop offset="100%" stopColor="#14b8a6" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#1e293b"
            vertical={false}
            opacity={0.3}
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
            tickFormatter={(val) => `${val}x`}
            domain={[0, "dataMax + 5"]}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "rgba(45,212,191,0.05)" }}
          />

          {/* Geometric Mean Reference Line - Rendered First */}
          <ReferenceLine
            y={geometricMeanValue}
            stroke="#6366f1"
            strokeDasharray="5 5"
            strokeWidth={2}
          >
            <Label
              value={`GEOMETRIC-MEAN: ${geometricMeanValue}x`}
              position="top"
              textAnchor="end"
              dx={0}
              fill="#818cf8"
              fontSize={10}
              fontFamily="monospace"
              fontWeight="bold"
            />
          </ReferenceLine>

          {/* Median Reference Line - Rendered Second to stay "on top" */}
          <ReferenceLine
            y={medianValue}
            stroke="#2dd4bf"
            strokeDasharray="5 5"
            strokeWidth={2}
          >
            <Label
              value={`MEDIAN: ${medianValue}x`}
              position="top"
              textAnchor="start"
              dx={10}
              fill="#2dd4bf"
              fontSize={10}
              fontFamily="monospace"
              fontWeight="bold"
            />
          </ReferenceLine>

          <Bar
            dataKey="speed"
            fill="url(#speedGradient)"
            radius={[6, 6, 0, 0]}
            barSize={48}
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                className="hover:filter hover:brightness-125 transition-all duration-300"
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

export default App;
