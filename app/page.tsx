"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Cpu,
  Zap,
  Server,
  Microchip,
  Brain,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  Menu,
  Layers,
  Code,
  ChevronRight,
  BarChart,
  Terminal,
  Database,
  DollarSign,
  Briefcase,
  GitBranch,
  Mail,
  CheckCircle2,
  Activity as Pulse,
  Cpu as Silicon,
  HardDrive,
  Thermometer,
  ClipboardCheck,
  GitMerge,
  Globe,
} from "lucide-react";

// Extracted components
import {
  Button,
  SectionHeading,
  Card,
  LogicBackground,
  CookieConsentBanner,
  HeroMetric,
} from "@/components/ui";
import { VideoEmbed } from "@/components/brand";
import { PodcastSection } from "@/components/sections/PodcastSection";
import { EvoContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/Navbar";

const EvoHero = () => {
  const heroImageAlt =
    "Diagram illustrating the replacement of a complex neural network (NN) with a simple, efficient gate-level logic unit.";

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-slate-900">
      <LogicBackground />
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-cyan-400 text-sm font-mono mb-6 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
            GLOBAL AI STANDARD
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Redefining AI Efficiency{" "}
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-mcu-dark">
              from Sensors to Servers.
            </span>
          </h1>

          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
            AltiCore, EvoChip's patented mathematical framework,{" "}
            <span className="font-bold text-cyan-400">
              replaces arithmetic-intensive neural networks
            </span>{" "}
            with trained, logic-dominant operator chains. By minimizing the
            heavy numeric burden of conventional AI, we deliver{" "}
            <span className="font-bold text-cyan-400">
              orders-of-magnitude efficiency gains
            </span>{" "}
            and address the fundamental scaling limits of modern AI systems.
          </p>

          {/* Product Secondary Tier - Sovereign Color Mapping */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 pb-8 border-b border-slate-800/60">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-mcu">
                <Microchip className="w-4 h-4" />
                <span className="font-mono font-bold tracking-tight">
                  AltiCoreMCU
                </span>
              </div>
              <p className="text-[14px]">
                Deterministic AI for Microcontrollers
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-sw">
                <Server className="w-4 h-4" />
                <span className="font-mono font-bold tracking-tight">
                  AltiCoreSWP
                </span>
              </div>
              <p className="text-[14px]">High-Performance CPU AI Execution</p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-hdl">
                <Cpu className="w-4 h-4" />
                <span className="font-mono font-bold tracking-tight">
                  AltiCoreHDL
                </span>
              </div>
              <p className="text-[14px]">Massive-Throughput Hardware AI</p>
            </div>
          </div>
        </div>
        <div className="relative" aria-label={heroImageAlt}>
          <div className="relative z-10 bg-slate-900/50 backdrop-blur-md p-1 rounded-2xl border border-cyan-500/20 shadow-2xl">
            <div className="bg-slate-950 rounded-xl p-8 overflow-hidden relative min-h-100 flex flex-col justify-center items-center text-center">
              <h3 className="text-slate-400 font-mono mb-8 uppercase tracking-widest text-sm">
                Logic-Dominant Architecture
              </h3>
              <div className="flex items-center gap-8 mb-8">
                <div className="flex flex-col items-center gap-2 opacity-50">
                  <Brain className="w-20 h-20 text-white" />
                  <span className="text-xs text-white">
                    Arithmetic-Bound AI
                  </span>
                </div>
                <ArrowRight className="w-8 h-8 text-cyan-500 animate-pulse" />
                <div className="flex flex-col items-center gap-2">
                  <div className="w-20 h-20 bg-cyan-500/10 border border-cyan-500 rounded-lg flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                    <Cpu className="w-10 h-10 text-cyan-400" />
                  </div>
                  <span className="text-xs text-cyan-400 font-bold">
                    Logic-Dominant Execution
                  </span>
                </div>
              </div>
              <p className="text-slate-300 text-sm font-mono tracking-tighter uppercase">
                Reduced arithmetic intensity. Orders-of-magnitude efficiency
                gains.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const EvoHeroVideos = () => (
  <section className="py-12 bg-slate-900 relative">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <VideoEmbed videoId="H4_RDvzjo2o" title="EvoChip Introduction" />
        <VideoEmbed videoId="IcF4pgFETMM" title="Technical Overview" />
      </div>
    </div>
  </section>
);

const EvoTechnology = () => (
  <section
    id="technology"
    className="py-16 md:py-24 bg-slate-900 border-t border-slate-800 relative"
  >
    <div className="container mx-auto px-6 text-center">
      <SectionHeading
        subtitle="THE LOGIC-FIRST PARADIGM"
        title="Solving the Global AI Energy & Compute Bottleneck"
      />

      <p className="text-lg text-slate-300 max-w-4xl mx-auto mb-16 leading-relaxed">
        Our patented framework provides a foundational solution by changing how
        AI is calculated, not just how it is deployed. By replacing heavy
        arithmetic with logic-dominant operator chains, AltiCore accelerates
        training and execution on existing general-purpose systems. Beyond
        software, it provides a unified, high-efficiency architecture that
        scales seamlessly from resource-constrained microcontrollers to
        massive-throughput custom silicon.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch text-left">
        {/* Box 1: The AI Efficiency Wall */}
        <Card className="bg-slate-800/40 border-slate-700/50 hover:border-cyan-400/50 transition-all group h-full flex flex-col">
          <div className="flex items-center gap-4 mb-4">
            <Layers className="w-10 h-10 text-cyan-400 transition-transform group-hover:scale-110" />
            <h3 className="text-xl font-bold text-white tracking-tight">
              The AI Efficiency Wall
            </h3>
          </div>
          <div className="space-y-4 grow justify-between flex flex-col">
            <p className="text-sm text-slate-300 leading-relaxed">
              <strong className="text-white">Problem:</strong> Scaling via
              brute-force arithmetic (multiply-accumulate) has hit a hard
              ceiling of physical resource constraints. Dense neural networks
              require exponentially larger hardware to yield only incremental
              performance gains.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              <strong className="text-white">Solution:</strong> AltiCore
              restructures computation away from heavy arithmetic, executing
              models as logic-dominant operator chains to deliver massive
              efficiency gains across both existing software infrastructure and
              custom silicon.
            </p>
            <div className="bg-slate-900/50 p-3 rounded border border-cyan-400 font-mono text-[10px] text-cyan-400 leading-relaxed uppercase tracking-widest font-bold">
              ARCHITECTURE METRIC: ORDERS-OF-MAGNITUDE ARITHMETIC
            </div>
          </div>
          <div className="mt-auto pt-4 border-t border-slate-700/50 text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-bold">
            REDUCTION IMPACT: MAXIMIZE COMPUTE DENSITY AND INFRASTRUCTURE CAPEX
          </div>
        </Card>

        {/* Box 2: The AI Power Wall */}
        <Card className="bg-slate-800/40 border-slate-700/50 hover:border-cyan-400/50 transition-all group h-full flex flex-col">
          <div className="flex items-center gap-4 mb-4">
            <Zap className="w-10 h-10 text-cyan-400 transition-transform group-hover:scale-110" />
            <h3 className="text-xl font-bold text-white tracking-tight">
              The AI Power Wall
            </h3>
          </div>
          <div className="space-y-4 grow justify-between flex flex-col">
            <p className="text-sm text-slate-300 leading-relaxed">
              <strong className="text-white">Problem:</strong> Legacy matrix
              math generates unsustainable heat and power draw. High arithmetic
              intensity prevents AI from scaling on constrained edge devices and
              exacerbates "dark silicon" thermal limits in high-density data
              centers.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              <strong className="text-white">Solution:</strong> A mathematical
              framework that minimizes arithmetic overhead, replacing
              floating-point intensity with logic-dominant execution to
              dramatically reduce power consumption across the entire compute
              stack—from microcontrollers to FPGA.
            </p>
            <div className="bg-slate-900/50 p-3 rounded border border-cyan-400 font-mono text-[10px] text-cyan-400 leading-relaxed uppercase tracking-widest font-bold">
              Power Metric: ORDER-OF-MAGNITUDE POWER REDUCTION | MINIMAL THERMAL
              FOOTPRINT
            </div>
          </div>
          <div className="mt-auto pt-4 border-t border-slate-700/50 text-[10px] text-cyan-400 font-mono uppercase tracking-widest font-bold">
            Impact: LOWER OPEX THROUGH REDUCED ARITHMETIC COMPUTE POWER
          </div>
        </Card>

        {/* Box 3: White Box vs. Black Box */}
        <Card className="bg-slate-800/40 border-slate-700/50 hover:border-cyan-400/50 transition-all group h-full flex flex-col">
          <div className="flex items-center gap-4 mb-4">
            <ShieldCheck className="w-10 h-10 text-cyan-400 transition-transform group-hover:scale-110" />
            <h3 className="text-xl font-bold text-white tracking-tight">
              Probabilistic vs. Deterministic
            </h3>
          </div>
          <div className="space-y-4 grow justify-between flex flex-col">
            <p className="text-sm text-slate-300 leading-relaxed">
              <strong className="text-white">Problem:</strong> Standard AI
              execution is often non-deterministic in timing and resource
              utilization, making it a severe liability for safety-critical
              systems, real-time control loops, and regulated industrial
              sectors.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              <strong className="text-white">Solution:</strong> Execution
              predictability. Because AltiCore minimizes dynamic arithmetic and
              memory allocation, it maps to a static execution schedule. This
              provides the absolute timing predictability and fixed-latency
              execution required for strict compliance.
            </p>
            <div className="bg-slate-900/50 p-3 rounded border border-cyan-400 font-mono text-[10px] text-cyan-400 leading-relaxed uppercase tracking-widest font-bold">
              Operational State: CYCLE-CONSTANT DETERMINISM | SAFETY-CRITICAL
              READY
            </div>
          </div>
          <div className="mt-auto pt-4 border-t border-slate-700/50 text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-bold">
            Impact: ENABLE AI IN STRICT REAL-TIME AND REGULATED MARKETS
          </div>
        </Card>
      </div>
    </div>
  </section>
);

const EvoInnovation = () => (
  <section className="py-16 md:py-24 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
    <div className="container mx-auto px-6">
      <SectionHeading
        subtitle="CORE DIFFERENTIATOR"
        title="The Patented Innovation: A New Mathematical Foundation"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Standard AI Side */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-slate-400">
            Standard AI (Neural Networks)
          </h3>

          {/* Matrix Visual */}
          <div className="relative bg-slate-950 border border-slate-800 rounded-xl p-4 h-64 flex items-center justify-center overflow-hidden shadow-inner">
            <svg
              viewBox="0 0 500 200"
              className="w-full h-full text-slate-500 font-mono text-[10px]"
            >
              {/* Matrix Block (Input Data) */}
              <g className="opacity-80">
                {/* Column 1 */}
                <text x="15" y="40" fill="currentColor">
                  0.718...
                </text>
                <text x="15" y="60" fill="currentColor">
                  2.718...
                </text>
                <text x="15" y="80" fill="currentColor">
                  3.141...
                </text>
                <text x="15" y="100" fill="currentColor">
                  1.414...
                </text>
                <text x="15" y="120" fill="currentColor">
                  0.577...
                </text>
                <text x="15" y="140" fill="currentColor">
                  1.618...
                </text>
                <text x="15" y="160" fill="currentColor">
                  2.302...
                </text>

                {/* Column 2 */}
                <text x="65" y="40" fill="currentColor">
                  0.993...
                </text>
                <text x="65" y="60" fill="currentColor">
                  0.123...
                </text>
                <text x="65" y="80" fill="currentColor">
                  0.456...
                </text>
                <text x="65" y="100" fill="currentColor">
                  0.789...
                </text>
                <text x="65" y="120" fill="currentColor">
                  0.321...
                </text>
                <text x="65" y="140" fill="currentColor">
                  0.654...
                </text>
                <text x="65" y="160" fill="currentColor">
                  0.987...
                </text>

                {/* Bracket lines for matrix */}
                <path
                  d="M 10 30 V 170 M 110 30 V 170"
                  stroke="currentColor"
                  strokeWidth="1"
                  opacity="0.5"
                  fill="none"
                />
              </g>

              {/* Connecting Lines: Matrix -> Network */}
              <g stroke="white" strokeWidth="0.5" opacity="0.4">
                <line x1="115" y1="40" x2="160" y2="50" />
                <line x1="115" y1="60" x2="160" y2="80" />
                <line x1="115" y1="80" x2="160" y2="50" />
                <line x1="115" y1="100" x2="160" y2="110" />
                <line x1="115" y1="120" x2="160" y2="80" />
                <line x1="115" y1="140" x2="160" y2="140" />
                <line x1="115" y1="160" x2="160" y2="140" />
              </g>

              {/* Neural Network */}
              <g transform="translate(160, 0)">
                {/* Layer 1 Nodes */}
                <circle
                  cx="0"
                  cy="50"
                  r="4"
                  fill="#334155"
                  stroke="currentColor"
                />
                <circle
                  cx="0"
                  cy="80"
                  r="4"
                  fill="#334155"
                  stroke="currentColor"
                />
                <circle
                  cx="0"
                  cy="110"
                  r="4"
                  fill="#334155"
                  stroke="currentColor"
                />
                <circle
                  cx="0"
                  cy="140"
                  r="4"
                  fill="#334155"
                  stroke="currentColor"
                />

                {/* Connections L1->L2 */}
                <g stroke="white" strokeWidth="0.5" opacity="0.3">
                  <line x1="4" y1="50" x2="46" y2="65" />
                  <line x1="4" y1="50" x2="46" y2="95" />
                  <line x1="4" y1="80" x2="46" y2="65" />
                  <line x1="4" y1="80" x2="46" y2="125" />
                  <line x1="4" y1="110" x2="46" y2="95" />
                  <line x1="4" y1="110" x2="46" y2="125" />
                  <line x1="4" y1="140" x2="46" y2="95" />
                  <line x1="4" y1="140" x2="46" y2="125" />
                </g>

                {/* Layer 2 Nodes */}
                <circle
                  cx="50"
                  cy="65"
                  r="4"
                  fill="#334155"
                  stroke="currentColor"
                />
                <circle
                  cx="50"
                  cy="95"
                  r="4"
                  fill="#334155"
                  stroke="currentColor"
                />
                <circle
                  cx="50"
                  cy="125"
                  r="4"
                  fill="#334155"
                  stroke="currentColor"
                />

                {/* Connections L2->L3 (Output Nodes) */}
                <g stroke="white" strokeWidth="0.5" opacity="0.3">
                  <line x1="54" y1="65" x2="96" y2="80" />
                  <line x1="54" y1="65" x2="96" y2="110" />
                  <line x1="54" y1="95" x2="96" y2="80" />
                  <line x1="54" y1="95" x2="96" y2="110" />
                  <line x1="54" y1="125" x2="96" y2="80" />
                  <line x1="54" y1="125" x2="96" y2="110" />
                </g>

                {/* Layer 3 Nodes (Output Layer) */}
                <circle
                  cx="100"
                  cy="80"
                  r="4"
                  fill="#475569"
                  stroke="currentColor"
                />
                <circle
                  cx="100"
                  cy="110"
                  r="4"
                  fill="#475569"
                  stroke="currentColor"
                />

                {/* Connections to Result */}
                <g stroke="currentColor" strokeWidth="1">
                  <line x1="104" y1="80" x2="140" y2="95" />
                  <line x1="104" y1="110" x2="140" y2="95" />
                </g>
              </g>

              {/* Result Block */}
              <g transform="translate(300, 80)">
                <path
                  d="M 0 15 L 10 15"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <rect
                  x="10"
                  y="0"
                  width="80"
                  height="30"
                  rx="4"
                  fill="#1e293b"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <text
                  x="50"
                  y="19"
                  textAnchor="middle"
                  fill="#94a3b8"
                  fontSize="10"
                  fontWeight="bold"
                >
                  RESULT: ...
                </text>
              </g>
            </svg>
          </div>

          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-slate-500"></span>
              Dense Matrix Multiplication.
            </li>
            <li className="flex items-center gap-3 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-slate-500"></span>
              High Arithmetic Intensity.
            </li>
          </ul>
        </div>

        {/* Divider for Mobile/Desktop */}
        <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-64 bg-gradient-to-b from-transparent via-slate-700 to-transparent"></div>

        {/* AltiCore Side */}
        <div className="space-y-8 relative">
          <h3 className="text-2xl font-bold text-cyan-400">
            AltiCore Architecture
          </h3>

          {/* Logic Visual */}
          <div className="relative bg-slate-950 border border-cyan-500/30 rounded-xl p-6 h-64 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.1)]">
            {/* Custom SVG for Logic Gates */}
            <svg
              viewBox="0 0 400 200"
              className="w-full h-full text-cyan-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {/* Inputs */}
              <text
                x="20"
                y="50"
                fill="currentColor"
                stroke="none"
                className="text-xs font-mono"
              >
                INPUT A
              </text>
              <text
                x="20"
                y="150"
                fill="currentColor"
                stroke="none"
                className="text-xs font-mono"
              >
                INPUT B
              </text>

              {/* Wires - Left */}
              <path
                d="M 80 50 H 120"
                stroke="currentColor"
                className="opacity-50"
              />
              <path
                d="M 80 150 H 120"
                stroke="currentColor"
                className="opacity-50"
              />
              <path
                d="M 100 50 V 90 H 120"
                stroke="currentColor"
                className="opacity-50"
              />
              <path
                d="M 100 150 V 110 H 120"
                stroke="currentColor"
                className="opacity-50"
              />

              {/* Gates */}
              {/* Top Gate (AND-like) */}
              <path
                d="M 120 40 V 60 H 135 A 10 10 0 0 0 135 40 H 120"
                fill="rgba(6,182,212,0.1)"
              />
              {/* Bottom Gate (AND-like) */}
              <path
                d="M 120 140 V 160 H 135 A 10 10 0 0 0 135 140 H 120"
                fill="rgba(6,182,212,0.1)"
              />
              {/* Middle Gate (XOR-like) */}
              <path
                d="M 120 90 Q 125 100 120 110 M 125 90 Q 130 100 125 110 H 135 L 145 100 L 135 90 H 125"
                fill="none"
              />

              {/* Middle Wires */}
              <path d="M 155 50 H 180 V 75" stroke="currentColor" />
              <path d="M 155 150 H 180 V 125" stroke="currentColor" />
              <path d="M 145 100 H 200" stroke="currentColor" />

              {/* Final Gate (OR-like) */}
              <path
                d="M 200 80 Q 210 100 200 120 H 220 L 240 100 L 220 80 H 200"
                fill="rgba(6,182,212,0.2)"
                stroke="currentColor"
              />

              {/* Output Wire */}
              <path
                d="M 240 100 H 280"
                stroke="currentColor"
                strokeWidth="3"
                className="text-cyan-400"
              />

              {/* Output */}
              <text
                x="290"
                y="105"
                fill="currentColor"
                stroke="none"
                className="text-xs font-mono font-bold"
              >
                OUTPUT
              </text>
            </svg>
          </div>

          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-white font-medium">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
              Logic-Dominant Operator Chains.
            </li>
            <li className="flex items-center gap-3 text-white font-medium">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
              Minimal Arithmetic Overhead.
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="mt-16 bg-gradient-to-r from-cyan-900/40 to-blue-900/40 border border-cyan-500/20 rounded-2xl p-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cyan-500/5 backdrop-blur-sm"></div>
        <p className="relative z-10 text-lg md:text-xl text-white font-medium tracking-wide">
          "We do not compress or prune neural networks.
          <br />
          We train and execute within a fundamentally different, logic-dominant
          framework."
        </p>
      </div>
    </div>
  </section>
);

const EvoProducts = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="products"
      className="pt-8 md:pt-12 pb-16 md:pb-24 bg-slate-950 border-t border-slate-800"
    >
      <div className="container mx-auto px-6">
        <SectionHeading
          subtitle="Massive-Throughput Hardware AI"
          title="The AltiCore Ecosystem"
        />

        {/* Product hierarchy visualization */}
        <div className="flex flex-col items-center mb-0">
          {/* Level 1: AltiCore Mathematical Framework */}
          <div className="px-8 py-4 bg-slate-800/80 border border-cyan-500/40 rounded-xl text-center shadow-[0_0_20px_rgba(6,182,212,0.15)] max-w-xs w-full sm:w-auto">
            <h4 className="text-white font-bold text-lg">AltiCore</h4>
            <p className="text-cyan-400 text-sm font-mono">
              The Core Mathematical Framework
            </p>
          </div>

          {/* Vertical connector */}
          <div className="w-px h-8 bg-gradient-to-b from-cyan-500/40 to-white/50" />

          {/* Level 2: AltiCoreAI Product Family */}
          <div className="px-8 py-4 bg-slate-800/60 border border-slate-600/50 rounded-xl text-center max-w-xs w-full sm:w-auto">
            <h4 className="text-white font-bold text-lg">AltiCoreAI</h4>
            <p className="text-slate-300 text-sm font-mono">
              AI Systems Built on AltiCore
            </p>
          </div>

          {/* Branching connector to 4 columns — desktop only */}
          <div
            className="relative w-full hidden lg:block"
            style={{ height: "3rem" }}
          >
            {/* Center vertical down to horizontal junction */}
            <div className="absolute left-1/2 top-0 h-6 w-px bg-white/40 -translate-x-1/2" />
            {/* Horizontal spanning line */}
            <div
              className="absolute top-6 h-px bg-white/40"
              style={{
                left: "calc((100% - 6rem) / 8)",
                right: "calc((100% - 6rem) / 8)",
              }}
            />
            {/* Branch 1 (far left) */}
            <div
              className="absolute top-6 bottom-0 w-px bg-white/40"
              style={{ left: "calc((100% - 6rem) / 8)" }}
            />
            {/* Branch 2 (center-left) */}
            <div
              className="absolute top-6 bottom-0 w-px bg-white/40"
              style={{ left: "calc(3 * (100% - 6rem) / 8 + 2rem)" }}
            />
            {/* Branch 3 (center-right) */}
            <div
              className="absolute top-6 bottom-0 w-px bg-white/40"
              style={{ right: "calc(3 * (100% - 6rem) / 8 + 2rem)" }}
            />
            {/* Branch 4 (far right) */}
            <div
              className="absolute top-6 bottom-0 w-px bg-white/40"
              style={{ right: "calc((100% - 6rem) / 8)" }}
            />
          </div>

          {/* Mobile: single vertical line */}
          <div className="w-px h-8 bg-white/40 lg:hidden" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {/* AltiCoreMCU */}
          <div className="bg-slate-900 rounded-2xl p-4 lg:p-6 border border-mcu/30 shadow-[0_0_30px_rgba(96,165,250,0.15)] flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Microchip className="w-5 h-5 lg:w-8 lg:h-8 text-mcu shrink-0" />
              <h3 className="text-sm lg:text-lg font-bold text-mcu">
                AltiCoreMCU
              </h3>
            </div>
            <p className="text-xs lg:text-sm text-slate-400">
              Inference on resource-constrained microcontrollers, with optional
              on-device training where memory permits
            </p>
          </div>

          {/* AltiCoreSWP */}
          <div className="bg-slate-900 rounded-2xl p-4 lg:p-6 border border-sw/30 shadow-[0_0_30px_rgba(45,212,191,0.1)] flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Server className="w-5 h-5 lg:w-8 lg:h-8 text-sw shrink-0" />
              <h3 className="text-sm lg:text-lg font-bold text-sw">
                AltiCoreSWP
              </h3>
            </div>
            <p className="text-xs lg:text-sm text-slate-400">
              Full model training and inference across general-purpose and
              embedded operating systems
            </p>
          </div>

          {/* AltiCoreHDL */}
          <div className="bg-slate-900 rounded-2xl p-4 lg:p-6 border border-hdl/30 shadow-[0_0_30px_rgba(245,158,11,0.1)] flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5 lg:w-8 lg:h-8 text-hdl shrink-0" />
              <h3 className="text-sm lg:text-lg font-bold text-hdl">
                AltiCoreHDL
              </h3>
            </div>
            <p className="text-xs lg:text-sm text-slate-400">
              FPGA and ASIC implementations accelerating model training and
              inference at extreme scale
            </p>
          </div>

          {/* Mobile + GPU */}
          <div className="bg-slate-900 rounded-2xl p-4 lg:p-6 border border-violet-500/30 shadow-[0_0_30px_rgba(139,92,246,0.1)] flex flex-col gap-2">
            <h3 className="text-sm lg:text-lg font-bold text-violet-400">
              AltiCoreMobile & AltiCoreLLM
            </h3>
            <p className="text-xs lg:text-sm text-slate-400">
              Active development expanding CUDA capabilities, broader GPU
              compute API support, and mobile training and inference
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16 px-6 text-center">
          <p className="text-xl text-white italic font-medium leading-relaxed">
            "AI scales today by adding hardware; AltiCore scales with smarter
            logic, unlocking profitable AI from 8-bit MCUs to custom silicon
            capable of billions of inferences per second."
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          <HeroMetric
            color="mcu"
            prefix="Less than"
            value="521B"
            label="of RAM"
            asterisks={1}
          />

          <HeroMetric
            color="sw"
            prefix="Up to"
            value="28"
            suffix="x"
            label="Speed Multiplier"
            labelColor="text-teal-400"
            // asterisks={2}
            // asterisksHref="/swp-technical-details#swp-vs-nn-server"
          />
          <HeroMetric
            color="hdl"
            prefix="Proven"
            value="100"
            suffix="%"
            label="deterministic"
            labelColor="text-yellow-400"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* AltiCoreMCU */}
          <div className="bg-slate-900 rounded-2xl p-6 md:p-8 border border-mcu/30 shadow-[0_0_30px_rgba(96,165,250,0.2)] flex flex-col">
            <div className="inline-flex mb-4 px-2 py-0.5 bg-blue-900/30 border border-mcu/30 rounded text-[9px] font-mono text-mcu uppercase font-bold w-fit">
              unique logic-dominant architecture
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Microchip className="w-10 h-10 text-mcu" />
              <h3 className="text-xl md:text-2xl font-bold text-white">
                <span className="text-mcu">AltiCoreMCU</span>
              </h3>
            </div>
            <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4 font-bold">
              Deterministic AI for Microcontrollers
            </p>
            <p className="text-slate-300 text-sm leading-relaxed mb-8 grow">
              AltiCoreMCU enables training and execution of AI models locally
              across the microcontroller spectrum—from low-end 8-bit legacy MCUs
              to high-performance embedded processors. Built on the AltiCore
              mathematical framework, it deploys software inference to MCU-class
              devices with{" "}
              <span className="text-mcu font-bold">
                extremely small static memory footprints
              </span>{" "}
              and zero dynamic allocation.{" "}
              <span className="text-mcu font-bold">On-device training</span> is
              supported on compatible hardware, enabling adaptive intelligence
              on resource-constrained systems without reliance on NPUs or cloud
              infrastructure. <br />
              <span className="text-mcu font-bold">(*)</span> 521 bytes of RAM
              on Arduino Uno 8bit (see the AltiCoreMCU Currency Demo Video).
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8 font-mono">
              {[
                "Any MCU Word Size Support",
                "e.g: ~9,000 Inf/Sec (16MHz)",
                "Local Training/INFERENCE",
                "Zero Cloud / NPU",
              ].map((spec) => (
                <div key={spec} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 text-mcu shrink-0 mt-0.5" />
                  <span className="text-[10px] uppercase tracking-tight">
                    {spec}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-auto">
              <Link href="/mcu-technical-details" className="flex-1">
                <Button className="w-full text-sm bg-mcu text-slate-900 shadow-[0_0_20px_rgba(96,165,250,0.4)] hover:bg-mcu-dark hover:shadow-[0_0_30px_rgba(96,165,250,0.6)]">
                  Technical Details
                </Button>
              </Link>
              <Link href="/mcu-whitepaper" className="flex-1">
                <Button className="w-full text-sm bg-transparent border border-mcu/40 !text-mcu hover:border-mcu hover:bg-mcu/10">
                  White Paper
                </Button>
              </Link>
            </div>
          </div>

          {/* AltiCoreSWP */}
          <div className="bg-slate-900 rounded-2xl p-6 md:p-8 border border-sw/30 shadow-[0_0_30px_rgba(45,212,191,0.1)] flex flex-col">
            <div className="inline-flex mb-4 px-2 py-0.5 bg-teal-900/30 border border-sw/30 rounded text-[9px] font-mono text-sw uppercase font-bold w-fit">
              unique logic-dominant architecture
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Server className="w-10 h-10 text-sw" />
              <h3 className="text-xl md:text-2xl font-bold text-white">
                <span className="text-sw">AltiCoreSWP</span>
              </h3>
            </div>
            <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4 font-bold">
              High-Performance CPU AI Execution
            </p>
            <p className="text-slate-300 text-sm leading-relaxed mb-8 flex-grow">
              A high-performance software runtime for model training and
              inference on existing compute systems. The AltiCore mathematical
              framework restructures execution into logic-dominant operator
              chains rather than arithmetic-heavy neural compute. In one
              benchmark experiment across six public datasets at matched
              accuracy, AltiCoreSWP was{" "}
              <span className="text-sw font-bold">typically ~13x faster</span>{" "}
              on a workstation-class CPU (range ~13x to ~21x) and typically{" "}
              <span className="text-sw font-bold">
                ~17x faster on a server-class CPU (range ~17x to ~41x)
              </span>{" "}
              versus the fastest equivalent NN CPU implementation.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8 font-mono">
              {[
                "Matches Neural Network Accuracy",
                "Arithmetic-Minimized Execution",
                "Runs on Standard CPU/OS Infrastructure",
                "Benchmark: 17x-41x Faster",
              ].map((spec) => (
                <div key={spec} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 text-sw shrink-0 mt-0.5" />
                  <span className="text-[10px] uppercase tracking-tight">
                    {spec}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-auto">
              <Link href="/swp-technical-details" className="flex-1">
                <Button className="w-full text-sm bg-sw text-slate-900 shadow-[0_0_20px_rgba(45,212,191,0.4)] hover:bg-sw-dark hover:shadow-[0_0_30px_rgba(45,212,191,0.6)]">
                  Technical Details
                </Button>
              </Link>
              <Link href="/swp-whitepaper" className="flex-1">
                <Button className="w-full text-sm bg-transparent border border-sw/40 !text-sw hover:border-sw hover:bg-sw/10">
                  White Paper
                </Button>
              </Link>
            </div>
          </div>

          {/* AltiCoreHDL */}
          <div className="bg-slate-900 rounded-2xl p-6 md:p-8 border border-hdl/30 shadow-[0_0_30px_rgba(245,158,11,0.1)] flex flex-col">
            <div className="inline-flex mb-4 px-2 py-0.5 bg-amber-900/20 border border-hdl/30 rounded text-[9px] font-mono text-hdl uppercase font-bold w-fit">
              unique logic-dominant architecture
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="w-10 h-10 text-hdl" />
              <h3 className="text-xl md:text-2xl font-bold text-white">
                <span className="text-hdl">AltiCoreHDL</span>
              </h3>
            </div>
            <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4 font-bold">
              Massive-Throughput Hardware AI
            </p>
            <p className="text-slate-300 text-sm leading-relaxed mb-8 grow">
              A direct pathway to production silicon that maps AltiCore models
              into FPGA and ASIC logic as a fixed-depth synchronous pipeline. By
              replacing heavy arithmetic with hardware-native logic operations,
              AltiCoreHDL achieves exactly{" "}
              <span className="text-hdl font-bold">
                one inference per clock cycle per core
              </span>{" "}
              in steady state. It provides cycle-constant latency and sustained
              line-rate throughput without requiring external memory. In a
              demonstrated 17-core FPGA build, the architecture measured{" "}
              <span className="text-hdl font-bold">
                3.19 billion inferences per second
              </span>
              , providing predictable,{" "}
              <span className="text-hdl font-bold">
                massive-scale execution
              </span>{" "}
              for critical workloads.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8 font-mono">
              {[
                "1 Inference / Clock / Core",
                "Cycle-Constant Latency",
                "No External DRAM Required",
                "Standard en/valid Token Interface",
              ].map((spec) => (
                <div key={spec} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 text-hdl shrink-0 mt-0.5" />
                  <span className="text-[10px] uppercase tracking-tight">
                    {spec}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-auto">
              <Link href="/hdl-technical-details" className="w-full">
                <Button className="flex-1 text-sm bg-hdl text-slate-900 shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:bg-hdl hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] w-full">
                  Technical Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const EvoAbout = () => (
  <section
    id="about"
    className="py-16 md:py-24 bg-slate-900 border-t border-slate-800"
  >
    <div className="container mx-auto px-6">
      <SectionHeading
        subtitle="Authority"
        title="Defining the Logic-Dominant Era"
      />
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700">
          <h3 className="text-2xl font-bold text-cyan-400 mb-3">Our Mission</h3>
          <p className="text-slate-300">
            Replace arithmetic-bound AI architectures with deterministic,
            logic-dominant execution that scales seamlessly across the entire
            compute spectrum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
          {[
            { label: "Compliance", val: "Safety-Critical Determinism" },
            { label: "Validation", val: "Provable Execution Latency" },
            { label: "Efficiency", val: "Minimal Thermal Footprint" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-4 border border-slate-800 bg-slate-900/40 rounded-lg"
            >
              <p className="text-cyan-400 text-xs uppercase mb-1">
                {item.label}
              </p>
              <p className="text-white text-sm font-bold font-sans">
                {item.val}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// --- AltiCore COMPONENTS (Rebranded - TARGET SCOPE) ---
const AltiNavbar = ({
  onViewChange,
  currentView,
}: {
  onViewChange: (view: string) => void;
  currentView: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    {
      name: "Edge Autonomy (MCU)",
      action: () => onViewChange("alticore_mcu"),
      active: currentView === "alticore_mcu",
    },
    {
      name: "Synthesis Engine (SW)",
      action: () => onViewChange("alticore_sw"),
      active: currentView === "alticore_sw",
    },
    {
      name: "Gate-Level Logic (HDL)",
      action: () => onViewChange("alticore_hdl"),
      active: currentView === "alticore_hdl",
    },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 bg-slate-900/95 backdrop-blur-md shadow-lg py-4 font-mono`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => onViewChange("alticore_home")}
        >
          <Terminal className="w-6 h-6 text-cyan-500" />
          <span className="text-xl font-bold text-white tracking-tight">
            AltiCore<span className="text-cyan-500">AI</span>
          </span>
        </div>
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={link.action}
              className={`text-sm font-medium uppercase tracking-wide transition-colors font-sans ${
                link.active
                  ? "text-cyan-400 font-bold"
                  : "text-slate-400 hover:text-cyan-400"
              }`}
            >
              {link.name}
            </button>
          ))}
          <div className="h-6 w-px bg-slate-700 mx-1"></div>
          <button
            onClick={() => onViewChange("alticore_about")}
            className={`text-sm font-medium uppercase tracking-wide transition-colors font-sans ${
              currentView === "alticore_about"
                ? "text-cyan-400 font-bold"
                : "text-slate-400 hover:text-cyan-400"
            }`}
          >
            About
          </button>
          <button
            onClick={() => onViewChange("alticore_contact_page")}
            className="text-slate-400 hover:text-cyan-400 text-sm font-medium uppercase flex items-center gap-2 font-sans"
          >
            <Mail className="w-4 h-4" /> Contact
          </button>
          <button
            onClick={() => onViewChange("evochip")}
            className="text-xs text-slate-500 hover:text-white border border-slate-700 px-3 py-1 rounded transition-all font-sans"
          >
            ← Corporate Hub
          </button>
        </div>
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu />
        </button>
      </div>
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-slate-950 border-t border-slate-800 p-6 flex flex-col gap-4 font-sans">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                setIsOpen(false);
                link.action();
              }}
              className="text-slate-300 hover:text-cyan-400 text-lg text-left"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              onViewChange("alticore_about");
            }}
            className="text-slate-300 hover:text-cyan-400 text-lg text-left"
          >
            About
          </button>
          <Button
            variant="devPrimary"
            className="w-full"
            onClick={() => {
              setIsOpen(false);
              onViewChange("alticore_contact_page");
            }}
          >
            Contact Sales
          </Button>
          <button
            onClick={() => {
              setIsOpen(false);
              onViewChange("evochip");
            }}
            className="text-xs text-slate-500 hover:text-white mt-2 text-left"
          >
            ← View Corporate Hub
          </button>
        </div>
      )}
    </nav>
  );
};

const AltiHomeHero = ({
  onViewChange,
}: {
  onViewChange: (view: string) => void;
}) => (
  <section className="min-h-[60vh] bg-slate-900 flex items-center pt-24 relative overflow-hidden">
    <LogicBackground />
    <div className="container mx-auto px-6 relative z-10 text-center py-20">
      <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
        The Universal Standard for High-Performance, Low-Cost AI.
      </h1>
      <p className="text-base md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
        Stop paying the legacy AI hardware tax. Our patented logic-synthesis
        technology slashes BOM and OpEx costs by replacing inefficient
        matrix-math with pure, execution-ready logic across the entire compute
        spectrum.
      </p>
      <div className="flex justify-center gap-4">
        <Button
          variant="devPrimary"
          onClick={() => onViewChange("alticore_mcu")}
        >
          Review Technical Specs
        </Button>
        <Button
          variant="devSecondary"
          onClick={() => onViewChange("alticore_contact_page")}
        >
          Request Economic Audit
        </Button>
      </div>
    </div>
  </section>
);

const AltiProductCategories = ({
  onViewChange,
}: {
  onViewChange: (view: string) => void;
}) => {
  const products = [
    {
      name: "Edge Autonomy IP: The End of Cloud Latency.",
      label: "AltiCoreMCU",
      impact: "ECONOMIC IMPACT: 90% BOM REDUCTION",
      bullets: [
        "90% BOM reduction via gate-level AI deployment",
        "Native compatibility with ARM Cortex-M and ESP32",
        "1000x battery efficiency for industrial IoT ecosystems",
      ],
      cta: "MCU Specifications",
      action: () => onViewChange("alticore_mcu"),
      image: "https://placehold.co/800x400/0F172A/60a5fa?text=Edge+Autonomy+IP",
      badges: ["Cortex-M", "ESP32", "RISC-V"],
      colorClass: "text-mcu",
      badgeClass: "text-mcu border-mcu-dark/30",
      accentClass: "shadow-mcu-dark/30",
      hoverGlow: "hover:shadow-mcu-dark/20",
    },
    {
      name: "Synthesis Engine: Legacy Infrastructure Rebirth.",
      label: "AltiCoreSWP",
      impact: "ECONOMIC IMPACT: CAPEX AVOIDANCE",
      bullets: [
        "Zero hardware changes required for immediate acceleration",
        "Speed gains of 10x-50x on Windows, Linux, and CUDA",
        "Restructuring legacy workloads into binary logic streams",
      ],
      cta: "SW Architecture Details",
      action: () => onViewChange("alticore_sw"),
      image: "https://placehold.co/800x400/0F172A/2dd4bf?text=Synthesis+Engine",
      badges: ["CUDA 12.x", "Ubuntu", "Windows 11"],
      colorClass: "text-sw",
      badgeClass: "text-sw border-sw-dark/30",
      accentClass: "shadow-sw-dark/30",
      hoverGlow: "hover:shadow-sw-dark/20",
    },
    {
      name: "Gate-Level Logic IP: Transistor Sovereignty.",
      label: "AltiCoreHDL",
      impact: "ECONOMIC IMPACT: TRANSISTOR SOVEREIGNTY",
      bullets: [
        "1000x transistor count reduction for native on-chip AI",
        "Synthesizable RTL (VHDL/Verilog) for ASIC/FPGA integration",
        "Direct gate-level support for Qualitative AI and LLM blocks",
      ],
      cta: "Foundry IP Data",
      action: () => onViewChange("alticore_hdl"),
      image:
        "https://placehold.co/800x400/0F172A/fbbf24?text=Gate-Level+Logic+IP",
      badges: ["Verilog", "VHDL", "GDSII Ready"],
      colorClass: "text-hdl",
      badgeClass: "text-hdl border-hdl/30",
      accentClass: "shadow-hdl/30",
      hoverGlow: "hover:shadow-hdl/20",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-slate-950 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="Product Suite" title="The Acquisition Path" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((p, i) => (
            <div
              key={p.name}
              className={`bg-slate-800/80 border border-slate-700 rounded-2xl overflow-hidden shadow-xl ${p.hoverGlow} transition-all cursor-pointer flex flex-col`}
              onClick={p.action}
            >
              <div className="relative h-48 bg-slate-900 flex items-center justify-center">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover opacity-70"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src =
                      "https://placehold.co/800x400/1E293B/E2E8F0?text=Logic+Stream";
                  }}
                />
                <div className="absolute inset-0 bg-slate-900/50 flex flex-col justify-end p-4 md:p-6 text-left">
                  <p className="text-green-400 text-[9px] font-mono font-bold tracking-[0.2em] mb-1 uppercase">
                    {p.impact}
                  </p>
                  <p
                    className={`${p.colorClass} text-[10px] font-mono font-bold uppercase tracking-widest mb-1`}
                  >
                    {p.label}
                  </p>
                  <h4 className="text-xl md:text-2xl font-bold text-white leading-tight font-sans">
                    {p.name}
                  </h4>
                </div>
              </div>
              <div className="p-4 md:p-6 flex-grow flex flex-col font-sans">
                <ul className="space-y-3 mb-6">
                  {p.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-slate-300 text-sm leading-tight"
                    >
                      <CheckCircle2
                        className={`w-4 h-4 ${p.colorClass} shrink-0 mt-0.5`}
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {p.badges && (
                  <div className="flex flex-wrap gap-2 mb-6 font-mono">
                    {p.badges.map((badge) => (
                      <span
                        key={badge}
                        className={`px-2 py-0.5 bg-slate-900 border ${p.badgeClass} text-[9px] rounded font-bold uppercase tracking-tighter`}
                      >
                        [ {badge} ]
                      </span>
                    ))}
                  </div>
                )}
                <Button
                  variant="devPrimary"
                  className={`w-full text-sm mt-auto font-mono ${p.colorClass
                    .replace("text-", "bg-")
                    .replace(
                      "-400",
                      "-500",
                    )} text-slate-900 font-bold uppercase`}
                >
                  {p.cta} <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AltiMcuPage = ({
  setCurrentView,
}: {
  setCurrentView: (view: string) => void;
}) => (
  <section className="min-h-screen bg-slate-900">
    <div className="pt-32 pb-16 container mx-auto px-6">
      <div className="text-green-400 font-mono font-bold tracking-[0.2em] text-xs mb-2 uppercase">
        ECONOMIC IMPACT: 90% BOM REDUCTION
      </div>
      <div className="inline-block px-2 py-1 bg-blue-900/30 text-mcu text-xs border border-mcu-dark/30 mb-6 font-mono font-bold uppercase tracking-widest">
        COMMERCIAL ASSET: AltiCoreMCU
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
        AltiCoreMCU: Binary Firmware IP for Edge Autonomy
      </h1>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-mcu">
            The End of Cloud Latency
          </h3>
          <p className="text-xl text-slate-300 leading-relaxed">
            Deploy high-performance AI on 8-16-32 bit chips without recurring
            API costs. By processing 100% of intelligence locally, AltiCore
            eliminates the "Cloud Tax" and the latency bottlenecks that plague
            industrial Edge devices.
          </p>
          <div className="p-6 bg-slate-800/40 rounded-xl border border-slate-700">
            <h4 className="text-white font-bold mb-4 flex items-center gap-2 font-sans">
              <ClipboardCheck className="w-5 h-5 text-mcu" /> Developer Path
            </h4>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs font-mono font-bold uppercase tracking-widest">
              <div className="flex flex-col items-center">
                <span className="p-2 bg-slate-900 rounded mb-1 border border-slate-700 text-mcu tracking-tighter">
                  1. MODEL INGEST
                </span>
                <span className="text-[10px] text-slate-500 italic lowercase font-normal">
                  ONNX / PyTorch
                </span>
              </div>
              <ChevronRight className="hidden sm:block text-slate-600" />
              <div className="flex flex-col items-center">
                <span className="p-2 bg-slate-900 rounded mb-1 border border-slate-700 text-mcu tracking-tighter">
                  2. LOGIC SYNTHESIS
                </span>
                <span className="text-[10px] text-slate-500 italic lowercase font-normal">
                  Path Optimization
                </span>
              </div>
              <ChevronRight className="hidden sm:block text-slate-600" />
              <div className="flex flex-col items-center">
                <span className="p-2 bg-slate-900 rounded mb-1 border border-slate-700 text-mcu tracking-tighter">
                  3. BINARY FLASH
                </span>
                <span className="text-[10px] text-slate-500 italic lowercase font-normal">
                  MCU Ready
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-950 rounded-2xl border border-slate-800 p-8 shadow-2xl">
          <h4 className="text-white font-bold mb-6 text-center flex items-center justify-center gap-2 uppercase tracking-widest text-sm">
            <Pulse className="w-4 h-4 text-mcu" /> Operational Benchmarks
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-500 uppercase font-mono font-bold">
                  <th className="py-3 px-2">Metric</th>
                  <th className="py-3 px-2">Standard NNP</th>
                  <th className="py-3 px-2 text-mcu font-bold">
                    AltiCore Logic
                  </th>
                </tr>
              </thead>
              <tbody className="text-slate-300 divide-y divide-slate-800/50 font-mono font-bold uppercase tracking-widest">
                <tr>
                  <td className="py-4 px-2 font-bold text-white tracking-tighter">
                    Inference Latency
                  </td>
                  <td className="py-4 px-2 tracking-tighter">12ms - 50ms</td>
                  <td className="py-4 px-2 font-bold text-mcu tracking-tighter">
                    400ns - 800ns
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-2 font-bold text-white tracking-tighter">
                    Active Power Draw
                  </td>
                  <td className="py-4 px-2 tracking-tighter">250mW - 1.2W</td>
                  <td className="py-4 px-2 font-bold text-mcu tracking-tighter">
                    450μW - 900μW
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-2 font-bold text-white tracking-tighter">
                    Security Architecture
                  </td>
                  <td className="py-4 px-2 uppercase text-[10px] tracking-tight font-sans font-normal">
                    Cloud-Dependent
                  </td>
                  <td className="py-4 px-2 font-bold text-mcu text-[10px] uppercase tracking-tighter">
                    100% Air-Gapped
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20 font-sans">
        {[
          {
            title: "BOM Destruction",
            desc: "Eliminate expensive AI co-processors. Run complex models on existing $1 hardware to slash unit costs.",
            icon: Silicon,
            color: "text-mcu",
          },
          {
            title: "Zero Cloud Dependency",
            desc: "Total local autonomy. 100% of model logic remains on-chip for maximum security.",
            icon: ShieldCheck,
            color: "text-mcu",
          },
          {
            title: "Industrial Longevity",
            desc: "Designed for 10-year deployment cycles in remote industrial monitoring and medical wearables.",
            icon: Pulse,
            color: "text-mcu",
          },
        ].map((item, i) => (
          <Card key={i} theme="alti" className="border-mcu-dark/30">
            <item.icon className={`w-10 h-10 ${item.color} mb-4 font-bold`} />
            <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
            <p
              className="text-slate-400 text-sm"
              dangerouslySetInnerHTML={{ __html: item.desc }}
            ></p>
          </Card>
        ))}
      </div>

      <SectionHeading
        subtitle="Hardware Support"
        title="Technical Compatibility"
        align="left"
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {[
          { name: "ARM Cortex-M Series", spec: "M0+, M4, M7, M33" },
          { name: "ESP32-S3 / C3", spec: "Native Xtensa Support" },
          { name: "RISC-V Architectures", spec: "Open-Logic Native" },
        ].map((plat) => (
          <div
            key={plat.name}
            className="p-6 bg-slate-800/40 border border-slate-700 rounded-lg flex flex-col gap-2 shadow-inner hover:border-mcu-dark/30 transition-all font-sans"
          >
            <span className="text-white font-bold">{plat.name}</span>
            <span className="text-mcu text-xs font-mono uppercase font-bold">
              {plat.spec}
            </span>
          </div>
        ))}
      </div>
      <Button
        variant="devPrimary"
        className="bg-mcu-dark text-slate-900 hover:bg-mcu"
        onClick={() => setCurrentView("alticore_contact_page")}
      >
        Request SDK Trial
      </Button>
    </div>
  </section>
);

const AltiSwPage = ({
  setCurrentView,
}: {
  setCurrentView: (view: string) => void;
}) => (
  <section className="min-h-screen bg-slate-900">
    <div className="pt-32 pb-16 container mx-auto px-6">
      <div className="text-green-400 font-mono font-bold tracking-[0.2em] text-xs mb-2 uppercase">
        ECONOMIC IMPACT: CAPEX AVOIDANCE
      </div>
      <div className="inline-block px-2 py-1 bg-teal-900/30 text-sw text-xs border border-sw-dark/30 mb-6 font-mono font-bold uppercase tracking-widest">
        COMMERCIAL ASSET: AltiCoreSWP
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
        AltiCoreSWP: Logic Synthesis Compiler for CUDA/x86
      </h1>

      {/* Sales Comparison Table */}
      <div className="mb-16 bg-slate-950 rounded-2xl border border-slate-800 p-8 shadow-2xl max-w-4xl">
        <h4 className="text-white font-bold mb-6 flex items-center gap-2 uppercase tracking-widest text-sm">
          <BarChart className="w-4 h-4 text-sw" /> Infrastructure ROI
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono font-bold uppercase tracking-widest">
            <thead>
              <tr className="border-b border-slate-800 text-slate-500 uppercase font-bold">
                <th className="py-3 px-2 font-sans font-normal">
                  Asset Parameter
                </th>
                <th className="py-3 px-2">Legacy Cloud AI</th>
                <th className="py-3 px-2 text-sw">AltiCore Synthesis</th>
              </tr>
            </thead>
            <tbody className="text-slate-300 divide-y divide-slate-800/50">
              <tr>
                <td className="py-4 px-2 font-bold text-white tracking-tighter font-sans font-normal">
                  Hardware Lifecycle
                </td>
                <td className="py-4 px-2 tracking-tighter">Annual Upgrades</td>
                <td className="py-4 px-2 font-bold text-sw tracking-tighter">
                  +3-5 Year Extension
                </td>
              </tr>
              <tr>
                <td className="py-4 px-2 font-bold text-white tracking-tighter font-sans font-normal">
                  Infrastructure CapEx
                </td>
                <td className="py-4 px-2 tracking-tighter">
                  High (New Clusters)
                </td>
                <td className="py-4 px-2 font-bold text-sw tracking-tighter">
                  Zero (Legacy Native)
                </td>
              </tr>
              <tr>
                <td className="py-4 px-2 font-bold text-white tracking-tighter font-sans font-normal">
                  Effective Throughput
                </td>
                <td className="py-4 px-2 tracking-tighter">1x (Baseline)</td>
                <td className="py-4 px-2 font-bold text-sw tracking-tighter">
                  10x - 50x Increase
                </td>
              </tr>
              <tr>
                <td className="py-4 px-2 font-bold text-white tracking-tighter font-sans font-normal">
                  Latency / OpEx
                </td>
                <td className="py-4 px-2 tracking-tighter">Variable / High</td>
                <td className="py-4 px-2 font-bold text-sw tracking-tighter">
                  Deterministic / Low
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-sw">
            Legacy Infrastructure Rebirth
          </h3>
          <p className="text-xl text-slate-300 leading-relaxed">
            Extend the functional life of existing enterprise GPU and CPU
            clusters by 3-5 years. Our synthesis engine restructures heavy
            matrix-math workloads into binary logic paths.
          </p>
          <div className="p-6 bg-slate-800/40 rounded-xl border border-slate-700">
            <h4 className="text-white font-bold mb-4 flex items-center gap-2 font-sans">
              <Thermometer className="w-5 h-5 text-red-500" /> Thermal Headroom
              Expansion
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed font-sans">
              By reducing total compute overhead, AltiCore Synthesis allows data
              center operators to run{" "}
              <span className="text-sw font-bold font-mono tracking-tighter">
                2.5x more models per rack
              </span>{" "}
              without upgrading existing systems.
            </p>
          </div>
        </div>
        <div className="bg-slate-950 rounded-2xl border border-slate-800 p-8 shadow-2xl">
          <h4 className="text-white font-bold mb-6 flex items-center gap-2 uppercase tracking-widest text-sm">
            <Code className="w-4 h-4 text-sw" /> The Compiler Stack
          </h4>
          <div className="grid grid-cols-1 gap-4 font-mono font-bold uppercase tracking-widest">
            {[
              {
                name: "Parallel Compute",
                val: "Native CUDA 12.x / ROCm Optimization",
              },
              {
                name: "Vector Synthesis",
                val: "AVX-512 / AMX Instruction Mapping",
              },
              {
                name: "Edge Execution",
                val: "ARM Neon Logic Path Restructuring",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="flex justify-between items-center p-3 bg-slate-900 rounded border border-slate-800"
              >
                <span className="text-[10px] text-slate-500 tracking-tight font-sans font-normal uppercase">
                  {item.name}
                </span>
                <span className="text-xs text-white tracking-tighter">
                  {item.val}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20 font-sans">
        {[
          {
            title: "Legacy Hardware ROI",
            desc: "Achieve <span class='text-sw font-bold font-mono tracking-tighter'>10x speedups</span> on existing standard GPUs. No silicon upgrades required.",
            icon: HardDrive,
            color: "text-sw",
          },
          {
            title: "Optimized Training",
            desc: "Accelerate model training cycles by restructuring heavy matrix math into efficient logic paths.",
            icon: Database,
            color: "text-sw",
          },
          {
            title: "Seamless Integration",
            desc: "Plug-and-play compatibility with standard PyTorch and TensorFlow workloads via our logic compiler.",
            icon: Layers,
            color: "text-sw",
          },
        ].map((item, i) => (
          <Card key={i} theme="alti" className="border-sw-dark/30">
            <item.icon className={`w-10 h-10 ${item.color} mb-4 font-bold`} />
            <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
            <p
              className="text-slate-400 text-sm"
              dangerouslySetInnerHTML={{ __html: item.desc }}
            ></p>
          </Card>
        ))}
      </div>

      <SectionHeading
        subtitle="Stack Integration"
        title="Enterprise Compliance"
        align="left"
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {[
          { name: "NVIDIA CUDA", spec: "CUDA 12.x Ready" },
          { name: "OS Support", spec: "Ubuntu 22.04 / Win 11" },
          { name: "AI Frameworks", spec: "PyTorch / TF Native" },
        ].map((plat) => (
          <div
            key={plat.name}
            className="p-6 bg-slate-800/40 border border-slate-700 rounded-lg flex flex-col gap-2 shadow-inner hover:border-sw-dark/30 transition-all font-sans"
          >
            <span className="text-white font-bold">{plat.name}</span>
            <span className="text-sw text-xs font-mono uppercase font-bold">
              {plat.spec}
            </span>
          </div>
        ))}
      </div>
      <Button
        variant="devPrimary"
        className="bg-sw-dark text-slate-900 hover:bg-sw"
        onClick={() => setCurrentView("alticore_contact_page")}
      >
        Get Enterprise License
      </Button>
    </div>
  </section>
);

const AltiHdlPage = ({
  setCurrentView,
}: {
  setCurrentView: (view: string) => void;
}) => (
  <section className="min-h-screen bg-slate-900">
    <div className="pt-32 pb-16 container mx-auto px-6">
      <div className="text-green-400 font-mono font-bold tracking-[0.2em] text-xs mb-2 uppercase">
        ECONOMIC IMPACT: TRANSISTOR SOVEREIGNTY
      </div>
      <div className="inline-block px-2 py-1 bg-hdl/20 text-hdl text-xs border border-hdl/30 mb-6 font-mono font-bold uppercase tracking-widest">
        COMMERCIAL ASSET: AltiCoreHDL
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
        AltiCoreHDL: Synthesizable RTL for Next-Gen Silicon
      </h1>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-hdl">
            Transistor Sovereignty
          </h3>
          <p className="text-xl text-slate-300 leading-relaxed">
            Radically reduce chip die area to lower manufacturing costs per
            wafer. AltiCoreHDL defines a new physical architecture for AI
            processors achieving{" "}
            <span className="font-mono font-bold tracking-tighter">1000x</span>{" "}
            improvements in silicon density.
          </p>

          <div className="p-6 bg-slate-800/40 rounded-xl border border-slate-700">
            <h4 className="text-white font-bold mb-4 flex items-center gap-2 font-sans">
              <GitBranch className="w-5 h-5 text-hdl" /> Foundry Integration
            </h4>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs font-mono font-bold uppercase tracking-widest">
              <div className="flex flex-col items-center">
                <span className="p-2 bg-slate-900 rounded mb-1 border border-slate-700 text-hdl tracking-tighter">
                  1. RTL LICENSING
                </span>
                <span className="text-[10px] text-slate-500 font-sans italic font-normal lowercase">
                  Direct IP Transfer
                </span>
              </div>
              <ChevronRight className="hidden sm:block text-slate-600" />
              <div className="flex flex-col items-center">
                <span className="p-2 bg-slate-900 rounded mb-1 border border-slate-700 text-hdl tracking-tighter">
                  2. EDA SYNTHESIS
                </span>
                <span className="text-[10px] text-slate-500 font-sans italic font-normal lowercase">
                  Gate-Level Mapping
                </span>
              </div>
              <ChevronRight className="hidden sm:block text-slate-600" />
              <div className="flex flex-col items-center">
                <span className="p-2 bg-slate-900 rounded mb-1 border border-slate-700 text-hdl tracking-tighter">
                  3. GDSII TAPE-OUT
                </span>
                <span className="text-[10px] text-slate-500 font-sans italic font-normal lowercase">
                  Mass Production
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-950 rounded-2xl border border-slate-800 p-8 shadow-2xl">
          <h4 className="text-white font-bold mb-6 flex items-center gap-2 uppercase tracking-widest text-sm">
            <Layers className="w-4 h-4 text-hdl" /> Foundry Deliverables
          </h4>
          <ul className="space-y-4 font-mono font-bold uppercase tracking-widest">
            {[
              { title: "Synthesizable RTL", val: "VHDL / Verilog Source" },
              {
                title: "Implementation Kits",
                val: "GDSII-Ready Hard IP Blocks",
              },
              {
                title: "Verification Stack",
                val: "Formal Verification Testbenches",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="flex flex-col border-l-2 border-slate-800 pl-4"
              >
                <span className="text-[10px] text-slate-500 font-sans font-normal lowercase">
                  {item.title}
                </span>
                <span className="text-xs text-white tracking-tighter">
                  {item.val}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20 font-sans">
        {[
          {
            title: "Foundry Blueprints",
            desc: "Deliverables in synthesizable <span class='text-hdl font-bold font-mono tracking-tighter'>Verilog/VHDL</span>. Ready for integration into leading foundry nodes.",
            icon: Layers,
            color: "text-hdl",
          },
          {
            title: "1000x Density",
            desc: "Reduce AI transistor count by <span class='text-hdl font-bold font-mono tracking-tighter'>1000x</span>. Create smaller, cooler, more efficient processors.",
            icon: Silicon,
            color: "text-hdl",
          },
          {
            title: "Qualitative AI Native",
            desc: "Specialized IP blocks for gate-level LLM execution. Deterministic logic for safety-critical synthesis.",
            icon: Brain,
            color: "text-hdl",
          },
        ].map((item, i) => (
          <Card key={i} theme="alti" className="border-hdl/30">
            <item.icon className={`w-10 h-10 ${item.color} mb-4 font-bold`} />
            <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
            <p
              className="text-slate-400 text-sm"
              dangerouslySetInnerHTML={{ __html: item.desc }}
            ></p>
          </Card>
        ))}
      </div>

      <SectionHeading
        subtitle="Ecosystem Partners"
        title="Foundry Integration"
        align="left"
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {[
          { name: "TSMC / Intel", spec: "N-Series / 18A Ready" },
          { name: "ASIC Design", spec: "RTL Deliverables" },
          { name: "FPGA Platforms", spec: "Safety Synthesis" },
        ].map((plat) => (
          <div
            key={plat.name}
            className="p-6 bg-slate-800/40 border border-slate-700 rounded-lg flex flex-col gap-2 shadow-inner hover:border-hdl/30 transition-all font-sans"
          >
            <span className="text-white font-bold">{plat.name}</span>
            <span className="text-hdl text-xs font-mono uppercase font-bold">
              {plat.spec}
            </span>
          </div>
        ))}
      </div>
      <Button
        variant="devPrimary"
        className="bg-hdl text-white hover:bg-hdl"
        onClick={() => setCurrentView("alticore_contact_page")}
      >
        Access Foundry Data Room
      </Button>
    </div>
  </section>
);

const AltiAboutPage = ({
  setCurrentView,
}: {
  setCurrentView: (view: string) => void;
}) => (
  <div className="min-h-screen bg-slate-900 font-sans">
    <section className="pt-32 pb-20 relative overflow-hidden">
      <LogicBackground />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Democratizing Intelligence at the Gate Level
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
          Eliminating the hardware tax on global AI deployment.
        </p>
      </div>
    </section>

    <section className="py-20 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <span className="font-mono text-cyan-400 tracking-[0.2em] uppercase text-xs block mb-4">
            COMMERCIAL MANDATE: LOGIC-FIRST SCALING
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Unlocking <span className="font-mono tracking-tighter">1000x</span>{" "}
            efficiency for the world’s most constrained environments.
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            AltiCore was established to transition patented logic synthesis from
            theoretical IP into binary firmware and silicon blueprints. Our
            mission is to enable local autonomy on any device without cloud
            dependencies, reducing TCO for enterprise partners.
          </p>
        </div>
      </div>
    </section>

    <section className="py-24 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <SectionHeading
          subtitle="Leadership"
          title="Institutional Expertise"
          align="left"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Alain Blancquart",
              role: "Chairman & CEO",
              stats: "11+ EXITS",
              icon: Briefcase,
              bio: "20+ years of C-Suite leadership in high-margin SaaS and Enterprise Software. Proven specialist in scaling international software publishers from Seed to Exit (IPO/M&A).",
            },
            {
              name: "Patrick O'Neil",
              role: "CTO",
              stats: "100+ PATENTS",
              icon: Code,
              bio: "Foundational AI Architect. Mathematician with a track record of disruptive logic synthesis and evolutionary algorithms. Specialized in hardware-agnostic AI IP.",
            },
            {
              name: "Jerry Conrad",
              role: "EVP Business Dev",
              stats: "M&A STRATEGIST",
              icon: TrendingUp,
              bio: "30+ years in financial services and tech-enabled banking. Previously successfully negotiated and executed a high-value exit to Allstate (NYSE: ALL).",
            },
          ].map((member, i) => (
            <div
              key={i}
              className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/50 transition-all group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full border border-slate-700 flex items-center justify-center bg-slate-950 group-hover:border-cyan-500/50 transition-colors">
                  <member.icon className="w-6 h-6 text-slate-400 group-hover:text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {member.name}
                  </h3>
                  <p className="text-cyan-400 text-xs font-mono uppercase tracking-tighter">
                    {member.role}
                  </p>
                </div>
              </div>
              <div className="mb-6 inline-block px-3 py-1 bg-slate-950 rounded border border-slate-800 text-cyan-400 font-mono text-[10px] font-bold uppercase tracking-widest">
                {member.stats}
              </div>
              <p className="text-sm text-slate-400 leading-relaxed pt-6 border-t border-slate-800/50">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <AltiFinalCta setCurrentView={setCurrentView} />
  </div>
);

const AltiFinalCta = ({
  setCurrentView,
}: {
  setCurrentView: (view: string) => void;
}) => (
  <section className="py-24 bg-slate-900 border-t border-slate-800">
    <div className="container mx-auto px-6 max-w-6xl">
      <SectionHeading
        subtitle="Engagement"
        title="Global Deployment Framework"
      />

      <div className="grid md:grid-cols-4 gap-6 mb-20 font-mono font-bold uppercase tracking-widest">
        {[
          {
            title: "Economic Audit",
            desc: "Financial ROI modeling for BOM and OpEx.",
            icon: DollarSign,
          },
          {
            title: "Architecture Review",
            desc: "Frictionless mapping of the compute stack.",
            icon: GitMerge,
          },
          {
            title: "Pilot Integration",
            desc: "Proof-of-Concept on target local hardware.",
            icon: Terminal,
          },
          {
            title: "IP Licensing",
            desc: "Master agreement for global deployment.",
            icon: Globe,
          },
        ].map((step, i) => (
          <div
            key={step.title}
            className="p-6 bg-slate-800/40 border border-slate-700 rounded-xl relative group hover:border-cyan-500/50 transition-all font-sans font-normal normal-case"
          >
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center text-xs text-cyan-400 font-bold z-10 font-mono uppercase tracking-widest">
              {i + 1}
            </div>
            <step.icon className="w-6 h-6 text-cyan-500 mb-4" />
            <h4 className="text-white font-bold text-sm mb-2">{step.title}</h4>
            <p className="text-[10px] text-slate-500 leading-relaxed uppercase font-mono">
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center font-sans">
        <h2 className="text-2xl font-bold text-white mb-8">
          Ready to Scale Logic-First AI?
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            variant="devPrimary"
            onClick={() => setCurrentView("alticore_contact_page")}
          >
            Contact Enterprise Sales
          </Button>
          <Button variant="outline" onClick={() => setCurrentView("evochip")}>
            View Corporate Investor Story
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const AltiContactPage = () => (
  <div className="min-h-screen bg-slate-900 flex items-center justify-center pt-24 font-sans">
    <div className="text-center">
      <h1 className="text-3xl font-bold text-white mb-4">Contact Sales</h1>
      <p className="text-slate-400 font-mono font-bold uppercase">
        Sales inquiry form is being initialized.
      </p>
    </div>
  </div>
);

const AltiHomePage = ({
  setCurrentView,
}: {
  setCurrentView: (view: string) => void;
}) => (
  <>
    <AltiHomeHero onViewChange={setCurrentView} />
    <AltiProductCategories onViewChange={setCurrentView} />
    <AltiFinalCta setCurrentView={setCurrentView} />
  </>
);

const AltiDeveloperPortalPage = () => (
  <div className="min-h-screen bg-slate-900 flex items-center justify-center pt-24 font-sans">
    <div className="text-center">
      <h1 className="text-3xl font-bold text-white mb-4">
        Technical Documentation
      </h1>
      <p className="text-slate-400 font-mono font-bold uppercase">
        Documentation portal is currently being initialized.
      </p>
    </div>
  </div>
);

const App = () => {
  const [currentView, setCurrentView] = useState("evochip");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);
  console.log("Current View:", currentView);

  const isAltiCorePage = currentView.startsWith("alticore");
  let content;

  if (isAltiCorePage) {
    switch (currentView) {
      case "alticore_mcu":
        content = <AltiMcuPage setCurrentView={setCurrentView} />;
        break;
      case "alticore_sw":
        content = <AltiSwPage setCurrentView={setCurrentView} />;
        break;
      case "alticore_hdl":
        content = <AltiHdlPage setCurrentView={setCurrentView} />;
        break;
      case "alticore_about":
        content = <AltiAboutPage setCurrentView={setCurrentView} />;
        break;
      case "alticore_contact_page":
        content = <AltiContactPage />;
        break;
      case "alticore_insights":
        content = <AltiContactPage />;
        break;
      case "alticore_docs_page":
        content = <AltiDeveloperPortalPage />;
        break;
      default:
        content = <AltiHomePage setCurrentView={setCurrentView} />;
        break;
    }

    return (
      <div className="min-h-screen bg-slate-900 text-slate-200">
        <AltiNavbar onViewChange={setCurrentView} currentView={currentView} />
        {content}
        <footer className="bg-slate-950 border-t border-slate-800 py-8 text-center font-mono tracking-tighter uppercase font-bold">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Link
              href="/privacy"
              className="text-slate-500 hover:text-cyan-400 text-xs transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <Link
              href="/terms"
              className="text-slate-500 hover:text-cyan-400 text-xs transition-colors"
            >
              Terms of Service
            </Link>
          </div>
          <p className="text-slate-600 text-sm">
            &copy; 2025 AltiCore (an EvoChip company).
          </p>
        </footer>
        <CookieConsentBanner />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200">
      <Navbar />
      <EvoHero />
      <EvoHeroVideos />
      {/* <SwShowcase /> */}
      <EvoProducts />
      <EvoInnovation />
      <EvoTechnology />
      <PodcastSection />
      {/* <HdlShowcase /> */}
      <EvoAbout />
      <EvoContactSection />
      <Footer />
    </div>
  );
};

export default App;
