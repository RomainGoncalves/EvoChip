import { ArrowLeft, ArrowRight, BookOpen, Calendar, User } from "lucide-react";
import { Button } from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";

// --- Insights Data Architecture ---
const insightsData = [
  {
    id: 1,
    title: "Deep Future VC invests in EvoChip",
    date: "Nov 10, 2024",
    author: "Pablos Holman",
    category: "Investment",
    excerpt:
      "Pablos Holman's Deep Future leads seed round to accelerate logic-first synthesis development for global AI infrastructure.",
    content: `### Breaking the Hardware Ceiling\n\nDeep Future VC has officially announced its lead position in EvoChip's latest funding round. The investment highlights a critical pivot in the venture capital landscape: moving away from marginal hardware optimizations and toward fundamental architectural resets.\n\n**The Core Problem:**\nNeural Networks are currently trapped in a cycle of diminishing returns. As models scale, the power required for matrix multiplication grows exponentially. Brute-forcing this with more silicon is no longer sustainable.\n\n**The EvoChip Solution:**\nBy replacing probabilistic weights with deterministic logic streams, EvoChip allows AI to run on the CPU's fastest primitive instructions. This isn't just a faster chip; it's a smarter way to compute.\n\n> "We aren't looking for the next incremental GPU improvement. We are looking for the technology that makes the GPU as we know it obsolete for inference. EvoChip is that technology." — Pablos Holman\n\n### Future Roadmap\n1. Finalization of the AltiCore-LogicMCU compiler.\n2. Expansion of the gate-level patent portfolio.\n3. Initial pilot deployments with industrial IoT leaders.`,
  },
  {
    id: 2,
    title: "AI at the Edge can’t wait for better chips",
    date: "May 31, 2025",
    author: "Alain Blancquart",
    category: "Edge Autonomy",
    excerpt:
      "Why the current 'better silicon' roadmap fails industrial IoT and how logic synthesis bypasses physical scaling limits.",
    content: `### The Latency Crisis\n\nIndustrial edge devices are failing under the weight of modern AI models. The current industry response—waiting for smaller nanometer processes—is a strategy of delay, not a solution.\n\n**The Constraints:**\n- **Power:** Edge nodes often operate on milliwatts.\n- **Thermal:** High-density compute generates unmanageable heat in small form factors.\n- **Cost:** Specialized AI co-processors double the Bill of Materials (BOM).\n\n### Bypassing Silicon Limits\nAltiCoreAI logic synthesis restructures models so they don't require specialized NPUs. By using synthesizable RTL, we can embed intelligence directly into the hardware description language of any MCU.\n\n\`\`\`c\n// Example: Traditional Inference vs Logic Stream\n// Traditional: requires matrix mult library and NPU\nrun_npu_inference(model_data);\n\n// AltiCore: Native logic execution\nif (logic_stream_bitmask & input_vector) { \n    execute_deterministic_path(); \n}\n\`\`\`\n\nThis shift allows a $1 microcontroller to perform tasks previously reserved for $20 AI chips.`,
  },
  {
    id: 3,
    title: "The efficiency race",
    date: "May 12, 2025",
    author: "Alain Blancquart",
    category: "Performance",
    excerpt:
      "Benchmarking the AltiCoreSW synthesis engine against industry standards: Algorithm vs. Brute Force.",
    content: `### Performance as a First-Class Citizen\n\nIn the AI race, "Good Enough" is no longer acceptable. The industry has hit the "Efficiency Wall," where adding more compute nodes results in linear performance gains but exponential power costs.\n\n**The Benchmarks:**\nOur recent tests on AltiCoreSW demonstrate a 10x-50x throughput increase on existing CUDA infrastructure. This is achieved not by overclocking, but by restructuring how data flows through the logic gates.\n\n### Why it Matters\n- **CapEx Avoidance:** Extend the life of existing GPU clusters by 3-5 years.\n- **Lower OpEx:** Drastic reduction in cooling and energy requirements per inference.\n- **Real-time execution:** Sub-microsecond latency for safety-critical systems.`,
  },
  {
    id: 4,
    title: "AltiCoreAI Launch",
    date: "Apr 29, 2025",
    author: "Alain Blancquart",
    category: "Corporate",
    excerpt:
      "Official reveal of the AltiCoreAI product ecosystem, spanning MCU firmware to synthesizable silicon blueprints.",
    content: `### A New Standard is Born\n\nToday, EvoChip officially unveils AltiCoreAI—a multi-tier ecosystem designed to solve the AI compute crisis. \n\n**The Three Pillars:**\n- **AltiCoreMCU:** Binary firmware for high-volume edge devices.\n- **AltiCoreSW:** A synthesis compiler for enterprise datacenter acceleration.\n- **AltiCoreHDL:** Synthesizable VHDL/Verilog for next-gen silicon foundries.\n\nThis launch marks the transition from proprietary R&D to commercial availability. We are moving from the lab to the production line.`,
  },
  {
    id: 5,
    title: "Green AI",
    date: "Sep 2, 2024",
    author: "Alain Blancquart",
    category: "Sustainability",
    excerpt:
      "Addressing the environmental cost of matrix-math and the path to zero-emission intelligence.",
    content: `### The Carbon Cost of Calculus\n\nModern AI is an environmental disaster. Datacenters are consuming vast amounts of water and electricity to perform billions of redundant matrix multiplications. \n\n**The Logical Path Forward:**\nLogic-first synthesis reduces the total number of operations required per inference by up to 1000x. \n\n**Impact:**\n- 90% reduction in rack-level power draw.\n- Elimination of specialized high-heat co-processors.\n- Sustainable scaling for the $1T AI market.`,
  },
  {
    id: 6,
    title: "Jerry Conrad joins the Board",
    date: "Aug 28, 2024",
    author: "Alain Blancquart",
    category: "Leadership",
    excerpt:
      "Strategic finance expert Jerry Conrad joins EvoChip to lead M&A positioning and Series A strategy.",
    content: `### Strengthening the Foundation\n\nWe are pleased to announce the appointment of Jerry Conrad to the EvoChip Board of Directors. Jerry brings 30+ years of institutional finance and M&A expertise.\n\nHis track record includes leading a high-value exit to Allstate and managing complex tech-enabled banking portfolios. Jerry will oversee our capital strategy as we move toward our $10M Series A raise.`,
  },
  {
    id: 7,
    title: "Can AI avoid hitting the wall?",
    date: "June 5, 2024",
    author: "Alain Blancquart",
    category: "Theory",
    excerpt:
      "An analysis of thermodynamic limits in neural network scaling and the necessity of deterministic logic.",
    content: `### The Thermodynamic Limit\n\nPhysics doesn't care about your scaling roadmap. We are reaching the limit of how much heat we can move off a silicon die. \n\n**The Black Box Problem:**\nNeural networks are non-deterministic, which leads to "computational thrashing"—performing thousands of operations that don't contribute to the final result.\n\n**The Solution:**\nDeterministic logic allows us to prune the compute path before a single electron moves. We only compute what is necessary.`,
  },
  {
    id: 8,
    title: "The inevitable limits of exponential growth",
    date: "June 5, 2024",
    author: "Alain Blancquart",
    category: "Economics",
    excerpt:
      "Why the 'GPU-for-everything' economic model is about to collapse and what replaces it.",
    content: `### The Economic Fallacy\n\nThe belief that we can simply buy more GPUs to solve the intelligence problem is an economic fallacy. \n\n**The Cost Wall:**\n- GPU prices are rising.\n- Power costs are rising.\n- Integration complexity is rising.\n\n**The Pivot:**\nIntelligence must become a commodity that runs on standard registers. The company that decouples performance from the GPU wins the market. AltiCoreAI is that decoupling.`,
  },
];

