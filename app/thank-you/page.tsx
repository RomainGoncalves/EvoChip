"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui";

export default function ThankYou() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 font-sans">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700 p-8 md:p-12 rounded-2xl shadow-2xl">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/50">
            <CheckCircle2 className="w-12 h-12 text-white" />
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Message Sent Successfully!
          </h1>

          {/* Subheading */}
          <p className="text-slate-300 text-lg mb-8">
            Thank you for reaching out to EvoChip. We've received your message
            and will get back to you shortly.
          </p>

          {/* Details */}
          <div className="bg-slate-950 border border-slate-800 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-center gap-3 text-slate-400">
              <Mail className="w-5 h-5 text-cyan-400" />
              <p className="text-sm">
                You should receive a confirmation email at the address you provided.
              </p>
            </div>
          </div>

          {/* Expected Response Time */}
          <p className="text-slate-400 text-sm mb-8">
            Our team typically responds within 24-48 hours during business days.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button variant="primary" className="w-full sm:w-auto">
                Return to Home
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Additional Contact Info */}
          <div className="mt-8 pt-8 border-t border-slate-800">
            <p className="text-slate-500 text-xs mb-2">Need immediate assistance?</p>
            <a
              href="mailto:ab@evochip.ai"
              className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
            >
              ab@evochip.ai
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
