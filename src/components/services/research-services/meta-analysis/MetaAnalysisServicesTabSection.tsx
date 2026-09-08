"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface TabData {
  id: string;
  label: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  content: React.ReactNode;
}

const servicesData: TabData[] = [
  {
    id: "meta-analysis-guidelines-compliance",
    label: "Meta-Analysis Guidelines Compliance",
    title: "Meta-Analysis Guidelines Compliance",
    imageSrc:
      "/images/research-services/meta-analysis/Meta-Analysis-Guidelines-Compliance.png",
    imageAlt: "Meta-Analysis Guidelines Compliance",
    content: (
      <p className="my-4 text-base leading-relaxed text-gray-700">
        Our scientific and medical experts craft your meta-analyses, adhering to specific reporting guidelines such as the MARS and PRISMA, along with clear and upfront potential personal or financial conflicts of interest (COIs), ensuring precision and relevance. We also utilize guidelines specific to the studies, for instance, to report{" "}
        <Link className="text-blue-600 no-underline hover:no-underline" href="/services/research-services/meta-analysis/meta-analysis-services-prisma-2020/">
          RCT
        </Link>{" "}
        studies, Pubrica applies QUORUM, and for observational studies, the MOOSE
      </p>
    ),
  },
  {
    id: "structured-reporting",
    label: "Structured Reporting",
    title: "Structured Reporting",
    imageSrc:
      "/images/research-services/meta-analysis/Structured-Reporting.png",
    imageAlt: "Structured Reporting",
    content: (
      <p className="my-4 text-base leading-relaxed text-gray-700">
        We meticulously follow the journal-specified structure, covering keywords, utilizing different databases (CINAHL, PsycINFO) and extracting key data summary (including author, year, details of included studies, DOIs, or PubMed IDs, among others), and analysing quality of the included studies using standard tools specific to the studies (e.g., the JADA scale for RCT, the Newcastle-Ottawa Scale for non-randomized studies, QUADAS-2 for the quality assessment of diagnostic accuracy studies. Background, material, and methods, results, and discussion with tables, summary of the gap analysis, discussion, and conclusion, including limitations and future directions, along with a supplementary table.
      </p>
    ),
  },
  {
    id: "documentation-templates",
    label: "Documentation Templates",
    title: "Documentation Templates",
    imageSrc:
      "/images/research-services/meta-analysis/Documentation-Templates-1.png",
    imageAlt: "Documentation Templates and Study Protocols",
    content: (
      <p className="my-4 text-base leading-relaxed text-gray-700">
        Preparation of essential documentation including explanation for effect size, odds ratio, relative risk, fixed-effects model, random-effects model, forest plot, funnel plot, confidence interval, clarifying study objectives, study population, electronic database utilized inclusion and exclusion criteria, identification/locating subjects, screen and evaluation, data extraction, data analyses (Python or R or Cochrane RevMan, OpenMetaAnalyst, NetworkAnalyst, JASP, MetaGenyo, EpiSheet, GWAR, GWAMA, METAL), reporting and interpretation, referencing, and formatting, in line with review article journal guidelines and checklists.
      </p>
    ),
  },
  {
    id: "enhancement-services",
    label: "Enhancement Services",
    title: "Enhancement Services",
    imageSrc:
      "/images/research-services/meta-analysis/Enhancement-Services-1.png",
    imageAlt: "Enhancement Services and Research Editing",
    content: (
      <p className="my-4 text-base leading-relaxed text-gray-700">
        Assistance with sourcing of literature, editing review, and characterizing the evidence to enrich your meta-analyses review report.
      </p>
    ),
  },
  {
    id: "publication-support-services",
    label: "Publication Support Services",
    title: "Publication Support Services",
    imageSrc:
      "/images/research-services/meta-analysis/Publication-Support-Services.png",
    imageAlt: "Publication Support and Journal Advisory Services",
    content: (
      <p className="my-4 text-base leading-relaxed text-gray-700">
        Comprehensive support encompassing{" "}
        <Link
          href="/services/publication-support/journal-selection"
          className="text-blue-600 no-underline hover:no-underline"
        >
          journal selection
        </Link>
        , submission process, cover letter framing, resubmission, follow-up with editorial teams, and support up to the point of publication.
      </p>
    ),
  },
  {
    id: "plagiarism-analysis",
    label: "Plagiarism Analysis",
    title: "Plagiarism Analysis",
    imageSrc:
      "/images/research-services/meta-analysis/Plagiarism-Analysis.png",
    imageAlt: "Plagiarism Analysis",
    content: (
      <p className="my-4 text-base leading-relaxed text-gray-700">
        Detailed{" "}
        <Link
          href="/services/publication-support/plagiarism-services"
          className="text-blue-600 no-underline hover:no-underline"
        >
          plagiarism
        </Link>{" "}
        reports identifying sources and references, ensuring the high quality and
        originality of the article being written.
      </p>
    ),
  },
  {
    id: "dedicated-project-coordination",
    label: "Dedicated Project Coordination",
    title: "Dedicated Project Coordination",
    imageSrc:
      "/images/research-services/meta-analysis/Dedicated-Project-Coordination-1.png",
    imageAlt: "Dedicated Project Coordination Team",
    content: (
      <p className="my-4 text-base leading-relaxed text-gray-700">
        A committed project coordinator to assist with all queries related to
        your report, providing seamless and personalized support.
      </p>
    ),
  },
];

export default function MetaAnalysisServicesTabSection() {
  const [activeTabId, setActiveTabId] = useState<string>(
    "meta-analysis-guidelines-compliance"
  );

  const activeTab =
    servicesData.find((tab) => tab.id === activeTabId) || servicesData[0];

  return (
    <section
      aria-labelledby="services-section-heading"
      className="w-full max-w-[1200px] mx-auto px-4 py-6 md:px-5 md:py-10 font-sans box-border"
    >
      {/* Top Heading Section */}
      <div className="text-left mb-6 md:mb-8">
        <h2
          id="services-section-heading"
          className="text-2xl md:text-3xl font-bold text-[#0e3838] mb-3 md:mb-4 leading-snug"
        >
          Our Comprehensive Meta-Analysis: Identification, Reanalyses, and Analysis Services & Solutions
        </h2>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          Pubrica’s advanced meta-analysis services provide specialized support to researchers and clinicians, ensuring your research meets the medical publication standards of various journals.
        </p>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 md:gap-8 items-start">
        {/* Navigation Sidebar */}
        <nav aria-label="Services Navigation">
          <ul className="list-none m-0 p-0 flex md:flex-col overflow-x-auto md:overflow-x-visible whitespace-nowrap md:whitespace-normal gap-2 md:gap-0 scrollbar-none md:border-t md:border-gray-200 pb-2 md:pb-0">
            {servicesData.map((tab) => {
              const isActive = tab.id === activeTabId;

              return (
                <li
                  key={tab.id}
                  className="shrink-0 md:border-b md:border-gray-200"
                >
                  <button
                    type="button"
                    onClick={() => setActiveTabId(tab.id)}
                    className={`text-left w-auto md:w-full px-4 py-2.5 md:px-[18px] md:py-[14px] text-xs md:text-sm transition-all duration-200 rounded-full md:rounded-none border md:border-none ${isActive
                        ? "bg-[#0e3838] text-white border-[#0e3838] md:bg-teal-50/60 md:text-[#0e3838] md:font-bold md:border-l-4 md:border-l-[#0e3838] md:-ml-[1px]"
                        : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200 md:bg-transparent md:hover:bg-gray-50 md:text-gray-600 md:font-medium md:border-l-4 md:border-l-transparent"
                      }`}
                  >
                    {tab.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Tab Content Panel */}
        <div className="bg-white p-4 md:p-0 rounded-lg md:rounded-none border border-gray-100 md:border-none shadow-sm md:shadow-none">
          {/* Active Image */}
          <div className="relative w-full aspect-[16/9] md:h-[220px] rounded overflow-hidden bg-gray-50 p-2 md:p-0 border border-gray-100 md:border-none">
            <Image
              src={activeTab.imageSrc}
              alt={activeTab.imageAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-contain md:object-cover"
            />
          </div>

          {/* Active Text Block */}
          <div className="pt-5 md:pt-6">
            <h3 className="text-lg md:text-2xl font-bold text-[#0e3838] mb-3 md:mb-4">
              {activeTab.title}
            </h3>

            {activeTab.content}

            {/* CTA Button Centered on Mobile */}
            <div className="mt-6 md:mt-7 text-center md:text-left">
              <Link
                href="/order-now"
                className="inline-block w-full sm:w-auto bg-[#0f3433] hover:bg-[#0b2726] text-white font-bold text-sm tracking-wider px-8 py-3.5 rounded-sm transition-colors duration-200 text-center"
              >
                REQUEST A QUOTE
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Description */}
      <p className="mt-8 md:mt-9 text-sm md:text-base leading-relaxed text-gray-700">
        Our service offers a detailed and meticulous approach to creating
        meta-analysis. We guide you through every step, from guiding on
        identifying research questions, MeSH terms, and inclusion and exclusion
        criteria setting, analyses using JBI SUMARI, MedCalc, StatsDirect,
        MetaXL, STATA, and R Packages, and writing a review to the final draft,
        ensuring accuracy and adherence to the highest academic standards. Our
        expertise extends to incorporating relevant study data, culminating in a
        polished, publication-ready literature review report.
      </p>
    </section>
  );
}