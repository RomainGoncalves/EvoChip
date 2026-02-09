"use client";

import React from "react";
import { Laptop, Server } from "lucide-react";
import { SectionHeading } from "@/components/ui";
import LaptopComparisonTable from "@/components/sections/LaptopComparisonTable";
import ServerComparisonTable from "@/components/sections/ServerComparisonTable";
import AccuracyChart from "@/components/sections/AccuracyChart";
import SpeedChart from "@/components/sections/SpeedChart";

export const SwShowcase = () => {
  return (
    <section
      id="sw-showcase"
      className="py-16 md:py-24 bg-slate-950 border-t border-slate-800"
    >
      <div className="container mx-auto px-6">
        <SectionHeading
          subtitle="Software Acceleration"
          title="AltiCoreSWP: Beats Neural Networks In Any Case, keeping the same quality models"
        />

        {/* Hero Metric Section */}
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <div className="relative">
            <div className="absolute -inset-8 bg-cyan-500/20 blur-3xl rounded-full"></div>
            <h2 className="text-7xl md:text-9xl font-black text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.5)] tracking-tighter mb-2">
              143<span className="text-4xl md:text-6xl">x</span>
            </h2>
            <p className="text-xl md:text-2xl font-mono text-emerald-400 uppercase tracking-widest font-bold">
              Maximum Speed Multiplier
            </p>
          </div>
        </div>

        {/* Validation Quote */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="border-l-4 border-emerald-500 bg-slate-900/50 p-6 rounded-r-xl">
            <blockquote className="text-lg md:text-xl text-slate-200 font-medium leading-relaxed italic mb-4">
              &ldquo;The benchmark results with AltiCoreSWP are transformative. Seeing
              a software synthesis engine outperform established best in class
              Neural Networks solution by such a massive margin signals a
              fundamental shift in AI deployment. AltiCore seems to be at the
              beginning of its journey. there will be a lot of room for
              optimizations leading I am sure to even higher performance&rdquo;
            </blockquote>
            <footer className="text-emerald-400 font-mono text-sm uppercase tracking-widest">
              — CEO, SidePath
            </footer>
          </div>
        </div>

        {/* Hardware Nodes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
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
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
          {/* Edge Performance (Laptop) */}
          <LaptopComparisonTable />
          {/* Enterprise Performance (Server) */}
          <ServerComparisonTable />
          <AccuracyChart />
          <SpeedChart />
        </div>
        {/* ROI Highlight Card */}
        <div className="p-8 bg-gradient-to-br mt-16 from-slate-900 to-slate-950 border border-cyan-500/20 rounded-3xl text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1),transparent)]"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 capitalize">
              AltiCoreSWP on laptop beats neural networks on server
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto text-xl leading-relaxed mb-8">
              AltiCoreSWP restructures legacy workloads into binary logic
              streams, achieving speed gains that neural networks do not match.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-2xl font-bold text-teal-400 pt-2">
                Worst Case Scenario
              </div>
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl">
                <p className="text-[12px] font-mono text-slate-300 capitalize mb-1">
                  AltiCoreSWP Laptop #IPS
                </p>
                <p className="text-2xl font-bold text-teal-400">361.010.000</p>
              </div>
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl">
                <p className="text-[12px] font-mono text-slate-300 capitalize mb-1">
                  C++ TF RUYMT #IPS
                </p>
                <p className="text-2xl font-bold text-teal-400">30.090.000</p>
              </div>
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl">
                <p className="text-[12px] font-mono text-slate-300 capitalize mb-1">
                  Speed Multiplier
                </p>
                <p className="text-2xl font-bold text-teal-400">12x</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
