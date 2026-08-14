"use client";

import React from "react";
import Image from "next/image";

const PAGE_IMAGES =
  "/images/publication-support/journal-manuscript-formatting-services";

export default function ManuscriptFormattingService() {
  return (
    <div className="w-full bg-[#f8fafc] font-sans text-gray-800 antialiased">
      {/* ============================================================ */}
      {/* 1. TOP HERO BANNER                                           */}
      {/* ============================================================ */}
      <section className="w-full bg-gradient-to-b from-[#092b23] to-[#0d3b31] text-white py-12 px-4">
        <div className="max-w-5xl mx-auto border border-[#3b7063] p-8 md:p-10 text-center rounded-xs shadow-lg">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-3">
            Scientific and Academic Manuscript Formatting Service
          </h1>
          <p className="text-xs md:text-sm text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Get your manuscript professionally formatted to meet your target
            journal&apos;s guidelines — in 2 days. We take care of every detail
            so you can save hours and submit with confidence.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. MAIN DESCRIPTION & FEATURE LIST                            */}
      {/* ============================================================ */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="space-y-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0c3830] leading-snug">
            Scientific and Academic Manuscript Formatting Service: Submit Your
            Research Manuscript with Precision-Aligned Journal Formatting and
            Scholarly Accuracy
          </h2>
          <h3 className="text-sm md:text-base font-bold text-gray-800">
            Expert Preparation Before Your Manuscript Submission
          </h3>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
            Formatting a manuscript to a journal&apos;s guidelines and technical
            requirements can be an important but often time-consuming process
            for publishing in high-impact, peer-reviewed journals.
            Inconsistencies in formatting, references, figures, and structure
            can cause delays or rejection.
          </p>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
            Pubrica&apos;s Manuscript Editing and Formatting helps you avoid
            these issues by providing technically accurate and formatted
            documents to submit to your target journal. Our formatting team
            ensures journal guidelines compliance, enabling researchers to focus
            on their scientific message.
          </p>
        </div>

        {/* Content & Illustration Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Bullet Points */}
          <div className="lg:col-span-7 space-y-3">
            <ul className="space-y-2 text-xs md:text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-[#dc2626] mr-2 text-base font-bold leading-none">
                  •
                </span>
                <span>
                  Following journal-specific formatting (fonts, spacing,
                  margins, sectioning)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#dc2626] mr-2 text-base font-bold leading-none">
                  •
                </span>
                <span>
                  <a
                    href="#"
                    className="text-[#2563eb] hover:underline font-medium"
                  >
                    Citation and reference formatting
                  </a>{" "}
                  (Vancouver, APA, MLA, AMA, etc)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#dc2626] mr-2 text-base font-bold leading-none">
                  •
                </span>
                <span>
                  Figures and tables formatted to the journal&apos;s dimensions
                  and resolution
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#dc2626] mr-2 text-base font-bold leading-none">
                  •
                </span>
                <span>
                  Title page, abstract, and keywords formatted for submission
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#dc2626] mr-2 text-base font-bold leading-none">
                  •
                </span>
                <span>
                  Numbering of all sections, figures, and equations based on the
                  outlined
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#dc2626] mr-2 text-base font-bold leading-none">
                  •
                </span>
                <span>
                  Cross-checking of in-text{" "}
                  <a
                    href="#"
                    className="text-[#2563eb] hover:underline font-medium"
                  >
                    citations
                  </a>{" "}
                  matches the reference list
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#dc2626] mr-2 text-base font-bold leading-none">
                  •
                </span>
                <span>
                  Formatting of supplementary files (appendices, data sheets,
                  declarations)
                </span>
              </li>
            </ul>

            <p className="text-xs md:text-sm text-gray-600 leading-relaxed pt-2">
              Pubrica assures that your manuscript will be technically aligned
              with the required journal template and style, reducing avoidable
              errors and increasing submission success. Our team helps create a
              seamless transition from scientific writing to a formatted
              submission.
            </p>

            {/* Call To Action Button */}
            <div className="pt-4">
              <button
                type="button"
                className="bg-[#b91c1c] hover:bg-[#991b1b] text-white text-xs md:text-sm font-semibold px-6 py-2.5 rounded-full shadow-sm transition-colors cursor-pointer"
              >
                Upload Your Manuscript
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm h-72 sm:h-80">
              <Image
                src={`${PAGE_IMAGES}/poster-presentation-.webp`}
                alt="Scientific and Academic Manuscript Formatting Service"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. COMPLIANCE & GUIDELINE STANDARDS CARDS                    */}
      {/* ============================================================ */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 pb-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0c3830] mb-2">
            Our Compliance and Guideline Standards
          </h2>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed max-w-4xl">
            At Pubrica, we ensure that every manuscript we format meets
            international, institutional, and journal-specific guidelines,
            guaranteeing a polished and submission-ready document.
          </p>
        </div>

        {/* 4 Standards Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: CONSORT */}
          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-2xs flex flex-col items-center text-center justify-between hover:shadow-md transition-shadow">
            <div className="h-20 flex items-center justify-center mb-4">
              <Image
                src="/images/publication-support/Consort-Logo.webp"
                alt="CONSORT"
                width={160}
                height={64}
                className="object-contain max-h-16"
              />
            </div>
            <p className="text-xs font-bold text-gray-800 leading-snug">
              Consolidated Standards of Reporting Trials (CONSORT)
            </p>
          </div>

          {/* Card 2: PRISMA */}
          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-2xs flex flex-col items-center text-center justify-between hover:shadow-md transition-shadow">
            <div className="h-20 flex items-center justify-center mb-4">
              <Image
                src="/images/publication-support/peer-review-pre-submission/prisma_logo.png"
                alt="PRISMA"
                width={140}
                height={64}
                className="object-contain max-h-16"
              />
            </div>
            <p className="text-xs font-bold text-gray-800 leading-snug">
              Preferred Reporting Items for Systematic Reviews and Meta-Analyses
              (PRISMA)
            </p>
          </div>

          {/* Card 3: STROBE */}
          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-2xs flex flex-col items-center text-center justify-between hover:shadow-md transition-shadow">
            <div className="h-20 flex items-center justify-center mb-4">
              <Image
                src="/images/publication-support/peer-review-pre-submission/Strengthening-the-Reporting-of-Observational-Studies-in-Epidemiology.png"
                alt="STROBE"
                width={160}
                height={64}
                className="object-contain max-h-16"
              />
            </div>
            <p className="text-xs font-bold text-gray-800 leading-snug">
              Strengthening the Reporting of Observational Studies in
              Epidemiology (STROBE)
            </p>
          </div>

          {/* Card 4: ICMJE */}
          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-2xs flex flex-col items-center text-center justify-between hover:shadow-md transition-shadow">
            <div className="h-20 flex items-center justify-center mb-4">
              <Image
                src="/images/publication-support/journal-submission/ICMJE-1_thumb-2.png"
                alt="ICMJE"
                width={140}
                height={64}
                className="object-contain max-h-16"
              />
            </div>
            <p className="text-xs font-bold text-gray-800 leading-snug">
              International Committee of Medical Journal Editors (ICMJE)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
