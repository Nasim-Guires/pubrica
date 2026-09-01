"use client";

import React from "react";
import Image from "next/image";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import Link from "next/link";
import CommonPackages from "@/components/common/CommonPackages";

export default function PackagesAndPricing() {
  const manuscriptPackages = [
    {
      icon: "/images/publication-support/poster-preparation/S.png",
      title: "Standard",
      subtitle: "HIGH-END PUBLICATION SUPPORT + RAPID TECHNICAL REVIEW",
      idealFor:
        "Early-stage researchers, Master's students, or first-time journal authors needing basic journal submission formatting for submission.",
      includes: [
        "Journal-specific formatting (structure, layout, headings) with professional manuscript layout",
        "Reference style formatting (APA, MLA, Vancouver, etc.)",
        "Basic figure/table alignment",
        "Formatting of in-text citations",
        "Font, margin, and spacing adjustments",
        "File delivery in DOCX & PDF",
      ],
      addOns: [
        "Plagiarism check (Turnitin)",
        "Word count reduction",
        "Journal selection assistance",
      ],
      turnaround: "5–7 working days",
      cardBgColor: "#d1dcd6",
      titleColor: "#0c3830",
    },
    {
      icon: "/images/publication-support/journal-selection/advanced.webp",
      title: "ADVANCED",
      subtitle: "HIGH-END PUBLICATION SUPPORT + RAPID TECHNICAL REVIEW",
      idealFor:
        "PhD scholars, postdoctoral researchers, or authors preparing manuscripts for Scopus/SCI-indexed journals.",
      includes: [
        "Everything in the Standard Package, plus:",
        "Advanced reference correction (cross-checking DOIs)",
        "Formatting of supplementary files (appendices, annexures)",
        "Table and figure re-labelling as per journal template",
        "Formatting for online submission portals",
        "Author affiliation structuring",
        "Consistency checks (abbreviations, units, styles)",
      ],
      addOns: [
        "Journal resubmission formatting",
        "Response to editor formatting updates",
        "Cover letter formatting",
      ],
      turnaround: "3–5 working days",
      cardBgColor: "#d8c4e2",
      titleColor: "#6d28d9",
    },
    {
      icon: "/images/publication-support/responding-to-reviewers/pa-icons-.png",
      title: "Premium",
      subtitle: "HIGH-END PUBLICATION SUPPORT + RAPID TECHNICAL REVIEW",
      idealFor:
        "Faculty members, medical writers, senior researchers publishing in high-impact journals (SCI/SSCI/Scopus/Web of Science).",
      includes: [
        "Everything in the Advanced Package, plus:",
        "Reformatting across multiple journal targets",
        "Figure resolution enhancement (300 dpi, TIFF/JPEG conversion)",
        "Language editing (light copyediting for grammar/clarity)",
        "Formatting for preprints and repositories (e.g., arXiv, medRxiv)",
        "Final quality check by senior academic editor",
        "Submission-ready version for each journal",
      ],
      addOns: [
        "Graphical abstract formatting",
        "Slide deck formatting for conference submission",
        "Compliance check with ethical standards and declarations",
      ],
      turnaround: "2–4 working days (express delivery available)",
      cardBgColor: "#d1b993",
      titleColor: "#78350f",
    },
  ];

  const manuscriptFormattingDescription = (
    <>
      Selecting the right package ensures your manuscript will be professionally
      formatted to meet{" "}
      <Link
        href="/services/publication-support/journal-submission/"
        className="text-blue-600 no-underline hover:no-underline"
      >
        journal submission
      </Link>{" "}
      requirements and academic publishing standards. Whether you require minor{" "}
      <Link
        href="/academy/formatting-service/life-science-manuscript-formatting-faster-publication/"
        className="text-blue-600 no-underline hover:no-underline"
      >
        manuscript formatting
      </Link>{" "}
      or a complete research paper layout design, Pubrica provides customized
      manuscript formatting solutions for every level of editorial complexity
      and journal guidelines compliance.
    </>
  );
  return (
    <div className="w-full bg-[#f8fafc] font-sans text-gray-800 py-6 space-y-16 antialiased">
      {/* ============================================================ */}
      {/* SECTION 1: SAMPLE WORK / REPORT DOWNLOAD BANNER               */}
      {/* ============================================================ */}
      <div className="space-y-12">
        {/* Sample Work Section */}
        <section className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="bg-[#f0fdf4] rounded-2xl p-6 md:p-10 border border-[#e6f4ea] grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-xs">
            {/* Left Image */}
            <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/images/publication-support/journal-manuscript-formatting-services/Manuscript-Formatting-Sample-Work.jpg"
                alt="Manuscript Formatting Sample Work"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>

            {/* Right Content */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                  Manuscript Formatting Sample Work
                </h3>
                <Link
                  href="/insights/citation-and-formatting/"
                  type="button"
                  className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white text-xs font-medium px-8 py-2.5 rounded-full transition-colors cursor-pointer"
                >
                  Discover More
                </Link>
              </div>

              <div className="pt-2">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  Download the full Report Now
                </h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-4">
                  Explore our manuscript formatting sample work designed to meet
                  your target journal&apos;s formatting guidelines, technical
                  standards, and submission deadlines.
                </p>
                <Link
                  href="/insights/citation-and-formatting/"
                  type="button"
                  className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white text-xs font-medium px-8 py-2.5 rounded-full transition-colors cursor-pointer"
                >
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Replaced Packages Section */}
        <CommonPackages
          title="Manuscript Formatting Service Packages"
          description={manuscriptFormattingDescription}
          packages={manuscriptPackages}
          buttonText="Get a Free Quote"
        />
        <GetFreeQuoteButton />
      </div>

      {/* ============================================================ */}
      {/* SECTION 3: DELIVERY AND PRICING                               */}
      {/* ============================================================ */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-6 pt-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0c3830]">
          Delivery and Pricing
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 bg-white rounded-md border border-gray-200 overflow-hidden shadow-2xs divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
          <div className="p-6 flex items-center justify-center space-x-3">
            <Image
              src="/images/publication-support/journal-manuscript-formatting-services/dollar-sign.png"
              alt="Price"
              width={36}
              height={36}
              className="w-9 h-9 object-contain shrink-0"
            />
            <p className="text-sm md:text-base font-semibold text-gray-800">
              <span className="font-bold text-lg text-black">149</span> for full
              manuscript formatting
            </p>
          </div>

          <div className="p-6 flex items-center justify-center space-x-3">
            <Image
              src="/images/publication-support/journal-manuscript-formatting-services/date.png"
              alt="Turnaround"
              width={36}
              height={36}
              className="w-9 h-9 object-contain shrink-0"
            />
            <p className="text-sm md:text-base font-bold text-gray-800">
              3 days
            </p>
          </div>
        </div>

        <div>
          <Link
            href="/order-now/"
            className="bg-[#0f3c36] hover:bg-[#0a2924] text-white text-xs md:text-sm font-semibold px-8 py-3 rounded-full transition-colors cursor-pointer inline-block"
          >
            Check Pricing &amp; Get a Quote
          </Link>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4: GUARANTEES                                        */}
      {/* ============================================================ */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Guaranteed Quality */}
          <div className="bg-white rounded-lg border-l-4 border-l-[#f59e0b] border-y border-r border-gray-200/80 p-6 shadow-2xs space-y-4">
            <h3 className="text-base font-bold text-gray-900">
              Guaranteed Quality
            </h3>
            <ul className="space-y-3 text-xs text-gray-600 leading-relaxed">
              <li className="flex items-start">
                <span className="text-gray-800 mr-2 font-bold">•</span>
                <span>
                  In the rare case our work fails to delight you, we&apos;ll
                  re-work on it till you&apos;re 100% happy.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-800 mr-2 font-bold">•</span>
                <span>
                  Our commitment to excellence ensures reliable results and
                  impactful outcomes in medical research.
                </span>
              </li>
            </ul>
          </div>

          {/* Card 2: On Time Always */}
          <div className="bg-white rounded-lg border-l-4 border-l-[#8b5cf6] border-y border-r border-gray-200/80 p-6 shadow-2xs space-y-4">
            <h3 className="text-base font-bold text-gray-900">
              On Time Always
            </h3>
            <ul className="space-y-3 text-xs text-gray-600 leading-relaxed">
              <li className="flex items-start">
                <span className="text-gray-800 mr-2 font-bold">•</span>
                <span>
                  We always help you meet your deadlines, often by turning
                  around work in just 8 hours
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-800 mr-2 font-bold">•</span>
                <span>
                  Pubrica&apos;s punctuality ensures your projects stay on
                  track, meeting deadlines with efficiency and reliability.
                </span>
              </li>
            </ul>
          </div>

          {/* Card 3: Advanced security */}
          <div className="bg-white rounded-lg border-l-4 border-l-[#10b981] border-y border-r border-gray-200/80 p-6 shadow-2xs space-y-4">
            <h3 className="text-base font-bold text-gray-900">
              Advanced security
            </h3>
            <ul className="space-y-3 text-xs text-gray-600 leading-relaxed">
              <li className="flex items-start">
                <span className="text-gray-800 mr-2 font-bold">•</span>
                <span>
                  We work hard to protect your work and make all our experts and
                  employees honour a strict NDA.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-800 mr-2 font-bold">•</span>
                <span>
                  Ensuring utmost data security through advanced encryption and
                  strict protocols, offering peace of mind to all clients.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
