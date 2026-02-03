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

        <h1 className="text-4xl font-bold text-white mb-4">
          Terms of Service
        </h1>
        <p className="text-slate-400 text-sm mb-8">
          Last Updated: February 3, 2026
        </p>

        <div className="space-y-8 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using the EvoChip website (the "Service"), you
              accept and agree to be bound by these Terms of Service ("Terms").
              If you do not agree to these Terms, please do not use the
              Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. Description of Service
            </h2>
            <p>
              EvoChip provides information about our semiconductor products,
              including AltiCoreMCU, AltiCoreSWP, and AltiCoreHDL. The Service
              includes access to general information, technical specifications,
              and an investor portal for authorized users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. Use of Service
            </h2>
            <p className="mb-4">You agree to use the Service only for lawful purposes. You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Attempt to gain unauthorized access to any portion of the
                Service
              </li>
              <li>
                Use the Service in any way that could damage, disable, or
                impair the Service
              </li>
              <li>
                Use any automated system to access the Service in a manner that
                sends more requests than a human can reasonably produce
              </li>
              <li>
                Attempt to interfere with the proper working of the Service
              </li>
              <li>
                Copy, modify, or distribute content from the Service without
                authorization
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Investor Portal
            </h2>
            <p>
              Access to the Investor Portal is restricted to authorized users
              only. By accessing the Investor Portal, you represent that you are
              authorized to view the confidential information contained therein.
              You agree to maintain the confidentiality of any information
              accessed through the Investor Portal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. Intellectual Property
            </h2>
            <p>
              All content on the Service, including text, graphics, logos,
              images, and software, is the property of EvoChip or its licensors
              and is protected by copyright, trademark, and other intellectual
              property laws. You may not reproduce, distribute, or create
              derivative works from any content without our express written
              permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              6. Disclaimers
            </h2>
            <p className="mb-4">
              <strong className="text-white">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
                WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
              </strong>
            </p>
            <p>
              We do not warrant that the Service will be uninterrupted, secure,
              or error-free. We make no warranties about the accuracy,
              reliability, or completeness of any content on the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              7. Limitation of Liability
            </h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, EVOCHIP SHALL NOT BE
              LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
              PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER
              INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, OR
              GOODWILL ARISING OUT OF YOUR USE OF THE SERVICE.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              8. Product Information
            </h2>
            <p>
              Technical specifications, performance claims, and product
              information provided on the Service are subject to change without
              notice. While we strive for accuracy, we do not guarantee that all
              product information is complete, accurate, or current. Product
              availability may vary by region.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              9. Forward-Looking Statements
            </h2>
            <p>
              The Service may contain forward-looking statements about our
              products, technology, and business. These statements are subject
              to risks and uncertainties, and actual results may differ
              materially. We undertake no obligation to update forward-looking
              statements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              10. Modifications to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms at any time. We will
              notify you of any changes by posting the new Terms on this page
              and updating the "Last Updated" date. Your continued use of the
              Service after such modifications constitutes your acceptance of
              the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              11. Termination
            </h2>
            <p>
              We may terminate or suspend your access to the Service
              immediately, without prior notice, for any reason, including
              breach of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              12. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of [Your Jurisdiction], without regard to its conflict of
              law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              13. Contact Information
            </h2>
            <p>
              If you have questions about these Terms, please contact us at:
            </p>
            <p className="mt-4">
              <strong className="text-white">EvoChip</strong>
              <br />
              Email:{" "}
              <a
                href="mailto:legal@evochip.com"
                className="text-cyan-400 hover:text-cyan-300"
              >
                legal@evochip.com
              </a>
            </p>
          </section>

          <section className="border-t border-slate-800 pt-8 mt-8">
            <p className="text-sm text-slate-500 italic">
              <strong>Disclaimer:</strong> These Terms of Service are provided
              as a template and should be reviewed and customized by a qualified
              attorney to ensure they adequately protect your business and
              comply with applicable laws in your jurisdiction.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
