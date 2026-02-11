"use client";

import React from "react";
import { FileUp, BrainCog, Cpu, CheckCircle2 } from "lucide-react";

export const HowItWorksSection = () => (
  <div id="how-it-works" className="space-y-12">
    <h3 className="text-2xl font-bold text-white border-l-4 border-cyan-500 pl-4 mb-4 font-mono uppercase tracking-widest">
      ALTICORE: A NEW AND MATHEMATICALLY DISTINCT FOUNDATION FOR AI
    </h3>

    <p className="text-lg text-slate-300 leading-relaxed font-sans mb-8">
      AltiCore is the new mathematical framework that replaces the heavy
      arithmetic and matrix multiplication (A x B + C) of traditional Neural
      Networks with a{" "}
      <span className="font-bold text-cyan-400">unique logic-based format</span>
      . Built to lean into what computers do natively, this{" "}
      <span className="font-bold text-cyan-400">
        mathematically distinct inference architecture
      </span>{" "}
      utilizes hardware-native primitives and logic-level operations to achieve{" "}
      <span className="font-bold text-cyan-400">
        deterministic, fixed-latency execution
      </span>
      .
    </p>

    <p className="text-lg text-slate-300 leading-relaxed font-sans mb-8">
      By abandoning the "square peg in a round hole" approach of probabilistic
      Neural Networks, AltiCore eliminates FPU dependency and dynamic memory
      allocation. This results in an order-of-magnitude leap in throughput—
      <span className="font-bold text-cyan-400">
        performing as few as 36 to 116 operations per inference
      </span>{" "}
      compared to 21,000+ in standard architectures. Whether deployed via{" "}
      <span className="font-bold text-cyan-400">AltiCoreSWP</span>{" "}
      (Server/Desktop),{" "}
      <span className="font-bold text-cyan-400">AltiCoreMCU</span> (Edge/IoT),
      or <span className="font-bold text-cyan-400">AltiCoreHDL</span> (Custom
      Silicon), AltiCore ensures a{" "}
      <span className="font-bold text-cyan-400">private local loop</span> where
      decisions happen at the source and data never leaves the device.
    </p>

    <p className="text-2xl text-cyan-400 font-bold italic text-center leading-relaxed border-y border-cyan-500/20 py-8">
      We don&apos;t &ldquo;run&rdquo; models; we execute them as a stream of
      pure logic.
    </p>

    {/* The Three-Step Transformation */}
    {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        {
          title: "Load Data",
          desc: "Provide labeled training dataset (CSV, API, etc).",
          icon: FileUp,
        },
        {
          title: "Automatic Model Generation",
          desc: "Convert probabilistic weights into Binary Decision Diagrams (BDDs).",
          icon: BrainCog,
        },
        {
          title: "Execute",
          desc: "Deploy a native binary using the CPU's fastest primitive instructions ($AND, OR, XOR$).",
          icon: Cpu,
        },
      ].map((step, i) => (
        <div
          key={i}
          className="p-6 bg-slate-900 border border-cyan-500/20 rounded-xl group hover:border-cyan-400/50 transition-all"
        >
          <div className="flex items-center gap-3 mb-3">
            <step.icon className="w-10 h-10 text-cyan-400 shrink-0" />
            <h4 className="text-white font-mono font-bold uppercase tracking-widest text-sm">
              {i + 1}. {step.title}
            </h4>
          </div>
          <p className="text-md text-slate-300 leading-relaxed font-sans">
            {step.desc}
          </p>
        </div>
      ))}
    </div> */}

    {/* The Efficiency Edge (Comparison Table) */}
    <div className="rounded-xl border border-slate-800 bg-slate-950/50 overflow-hidden">
      <div className="bg-slate-900/80 p-4 border-b border-slate-800">
        <h4 className="text-white font-mono font-bold uppercase tracking-widest">
          The Efficiency Limitations
        </h4>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left font-sans">
          <thead>
            <tr className="border-b border-slate-800 text-slate-300 tracking-wider font-mono font-bold">
              <th className="py-4 px-6 text-white">Metric</th>
              <th className="py-4 px-4 text-center">Legacy AI (Neural Nets)</th>
              <th className="py-4 px-4 text-center text-cyan-400">
                AltiCore (Logic-First)
              </th>
            </tr>
          </thead>
          <tbody className="text-slate-200 divide-y divide-slate-800/50">
            {[
              {
                label: "Operations",
                legacy: "Matrix Mult",
                alti: "Bitwise Boolean",
              },
              {
                label: "Compute",
                legacy: "Heavy ALU/GPU",
                alti: "Minimal Register-Level",
              },
              {
                label: "Data Flow",
                legacy: "High Latency",
                alti: "Zero Bottleneck",
              },
              {
                label: "Reliability",
                legacy: "Probabilistic",
                alti: "Deterministic",
              },
            ].map((row, i) => (
              <tr key={i}>
                <td className="py-4 px-6 font-mono font-bold uppercase text-[12px] text-slate-100">
                  {row.label}
                </td>
                <td className="py-4 px-4 text-center">{row.legacy}</td>
                <td className="py-4 px-4 text-center font-bold text-cyan-400">
                  {row.alti}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    {/* Key Advantages */}
    {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans">
      {[
        "100% Software-Defined",
        "Universal Portability",
        "Safety-Critical Determinism",
      ].map((adv, i) => (
        <div
          key={i}
          className="flex items-center gap-3 p-4 bg-slate-900/50 border border-slate-800 rounded-lg"
        >
          <CheckCircle2 className="w-4 h-4 text-cyan-500" />
          <span className="text-md text-slate-300">{adv}</span>
        </div>
      ))}
    </div> */}
  </div>
);
