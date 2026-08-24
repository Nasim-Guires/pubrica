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
    id: "planning-protocol",
    label: "Planning & Protocol Development",
    title: "Planning & Protocol Development",
    imageSrc:
      "/images/research-services/systematic-review/Planning-Protocol-Development.png",
    imageAlt: "Protocols Folder for Systematic Review Planning",
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
          <strong>Research Gap &amp; Novelty Analysis</strong> – Identify
          missing or inadequate evidence, assess novelty, and frame clear
          research objectives.
        </li>
        <li style={{ marginBottom: "12px" }}>
          <strong>Protocol Writing</strong> – Develop systematic review
          protocols using PICO or SPIDER frameworks to ensure precision and
          relevance.
        </li>
        <li style={{ marginBottom: "12px" }}>
          <strong>PROSPERO Registration</strong> – Prepare and submit protocols
          for registration, ensuring transparency and alignment with global
          reporting standards.
        </li>
      </ul>
    ),
  },
  {
    id: "literature-search",
    label: "Literature Search & Data Sourcing",
    title: "Literature Search & Data Sourcing",
    imageSrc:
      "/images/research-services/systematic-review/Literature-Search-Data-Sourcing.png",
    imageAlt: "Literature Search and Data Sourcing Analysis",
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
          <strong>Database Search Strategy Development</strong> – Customized
          keyword combinations, Boolean operators, and filters for targeted
          searches.
        </li>
        <li style={{ marginBottom: "12px" }}>
          <strong>Comprehensive Database Coverage</strong> – MEDLINE, EMBASE,
          Cochrane Library, CINAHL, PubMed, CAB Abstracts, BioMed Central,
          HTSAT, OCLC, Social Service Abstracts, AIDS and Cancer Research, and
          more.
        </li>
        <li style={{ marginBottom: "12px" }}>
          <strong>Screening Tools</strong> – Covidence, Rayyan, EndNote, Zotero
          for title/abstract/full-text screening and management.
        </li>
      </ul>
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
            href="/services/research-services/data-collection"
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
      "/images/research-services/systematic-review/Publication-Support.png",
    imageAlt: "Publication Support and Journal Advisory Services",
    content: (
      <p style={{ margin: "16px 0", lineHeight: "1.7", color: "#374151" }}>
        <Link
          href="/services/publication-support/journal-selection"
          style={{ color: "#2563eb", textDecoration: "none", fontWeight: "700" }}
        >
          Journal Selection
        </Link>{" "}
        – Recommend suitable high-impact journals for your topic.<br /><br />
        <Link
          href="/services/publication-support/peer-review-pre-submission"
          style={{ color: "#2563eb", textDecoration: "none", fontWeight: "700" }}
        >
          Pre-Submission Peer Review
        </Link>{" "}
        – Internal expert review to ensure methodological and editorial readiness.<br /><br />
        <Link
          href="/services/publication-support/journal-submission"
          style={{ color: "#2563eb", textDecoration: "none", fontWeight: "700" }}
        >
          Journal Submission
        </Link>{" "}
        – End-to-End Submission Assistance – From cover letter preparation to follow-up with editorial teams until acceptance.<br /><br />
        <Link
          href="/services/publication-support/responding-to-reviewers"
          style={{ color: "#2563eb", textDecoration: "none", fontWeight: "700" }}
        >
          Response to Reviewer
        </Link>{" "}
        – Comments addressing your submitted systematic review manuscript, resubmission of your manuscript, follow-up with editorial teams, and support up to the point of publication.
      </p>
    ),
  },
  {
    id: "documentation-templates",
    label: "Documentation Templates",
    title: "Documentation Templates",
    imageSrc:
      "/images/research-services/systematic-review/Documentation-Templates.png",
    imageAlt: "Documentation Templates and Study Protocols",
    content: (
      <p style={{ margin: "16px 0", lineHeight: "1.7", color: "#374151" }}>
        Preparation of essential documentation for keyword search, database
        utilization (e.g. AIDS and Cancer Research, BioMed Central, CAB
        Abstracts, Cochrane Library, Cumulative Index to Nursing and Allied
        Health (CINAHL), Evidence-based medicine, Excerpta Medica (EMBASE),
        Health Services/Technology Assessment text (HTSAT), History of Science,
        Technology and Medicine (OCLC), MEDLINE, Social Service Abstracts
        (CSA)), setting up inclusion and exclusion criteria, use Boolean
        Operators, data extraction, assessing the methodological quality and
        risk of bias to ensure reliability (Cochrane risk of bias tool,
        Newcastle-Ottawa Scale (NOS), or Joanna Briggs Institute critical
        appraisal tool), referencing, and formatting, in line with review
        article journal guidelines.
      </p>
    ),
  },
  {
    id: "enhancement-services",
    label: "Enhancement Services",
    title: "Enhancement Services",
    imageSrc:
      "/images/research-services/systematic-review/Enhancement-Services.png",
    imageAlt: "Enhancement Services and Research Editing",
    content: (
      <p style={{ margin: "16px 0", lineHeight: "1.7", color: "#374151" }}>
        We assist with literature sourcing, academic research editing, and the
        development of PRISMA flow diagrams to document study selection. Our
        team enriches your report using{" "}
        <Link
          href="/academy/research-services/literature-review-tips-introduction-discussion-sections"
          style={{ color: "#2563eb", textDecoration: "underline" }}
        >
          literature review services
        </Link>{" "}
        and advanced screening tools like Covidence, Rayyan, EndNote, and
        Zotero.
      </p>
    ),
  },
  {
    id: "quality-integrity-checks",
    label: "Quality & Integrity Checks",
    title: "Quality & Integrity Checks",
    imageSrc:
      "/images/research-services/systematic-review/Quality-Integrity-Checks.png",
    imageAlt: "Quality and Integrity Checks for Systematic Reviews",
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
          <Link
            href="/services/publication-support/plagiarism-services"
            style={{ color: "#2563eb", textDecoration: "none", fontWeight: "700" }}
          >
            Plagiarism &amp; AI Content Analysis
          </Link>{" "}
          – Detailed plagiarism reports ensuring originality and confirming no ChatGPT or
          AI-generated text.
        </li>
        <li style={{ marginBottom: "12px" }}>
          <strong>Proofreading &amp; Editing</strong> – Language refinement for
          grammar, clarity, and style.
        </li>
        <li style={{ marginBottom: "12px" }}>
          <strong>Final Technical Review</strong> – Ensure adherence to all
          PRISMA checklists, methodological requirements, and journal
          guidelines.
        </li>
      </ul>
    ),
  },
  {
    id: "dedicated-project-coordination",
    label: "Dedicated Project Coordination",
    title: "Dedicated Project Coordination",
    imageSrc:
      "/images/research-services/systematic-review/Dedicated-Project-Coordination.png",
    imageAlt: "Dedicated Project Coordination Team",
    content: (
      <p style={{ margin: "16px 0", lineHeight: "1.7", color: "#374151" }}>
        A medical and scientific committed project coordinator to assist with
        all technical queries related to your scientific report, providing
        seamless and personalized support.
      </p>
    ),
  },
];

