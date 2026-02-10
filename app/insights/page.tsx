"use client";

import { useRouter } from "next/navigation";
import { InsightsPage } from "@/components/sections/Insights";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CookieConsentBanner } from "@/components/ui";

export default function InsightsRoute() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200">
      <Navbar onViewChange={() => router.push("/")} />
      <InsightsPage onArticleClick={(id) => router.push(`/insights/${id}`)} />
      <Footer />
      <CookieConsentBanner />
    </div>
  );
}
