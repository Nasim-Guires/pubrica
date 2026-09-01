"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ReviewTypeItem {
  id: string;
  title: string;
  description: React.ReactNode;
}

const leftColumnItems: ReviewTypeItem[] = [
  {
    id: "state-of-the-art",
    title: "State of the Art Review",
    description:
      "This review offers a critical and current perspective on the most advanced developments in a specific research area. It highlights cutting-edge trends, technologies, and gaps needing further exploration.",
  },
  {
    id: "narrative-literature-review",
    title: "Narrative Literature Review",
    description:
      "This review provides a descriptive and interpretive summary of the literature on a broad topic. It is flexible in scope and useful for understanding historical development, theoretical context, or scholarly debates.",
  },
  {
    id: "scoping-review",
    title: "Scoping Review",
    description:
      "A scoping review maps the existing literature on a specific topic or research area. It identifies key concepts, knowledge gaps, and types of evidence available without assessing study quality",
  },
  {
    id: "cochrane-reviews",
    title: "Cochrane Reviews",
    description:
      "A kind of systematic review that is ideal for creating reliable information produced under strict adherence",
  },
  {
    id: "rapid-reviews",
    title: "Rapid Reviews",
    description:
      "Conducted in a shorter timeframe. Applied for creating timely evidence in response to urgent decision-making healthcare policy or practice needs. This method perfectly balances quality and deadline.",
  },
  {
    id: "umbrella-reviews",
    title: "Umbrella Reviews",
    description:
      "Summary of the results of previous systematic reviews that provides a general overview of the evidence on a particular subject or topic.",
  },
  {
    id: "meta-analysis",
    title: "Meta Analysis",
    description:
      "Integrating and interpreting qualitative research results to provide new understandings, hypotheses, or insights beyond the findings of individual studies",
  },
  {
    id: "integration-review",
    title: "Integration Review",
    description:
      "An integration review synthesizes past empirical and theoretical literature to provide a holistic overview of a topic. It identifies patterns, contradictions, and emerging themes across diverse studies.",
  },
];

const rightColumnItems: ReviewTypeItem[] = [
  {
    id: "conceptual-review",
    title: "Conceptual Review",
    description:
      "A conceptual review explores key theories, models, and frameworks that shape a field of study. It aims to refine existing concepts or propose new theoretical directions.",
  },
  {
    id: "expert-review",
    title: "Expert Review",
    description:
      "Conducted by subject matter experts, this review evaluates literature through a highly informed lens. It emphasizes accuracy, depth, and practical insights grounded in extensive field knowledge.",
  },
  {
    id: "scholarly-review",
    title: "Scholarly Review",
    description: (
      <>
        A scholarly review critically assesses peer-reviewed literature with an
        academic approach. It ensures methodological rigor and scholarly depth
        suitable for{" "}
        <Link
          href="/insights/patient-safety-culture-among-operating-theatre-nurses-in-operating-room/"
          className="text-blue-600 no-underline hover:no-underline"
        >
          academic writing services
        </Link>
        , publication, or thesis support.
      </>
    ),
  },
  {
    id: "research-review",
    title: "Research Review",
    description:
      "This type examines empirical studies to evaluate research designs, outcomes, and quality. It helps identify methodological strengths, limitations, and evidence gaps in existing research.",
  },
  {
    id: "regulatory-submissions",
    title: "Literature Review for Regulatory Submissions",
    description:
      "This review compiles and evaluates scientific literature required for submissions to regulatory authorities. It ensures compliance, supports safety and efficacy claims, and strengthens the documentation process.",
  },
  {
    id: "targeted-literature-review",
    title: "Targeted Literature Review (TLR)",
    description:
      "A Targeted Literature Review focuses on a narrowly defined research question or population. It is often used in clinical or policy settings to gather relevant data quickly and efficiently.",
  },
  {
    id: "systematic-literature-review",
    title: "Systematic Literature Review (SLR)",
    description:
      "A Systematic Literature Review uses a structured, predefined protocol to identify, appraise, and synthesize all relevant studies on a specific topic. It ensures transparency, reproducibility, and minimizes bias in summarizing existing evidence.",
  },
];

export default function LiteratureReviewTypesSection() {
  // Track open state separately for left and right column accordions
  const [openLeftId, setOpenLeftId] = useState<string | null>(
    "state-of-the-art",
  );
  const [openRightId, setOpenRightId] = useState<string | null>(null);

  const toggleLeft = (id: string) => {
    setOpenLeftId((prev) => (prev === id ? null : id));
  };

  const toggleRight = (id: string) => {
    setOpenRightId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      aria-labelledby="types-review-heading"
      className="w-full bg-slate-50 py-6 sm:py-7 px-4 sm:px-6 lg:px-8 text-slate-800"
    >
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <header className="space-y-3">
          <h2
            id="types-review-heading"
            className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight"
          >
            Types of Literature Review That We Offer
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-5xl">
            At Pubrica, we provide a wide range of{" "}
            <Link
              href="/academy/literature-review/importance-of-literature-review-in-research/"
              className="text-blue-600 font-medium no-underline hover:no-underline"
            >
              literature review service
            </Link>{" "}
            and{" "}
            <Link
              href="/services/research-services/literature-review-and-gap/literature-review-and-gap-literature-review-support-chronological-vs-thematic/"
              className="text-blue-600 font-medium no-underline hover:no-underline"
            >
              research gap analysis service
            </Link>{" "}
            formats tailored to meet the unique objectives of researchers,
            clinicians, and academic writers. Our experts are skilled in
            producing both qualitative and quantitative reviews across multiple
            domains.
          </p>
        </header>

        {/* 3-Column Grid: Left Accordions | Center Image | Right Accordions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Accordion Column */}
          <div className="lg:col-span-4 space-y-2">
            {leftColumnItems.map((item) => {
              const isOpen = openLeftId === item.id;
              return (
                <div key={item.id} className="border-b border-slate-300">
                  <button
                    type="button"
                    onClick={() => toggleLeft(item.id)}
                    aria-expanded={isOpen}
                    className="w-full py-3 text-left flex items-center justify-between gap-3 text-slate-900 hover:text-slate-700 transition-colors focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-bold flex items-center gap-2">
                      <span className="text-slate-700 font-semibold text-lg select-none">
                        {isOpen ? "−" : "+"}
                      </span>
                      {item.title}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pb-4 pt-1 px-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Center Image Column */}
          <div className="lg:col-span-4 flex justify-center py-4 lg:py-0">
            <div className="relative w-full max-w-sm h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <Image
                src="/images/research-services/literature-review-and-gap/Types-of-Literature-Review-That-We-Offer.png"
                alt="Open academic books stacked with eyeglasses on top"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* Right Accordion Column */}
          <div className="lg:col-span-4 space-y-2">
            {rightColumnItems.map((item) => {
              const isOpen = openRightId === item.id;
              return (
                <div key={item.id} className="border-b border-slate-300">
                  <button
                    type="button"
                    onClick={() => toggleRight(item.id)}
                    aria-expanded={isOpen}
                    className="w-full py-3 text-left flex items-center justify-between gap-3 text-slate-900 hover:text-slate-700 transition-colors focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-bold flex items-center gap-2">
                      <span className="text-slate-700 font-semibold text-lg select-none">
                        {isOpen ? "−" : "+"}
                      </span>
                      {item.title}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pb-4 pt-1 px-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
