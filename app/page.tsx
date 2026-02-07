"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
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
  X,
  Layers,
  Code,
  ChevronRight,
  Target,
  Lock,
  FileText,
  BarChart,
  Terminal,
  Download,
  Users,
  Activity,
  Box,
  Database,
  DollarSign,
  Briefcase,
  GitBranch,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  AlertTriangle,
  Rocket,
  Award,
  CheckCircle2,
  Flag,
  Activity as Pulse,
  Cpu as Silicon,
  HardDrive,
  Clock,
  Thermometer,
  Minimize2,
  ClipboardCheck,
  GitMerge,
  Globe,
  FileUp,
  BrainCog,
  Laptop,
  Table,
} from "lucide-react";

// Extracted components
import {
  Button,
  SectionHeading,
  Card,
  LogicBackground,
  CookieConsentBanner,
} from "@/components/ui";
import { VideoEmbed, Logo } from "@/components/brand";
import { KPICard, IPPortfolioCard } from "@/components/investor";
import AccuracyChart from "@/components/sections/AccuracyChart";
import SpeedChart from "@/components/sections/SpeedChart";
import LaptopComparisonTable from "@/components/sections/LaptopComparisonTable";
import ServerComparisonTable from "@/components/sections/ServerComparisonTable";
import {
  ArticleDetailView,
  insightsData,
  InsightsPage,
} from "@/components/sections/Insights";

// --- EVO CHIP SITE COMPONENTS (Corporate - PROTECTED) ---
const EvoNavbar = ({
  onViewChange,
}: {
  onViewChange: (view: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Technology", href: "#technology" },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Insights", href: "#insights" },
    { name: "Contact", href: "#contact-evo" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Logo size="md" />
        </div>
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);

                if (link.href === "#insights") {
                  onViewChange("insights");
                } else {
                  onViewChange("evochip");
                }
              }}
              className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
          {/* <div className="h-6 w-px bg-slate-700 mx-2"></div> */}
          {/* <Button
            variant="outline"
            className="py-2 px-4 text-xs"
            onClick={() => onViewChange("alticore_home")}
          >
            Visit AltiCore
          </Button> */}
        </div>
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 p-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);

                if (link.href === "#insights") {
                  onViewChange("insights");
                } else {
                  onViewChange("evochip");
                }
              }}
              className="text-slate-300 hover:text-cyan-400 text-lg"
            >
              {link.name}
            </a>
          ))}
          <Button
            variant="primary"
            onClick={() => {
              setIsOpen(false);
              onViewChange("investor");
            }}
          >
            <Lock className="w-4 h-4" /> Investor Portal
          </Button>
          {/* <Button
            variant="outline"
            onClick={() => {
              setIsOpen(false);
              onViewChange("alticore_home");
            }}
          >
            Visit AltiCore
          </Button> */}
        </div>
      )}
    </nav>
  );
};

