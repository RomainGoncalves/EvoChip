"use client";

import React from "react";
import Link from "next/link";
import {
  Lock,
  TrendingUp,
  Rocket,
  ShieldCheck,
  Zap,
  Microchip,
  Thermometer,
  Globe,
  AlertTriangle,
  Target,
  Layers,
  Flag,
  Activity,
  Briefcase,
  Code,
  FileText,
  BarChart,
  Server,
  Cpu as Silicon,
} from "lucide-react";
import { Button, SectionHeading, Card, LogicBackground } from "@/components/ui";
import { VideoEmbed } from "@/components/brand";
import {
  KPICard,
  IPPortfolioCard,
  HowItWorksSection,
  SidePathBenchmarkSection,
} from "@/components/investor";

export const InvestorPortalContent = () => {
  return (
    <div className="min-h-screen bg-slate-900 pt-20 md:pt-24 pb-12 relative overflow-hidden font-sans">
      <LogicBackground />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-10 border-b border-slate-800 pb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2">
            <SectionHeading
              subtitle="Proprietary Data Room"
              title="Strategic Roadmap"
              align="left"
              theme="evo"
            />
            <Link href="/">
              <Button
                variant="outline"
                className="w-full sm:w-auto py-2 px-4 text-xs order-first sm:order-last"
              >
                ← Return to Public Site
              </Button>
            </Link>
          </div>
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-2xl text-white italic font-medium leading-relaxed text-center">
              &ldquo;The solution to the exponentially AI growing market will
              not come from adding always more hardware but from a total{" "}
              <span className="font-bold text-cyan-400">
                redesign of the software running this hardware
              </span>
              &rdquo;
            </p>
          </div>
        </div>

        <div className="text-red-400 bg-red-900/30 border border-red-700/50 p-3 rounded-lg text-xs md:text-sm text-center mb-10 font-mono font-bold uppercase">
          <Lock className="w-4 h-4 inline mr-2" /> CONFIDENTIAL: SECURE DATA
          ROOM ACCESS. DO NOT DISTRIBUTE.
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-8 items-start">
          {/* Sidebar Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:col-span-1 h-fit">
            <h3 className="text-xl font-bold text-cyan-400 mb-2 font-mono uppercase font-bold sm:col-span-2 lg:col-span-1">
              Key Metrics
            </h3>
            <KPICard
              title="Target Exit Valuation"
              value={"> $1 Billion"}
              icon={TrendingUp}
              color="text-green-400"
              subtitle="Strategic acquisition roadmap."
            />
            <KPICard
              title="Series A Round"
              value="$10M Target"
              icon={Rocket}
              color="text-cyan-400"
              subtitle="Current Raise: $100M Pre-Money."
            />
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-16">
            {/* --- THE INVESTMENT THESIS --- */}
            <div
              id="investment-thesis"
              className="p-8 bg-cyan-900/10 border border-cyan-500/20 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-6 font-mono uppercase tracking-widest">
                The Investment Thesis
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed font-medium">
                <span className="font-bold text-cyan-400">
                  AltiCore is transitioning from Validated and Patented IP to
                  mass-market commercialization.
                </span>{" "}
                By abandoning Neural Networks for Logic-First mathematical
                framework, we provide—from{" "}
                <span className="font-bold text-cyan-400">
                  MCUs to high-performance CPUs/GPUs
                </span>
                —a software solution to increase AI efficiency in line with
                market demand, creating an insuperable moat for a{" "}
                <span className="font-bold text-cyan-400">$1B+ exit</span> to
                Tier 1 Semiconductor leaders.
              </p>
            </div>

            {/* --- THE SCIENCE: LOGIC-FIRST SYNTHESIS --- */}
            <HowItWorksSection />

            {/* --- SECTION 1: THE PROBLEM --- */}
            <div id="problem-foundation">
              <h3 className="text-2xl font-bold text-white border-l-4 border-cyan-500 pl-4 mb-6 font-mono uppercase tracking-widest">
                Problem: The Flaw in the Foundation
              </h3>
              <div className="p-6 md:p-8 bg-slate-950 border border-red-900/20 rounded-2xl relative overflow-hidden">
                <div className="hidden sm:block absolute top-0 right-0 p-4 opacity-10">
                  <AlertTriangle className="w-24 h-24 text-red-500" />
                </div>

                {/* Top Layer: Paragraph */}
                <p className="text-slate-300 leading-relaxed text-sm md:text-base mb-8">
                  Scaling for the exponentially growing AI market cannot be
                  solved by hardware alone; it requires a total redesign of the
                  underlying mathematical foundation. Current AI relies on
                  70-year-old "calculator-based" matrix math (A x B + C) that
                  requires brute-force arithmetic - an approach fundamentally
                  incompatible with modern market constraints.
                </p>

                {/* Mid Layer: Balanced Row (Graph & Video) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-8">
                  {/* Efficiency Crisis Graph */}
                  <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 flex flex-col justify-between h-full">
                    <h4 className="text-cyan-400 font-mono text-md uppercase mb-6 tracking-widest text-center">
                      Industry Efficiency Crisis
                    </h4>
                    <div className="space-y-8 flex-grow flex flex-col justify-center">
                      <div>
                        <div className="flex justify-between text-md mb-2 uppercase font-mono font-bold tracking-tighter">
                          <span className="text-slate-300">
                            Current NN Efficiency
                          </span>
                          <span className="text-red-500 font-bold">1X</span>
                        </div>
                        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden font-sans">
                          <div className="h-full bg-red-500 w-[5%]"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-md mb-2 uppercase font-mono font-bold tracking-tighter">
                          <span className="text-slate-300">
                            Logic-First Efficiency
                          </span>
                          <span className="text-cyan-400 font-bold text-right">
                            Up to <strong>1000X</strong>
                          </span>
                        </div>
                        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                          <div className="h-full bg-cyan-400 w-full"></div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-300 mt-8 italic text-center">
                      Legacy AI scaling requires "bigger chips". <br />
                      AltiCore solves the problem by providing a "
                      <span className="text-cyan-400">
                        Mathematically Distinct Architecture
                      </span>
                      " .
                    </p>
                  </div>

                  {/* YouTube Video Placeholder */}
                  <div className="bg-slate-900/50 border border-slate-800 rounded-xl flex flex-col items-center justify-center relative overflow-hidden group h-full font-mono font-bold uppercase tracking-widest">
                    <VideoEmbed
                      videoId="IcF4pgFETMM"
                      title="Technical Overview"
                    />
                  </div>
                </div>

                {/* Bottom Layer: Bottlenecks Full-Width Grid */}
                {(() => {
                  const items = [
                    {
                      title: "ARITHMETIC BURDEN",
                      problem:
                        "Legacy AI relies on massive floating-point math and heavy arithmetic intensity.",
                      solution:
                        "The Logic Reset: AltiCore replaces arithmetic with hardware-native logic primitives, eliminating FPU dependency.",
                      icon: Zap,
                    },
                    {
                      title: "Black Box LEGACY",
                      problem:
                        "Standard AI makes determinism nearly impossible in NNs; outputs are probabilistic and variable.",
                      solution:
                        "The Deterministic Core: AltiCore ensures Absolute Timing Predictability, and lightweight understandable models required for safety-certified environments.",
                      icon: Lock,
                    },
                    {
                      title: "SILICON CEILING",
                      problem:
                        "Transistor density cannot keep up with AI model parameter growth as hardware hits physical limits.",
                      solution:
                        "The Density Leap: AltiCore achieves a 1000x density gain by using 35x to 300x fewer parameters than traditional architectures.",
                      icon: Microchip,
                    },
                    {
                      title: "THERMAL CRISIS",
                      problem:
                        'Excess power density leads to "Dark Silicon" and thermal throttling in legacy hardware.',
                      solution:
                        'The Cool Logic: AltiCore efficiency solves the "Dark Silicon" management crisis by utilizing minimal gate counts.',
                      icon: Thermometer,
                    },
                    {
                      title: "ENERGY TAX",
                      problem:
                        "Legacy AI causes energy costs and battery consumption to scale exponentially.",
                      solution:
                        'The Sentinel Efficiency: AltiCore delivers an order-of-magnitude reduction in power, enabling always-on "sentinel" monitoring.',
                      icon: Globe,
                    },
                  ];
                  const renderCard = (
                    impact: (typeof items)[0],
                    idx: number,
                  ) => (
                    <div
                      key={idx}
                      className="flex flex-col gap-3 p-5 bg-slate-900/80 border border-slate-800 rounded-lg group hover:border-cyan-500/30 transition-all h-full"
                    >
                      <div className="flex items-center gap-3">
                        <impact.icon className="w-5 h-5 text-cyan-500 shrink-0" />
                        <h4 className="text-white font-bold text-sm uppercase tracking-wider leading-tight">
                          {impact.title}
                        </h4>
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {impact.problem}
                      </p>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        <span className="text-cyan-400 font-bold">
                          {impact.solution.split(":")[0]}:
                        </span>
                        {impact.solution.split(":").slice(1).join(":")}
                      </p>
                    </div>
                  );
                  return (
                    <div className="space-y-6 mt-12 border-t border-slate-800 pt-8 font-sans">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {items.slice(0, 3).map(renderCard)}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:w-2/3 mx-auto">
                        {items
                          .slice(3)
                          .map((item, i) => renderCard(item, i + 3))}
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>

            {/* --- SECTION 3: REVENUE STREAMS (REFACTORED) --- */}
            <div id="revenue-streams">
              <h3 className="text-2xl font-bold text-white border-l-4 border-cyan-500 pl-4 mb-4 font-mono uppercase tracking-widest">
                AltiCore IP Portfolio: Three High-Margin Revenue Streams
              </h3>
              <p className="text-slate-300 text-md mb-10 leading-relaxed">
                <span className="font-bold text-cyan-400">
                  Strategic Ecosystem:
                </span>{" "}
                AltiCore provides a consistent mathematical framework across the
                entire compute lifecycle. We enable local intelligence on
                high-volume edge devices with{" "}
                <span className="font-bold text-blue-400">AltiCoreMCU</span>,
                maximize throughput on existing enterprise infrastructure with{" "}
                <span className="font-bold text-teal-400">AltiCoreSWP</span>,
                and provide a direct pathway to production silicon with{" "}
                <span className="font-bold text-amber-500">AltiCoreHDL</span>.
              </p>

              <div className="grid grid-cols-1 gap-6">
                <IPPortfolioCard
                  title="AltiCoreSWP"
                  focus="Software Platform"
                  subHeader="Immediate OpEx elimination for existing enterprise infrastructure."
                  color="text-sw"
                  icon={Server}
                  highlights={["~575M inferences/sec", "17x–41x", "13x–21x"]}
                  items={[
                    {
                      label: "Definition",
                      text: "A high-performance software platform for general-purpose compute on laptop, desktop, and server environments.",
                    },
                    {
                      label: "Target Market",
                      text: "Data Centers, Cloud Providers, and Enterprise IT Infrastructure.",
                    },
                    {
                      label: "Business Model",
                      text: "Software-only deployment model utilizing Annual Contract Value (ACV) and recurring subscription fees.",
                    },
                    {
                      label: "Environments",
                      text: "Supporting Windows, Linux and Cuda.",
                    },
                    {
                      label: "Technical Benchmarks",
                      text: "Up to ~575M inferences/sec on Server CPUs; verified 17x–41x throughput advantage on servers and 13x–21x on workstations over industry baselines (C++ TensorFlow Lite XNNPACK).",
                    },
                    {
                      label: "Strategic Advantage",
                      text: 'Enables high-speed inference on standard CPUs, allowing enterprises to scale AI without the "GPU tax" or hardware refreshes.',
                    },
                  ]}
                />

                <IPPortfolioCard
                  title="AltiCoreMCU"
                  focus="HIGH-VOLUME IP ROYALTIES"
                  subHeader="Turning $9 legacy hardware into high-performance AI assets."
                  color="text-mcu"
                  icon={Microchip}
                  highlights={[
                    "local training",
                    "< 521 bytes of RAM",
                    "~9,000 inferences/sec",
                    "zero dynamic memory allocation",
                    "0% change to the Bill of Materials (BOM)",
                  ]}
                  items={[
                    {
                      label: "Definition",
                      text: "An embedded toolset deploying deterministic inference and local training to resource-constrained microcontroller-class devices.",
                    },
                    {
                      label: "Target Market",
                      text: "Industrial Grids, Automotive Systems (Breaking), and Smart Infrastructure.",
                    },
                    {
                      label: "Business Model",
                      text: 'High-Volume IP Licensing; a "Value-per-Device" royalty framework based on units manufactured.',
                    },
                    {
                      label: "Environments",
                      text: "8-bit, 16-bit, and 32-bit hardware including Arduino (Uno, Mega, Nano) and the STM32 Family.",
                    },
                    {
                      label: "Technical Benchmarks",
                      text: "< 521 bytes of RAM footprint; performs ~9,000 inferences/sec on a 16MHz Arduino Uno with zero dynamic memory allocation.",
                    },
                    {
                      label: "Strategic Advantage",
                      text: "Revitalizes legacy hardware assets with 0% change to the Bill of Materials (BOM) by utilizing existing memory and clock cycles previously considered insufficient for AI.",
                    },
                  ]}
                />

                <IPPortfolioCard
                  title="AltiCoreHDL"
                  focus="Hardware-Integrated Intelligence"
                  subHeader="The direct pathway to production silicon and absolute timing predictability."
                  color="text-hdl"
                  icon={Silicon}
                  highlights={[
                    "one inference per clock cycle",
                    "~100 clock cycles",
                    "sentinel",
                  ]}
                  items={[
                    {
                      label: "Definition",
                      text: "FPGA/ASIC hardware inference and training IP that maps the AltiCore framework directly into silicon logic.",
                    },
                    {
                      label: "Target Market",
                      text: "Tier 1 Semiconductor Manufacturers and Fabless Designers.",
                    },
                    {
                      label: "Business Model",
                      text: "Silicon-IP Licensing; hybrid model of upfront integration fees plus annual recurring licensing.",
                    },
                    {
                      label: "Environments",
                      text: "Direct pathway from off-the-shelf FPGAs to custom ASICs and SoCs.",
                    },
                    {
                      label: "Technical Benchmarks",
                      text: "Fully pipelined core delivering one inference per clock cycle; fixed, deterministic latency of ~100 clock cycles.",
                    },
                    {
                      label: "Strategic Advantage",
                      text: 'Replaces heavy arithmetic with integer-only logic and hardware-native primitives. This ensures absolute timing predictability—a critical requirement for safety-critical and always-on "sentinel" monitoring.',
                    },
                  ]}
                />
              </div>
            </div>

            {/* --- SIDEPATH BENCHMARK: ALGORITHMIC SUPERIORITY --- */}
            <SidePathBenchmarkSection />

            {/* --- SECTION 2: COMPETITIVE LANDSCAPE (REFACTORED) --- */}
            <div id="competitive-moat">
              <h3 className="text-2xl font-bold text-white border-l-4 border-cyan-500 pl-4 mb-4 font-mono uppercase tracking-widest">
                Competitive Landscape: The Insuperable Moat
              </h3>
              <p className="text-slate-300 text-md mb-8 leading-relaxed font-sans">
                Current market incumbents focus on "Optimization" - attempting
                to shrink legacy Neural Network architectures to fit modern
                hardware. AltiCore represents a fundamental architectural reset.
                By replacing probabilistic Neural Networks with a{" "}
                <span className="font-bold text-cyan-400">
                  Unique Logic-Based Format
                </span>
                , we decouple AI performance from physical silicon constraints,
                delivering a mathematically distinct solution capable of
                bypassing industry standards.
              </p>

              <div className="rounded-xl border border-slate-800 bg-slate-950/50 overflow-hidden mb-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-[13px]">
                    <thead>
                      <tr className="bg-slate-900/80 border-b border-slate-800 text-slate-300 uppercase tracking-wider font-mono font-bold">
                        <th className="py-4 px-6 font-sans font-normal text-white">
                          Strategic Pillar
                        </th>
                        <th className="py-4 px-4 text-center font-sans font-normal">
                          Legacy (TF Lite / Arm CMSIS-NN)
                        </th>
                        <th className="py-4 px-4 text-center font-sans font-normal">
                          Optimizers (Pruning/Quantization)
                        </th>
                        <th className="py-4 px-4 text-center text-cyan-400 bg-cyan-400/5 font-bold">
                          AltiCore (IP Portfolio)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-300 divide-y divide-slate-800/50 font-sans">
                      <tr>
                        <td className="py-4 px-6 font-mono font-bold uppercase text-md text-slate-100">
                          Architectural Basis
                        </td>
                        <td className="py-4 px-4 text-center">
                          Manual Matrix Math (A x B + C)
                        </td>
                        <td className="py-4 px-4 text-center">
                          Automated NN Compression
                        </td>
                        <td className="py-4 px-4 text-center font-bold text-cyan-400 bg-cyan-400/5">
                          Unique Logic-Based Format
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 font-mono font-bold uppercase text-md text-slate-100">
                          Operational State
                        </td>
                        <td className="py-4 px-4 text-center">
                          Probabilistic "Black Box"
                        </td>
                        <td className="py-4 px-4 text-center">
                          Probabilistic "Black Box"
                        </td>
                        <td className="py-4 px-4 text-center font-bold text-cyan-400 bg-cyan-400/5">
                          100% Deterministic (White Box)
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 font-mono font-bold uppercase text-md text-slate-100">
                          Safety Profile
                        </td>
                        <td className="py-4 px-4 text-center">
                          Non-Deterministic
                        </td>
                        <td className="py-4 px-4 text-center">
                          Non-Deterministic
                        </td>
                        <td className="py-4 px-4 text-center font-bold text-cyan-400 bg-cyan-400/5">
                          Absolute Timing Predictability
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 font-mono font-bold uppercase text-md text-slate-100">
                          INFERENCE LATENCY
                        </td>
                        <td className="py-4 px-4 text-center">
                          High / Variable
                        </td>
                        <td className="py-4 px-4 text-center">
                          Optimized / Variable
                        </td>
                        <td className="py-4 px-4 text-center font-bold text-cyan-400 bg-cyan-400/5">
                          Fixed (1 Inference/Clock Cycle)
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 font-mono font-bold uppercase text-md text-slate-100">
                          Energy Profile
                        </td>
                        <td className="py-4 px-4 text-center">
                          High-Draw / Thermal Issues
                        </td>
                        <td className="py-4 px-4 text-center">
                          Optimized (mA)
                        </td>
                        <td className="py-4 px-4 text-center font-bold text-cyan-400 bg-cyan-400/5">
                          Ultra-Low Energy / Heat
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 font-mono font-bold uppercase text-md text-slate-100">
                          Commercial Model
                        </td>
                        <td className="py-4 px-4 text-center">
                          Hardware Dependency
                        </td>
                        <td className="py-4 px-4 text-center">
                          Subscription Tooling
                        </td>
                        <td className="py-4 px-4 text-center font-bold text-cyan-400 bg-cyan-400/5">
                          High-Margin IP & Royalties
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed italic border-l border-slate-700 pl-4">
                While incumbents focus on incremental gains, AltiCore’s
                'Fabless' model scales via IP Royalties and Enterprise SaaS,
                providing the architectural blueprints that define
                next-generation AI execution.
              </p>
            </div>

            {/* --- SECTION 4: COMMERCIAL SCALABILITY & DEFENSE --- */}
            <div id="gtm-strategy">
              <h3 className="text-2xl font-bold text-white border-l-4 border-cyan-500 pl-4 mb-6 font-mono uppercase tracking-widest">
                COMMERCIAL SCALABILITY & DEFENSE
              </h3>
              <div className="p-6 md:p-8 bg-slate-950 border border-cyan-900/20 rounded-2xl">
                <p className="text-slate-300 text-md mb-10 max-w-3xl leading-relaxed">
                  Revenue scaled through a ‘Value-per-Device’ framework,
                  independent of physical manufacturing constraints.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Scalable Distribution",
                      desc: (
                        <>
                          A high-margin IP licensing model scaling via
                          High-Volume Royalties and Software Platform
                          subscriptions. Our &ldquo;Fabless&rdquo; approach
                          ensures growth is decoupled from hardware supply chain
                          bottlenecks and physical manufacturing limits. This is
                          supported by the ability to &ldquo;
                          <span className="font-bold text-cyan-400">
                            revitalize legacy hardware
                          </span>
                          &rdquo;, making existing inventory smart without
                          changing the Bill of Materials (BOM).
                        </>
                      ),
                      icon: Layers,
                    },
                    {
                      title: "Market Entry",
                      desc: (
                        <>
                          Leveraging Tier 1 Semiconductor partnerships to embed{" "}
                          <span className="font-bold text-amber-500">
                            AltiCoreHDL
                          </span>{" "}
                          directly into next-gen silicon roadmaps. This provides
                          a direct pathway to production silicon through IP
                          cores that deliver industry-leading throughput and
                          absolute timing predictability, allowing models to
                          migrate seamlessly from off-the-shelf FPGAs to custom
                          ASIC designs.
                        </>
                      ),
                      icon: Target,
                    },
                    {
                      title: "IP Moat",
                      desc: (
                        <>
                          Protected by a robust patent portfolio and
                          mathematically distinct algorithms built on a unique
                          logic-based format. By replacing heavy arithmetic with{" "}
                          <span className="font-bold text-cyan-400">
                            hardware-native logic primitives
                          </span>{" "}
                          and{" "}
                          <span className="font-bold text-cyan-400">
                            integer-only logic
                          </span>
                          , the framework eliminates the need for floating-point
                          tensors and matrix multiplications. This
                          mathematically distinct architecture makes it
                          functionally impossible to reverse-engineer via
                          traditional neural network analysis.
                        </>
                      ),
                      icon: ShieldCheck,
                    },
                    {
                      title: "High Switching Costs",
                      desc: (
                        <>
                          Deep integration into client HDL and existing
                          general-purpose software environments (Windows/Linux)
                          ensures long-term Annual Contract Value (ACV)
                          retention. By mapping a{" "}
                          <span className="font-bold text-cyan-400">
                            static execution schedule
                          </span>{" "}
                          directly to the hardware logic, AltiCore creates a
                          specialized, high-performance environment that
                          establishes &ldquo;Intel-Inside&rdquo; brand dominance
                          within the local compute stack.
                        </>
                      ),
                      icon: Lock,
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex flex-col h-full hover:border-cyan-500/30 transition-all group font-sans"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <item.icon className="w-5 h-5 text-cyan-500 shrink-0 group-hover:scale-110 transition-transform" />
                        <h4 className="text-white font-bold text-base tracking-tight uppercase">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-md text-slate-300 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* --- SECTION 6: TEAM & TRACTION --- */}
            <div id="team-credibility">
              <h3 className="text-2xl font-bold text-white border-l-4 border-cyan-500 pl-4 mb-8 font-mono uppercase tracking-widest">
                Team Credibility & Traction
              </h3>
              <div className="p-6 md:p-8 bg-slate-950 border border-green-900/20 rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <div className="flex gap-4 p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                      <div className="w-14 h-14 bg-green-900/30 rounded-lg flex items-center justify-center shrink-0 border border-green-700/30 text-green-400 font-extrabold text-2xl">
                        11+
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg">
                          Successful Exits
                        </h4>
                        <p className="text-md text-slate-300 leading-relaxed font-sans">
                          Management has a collective track record of building
                          and exiting 11 companies to major industry players.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                      <div className="w-14 h-14 bg-blue-900/30 rounded-lg flex items-center justify-center shrink-0 border border-blue-700/30 text-mcu font-extrabold text-2xl">
                        25+
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg">Years</h4>
                        <p className="text-md text-slate-300 leading-relaxed font-sans">
                          Founder/CTO worked for the last 25 years on logic
                          mathematical framework, evolutionary algorithms, and
                          hardware architecture. Filed numerous patents.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-8 rounded-xl border border-slate-800">
                    <h4 className="text-cyan-400 font-mono text-[10px] uppercase mb-8 tracking-widest flex items-center gap-2 font-bold uppercase">
                      <Activity className="w-3 h-3" /> Traction Timeline
                    </h4>
                    <div className="space-y-10">
                      {[
                        {
                          date: "2023",
                          label: "Logic-First Discovery",
                          sub: "Internal breakthrough on gate-level mathematical framework.",
                        },
                        {
                          date: "2024",
                          label: "Seed Funding",
                          sub: "$750K raised (Deep Future / Angels).",
                        },
                        {
                          date: "2025",
                          label: "Technology ready / Proven",
                          sub: "Mathematical framework finalized / Benchmarks",
                        },
                        ,
                        {
                          date: "Q1 2026",
                          label: "Go to market",
                          sub: "",
                        },
                      ].map((t, i) => (
                        <div
                          key={i}
                          className="flex gap-6 items-start relative font-mono font-bold uppercase tracking-widest"
                        >
                          {i < 3 && (
                            <div className="absolute left-2.25 top-8 w-px h-12 bg-slate-800"></div>
                          )}
                          <div className="w-4.5 h-4.5 rounded-full bg-cyan-500/20 border border-cyan-500 shrink-0 mt-1 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                          <div>
                            <p className="text-[14px] text-cyan-500 uppercase">
                              {t && t.date}
                            </p>
                            <p className="text-sm text-white tracking-tight font-sans">
                              {t && t.label}
                            </p>
                            <p className="text-md text-slate-300 font-sans font-normal normal-case">
                              {t && t.sub}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 font-sans">
                  {[
                    {
                      name: "Alain Blancquart",
                      role: "Chairman & CEO",
                      icon: Briefcase,
                      bio: "3 Public Exits (IPO/M&A). 20+ years of C-Suite leadership in SaaS scaling publishers from Seed to Exit.",
                    },
                    {
                      name: "Patrick O'Neil",
                      role: "CTO",
                      icon: Code,
                      bio: "Foundational AltiCore Architect. Mathematician, Algorithms specialist. 6 successful exits as a technical founder.",
                    },
                    {
                      name: "Jerry Conrad",
                      role: "EVP Business Dev",
                      icon: TrendingUp,
                      bio: "Strategic Finance & M&A. 30+ years in banking. Executed a high-value exit to Allstate (NYSE: ALL).",
                    },
                  ].map((member, i) => (
                    <div
                      key={i}
                      className="bg-slate-950 border border-slate-800 p-6 rounded-xl hover:border-cyan-500/50 transition-all group"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center bg-slate-900 group-hover:border-cyan-500/50 transition-colors">
                          <member.icon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-white">
                            {member.name}
                          </h3>
                          <p className="text-cyan-400 text-[12px] font-mono uppercase tracking-tighter">
                            {member.role}
                          </p>
                        </div>
                      </div>
                      <p className="text-md text-slate-300 leading-relaxed border-t border-slate-800/50 pt-4 font-sans">
                        {member.bio}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* --- SECTION 5: ROADMAP (REFACTORED) --- */}
            <div id="roadmap-funded">
              <h3 className="text-2xl font-bold text-white border-l-4 border-cyan-500 pl-4 mb-4 font-mono uppercase tracking-widest">
                Roadmap: Milestones Funded by This Raise
              </h3>
              <p className="text-slate-300 text-md mb-10 leading-relaxed max-w-4xl font-sans">
                Execution Strategy: Capitalizing on the 2026 $1T semiconductor
                milestone, this raise accelerates the parallel deployment of our
                MCU, SW, and HDL streams.
              </p>

              <div className="space-y-6 mb-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-8 bg-slate-950 border border-slate-800 rounded-xl relative group">
                    <div className="absolute -inset-px bg-gradient-to-r from-cyan-500/20 to-mcu-dark/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative">
                      <div className="flex flex-col mb-4 font-mono font-bold uppercase tracking-widest">
                        <span className="px-3 py-1 bg-cyan-900/30 text-cyan-400 text-md rounded-full border border-cyan-500/20 w-fit mb-2">
                          H1 2026
                        </span>
                        <h4 className="text-white text-lg font-sans">
                          Infrastructure & GTM Launch
                        </h4>
                      </div>
                      <div className="space-y-3 font-sans">
                        <p className="text-md text-slate-300">
                          <span className="text-cyan-400 font-mono font-bold uppercase">
                            Team Finalization:
                          </span>{" "}
                          Scale Sales and Customer Support teams to manage
                          enterprise-grade delivery for AltiCoreSWP.
                        </p>
                        <p className="text-md text-slate-300">
                          <span className="text-cyan-400 font-mono font-bold uppercase">
                            IP Expansion:
                          </span>{" "}
                          File next-gen "Logic-First" patents to fortify the
                          moat ahead of mass-market disclosure.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 bg-slate-950 border border-slate-800 rounded-xl relative group">
                    <div className="absolute -inset-px bg-gradient-to-r from-emerald-500/20 to-emerald-900/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative">
                      <div className="flex flex-col mb-4 font-mono font-bold uppercase tracking-widest">
                        <span className="px-3 py-1 bg-emerald-900/30 text-emerald-400 text-md rounded-full border border-emerald-500/20 w-fit mb-2">
                          H1 2026
                        </span>
                        <h4 className="text-white text-lg font-sans">
                          Anchor Client Validation
                        </h4>
                      </div>
                      <div className="space-y-3 font-sans">
                        <p className="text-md text-slate-300">
                          <span className="text-sw font-mono font-bold uppercase">
                            AltiCoreSWP Deployment:
                          </span>{" "}
                          Secure and deploy to 2 anchor Cloud clients,
                          validating the OpEx-reduction model.
                        </p>
                        <p className="text-md text-slate-300">
                          <span className="text-mcu font-mono font-bold uppercase">
                            AltiCoreMCU Beta:
                          </span>{" "}
                          Release production SDK to partners for high-volume
                          royalty hardware runs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 bg-slate-950 border border-slate-800 rounded-xl relative group">
                    <div className="absolute -inset-px bg-gradient-to-r from-hdl/20 to-hdl/5 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative">
                      <div className="flex flex-col mb-4 font-mono font-bold uppercase tracking-widest">
                        <span className="px-3 py-1 bg-hdl/20 text-hdl text-md rounded-full border border-hdl/30 w-fit mb-2">
                          H2 2026
                        </span>
                        <h4 className="text-white text-lg font-sans">
                          Semiconductor Integration
                        </h4>
                      </div>
                      <div className="space-y-3 font-sans">
                        <p className="text-md text-slate-300">
                          <span className="text-hdl font-mono font-bold uppercase">
                            AltiCoreHDL Sign-off:
                          </span>{" "}
                          Execute integration contracts with Tier 1
                          Semiconductor manufacturers.
                        </p>
                        <p className="text-md text-slate-300">
                          <span className="text-hdl font-mono font-bold uppercase">
                            Mass Market Scaling:
                          </span>{" "}
                          Initiate wide-scale rollout for AltiCoreMCU and
                          AltiCoreSWP.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 bg-slate-950 border border-slate-800 rounded-xl relative group">
                    <div className="absolute -inset-px bg-gradient-to-r from-mcu-dark/20 to-cyan-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative">
                      <div className="flex flex-col mb-4 font-mono font-bold uppercase tracking-widest">
                        <span className="px-3 py-1 bg-blue-900/30 text-mcu text-md rounded-full border border-mcu-dark/20 w-fit mb-2">
                          2027
                        </span>
                        <h4 className="text-white text-lg font-sans">
                          Strategic Exit Positioning
                        </h4>
                      </div>
                      <div className="space-y-3 font-sans">
                        <p className="text-md text-slate-300">
                          <span className="text-mcu font-mono font-bold uppercase">
                            Commercial Validation:
                          </span>{" "}
                          Reach target revenue milestones across all three
                          streams.
                        </p>
                        <p className="text-md text-slate-300">
                          <span className="text-mcu font-mono font-bold uppercase">
                            Exit Readiness:
                          </span>{" "}
                          Finalize due diligence room for potential acquisition.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- STRATEGIC POSITIONING & EXIT OPTIONALITY (REWRITTEN) --- */}
              <div className="p-8 bg-cyan-900/10 border border-cyan-500/30 rounded-2xl flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                <Flag className="w-10 h-10 text-cyan-500 shrink-0" />
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-white uppercase tracking-tighter">
                    Strategic Positioning & Exit Optionality
                  </h4>
                  <p className="text-md text-slate-300">
                    While AltiCore is architected for long-term category
                    dominance, the transition from validated IP to multi-stream
                    revenue (Royalties + SaaS) creates a high-value strategic
                    exit window within the next 36 months. Targeting strategic
                    acquisition optionality once mass-market milestones are
                    definitively validated.
                  </p>
                  <p className="text-md text-slate-400 font-mono font-bold uppercase tracking-tighter">
                    Essential IP: Technology for Tier 1 manufacturers seeking to
                    bypass the physical scaling limits of legacy Neural
                    Networks.
                    <br />
                    Valuation Driver: Transition from foundational IP to
                    recurring multi-stream revenue.
                  </p>
                </div>
              </div>
            </div>

            {/* --- SECTION 7: CAPITAL STRATEGY --- */}
            <div id="capital-strategy">
              <h3 className="text-2xl font-bold text-white border-l-4 border-cyan-500 pl-4 mb-8 font-mono uppercase tracking-widest">
                Capital Strategy & Series A Terms
              </h3>
              <div className="p-6 md:p-8 bg-slate-950 border border-cyan-900/20 rounded-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 font-mono font-bold uppercase tracking-widest">
                  <div className="space-y-6">
                    <h4 className="text-lg text-white font-sans">
                      Series A Investment Terms
                    </h4>
                    <div className="p-6 bg-slate-900 rounded-xl border border-slate-800 space-y-4 shadow-2xl">
                      <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                        <span className="text-xs text-slate-400 tracking-widest font-normal uppercase">
                          Round Size
                        </span>
                        <span className="text-lg text-cyan-400 tracking-tighter">
                          $10,000,000
                        </span>
                      </div>
                      <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                        <span className="text-xs text-slate-400 tracking-widest font-normal">
                          Security
                        </span>
                        <span className="text-sm text-white font-sans normal-case">
                          Preferred Stock
                        </span>
                      </div>
                      <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                        <span className="text-xs text-slate-400 tracking-widest font-normal">
                          Pre-Money Val.
                        </span>
                        <span className="text-sm text-cyan-400 tracking-tighter font-bold">
                          $100M
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-slate-400 tracking-widest font-normal">
                          Liquidation Pref.
                        </span>
                        <span className="text-sm text-white font-sans normal-case">
                          1x Non-Participating
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <h4 className="text-lg text-white font-sans">
                      Use of Funds
                    </h4>
                    <div className="space-y-5 font-sans font-normal normal-case">
                      {[
                        {
                          label: "Engineering & R&D",
                          value: "45%",
                          color: "bg-cyan-500",
                        },
                        {
                          label: "GTM & Sales Scaling",
                          value: "30%",
                          color: "bg-emerald-500",
                        },
                        {
                          label: "IP Expansion",
                          value: "15%",
                          color: "bg-sw-dark",
                        },
                        {
                          label: "Operations",
                          value: "10%",
                          color: "bg-slate-600",
                        },
                      ].map((item, i) => (
                        <div key={i}>
                          <div className="flex justify-between text-[13px] mb-2 font-mono font-bold uppercase">
                            <span className="text-slate-300 uppercase tracking-widest">
                              {item.label}
                            </span>
                            <span className="text-cyan-400">{item.value}</span>
                          </div>
                          <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden font-sans">
                            <div
                              className={`h-full ${item.color}`}
                              style={{ width: item.value }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* --- SECURED DUE DILIGENCE FOOTER --- */}
            <div className="flex flex-wrap gap-4 pt-8 font-sans">
              <button className="flex-1 min-w-[200px] border border-dashed border-slate-700 p-6 rounded-xl flex items-center justify-center gap-3 hover:bg-slate-800 transition-all text-slate-300 group">
                <FileText className="w-6 h-6 text-cyan-500" />
                <div className="text-left">
                  <p className="text-sm font-bold text-white">
                    Full Financial Model (NDA)
                  </p>
                  <p className="text-[13px] text-slate-300 font-mono uppercase tracking-widest">
                    2026-2028 Projections
                  </p>
                </div>
              </button>
              <button className="flex-1 min-w-[200px] border border-dashed border-slate-700 p-6 rounded-xl flex items-center justify-center gap-3 hover:bg-slate-800 transition-all text-slate-300 group">
                <ShieldCheck className="w-6 h-6 text-cyan-500" />
                <div className="text-left">
                  <p className="text-sm font-bold text-white">
                    Full IP Audit (NDA)
                  </p>
                  <p className="text-[13px] text-slate-300 font-mono uppercase tracking-widest">
                    Patent Schedule
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
