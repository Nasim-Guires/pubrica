"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ArticleTypeCategory {
  id: string;
  title: string;
  iconSrc: string;
  items: string[];
}

const IMG =
  "/images/physician-writing-services/original-research-article";

const categories: ArticleTypeCategory[] = [
  {
    id: "physicians",
    title: "For Physicians & Clinicians",
    iconSrc: `${IMG}/For-Physicians-Clinicians.png`,
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
    iconSrc: `${IMG}/For-Surgeons-Procedural-Specialists.png`,
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
    iconSrc: `${IMG}/For-Academic-Faculty-Researchers.png`,
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
    iconSrc: `${IMG}/For-Pharma-Biotech-Professionals.png`,
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
    iconSrc: `${IMG}/For-Public-Health-Experts-Epidemiologists.png`,
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
  // All cards set to false by default (closed state)
  const [openCards, setOpenCards] = useState<Record<string, boolean>>({
    physicians: false,
    surgeons: false,
    academics: false,
    pharma: false,
    "public-health": false,
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
      className="w-full bg-slate-50 py-7 px-4 sm:px-6 lg:px-8 text-slate-800"
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
              href="/academy/original-research-article/digital-health-interventions-patient-outcomes/"
              className="text-blue-600"
            >
              original research article writing services
            </Link>
            , including randomized trials, observational studies, epidemiology
            research, and other empirical investigations. Manuscripts adhere to{" "}
            <a
              href="https://legacyfileshare.elsevier.com/promis_misc/CONSORT-2010-Checklist.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              CONSORT
            </a>
            ,{" "}
            <a
              href="https://www.equator-network.org/wp-content/uploads/2015/10/STROBE_checklist_v4_combined.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              STROBE
            </a>
            ,{" "}
            <a
              href="https://www.prisma-statement.org/prisma-2020-checklist"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              PRISMA
            </a>
            , and{" "}
            <a
              href="https://arriveguidelines.org/sites/arrive/files/documents/Author%20Checklist%20-%20Full.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 "
            >
              ARRIVE
            </a>{" "}
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
                    <div className="relative w-8 h-8 bg-emerald-100/80 rounded-full flex-shrink-0 overflow-hidden">
                      <Image
                        src={cat.iconSrc}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="32px"
                      />
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