const EvoHero = ({
  onViewChange,
}: {
  onViewChange: (view: string) => void;
}) => {
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
            EvoChip is the IP holding company for AltiCore, replacing legacy,
            power-hungry Neural Networks with patented 'Logic-First'
            mathematical framwork to solve the fundamental scaling limits of
            global AI and deliver up to 1000x efficiency gains.
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
              <p className="text-[14px]">Edge device intelligence</p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-sw">
                <Server className="w-4 h-4" />
                <span className="font-mono font-bold tracking-tight">
                  AltiCoreSWP
                </span>
              </div>
              <p className="text-[14px]">Pure software acceleration platform</p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-hdl">
                <Cpu className="w-4 h-4" />
                <span className="font-mono font-bold tracking-tight">
                  AltiCoreHDL
                </span>
              </div>
              <p className="text-[14px]">
                FPGA/ASIC hardware inference and training
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="devPrimary"
              onClick={() => onViewChange("investor")}
            >
              <Lock className="w-4 h-4" /> Access Investor Portal
            </Button>
            {/* <Button
              variant="outline"
              onClick={() => onViewChange("alticore_home")}
            >
              Visit AltiCore
            </Button> */}
          </div>
        </div>
        <div className="relative" aria-label={heroImageAlt}>
          <div className="relative z-10 bg-slate-900/50 backdrop-blur-md p-1 rounded-2xl border border-cyan-500/20 shadow-2xl">
            <div className="bg-slate-950 rounded-xl p-8 overflow-hidden relative min-h-[400px] flex flex-col justify-center items-center text-center">
              <h3 className="text-slate-400 font-mono mb-8 uppercase tracking-widest text-sm">
                Gate-Level Architecture
              </h3>
              <div className="flex items-center gap-8 mb-8">
                <div className="flex flex-col items-center gap-2 opacity-30 blur-[1px]">
                  <Brain className="w-16 h-16 text-slate-500" />
                  <span className="text-xs text-slate-500 line-through decoration-slate-500/50">
                    Neural Network
                  </span>
                </div>
                <ArrowRight className="w-8 h-8 text-cyan-500 animate-pulse" />
                <div className="flex flex-col items-center gap-2">
                  <div className="w-20 h-20 bg-cyan-500/10 border border-cyan-500 rounded-lg flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                    <Cpu className="w-10 h-10 text-cyan-400" />
                  </div>
                  <span className="text-xs text-cyan-400 font-bold">
                    Up to 1000x Efficiency
                  </span>
                </div>
              </div>
              <p className="text-slate-300 text-sm font-mono tracking-tighter uppercase">
                Hardware-agnostic Logic Streams. Real-world 1000x gains.
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

// Version 1: Horizontal Layout (Image left, player right)
const EvoPodcast = () => (
  <section className="py-16 bg-slate-900 border-t border-slate-800 relative">
    <div className="container mx-auto px-6">
      <SectionHeading subtitle="PODCAST" title="EvoChip Explained" />

      <div className="space-y-8 mt-12">
        {/* Episode 1 */}
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-center">
          <div className="w-full aspect-square rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl bg-slate-950">
            <Image
              src="/podcasts/podcast_cover.png"
              alt="EvoChip Explained Podcast Cover"
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <div>
              <div className="text-cyan-400 font-mono text-sm mb-2">
                Episode 1
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Alticore Fits AI Into 521 Bytes
              </h3>
              <p className="text-slate-400 text-sm">
                Discover how Alticore's revolutionary synthesis technology
                trains and executes AI models into impossibly small footprints,
                enabling edge computing at unprecedented scales.
              </p>
            </div>

            <audio
              controls
              className="w-full h-12 rounded-lg"
              style={{
                filter: "hue-rotate(180deg) saturate(1.5)",
              }}
            >
              <source
                src="/podcasts/EvoChipExplained_-_Alticore_Fits_AI_Into_521_Bytes.m4a"
                type="audio/mp4"
              />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>

        {/* Episode 2 (Placeholder) */}
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-center">
          <div className="w-full aspect-square rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl bg-slate-950">
            <Image
              src="/podcasts/podcast_cover.png"
              alt="EvoChip Explained Podcast Cover"
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <div>
              <div className="text-cyan-400 font-mono text-sm mb-2">
                Episode 2
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Coming Soon</h3>
              <p className="text-slate-400 text-sm">
                Stay tuned for our next episode exploring the future of
                semiconductor design and AI optimization.
              </p>
            </div>

            <div className="w-full h-12 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center">
              <span className="text-slate-500 font-mono text-sm">
                Episode Coming Soon
              </span>
            </div>
          </div>
        </div>
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
        title="Solving the Global AI Energy & Efficiency Crisis"
      />

      <p className="text-lg text-slate-300 max-w-4xl mx-auto mb-16 leading-relaxed">
        Our Patented Technology provides an immediate solution by optimizing the
        fundamental logic paths of the entire compute stack. This is more than
        just a chip-level fix; our Mathematical framework accelerates model
        training and execution on existing Windows, Linux, and CUDA
        environments. Beyond software, our technology defines the
        energy-efficient architecture for MCUs, FPGAs, custom ASICs, and GPUs.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch text-left">
        {/* Box 1: The AI Efficiency Wall */}
        <Card className="bg-slate-800/40 border-slate-700/50 hover:border-cyan-400/50 transition-all group h-full flex flex-col">
          <Layers className="w-10 h-10 text-cyan-400 mb-6 transition-transform group-hover:scale-110" />
          <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
            The AI Efficiency Wall
          </h3>
          <div className="space-y-4 grow justify-between flex flex-col">
            <p className="text-sm text-slate-300 leading-relaxed">
              <strong className="text-white">Problem:</strong> Scaling via
              brute-force (adding transistors/data centers) has hit a hard
              ceiling of physical resource constraints including Energy and
              Water.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              <strong className="text-white">Solution:</strong> Architectural
              innovation. AltiCore restructures compute at the logic level to
              deliver gains through a software-first mandate.
            </p>
            <div className="bg-slate-900/50 p-3 rounded border border-cyan-400 font-mono text-[10px] text-cyan-400 leading-relaxed uppercase tracking-widest font-bold">
              Architecture Lead: Up to 1000x Efficiency
            </div>
          </div>
          <div className="mt-auto pt-4 border-t border-slate-700/50 text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-bold">
            Impact: Drastically lower Infrastructure CapEx
          </div>
        </Card>

        {/* Box 2: The AI Power Wall */}
        <Card className="bg-slate-800/40 border-slate-700/50 hover:border-cyan-400/50 transition-all group h-full flex flex-col">
          <Zap className="w-10 h-10 text-cyan-400 mb-6 transition-transform group-hover:scale-110" />
          <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
            The AI Power Wall
          </h3>
          <div className="space-y-4 grow justify-between flex flex-col">
            <p className="text-sm text-slate-300 leading-relaxed">
              <strong className="text-white">Problem:</strong> Legacy matrix
              math generates unsustainable heat and power draw that prevents AI
              scaling on Edge devices or in high-density racks.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              <strong className="text-white">Solution:</strong> Mathematical
              Frameworks that optimize fundamental logic paths across the entire
              stack—from MCUs to GPUs.
            </p>
            <div className="bg-slate-900/50 p-3 rounded border border-cyan-400 font-mono text-[10px] text-cyan-400 leading-relaxed uppercase tracking-widest font-bold">
              Power Metric: 1000x Power Reduction | Drastic Thermal Drop
            </div>
          </div>
          <div className="mt-auto pt-4 border-t border-slate-700/50 text-[10px] text-cyan-400 font-mono uppercase tracking-widest font-bold">
            Impact: Slash OpEx (Energy/Cooling) by 90%
          </div>
        </Card>

        {/* Box 3: White Box vs. Black Box */}
        <Card className="bg-slate-800/40 border-slate-700/50 hover:border-cyan-400/50 transition-all group h-full flex flex-col">
          <ShieldCheck className="w-10 h-10 text-cyan-400 mb-6 transition-transform group-hover:scale-110" />
          <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
            White Box vs. Black Box
          </h3>
          <div className="space-y-4 grow justify-between flex flex-col">
            <p className="text-sm text-slate-300 leading-relaxed">
              <strong className="text-white">Problem:</strong> Probabilistic
              "Black Box" AI is unauditable and fundamentally unsuitable for
              safety-critical business processes or regulated industrial
              sectors.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              <strong className="text-white">Solution:</strong> Deterministic
              Logic. AltiCore provides fully transparent, auditable models that
              assists core operations without obscuring decisions.
            </p>
            <div className="bg-slate-900/50 p-3 rounded border border-cyan-400 font-mono text-[10px] text-cyan-400 leading-relaxed uppercase tracking-widest font-bold">
              Operational State: Certification Ready | Optimized Perf-per-Watt
            </div>
          </div>
          <div className="mt-auto pt-4 border-t border-slate-700/50 text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-bold">
            Impact: Unlock regulated markets (Medical, Auto, Defense)
          </div>
        </Card>
      </div>

      <div className="max-w-4xl mx-auto mt-8 px-6">
        <p className="text-xl text-white italic font-medium leading-relaxed">
          "We don't build bigger hardware; we build smarter logic. AltiCore
          technology scales across global compute infrastructures without the
          constraints of physical manufacturing."
        </p>
      </div>
    </div>
  </section>
);

const EvoProducts = ({
  onViewChange,
}: {
  onViewChange: (view: string) => void;
}) => {
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
          subtitle="Standard Portfolio"
          title="The AltiCore Ecosystem"
        />
        <div className="grid lg:grid-cols-3 gap-8">
          {/* AltiCoreMCU */}
          <div className="bg-slate-900 rounded-2xl p-6 md:p-8 border border-mcu/30 shadow-[0_0_30px_rgba(96,165,250,0.2)] flex flex-col">
            <div className="inline-flex mb-4 px-2 py-0.5 bg-blue-900/30 border border-mcu/30 rounded text-[9px] font-mono text-mcu uppercase font-bold w-fit">
              Patented Logic-First Architecture
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Microchip className="w-10 h-10 text-mcu" />
              <h3 className="text-xl md:text-2xl font-bold text-white">
                <span className="text-mcu">AltiCoreMCU</span>
              </h3>
            </div>
            <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4 font-bold">
              Universal Intelligence at the Edge
            </p>
            <p className="text-slate-300 text-sm leading-relaxed mb-8 flex-grow">
              The only solution capable of training and executing AI models
              locally across the entire microcontroller spectrum—from
              high-performance processors to standard $1 MCUs. A toolset that
              uses the model training tools in{" "}
              <span className="text-sw font-bold">AlticoreSWP</span> and deploys
              software inference to{" "}
              <span className="text-mcu font-bold">MCU-class devices</span>. It
              support{" "}
              <span className="text-mcu font-bold">
                on-device (MCU) training
              </span>{" "}
              on compatible hardware. Our binary firmware IP enables total
              intelligence on resource-constrained hardware without the need for
              expensive NPUs or cloud dependency.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8 font-mono">
              {[
                "Available on 8-16-32 bit",
                "Scalable All MCU Tiers",
                "Local Training & Exec",
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
            <Button
              className="w-full text-sm mt-auto bg-mcu text-slate-900 shadow-[0_0_20px_rgba(96,165,250,0.4)] hover:bg-mcu-dark hover:shadow-[0_0_30px_rgba(96,165,250,0.6)]"
              onClick={() => scrollToSection("mcu-showcase")}
            >
              More info
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* AltiCoreSWP */}
          <div className="bg-slate-900 rounded-2xl p-6 md:p-8 border border-sw/30 shadow-[0_0_30px_rgba(45,212,191,0.1)] flex flex-col">
            <div className="inline-flex mb-4 px-2 py-0.5 bg-teal-900/30 border border-sw/30 rounded text-[9px] font-mono text-sw uppercase font-bold w-fit">
              Patented Logic-First Architecture
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Server className="w-10 h-10 text-sw" />
              <h3 className="text-xl md:text-2xl font-bold text-white">
                <span className="text-sw">AltiCoreSWP</span>
              </h3>
            </div>
            <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4 font-bold">
              Pure software acceleration platform
            </p>
            <p className="text-slate-300 text-sm leading-relaxed mb-8 flex-grow">
              High-performance software acceleration platform for the global
              compute stack. Our Mathematical framework restructures AI model
              execution into binary logic streams to maximize throughput on
              existing Windows, Linux, and CUDA infrastructure. This 100%
              software layer delivers 500x+ speed gains.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8 font-mono">
              {[
                "Zero HW Modification",
                "500x+ Throughput",
                "Enterprise Native",
                "NVIDIA CUDA Optimized",
              ].map((spec) => (
                <div key={spec} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 text-sw shrink-0 mt-0.5" />
                  <span className="text-[10px] uppercase tracking-tight">
                    {spec}
                  </span>
                </div>
              ))}
            </div>
            <Button
              className="w-full text-sm mt-auto bg-sw text-slate-900 shadow-[0_0_20px_rgba(45,212,191,0.4)] hover:bg-sw-dark hover:shadow-[0_0_30px_rgba(45,212,191,0.6)]"
              onClick={() => scrollToSection("sw-showcase")}
            >
              More info
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* AltiCoreHDL */}
          <div className="bg-slate-900 rounded-2xl p-6 md:p-8 border border-hdl/30 shadow-[0_0_30px_rgba(245,158,11,0.1)] flex flex-col">
            <div className="inline-flex mb-4 px-2 py-0.5 bg-amber-900/20 border border-hdl/30 rounded text-[9px] font-mono text-hdl uppercase font-bold w-fit">
              Patented Logic-First Architecture
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="w-10 h-10 text-hdl" />
              <h3 className="text-xl md:text-2xl font-bold text-white">
                <span className="text-hdl">AltiCoreHDL</span>
              </h3>
            </div>
            <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4 font-bold">
              FPGA/ASIC hardware inference and training
            </p>
            <p className="text-slate-300 text-sm leading-relaxed mb-8 flex-grow">
              The gate-level hardware standard for next-generation AI
              processors. We license synthesizable RTL (VHDL/Verilog) blueprints
              that define the physical architecture of the chip. By executing AI
              at the transistor level, we reduce AI transistor count by up to
              1000x.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8 font-mono">
              {[
                "VHDL/Verilog RTL",
                "1000x Density Gain",
                "Foundry Ready",
                "Qualitative AI Blocks",
              ].map((spec) => (
                <div key={spec} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 text-hdl shrink-0 mt-0.5" />
                  <span className="text-[10px] uppercase tracking-tight">
                    {spec}
                  </span>
                </div>
              ))}
            </div>
            <Button
              className="w-full text-sm mt-auto bg-hdl text-slate-900 shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:bg-hdl hover:shadow-[0_0_30px_rgba(245,158,11,0.6)]"
              onClick={() => scrollToSection("hdl-showcase")}
            >
              More info
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const EvoMcuShowcase = () => (
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
        Beneath the cloud lies the "Edge". Not Data centers but billions of
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

const EvoSwShowcase = () => {
  return (
    <section
      id="sw-showcase"
      className="py-16 md:py-24 bg-slate-950 border-t border-slate-800"
    >
      <div className="container mx-auto px-6">
        <SectionHeading
          subtitle="Software Acceleration"
          title="AltiCoreSWP: Beats Neural Networks In Any Case, keeping the same quality models"
        />

        {/* Hero Metric Section */}
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <div className="relative">
            <div className="absolute -inset-8 bg-cyan-500/20 blur-3xl rounded-full"></div>
            <h2 className="text-7xl md:text-9xl font-black text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.5)] tracking-tighter mb-2">
              143<span className="text-4xl md:text-6xl">x</span>
            </h2>
            <p className="text-xl md:text-2xl font-mono text-emerald-400 uppercase tracking-widest font-bold">
              Maximum Speed Multiplier
            </p>
          </div>
        </div>

        {/* Validation Quote */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="border-l-4 border-emerald-500 bg-slate-900/50 p-6 rounded-r-xl">
            <blockquote className="text-lg md:text-xl text-slate-200 font-medium leading-relaxed italic mb-4">
              "The benchmark results with AltiCoreSWP are transformative. Seeing
              a software synthesis engine outperform established best in class
              Neural Networks solution by such a massive margin signals a
              fundamental shift in AI deployment. AltiCore seems to be at the
              beginning of its journey. there will be a lot of room for
              optimizations leading I am sure to even higher performance"
            </blockquote>
            <footer className="text-emerald-400 font-mono text-sm uppercase tracking-widest">
              — CEO, SidePath
            </footer>
          </div>
        </div>

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
      </div>
    </section>
  );
};

const EvoHdlShowcase = () => (
  <section
    id="hdl-showcase"
    className="py-16 md:py-24 bg-slate-900 border-t border-slate-800"
  >
    <div className="container mx-auto px-6">
      <SectionHeading
        subtitle="Foundry BLUEPRINTS"
        title="AltiCoreHDL: Less transistor count - higher efficiency"
      />
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-hdl">Strategic Capability</h3>
          <p className="text-lg text-slate-300 leading-relaxed">
            Achieving equivalent accuracy to massive Neural Networks with{" "}
            <span className="text-hdl font-bold font-mono tracking-tighter">
              &lt;1% of the parameter count
            </span>
            . Our AltiCore technology reduces transistor count by up to 1000x
            for native on-chip AI.
          </p>
          <Card
            theme="alti"
            className="border-hdl/20 bg-hdl/5 hover:border-hdl/50 transition-all"
          >
            <h4 className="text-white font-bold mb-2 flex items-center gap-2">
              <Activity className="w-5 h-5 text-hdl" /> Tightly integrated,
              deterministic hardware deployments
            </h4>
            <p className="text-md text-slate-300 leading-relaxed">
              AltiCore LogicHDL bridges this gap by compiling symbolic machine
              learning models directly into FPGA logic cores, eliminating
              firmware overhead and ensuring nanosecond-to-microsecond inference
              latencies. Using only labeled CSV data and off-the-shelf FPGA
              boards, engineering teams across domains have rapidly prototyped
              and validated production-ready hardware pipelines.
            </p>
          </Card>

          <Card
            theme="alti"
            className="border-hdl/20 bg-hdl/5 hover:border-hdl/50 transition-all"
          >
            <ul className="space-y-3 text-base text-slate-300 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-hdl mt-1">•</span>
                <span>
                  Ultra-fast, hyper-efficient, modular, and cost-effective AI
                  technology
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hdl mt-1">•</span>
                <span>
                  Complete redesign of the stack from transistor to application
                  level{" "}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hdl mt-1">•</span>
                <span>Minimal energy consumption and heat production.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hdl mt-1">•</span>
                <span>
                  No chip development required – it is possible to use
                  commercially available FPGA hardware from experienced
                  suppliers
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hdl mt-1">•</span>
                <span>
                  Fastest learning process – over a billion model evaluations
                  per second.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hdl mt-1">•</span>
                <span>
                  No human loop optimization – the evolutionary learning engine
                  learns without human bias and can be constrained for security
                  reasons.
                </span>
              </li>
            </ul>
          </Card>
        </div>
        <div className="flex items-center justify-center">
          <Card
            theme="alti"
            className="border-hdl/20 bg-hdl/5 hover:border-hdl/50 transition-all"
          >
            <ul className="space-y-3 text-base text-slate-300 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-hdl mt-1">•</span>
                <span>
                  Modeling logic with an ultra-low number of gates. Digital
                  logic structure, massively faster in silicon networks compared
                  to neural networks.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hdl mt-1">•</span>
                <span>No FPU dependency</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hdl mt-1">•</span>
                <span>No matrix multiplications.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hdl mt-1">•</span>
                <span>Can be massively parallelized in hardware</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hdl mt-1">•</span>
                <span>
                  Ultra-lightweight algorithm and modular architecture allowing
                  for easy creation of semiconductor configurations suitable for
                  a wide variety of use cases.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hdl mt-1">•</span>
                <span>
                  The same VHDL logic can be migrated to a semi-custom or fully
                  custom ASIC design.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-hdl mt-1">•</span>
                <span>
                  We use fundamental binary logic, escaping the burden of
                  translating standard mathematics.
                </span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  </section>
);

const EvoAbout = () => (
  <section
    id="about"
    className="py-16 md:py-24 bg-slate-900 border-t border-slate-800"
  >
    <div className="container mx-auto px-6">
      <SectionHeading
        subtitle="Authority"
        title="Defining the Logic-First Era"
      />
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700">
          <h3 className="text-2xl font-bold text-cyan-400 mb-3">Our Mission</h3>
          <p className="text-slate-300">
            Replace legacy black-box architectures with deterministic,
            mathematically verifiable intelligence that scales across all
            hardware tiers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
          {[
            { label: "Compliance", val: "Certification Ready Determinism" },
            { label: "Validation", val: "Formal Verification Compatible" },
            { label: "Efficiency", val: "Ultra-Low Thermal Signature" },
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

const EvoContactSection = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return (
    <section
      id="contact-evo"
      className="py-16 md:py-24 bg-slate-950 border-t border-slate-800 font-sans"
    >
      <div className="container mx-auto px-6">
        <SectionHeading
          subtitle="Corporate Inquiries"
          title="Connect with EvoChip Management"
          align="left"
        />
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-slate-300">
              For media or partnership opportunities, contact us directly.
            </p>
            <div className="space-y-4 text-slate-400">
              <div className="flex items-start gap-4">
                <MapPin className="text-cyan-500" />{" "}
                <span>32932 Pacific Coast Hwy, Dana Point, CA</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-cyan-500" /> <span>ab@evochip.ai</span>
              </div>
            </div>
          </div>
          <Card>
            {submitSuccess ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <p className="text-cyan-400 text-lg font-semibold">
                  Message Sent Successfully!
                </p>
                <p className="text-slate-400 text-sm mt-2">
                  We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form
                action="https://formspree.io/f/xaqbvzdn"
                method="POST"
                className="space-y-4"
              >
                {/* Formspree Configuration */}
                <input
                  type="hidden"
                  name="_next"
                  value={`${siteUrl}/thank-you`}
                />
                <input
                  type="hidden"
                  name="_subject"
                  value="New Contact Form Submission - EvoChip"
                />

                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full bg-slate-900 border border-slate-700 rounded px-4 py-3 text-sm"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full bg-slate-900 border border-slate-700 rounded px-4 py-3 text-sm"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  className="w-full bg-slate-900 border border-slate-700 rounded px-4 py-3 text-sm"
                  rows={4}
                  required
                ></textarea>
                <Button type="submit" variant="primary" className="w-full">
                  Submit
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

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
        <SectionHeading
          subtitle="Product Suite"
          title="The Acquisition Path"
          theme="alti"
        />
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
        theme="alti"
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
        theme="alti"
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
        theme="alti"
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
          theme="alti"
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
        theme="alti"
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

// --- INVESTOR PORTAL CONTENT ---
const HowItWorksSection = () => (
  <div id="how-it-works" className="space-y-12">
    <SectionHeading
      subtitle="Technical Mechanism"
      title="The Science: Logic-First Synthesis"
      align="left"
      theme="evo"
    />

    <p className="text-lg text-slate-300 leading-relaxed font-sans -mt-8 mb-8">
      Transforming "Calculating" AI into "Executable" Logic. AltiCore replaces
      power-hungry matrix calculus with high-speed Boolean synthesis. We don't
      "run" models; we execute them as a stream of pure logic.
    </p>

    {/* The Three-Step Transformation */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        {
          title: "Load Data",
          desc: "Provide labeled training dataset (CSV, API, etc).",
          icon: FileUp,
        },
        {
          title: "Synthesize",
          desc: "Convert probabilistic weights into Binary Decision Diagrams (BDDs).",
          icon: BrainCog,
        },
        {
          title: "Execute",
          desc: "Deploy a native binary using the CPU’s fastest primitive instructions ($AND, OR, XOR$).",
          icon: Cpu,
        },
      ].map((step, i) => (
        <div
          key={i}
          className="p-6 bg-slate-900 border border-cyan-500/20 rounded-xl group hover:border-cyan-400/50 transition-all"
        >
          <step.icon className="w-10 h-10 text-cyan-400 mb-4" />
          <h4 className="text-white font-mono font-bold uppercase tracking-widest text-sm mb-2">
            {i + 1}. {step.title}
          </h4>
          <p className="text-md text-slate-300 leading-relaxed font-sans">
            {step.desc}
          </p>
        </div>
      ))}
    </div>

    {/* The Efficiency Edge (Comparison Table) */}
    <div className="rounded-xl border border-slate-800 bg-slate-950/50 overflow-hidden">
      <div className="bg-slate-900/80 p-4 border-b border-slate-800">
        <h4 className="text-white font-mono font-bold uppercase tracking-widest">
          The Efficiency Limitations
        </h4>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left font-sans">
          <thead>
            <tr className="border-b border-slate-800 text-slate-300 tracking-wider font-mono font-bold">
              <th className="py-4 px-6 text-white">Metric</th>
              <th className="py-4 px-4 text-center">Legacy AI (Neural Nets)</th>
              <th className="py-4 px-4 text-center text-cyan-400">
                AltiCore (Logic-First)
              </th>
            </tr>
          </thead>
          <tbody className="text-slate-200 divide-y divide-slate-800/50">
            {[
              {
                label: "Operations",
                legacy: "Matrix Mult",
                alti: "Bitwise Boolean",
              },
              {
                label: "Compute",
                legacy: "Heavy ALU/GPU",
                alti: "Minimal Register-Level",
              },
              {
                label: "Data Flow",
                legacy: "High Latency",
                alti: "Zero Bottleneck",
              },
              {
                label: "Reliability",
                legacy: "Probabilistic",
                alti: "Deterministic",
              },
            ].map((row, i) => (
              <tr key={i}>
                <td className="py-4 px-6 font-mono font-bold uppercase text-[12px] text-slate-100">
                  {row.label}
                </td>
                <td className="py-4 px-4 text-center">{row.legacy}</td>
                <td className="py-4 px-4 text-center font-bold text-cyan-400">
                  {row.alti}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    {/* Key Advantages */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans">
      {[
        "100% Software-Defined",
        "Universal Portability",
        "Safety-Critical Determinism",
      ].map((adv, i) => (
        <div
          key={i}
          className="flex items-center gap-3 p-4 bg-slate-900/50 border border-slate-800 rounded-lg"
        >
          <CheckCircle2 className="w-4 h-4 text-cyan-500" />
          <span className="text-md text-slate-300">{adv}</span>
        </div>
      ))}
    </div>
  </div>
);

const SidePathBenchmarkSection = () => (
  <div id="sidepath-benchmark" className="space-y-12">
    <h3 className="text-2xl font-bold text-white border-l-4 border-cyan-500 pl-4 mb-4 font-mono uppercase ">
      SidePath Benchmark: Efficiency Superiority{" "}
      <span className="lowercase">w/o model quality compromise</span>
    </h3>

    <p className="text-slate-300 mb-8 leading-relaxed font-sans">
      Independent benchmarking with SidePath confirms that AltiCore’s
      logic-first architecture running on a standard laptop consistently
      outperforms high-end server-class Neural Network configurations. EvoChip
      AltiCore software (CPU-only) on a laptop outperforms neural network models
      on server-class hardware by approximately 12× to 68× on evaluated subsets,
      delivering same quality models.
    </p>

    {/* The Development Paradox */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
      <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Clock className="w-12 h-12 text-slate-400" />
        </div>
        <h4 className="text-white font-mono font-bold uppercase text-[10px] tracking-widest mb-4">
          Legacy AI Paradox
        </h4>
        <div className="space-y-2">
          <p className="text-xl font-bold text-slate-100 font-sans">
            ~100+ Years
          </p>
          <p className="text-md text-slate-300 font-sans leading-relaxed">
            Reflects senior engineering effort (160k–240k hours) via Google
            TensorFlow libraries. Massive legacy overhead.
          </p>
        </div>
      </div>
      <div className="bg-cyan-900/10 p-6 rounded-xl border border-cyan-500/20 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Award className="w-12 h-12 text-cyan-400" />
        </div>
        <h4 className="text-cyan-400 font-mono font-bold uppercase text-[10px] tracking-widest mb-4">
          AltiCore Status
        </h4>
        <div className="space-y-2">
          <p className="text-xl font-bold text-white font-sans">
            &lt; 6 Man-Years
          </p>
          <p className="text-md text-slate-300 font-sans leading-relaxed">
            Achieved definitive performance leadership with minimal dev-time.
            Currently at the{" "}
            <span className="font-bold text-cyan-400">earliest stage</span> of
            the optimization curve.
          </p>
        </div>
      </div>
    </div>

    {/* Benchmark Heatmap comparison */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
      <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 flex flex-col items-center text-center">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex flex-col items-center">
            <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg mb-2">
              <Minimize2 className="w-8 h-8 text-slate-500" />
            </div>
            <span className="text-[10px] font-mono text-slate-500 font-bold uppercase">
              Dell Precision Laptop
            </span>
          </div>
          <ArrowRight className="w-6 h-6 text-cyan-500 animate-pulse" />
          <div className="flex flex-col items-center">
            <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg mb-2">
              <Server className="w-8 h-8 text-cyan-400" />
            </div>
            <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-tighter">
              Dell Server (Xeon Gold)
            </span>
          </div>
        </div>
        <p className="text-md text-slate-300 font-sans px-1">
          AltiCore logic running on consumer registers consistently outperforms
          high-density server nodes running legacy matrix stacks.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div className="p-5 bg-slate-900 border border-slate-800 rounded-xl flex items-start gap-4">
          <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-1" />
          <div>
            <h4 className="text-white font-bold text-sm mb-1">
              Accuracy Parity
            </h4>
            <p className="text-md text-slate-300 leading-relaxed font-sans">
              SidePath data confirms a slight accuracy advantage for AltiCore
              despite running with orders of magnitude fewer resources.
            </p>
          </div>
        </div>
        <div className="p-5 bg-slate-900 border border-slate-800 rounded-xl flex items-start gap-4">
          <Silicon className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
          <div>
            <h4 className="text-white font-bold text-sm mb-1">
              Compute Density
            </h4>
            <p className="text-md text-slate-300 leading-relaxed font-sans">
              Uses orders of magnitude fewer parameters and arithmetic
              operations per inference cycle.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 xl:grid-cols-1 gap-6 items-start">
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

      {/* Note about first column */}
      <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/40 p-5 rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-400/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
        <h4 className="text-teal-400 font-bold text-sm uppercase tracking-tight mb-2 flex items-center gap-2">
          <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
          About the table&apos;s first column
        </h4>
        <p className="text-slate-300 text-sm leading-relaxed relative z-10">
          We know that most neural networks implementations are not used
          directly out of the box however we want to highlight the high
          efficiency of AltiCoreSWP.
        </p>
      </div>

      {/* Edge Performance (Laptop) */}
      <LaptopComparisonTable showFirstColumn />

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

      {/* Note about first column */}
      <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/40 p-5 rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-400/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
        <h4 className="text-teal-400 font-bold text-sm uppercase tracking-tight mb-2 flex items-center gap-2">
          <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
          About the table&apos;s first column
        </h4>
        <p className="text-slate-300 text-sm leading-relaxed relative z-10">
          We know that most neural networks implementations are not used
          directly out of the box however we want to highlight the high
          efficiency of AltiCoreSWP.
        </p>
      </div>
      {/* Enterprise Performance (Server) */}
      <ServerComparisonTable showFirstColumn />
    </div>

    {/* DEFINITIVE ACCURACY VALIDATION BLOCK */}
    <Card theme="alti" className="border-green-500/30 bg-green-900/5 mt-8">
      <div className="flex items-center gap-3 mb-2">
        <ShieldCheck className="w-6 h-6 text-green-400" />
        <h4 className="text-white font-bold text-sm uppercase tracking-tight">
          Definitive Accuracy: Zero Compromise for Efficiency
        </h4>
      </div>
      <p className="text-md text-slate-300 leading-relaxed font-sans">
        Benchmarks confirm that AltiCore maintains near-parity or superior test
        accuracy across all key datasets compared to legacy Neural Networks. Our
        logic-synthesis replaces brute-force matrix math without signal loss,
        proving that 1000x efficiency gains are achievable without degrading
        model intelligence. Testing indicates a slight accuracy advantage for
        AltiCore logic streams in head-to-head scenarios as noted in the
        Benchmark Models Accuracy data.
      </p>
    </Card>

    <p className="text-cyan-300 text-2xl leading-relaxed italic border-l border-slate-700 pl-4">
      Future State: AltiCore is currently at the earliest stage of its
      optimization curve; future algorithmic potential suggests performance
      leads exceeding 100x as compiler logic matures.
    </p>
  </div>
);

const InvestorPortalContent = ({
  onViewChange,
}: {
  onViewChange: (view: string) => void;
}) => {
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
            <Button
              variant="outline"
              className="w-full sm:w-auto py-2 px-4 text-xs order-first sm:order-last"
              onClick={() => onViewChange("evochip")}
            >
              ← Return to Public Site
            </Button>
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
            <KPICard
              title="Engineering Base"
              value="100+ Patents"
              icon={ShieldCheck}
              color="text-cyan-400"
              subtitle="Foundational IP Moat."
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
                AltiCore is transitioning from Validated and Patented IP to
                mass-market commercialization. By abandoning Neural Networks for
                Logic-First synthesis, we provide—from <strong>MCUs</strong> to{" "}
                <strong>GPU’s</strong>—a software solution to increase AI
                efficiency in line with market demand, creating an insuperable
                moat for a <strong>$1B+</strong> exit to Tier 1 Semiconductor
                leaders.
              </p>
            </div>

            {/* --- THE SCIENCE: LOGIC-FIRST SYNTHESIS --- */}
            <HowItWorksSection />

            {/* --- SIDEPATH BENCHMARK: ALGORITHMIC SUPERIORITY --- */}
            <SidePathBenchmarkSection />

            {/* --- SECTION 1: THE PROBLEM --- */}
            <div
              id="problem-foundation"
              className="p-6 md:p-8 bg-slate-950 border border-red-900/20 rounded-2xl relative overflow-hidden"
            >
              <div className="hidden sm:block absolute top-0 right-0 p-4 opacity-10">
                <AlertTriangle className="w-24 h-24 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-6 font-mono uppercase tracking-widest">
                Problem: The Flaw in the Foundation
              </h3>

              {/* Top Layer: Paragraph */}
              <p className="text-slate-300 leading-relaxed text-sm md:text-base mb-8">
                Scaling for the exponentially growing AI market cannot be solved
                by hardware alone; it requires a total redesign of the
                underlying software architecture. Current AI relies on
                70-year-old Neural Network concepts that require brute-force
                matrix multiplication—an approach fundamentally incompatible
                with modern market constraints.
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
                    Legacy AI scaling requires "bigger chips." <br />
                    EvoChip solves the problem by making **"smarter software."**
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-12 border-t border-slate-800 pt-8 font-sans">
                {[
                  {
                    title: "Computational Power",
                    desc: "AI algorithms demand an ever-increasing amount of computational power, draining resources at an unsustainable rate.",
                    icon: Zap,
                  },
                  {
                    title: "The Black Box",
                    desc: "Determinism is impossible in NNs, making them unusable for Certification Ready safety environments.",
                    icon: Lock,
                  },
                  {
                    title: "Silicon Limits",
                    desc: "Transistor density is no longer able to keep up with the demand for always higher integration.",
                    icon: Microchip,
                  },
                  {
                    title: "Heat",
                    desc: "Excess heat due to high power density hinders running chips at full power. “Dark silicon” management is key.",
                    icon: Thermometer,
                  },
                  {
                    title: "Energy",
                    desc: "Energy consumption is a major issue and keeps increasing exponentially. A major problem for the planet.",
                    icon: Globe,
                  },
                ].map((impact, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col gap-3 p-5 bg-slate-900/80 border border-slate-800 rounded-lg group hover:border-cyan-500/30 transition-all h-full"
                  >
                    <div className="w-10 h-10 rounded bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                      <impact.icon className="w-5 h-5 text-cyan-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2 leading-tight h-8 flex items-center">
                        {impact.title}
                      </h4>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {impact.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* --- SECTION 2: COMPETITIVE LANDSCAPE (REFACTORED) --- */}
            <div id="competitive-moat">
              <h3 className="text-2xl font-bold text-white border-l-4 border-cyan-500 pl-4 mb-4 font-mono uppercase tracking-widest">
                Competitive Landscape: The Insuperable Moat
              </h3>
              <p className="text-slate-300 text-md mb-8 leading-relaxed font-sans">
                Current market incumbents focus on "Optimization"—attempting to
                shrink 70-year-old Neural Network architectures to fit modern
                hardware. AltiCore represents a fundamental architectural reset.
                By replacing probabilistic Neural Networks with Logic-First
                Synthesis, we decouple AI performance from physical silicon
                constraints, delivering the only deterministic solution capable
                of bypassing industry standards.
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
                          Optimizers (Edge Impulse / Neuton.ai)
                        </th>
                        <th className="py-4 px-4 text-center text-cyan-400 bg-cyan-400/5 font-bold">
                          AltiCore (EvoChip IP)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-300 divide-y divide-slate-800/50 font-sans">
                      <tr>
                        <td className="py-4 px-6 font-mono font-bold uppercase text-md text-slate-100">
                          Architectural Basis
                        </td>
                        <td className="py-4 px-4 text-center">
                          Manual Matrix Math (Matrix-Ops)
                        </td>
                        <td className="py-4 px-4 text-center">
                          Automated NN Pruning
                        </td>
                        <td className="py-4 px-4 text-center font-bold text-cyan-400 bg-cyan-400/5">
                          Logic-First Gate Synthesis
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
                          Certification Ready / Safety Critical
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 font-mono font-bold uppercase text-md text-slate-100">
                          Efficiency Ceiling
                        </td>
                        <td className="py-4 px-4 text-center">
                          Hardware-Bound (Moore’s Law)
                        </td>
                        <td className="py-4 px-4 text-center">
                          Memory/Compute Bound
                        </td>
                        <td className="py-4 px-4 text-center font-bold text-cyan-400 bg-cyan-400/5">
                          Algorithmic (1,000x Advantage)
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
                          Ultra-Low (&lt;1mW)
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

            {/* --- SECTION 3: REVENUE STREAMS (REFACTORED) --- */}
            <div id="revenue-streams">
              <h3 className="text-2xl font-bold text-white border-l-4 border-cyan-500 pl-4 mb-4 font-mono uppercase tracking-widest">
                AltiCore IP Portfolio: Three High-Margin Revenue Streams
              </h3>
              <p className="text-slate-300 text-md mb-10 leading-relaxed max-w-3xl">
                Strategic Ecosystem: AltiCore owns the entire compute lifecycle.
                We secure the silicon with HDL, capture the high-volume edge
                with MCU, and optimize the global cloud with SW.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <IPPortfolioCard
                  title="AltiCoreMCU"
                  focus="HIGH-VOLUME IP ROYALTIES"
                  subHeader="Turning $2 IoT hardware into high-performance AI assets."
                  color="text-mcu"
                  icon={Microchip}
                  items={[
                    {
                      label: "Target Market",
                      text: "$50 Billion TAM (Industrial IoT, Wearables, Smart Home).",
                    },
                    {
                      label: "Model",
                      text: 'IP Licensing. A "Value-per-Device" framework embedded into hardware.',
                    },
                    {
                      label: "Monetization",
                      text: "Volume-Based Royalties based on units manufactured/shipped.",
                    },
                    {
                      label: "Strategic Advantage",
                      text: "Enables sophisticated AI on low-cost hardware (<$2 devices). Drastically lowers BOM.",
                    },
                  ]}
                />
                <IPPortfolioCard
                  title="AltiCoreSWP"
                  focus="ENTERPRISE SAAS"
                  subHeader="Immediate OpEx elimination for existing infrastructure."
                  color="text-sw"
                  icon={Server}
                  items={[
                    {
                      label: "Target Market",
                      text: "Data Centers, Cloud Providers, and Enterprise IT Infrastructure.",
                    },
                    {
                      label: "Model",
                      text: "Enterprise SaaS. Software-only deployment for immediate acceleration.",
                    },
                    {
                      label: "Monetization",
                      text: "Annual Contract Value (ACV). Recurring subscription fees.",
                    },
                    {
                      label: "Environments",
                      text: "Windows, Linux, CUDA (Nvidia); Laptops, CPUs, FPGAs, and Servers.",
                    },
                    {
                      label: "Strategic Advantage",
                      text: "Immediate OpEx Reduction without requiring a hardware refresh.",
                    },
                  ]}
                />
                <IPPortfolioCard
                  title="AltiCoreHDL"
                  focus="SILICON-IP SAAS"
                  subHeader="The 'Intel-Inside' moat for the next generation of silicon."
                  color="text-hdl"
                  icon={Silicon}
                  items={[
                    {
                      label: "Target Market",
                      text: "Tier 1 Semiconductor Manufacturers and Fabless Designers.",
                    },
                    {
                      label: "Model",
                      text: "Hybrid Silicon-IP embedding AltiCore at the design stage.",
                    },
                    {
                      label: "Monetization",
                      text: "Upfront Integration Fees + Annual Recurring Licensing.",
                    },
                    {
                      label: "Strategic Advantage",
                      text: "Foundational IP Moat integrated directly into the Hardware Description Language (HDL).",
                    },
                  ]}
                />
              </div>
            </div>

            {/* --- SECTION 4: COMMERCIAL SCALABILITY & DEFENSE --- */}
            <div
              id="gtm-strategy"
              className="p-6 md:p-8 bg-slate-950 border border-cyan-900/20 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-6 font-mono uppercase tracking-widest">
                COMMERCIAL SCALABILITY & DEFENSE
              </h3>
              <p className="text-slate-300 text-md mb-10 max-w-3xl leading-relaxed">
                Our revenue model is built for exponential growth independent of
                physical manufacturing constraints. We provide the architectural
                blueprints that define next-generation AI execution.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Scalable Distribution",
                    desc: 'A "Fabless" model scaling via IP Royalties and Enterprise SaaS. Growth is independent of physical manufacturing constraints.',
                    icon: Layers,
                  },
                  {
                    title: "Market Entry",
                    desc: "Leveraging Tier 1 Semiconductor partnerships to embed AltiCore HDL directly into next-gen silicon roadmaps.",
                    icon: Target,
                  },
                  {
                    title: "IP Moat",
                    desc: "Protected by 100+ foundational patents and proprietary gate-level synthesis algorithms that are functionally impossible to reverse-engineer.",
                    icon: ShieldCheck,
                  },
                  {
                    title: "High Switching Costs",
                    desc: 'Deep integration into client HDL and enterprise software stacks ensures long-term ACV retention and "Intel-Inside" brand dominance.',
                    icon: Lock,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex flex-col h-full hover:border-cyan-500/30 transition-all group font-sans"
                  >
                    <item.icon className="w-8 h-8 text-cyan-500 mb-4 group-hover:scale-110 transition-transform font-bold" />
                    <h4 className="text-white font-bold text-base mb-2 tracking-tight uppercase">
                      {item.title}
                    </h4>
                    <p className="text-md text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
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
                        <span className="px-3 py-1 bg-cyan-900/30 text-cyan-400 text-xs rounded-full border border-cyan-500/20 w-fit mb-2">
                          Q1 2026
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
                          Q2 2026
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
                          Q3 2026
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
                          Q4 2026
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
                    exit window in Q4 2026. Targeting strategic acquisition
                    optionality once mass-market milestones are definitively
                    validated.
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

            {/* --- SECTION 6: TEAM & TRACTION --- */}
            <div
              id="team-credibility"
              className="p-6 md:p-8 bg-slate-950 border border-green-900/20 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-8 font-mono uppercase tracking-widest">
                Team Credibility & Traction
              </h3>
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
                        Management has a collective track record of building and
                        exiting 11 companies to major industry players.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                    <div className="w-14 h-14 bg-blue-900/30 rounded-lg flex items-center justify-center shrink-0 border border-blue-700/30 text-mcu font-extrabold text-2xl">
                      100+
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">
                        Global Patents
                      </h4>
                      <p className="text-md text-slate-300 leading-relaxed font-sans">
                        Founder/CTO holds foundational AltiCore IP across logic
                        synthesis, evolutionary algorithms, and hardware
                        architecture.
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
                        date: "2021",
                        label: "Logic-First Discovery",
                        sub: "Internal breakthrough on gate-level synthesis.",
                      },
                      {
                        date: "2023",
                        label: "Seed Funding",
                        sub: "$750K raised (Deep Future / Angels).",
                      },
                      {
                        date: "2024",
                        label: "Beta SDK Launch",
                        sub: "Currently pilot-testing with 3 Industrial IoT partners.",
                      },
                    ].map((t, i) => (
                      <div
                        key={i}
                        className="flex gap-6 items-start relative font-mono font-bold uppercase tracking-widest"
                      >
                        {i < 2 && (
                          <div className="absolute left-[9px] top-8 w-px h-12 bg-slate-800"></div>
                        )}
                        <div className="w-[18px] h-[18px] rounded-full bg-cyan-500/20 border border-cyan-500 shrink-0 mt-1 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                        <div>
                          <p className="text-[14px] text-cyan-500 uppercase">
                            {t.date}
                          </p>
                          <p className="text-sm text-white tracking-tight font-sans">
                            {t.label}
                          </p>
                          <p className="text-md text-slate-300 font-sans font-normal normal-case">
                            {t.sub}
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
                    bio: "Foundational AltiCore Architect. Mathematician with 100+ Patents. 6 successful exits as a technical founder.",
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

            {/* --- SECTION 7: CAPITAL STRATEGY --- */}
            <div
              id="capital-strategy"
              className="p-6 md:p-8 bg-slate-950 border border-cyan-900/20 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-white border-l-4 border-cyan-500 pl-4 mb-8 font-mono uppercase tracking-widest">
                Capital Strategy & Series A Terms
              </h3>
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
                  <h4 className="text-lg text-white font-sans">Use of Funds</h4>
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

            {/* --- SECURED DUE DILIGENCE FOOTER --- */}
            <div className="flex flex-wrap gap-4 pt-8 font-sans">
              <button className="flex-1 min-w-[200px] border border-dashed border-slate-700 p-6 rounded-xl flex items-center justify-center gap-3 hover:bg-slate-800 transition-all text-slate-300 group">
                <FileText className="w-6 h-6 text-cyan-500" />
                <div className="text-left">
                  <p className="text-sm font-bold text-white">
                    Full Financial Model
                  </p>
                  <p className="text-[13px] text-slate-300 font-mono uppercase tracking-widest">
                    2025-2029 Projections
                  </p>
                </div>
              </button>
              <button className="flex-1 min-w-[200px] border border-dashed border-slate-700 p-6 rounded-xl flex items-center justify-center gap-3 hover:bg-slate-800 transition-all text-slate-300 group">
                <ShieldCheck className="w-6 h-6 text-cyan-500" />
                <div className="text-left">
                  <p className="text-sm font-bold text-white">Full IP Audit</p>
                  <p className="text-[13px] text-slate-300 font-mono uppercase tracking-widest">
                    Patent Schedule (100+)
                  </p>
                </div>
              </button>
              <button className="flex-1 min-w-[200px] border border-dashed border-slate-700 p-6 rounded-xl flex items-center justify-center gap-3 hover:bg-slate-800 transition-all text-slate-300 group">
                <BarChart className="w-6 h-6 text-cyan-500" />
                <div className="text-left">
                  <p className="text-sm font-bold text-white">
                    Detailed TCO Report
                  </p>
                  <p className="text-[13px] text-slate-300 font-mono uppercase tracking-widest">
                    Legacy vs AltiCore Logic-First
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
// --- END OF PROTECTED INVESTOR PORTAL ---

const InvestorPortal = ({
  onViewChange,
}: {
  onViewChange: (view: string) => void;
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // SHA-256 hash of "@inv26-12" - pre-computed for security
  const VALID_PASSWORD_HASH =
    "580eca242d6841a1dcb5e0eadfc39783c277ce7cd0bc64dedfb2c447aa40c2eb";

  const hashPassword = async (password: string): Promise<string> => {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
    return hashHex;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const hashedInput = await hashPassword(password);

      if (hashedInput === VALID_PASSWORD_HASH) {
        setIsLoggedIn(true);
      } else {
        setError("Invalid password. Access denied.");
        setPassword("");
      }
    } catch (err) {
      setError("Authentication error. Please try again.");
    }
  };

  if (isLoggedIn)
    return (
      <InvestorPortalContent
        onViewChange={(currentView) => onViewChange(currentView)}
      />
    );
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 relative overflow-hidden font-sans">
      <LogicBackground />
      <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700 p-6 sm:p-8 md:p-12 rounded-2xl shadow-2xl max-w-md w-full relative z-10 text-center">
        <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 border border-slate-700">
          <Lock className="w-8 h-8 text-cyan-400" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">
          Investor Portal
        </h2>
        <p className="text-slate-400 mb-8 text-sm leading-relaxed">
          Access the Data Room. View Benchmarks, Financial Roadmap, and
          Strategic IP Portfolio.
        </p>
        <form className="space-y-4 font-sans" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500 font-sans"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full bg-slate-950 border ${error ? "border-red-500" : "border-slate-700"} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 font-sans`}
            required
          />
          {error && <p className="text-red-400 text-sm text-left">{error}</p>}
          <Button type="submit" className="w-full text-sm">
            Secure Login
          </Button>
        </form>
        <div className="mt-6 pt-6 border-t border-slate-800">
          <button
            onClick={() => onViewChange("evochip")}
            className="text-slate-500 hover:text-white text-xs transition-colors font-mono tracking-tighter uppercase font-bold"
          >
            ← Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};

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
  const [selectedArticleId, setSelectedArticleId] = useState(null);
  if (currentView === "investor")
    return <InvestorPortal onViewChange={setCurrentView} />;
  console.log("Current View:", currentView);

  const isAltiCorePage = currentView.startsWith("alticore");
  let content;

  if (currentView === "insights") {
    let content;
    if (selectedArticleId) {
      const article = insightsData.find((a) => a.id === selectedArticleId);
      content = (
        <ArticleDetailView
          article={article}
          onBack={() => setSelectedArticleId(null)}
        />
      );
    } else {
      // @ts-ignore
      content = <InsightsPage onArticleClick={setSelectedArticleId} />;
    }
    // return (
    //   <div className="min-h-screen bg-slate-900 text-slate-200">
    //     <AltiNavbar
    //       onViewChange={setCurrentView}
    //       currentView={currentView}
    //       onInsightsClick={handleInsightsNav}
    //     />
    //     {content}
    //     <Footer onViewChange={setCurrentView} />
    //     <CookieConsentBanner />
    //   </div>
    // );

    return (
      <div className="min-h-screen bg-slate-900 text-slate-200">
        <EvoNavbar onViewChange={setCurrentView} />
        {content}
        <section className="py-12 bg-slate-950 border-t border-slate-800 text-center font-sans">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCurrentView("investor");
            }}
            className="text-cyan-400 text-sm font-mono flex items-center justify-center gap-2 uppercase"
          >
            <Lock className="w-3 h-3" /> Investor Portal
          </a>
        </section>
        <footer className="bg-slate-950 py-12 border-t border-slate-900">
          <div className="flex flex-col items-center gap-6">
            <Logo size="md" />
            <div className="flex items-center gap-4 text-xs font-mono uppercase">
              <Link
                href="/privacy"
                className="text-slate-500 hover:text-cyan-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-slate-700">|</span>
              <Link
                href="/terms"
                className="text-slate-500 hover:text-cyan-400 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
            <p className="text-slate-600 text-xs font-mono">
              &copy; 2026 EvoChip. All rights reserved.
            </p>
          </div>
        </footer>
        <CookieConsentBanner />
      </div>
    );
  }

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
            &copy; 2025 AltiCore (an EvoChipeee company).
          </p>
        </footer>
        <CookieConsentBanner />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200">
      <EvoNavbar onViewChange={setCurrentView} />
      <EvoHero onViewChange={setCurrentView} />
      <EvoHeroVideos />
      <EvoPodcast />
      <EvoTechnology />
      <EvoProducts onViewChange={setCurrentView} />
      <EvoMcuShowcase />
      <EvoSwShowcase />
      <EvoHdlShowcase />
      <EvoAbout />
      <EvoContactSection />
      <section className="py-12 bg-slate-950 border-t border-slate-800 text-center font-sans">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setCurrentView("investor");
          }}
          className="text-cyan-400 text-sm font-mono flex items-center justify-center gap-2 uppercase"
        >
          <Lock className="w-3 h-3" /> Investor Portal
        </a>
      </section>
      <footer className="bg-slate-950 py-12 border-t border-slate-900">
        <div className="flex flex-col items-center gap-6">
          <Logo size="md" />
          <div className="flex items-center gap-4 text-xs font-mono uppercase">
            <Link
              href="/privacy"
              className="text-slate-500 hover:text-cyan-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-slate-700">|</span>
            <Link
              href="/terms"
              className="text-slate-500 hover:text-cyan-400 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
          <p className="text-slate-600 text-xs font-mono">
            &copy; 2026 EvoChip. All rights reserved.
          </p>
        </div>
      </footer>
      <CookieConsentBanner />
    </div>
  );
};

export default App;
