"use client";

import React, { useEffect, useState } from "react";
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
    id: "meta-analysis guidelines compliance",
    label: "Meta-Analysis Guidelines Compliance",
    title: "Meta-Analysis Guidelines Compliance",
    imageSrc:
      "/images/research-services/meta-analysis/Meta-Analysis-Guidelines-Compliance.png",
    imageAlt: "Meta-Analysis Guidelines Compliance",
    content: (
      <p style={{ margin: "16px 0", lineHeight: "1.7", color: "#374151" }}>
        A committed project coordinator to assist with all queries related to
        your report, providing seamless and personalized support.
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
      <p style={{ margin: "16px 0", lineHeight: "1.7", color: "#374151" }}>
        We meticulously follow the journal-specified structure, covering
        keywords, utilizing different databases (CINAHL, PsycINFO) and
        extracting key data summary (including author, year, details of included
        studies, DOIs, or PubMed IDs, among others), and analysing quality of
        the included studies using standard tools specific to the studies (e.g.,
        the JADA scale for RCT, the Newcastle-Ottawa Scale for non-randomized
        studies, QUADAS-2 for the quality assessment of diagnostic accuracy
        studies). Background, material, and methods, results, and discussion
        with tables, summary of the gap analysis, discussion, and conclusion,
        including limitations and future directions, along with a supplementary
        table.
      </p>
    ),
  },
  {
    id: "data-extraction",
    label: "Data Extraction & Analysis",
    title: "Data Extraction & Analysis",
    imageSrc:
      "/images/research-services/systematic-review/Data-Extraction-Analysis.png",
    imageAlt: "Data Extraction and Analysis Charts",
    content: (
      <ul
        style={{
          paddingLeft: "20px",
          margin: "16px 0",
          lineHeight: "1.7",
          color: "#374151",
        }}
      >
        <li style={{ marginBottom: "12px" }}>
          <strong>Structured Data Extraction</strong> – Use standardized
          templates for consistent, high-quality{" "}
          <Link
            href="/services/medical-data-collection"
            style={{ color: "#2563eb", textDecoration: "underline" }}
          >
            systematic review data collection support
          </Link>
          .
        </li>
        <li style={{ marginBottom: "12px" }}>
          <strong>Risk of Bias Assessment</strong> – Apply Cochrane Risk of Bias
          Tool, Newcastle-Ottawa Scale (NOS), or JBI Critical Appraisal Tool;
          prepare detailed bias tables for appendices.
        </li>
        <li style={{ marginBottom: "12px" }}>
          <strong>Data Analysis &amp; Synthesis</strong> – Quantitative,
          qualitative, and mixed-method meta-analysis with presentation-ready
          tables, charts, and figures.
        </li>
      </ul>
    ),
  },
  {
    id: "writing-formatting",
    label: "Writing & Formatting",
    title: "Writing & Formatting",
    imageSrc:
      "/images/research-services/systematic-review/Writing-Formatting.png",
    imageAlt: "Writing and Formatting Academic Journal Manuscripts",
    content: (
      <ul
        style={{
          paddingLeft: "20px",
          margin: "16px 0",
          lineHeight: "1.7",
          color: "#374151",
        }}
      >
        <li style={{ marginBottom: "12px" }}>
          <strong>Full Manuscript Development</strong> – Write the introduction,
          methodology, results, discussion, and conclusion in compliance with
          the target journal's specifications.
        </li>
        <li style={{ marginBottom: "12px" }}>
          <strong>Abstract Preparation</strong> – Develop PRISMA 2020-compliant
          abstracts including objectives, methods, results, and conclusions.
        </li>
        <li style={{ marginBottom: "12px" }}>
          <strong>Referencing &amp; Citation Management</strong> – Accurate
          referencing in APA, AMA, or journal-specific formats.
        </li>
        <li style={{ marginBottom: "12px" }}>
          <strong>Formatting</strong> – Align the manuscript with the target
          journal's author guidelines.
        </li>
      </ul>
    ),
  },
  {
    id: "publication-support",
    label: "Publication Support",
    title: "Publication Support",
    imageSrc:
      "/images/research-services/meta-analysis/Publication-Support-Services.png",
    imageAlt: "Publication Support and Journal Advisory Services",
    content: (
      <ul
        style={{
          paddingLeft: "20px",
          margin: "16px 0",
          lineHeight: "1.7",
          color: "#374151",
        }}
      >
        <li style={{ marginBottom: "12px" }}>
          <strong>Journal Selection</strong> – Recommend suitable high-impact
          journals for your topic.
        </li>
        <li style={{ marginBottom: "12px" }}>
          <strong>Pre-Submission Peer Review</strong> – Internal expert review
          to ensure methodological and editorial readiness.
        </li>
        <li style={{ marginBottom: "12px" }}>
          <strong>Journal Submission</strong> – End-to-End Submission Assistance
          – From cover letter preparation to follow-up with editorial teams
          until acceptance.
        </li>
        <li style={{ marginBottom: "12px" }}>
          <strong>Response to Reviewer</strong> – Comments addressing your
          submitted systematic review manuscript, resubmission of your
          manuscript, follow-up with editorial teams, and support up to the
          point of publication.
        </li>
      </ul>
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
      <p style={{ margin: "16px 0", lineHeight: "1.7", color: "#374151" }}>
        Preparation of essential documentation including explanation for effect
        size, odds ratio, relative risk, fixed-effects model, random-effects
        model, forest plot, funnel plot, confidence interval, clarifying study
        objectives, study population, electronic database utilized inclusion and
        exclusion criteria, identification/locating subjects, screen and
        evaluation, data extraction, data analyses (Python or R or Cochrane
        RevMan, OpenMetaAnalyst, NetworkAnalyst, JASP, MetaGenyo, EpiSheet,
        GWAR, GWAMA, METAL), reporting and interpretation, referencing, and
        formatting, in line with review article journal guidelines and
        checklists.
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
      <p style={{ margin: "16px 0", lineHeight: "1.7", color: "#374151" }}>
        Comprehensive support encompassing journal selection, submission
        process, cover letter framing, resubmission, follow-up with editorial
        teams, and support up to the point of publication.
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
      <p style={{ margin: "16px 0", lineHeight: "1.7", color: "#374151" }}>
        Detailed plagiarism reports identifying sources and references, ensuring
        the high quality and originality of the article being written.
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
      <p style={{ margin: "16px 0", lineHeight: "1.7", color: "#374151" }}>
        A committed project coordinator to assist with all queries related to
        your report, providing seamless and personalized support.
      </p>
    ),
  },
];

