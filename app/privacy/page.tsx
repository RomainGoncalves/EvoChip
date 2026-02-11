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
            <p>
              EvoChip Corp. (&ldquo;Evochip,&rdquo; &ldquo;we,&rdquo;
              &ldquo;our,&rdquo; and/or &ldquo;us&rdquo;) values the privacy of
              individuals who use our website and related services
              (collectively, our &ldquo;Services&rdquo;). This privacy policy
              (the &ldquo;Privacy Policy&rdquo;) explains how we collect, use,
              and share information from users of our Services
              (&ldquo;Users&rdquo;). By using our Services, you agree to the
              collection, use, disclosure, and procedures this Privacy Policy
              describes. Beyond the Privacy Policy, your use of our Services is
              also subject to our Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Information We Collect
            </h2>
            <p className="mb-6">
              We may collect a variety of information from or about you or your
              devices from various sources, as described below.
            </p>

            <h3 className="text-lg font-semibold text-white mb-3">
              Information You Provide to Us
            </h3>
            <p className="mb-4">
              <strong className="text-white">Communications.</strong> If you
              contact us via the contact form, we will receive additional
              information about you. For example, we will receive your name,
              email address, phone number, the contents of a message or
              attachments that you may send to us, and other information you
              choose to provide.
            </p>
            <p className="mb-6">
              <strong className="text-white">Careers.</strong> If you apply for
              a job with us, you may submit your contact information and your
              resume to{" "}
              <a
                href="mailto:ab@evochip.ai"
                className="text-cyan-400 hover:text-cyan-300"
              >
                ab@evochip.ai
              </a>
              . We will collect the information you choose to provide on your
              resume.
            </p>

            <h3 className="text-lg font-semibold text-white mb-3">
              Information We Collect When You Use Our Services
            </h3>
            <p className="mb-4">
              <strong className="text-white">Usage Information.</strong> To help
              us understand your interest in our company, technology and
              products, we receive information about your interactions with our
              website, like the pages or other content you view and the dates
              and times of your visits.
            </p>
            <p>
              <strong className="text-white">
                Information from Cookies and Similar Technologies.
              </strong>{" "}
              We or our third-party partners collect information using cookies,
              pixel tags, or similar technologies. Our third-party partners,
              such as analytics and advertising partners, may use these
              technologies to collect information about your online activities
              over time.
            </p>
            <p className="mt-4 text-slate-400 italic">
              Please note that if you delete or choose not to accept cookies
              from our website, you may not be able to utilize the features of
              the website to their fullest potential.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              How We Use the Information We Collect
            </h2>
            <p className="mb-4">We use the information we collect:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                To provide, maintain, improve, and enhance our technology,
                products and services
              </li>
              <li>
                To understand and analyze how you use our technology, products
                and services
              </li>
              <li>
                To communicate with you, provide you with updates, information,
                respond to comments and questions, and otherwise provide
                customer support
              </li>
              <li>
                To find and prevent fraud, and respond to trust and safety
                issues that may occur
              </li>
              <li>
                For compliance purposes, including enforcing our TOS or other
                legal rights, or as may be required by applicable laws and
                regulations or requested by any judicial process or governmental
                agency
              </li>
              <li>
                For other purposes for which we provide specific notice at the
                time the information is collected
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              How We Share the Information We Collect
            </h2>
            <p className="mb-4">
              <strong className="text-white">Affiliates.</strong> We may share
              any information we receive with our affiliates for any of the
              purposes described in this Privacy Policy.
            </p>
            <p className="mb-4">
              <strong className="text-white">
                Vendors and Service Providers.
              </strong>{" "}
              We may share any information we receive with vendors and service
              providers retained in connection with the provision of our
              Services.
            </p>
            <p className="mb-4">
              <strong className="text-white">Analytics Partners.</strong> We use
              analytics services such as Google Analytics to collect and process
              certain analytics data. You can learn more about Google&apos;s
              practices by visiting{" "}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                className="text-cyan-400 hover:text-cyan-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://policies.google.com/technologies/partner-sites
              </a>
              .
            </p>
            <p className="mb-4">
              <strong className="text-white">
                As Required By Law and Similar Disclosures.
              </strong>{" "}
              We may access, preserve, and disclose your information if we
              believe doing so is required or appropriate to: (a) comply with
              law enforcement requests and legal process, such as a court order
              or subpoena; (b) respond to your requests; or (c) protect your,
              our, or others&apos; rights, property, or safety. For the
              avoidance of doubt, the disclosure of your information may occur
              if you post any objectionable content on or through the Services.
            </p>
            <p className="mb-4">
              <strong className="text-white">
                Merger, Sale, or Other Asset Transfers.
              </strong>{" "}
              We may transfer your information to service providers, advisors,
              potential transactional partners, or other third parties in
              connection with the consideration, negotiation, or completion of a
              corporate transaction in which we are acquired by or merged with
              another company or we sell, liquidate, or transfer all or a
              portion of our assets. The use of your information following any
              of these events will be governed by the provisions of this Privacy
              Policy in effect at the time the applicable information was
              collected.
            </p>
            <p>
              <strong className="text-white">Consent.</strong> We may also
              disclose your information with your permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Your Choices
            </h2>
            <p>
              <strong className="text-white">Marketing Communications.</strong>{" "}
              You can unsubscribe from our promotional emails via the link
              provided in the emails. Even if you opt out of receiving
              promotional messages from us, you will continue to receive
              administrative messages from us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Third Parties
            </h2>
            <p>
              Our Services may contain links to other websites, products, or
              services that we do not own or operate. We are not responsible for
              the privacy practices of these third parties. Please be aware that
              this Privacy Policy does not apply to your activities on these
              third-party services or any information you disclose to these
              third parties. We encourage you to read their privacy policies
              before providing any information to them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Security</h2>
            <p>
              We make reasonable efforts to protect your information by using
              physical and electronic safeguards designed to improve the
              security of the information we maintain. However, as no electronic
              transmission or storage of information can be entirely secure, we
              can make no guarantees as to the security or privacy of your
              information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Children&apos;s Privacy
            </h2>
            <p>
              We do not knowingly collect, maintain, or use personal information
              from children under 13 years of age, and no part of our Services
              is directed to children. If you learn that a child has provided us
              with personal information in violation of this Privacy Policy,
              then you may alert us at{" "}
              <a
                href="mailto:ab@evochip.ai"
                className="text-cyan-400 hover:text-cyan-300"
              >
                ab@evochip.ai
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              International Visitors
            </h2>
            <p>
              Our Services are hosted in the United States and intended for
              visitors located within the United States. If you choose to use
              the Services from the European Union or other regions of the world
              with laws governing data collection and use that may differ from
              U.S. law, then please note that you are transferring your personal
              information outside of those regions to the United States for
              storage and processing. Also, we may transfer your data from the
              U.S. to other countries or regions in connection with storage and
              processing of data, fulfilling your requests, and operating the
              Services. By providing any information, including personal
              information, on or to the Services, you consent to such transfer,
              storage, and processing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Changes to this Privacy Policy
            </h2>
            <p>
              We will post any adjustments to the Privacy Policy on this page,
              and the revised version will be effective when it is posted. If we
              materially change the ways in which we use or share personal
              information previously collected from you through the Services, we
              will notify you through the Services, by email, or other
              communication.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Contact Information
            </h2>
            <p>
              If you have any questions, comments, or concerns about our
              processing activities, please email us at{" "}
              <a
                href="mailto:contact@evochip.ai"
                className="text-cyan-400 hover:text-cyan-300"
              >
                contact@evochip.ai
              </a>
              .
            </p>
            <p className="mt-4">
              <strong className="text-white">EvoChip Corp.</strong>
              <br />
              32932 Pacific Coast Highway, Suite 14
              <br />
              Dana Point, CA 92629
              <br />
              (949) 828-6363
              <br />
              <a
                href="mailto:ab@evochip.ai"
                className="text-cyan-400 hover:text-cyan-300"
              >
                ab@evochip.ai
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
