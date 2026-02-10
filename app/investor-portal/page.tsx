"use client";

import React, { useState } from "react";
import { Lock } from "lucide-react";
import Link from "next/link";
import { Button, LogicBackground } from "@/components/ui";
import { InvestorPortalContent } from "@/components/investor/InvestorPortalContent";

export default function InvestorPortalPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
    } catch {
      setError("Authentication error. Please try again.");
    }
  };

  if (isLoggedIn) return <InvestorPortalContent />;

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
          <Link
            href="/"
            className="text-slate-500 hover:text-white text-xs transition-colors font-mono tracking-tighter uppercase font-bold"
          >
            ← Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
