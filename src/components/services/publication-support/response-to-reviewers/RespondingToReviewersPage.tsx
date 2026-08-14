"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

// 1. Data Structure for Interactive Cards
interface AudienceItem {
  id: string;
  title: string;
  description: string;
}

const CORE_AUDIENCE: AudienceItem[] = [
  {
    id: "phd",
    title: "PhD Scholars & Early-Career Scientists",
    description:
      "Targeted assistance for early-career researchers looking to navigate complex peer review comments and improve manuscript acceptance rates.",
  },
  {
    id: "independent",
    title: "Independent Academic Authors",
    description:
      "Expert editorial support and guidance for unaffiliated authors to meet strict journal standards and address reviewer critiques effectively.",
  },
  {
    id: "faculty",
    title: "University Faculty and Research Teams",
    description:
      "Comprehensive resubmission support for institutional research groups aiming for high-impact publication success.",
  },
  {
    id: "pharma",
    title: "Medical, Pharma & Biotech Companies",
    description:
      "Rigorous scientific editing and response drafting adhering to regulatory and industry-specific publication standards.",
  },
];

const SPECIALIZED_AUDIENCE: AudienceItem[] = [
  {
    id: "grant",
    title: "Grant Writers / Research Funding Applicants",
    description:
      "Strategic editing and refinement to ensure research proposals and related papers meet funding body and reviewer requirements.",
  },
  {
    id: "freelancers",
    title: "Scientific and Technical Writers (Freelancers)",
    description:
      "Collaborative peer-review response refinement to assist freelance scientific communicators in delivering top-tier work.",
  },
  {
    id: "consultants",
    title: "Research Consultants & Policy Analysts",
    description:
      "Tailored support for policy and analytical papers to effectively address peer commentary and editorial revisions.",
  },
  {
    id: "non-native",
    title: "Non-native English-Speaking Researchers",
    description:
      "Comprehensive language polishing, tone adjustment, and structural revisions to ensure clear communication with reviewers.",
  },
];

const INDUSTRY_AUDIENCE: AudienceItem[] = [
  {
    id: "publishers",
    title: "Journal Editorial Boards / Academic Publishers",
    description:
      "Quality assurance and editorial support to streamline post-review revisions for academic publishing houses.",
  },
  {
    id: "med-device",
    title: "Pharmaceutical & Medical Device Companies",
    description:
      "Specialized clinical manuscript editing aligned with rigorous peer-review and compliance standards.",
  },
  {
    id: "startups",
    title: "Biotech / HealthTech / MedTech Startups",
    description:
      "Accelerated editorial and response services to help innovative startups publish evidence-based research efficiently.",
  },
  {
    id: "surgeons",
    title: "Physicians & Surgeons",
    description:
      "Clinical manuscript refinement tailored to high-impact medical journals and peer-review feedback.",
  },
];

