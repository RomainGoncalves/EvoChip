"use client";

import React from "react";
import {
  Activity,
  Cpu,
  TrendingUp,
  Layers,
  Microchip,
  Zap,
  Shield,
  GitMerge,
} from "lucide-react";
import {
  SectionHeading,
  Card,
  OperationalBoxes,
  HeroMetric,
} from "@/components/ui";
import type { OperationalBoxItem } from "@/components/ui";

const HDL_STATS: OperationalBoxItem[] = [
  { label: "Throughput", val: "1", sub: "Inference Per Clock Cycle" },
  {
    label: "Fixed Latency",
    val: "~100",
    sub: "Clock Cycles (Model Dependent)",
  },
  { label: "Computation", val: "Zero FPU", sub: "Logic-Dominant" },
  { label: "Silicon Footprint", val: "Minimal", sub: "Gate utilization" },
];

export const HdlShowcase = () => (
  <section
    id="hdl-showcase"
    className="pt-28 pb-16 md:pb-24 bg-slate-900 border-t border-slate-800"
  >
    <div className="container mx-auto px-6">
      <SectionHeading
        subtitle="Hardware IP"
        title="AltiCoreHDL: Minimal Gate Count, Maximum Efficiency"
      />

      {/* Hero Metric Section */}
      <HeroMetric
        color="hdl"
        prefix="Proven"
        value="100"
        suffix="%"
        label="deterministic"
        labelColor="text-yellow-400"
      />

      <p className="text-lg text-slate-300 leading-relaxed mb-6 text-center max-w-5xl mx-auto">
        Conventional neural networks are fundamentally mismatched for raw
        silicon. Their reliance on heavy matrix arithmetic introduces{" "}
        <span className="text-hdl font-bold">unpredictable timing jitter</span>,
        demands external memory fetch cycles, and consumes excessive gate area.
      </p>
      <p className="text-lg text-slate-300 leading-relaxed mb-12 text-center max-w-5xl mx-auto">
        AltiCoreHDL synthesizes intelligence directly into logic-dominant
        operator chains. By completely{" "}
        <span className="text-hdl font-bold">
          bypassing floating-point arithmetic
        </span>
        , it delivers strictly deterministic,{" "}
        <span className="text-hdl font-bold">
          one-inference-per-clock-cycle throughput
        </span>
        —requiring zero external memory and drastically reducing your overall
        silicon footprint.
      </p>
      {/* Operational boxes */}
      <SectionHeading subtitle="" title="Operational Benchmarks" />
      <OperationalBoxes items={HDL_STATS} color="hdl" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card
          theme="alti"
          className="bg-slate-800/40 border-hdl/30 flex flex-col"
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Cpu className="w-6 h-6 text-hdl" />
            What is AltiCoreHDL
          </h3>
          <ul className="space-y-3 text-base text-slate-300 leading-relaxed grow">
            <li className="flex items-start gap-2">
              <span className="mt-1">
                <span className="text-hdl">
                  Deterministic Logic for Silicon:
                </span>{" "}
                Hardware IP that maps AI models trained in the AltiCore
                framework directly into{" "}
                <span className="text-hdl font-bold">FPGA and ASIC logic</span>.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">
                <span className="text-hdl">Arithmetic Wall Solution:</span>{" "}
                Replaces heavy arithmetic and matrix math with hardware-native
                primitives and logic-dominant operator chains.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">
                <span className="text-hdl">Hard-Wired Performance:</span>{" "}
                Enables extreme-throughput execution delivering{" "}
                <span className="text-hdl font-bold">
                  exactly one inference per clock cycle per clock
                </span>
                .
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">
                <span className="text-hdl">True Determinism:</span> Guaranteed
                hard-real-time execution via fixed-depth synchronous pipelines
                and strictly static execution schedules.
              </span>
            </li>
          </ul>
        </Card>

        <Card
          theme="alti"
          className="bg-slate-800/40 border-hdl/30 flex flex-col"
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Layers className="w-6 h-6 text-hdl" />
            Key Features
          </h3>
          <ul className="space-y-3 text-base text-slate-300 leading-relaxed grow">
            <li className="flex items-start gap-2">
              <span className="mt-1">
                <span className="text-hdl">Minimal Gate Count:</span> Uses a
                mathematically distinct architecture to radically reduce
                programmable{" "}
                <span className="text-hdl font-bold">
                  fabric overhead and silicon footprint
                </span>
                .
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">
                <span className="text-hdl">Memory Efficiency:</span> Operates
                using on-chip resources only; zero external DRAM fetch cycles
                are required for inference.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">
                <span className="text-hdl">Native HDL Output:</span> Delivered
                as immediately synthesizable VHDL RTL cores with clearly defined
                input/output intefaces.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">
                <span className="text-hdl">Fixed Latency:</span> Provides a
                cycle-constant core latency (e.g., ~100 clock cycles) that{" "}
                <span className="text-hdl font-bold">
                  scales predictably with model depth
                </span>
                .
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">
                <span className="text-hdl">Safety-Critical Reliability:</span>{" "}
                Designed for compliance-sensitive products requiring predictable
                timing and repeatable behavior.
              </span>
            </li>
          </ul>
        </Card>

        <Card
          theme="alti"
          className="bg-slate-800/40 border-hdl/30 flex flex-col"
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-hdl" />
            Why AltiCoreHDL is Different
          </h3>
          <ul className="space-y-3 text-base text-slate-300 leading-relaxed grow">
            <li className="flex items-start gap-2">
              <span className="mt-1">
                <span className="text-hdl">Logic-Level Synthesis:</span>{" "}
                Transforms models into{" "}
                <span className="text-hdl font-bold">
                  mathematically efficient, discrete logic circuits
                </span>{" "}
                rather than relying on floating-point tensor ALUs.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">
                <span className="text-hdl">Zero-BOM AI Scaling:</span>{" "}
                Integrates intelligence directly into existing FPGA fabric or
                ASIC designs without requiring dedicated, power-hungry AI
                co-processors.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">
                <span className="text-hdl">Wire-Speed Throughput:</span> Capable
                of processing over 3.18 billion inferences per second on
                mainstream, edge-class FPGA hardware (e.g., Xilinx Zynq
                UltraScale+ ZU7EV) via parallel core instantiation.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">
                <span className="text-hdl">Unrivaled Power Efficiency:</span>{" "}
                Logic-dominant compute drastically reduces energy and thermal
                footprints, making it ideal for &ldquo;Sentinel&rdquo; always-on
                monitoring devices.
              </span>
            </li>
          </ul>
        </Card>
      </div>

      <SectionHeading
        subtitle="MINIMAL SILICON FOOTPRINT"
        title="Strategic Advantage"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card
          theme="alti"
          className="bg-slate-800/40 border-hdl/30 flex flex-col"
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Microchip className="w-6 h-6 text-hdl" />
            Pathway to Production Silicon
          </h3>
          <p className="text-base text-slate-300 leading-relaxed flex-grow">
            Map models directly into{" "}
            <span className="text-hdl font-bold">FPGA and ASIC logic</span>.{" "}
            <span className="text-hdl font-bold">
              Drop-in synthesizable VHDL RTL cores
            </span>{" "}
            ensure seamless migration from software prototypes to custom
            hardware, streamlining integration and slashing development cycles.
          </p>
        </Card>

        <Card
          theme="alti"
          className="bg-slate-800/40 border-hdl/30 flex flex-col"
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Zap className="w-6 h-6 text-hdl" />
            Extreme Throughput
          </h3>
          <p className="text-base text-slate-300 leading-relaxed flex-grow">
            Achieve massive performance with a backpressure-free, fully
            pipelined core.{" "}
            <span className="text-hdl font-bold">
              Deliver over 3.18 billion inferences per second
            </span>{" "}
            on mainstream FPGA hardware, eliminating the need for expensive,
            dedicated AI co-processors.
          </p>
        </Card>

        <Card
          theme="alti"
          className="bg-slate-800/40 border-hdl/30 flex flex-col"
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-hdl" />
            Deterministic Fixed-Latency
          </h3>
          <p className="text-base text-slate-300 leading-relaxed grow">
            Ensure cycle-accurate determinism with a constant core latency
            (e.g., ~100 clock cycles, scaling predictably with model depth).{" "}
            <span className="text-hdl font-bold">
              Mitigate operational risk
            </span>{" "}
            by completely eliminating the timing jitter inherent in traditional
            AI hardware.
          </p>
        </Card>
      </div>

      <SectionHeading
        subtitle="GATE-LEVEL LOGIC"
        title="Technical Compatibility"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card
          theme="alti"
          className="bg-slate-800/40 border-hdl/30 flex flex-col"
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Microchip className="w-6 h-6 text-hdl" />
            Target Infrastructure
          </h3>
          <ul className="space-y-3 text-base text-slate-300 leading-relaxed flex-grow">
            <li className="flex items-start gap-2">
              <span className="text-hdl mt-1">•</span>
              <span>
                Drop-in synthesizable{" "}
                <span className="text-hdl font-bold">RTL IP core</span> (VHDL)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-hdl mt-1">•</span>
              <span>FPGA and ASIC/SoC hardware integration</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-hdl mt-1">•</span>
              <span>Zero external DRAM requirement for inference</span>
            </li>
          </ul>
        </Card>

        <Card
          theme="alti"
          className="bg-slate-800/40 border-hdl/30 flex flex-col"
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <GitMerge className="w-6 h-6 text-hdl" />
            Implementation Paths
          </h3>
          <ul className="space-y-3 text-base text-slate-300 leading-relaxed flex-grow">
            <li className="flex items-start gap-2">
              <span className="text-hdl mt-1">•</span>
              <span>Direct mapping from AltiCore framework</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-hdl mt-1">•</span>
              <span>
                Backpressure-free{" "}
                <span className="text-hdl font-bold">
                  en/valid token interface
                </span>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-hdl mt-1">•</span>
              <span>Support for on-chip model updates in logic</span>
            </li>
          </ul>
        </Card>

        <Card
          theme="alti"
          className="bg-slate-800/40 border-hdl/30 flex flex-col"
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-hdl" />
            Operational Integrity
          </h3>
          <ul className="space-y-3 text-base text-slate-300 leading-relaxed flex-grow">
            <li className="flex items-start gap-2">
              <span className="text-hdl mt-1">•</span>
              <span>
                Fixed-core latency execution (
                <span className="text-hdl font-bold">
                  e.g., ~100 cycles, model dependent
                </span>
                )
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-hdl mt-1">•</span>
              <span>
                Logic-centric;{" "}
                <span className="text-hdl font-bold">
                  no floating-point dependency
                </span>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-hdl mt-1">•</span>
              <span>One inference per clock cycle per core</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  </section>
);
