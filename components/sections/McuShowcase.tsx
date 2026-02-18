"use client";

import React from "react";
import {
  Microchip,
  Database,
  Cpu,
  Download,
  GitMerge,
  ChevronRight,
  HardDrive,
  Layers,
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
  { label: "Ultra-Lightweight Footprint", val: "< 521B", sub: "RAM usage" },
  {
    label: "high Speed Edge Inference",
    val: "~9,000+ / sec",
    sub: "on $9 Arduino Uno",
  },
  {
    label: "Execution Stability",
    val: "CONSTANT EXECUTION TIME",
    sub: "Fully Deterministic",
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
        title="AltiCoreMCU: Zero-BOM Intelligence for Legacy Hardware"
      />

      {/* Hero Metric Section */}
      <HeroMetric
        color="mcu"
        prefix="less than"
        value="521 bytes"
        label="of RAM"
      />

      <p className="text-lg text-slate-300 max-w-4xl mx-auto mb-6 leading-relaxed text-center">
        Billions of microcontrollers remain "reactive" because traditional
        neural networks require{" "}
        <span className="text-mcu font-bold">
          massive RAM and heavy matrix math
        </span>{" "}
        that standard hardware cannot process locally.
      </p>
      <p className="text-lg text-slate-300 max-w-4xl mx-auto mb-16 leading-relaxed text-center">
        AltiCoreMCU replaces arithmetic with bitwise logic, enabling
        high-performance inference with
        <span className="text-mcu font-bold"> zero BOM changes</span>.
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
            <Microchip className="w-6 h-6 text-mcu" />
            What is AltiCoreMCU
          </h3>
          <ul className="space-y-3 text-base text-slate-300 leading-relaxed flex-grow">
            <li className="flex items-start gap-2">
              <span className="mt-1">
                <span className="text-mcu">Fast Inference:</span> Converts
                labeled CSV data into a high-speed, deterministic logic engine.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">
                <span className="text-mcu">Low-Cost 8/16/32-Bit Support:</span>{" "}
                Optimized for budget devices like Arduino Uno and STM32
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">
                <span className="text-mcu">Plug-and-Play Integration:</span>{" "}
                Pre-integrated workflow for embedded engineers.
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
                <span className="text-mcu">Industrial Grade:</span> A
                power-efficient, certifiable, and turnkey digital peripheral.
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
            <Microchip className="w-6 h-6 text-mcu" />
            Key Features
          </h3>
          <ul className="space-y-3 text-base text-slate-300 leading-relaxed flex-grow">
            <li className="flex items-start gap-2">
              <span className="mt-1">
                <span className="text-mcu">Ultra-Lightweight Footprint:</span>{" "}
                Verified to operate within less than{" "}
                <span className="text-mcu font-bold">521 bytes</span> of RAM.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">
                <span className="text-mcu">Zero Dynamic Allocation:</span>{" "}
                Eliminates malloc and fragmentation for constant memory usage.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">
                <span className="text-mcu">Constant Timing:</span> Deterministic
                execution ensures AI never interferes with critical interrupts.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">
                <span className="text-mcu">Automated Deployment:</span>{" "}
                Streamlined workflow outputs production-ready C-code templates.
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
            <Microchip className="w-6 h-6 text-mcu" />
            Why AltiCoreMCU is Different
          </h3>
          <ul className="space-y-3 text-base text-slate-300 leading-relaxed flex-grow">
            <li className="flex items-start gap-2">
              <span className="mt-1">
                <span className="text-mcu">No "Calculator" Overhead:</span>{" "}
                Replaces matrix math with hardware-native bitwise logic.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">
                <span className="text-mcu">Zero-BOM AI Scaling:</span> Adds
                intelligence to legacy hardware with no changes to the BOM.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">
                <span className="text-mcu">Always-On "Sentinel":</span>{" "}
                Ultra-low-power monitoring wakes the main CPU only for real
                events.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">
                <span className="text-mcu">Proven Performance:</span> 9,000+
                inferences/sec on a standard 16MHz processor.
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
              desc: "Provide a labeled training dataset (CSV, API, etc.)",
              icon: Database,
            },
            {
              step: 2,
              title: "Model Generator",
              desc: "Automated Conversion. No PhD required.",
              icon: Cpu,
            },
            {
              step: 3,
              title: "Template Integration",
              desc: "Drop-in C-code templates.",
              icon: Download,
            },
            {
              step: 4,
              title: "Deploy",
              desc: "Drop into your toolchain like a digital peripheral.",
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
            <HardDrive className="w-6 h-6 text-mcu" />
            Revitalize Legacy Inventory
          </h3>
          <p className="text-base text-slate-300 leading-relaxed flex-grow">
            Make existing 8-bit and 32-bit microcontrollers &ldquo;smart&rdquo;
            without changing your Bill of Materials (BOM).{" "}
            <span className="text-mcu font-bold">
              Extend product lifecycles
            </span>{" "}
            by adding high-performance intelligence to current-generation
            hardware.
          </p>
        </Card>

        <Card
          theme="alti"
          className="bg-slate-800/40 border-mcu/30 flex flex-col"
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Database className="w-6 h-6 text-mcu" />
            Ultra-Lightweight Footprint
          </h3>
          <p className="text-base text-slate-300 leading-relaxed grow">
            Operate with a fixed memory footprint of{" "}
            <span className="text-mcu font-bold">
              less than 521 bytes of RAM
            </span>
            . Deploy intelligence on devices previously considered too
            resource-constrained for AI.
          </p>
        </Card>

        <Card
          theme="alti"
          className="bg-slate-800/40 border-mcu/30 flex flex-col"
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Layers className="w-6 h-6 text-mcu" />
            High-Speed Local Decisions
          </h3>
          <p className="text-base text-slate-300 leading-relaxed grow">
            Execute over{" "}
            <span className="text-mcu font-bold">
              9,000 inferences per second
            </span>{" "}
            locally on a 16MHz processor. Achieve real-time, deterministic
            response times without the latency or cost of cloud processing.
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
            <Cpu className="w-6 h-6 text-mcu" />
            Target Infrastructure
          </h3>
          <ul className="space-y-3 text-base text-slate-300 leading-relaxed flex-grow">
            <li className="flex items-start gap-2">
              <span className="text-mcu mt-1">•</span>
              <span>8, 16, and 32-bit native MCU support</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-mcu mt-1">•</span>
              <span>Arduino (Uno/Mega/Nano), STM32 families and more</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-mcu mt-1">•</span>
              <span>
                <span className="text-mcu font-bold">0% BOM change</span>; runs
                on existing inventory
              </span>
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
              <span>Automated CSV to C-code template workflow</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-mcu mt-1">•</span>
              <span>Compatible with standard embedded IDEs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-mcu mt-1">•</span>
              <span>Supports on-device training on compatible hardware</span>
            </li>
          </ul>
        </Card>

        <Card
          theme="alti"
          className="bg-slate-800/40 border-mcu/30 flex flex-col"
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <HardDrive className="w-6 h-6 text-mcu" />
            Operational Integrity
          </h3>
          <ul className="space-y-3 text-base text-slate-300 leading-relaxed flex-grow">
            <li className="flex items-start gap-2">
              <span className="text-mcu mt-1">•</span>
              <span>
                Verified RAM footprint{" "}
                <span className="text-mcu font-bold">&lt; 521 bytes</span>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-mcu mt-1">•</span>
              <span>Zero dynamic allocation; no malloc or fragmentation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-mcu mt-1">•</span>
              <span>Deterministic, constant execution time</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  </section>
);