export default function SystematicReviewServicesTabs() {
  const [activeTabId, setActiveTabId] = useState<string>("planning-protocol");

  const activeTab =
    servicesData.find((tab) => tab.id === activeTabId) || servicesData[0];

  return (
    <section
      aria-labelledby="services-section-heading"
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Top Main Heading & Subtitle */}
      <div style={{ textAlign: "left", marginBottom: "32px" }}>
        <h2
          id="services-section-heading"
          style={{
            fontSize: "2rem",
            fontWeight: "700",
            color: "#0e3838", // Deep teal tone from screenshots
            marginBottom: "16px",
            lineHeight: "1.3",
          }}
        >
          Our Comprehensive Systematic Review Writing &amp; Rewriting Services –
          Methodology &amp; Support
        </h2>
        <p
          style={{
            fontSize: "1rem",
            color: "#374151",
            lineHeight: "1.6",
            margin: 0,
          }}
        >
          Pubrica provides end-to-end{" "}
          <Link
            href="/services/research-services/systematic-review"
            style={{ color: "#2563eb", textDecoration: "underline" }}
          >
            systematic review writing services
          </Link>{" "}
          for researchers and clinicians, ensuring compliance with the{" "}
          <Link
            href="/guidelines/prisma-checklist-2020"
            style={{ color: "#2563eb", textDecoration: "underline" }}
          >
            PRISMA checklist 2020
          </Link>
          , Cochrane guidelines, and journal specifications. Our medical and
          scientific professionals provide publication-ready manuscripts with
          the most rigorous methodology and evidence, including full project
          management.
        </p>
      </div>

      {/* Main Layout: Left Tabs Navigation + Right Active Content */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "300px 1fr",
          gap: "32px",
          alignItems: "start",
        }}
      >
        {/* Left Vertical Navigation Menu */}
        <nav aria-label="Services Navigation">
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {servicesData.map((tab) => {
              const isActive = tab.id === activeTabId;
              return (
                <li key={tab.id}>
                  <button
                    type="button"
                    onClick={() => setActiveTabId(tab.id)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "14px 18px",
                      fontSize: "0.95rem",
                      fontWeight: isActive ? "700" : "500",
                      color: isActive ? "#0e3838" : "#374151",
                      backgroundColor: isActive ? "#ffffff" : "#f9fafb",
                      border: isActive
                        ? "2px solid #0e3838"
                        : "1px solid #e5e7eb",
                      borderRadius: "4px",
                      marginBottom: "8px",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      boxShadow: isActive
                        ? "0 2px 4px rgba(0,0,0,0.05)"
                        : "none",
                    }}
                  >
                    {tab.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Tab Content Display */}
        <div style={{ backgroundColor: "#ffffff", borderRadius: "6px" }}>
          {/* Header Banner Image */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "220px",
              borderRadius: "6px",
              overflow: "hidden",
              backgroundColor: "#f3f4f6",
            }}
          >
            <Image
              src={activeTab.imageSrc}
              alt={activeTab.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          {/* Active Content Body */}
          <div style={{ paddingTop: "24px" }}>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                color: "#000000",
                margin: "0 0 16px 0",
              }}
            >
              {activeTab.title}
            </h3>

            {activeTab.content}

            {/* Request A Quote Button */}
            <div style={{ marginTop: "24px" }}>
              <Link
                href="/request-quote"
                style={{
                  display: "inline-block",
                  backgroundColor: "#0e3838", // Matching dark teal theme button
                  color: "#ffffff",
                  padding: "12px 24px",
                  borderRadius: "4px",
                  fontWeight: "700",
                  fontSize: "0.875rem",
                  letterSpacing: "0.5px",
                  textDecoration: "none",
                  transition: "background-color 0.2s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#072323")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#0e3838")
                }
              >
                REQUEST A QUOTE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
