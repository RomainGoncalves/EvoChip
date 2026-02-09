import React from "react";
import {
  Cpu,
  Zap,
  Box,
  Rocket,
  Globe,
  Target,
  HardDrive,
  Clock,
} from "lucide-react";
import { ProductPageLayout } from "@/components/layouts/ProductPageLayout";
import { HdlShowcase } from "@/components/sections/HdlShowcase";

export default function HdlTechnicalDetailsPage() {
  return (
    <ProductPageLayout>
      <HdlShowcase />

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16 max-w-5xl">
        <div className="space-y-16">
          {/* Core Technical Architecture */}
          <section>
            <h2 className="text-3xl font-bold text-hdl mb-8 flex items-center gap-3">
              <Cpu className="w-8 h-8" />
              Core Technical Architecture
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <HardDrive className="w-6 h-6 text-hdl" />
                  Production-Ready IP Integration
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  AltiCoreHDL delivers production-ready IP cores designed for
                  direct integration into FPGAs, ASICs, and SoCs. This
                  architecture is optimized for minimal gate counts by utilizing
                  a mathematically distinct inference architecture that
                  leverages hardware-native primitives rather than heavy
                  arithmetic operations.
                </p>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-hdl" />
                  Deterministic Execution Model
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  The system maps a static execution schedule directly to
                  hardware logic, ensuring consistent and repeatable timing—a
                  critical requirement for safety- and compliance-sensitive
                  products. This deterministic, fixed-latency execution provides
                  absolute timing predictability essential for high-volume and
                  safety-critical environments.
                </p>
              </div>
            </div>
          </section>

          {/* Performance Characteristics */}
          <section>
            <h2 className="text-3xl font-bold text-hdl mb-8 flex items-center gap-3">
              <Zap className="w-8 h-8" />
              Performance Characteristics
            </h2>

            <div className="space-y-8">
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Throughput and Latency
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  A fully pipelined AltiCoreHDL core delivers high-throughput
                  deterministic execution in silicon, achieving:
                </p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3 pl-4">
                    <span className="text-hdl font-bold mt-1">▸</span>
                    <span>One inference per clock cycle</span>
                  </li>
                  <li className="flex items-start gap-3 pl-4">
                    <span className="text-hdl font-bold mt-1">▸</span>
                    <span>Fixed latency of approximately 100 clock cycles</span>
                  </li>
                  <li className="flex items-start gap-3 pl-4">
                    <span className="text-hdl font-bold mt-1">▸</span>
                    <span>
                      Industry-leading throughput with absolute timing
                      predictability
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Computational Efficiency
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  The architecture eliminates the need for expensive
                  "calculator" components like GPUs or specialized
                  floating-point units by:
                </p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3 pl-4">
                    <span className="text-hdl font-bold mt-1">▸</span>
                    <span>
                      Operating exclusively via integer-only logic with no FPU
                      dependency or matrix multiplications
                    </span>
                  </li>
                  <li className="flex items-start gap-3 pl-4">
                    <span className="text-hdl font-bold mt-1">▸</span>
                    <span>
                      Supporting arbitrary integer word sizes for perfect
                      optimization to match host hardware or specific DSP
                      requirements
                    </span>
                  </li>
                  <li className="flex items-start gap-3 pl-4">
                    <span className="text-hdl font-bold mt-1">▸</span>
                    <span>
                      Moving away from floating-point math and massive matrix
                      multiplications toward logic-level operations and bitwise
                      logic
                    </span>
                  </li>
                  <li className="flex items-start gap-3 pl-4">
                    <span className="text-hdl font-bold mt-1">▸</span>
                    <span>
                      Building on fundamental binary logic and bitwise
                      operations, eliminating the computational burden of
                      translating standard mathematics into heavy floating-point
                      tensors
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Structural Design Principles */}
          <section>
            <h2 className="text-3xl font-bold text-hdl mb-8 flex items-center gap-3">
              <Box className="w-8 h-8" />
              Structural Design Principles
            </h2>

            <div className="space-y-8">
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Minimalist Architecture
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  AltiCoreHDL leverages the core AltiCore advantage of doing
                  more with less through:
                </p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3 pl-4">
                    <span className="text-hdl font-bold mt-1">▸</span>
                    <span>A minimal feature set</span>
                  </li>
                  <li className="flex items-start gap-3 pl-4">
                    <span className="text-hdl font-bold mt-1">▸</span>
                    <span>
                      Significantly fewer parameters and arithmetic operations
                      than traditional neural network architectures
                    </span>
                  </li>
                  <li className="flex items-start gap-3 pl-4">
                    <span className="text-hdl font-bold mt-1">▸</span>
                    <span>
                      Massively parallelizable and structurally simple design
                    </span>
                  </li>
                  <li className="flex items-start gap-3 pl-4">
                    <span className="text-hdl font-bold mt-1">▸</span>
                    <span>Ultra-lightweight and modular construction</span>
                  </li>
                </ul>
                <p className="text-slate-300 leading-relaxed mt-4">
                  This structural simplicity enables rapid creation of
                  semiconductor configurations optimized for specific use cases.
                </p>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Flexible Word Length Support
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  The system operates using integer-only logic and supports
                  arbitrary word lengths, allowing the core to be perfectly
                  optimized to match the host hardware or specific DSP
                  requirements.
                </p>
              </div>
            </div>
          </section>

          {/* Advanced Capabilities */}
          <section>
            <h2 className="text-3xl font-bold text-hdl mb-8 flex items-center gap-3">
              <Rocket className="w-8 h-8" />
              Advanced Capabilities
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Hardware-Level Training
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  AltiCoreHDL supports both hardware-level inference and
                  training, allowing for local model adaptation directly within
                  the logic core. This capability extends the system's
                  flexibility beyond traditional inference-only hardware
                  implementations.
                </p>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Ultra-Low-Power "Sentinel" Monitoring
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  The architecture is optimized for always-on monitoring
                  applications, where the core can run continuously with a
                  minimal energy and thermal footprint. This enables the system
                  to wake heavier system components only when real events are
                  detected, making it ideal for battery-powered and
                  energy-constrained deployments.
                </p>
              </div>
            </div>
          </section>

          {/* Ecosystem Integration */}
          <section>
            <h2 className="text-3xl font-bold text-hdl mb-8 flex items-center gap-3">
              <Globe className="w-8 h-8" />
              Ecosystem Integration
            </h2>

            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">
                Cross-Platform Continuity
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                AltiCoreHDL uses the same mathematical framework and parameters
                as the software (SWP) and MCU versions, ensuring that a model
                developed in software maps identically to a fixed-latency
                hardware core. This ecosystem continuity provides:
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3 pl-4">
                  <span className="text-hdl font-bold mt-1">▸</span>
                  <span>
                    Seamless migration from software prototypes to custom
                    hardware
                  </span>
                </li>
                <li className="flex items-start gap-3 pl-4">
                  <span className="text-hdl font-bold mt-1">▸</span>
                  <span>
                    Consistent behavior across development, testing, and
                    production environments
                  </span>
                </li>
                <li className="flex items-start gap-3 pl-4">
                  <span className="text-hdl font-bold mt-1">▸</span>
                  <span>
                    Direct pathway to production silicon, allowing the same
                    static execution schedule and model parameters to migrate
                    seamlessly from off-the-shelf FPGAs to semi-custom or fully
                    custom ASIC designs
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Target Applications */}
          <section>
            <h2 className="text-3xl font-bold text-hdl mb-8 flex items-center gap-3">
              <Target className="w-8 h-8" />
              Target Applications
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              AltiCoreHDL is specifically engineered for:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-2">
                  Safety-Critical Systems
                </h4>
                <p className="text-slate-300 text-sm">
                  Applications requiring deterministic timing and certifiable
                  behavior
                </p>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-2">
                  High-Volume Production
                </h4>
                <p className="text-slate-300 text-sm">
                  Environments demanding scalable, cost-effective silicon
                  solutions
                </p>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-2">
                  Always-On Monitoring
                </h4>
                <p className="text-slate-300 text-sm">
                  Sentinel applications requiring continuous operation with
                  minimal power consumption
                </p>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-2">
                  Compliance-Sensitive Products
                </h4>
                <p className="text-slate-300 text-sm">
                  Systems subject to regulatory requirements for timing
                  predictability and operational consistency
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-gradient-to-br from-slate-900 to-slate-950 border border-hdl/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Conclusion</h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                AltiCoreHDL represents a fundamental departure from traditional
                neural network hardware implementations. By eliminating
                floating-point dependencies, reducing arithmetic complexity, and
                providing deterministic execution guarantees, it offers a
                production-ready pathway to silicon for intelligent systems that
                demand predictability, efficiency, and certifiability.
              </p>
              <p>
                The combination of extreme performance, structural simplicity,
                and ecosystem continuity positions AltiCoreHDL as the optimal
                solution for organizations seeking to deploy AI intelligence in
                hardware while maintaining the development velocity and
                flexibility of software-based approaches.
              </p>
            </div>
          </section>
        </div>
      </main>
    </ProductPageLayout>
  );
}
