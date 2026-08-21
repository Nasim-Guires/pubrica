"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

// Data Structure for Interactive Cards with Bullet Points
interface AudienceItem {
  id: string;
  title: string;
  points: string[];
}

const CORE_AUDIENCE: AudienceItem[] = [
  {
    id: "phd",
    title: "PhD Scholars & Early-Career Scientists",
    points: [
      "Journal peer-review response and rebuttal letter drafting",
      "Manuscript revision aligned with reviewer feedback",
      "Targeted support for high-impact journal submissions",
    ],
  },
  {
    id: "independent",
    title: "Independent Academic Authors",
    points: [
      "Full manuscript editing and peer review response",
      "Rebuttal letters tailored to specific journal scopes",
      "Formatting corrections and justification statements",
    ],
  },
  {
    id: "faculty",
    title: "University Faculty and Research Teams",
    points: [
      "Multi-author manuscript coordination",
      "Institutional publication review assistance",
      "Department-level B2B service engagement options",
    ],
  },
  {
    id: "pharma",
    title: "Medical, Pharma & Biotech Companies",
    points: [
      "Peer-reviewed manuscript response services for regulatory or clinical submissions",
      "Technical and regulatory writing support for product-related publications",
      "White-label rebuttal and publication support for CROs, medical communication agencies",
    ],
  },
];

const SPECIALIZED_AUDIENCE: AudienceItem[] = [
  {
    id: "grant",
    title: "Grant Writers / Research Funding Applicants",
    points: [
      "Rebuttals to grant reviewers (e.g., NIH, ERC, Horizon)",
      "Justification letters for resubmission",
      "Grant proposal revision based on panel feedback",
      "Response documents for institutional or private funding bodies",
    ],
  },
  {
    id: "freelancers",
    title: "Scientific and Technical Writers (Freelancers)",
    points: [
      "White-labelled response letter creation",
      "Manuscript revision for ghostwritten papers",
      "Collaborative peer-review response drafting",
      "Rebuttal and resubmission support under NDA or branding terms",
    ],
  },
  {
    id: "consultants",
    title: "Research Consultants & Policy Analysts",
    points: [
      "Peer-review response for policy reports and white papers",
      "Comment handling for interdisciplinary review panels",
      "Structured responses for research briefs and evaluations",
      "Data clarification and interpretation response drafts",
    ],
  },
  {
    id: "non-native",
    title: "Non-native English-Speaking Researchers",
    points: [
      "Language polishing + scientific accuracy for reviewer replies",
      "Sentence restructuring for clarity and tone",
      "Rewriting poorly received response letters",
      "Journal-specific cover letter and response drafting",
    ],
  },
];

const INDUSTRY_AUDIENCE: AudienceItem[] = [
  {
    id: "publishers",
    title: "Journal Editorial Boards / Academic Publishers",
    points: [
      "White-labelled peer-review response services",
      "Rebuttal support packages for author assistance programs",
      "Technical editing and reviewer comment clarification",
      "Author coaching tools (templates, guidelines, training)",
    ],
  },
  {
    id: "med-device",
    title: "Pharmaceutical & Medical Device Companies",
    points: [
      "Reviewer comment responses for clinical trials & regulatory articles",
      "Manuscript support for R&D and safety studies",
      "White paper revisions for journal submission",
      "Internal research report polishing and rebuttal preparation",
    ],
  },
  {
    id: "startups",
    title: "Biotech / HealthTech / MedTech Startups",
    points: [
      "Clinical study peer-review response",
      "Regulatory document revision (validation studies, white papers)",
      "Support for technical documentation, peer-reviewed publishing",
      "Resubmission strategy and formatting for target journals",
    ],
  },
  {
    id: "surgeons",
    title: "Physicians & Surgeons",
    points: [
      "Case report revision and reviewer comment support",
      "Clinical research peer review response",
      "Short communication and review article rebuttals",
      "Manuscript formatting and journal compliance",
    ],
  },
];