export default function RespondingToReviewersPage() {
  // State for tracking active/open cards in "Who We Serve" grid
  const [openCardId, setOpenCardId] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setOpenCardId((prev) => (prev === id ? null : id));
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
            href="/publication-support/responding-to-reviewers"
            className="text-cyan-700 underline font-medium hover:text-cyan-900"
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
            <details className="group border border-slate-300 rounded-sm bg-white overflow-hidden">
              <summary className="flex justify-between items-center p-4 cursor-pointer font-semibold text-[#083b3a] list-none select-none">
                <span>Comprehensive Feedback Analysis</span>
                <span className="transition-transform duration-200 group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <div className="p-4 pt-0 text-sm text-slate-600 border-t border-slate-100">
                Detailed analysis of all reviewer comments to identify critical
                revisions needed.
              </div>
            </details>

            <details
              className="group border border-slate-300 rounded-sm bg-[#f4faf8] overflow-hidden"
              open
            >
              <summary className="flex justify-between items-center p-4 cursor-pointer font-semibold text-[#083b3a] list-none select-none">
                <span>Guided Response Strategy</span>
                <span className="transition-transform duration-200 group-open:rotate-180">
                  ▲
                </span>
              </summary>
              <div className="p-4 border-t border-slate-200 text-sm leading-relaxed text-slate-700">
                We offer expert advice and recommendations on developing clear,
                professional, and constructive responses to each comment based
                on scientific rigor and professionalism. Our approach ensures
                that your responses and changes respond to the reviewers&apos;
                comments and improve the quality of the manuscript, both in
                respect of the literature review and any methodological,
                analytical, coding, or interpretative issues, or in the
                discussion section connecting the literature review or rewritten
                analysis. We will also help align your responses to any required{" "}
                <Link
                  href="/publication-support"
                  className="text-cyan-700 underline font-medium"
                >
                  publication support
                </Link>{" "}
                requirements, including{" "}
                <Link
                  href="/publication-support/formatting"
                  className="text-cyan-700 underline font-medium"
                >
                  formatting
                </Link>{" "}
                and journal requirements.
              </div>
            </details>

            <details className="group border border-slate-300 rounded-sm bg-white overflow-hidden">
              <summary className="flex justify-between items-center p-4 cursor-pointer font-semibold text-[#083b3a] list-none select-none">
                <span>
                  Manuscript Refinement (Scientific Editing & Language
                  Polishing)
                </span>
                <span className="transition-transform duration-200 group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <div className="p-4 pt-0 text-sm text-slate-600 border-t border-slate-100">
                Polishing language, grammar, and scientific terminology across
                revised sections.
              </div>
            </details>

            <details className="group border border-slate-300 rounded-sm bg-white overflow-hidden">
              <summary className="flex justify-between items-center p-4 cursor-pointer font-semibold text-[#083b3a] list-none select-none">
                <span>End-to-End Support</span>
                <span className="transition-transform duration-200 group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <div className="p-4 pt-0 text-sm text-slate-600 border-t border-slate-100">
                Full guidance until final article submission and editorial
                decision.
              </div>
            </details>
          </div>

          {/* Side Image Column */}
          <div className="lg:col-span-5 relative w-full h-[320px] rounded-sm overflow-hidden shadow-sm">
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
            href="/publication-support/responding-to-reviewers"
            className="text-cyan-700 underline font-medium"
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
         <GetFreeQuoteButton/>
        </div>
      </section>

      {/* Process Bar Banner */}
      <section className="mb-14">
        <details className="group bg-[#083b3a] text-white rounded-sm overflow-hidden">
          <summary className="flex justify-between items-center p-4 cursor-pointer font-bold text-lg select-none">
            <span>How do our experts address the reviewer comments?</span>
            <span className="text-xl transition-transform duration-200 group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="p-4 border-t border-[#0d5250] text-sm text-slate-200 leading-relaxed">
            Our experts systematically categorize reviewer feedback, formulate
            point-by-point rebuttals, perform required editorial or statistical
            revisions, and format the manuscript to meet journal standards.
          </div>
        </details>
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
            className="text-cyan-700 underline font-medium"
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

        {/* Grid Category 1 */}
        <div className="mb-8">
          <h4 className="text-xl font-bold text-[#083b3a] mb-4">
            Core Research & Institutional Audience
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {CORE_AUDIENCE.map((item) => (
              <InteractiveCard
                key={item.id}
                item={item}
                isOpen={openCardId === item.id}
                onToggle={() => toggleCard(item.id)}
              />
            ))}
          </div>
        </div>

        {/* Grid Category 2 */}
        <div className="mb-8">
          <h4 className="text-xl font-bold text-[#083b3a] mb-4">
            Specialized and Professional Audience
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {SPECIALIZED_AUDIENCE.map((item) => (
              <InteractiveCard
                key={item.id}
                item={item}
                isOpen={openCardId === item.id}
                onToggle={() => toggleCard(item.id)}
              />
            ))}
          </div>
        </div>

        {/* Grid Category 3 */}
        <div>
          <h4 className="text-xl font-bold text-[#083b3a] mb-4">
            Industry and Institutional Partners (B2B)
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {INDUSTRY_AUDIENCE.map((item) => (
              <InteractiveCard
                key={item.id}
                item={item}
                isOpen={openCardId === item.id}
                onToggle={() => toggleCard(item.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// Sub-Component for Interactive Card with Openable Description
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
    <div className="bg-[#f0faf7] border border-emerald-100 rounded-sm overflow-hidden flex flex-col transition-all">
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
          className={`text-slate-600 font-semibold text-lg ml-2 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-45 text-red-600" : ""
          }`}
        >
          +
        </span>
      </button>

      {/* Content revealed below when clicking the '+' button */}
      {isOpen && (
        <div className="px-4 pb-4 pt-1 text-xs text-slate-600 border-t border-emerald-200/60 bg-white leading-relaxed animate-fadeIn">
          {item.description}
        </div>
      )}
    </div>
  );
}