// --- INSIGHTS HUB COMPONENTS ---
const InsightsPage = ({ onArticleClick }) => (
  <section className="pt-32 pb-24 min-h-screen bg-slate-900">
    <div className="container mx-auto px-6">
      <SectionHeading subtitle="Media Hub" title="Insights & Intelligence" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {insightsData.map((article) => (
          <div
            key={article.id}
            className="bg-slate-800/40 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all cursor-pointer group flex flex-col h-full"
            onClick={() => onArticleClick(article.id)}
          >
            <div className="aspect-video relative overflow-hidden bg-slate-950">
              <img
                src={`https://placehold.co/600x400/0F172A/2dd4bf?text=${article.title.replace(
                  / /g,
                  "+"
                )}`}
                alt={article.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-cyan-500 text-slate-900 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">
                  {article.category}
                </span>
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex items-center gap-3 text-cyan-400 font-mono text-[10px] uppercase tracking-widest mb-3">
                <Calendar className="w-3 h-3" /> {article.date}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors leading-tight">
                {article.title}
              </h3>
              <div className="flex items-center gap-2 text-slate-500 text-xs mb-4">
                <User className="w-3 h-3" /> {article.author}
              </div>
              <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>
              <div className="mt-auto pt-6 flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-widest">
                Read More{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ArticleDetailView = ({ article, onBack }) => {
  if (!article) return null;

  // Simple renderer for formatting
  const renderContent = (content) => {
    return content.split("\n").map((line, i) => {
      if (line.startsWith("###")) {
        return (
          <h3
            key={i}
            className="text-2xl font-bold text-white mt-12 mb-6 tracking-tight"
          >
            {line.replace("###", "")}
          </h3>
        );
      }
      if (line.startsWith("**")) {
        return (
          <p key={i} className="text-slate-200 font-bold mb-4">
            {line.replace(/\*\*/g, "")}
          </p>
        );
      }
      if (line.startsWith("- ")) {
        return (
          <li
            key={i}
            className="text-slate-400 mb-2 list-none flex items-start gap-3"
          >
            <span className="text-cyan-500 font-bold">•</span>{" "}
            {line.replace("- ", "")}
          </li>
        );
      }
      if (line.startsWith("> ")) {
        return (
          <blockquote
            key={i}
            className="border-l-4 border-cyan-500 pl-6 py-2 my-8 italic text-slate-300 text-lg"
          >
            {line.replace("> ", "")}
          </blockquote>
        );
      }
      if (line.startsWith("```")) {
        return null; // Handle blocks below
      }
      if (line.trim() === "") return <div key={i} className="h-4" />;

      // Check if inside a code block
      const isCode =
        content.split("```").length > 1 &&
        i > content.split("\n").findIndex((l) => l.startsWith("```")) &&
        i < content.split("\n").findLastIndex((l) => l.startsWith("```"));
      if (isCode) {
        return (
          <div
            key={i}
            className="bg-slate-900 p-1 px-4 font-mono text-cyan-400 text-sm border-x border-slate-800"
          >
            {line}
          </div>
        );
      }

      return (
        <p key={i} className="text-slate-400 leading-relaxed mb-6 text-lg">
          {line}
        </p>
      );
    });
  };

  return (
    <article className="pt-32 pb-24 min-h-screen bg-slate-950 font-sans">
      <div className="container mx-auto px-6 max-w-3xl">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-cyan-500 text-xs font-bold uppercase tracking-widest mb-12 hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Insights
        </button>

        <div className="mb-12">
          <div className="flex items-center gap-4 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-4">
            <span>{article.category}</span>
            <span className="w-1 h-1 bg-slate-700 rounded-full" />
            <span>{article.date}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
            {article.title}
          </h1>
          <div className="flex items-center gap-3 pt-8 border-t border-slate-900">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
              <User className="w-5 h-5 text-slate-400" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">{article.author}</p>
              <p className="text-slate-500 text-[10px] uppercase tracking-widest font-mono">
                EvoChip Technical Editorial
              </p>
            </div>
          </div>
        </div>

        <div className="relative aspect-video rounded-3xl overflow-hidden mb-16 border border-slate-800 shadow-2xl">
          <img
            src={`https://placehold.co/1200x800/0F172A/2dd4bf?text=${article.title.replace(
              / /g,
              "+"
            )}`}
            alt={article.title}
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        <div className="prose prose-invert prose-cyan max-w-none">
          {renderContent(article.content)}
        </div>

        <div className="mt-20 pt-10 border-t border-slate-900">
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 text-center">
            <BookOpen className="w-10 h-10 text-cyan-500 mx-auto mb-4" />
            <h4 className="text-white font-bold mb-2">Enjoyed this Insight?</h4>
            <p className="text-slate-400 text-sm mb-6">
              Stay informed on the evolution of logic-first synthesis and edge
              autonomy.
            </p>
            <Button
              variant="devPrimary"
              className="mx-auto"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Request Enterprise Briefing
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export { InsightsPage, ArticleDetailView, insightsData };
