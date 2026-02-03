"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function PrivacyPolicy() {
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

        <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-slate-400 text-sm mb-8">
          Last Updated: February 3, 2026
        </p>

        <div className="space-y-8 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              1. Introduction
            </h2>
            <p>
              EvoChip ("we," "our," or "us") respects your privacy and is
              committed to protecting your personal data. This privacy policy
              explains how we handle information when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. Information We Collect
            </h2>
            <p className="mb-4">
              <strong className="text-white">Browser Storage:</strong> We use
              browser local storage to remember your preferences and improve
              your experience. This includes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Privacy notice acknowledgment status</li>
              <li>Session preferences for site functionality</li>
            </ul>
            <p className="mt-4">
              <strong className="text-white">No Cookies:</strong> We do not use
              cookies on this website.
            </p>
            <p className="mt-4">
              <strong className="text-white">No Tracking:</strong> We do not
              use analytics, tracking pixels, or third-party tracking services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. How We Use Your Information
            </h2>
            <p>
              The data stored locally in your browser is used solely to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>Remember your privacy notice acknowledgment</li>
              <li>Provide access to restricted areas (Investor Portal)</li>
              <li>Improve your browsing experience</li>
            </ul>
            <p className="mt-4">
              This data never leaves your device and is not transmitted to our
              servers or any third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Data Sharing and Third Parties
            </h2>
            <p>
              We do not share, sell, rent, or trade your information with third
              parties. We do not use third-party services that collect data
              about our visitors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. Your Rights
            </h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Clear your browser's local storage at any time to remove all
                stored data
              </li>
              <li>Use the website without accepting our privacy notice</li>
              <li>
                Contact us with questions about our privacy practices at{" "}
                <a
                  href="mailto:privacy@evochip.com"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  privacy@evochip.com
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              6. Data Security
            </h2>
            <p>
              Since we only store data locally in your browser and do not
              transmit personal information to our servers, your data remains
              under your control. We use industry-standard security practices
              for our website infrastructure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              7. Children's Privacy
            </h2>
            <p>
              Our website is not intended for children under 13 years of age. We
              do not knowingly collect personal information from children under
              13.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this privacy policy from time to time. We will
              notify you of any changes by posting the new privacy policy on
              this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              9. Contact Us
            </h2>
            <p>
              If you have questions or concerns about this privacy policy,
              please contact us at:
            </p>
            <p className="mt-4">
              <strong className="text-white">EvoChip</strong>
              <br />
              Email:{" "}
              <a
                href="mailto:privacy@evochip.com"
                className="text-cyan-400 hover:text-cyan-300"
              >
                privacy@evochip.com
              </a>
            </p>
          </section>

          <section className="border-t border-slate-800 pt-8 mt-8">
            <p className="text-sm text-slate-500 italic">
              <strong>Disclaimer:</strong> This privacy policy is provided as a
              template and should be reviewed by a qualified attorney to ensure
              compliance with applicable laws in your jurisdiction, including
              GDPR, CCPA, and other privacy regulations.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
