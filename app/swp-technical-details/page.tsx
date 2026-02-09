"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { EvoContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { SwShowcase } from "@/components/sections/SwShowcase";

export default function SwpTechnicalDetailsPage() {
  const router = useRouter();

  const handleViewChange = (view: string) => {
    // Navigate to home page with the view
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar onViewChange={handleViewChange} />

      <SwShowcase />

      <EvoContactSection />
      <Footer />
    </div>
  );
}
