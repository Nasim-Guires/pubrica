"use client";

import Image from "next/image";
import React from "react";

// ==========================================
// TYPES & DATA
// ==========================================

interface ComplianceCard {
  id: string;
  logoUrl?: string;
  title: string;
  image: string;
}

const complianceStandards: ComplianceCard[] = [
  {
    id: "cope",
    image: "/images/publication-support/journal-selection/COPE_thumb.png",
    title: "Committee on Publication Ethics",
  },
  {
    id: "wame",
    image: "/images/publication-support/journal-selection/WAME.webp",
    title: "World Association of Medical Editors",
  },
  {
    id: "icmje",
    image: "/images/publication-support/journal-selection/ICMJE.webp",
    title: "International Committee of Medical Journal Editors",
  },
  {
    id: "spirit-consort",
    image: "/images/publication-support/journal-selection/Consort-Logo.webp",
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
                {/* Logo / Image Display */}
                <div className="h-16 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain"
                  />
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

          {/* Right Column: Visual Journal Mockup */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-6">
            <Image
              src="/images/publication-support/journal-selection/Journal-selelction-1024x1024.webp"
              alt="Journal cover"
              width={1024}
              height={1024}
              className="w-full max-w-md h-auto object-contain rounded-md"
              priority
            />
          </div>
        </section>
      </div>
    </div>
  );
}