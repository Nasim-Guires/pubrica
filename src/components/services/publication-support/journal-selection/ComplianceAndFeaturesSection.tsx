"use client";

import React from "react";

// ==========================================
// TYPES & DATA
// ==========================================

interface ComplianceCard {
  id: string;
  logoUrl?: string;
  title: string;
  acronym: string;
}

const complianceStandards: ComplianceCard[] = [
  {
    id: "cope",
    acronym: "COPE",
    title: "Committee on Publication Ethics",
  },
  {
    id: "wame",
    acronym: "WAME",
    title: "World Association of Medical Editors",
  },
  {
    id: "icmje",
    acronym: "ICMJE",
    title: "International Committee of Medical Journal Editors",
  },
  {
    id: "spirit-consort",
    acronym: "SPIRIT / CONSORT",
    title: "Consolidated Standards of Reporting Trials",
  },
];

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function ComplianceAndFeaturesSection() {
  return (
    <div className="w-full bg-[#f8fafc] text-slate-800 font-sans py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* ---------------------------------------------------- */}
        {/* SECTION 1: COMPLIANCE AND GUIDELINE STANDARDS       */}
        {/* ---------------------------------------------------- */}
        <section className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d3b44] text-center">
            Our Compliance and guideline Standards
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {complianceStandards.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg p-6 shadow-sm border border-slate-200/80 flex flex-col items-center justify-between text-center min-h-[180px] hover:shadow-md transition-shadow"
              >
                {/* Logo Placeholder / Acronym Display */}
                <div className="h-16 flex items-center justify-center">
                  <span className="text-xl sm:text-2xl font-black text-slate-700 tracking-wider">
                    {item.acronym}
                  </span>
                </div>

                {/* Standard Title */}
                <p className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* SECTION 2: FEATURES & JOURNAL SHOWCASE               */}
        {/* ---------------------------------------------------- */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Bulleted List & Details */}
          <div className="lg:col-span-7 space-y-5 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <ul className="space-y-4">
              {/* Feature 1 */}
              <li className="flex items-start gap-2">
                <span className="text-[#a80000] font-bold text-lg leading-none mt-0.5">
                  •
                </span>
                <div>
                  <span className="font-extrabold text-slate-900">
                    Strategic Journal Evaluation:{" "}
                  </span>
                  As part of our academic{" "}
                  <a href="#" className="text-cyan-600 hover:underline">
                    journal selection
                  </a>{" "}
                  process, we begin with a purposeful consideration of potential
                  journals. We will consider journals based upon the following
                  factors: topical relevancy, scope fit, peer review process,
                  language,{" "}
                  <a href="#" className="text-cyan-600 hover:underline">
                    citations
                  </a>
                  , indexing, and international readership. This data-driven
                  approach, rooted in our{" "}
                  <a href="#" className="text-cyan-600 hover:underline">
                    Publication Support
                  </a>
                  , ensures your research paper’s{" "}
                  <a href="#" className="text-cyan-600 hover:underline">
                    journal selection
                  </a>{" "}
                  reflects your academic objectives.
                </div>
              </li>

              {/* Feature 2 */}
              <li className="flex items-start gap-2">
                <span className="text-[#a80000] font-bold text-lg leading-none mt-0.5">
                  •
                </span>
                <div>
                  <span className="font-extrabold text-slate-900">
                    Minimize Rejection Risks:{" "}
                  </span>
                  Leveraging our experience in{" "}
                  <a href="#" className="text-cyan-600 hover:underline">
                    Pre-Submission Peer Review
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-cyan-600 hover:underline">
                    Journal Submission
                  </a>{" "}
                  services, we help you avoid common rejection missteps by
                  identifying journals that precisely fit your research scope,
                  methodology, and audience. This process of identifying target
                  journals minimizes desk rejection risk and maximizes total
                  peer review success, enhancing your chances when preparing to{" "}
                  <a href="#" className="text-cyan-600 hover:underline">
                    write a scientific paper
                  </a>
                  .
                </div>
              </li>

              {/* Feature 3 */}
              <li className="flex items-start gap-2">
                <span className="text-[#a80000] font-bold text-lg leading-none mt-0.5">
                  •
                </span>
                <div>
                  <span className="font-extrabold text-slate-900">
                    Enhanced Research Visibility:{" "}
                  </span>
                  Our{" "}
                  <a href="#" className="text-cyan-600 hover:underline">
                    editing scientific papers
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-cyan-600 hover:underline">
                    Plagiarism Check
                  </a>{" "}
                  services complement our{" "}
                  <a href="#" className="text-cyan-600 hover:underline">
                    journal selection
                  </a>{" "}
                  efforts by ensuring your manuscript adheres to journal
                  standards, increasing the likelihood that your work will reach
                  the appropriate academic audience, receive citations, and gain
                  worldwide visibility. The right journal will help solidify
                  your research credibility and will also enhance your academic
                  through improved{" "}
                  <a href="#" className="text-cyan-600 hover:underline">
                    research paper publication
                  </a>{" "}
                  outcomes.
                </div>
              </li>

              {/* Feature 4 */}
              <li className="flex items-start gap-2">
                <span className="text-[#a80000] font-bold text-lg leading-none mt-0.5">
                  •
                </span>
                <div>
                  <span className="font-extrabold text-slate-900">
                    Comprehensive Support:{" "}
                  </span>
                  From advising on the appropriateness of your selected journal
                  to understanding its specific instructions for authors, our
                  team will support you throughout the{" "}
                  <a href="#" className="text-cyan-600 hover:underline">
                    journal selection
                  </a>{" "}
                  process, helping you determine the best{" "}
                  <a href="#" className="text-cyan-600 hover:underline">
                    journal to publish research paper
                  </a>
                  .
                </div>
              </li>
            </ul>

            {/* Closing Note */}
            <p className="pt-2">
              Select Pubrica’s{" "}
              <a href="#" className="text-cyan-600 hover:underline">
                journal selection
              </a>{" "}
              services to explore the challenges of publication with peace of
              mind. We will assist you in identifying a journal that accurately
              reflects your valuable research results. Please get in touch to
              learn about how we can provide you with the right publication
              choice.
            </p>

            {/* Upload Button */}
            <div className="pt-4">
              <button className="px-6 py-2.5 bg-[#a80000] hover:bg-[#830000] text-white font-bold text-xs sm:text-sm rounded-md transition-colors shadow-sm">
                Upload Your Manuscript
              </button>
            </div>
          </div>

          {/* Right Column: Visual Journal Mockup & Floating Badges */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-6">
            <div className="relative w-full max-w-sm rounded-md overflow-hidden shadow-lg border border-slate-200 bg-white">
              {/* Journal Cover Graphic Representation */}
              <div className="bg-[#0b1f3a] text-white p-6 min-h-[320px] flex flex-col justify-between relative">
                {/* Paper Preview Overlay */}
                <div className="bg-white/90 text-slate-800 p-3 rounded text-[9px] leading-tight space-y-1 shadow-xs max-w-[65%] border border-slate-300">
                  <p className="font-bold">
                    Contemporary Intensive Care Methods
                  </p>
                  <p className="text-[8px] text-slate-500">
                    Methodology & Clinical Results...
                  </p>
                  <div className="h-12 bg-slate-100 rounded border border-slate-200 mt-1"></div>
                </div>

                {/* Journal Title Branding */}
                <div className="text-right space-y-0.5 pt-8">
                  <h3 className="text-xl font-serif font-bold tracking-tight leading-none text-slate-100">
                    ANNALS OF
                  </h3>
                  <h3 className="text-2xl font-serif font-black tracking-wider text-slate-100">
                    MEDICINE
                  </h3>
                  <p className="text-xs font-serif italic text-slate-300">
                    & SURGERY
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: Impact Factor */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-xs border border-slate-200 rounded-lg px-3 py-1.5 shadow-md text-center min-w-[100px]">
                <span className="block text-[10px] text-slate-600 font-medium border-b border-slate-200 pb-0.5">
                  Impact Factor
                </span>
                <span className="block text-xs font-bold text-slate-900 pt-0.5">
                  0.09
                </span>
              </div>

              {/* Floating Badge 2: APC Charges */}
              <div className="absolute bottom-6 right-4 bg-white/95 backdrop-blur-xs border border-slate-200 rounded-lg px-4 py-1.5 shadow-md text-center">
                <span className="text-xs font-semibold text-slate-800">
                  APC Charges
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
