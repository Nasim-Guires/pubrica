"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

// ==========================================
// TYPES & DATA
// ==========================================

interface ComplianceCard {
  id: string;
  logoUrl?: string;
  title: string;
  image: string;
  url: string;
}

const complianceStandards: ComplianceCard[] = [
  {
    id: "cope",
    image: "/images/publication-support/journal-selection/COPE_thumb.png",
    title: "Committee on Publication Ethics",
    url: "https://publicationethics.org/",
  },
  {
    id: "wame",
    image: "/images/publication-support/journal-selection/WAME.webp",
    title: "World Association of Medical Editors",
    url: "https://www.wame.org/",
  },
  {
    id: "icmje",
    image: "/images/publication-support/journal-selection/ICMJE.webp",
    title: "International Committee of Medical Journal Editors",
    url: "https://www.icmje.org/",
  },
  {
    id: "spirit-consort",
    image: "/images/publication-support/journal-selection/Consort-Logo.webp",
    title: "Consolidated Standards of Reporting Trials",
    url: "https://www.consort-spirit.org/",
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
        {/* SECTION 1: COMPLIANCE AND GUIDELINE STANDARDS        */}
        {/* ---------------------------------------------------- */}
        <section className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d3b44] text-center">
            Our Compliance and guideline Standards
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {complianceStandards.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg p-6 shadow-sm border border-slate-200/80 flex flex-col items-center justify-between text-center min-h-[180px] hover:shadow-md transition-shadow group"
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
                <p className="text-xs sm:text-sm font-bold text-slate-800 leading-snug group-hover:text-cyan-600 transition-colors">
                  {item.title}
                </p>
              </a>
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
                  <Link
                    href="/services/publication-support/journal-selection/journal-selection-alcoholic-liver-disease/"
                    className="text-cyan-600 hover:underline"
                  >
                    journal selection
                  </Link>{" "}
                  process, we begin with a purposeful consideration of potential
                  journals. We will consider journals based upon the following
                  factors: topical relevancy, scope fit, peer review process,
                  language,{" "}
                  <Link
                    href="/services/publication-support/journal-selection/journal-citation-reports-impact-metrics-guide/"
                    className="text-cyan-600 hover:underline"
                  >
                    citations
                  </Link>
                  , indexing, and international readership. This data-driven
                  approach, rooted in our{" "}
                  <Link
                    href="/services/publication-support/"
                    className="text-cyan-600 hover:underline"
                  >
                    Publication Support
                  </Link>
                  , ensures your research paper’s{" "}
                  <Link
                    href="/insights/stroke-diet-global-burden-inequalities"
                    className="text-cyan-600 hover:underline"
                  >
                    journal selection
                  </Link>{" "}
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
                  <Link
                    href="/services/publication-support/peer-review-pre-submission/"
                    className="text-cyan-600 hover:underline"
                  >
                    Pre-Submission Peer Review
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/services/publication-support/journal-submission/"
                    className="text-cyan-600 hover:underline"
                  >
                    Journal Submission
                  </Link>{" "}
                  services, we help you avoid common rejection missteps by
                  identifying journals that precisely fit your research scope,
                  methodology, and audience. This process of identifying target
                  journals minimizes desk rejection risk and maximizes total
                  peer review success, enhancing your chances when preparing to{" "}
                  <Link
                    href="/services/editing-and-translation/scientific-editing/"
                    className="text-cyan-600 hover:underline"
                  >
                    write a scientific paper
                  </Link>
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
                  <Link
                    href="/academy/scientific-editing/scientific-vs-language-editing-high-quality-publications/"
                    className="text-cyan-600 hover:underline"
                  >
                    editing scientific papers
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/services/publication-support/plagiarism-services/"
                    className="text-cyan-600 hover:underline"
                  >
                    Plagiarism Check
                  </Link>{" "}
                  services complement our{" "}
                  <Link
                    href="/academy/journal-selection/difference-between-scopus-indexed-and-non-indexed-journals/"
                    className="text-cyan-600 hover:underline"
                  >
                    journal selection
                  </Link>{" "}
                  efforts by ensuring your manuscript adheres to journal
                  standards, increasing the likelihood that your work will reach
                  the appropriate academic audience, receive citations, and gain
                  worldwide visibility. The right journal will help solidify
                  your research credibility and will also enhance your academic
                  through improved{" "}
                  <Link
                    href="/insights/the-impact-of-drinking-water-sources-on-gut-microbial-diversity-in-canines-peer-review"
                    className="text-cyan-600 hover:underline"
                  >
                    research paper publication
                  </Link>{" "}
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
                  <Link
                    href="/insights/tuberculosis-journal-selection-india-global"
                    className="text-cyan-600 hover:underline"
                  >
                    journal selection
                  </Link>{" "}
                  process, helping you determine the best journal to publish
                  research paper.
                </div>
              </li>
            </ul>

            {/* Closing Note */}
            <p className="pt-2">
              Select Pubrica’s{" "}
              <Link
                href="/services/publication-support/journal-selection/journal-selection-alcoholic-liver-disease/"
                className="text-cyan-600 hover:underline"
              >
                journal selection
              </Link>{" "}
              services to explore the challenges of publication with peace of
              mind. We will assist you in identifying a journal that accurately
              reflects your valuable research results. Please get in touch to
              learn about how we can provide you with the right publication
              choice.
            </p>

            {/* Upload Button */}
            <div className="pt-4">
              <Link
                href="/order-now"
                className="inline-block px-6 py-2.5 bg-[#a80000] hover:bg-[#830000] text-white font-bold text-xs sm:text-sm rounded-md transition-colors shadow-sm"
              >
                Upload Your Manuscript
              </Link>
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