export default function MetaAnalysisServicesTabSection() {
  const [activeTabId, setActiveTabId] = useState<string>(
    "meta-analysis guidelines compliance",
  );
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const activeTab =
    servicesData.find((tab) => tab.id === activeTabId) || servicesData[0];

  return (
    <section
      aria-labelledby="services-section-heading"
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: isMobile ? "24px 16px" : "40px 20px",
        fontFamily: "Arial, sans-serif",
        boxSizing: "border-box",
      }}
    >
      {/* Heading */}
      <div style={{ textAlign: "left", marginBottom: "32px" }}>
        <h2
          id="services-section-heading"
          style={{
            fontSize: isMobile ? "1.5rem" : "2rem",
            fontWeight: 700,
            color: "#0e3838",
            marginBottom: "16px",
            lineHeight: 1.3,
          }}
        >
          Our Comprehensive Systematic Review Writing &amp; Rewriting Services –
          Methodology &amp; Support
        </h2>
        <p
          style={{
            fontSize: isMobile ? "0.95rem" : "1rem",
            color: "#374151",
            lineHeight: 1.7,
          }}
        >
          Pubrica provides end-to-end{" "}
          <Link
            href="/services/research-services/systematic-review"
            style={{
              color: "#2563eb",
              textDecoration: "underline",
            }}
          >
            systematic review writing services
          </Link>{" "}
          for researchers and clinicians, ensuring compliance with the{" "}
          <a
            href="https://www.prisma-statement.org/prisma-2020-checklist"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#2563eb",
              textDecoration: "underline",
            }}
          >
            PRISMA checklist 2020
          </a>
          , Cochrane guidelines, and journal specifications. Our medical and
          scientific professionals provide publication-ready manuscripts with
          the most rigorous methodology and evidence, including full project
          management.
        </p>
      </div>

      {/* Layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "300px 1fr",
          gap: "30px",
          alignItems: "start",
        }}
      >
        {/* Navigation */}
        <nav aria-label="Services Navigation">
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: isMobile ? "row" : "column",
              overflowX: isMobile ? "auto" : "visible",
              whiteSpace: "nowrap",
              gap: "8px",
              scrollbarWidth: "none",
            }}
          >
            {servicesData.map((tab) => {
              const isActive = tab.id === activeTabId;

              return (
                <li key={tab.id} style={{ flexShrink: 0 }}>
                  <button
                    type="button"
                    onClick={() => setActiveTabId(tab.id)}
                    style={{
                      minWidth: isMobile ? "220px" : "100%",
                      width: isMobile ? "auto" : "100%",
                      textAlign: "left",
                      padding: isMobile ? "12px 16px" : "14px 18px",
                      fontSize: isMobile ? "0.9rem" : "0.95rem",
                      fontWeight: isActive ? "700" : "500",
                      color: isActive ? "#0e3838" : "#374151",
                      backgroundColor: isActive ? "#ffffff" : "#f9fafb",
                      border: isActive
                        ? "2px solid #0e3838"
                        : "1px solid #e5e7eb",
                      borderRadius: "4px",
                      marginBottom: isMobile ? 0 : "8px",
                      cursor: "pointer",
                    }}
                  >
                    {tab.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Content */}
        <div>
          {/* Image */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: isMobile ? "180px" : "220px",
              borderRadius: "8px",
              overflow: "hidden",
              background: "#f3f4f6",
            }}
          >
            <Image
              src={activeTab.imageSrc}
              alt={activeTab.imageAlt}
              fill
              priority
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </div>

          {/* Body */}
          <div style={{ paddingTop: "24px" }}>
            <h3
              style={{
                fontSize: isMobile ? "1.3rem" : "1.5rem",
                fontWeight: 700,
                color: "#000",
                marginBottom: "16px",
              }}
            >
              {activeTab.title}
            </h3>

            {activeTab.content}

            <div
              style={{
                marginTop: "28px",
              }}
            >
              <Link
                href="/order-now"
                style={{
                  display: "inline-block",
                  background: "#0e3838",
                  color: "#fff",
                  padding: isMobile ? "12px 20px" : "12px 24px",
                  borderRadius: "6px",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                }}
              >
                REQUEST A QUOTE
              </Link>
            </div>
          </div>
        </div>
      </div>

      <p
        style={{
          marginTop: "35px",
          fontSize: isMobile ? "0.95rem" : "1rem",
          lineHeight: "1.8",
          color: "#374151",
        }}
      >
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
