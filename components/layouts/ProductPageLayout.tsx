"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { EvoContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

interface ProductPageLayoutProps {
  children: React.ReactNode;
}

export const ProductPageLayout = ({ children }: ProductPageLayoutProps) => {
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleViewChange = (view: string) => {
    // Navigate to home page
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar onViewChange={handleViewChange} />

      {children}

      <EvoContactSection />
      <Footer />
    </div>
  );
};
