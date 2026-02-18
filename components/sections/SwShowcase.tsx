"use client";

import React from "react";
import {
  Laptop,
  Server,
  Zap,
  Layers,
  TrendingUp,
  Package,
  Shield,
  Gauge,
  Cpu,
  Monitor,
  Terminal,
} from "lucide-react";
import { SectionHeading, HeroMetric, Card } from "@/components/ui";
import LaptopComparisonTable from "@/components/sections/LaptopComparisonTable";
import ServerComparisonTable from "@/components/sections/ServerComparisonTable";
import AccuracyChart from "@/components/sections/AccuracyChart";
import SpeedChart from "@/components/sections/SpeedChart";

export const SwShowcase = ({ showQuote = true }: { showQuote?: boolean }) => {
  return (
    <section
      id="sw-showcase"
      className="pt-28 pb-16 md:pb-24 bg-slate-950 border-t border-slate-800"
    >
      <div className="container mx-auto px-6">
        <SectionHeading
          subtitle="Software Acceleration Platform"
          title="AltiCoreSWP: Beats Neural Networks In Any Case With The Same Quality Model"
        />

        {/* Hero Metric Section */}
        <HeroMetric
          color="sw"
          prefix="Up to"
          value="143"
          suffix="x"
          label="Speed Multiplier"
          labelColor="text-teal-400"
        />

        <p className="text-lg text-slate-300 max-w-4xl mx-auto mb-6 leading-relaxed text-center">
          Enterprise data centers are hitting the "Arithmetic Wall," where
          legacy neural networks force a{" "}
          <span className="text-sw font-bold">
            costly dependency on specialized GPUs
          </span>
          .
        </p>
        <p className="text-lg text-slate-300 max-w-4xl mx-auto mb-16 leading-relaxed text-center">
          AltiCoreSWP replaces matrix math with bitwise logic, delivering{" "}
          <span className="text-sw font-bold">17x-41x faster throughput</span>{" "}
          on existing CPUs with no hardware changes.
        </p>

        <SectionHeading
          subtitle="Realized with Sidepath"
          title="Operational benchmarks"
        />

        {/* Validation Quote */}
        {showQuote && (
          <div className="max-w-4xl mx-auto mb-16">
            <div className="border-l-4 border-sw bg-slate-900/50 p-6 rounded-r-xl">
              <blockquote className="text-lg md:text-xl text-slate-200 font-medium leading-relaxed italic mb-4">
                &ldquo;AltiCore performance is transformative. Seeing a software
                synthesis engine outperform established best in class Neural
                Networks solution by such a massive margin signals a fundamental
                shift in AI deployment. AltiCore seems to be at the beginning of
                its journey. I am sure there will be a lot of room for
                optimizations leading to even higher performance&rdquo;
              </blockquote>
              <footer className="text-sw font-mono text-sm uppercase tracking-widest">
                — Patrick Mulvee, CEO, SidePath
              </footer>
            </div>
          </div>
        )}

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 mt-12">
          <Card
            theme="alti"
            className="bg-slate-800/40 border-sw/30 flex flex-col"
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6 text-sw" />
              What is AltiCoreSWP
            </h3>
            <ul className="space-y-3 text-base text-slate-300 leading-relaxed flex-grow">
              <li className="flex items-start gap-2">
                <span className="mt-1">
                  <span className="text-sw">AI Performance Leap:</span> Delivers
                  order-of-magnitude gains in decisions per second on standard
                  compute.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">
                  <span className="text-sw">Arithmetic Wall Solution:</span>{" "}
                  Replaces legacy matrix-math (A x B + C) with bitwise-logic
                  streams.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">
                  <span className="text-sw">Zero-Change Deployment:</span>{" "}
                  Optimized for existing hardware, requiring no physical
                  infrastructure upgrades.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">
                  <span className="text-sw">Logic-Based Synthesis:</span> Trains
                  models from scratch into logic-centric primitives for
                  high-efficiency.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">
                  <span className="text-sw">Superior Unit Economics:</span>{" "}
                  Maximizes throughput-per-watt to reduce the total cost of AI
                  scaling.
                </span>
              </li>
            </ul>
          </Card>

          <Card
            theme="alti"
            className="bg-slate-800/40 border-sw/30 flex flex-col"
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Gauge className="w-6 h-6 text-sw" />
              Key Features
            </h3>
            <ul className="space-y-3 text-base text-slate-300 leading-relaxed flex-grow">
              <li className="flex items-start gap-2">
                <span className="mt-1">
                  <span className="text-sw">Arithmetic-Free Inference:</span>{" "}
                  Eliminates floating-point overhead via hardware-native
                  primitives.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">
                  <span className="text-sw">Massive Throughput:</span> Verified
                  to achieve{" "}
                  <span className="text-sw font-bold">17x-41x faster</span>{" "}
                  performance than optimized baselines.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">
                  <span className="text-sw">AVX2 Optimization:</span>{" "}
                  Specifically tuned for high-speed execution on standard
                  x86/ARM architectures.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">
                  <span className="text-sw">Deterministic Execution:</span>{" "}
                  Optimized for massive steady-state throughput on existing
                  CPUs.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">
                  <span className="text-sw">Horizontal Scalability:</span> Plugs
                  into standard dev-ops workflows for rapid deployment across
                  clusters.
                </span>
              </li>
            </ul>
          </Card>

          <Card
            theme="alti"
            className="bg-slate-800/40 border-sw/30 flex flex-col"
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-sw" />
              Why AltiCoreSWP is Different
            </h3>
            <ul className="space-y-3 text-base text-slate-300 leading-relaxed flex-grow">
              <li className="flex items-start gap-2">
                <span className="mt-1">
                  <span className="text-sw">Bypasses GPU Dependency:</span>{" "}
                  Enables high-speed AI on CPUs, removing the need for costly
                  accelerators.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">
                  <span className="text-sw">Integer-Only Logic:</span> Operates
                  without the &ldquo;calculator&rdquo; overhead of traditional
                  floating-point tensors.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">
                  <span className="text-sw">Server Revitalization:</span>{" "}
                  Extends the life of legacy racks by enabling AI speeds on
                  older hardware.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">
                  <span className="text-sw">Reduced Thermal Load:</span> Lower
                  complexity significantly reduces energy draw and cooling
                  requirements.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">
                  <span className="text-sw">Enterprise Privacy:</span> Local
                  execution within the &ldquo;Server Core&rdquo; ensures data
                  never leaves the loop.
                </span>
              </li>
            </ul>
          </Card>
        </div>

        <SectionHeading
          subtitle="70% INFRASTRUCTURE SAVINGS"
          title="Strategic Advantage"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card
            theme="alti"
            className="bg-slate-800/40 border-sw/30 flex flex-col"
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Cpu className="w-6 h-6 text-sw" />
              Maximize Legacy CPU ROI
            </h3>
            <p className="text-base text-slate-300 leading-relaxed flex-grow">
              Achieve{" "}
              <span className="text-sw font-bold">
                17x to 41x throughput speedups
              </span>{" "}
              on existing workstation and server CPUs.{" "}
              <span className="text-sw font-bold">
                Extend the utility of current hardware assets
              </span>{" "}
              by eliminating the requirement for expensive, supply-constrained
              GPU upgrades.
            </p>
          </Card>

          <Card
            theme="alti"
            className="bg-slate-800/40 border-sw/30 flex flex-col"
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Layers className="w-6 h-6 text-sw" />
              Optimized Logic Synthesis
            </h3>
            <p className="text-base text-slate-300 leading-relaxed flex-grow">
              Bypass the &ldquo;Arithmetic Wall&rdquo; by replacing
              resource-heavy matrix math with{" "}
              <span className="text-sw font-bold">
                hardware-native bitwise logic
              </span>
              . This fundamental shift in computation reduces thermal overhead
              and energy consumption per inference.
            </p>
          </Card>

          <Card
            theme="alti"
            className="bg-slate-800/40 border-sw/30 flex flex-col"
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Package className="w-6 h-6 text-sw" />
              Seamless Stack Integration
            </h3>
            <p className="text-base text-slate-300 leading-relaxed flex-grow">
              Deploy high-throughput workloads on Windows and Linux using
              automated conversion into{" "}
              <span className="text-sw font-bold">drop-in C++ templates</span>.
              Ensure rapid deployment with minimal changes to existing DevOps
              pipelines or software architectures.
            </p>
          </Card>
        </div>

        <SectionHeading
          subtitle="OS & HARDWARE SUPPORT"
          title="Technical Compatibility"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card
            theme="alti"
            className="bg-slate-800/40 border-sw/30 flex flex-col"
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Monitor className="w-6 h-6 text-sw" />
              Target Infrastructure
            </h3>
            <ul className="space-y-3 text-base text-slate-300 leading-relaxed flex-grow">
              <li className="flex items-start gap-2">
                <span className="text-sw mt-1">•</span>
                <span>Windows and Linux compatible</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sw mt-1">•</span>
                <span>Native laptop, desktop, server support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sw mt-1">•</span>
                <span>
                  Optimized for x86 via{" "}
                  <span className="text-sw font-bold">AVX2</span>
                </span>
              </li>
            </ul>
          </Card>

          <Card
            theme="alti"
            className="bg-slate-800/40 border-sw/30 flex flex-col"
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Terminal className="w-6 h-6 text-sw" />
              Implementation Paths
            </h3>
            <ul className="space-y-3 text-base text-slate-300 leading-relaxed flex-grow">
              <li className="flex items-start gap-2">
                <span className="text-sw mt-1">•</span>
                <span>Supports C++ and Python workflows</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sw mt-1">•</span>
                <span>Native support for CUDA paths</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sw mt-1">•</span>
                <span>Unified inference and training framework</span>
              </li>
            </ul>
          </Card>

          <Card
            theme="alti"
            className="bg-slate-800/40 border-sw/30 flex flex-col"
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-sw" />
              Operational Integrity
            </h3>
            <ul className="space-y-3 text-base text-slate-300 leading-relaxed flex-grow">
              <li className="flex items-start gap-2">
                <span className="text-sw mt-1">•</span>
                <span>
                  Logic-centric;{" "}
                  <span className="text-sw font-bold">
                    no FPU/Arithmetic dependency
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sw mt-1">•</span>
                <span>Deterministic, repeatable execution behavior</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sw mt-1">•</span>
                <span>CPU-first; reduces specialized GPU reliance</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};
