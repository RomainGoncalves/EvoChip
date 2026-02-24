"use client";

import React from "react";
import {
  Microchip,
  Database,
  Cpu,
  Download,
  GitMerge,
  ChevronRight,
  Zap,
  TrendingUp,
  RefreshCw,
  Package,
  Activity,
  Shield,
} from "lucide-react";

import {
  SectionHeading,
  Card,
  SectionDivider,
  OperationalBoxes,
  HeroMetric,
} from "@/components/ui";
import type { OperationalBoxItem } from "@/components/ui";
import { VideoEmbed } from "@/components/brand";

const MCU_STATS: OperationalBoxItem[] = [
  {
    label: "Ultra-Lightweight Footprint",
    val: "< 521B",
    sub: "parameter RAM (example)",
  },
  {
    label: "High-Speed Edge Inference",
    val: "~9,000+ / sec",
    sub: "@ 16MHz (BENCHMARK)",
  },
  {
    label: "Execution Stability",
    val: "CYCLE-CONSTANT",
    sub: "Strictly Deterministic",
  },
];

export const McuShowcase = () => (
  <section
    id="mcu-showcase"
    className="pt-28 pb-16 md:pb-18 bg-slate-900 border-t border-slate-800"
  >
    <div className="container mx-auto px-6">
      <SectionHeading
        subtitle="Embedded Toolset"
        title="AltiCoreMCU: Embedded AI Runtime for Resource-Constrained Devices"
      />

      {/* Hero Metric Section */}
      <HeroMetric
        color="mcu"
        prefix="Benchmark example"
        value="521B"
        label="Model State RAM"
        asterisks={1}
      />

      <p className="text-lg text-slate-300 max-w-4xl mx-auto mb-6 leading-relaxed text-center">
        Billions of microcontrollers remain strictly reactive because
        traditional neural networks require{" "}
        <span className="text-mcu font-bold">massive memory overhead</span> and
        dense matrix arithmetic.
      </p>
      <p className="text-lg text-slate-300 max-w-4xl mx-auto mb-16 leading-relaxed text-center">
        AltiCoreMCU solves this by compiling models into logic-dominant operator
        chains.
        <br />
        This approach enables{" "}
        <span className="text-mcu font-bold">
          deterministic, high-performance inference
        </span>{" "}
        on existing hardware—without requiring NPUs, cloud connectivity, or
        costly hardware redesigns.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <VideoEmbed videoId="ELwpDyQC-aA" title="AltiCoreMCU Part 1" />
        <VideoEmbed videoId="whyG2Bq1Eio" title="AltiCoreMCU Part 2" />
        <VideoEmbed videoId="a3iJMI8d0oU" title="AltiCoreMCU Part 2" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Slide 2: What is AltiCore-LogicMCU */}
        <Card
          theme="alti"
          className="bg-slate-800/40 border-mcu/30 flex flex-col"
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Cpu className="w-6 h-6 text-mcu" />
            What is AltiCoreMCU
          </h3>
          <ul className="space-y-3 text-base text-slate-300 leading-relaxed flex-grow">
            <li className="flex items-start gap-2">
              <span className="mt-1">
                <span className="text-mcu">Deterministic Logic Engine:</span>{" "}
                Converts trained models into high-speed, hardware-native
                operator chains rather than arithmetic-heavy neural networks.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">
                <span className="text-mcu">Arbitrary Word Widths:</span> Adapts
                to any native register size—spanning legacy 8-bit MCUs, modern
                32/64-bit processors, and custom DSPs—without requiring hardware
                accelerators.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">
                <span className="text-mcu">C-Code Synthesis:</span>{" "}
                Automatically transforms models into highly portable, static
                C-code templates ready for embedded IDEs.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">
                <span className="text-mcu">Logic-Based Synthesis:</span>{" "}
                Automatically transforms training data into hardware-native C
                code.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">
                <span className="text-mcu">Industrial-Grade Reliability:</span>{" "}
                Operates as a power-efficient, cycle-predictable digital
                peripheral for safety-critical and real-time systems.
              </span>
            </li>
          </ul>
        </Card>

        {/* Slide 3: Key Features */}
        <Card
          theme="alti"
          className="bg-slate-800/40 border-mcu/30 flex flex-col"
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Zap className="w-6 h-6 text-mcu" />
            Key Features
          </h3>
          <ul className="space-y-3 text-base text-slate-300 leading-relaxed flex-grow">
            <li className="flex items-start gap-2">
              <span className="mt-1">
                <span className="text-mcu">Ultra-Lightweight Footprint:</span>{" "}
                Model parameter state requires{" "}
                <span className="text-mcu font-bold">
                  (*) as little as 521 bytes of RAM
                </span>{" "}
                in benchmark configurations, preserving system memory.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">
                <span className="text-mcu">Zero Dynamic Allocation:</span>{" "}
                Operates entirely within a static memory footprint. Eliminates
                malloc and the risk of heap fragmentation.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">
                <span className="text-mcu">Constant Timing:</span> Strict
                deterministic execution ensures AI workloads never interfere
                with critical bare-metal control loops or interrupts.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">
                <span className="text-mcu">Automated Deployment:</span>{" "}
                Streamlined workflow outputs production-ready, compiler-
                agnostic code templates for rapid integration.
              </span>
            </li>
          </ul>
        </Card>

        {/* Slide 6: Why Different */}
        <Card
          theme="alti"
          className="bg-slate-800/40 border-mcu/30 flex flex-col"
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-mcu" />
            Why AltiCoreMCU is Different
          </h3>
          <ul className="space-y-3 text-base text-slate-300 leading-relaxed flex-grow">
            <li className="flex items-start gap-2">
              <span className="mt-1">
                <span className="text-mcu">Logic-Dominant Execution:</span>{" "}
                Replaces heavy matrix arithmetic with hardware-native bitwise
                operations, drastically reducing compute cycles.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">
                <span className="text-mcu">Hardware-Agnostic Scaling:</span>{" "}
                Adds advanced intelligence to existing hardware inventory
                without requiring costly Bill of Materials (BOM) changes.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">
                <span className="text-mcu">Always-On Edge Autonomy:</span>{" "}
                Enables ultra-low-power local monitoring, waking the main system
                only when critical events are detected.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">
                <span className="text-mcu">High-Speed Throughput:</span>{" "}
                Delivers thousands of inferences per second locally (e.g.,
                ~9,000 inf/sec observed at 16MHz) without cloud latency.
              </span>
            </li>
          </ul>
        </Card>
      </div>

      {/* Workflow Section */}
      <div className="mt-16 w-full mx-auto">
        <h4 className="text-center font-mono text-2xl tracking-[0.1em] uppercase mb-10 font-bold">
          DEPLOYMENT WORKFLOW: FROM DATA TO DEVICE
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {[
            {
              step: 1,
              title: "Data Ingestion",
              desc: "Provide a labeled training dataset (CSV, API, etc.) via the AltiCore toolchain.",
              icon: Database,
            },
            {
              step: 2,
              title: "Logic-Dominant Compilation",
              desc: "The framework automatically generates an optimized, logic-dominant model, bypassing standard neural network architectures.",
              icon: Cpu,
            },
            {
              step: 3,
              title: "C-Code Export",
              desc: "The synthesized model is exported as a drop-in, hardware-agnostic C-code template.",
              icon: Download,
            },
            {
              step: 4,
              title: "Embedded Integration",
              desc: "Integrate the code into your existing embedded IDE as a standard, predictable function call. Focus on your application; let AltiCore handle the intelligence.",
              icon: GitMerge,
            },
          ].map((item, idx, arr) => (
            <div key={idx} className="relative flex flex-col items-center">
              {/* Step Indicator */}
              <div className="w-10 h-10 rounded-full bg-mcu text-slate-900 flex items-center justify-center font-black mb-4 z-10 shadow-[0_0_20px_rgba(45,212,191,0.5)]">
                {item.step}
              </div>

              <Card
                theme="alti"
                className="w-full text-center border-mcu/20 flex-grow hover:border-mcu/50 transition-all p-5"
              >
                <item.icon className="w-8 h-8 text-mcu mx-auto mb-4" />
                <h5 className="text-white font-bold text-xl mb-2 tracking-tight">
                  {item.title}
                </h5>
                <p className="text-slate-300 text-[15px] leading-relaxed font-sans">
                  {item.desc}
                </p>
              </Card>

              {/* Connector Arrows for Desktop/Tablet */}
              {idx < arr.length - 1 && (
                <div className="hidden md:block absolute top-5 -right-3 translate-x-1/2 z-0">
                  <ChevronRight className="w-6 h-6 text-slate-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Focus Message */}
      <p className="text-2xl text-slate-300 max-w-4xl mx-auto mt-12 leading-relaxed text-center italic">
        Focus on your product. Let AltiCore handle the model creation.
      </p>

      <SectionDivider align="center" className="mt-8" />

      <OperationalBoxes items={MCU_STATS} color="mcu" className="mt-12" />

      <SectionHeading
        subtitle="ZERO-BOM AI SCALING"
        title="Strategic Advantage"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card
          theme="alti"
          className="bg-slate-800/40 border-mcu/30 flex flex-col"
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <RefreshCw className="w-6 h-6 text-mcu" />
            Revitalize Legacy Inventory
          </h3>
          <p className="text-base text-slate-300 leading-relaxed flex-grow">
            Make existing hardware—from legacy 8-bit microcontrollers to 32-bit
            systems and custom architectures—&quot;smart&quot; without changing
            your Bill of Materials (BOM).{" "}
            <span className="text-mcu font-bold">
              Extend product lifecycles
            </span>{" "}
            by injecting high-performance intelligence directly into your
            current-generation inventory.
          </p>
        </Card>

        <Card
          theme="alti"
          className="bg-slate-800/40 border-mcu/30 flex flex-col"
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Package className="w-6 h-6 text-mcu" />
            Ultra-Lightweight Footprint
          </h3>
          <p className="text-base text-slate-300 leading-relaxed grow">
            Deploy advanced intelligence on edge devices previously considered
            mathematically impossible to utilize for AI. AltiCoreMCU operates
            with extreme efficiency, requiring{" "}
            <span className="text-mcu font-bold">
              as little as 521 bytes of parameter RAM
            </span>{" "}
            in benchmark testing, leaving your device’s working memory entirely
            free for core logic.
          </p>
        </Card>

        <Card
          theme="alti"
          className="bg-slate-800/40 border-mcu/30 flex flex-col"
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Activity className="w-6 h-6 text-mcu" />
            High-Speed Local Decisions
          </h3>
          <p className="text-base text-slate-300 leading-relaxed grow">
            Achieve real-time, deterministic response times without the latency,
            security vulnerabilities, or recurring costs of cloud processing.
            Benchmark trials demonstrate massive local throughput—yielding{" "}
            <span className="text-mcu font-bold">
              9,000 inferences per second
            </span>{" "}
            on a low end 16MHz processor.
          </p>
        </Card>
      </div>

      <SectionHeading
        subtitle="HARDWARE SUPPORT"
        title="Technical Compatibility"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card
          theme="alti"
          className="bg-slate-800/40 border-mcu/30 flex flex-col"
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Microchip className="w-6 h-6 text-mcu" />
            Target Infrastructure
          </h3>
          <ul className="space-y-3 text-base text-slate-300 leading-relaxed flex-grow">
            <li className="flex items-start gap-2">
              <span className="text-mcu mt-1">•</span>
              <span>Arbitrary word sizes (8/16/32/64-bit &amp; custom)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-mcu mt-1">•</span>
              <span>Supports ARM Cortex-M, STM32, ESP32, and DSPs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-mcu mt-1">•</span>
              <span>CPU-only execution; no NPU or accelerator required</span>
            </li>
          </ul>
        </Card>

        <Card
          theme="alti"
          className="bg-slate-800/40 border-mcu/30 flex flex-col"
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Download className="w-6 h-6 text-mcu" />
            Implementation Paths
          </h3>
          <ul className="space-y-3 text-base text-slate-300 leading-relaxed flex-grow">
            <li className="flex items-start gap-2">
              <span className="text-mcu mt-1">•</span>
              <span>Automated CSV to optimized C-code synthesis</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-mcu mt-1">•</span>
              <span>Drop-in compatibility with standard embedded IDEs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-mcu mt-1">•</span>
              <span>Supports on-device training where memory permits</span>
            </li>
          </ul>
        </Card>

        <Card
          theme="alti"
          className="bg-slate-800/40 border-mcu/30 flex flex-col"
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-mcu" />
            Operational Integrity
          </h3>
          <ul className="space-y-3 text-base text-slate-300 leading-relaxed flex-grow">
            <li className="flex items-start gap-2">
              <span className="text-mcu mt-1">•</span>
              <span>Parameter RAM of 521 bytes (benchmark example)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-mcu mt-1">•</span>
              <span>Zero dynamic allocation; no malloc or fragmentation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-mcu mt-1">•</span>
              <span>Cycle-constant, strictly deterministic execution</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  </section>
);
