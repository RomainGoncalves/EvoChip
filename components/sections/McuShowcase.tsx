"use client";

import React from "react";
import { Microchip, Database, Cpu, Download, GitMerge, ChevronRight } from "lucide-react";
import { SectionHeading, Card } from "@/components/ui";
import { VideoEmbed } from "@/components/brand";

export const McuShowcase = () => (
  <section
    id="mcu-showcase"
    className="py-16 md:py-18 bg-slate-900 border-t border-slate-800"
  >
    <div className="container mx-auto px-6">
      <SectionHeading
        subtitle="Hardware IP"
        title="AltiCoreMCU: Train and Execute Models at the Edge"
      />

      <p className="text-lg text-slate-300 max-w-4xl mx-auto mb-16 leading-relaxed text-center">
        Beneath the cloud lies the &ldquo;Edge&rdquo;. Not Data centers but billions of
        microcontrollers (MCUs) embedded in thermostats, wearables, braking
        systems, industrial grids… Currently, these devices operate under strict
        limits of size, power and memory. They are only reactive, not
        intelligent.
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
                <span className="text-mcu">Low-Cost Hardware:</span> Optimized
                for budget devices like Arduino UNO or Lattice MachXO2/XO3
                FPGAs. 8 16 32 Bit Devices
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">
                <span className="text-mcu">Plug-and-Play:</span> Pre-integrated
                for hardware designers—no specialized software expertise
                required.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">
                <span className="text-mcu">Symbolic Logic:</span> Automatically
                transforms raw training data into a ready-to-use hardware
                solution.
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
              <span className="text-mcu mt-1">•</span>
              <span>Trains symbolic classification models automatically</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-mcu mt-1">•</span>
              <span>Selects most informative features from thousands</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-mcu mt-1">•</span>
              <span>
                Outputs a pipelined, word-width configurable logic core
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-mcu mt-1">•</span>
              <span>No MCU, memory, or software runtime required</span>
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
              <span className="text-mcu mt-1">•</span>
              <span>Not a neural net: No weights, activations, or MACs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-mcu mt-1">•</span>
              <span>Not Tiny ML: No firmware, runtime, or RAM needed</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-mcu mt-1">•</span>
              <span>Fully deterministic and traceable at logic level</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-mcu mt-1">•</span>
              <span>Drop-in compatible with existing FPGA/CPLD toolchains</span>
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

      {/* <div className="max-w-3xl mx-auto">
        <Card theme="alti" className="bg-slate-800/40 border-mcu/30">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Silicon className="w-6 h-6 text-mcu" /> Operational Benchmarks
          </h3>
          <p className="text-slate-300 leading-relaxed mb-6">
            AltiCoreMCU maintains equivalent test accuracy across all key
            datasets proving that AltiCore logic-synthesis replaces
            matrix-math without signal loss.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-700">
            <div>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">
                Active Power Draw
              </p>
              <p className="text-2xl font-bold text-mcu font-mono tracking-tighter">
                450μW – 900μW
              </p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">
                Legacy Power Requirement
              </p>
              <p className="text-2xl font-bold text-slate-500 line-through font-mono tracking-tighter">
                250mW – 1.2W
              </p>
            </div>
          </div>
        </Card>
      </div> */}
    </div>
  </section>
);
