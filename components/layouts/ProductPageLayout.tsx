"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { EvoContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

interface ProductPageLayoutProps {
  children: React.ReactNode;
}

export const ProductPageLayout = ({ children }: ProductPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />

      {children}

      <EvoContactSection />
      <Footer />
    </div>
  );
};
