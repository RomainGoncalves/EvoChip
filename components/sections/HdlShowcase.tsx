"use client";

import React from "react";
import { Activity } from "lucide-react";
import { SectionHeading, Card } from "@/components/ui";

export const HdlShowcase = () => (
  <section
    id="hdl-showcase"
    className="py-16 md:py-24 bg-slate-900 border-t border-slate-800"
  >
    <div className="container mx-auto px-6">
      <SectionHeading
        subtitle="Foundry BLUEPRINTS"
        title="AltiCoreHDL: Less transistor count - higher efficiency"
      />
      <p className="text-lg text-slate-300 leading-relaxed mb-6 text-center max-w-5xl mx-auto">
        Direct pathway to production silicon. Hardware-native logic primitives
        for deterministic, fixed-latency execution in FPGA and ASIC.
      </p>
      <p className="text-lg text-slate-300 leading-relaxed mb-12 text-center max-w-5xl mx-auto">
        Achieving equivalent accuracy to massive Neural Networks with{" "}
        <span className="text-hdl font-bold font-mono tracking-tighter">
          &lt;1% of the parameter count
        </span>
        . Our AltiCore technology reduces transistor count by up to 1000x for
        native on-chip AI.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20 max-w-5xl mx-auto">
        {[
          { label: "Throughput", val: "1", sub: "Inference Per Clock Cycle" },
          { label: "Fixed Latency", val: "~100", sub: "Clock Cycles" },
          { label: "Arithmetic", val: "Integer", sub: "Only Logic" },
          { label: "Footprint", val: "Minimal", sub: "Gate Count" },
        ].map((s, i) => (
          <div
            key={i}
            className="bg-slate-800  border-l-4 border-hdl p-6 rounded-r-xl"
          >
            <p className="text-[10px] font-black text-hdl  uppercase tracking-widest">
              {s.label}
            </p>
            <p className="text-2xl font-black text-white italic my-1">
              {s.val}
            </p>
            <p className="text-[10px] font-black text-slate-500 uppercase">
              {s.sub}
            </p>
          </div>
        ))}
      </div>

      {/* Full Width Card */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-hdl mb-6">
          Strategic Capability
        </h3>
        <Card
          theme="alti"
          className="border-hdl/20 bg-hdl/5 hover:border-hdl/50 transition-all"
        >
          <h4 className="text-white font-bold mb-2 flex items-center gap-2">
            <Activity className="w-5 h-5 text-hdl" /> Hardware Integrated
            Intelligence
          </h4>
          <p className="text-md text-slate-300 leading-relaxed">
            Designed for high-throughput and safety critical applications,
            AltiCoreHDL replaces heavy arithmetic with hardware native
            primitives and logic-level operations to achieve deterministic,
            fixed latency-execution. Fully pipelined core delivering one
            inference per clock cycle (latency ≈100 clock Cycles), offering high
            performance for intelligence that remains consistent scaling from
            prototypes to custom hardware
          </p>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div className="space-y-6">
          <Card
            theme="alti"
            className="border-hdl/20 bg-hdl/5 hover:border-hdl/50 transition-all"
          >
            <ul className="space-y-3 text-base text-slate-300 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-hdl mt-1">•</span>
                <span>
                  Provides production ready IP cores. Direct integration into
                  FPGAs, ASICs & SOCs
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hdl mt-1">•</span>
                <span>
                  Deterministic fixed latency execution: Critical requirement
                  for safety and compliance-sensitive products
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hdl mt-1">•</span>
                <span>
                  Extreme performance: (Throughput & Latency) Delivers one
                  inference per second
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hdl mt-1">•</span>
                <span>
                  Flexible word length: Integer-only logic optimized to match
                  host hardware
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hdl mt-1">•</span>
                <span>
                  Structural simplicity: Use of minimal feature set, parameters
                  and arithmetic operations
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hdl mt-1">•</span>
                <span>Supports hardware level training and execution</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hdl mt-1">•</span>
                <span>
                  Ultra-low power "Sentinel" monitoring: Minimal energy and
                  thermal footprint.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hdl mt-1">•</span>
                <span>
                  Ecosystem continuity: Same mathematical framework as the SWP
                  and MCU versions
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hdl mt-1">•</span>
                <span>
                  No "Calculator" overhead: No floating-point math and massive
                  matrix multiplications
                </span>
              </li>
            </ul>
          </Card>
        </div>
        <div className="flex justify-center">
          <Card
            theme="alti"
            className="border-hdl/20 bg-hdl/5 hover:border-hdl/50 transition-all"
          >
            <h3 className="text-white mb-4 flex items-center gap-2">
              For High volume and safety critical environments, provides direct
              pathway to production silicon through IP cores delivering absolute
              timing predictability based on:
            </h3>
            <ul className="space-y-3 text-base text-slate-300 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-hdl mt-1">•</span>
                <span>
                  Optimization for minimal gate count. No heavy arithmetic's
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hdl mt-1">•</span>
                <span>High throughputs deterministic execution in Silicon</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hdl mt-1">•</span>
                <span>No FPU dependency or matrix multiplications</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hdl mt-1">•</span>
                <span>
                  Massively parallelizable. Structurally simple. Minimal feature
                  set
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hdl mt-1">•</span>
                <span>
                  Direct pathway to production silicon from FPGAs to semi-custom
                  or fully custom ASIC design
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hdl mt-1">•</span>
                <span>
                  Built on binary logic and bitwise operations. No heavy
                  floating point tensors
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hdl mt-1">•</span>
                <span>
                  Ultra-light weight and modular for rapid creation of
                  semiconductor configurations.
                </span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  </section>
);
