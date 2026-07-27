"use client";

import { useState } from "react";
import Link from "next/link";

interface ArticleTypeCategory {
  id: string;
  title: string;
  iconSvg: React.ReactNode;
  items: string[];
}

const categories: ArticleTypeCategory[] = [
  {
    id: "physicians",
    title: "For Physicians & Clinicians",
    iconSvg: (
      <svg
        className="w-6 h-6 text-emerald-800"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
    items: [
      "Clinical Audits & Case Series",
      "Prospective and Retrospective Cohort Studies (Cohort Study Manuscript Development)",
      "Diagnostic Accuracy Studies",
      "Treatment Outcome Research",
      "Point-of-Care Clinical Studies",
    ],
  },
  {
    id: "surgeons",
    title: "For Surgeons & Procedural Specialists",
    iconSvg: (
      <svg
        className="w-6 h-6 text-emerald-800"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    items: [
      "Surgical Innovation Studies",
      "Perioperative Outcome Analysis",
      "Technique Comparison Studies (RCTs or Observational-Experimental Study Manuscript Writing)",
      "Minimally Invasive Procedure Reports",
      "Postoperative Complication Analysis",
    ],
  },
  {
    id: "academics",
    title: "For Academic Faculty & Researchers",
    iconSvg: (
      <svg
        className="w-6 h-6 text-emerald-800"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 14l9-5-9-5-9 5 9 5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
      </svg>
    ),
    items: [
      "Investigator-Initiated Research (IIR)",
      "Institution-Based Studies (Cohort/Cross-sectional)",
      "Basic & Translational Research",
      "Mixed-Methods Research",
      "Original Research from Thesis/Dissertation",
    ],
  },
  {
    id: "pharma",
    title: "For Pharma & Biotech Professionals",
    iconSvg: (
      <svg
        className="w-6 h-6 text-emerald-800"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
    items: [
      "Phase I–IV Clinical Trials",
      "Pharmacoeconomic Studies",
      "Post-Marketing Surveillance (PMS)",
      "Real-World Evidence (RWE) Studies",
      "Drug Safety & Pharmacovigilance Reports",
    ],
  },
  {
    id: "public-health",
    title: "For Public Health Experts & Epidemiologists",
    iconSvg: (
      <svg
        className="w-6 h-6 text-emerald-800"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    items: [
      "Disease Surveillance Studies",
      "Community Health Assessments",
      "Behavioral Risk Factor Surveys",
      "Health Policy Impact Studies",
      "Cross-national or Demographic Comparative Research",
    ],
  },
];

export default function ResearchArticleTypesAccordion() {
  // All cards open by default as shown in the layout screenshot
  const [openCards, setOpenCards] = useState<Record<string, boolean>>({
    physicians: true,
    surgeons: true,
    academics: true,
    pharma: true,
    "public-health": true,
  });

  const toggleCard = (id: string) => {
    setOpenCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      aria-labelledby="article-types-heading"
      className="w-full bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 text-slate-800"
    >
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Block */}
        <header className="max-w-4xl space-y-3">
          <h2
            id="article-types-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900"
          >
            Types of Original Research Articles We Support
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            We support a variety of{" "}
            <Link
              href="/services/physician-writing-services/original-research-article"
              className="text-sky-600 hover:underline font-medium"
            >
              original research article writing services
            </Link>
            , including randomized trials, observational studies, epidemiology
            research, and other empirical investigations. Manuscripts adhere to{" "}
            <Link
              href="/guidelines/consort"
              className="text-sky-600 hover:underline"
            >
              CONSORT
            </Link>
            ,{" "}
            <Link
              href="/guidelines/strobe"
              className="text-sky-600 hover:underline"
            >
              STROBE
            </Link>
            ,{" "}
            <Link
              href="/guidelines/prisma"
              className="text-sky-600 hover:underline"
            >
              PRISMA
            </Link>
            , and{" "}
            <Link
              href="/guidelines/arrive"
              className="text-sky-600 hover:underline"
            >
              ARRIVE
            </Link>{" "}
            standards depending on your research domain. Our services also
            include APA, AMA, or MLA formatting for primary research.
          </p>
        </header>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {categories.map((cat) => {
            const isOpen = !!openCards[cat.id];
            return (
              <article
                key={cat.id}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm transition-all duration-200"
              >
                {/* Expand / Collapse Header */}
                <button
                  type="button"
                  onClick={() => toggleCard(cat.id)}
                  aria-expanded={isOpen}
                  className="w-full bg-emerald-50/70 hover:bg-emerald-100/60 p-4 flex items-center justify-between text-left transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-1.5 bg-emerald-100/80 rounded-full flex-shrink-0">
                      {cat.iconSvg}
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Toggle Indicator (+ / -) */}
                  <span className="text-slate-700 font-bold text-xl ml-2 flex-shrink-0 select-none">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Card Collapsible Content */}
                {isOpen && (
                  <div className="p-5 border-t border-slate-100 bg-white">
                    <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
                      {cat.items.map((item, index) => (
                        <li key={index} className="leading-snug">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
