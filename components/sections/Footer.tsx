"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "@/components/brand";
import { CookieConsentBanner } from "@/components/ui";

export const Footer = () => {
  return (
    <>
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
    </>
  );
};
