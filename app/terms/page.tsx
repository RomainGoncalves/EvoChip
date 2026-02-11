"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function TermsOfService() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 py-12 px-4 font-sans">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => router.back()}
          className="text-cyan-400 hover:text-cyan-300 mb-8 flex items-center gap-2 text-sm"
        >
          ← Back
        </button>

        <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
        <p className="text-slate-400 text-sm mb-8">
          Last Updated: February 3, 2026
        </p>

        <div className="space-y-8 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Introduction
            </h2>
            <p>
              EvoChip Corporation welcomes you to www.evochip.ai. The following
              terms create a binding agreement governing your site usage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Eligibility
            </h2>
            <p>
              Users must be at least 18 years old. Those representing
              organizations warrant they have authority to bind their entity to
              these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Modifications to Terms and Site
            </h2>
            <p>
              EvoChip may update these Terms periodically, with changes noted by
              updating the &ldquo;Last Updated&rdquo; date. Continued site use
              after changes indicates acceptance. The company reserves the right
              to modify or discontinue site features without notice and
              won&apos;t be liable for resulting consequences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Limited License and Restrictions
            </h2>
            <p>
              EvoChip grants a limited, revocable license for non-commercial
              site access, including exploring products and applying for jobs.
              Users must comply with applicable laws and cannot duplicate
              content, use automated tools, rent access, or threaten site
              integrity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Intellectual Property
            </h2>
            <p>
              EvoChip Corporation owns and operates the Site. We retain all
              rights to the Site, Site Content, and associated Marks.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Privacy Policy
            </h2>
            <p>
              Users should consult the separate EvoChip Privacy Policy for
              information about personal data collection and use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Third-Party Links
            </h2>
            <p>
              The site may contain external links. EvoChip bears no
              responsibility for third-party offerings and users should review
              external site policies independently.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              User Feedback
            </h2>
            <p>
              EvoChip may use submitted feedback to improve services. Providing
              feedback grants the company usage rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Liability Disclaimer
            </h2>
            <p>
              Your use of the Site is at your own risk. EvoChip disclaims all
              warranties related to the Site and Site Content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Governing Law
            </h2>
            <p>
              These terms are governed by Delaware law with jurisdiction in
              California state and federal courts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Contact Information
            </h2>
            <p>
              If you have questions about these Terms, please contact us at:
            </p>
            <p className="mt-4">
              <strong className="text-white">EvoChip Corporation</strong>
              <br />
              Email:{" "}
              <a
                href="mailto:contact@evochip.ai"
                className="text-cyan-400 hover:text-cyan-300"
              >
                contact@evochip.ai
              </a>
              <br />
              32932 Pacific Coast Highway, Suite 14
              <br />
              Dana Point, CA 92629
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
