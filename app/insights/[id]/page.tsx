"use client";

import { useRouter, useParams } from "next/navigation";
import { ArticleDetailView, insightsData } from "@/components/sections/Insights";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CookieConsentBanner } from "@/components/ui";

export default function ArticlePage() {
  const router = useRouter();
  const params = useParams();
  const id = Number(params.id);
  const article = insightsData.find((a) => a.id === id);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar onViewChange={() => router.push("/")} />
      <ArticleDetailView
        article={article}
        onBack={() => router.push("/insights")}
      />
      <Footer />
      <CookieConsentBanner />
    </div>
  );
}
