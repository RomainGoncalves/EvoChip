"use client";

import React, { useState } from "react";
import {
  Mail,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { Button, SectionHeading, Card } from "@/components/ui";

export const EvoContactSection = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return (
    <section
      id="contact-evo"
      className="py-16 md:py-24 bg-slate-950 border-t border-slate-800 font-sans"
    >
      <div className="container mx-auto px-6">
        <SectionHeading
          subtitle="Corporate Inquiries"
          title="Connect with EvoChip Management"
          align="left"
        />
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-slate-300">
              For media or partnership opportunities, contact us directly.
            </p>
            <div className="space-y-4 text-slate-400">
              <div className="flex items-start gap-4">
                <MapPin className="text-cyan-500" />{" "}
                <span>32932 Pacific Coast Hwy, Dana Point, CA</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-cyan-500" /> <span>ab@evochip.ai</span>
              </div>
            </div>
          </div>
          <Card>
            {submitSuccess ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <p className="text-cyan-400 text-lg font-semibold">
                  Message Sent Successfully!
                </p>
                <p className="text-slate-400 text-sm mt-2">
                  We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form
                action="https://formspree.io/f/xaqbvzdn"
                method="POST"
                className="space-y-4"
              >
                {/* Formspree Configuration */}
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

                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full bg-slate-900 border border-slate-700 rounded px-4 py-3 text-sm"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full bg-slate-900 border border-slate-700 rounded px-4 py-3 text-sm"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  className="w-full bg-slate-900 border border-slate-700 rounded px-4 py-3 text-sm"
                  rows={4}
                  required
                ></textarea>
                <Button type="submit" variant="primary" className="w-full">
                  Submit
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};
