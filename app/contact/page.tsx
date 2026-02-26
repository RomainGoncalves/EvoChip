"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MessageSquare, Zap, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button, LogicBackground, CompanyInfo } from "@/components/ui";

export default function ContactPage() {
  const router = useRouter();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const [submitSuccess, setSubmitSuccess] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans">
      <Navbar onViewChange={() => router.push("/")} />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-slate-900">
        <LogicBackground />
        <div className="container mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-cyan-400 text-sm font-mono mb-6 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
            GET IN TOUCH
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl">
            Let's Talk About{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
              What AltiCore Can Do For You.
            </span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
            Whether you're evaluating AltiCore for edge deployment, enterprise
            infrastructure, or custom silicon — our team is ready to walk you
            through the technical details and licensing options.
          </p>
        </div>
      </section>

      {/* Value props row */}
      <section className="bg-slate-950 border-y border-slate-800 py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: MessageSquare,
                title: "Technical Evaluation",
                desc: "Request a benchmark session or SDK trial for your target platform.",
              },
              {
                icon: Zap,
                title: "Partnership & Licensing",
                desc: "Explore IP licensing, OEM integration, and foundry collaboration.",
              },
              {
                icon: ShieldCheck,
                title: "Media & Investor Relations",
                desc: "Press inquiries, investment discussions, and corporate announcements.",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <item.icon className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold text-sm">{item.title}</p>
                  <p className="text-slate-400 text-sm mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content: contact info + form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start max-w-5xl mx-auto">

            {/* Left: contact details */}
            <div className="space-y-8">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
                  Contact Details
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Reach the EvoChip Team
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  We respond to all inquiries within 24–48 business hours. For
                  time-sensitive technical evaluations, mention your timeline in
                  the message.
                </p>
              </div>

              <CompanyInfo />

              <div className="p-4 bg-cyan-500/5 border border-cyan-500/20 rounded-xl">
                <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
                  Response Time
                </p>
                <p className="text-slate-300 text-sm">
                  Our team typically responds within{" "}
                  <span className="text-white font-semibold">24–48 hours</span>{" "}
                  during business days.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 md:p-8">
              {submitSuccess ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-cyan-400" />
                  </div>
                  <p className="text-white text-xl font-bold mb-2">
                    Message Sent!
                  </p>
                  <p className="text-slate-400 text-sm">
                    We'll get back to you within 24–48 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-lg font-bold text-white mb-6">
                    Send a Message
                  </h3>
                  <form
                    action="https://formspree.io/f/xaqbvzdn"
                    method="POST"
                    className="space-y-4"
                  >
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-widest text-slate-400 mb-1.5">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your name"
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-widest text-slate-400 mb-1.5">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          placeholder="Your company"
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-slate-400 mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="you@company.com"
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-slate-400 mb-1.5">
                        Area of Interest
                      </label>
                      <select
                        name="interest"
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                      >
                        <option value="">Select one...</option>
                        <option value="AltiCoreMCU">AltiCoreMCU — Edge / Microcontrollers</option>
                        <option value="AltiCoreSWP">AltiCoreSWP — Software / CPU</option>
                        <option value="AltiCoreHDL">AltiCoreHDL — FPGA / ASIC / Silicon</option>
                        <option value="Partnership">Partnership & Licensing</option>
                        <option value="Investment">Investment & Investor Relations</option>
                        <option value="Media">Media & Press</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-slate-400 mb-1.5">
                        Message
                      </label>
                      <textarea
                        name="message"
                        placeholder="Tell us about your use case or question..."
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" variant="primary" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