export default function RespondingToReviewersPage() {
  // State for tracking single open item in the "What We Do" accordions (null = all closed)
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  // Array state to allow multiple cards in "Who We Serve" to open independently
  const [openCardIds, setOpenCardIds] = useState<string[]>([]);

  const toggleAccordion = (id: string) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  const toggleCard = (id: string) => {
    setOpenCardIds((prev) =>
      prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
    );
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 text-slate-800 font-sans">
      {/* ================= WHAT WE DO SECTION ================= */}
      <section className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#083b3a] mb-4">
          What We do
        </h1>
        <p className="text-base md:text-lg leading-relaxed mb-8 text-slate-700">
          With our{" "}
          <Link
            href="/insights/news/educational-resources-workshops-learning-development"
            className="text-blue-700 font-medium hover:text-blue-900 transition-colors"
          >
            response to reviewer
          </Link>{" "}
          comments service, Pubrica provides resubmission support for journal
          articles. Your manuscript is fully revised according to the
          reviewer&apos;s suggestions. The service supports your
          manuscript&apos;s chances of acceptance by carefully and
          professionally addressing important peer review comments.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Accordions Container */}
          <div className="lg:col-span-7 space-y-3">
            {/* Item 1 */}
            <div className="border border-slate-700/80 rounded-none bg-white overflow-hidden">
              <button
                type="button"
                onClick={() => toggleAccordion("acc1")}
                className="w-full flex justify-between items-center p-4 cursor-pointer font-bold text-[#083b3a] text-left select-none"
              >
                <span>Comprehensive Feedback Analysis</span>
                <span
                  className={`text-xs transition-transform duration-200 ${
                    openAccordion === "acc1" ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {openAccordion === "acc1" && (
                <div className="p-4 pt-2 text-sm leading-relaxed text-slate-700 border-t border-slate-200/60 bg-[#f4faf7]">
                  As part of our manuscript revision service, our experienced
                  editors thoroughly analyze reviewer comments, identifying all
                  issues raised, including unrealistic targets, poor paper
                  construction, inadequate research design, and a lack of
                  novelty. This includes identifying potential gaps in
                  biostatistics or data interpretation that will require
                  additional clarification or development.
                </div>
              )}
            </div>

            {/* Item 2 */}
            <div className="border border-slate-700/80 rounded-none bg-white overflow-hidden">
              <button
                type="button"
                onClick={() => toggleAccordion("acc2")}
                className="w-full flex justify-between items-center p-4 cursor-pointer font-bold text-[#083b3a] text-left select-none"
              >
                <span>Guided Response Strategy</span>
                <span
                  className={`text-xs transition-transform duration-200 ${
                    openAccordion === "acc2" ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {openAccordion === "acc2" && (
                <div className="p-4 pt-2 border-t border-slate-200/60 bg-[#f4faf7] text-sm leading-relaxed text-slate-700">
                  We offer expert advice and recommendations on developing clear,
                  professional, and constructive responses to each comment based
                  on scientific rigor and professionalism. Our approach ensures
                  that your responses and changes respond to the reviewers&apos;
                  comments and improve the quality of the manuscript, both in
                  respect of the literature review and any methodological,
                  analytical, coding, or interpretative issues, or in the
                  discussion section connecting the literature review or
                  rewritten analysis. We will also help align your responses to
                  any required{" "}
                  <Link
                    href="/services/publication-support"
                    className="text-blue-700 font-medium hover:text-blue-900 transition-colors"
                  >
                    publication support
                  </Link>{" "}
                  requirements, including{" "}
                  <Link
                    href="/services/publication-support/journal-manuscript-formatting-services"
                    className="text-blue-700 font-medium hover:text-blue-900 transition-colors"
                  >
                    formatting
                  </Link>{" "}
                  and journal requirements.
                </div>
              )}
            </div>

            {/* Item 3 */}
            <div className="border border-slate-700/80 rounded-none bg-white overflow-hidden">
              <button
                type="button"
                onClick={() => toggleAccordion("acc3")}
                className="w-full flex justify-between items-center p-4 cursor-pointer font-bold text-[#083b3a] text-left select-none"
              >
                <span>
                  Manuscript Refinement (Scientific Editing & Language
                  Polishing)
                </span>
                <span
                  className={`text-xs transition-transform duration-200 ${
                    openAccordion === "acc3" ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {openAccordion === "acc3" && (
                <div className="p-4 pt-2 text-sm leading-relaxed text-slate-700 border-t border-slate-200/60 bg-[#f4faf7]">
                  Based on your feedback, we will take you step by step through
                  your revisions, making scientific and structural edits,
                  refining the research relevance, and correcting language
                  issues, including punctuation and technical language. Our
                  editors can also help check for and remove any{" "}
                  <Link
                    href="/services/publication-support/plagiarism-services"
                    className="text-blue-700 font-medium hover:text-blue-900 transition-colors"
                  >
                    plagiarism
                  </Link>
                  , as well as ensure that your work is of the highest academic
                  standard of integrity by ensuring that the responses remain
                  polite, professional, and constructive. Avoiding defensive or
                  confrontational language. If your manuscript requires
                  multilingual submission, we offer translation services to
                  provide consistency and accuracy across languages.
                </div>
              )}
            </div>

            {/* Item 4 */}
            <div className="border border-slate-700/80 rounded-none bg-white overflow-hidden">
              <button
                type="button"
                onClick={() => toggleAccordion("acc4")}
                className="w-full flex justify-between items-center p-4 cursor-pointer font-bold text-[#083b3a] text-left select-none"
              >
                <span>End-to-End Support</span>
                <span
                  className={`text-xs transition-transform duration-200 ${
                    openAccordion === "acc4" ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {openAccordion === "acc4" && (
                <div className="p-4 pt-2 text-sm leading-relaxed text-slate-700 border-t border-slate-200/60 bg-[#f4faf7]">
                  From formulating new ideas to the final tweaks based on your
                  reviewers’ comments, we guide you through the entire revision
                  process until your article is published successfully. This
                  includes journal formatting compliance (formatting citations,
                  figures, and layout as per journal specifications). We also
                  help you create{" "}
                  <Link
                    href="/services/publication-support/video-abstract"
                    className="text-blue-700 font-medium hover:text-blue-900 transition-colors"
                  >
                    video abstracts
                  </Link>{" "}
                  to increase engagement and visibility, and disseminate the
                  findings of your research more widely and after acceptance.
                </div>
              )}
            </div>
          </div>

          {/* Side Image Column */}
          <div className="lg:col-span-5 relative w-full h-[320px] rounded-none overflow-hidden shadow-sm">
            <Image
              src="/images/publication-support/responding-to-reviewers/Plagiarism-Checker-Report-.jpg"
              alt="Researcher taking notes and editing reviewer comments"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>

        <p className="mt-8 text-base text-slate-700 leading-relaxed">
          Select Pubrica&apos;s{" "}
          <Link
            href="/academy/response-to-reviewer/response-to-reviewer-comments-services-for-researchers"
            className="text-blue-700 font-medium hover:text-blue-900 transition-colors"
          >
            response to reviewer comment service
          </Link>{" "}
          to effectively and confidently go through the revision process. With
          our expert guide, you can successfully deal with the feedback from
          reviewers and therefore increase the chances of your manuscript being
          published. Get in touch to find out how we can help you have a
          successful publication.
        </p>

        <div className="mt-6">
          <GetFreeQuoteButton />
        </div>
      </section>

      {/* Process Bar Banner */}
      <section className="mb-14">
        <div className="bg-[#083b3a] text-white rounded-none overflow-hidden">
          <button
            type="button"
            onClick={() => toggleAccordion("processBar")}
            className="w-full flex justify-between items-center p-4 cursor-pointer font-bold text-base md:text-lg select-none text-left"
          >
            <span>How do our experts address the reviewer comments?</span>
            <span
              className={`text-xl transition-transform duration-200 ${
                openAccordion === "processBar" ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          {openAccordion === "processBar" && (
            <div className="p-4 border-t border-[#0d5250] text-sm text-slate-200 leading-relaxed">
              Our experts systematically categorize reviewer feedback, formulate
              point-by-point rebuttals, perform required editorial or statistical
              revisions, and format the manuscript to meet journal standards.
            </div>
          )}
        </div>
      </section>

      {/* ================= WHO WE SERVE SECTION ================= */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-[#083b3a] mb-2">
          Who We Serve
        </h2>
        <h3 className="text-lg font-bold text-slate-900 mb-4">
          Scientific and Academic Publishing Support
        </h3>
        <p className="text-base text-slate-700 leading-relaxed mb-8">
          Navigating reviewer feedback can be difficult for authors across all
          academic disciplines. Our{" "}
          <Link
            href="/publication-support/responding-to-reviewers"
            className="text-blue-700 font-medium hover:text-blue-900 transition-colors"
          >
            response to reviewer
          </Link>{" "}
          comments service has been designed to assist researchers, authors, and
          manufacturers in responding to feedback from peer review and to
          develop manuscripts that satisfy the considerable standards of
          scholarly publications. We offer domain-specific reviewer response and
          editing support across disciplines—from life sciences and clinical
          research to engineering, social sciences, and humanities.
        </p>

        {/* Category 1 */}
        <div className="mb-8">
          <h4 className="text-xl font-bold text-[#083b3a] mb-4">
            Core Research & Institutional Audience
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-start">
            {CORE_AUDIENCE.map((item) => (
              <InteractiveCard
                key={item.id}
                item={item}
                isOpen={openCardIds.includes(item.id)}
                onToggle={() => toggleCard(item.id)}
              />
            ))}
          </div>
        </div>

        {/* Category 2 */}
        <div className="mb-8">
          <h4 className="text-xl font-bold text-[#083b3a] mb-4">
            Specialized and Professional Audience
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-start">
            {SPECIALIZED_AUDIENCE.map((item) => (
              <InteractiveCard
                key={item.id}
                item={item}
                isOpen={openCardIds.includes(item.id)}
                onToggle={() => toggleCard(item.id)}
              />
            ))}
          </div>
        </div>

        {/* Category 3 */}
        <div>
          <h4 className="text-xl font-bold text-[#083b3a] mb-4">
            Industry and Institutional Partners (B2B)
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-start">
            {INDUSTRY_AUDIENCE.map((item) => (
              <InteractiveCard
                key={item.id}
                item={item}
                isOpen={openCardIds.includes(item.id)}
                onToggle={() => toggleCard(item.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// Interactive Card Component
function InteractiveCard({
  item,
  isOpen,
  onToggle,
}: {
  item: AudienceItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="bg-[#f0faf7] border border-emerald-100 rounded-none overflow-hidden flex flex-col transition-all">
      <button
        type="button"
        onClick={onToggle}
        className="w-full text-left p-4 flex justify-between items-center hover:bg-[#e4f6f1] transition-colors focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="text-xs md:text-sm font-semibold text-slate-800 leading-snug">
          {item.title}
        </span>
        <span
          className={`text-slate-600 font-semibold text-base ml-2 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-45 text-red-600" : ""
          }`}
        >
          -
        </span>
      </button>

      {/* Renders exact bullet points when expanded */}
      {isOpen && (
        <div className="px-4 pb-4 pt-2 text-xs text-slate-700 border-t border-emerald-200/60 bg-white leading-relaxed">
          <ul className="list-disc pl-4 space-y-2">
            {item.points.map((pt, idx) => (
              <li key={idx}>{pt}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}