"use client";

import React from "react";
import Image from "next/image";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

export default function PackagesAndPricing() {
  return (
    <div className="w-full bg-[#f8fafc] font-sans text-gray-800 py-12 space-y-16 antialiased">
      {/* ============================================================ */}
      {/* SECTION 1: SAMPLE WORK / REPORT DOWNLOAD BANNER               */}
      {/* ============================================================ */}
      <section className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="bg-[#f0fdf4] rounded-2xl p-6 md:p-10 border border-[#e6f4ea] grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-xs">
          {/* Left Image */}
          <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop"
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
              <button
                type="button"
                className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white text-xs font-medium px-8 py-2.5 rounded-full transition-colors cursor-pointer"
              >
                Discover More
              </button>
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
              <button
                type="button"
                className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white text-xs font-medium px-8 py-2.5 rounded-full transition-colors cursor-pointer"
              >
                Discover More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2: SERVICE PACKAGES COMPARISON                        */}
      {/* ============================================================ */}
      <section className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0c3830] mb-3">
          Manuscript Formatting Service Packages
        </h2>
        <p className="text-xs md:text-sm text-gray-700 leading-relaxed max-w-5xl mb-8">
          Selecting the right package ensures your manuscript will be
          professionally formatted to meet{" "}
          <a href="#" className="text-[#3b82f6] hover:underline">
            journal submission
          </a>{" "}
          requirements and academic publishing standards. Whether you require
          minor manuscript editing and formatting or a complete research paper
          layout design, Pubrica provides customized{" "}
          <a href="#" className="text-[#3b82f6] hover:underline">
            manuscript formatting
          </a>{" "}
          solutions for every level of editorial complexity and journal
          guidelines compliance.
        </p>

        {/* 3 Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* CARD 1: STANDARD */}
          <div className="bg-white rounded-t-xl overflow-hidden border border-gray-200/80 shadow-xs flex flex-col transition-all duration-300 hover:shadow-lg">
            {/* Header */}
            <div className="p-5 border-t-4 border-[#0c3830] border-b border-gray-100 flex items-center space-x-4 bg-white">
              <div className="w-12 h-12 rounded-full bg-[#e2e8f0] flex items-center justify-center font-bold text-xl text-[#0c3830] shrink-0 border border-dashed border-gray-400">
                S
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-[#0c3830]">
                  Standard
                </h3>
                <p className="text-[10px] font-bold text-gray-500 tracking-wider uppercase">
                  HIGH-END PUBLICATION SUPPORT + RAPID TECHNICAL REVIEW
                </p>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-5 bg-[#d1dcd6]/60 flex-1 space-y-5 text-xs text-gray-800 leading-relaxed">
              <div>
                <div className="flex items-start mb-1 font-bold text-gray-900">
                  <span className="mr-1.5 text-xs">➔</span>
                  <span>Ideal for:</span>
                </div>
                <p className="pl-4 text-gray-700">
                  Early-stage researchers, Master&apos;s students, or first-time
                  journal authors needing basic journal submission formatting
                  for submission.
                </p>
              </div>

              <div>
                <div className="flex items-start mb-1 font-bold text-gray-900">
                  <span className="mr-1.5 text-xs">➔</span>
                  <span>Includes:</span>
                </div>
                <ul className="pl-4 space-y-2.5 text-gray-700">
                  <li>
                    • Journal-specific formatting (structure, layout, headings)
                    with professional manuscript layout
                  </li>
                  <li>
                    • Reference style formatting (APA, MLA, Vancouver, etc.)
                  </li>
                  <li>• Basic figure/table alignment</li>
                  <li>• Formatting of in-text citations</li>
                  <li>• Font, margin, and spacing adjustments</li>
                  <li>• File delivery in DOCX & PDF</li>
                </ul>
              </div>

              <div>
                <div className="flex items-start mb-1 font-bold text-gray-900">
                  <span className="mr-1.5 text-xs">➔</span>
                  <span>Optional Add-ons:</span>
                </div>
                <ul className="pl-4 space-y-1.5 text-gray-700">
                  <li>Plagiarism check (Turnitin)</li>
                  <li>Word count reduction</li>
                  <li>Journal selection assistance</li>
                </ul>
              </div>

              <div className="pt-2 border-t border-gray-300/60">
                <div className="flex items-start font-bold text-gray-900">
                  <span className="mr-1.5 text-xs">➔</span>
                  <span>Turnaround:</span>
                </div>
                <p className="pl-4 text-gray-700 font-semibold">
                  5–7 working days
                </p>
              </div>
            </div>
          </div>

          {/* CARD 2: ADVANCED */}
          <div className="bg-white rounded-t-xl overflow-hidden border border-gray-200/80 shadow-xs flex flex-col transition-all duration-300 hover:shadow-lg">
            {/* Header */}
            <div className="p-5 border-t-4 border-[#8b5cf6] border-b border-gray-100 flex items-center space-x-4 bg-white">
              <div className="w-12 h-12 rounded-full bg-[#f3e8ff] flex items-center justify-center font-bold text-xl text-[#7c3aed] shrink-0 border border-dashed border-[#c084fc]">
                A
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-[#6d28d9]">
                  ADVANCED
                </h3>
                <p className="text-[10px] font-bold text-gray-500 tracking-wider uppercase">
                  HIGH-END PUBLICATION SUPPORT + RAPID TECHNICAL REVIEW
                </p>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-5 bg-[#d8c4e2]/60 flex-1 space-y-5 text-xs text-gray-800 leading-relaxed">
              <div>
                <div className="flex items-start mb-1 font-bold text-gray-900">
                  <span className="mr-1.5 text-xs">➔</span>
                  <span>Ideal for:</span>
                </div>
                <p className="pl-4 text-gray-700">
                  PhD scholars, postdoctoral researchers, or authors preparing
                  manuscripts for Scopus/SCI-indexed journals.
                </p>
              </div>

              <div>
                <div className="flex items-start mb-1 font-bold text-gray-900">
                  <span className="mr-1.5 text-xs">➔</span>
                  <span>Includes:</span>
                </div>
                <p className="pl-4 mb-2 text-gray-800 font-medium">
                  Everything in the Standard Package, plus:
                </p>
                <ul className="pl-4 space-y-2.5 text-gray-700">
                  <li>• Advanced reference correction (cross-checking DOIs)</li>
                  <li>
                    • Formatting of supplementary files (appendices, annexures)
                  </li>
                  <li>
                    • Table and figure re-labelling as per journal template
                  </li>
                  <li>• Formatting for online submission portals</li>
                  <li>• Author affiliation structuring</li>
                  <li>• Consistency checks (abbreviations, units, styles)</li>
                </ul>
              </div>

              <div>
                <div className="flex items-start mb-1 font-bold text-gray-900">
                  <span className="mr-1.5 text-xs">➔</span>
                  <span>Optional Add-ons:</span>
                </div>
                <ul className="pl-4 space-y-1.5 text-gray-700">
                  <li>Journal resubmission formatting</li>
                  <li>Response to editor formatting updates</li>
                  <li>Cover letter formatting</li>
                </ul>
              </div>

              <div className="pt-2 border-t border-purple-300/60">
                <div className="flex items-start font-bold text-gray-900">
                  <span className="mr-1.5 text-xs">➔</span>
                  <span>Turnaround:</span>
                </div>
                <p className="pl-4 text-gray-700 font-semibold">
                  3–5 working days
                </p>
              </div>
            </div>
          </div>

          {/* CARD 3: PREMIUM */}
          <div className="bg-white rounded-t-xl overflow-hidden border border-gray-200/80 shadow-xs flex flex-col transition-all duration-300 hover:shadow-lg">
            {/* Header */}
            <div className="p-5 border-t-4 border-[#b45309] border-b border-gray-100 flex items-center space-x-4 bg-white">
              <div className="w-12 h-12 rounded-full bg-[#fef3c7] flex items-center justify-center font-bold text-xl text-[#d97706] shrink-0 border border-dashed border-[#f59e0b]">
                P
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-[#78350f]">
                  Premium
                </h3>
                <p className="text-[10px] font-bold text-gray-500 tracking-wider uppercase">
                  HIGH-END PUBLICATION SUPPORT + RAPID TECHNICAL REVIEW
                </p>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-5 bg-[#d1b993]/60 flex-1 space-y-5 text-xs text-gray-800 leading-relaxed">
              <div>
                <div className="flex items-start mb-1 font-bold text-gray-900">
                  <span className="mr-1.5 text-xs">➔</span>
                  <span>Ideal for:</span>
                </div>
                <p className="pl-4 text-gray-700">
                  Faculty members, medical writers, senior researchers
                  publishing in high-impact journals (SCI/SSCI/Scopus/Web of
                  Science).
                </p>
              </div>

              <div>
                <div className="flex items-start mb-1 font-bold text-gray-900">
                  <span className="mr-1.5 text-xs">➔</span>
                  <span>Includes:</span>
                </div>
                <p className="pl-4 mb-2 text-gray-800 font-medium">
                  Everything in the Advanced Package, plus:
                </p>
                <ul className="pl-4 space-y-2.5 text-gray-700">
                  <li>• Reformatting across multiple journal targets</li>
                  <li>
                    • Figure resolution enhancement (300 dpi, TIFF/JPEG
                    conversion)
                  </li>
                  <li>
                    • Language editing (light copyediting for grammar/clarity)
                  </li>
                  <li>
                    • Formatting for preprints and repositories (e.g., arXiv,
                    medRxiv)
                  </li>
                  <li>• Final quality check by senior academic editor</li>
                  <li>• Submission-ready version for each journal</li>
                </ul>
              </div>

              <div>
                <div className="flex items-start mb-1 font-bold text-gray-900">
                  <span className="mr-1.5 text-xs">➔</span>
                  <span>Optional Add-ons:</span>
                </div>
                <ul className="pl-4 space-y-1.5 text-gray-700">
                  <li>Graphical abstract formatting</li>
                  <li>Slide deck formatting for conference submission</li>
                  <li>
                    Compliance check with ethical standards and declarations
                  </li>
                </ul>
              </div>

              <div className="pt-2 border-t border-amber-300/60">
                <div className="flex items-start font-bold text-gray-900">
                  <span className="mr-1.5 text-xs">➔</span>
                  <span>Turnaround:</span>
                </div>
                <p className="pl-4 text-gray-700 font-semibold">
                  2–4 working days (express delivery available)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Quote CTA Button */}
        <div className="mt-8 text-center">
          <GetFreeQuoteButton/>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3: DELIVERY AND PRICING                               */}
      {/* ============================================================ */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-6 pt-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0c3830]">
          Delivery and Pricing
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 bg-white rounded-md border border-gray-200 overflow-hidden shadow-2xs divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
          <div className="p-6 flex items-center justify-center space-x-3">
            <div className="w-9 h-9 rounded-full bg-[#2563eb] text-white flex items-center justify-center font-bold text-lg shrink-0">
              $
            </div>
            <p className="text-sm md:text-base font-semibold text-gray-800">
              <span className="font-bold text-lg text-black">149</span> for full
              manuscript formatting
            </p>
          </div>

          <div className="p-6 flex items-center justify-center space-x-3">
            <div className="w-9 h-9 rounded-md bg-[#2563eb] text-white flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z" />
              </svg>
            </div>
            <p className="text-sm md:text-base font-bold text-gray-800">
              3 days
            </p>
          </div>
        </div>

        <div>
          <button
            type="button"
            className="bg-[#0f3c36] hover:bg-[#0a2924] text-white text-xs md:text-sm font-semibold px-8 py-3 rounded-full transition-colors cursor-pointer"
          >
            Check Pricing &amp; Get a Quote
          </button>
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
