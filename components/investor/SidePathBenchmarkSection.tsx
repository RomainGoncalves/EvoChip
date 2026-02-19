"use client";

import React from "react";
import {
  Clock,
  Award,
  ArrowRight,
  CheckCircle2,
  Laptop,
  Server,
  Cpu as Silicon,
  ChevronRight,
} from "lucide-react";
import { Card } from "@/components/ui";
import LaptopComparisonTable from "@/components/sections/LaptopComparisonTable";
import ServerComparisonTable from "@/components/sections/ServerComparisonTable";
import { ShieldCheck } from "lucide-react";

export const SidePathBenchmarkSection = () => (
  <div id="SidePath-benchmark" className="space-y-12">
    <h3 className="text-2xl font-bold text-white border-l-4 border-cyan-500 pl-4 mb-4 font-mono uppercase ">
      Benchmark Results: Efficiency Superiority{" "}
      <span className="lowercase">w/o model quality compromise</span>
    </h3>

    <p className="text-slate-300 mb-8 leading-relaxed font-sans">
      A joint benchmarking initiative with SidePath confirms that AltiCoreSWP
      (CPU-only) running on a standard laptop consistently outperforms highly
      optimized neural network solutions on server-class hardware by
      approximately 12x to 68x on evaluated subsets, delivering same quality
      models.
    </p>

    {/* The Development Paradox */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
      <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Clock className="w-12 h-12 text-slate-400" />
        </div>
        <h4 className="text-white font-mono font-bold uppercase text-[10px] tracking-widest mb-4">
          Legacy AI Paradox
        </h4>
        <div className="space-y-2">
          <p className="text-xl font-bold text-slate-100 font-sans">
            ~100+ Years
          </p>
          <p className="text-md text-slate-300 font-sans leading-relaxed">
            Reflects senior engineering effort (160k–240k hours) for Google
            TensorFlow libraries. Massive legacy overhead.
          </p>
        </div>
      </div>
      <div className="bg-cyan-900/10 p-6 rounded-xl border border-cyan-500/20 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Award className="w-12 h-12 text-cyan-400" />
        </div>
        <h4 className="text-cyan-400 font-mono font-bold uppercase text-[10px] tracking-widest mb-4">
          AltiCore Status
        </h4>
        <div className="space-y-2">
          <p className="text-xl font-bold text-white font-sans">
            &lt; 6 Man-Years
          </p>
          <p className="text-md text-slate-300 font-sans leading-relaxed">
            Achieved definitive performance leadership with minimal dev-time.
            Currently at the{" "}
            <span className="font-bold text-cyan-400">earliest stage</span> of
            the optimization curve.
          </p>
        </div>
      </div>
    </div>

    {/* Benchmark Heatmap comparison */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
      <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 flex flex-col items-center text-center">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex flex-col items-center">
            <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg mb-2">
              <Laptop className="w-8 h-8 text-cyan-400" />
            </div>
            <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-tighter">
              Dell Precision Laptop
            </span>
          </div>
          <ChevronRight className="w-6 h-6 text-cyan-500 animate-pulse" />
          <div className="flex flex-col items-center">
            <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg mb-2">
              <Server className="w-8 h-8 text-slate-500" />
            </div>
            <span className="text-[10px] font-mono text-slate-500 font-bold uppercase">
              Dell Server (Xeon Gold)
            </span>
          </div>
        </div>
        <p className="text-md text-slate-300 font-sans px-1">
          AltiCore logic running on a laptop consistently outperforms
          high-density server running same datasets.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div className="p-5 bg-slate-900 border border-slate-800 rounded-xl flex items-start gap-4">
          <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-1" />
          <div>
            <h4 className="text-white font-bold text-sm mb-1">
              Accuracy Parity
            </h4>
            <p className="text-md text-slate-300 leading-relaxed font-sans">
              Results confirms a slight accuracy advantage for AltiCore despite
              running with orders of magnitude fewer resources.
            </p>
          </div>
        </div>
        <div className="p-5 bg-slate-900 border border-slate-800 rounded-xl flex items-start gap-4">
          <Silicon className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
          <div>
            <h4 className="text-white font-bold text-sm mb-1">
              Compute Density
            </h4>
            <p className="text-md text-slate-300 leading-relaxed font-sans">
              Uses orders of magnitude fewer parameters and arithmetic
              operations per inference cycle.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 xl:grid-cols-1 gap-6 items-start">
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-center gap-6 group hover:border-cyan-500/50 transition-all">
        <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
          <Laptop className="w-8 h-8 text-cyan-400" />
        </div>
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-tight mb-1">
            Laptop
          </h4>
          <p className="text-slate-300 font-mono">
            Dell Precision 5680 | Intel i7-13700H | 32GB RAM | No GPU
          </p>
          <div className="mt-2 flex gap-2">
            <span className="text-[11px] bg-cyan-900/40 text-cyan-400 px-2 py-0.5 rounded border border-cyan-800">
              i7-Gen13
            </span>
            <span className="text-[11px] bg-cyan-900/40 text-cyan-400 px-2 py-0.5 rounded border border-cyan-800">
              Mobile LPAR
            </span>
          </div>
        </div>
      </div>

      {/* Note about first column */}
      <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/40 p-5 rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-400/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
        <h4 className="text-teal-400 font-bold text-sm uppercase tracking-tight mb-2 flex items-center gap-2">
          <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
          About the table&apos;s first column
        </h4>
        <p className="text-slate-300 text-sm leading-relaxed relative z-10">
          We know that most neural networks implementations are not used
          directly out of the box however we want to highlight the high
          efficiency of AltiCoreSWP.
        </p>
      </div>

      {/* Edge Performance (Laptop) */}
      <LaptopComparisonTable showFirstColumn />

      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-center gap-6 group hover:border-emerald-500/50 transition-all">
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
          <Server className="w-8 h-8 text-emerald-400" />
        </div>
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-tight mb-1">
            Enterprise / Datacenter Server
          </h4>
          <p className="text-slate-300 font-mono">
            Dell PowerEdge | Intel Xeon Gold 5416S
          </p>
          <div className="mt-2 flex gap-2">
            <span className="text-[11px] bg-emerald-900/40 text-emerald-400 px-2 py-0.5 rounded border border-emerald-800">
              Xeon Gold
            </span>
            <span className="text-[11px] bg-emerald-900/40 text-emerald-400 px-2 py-0.5 rounded border border-emerald-800">
              Rack Density
            </span>
          </div>
        </div>
      </div>

      {/* Note about first column */}
      <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/40 p-5 rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-400/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
        <h4 className="text-teal-400 font-bold text-sm uppercase tracking-tight mb-2 flex items-center gap-2">
          <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
          About the table&apos;s first column
        </h4>
        <p className="text-slate-300 text-sm leading-relaxed relative z-10">
          We know that most neural networks implementations are not used
          directly out of the box however we want to highlight the high
          efficiency of AltiCoreSWP.
        </p>
      </div>
      {/* Enterprise Performance (Server) */}
      <ServerComparisonTable showFirstColumn />
    </div>

    {/* DEFINITIVE ACCURACY VALIDATION BLOCK */}
    <Card theme="alti" className="border-green-500/30 bg-green-900/5 mt-8">
      <div className="flex items-center gap-3 mb-2">
        <ShieldCheck className="w-6 h-6 text-green-400" />
        <h4 className="text-white font-bold text-sm uppercase tracking-tight">
          Definitive Accuracy: Zero Compromise for Efficiency
        </h4>
      </div>
      <p className="text-md text-slate-300 leading-relaxed font-sans">
        Benchmarks confirm that AltiCore maintains near-parity or superior test
        accuracy across all key datasets compared to legacy Neural Networks. Our
        logic mathematical framework replaces brute-force matrix math without
        signal loss, proving that 1000x efficiency gains are achievable without
        degrading model intelligence. Testing indicates a slight accuracy
        advantage for AltiCore logic streams in head-to-head scenarios as noted
        in the Benchmark Models Accuracy data.
      </p>
    </Card>

    <p className="text-cyan-300 text-2xl leading-relaxed italic border-l border-slate-700 pl-4">
      Future State: AltiCore is currently at the earliest stage of its
      optimization curve; future algorithmic potential suggests performance
      leads exceeding 100x as compiler logic matures.
    </p>
  </div>
);
