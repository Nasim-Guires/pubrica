"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

export default function ScientificMedicalCommunication() {
  // SEO JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Scientific Medical Communication",
    provider: {
      "@type": "Organization",
      name: "Pubrica",
    },
    description:
      "Scientific Medical Communication at Pubrica bridges the gap between complex medical research and its effective dissemination, offering comprehensive services in manuscript writing, editing, and publication support.",
    serviceType: "Medical Communication & Research Dissemination",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Scientific Medical Communication Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Medical Writing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Publication Support",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Regulatory Documents & Patient-Centric Communication",
          },
        },
      ],
    },
  };

  return (
    <main className="w-full bg-white text-slate-800 font-sans">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Banner Section */}
      <section className="w-full bg-gradient-to-b from-[#101b1b] via-[#152828] to-[#122323] text-white py-14 px-4 sm:px-6 md:px-8">
        <div className="max-w-5xl mx-auto text-center border border-slate-600/60 rounded-sm p-6 md:p-10 bg-slate-900/30 backdrop-blur-sm">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Scientific Medical Communication
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-slate-200 leading-relaxed font-normal max-w-4xl mx-auto">
            Scientific Medical Communication at Pubrica bridges the gap between
            complex medical research and its effective dissemination, offering
            comprehensive services in manuscript writing, editing, and
            publication support to ensure clarity and impact in scientific
            discourse.
          </p>
        </div>
      </section>

      {/* Main Content Section 1 */}
      <section className="py-12 md:py-16 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-[#0d3b44] leading-snug">
              Enhance Research Impact with Pubrica’s Scientific Medical
              Communication, Delivering Clear Publications, Regulatory-Compliant
              Documents, and Engaging Educational Content for Global Scientific
              Reach and Credibility.
            </h2>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              At Pubrica, we bridge the gap between complex scientific research
              and clear, impactful communication. Our scientific{" "}
              <Link
                href="/services/scientific-communication"
                className="text-sky-600 hover:underline font-medium"
              >
                medical communication services
              </Link>{" "}
              are designed to help researchers, clinicians, and pharmaceutical
              companies effectively share their findings with scientific
              communities, healthcare professionals, regulatory authorities, and
              patients. With a strong focus on accuracy, compliance, and
              readability, we transform technical data into compelling,
              publication-ready content.
            </p>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              From{" "}
              <Link
                href="/services/medical-writing"
                className="text-sky-600 hover:underline font-medium"
              >
                medical writing
              </Link>{" "}
              to{" "}
              <Link
                href="/services/publication-support"
                className="text-sky-600 hover:underline font-medium"
              >
                publication support
              </Link>
              , from regulatory documents to patient-centric communication, we
              deliver content that drives understanding, engagement, and impact
              across the global scientific community.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-8 pt-2">
              <GetFreeQuoteButton />
              <Link
                href="/uploads/scientific-communication/Scientific-Communication-Services_compressed.pdf"
                className="bg-red-600 hover:bg-white text-white hover:text-black px-5 py-2.5 rounded-md font-semibold transition-colors cursor-pointer inline-flex items-center justify-center select-none"
              >
                View Brochure
              </Link>
            </div>
          </div>

          {/* Side Visual/Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/3] overflow-hidden">
              <Image
                src="/images/research-services/experimental-design/Ensure-the-Success-of-Your-Research-with-Pubricas-Experimental-Design-Services.webp"
                alt="Medical scientists discussing research results on laptop"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section 2: Why It Matters */}
      <section className="py-12 md:py-16 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto border-t border-gray-100">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0d3b44] mb-8">
          Why Scientific Medical Communication Matters
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Overlapping Image Container */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md h-[300px] md:h-[340px]">
              {/* Back Card Image */}
              <div className="absolute top-0 left-0 w-3/4 h-2/3 rounded-xl overflow-hidden shadow-md z-10 border border-gray-200">
                <Image
                  src="/images/scientific-communication/Why-Scientific-Medical-Communication-Matters.webp"
                  alt="Compliance and regulation guidelines on laptop screen"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-3/4 h-2/3 rounded-xl overflow-hidden shadow-xl z-20 border-2 border-white hidden" aria-hidden="true" />
            </div>
          </div>

          {/* Bulleted Content */}
          <div className="lg:col-span-7 space-y-4">
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Clear, transparent, and scientifically sound communication is
              vital in today’s evidence-driven healthcare ecosystem. Whether it
              is disseminating research outcomes, creating patient education
              materials, or developing regulatory documents, effective
              communication ensures:
            </p>

            <ul className="space-y-3 pt-2 text-sm md:text-base text-gray-800">
              <li className="flex items-start gap-2">
                <span className="text-slate-900 font-bold">•</span>
                <span>Accurate presentation of data and outcomes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-900 font-bold">•</span>
                <span>
                  Enhanced visibility in peer-reviewed journals and conferences
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-900 font-bold">•</span>
                <span>
                  Regulatory compliance with global guidelines (
                  <Link
                    href="https://www.icmje.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:underline font-medium"
                  >
                    ICMJE
                  </Link>
                  , GPP,{" "}
                  <Link
                    href="https://www.consort-statement.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:underline font-medium"
                  >
                    CONSORT
                  </Link>
                  , etc)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-900 font-bold">•</span>
                <span>
                  Improved healthcare professional and patient engagement
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-900 font-bold">•</span>
                <span>Stronger brand and research credibility</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
