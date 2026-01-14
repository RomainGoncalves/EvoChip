import { ArrowLeft, ArrowRight, BookOpen, Calendar, User } from "lucide-react";
import { Button } from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";
import insightsData from "@/data/insights.json";

// --- Type Definitions ---
type Article = {
  id: number;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  content: string;
};

type InsightsPageProps = {
  onArticleClick: (articleId: number | null) => void;
};

type ArticleDetailViewProps = {
  article: Article | null | undefined;
  onBack: () => void;
};

// --- INSIGHTS HUB COMPONENTS ---
const InsightsPage = ({ onArticleClick }: InsightsPageProps) => (
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
                src={`/${article.image}`}
                alt={article.title}
                className="w-full h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity"
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

const ArticleDetailView = ({ article, onBack }: ArticleDetailViewProps) => {
  if (!article) return null;

  // Simple renderer for formatting
  const renderContent = (content: string) => {
    return content.split("\n").map((line, i) => {
      if (line.startsWith("####")) {
        return (
          <h3
            key={i}
            className="text-xl font-bold text-white mt-12 mb-6 tracking-tight"
          >
            {line.replace("####", "")}
          </h3>
        );
      }
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
        <p key={i} className="text-slate-400 leading-relaxed  text-lg">
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
              {/* <User className="w-5 h-5 text-slate-400" /> */}
              <img
                src={article.authorAvatar}
                className="rounded-full text-slate-400"
              />
            </div>
            <div>
              <p className="text-white font-bold text-sm">{article.author}</p>
              <p className="text-slate-300 text-[10px] uppercase tracking-widest font-mono">
                {article.authorTitle}
              </p>
            </div>
          </div>
        </div>

        <div className="relative aspect-video rounded-3xl overflow-hidden mb-16 border border-slate-800 shadow-2xl">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-contain opacity-80"
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
