import React from "react";
import {
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
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <HardDrive className="w-6 h-6 text-hdl" />
                  IP Integration
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  AltiCoreHDL delivers drop-in, VHDL IP cores designed for
                  direct integration into FPGAs, ASICs, and SoCs. Optimized for
                  ultra-low gate utilization, the framework employs a
                  mathematically distinct architecture that replaces heavy
                  arithmetic operations with highly efficient, logic- dominant
                  operator chains.
                </p>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-hdl" />
                  Deterministic Execution Model
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  The system maps a static execution schedule directly to
                  hardware logic, ensuring consistent and repeatable timing.
                  This deterministic, fixed-latency execution provides the
                  absolute timing predictability required for high-volume,
                  mission-critical, and compliance-sensitive environments.
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
                    <span>One inference per clock cycle per core</span>
                  </li>
                  <li className="flex items-start gap-3 pl-4">
                    <span className="text-hdl font-bold mt-1">▸</span>
                    <span>
                      Fixed core latency (e.g., ~100 clock cycles, model
                      dependent)
                    </span>
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
                  The architecture eliminates the need for power-heavy
                  accelerators or specialized floating-point tensor units by:
                </p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3 pl-4">
                    <span className="text-hdl font-bold mt-1">▸</span>
                    <span>
                      Operating exclusively via logic-dominant operator chains
                      with zero FPU dependency.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 pl-4">
                    <span className="text-hdl font-bold mt-1">▸</span>
                    <span>
                      Supporting arbitrary bit-widths for perfect optimization
                      to match host hardware constraints.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 pl-4">
                    <span className="text-hdl font-bold mt-1">▸</span>
                    <span>
                      Replacing floating-point math and massive matrix
                      multiplications with highly efficient, discrete logic.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 pl-4">
                    <span className="text-hdl font-bold mt-1">▸</span>
                    <span>
                      Eliminating the computational burden and thermal overhead
                      of traditional floating-point tensors.
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
                  AltiCoreHDL translates the framework’s core mathematical
                  efficiency directly into silicon, achieving ultra-low gate
                  utilization through:
                </p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3 pl-4">
                    <span className="text-hdl font-bold mt-1">▸</span>
                    <span>
                      A minimal input feature requirement that reduces I/O
                      routing complexity.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 pl-4">
                    <span className="text-hdl font-bold mt-1">▸</span>
                    <span>
                      Orders of magnitude fewer parameters and arithmetic
                      operations than traditional neural networks.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 pl-4">
                    <span className="text-hdl font-bold mt-1">▸</span>
                    <span>
                      Massively parallelizable, structurally simple RTL
                      pipelines.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 pl-4">
                    <span className="text-hdl font-bold mt-1">▸</span>
                    <span>
                      Ultra-lightweight and highly modular synthesis-ready
                      construction.
                    </span>
                  </li>
                </ul>
                <p className="text-slate-300 leading-relaxed mt-4">
                  This architectural simplicity enables the rapid generation of
                  application-specific RTL cores optimized for strict power and
                  area constraints.
                </p>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Flexible Bit-Width Support
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  The system operates using logic-dominant operator chains and
                  supports arbitrary bit-widths, allowing the core to be
                  perfectly optimized to match the host hardware or specific DSP
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
                  On-Chip Hardware Training
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  AltiCoreHDL supports both high-throughput inference and
                  hardware-level training directly within the RTL core. This
                  allows for local model adaptation and real-time learning in
                  silicon, extending the system's flexibility far beyond
                  traditional inference-only hardware accelerators.
                </p>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Ultra-Low-Power "Sentinel" Monitoring
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Leveraging its logic-dominant compute and zero external memory
                  dependency, the architecture is perfectly optimized for
                  always-on monitoring applications. The core runs continuously
                  with a minimal energy and thermal footprint, waking heavier,
                  power-hungry system components only when critical events are
                  detected—making it ideal for battery-powered and highly
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
                AltiCoreHDL utilizes the exact same logic-dominant mathematical
                framework and trained parameters as the AltiCoreSWP and
                AltiCoreMCU runtimes. This guarantees that a model prototyped in
                software synthesizes identically into a deterministic,
                fixed-latency RTL core. This unified ecosystem provides:
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3 pl-4">
                  <span className="text-hdl font-bold mt-1">▸</span>
                  <span>
                    Frictionless migration from software prototypes directly
                    into drop-in synthesizable VHDL IP.
                  </span>
                </li>
                <li className="flex items-start gap-3 pl-4">
                  <span className="text-hdl font-bold mt-1">▸</span>
                  <span>
                    Bit-accurate behavioral consistency across software
                    execution, FPGA testing, and final silicon production.
                  </span>
                </li>
                <li className="flex items-start gap-3 pl-4">
                  <span className="text-hdl font-bold mt-1">▸</span>
                  <span>
                    A de-risked pathway to production silicon, allowing
                    identical static execution schedules to migrate seamlessly
                    from COTS FPGAs to fully custom ASIC designs.
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
                  Mission-Critical Systems
                </h4>
                <p className="text-slate-300 text-sm">
                  Applications demanding hard-real-time, deterministic execution
                  and absolute, bit-accurate reliability.
                </p>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-2">
                  High-Volume Production
                </h4>
                <p className="text-slate-300 text-sm">
                  Environments demanding scalable, ultra-low gate utilization to
                  deliver highly cost-effective silicon solutions without
                  requiring additional AI co-processors.
                </p>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-2">
                  Always-On Monitoring
                </h4>
                <p className="text-slate-300 text-sm">
                  &quot;Sentinel&quot; applications requiring continuous,
                  logic-dominant operation with a minimal energy and thermal
                  footprint.
                </p>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-2">
                  Zero-Tolerance Environments
                </h4>
                <p className="text-slate-300 text-sm">
                  Systems demanding absolute timing predictability and
                  operational consistency, from algorithmic trading servers to
                  infrastructure hardware.
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
                neural network hardware implementations. By replacing
                floating-point dependencies and heavy arithmetic with logic-
                dominant operator chains, it provides a deterministic, drop-in
                pathway to silicon for mission- critical systems that demand
                absolute predictability, extreme throughput, and ultra-low gate
                utilization.
              </p>
              <p>
                The combination of one-inference-per-clock-cycle-per-core
                performance, structural simplicity, and bit-accurate ecosystem
                continuity positions AltiCoreHDL as the definitive IP for
                organizations seeking to embed AI intelligence directly into
                hardware, without sacrificing the development velocity and
                flexibility of software prototyping.
              </p>
            </div>
          </section>
        </div>
      </main>
    </ProductPageLayout>
  );
}
