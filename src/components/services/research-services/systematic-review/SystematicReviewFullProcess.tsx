"use client";

import React from "react";
import Link from "next/link";

// Interface for Table Rows
interface TableRowData {
  id: string;
  whatYouProvide: React.ReactNode;
  whatWeProvide: React.ReactNode;
}

// Interface for Compliance Cards
interface ComplianceCardData {
  id: string;
  title: string;
  description: React.ReactNode;
}

const tableRows: TableRowData[] = [
  {
    id: "row-1",
    whatYouProvide: (
      <>
        <strong>Research Questions</strong> – Your original idea, hypotheses, or
        objectives that guide the review.
      </>
    ),
    whatWeProvide: (
      <>
        <strong>Topic Refinement &amp; Protocol Development</strong> – Define
        objectives using PICO or SPIDER frameworks, prepare detailed
        methodology, and support PROSPERO registration.
      </>
    ),
  },
  {
    id: "row-2",
    whatYouProvide: (
      <>
        <strong>Existing Literature</strong> – Instructions on databases to use
        or existing literature you’ve already collected.
      </>
    ),
    whatWeProvide: (
      <>
        <strong>MeSH Terms &amp; Keyword Strategy</strong> – Develop database
        search strategies (PubMed, MEDLINE, EMBASE, Cochrane Library, etc.)
        using Boolean operators.
      </>
    ),
  },
  {
    id: "row-3",
    whatYouProvide: (
      <>
        <strong>Scope of Review</strong> – Boundaries such as subject areas,
        timeframe, study types, and demographics.
      </>
    ),
    whatWeProvide: (
      <>
        <strong>Structured Literature Search &amp; Screening</strong> – Title,
        abstract, and full-text screening using Covidence, Rayyan, EndNote, or
        Zotero.
      </>
    ),
  },
  {
    id: "row-4",
    whatYouProvide: (
      <>
        <strong>Specific Focus Areas</strong> – Themes or subtopics for deeper
        analysis.
      </>
    ),
    whatWeProvide: (
      <>
        <strong>Data Extraction &amp; Critical Appraisal</strong> – Apply
        standardized templates and conduct risk of bias assessments (Cochrane
        RoB, NOS, JBI).
      </>
    ),
  },
  {
    id: "row-5",
    whatYouProvide: (
      <>
        <strong>Preliminary Findings</strong> – Initial patterns observed from
        existing literature.
      </>
    ),
    whatWeProvide: (
      <>
        <strong>Data Synthesis &amp; Statistical Analysis</strong> – Perform
        meta-analysis or network meta-analysis; generate summary of findings
        tables and forest plots.
      </>
    ),
  },
  {
    id: "row-6",
    whatYouProvide: (
      <>
        <strong>Data Sources &amp; Databases Used</strong> – List of sources for
        literature collection.
      </>
    ),
    whatWeProvide: (
      <>
        <strong>PRISMA Flow Diagram &amp; Checklist Compliance</strong> –
        Document study selection and ensure adherence to PRISMA 2020 standards.
      </>
    ),
  },
  {
    id: "row-7",
    whatYouProvide: (
      <>
        <strong>Initial Draft of Systematic Review</strong> – If available, your
        first draft for further refinement.
      </>
    ),
    whatWeProvide: (
      <>
        <strong>Full Manuscript Development</strong> – Write IMRAD sections,
        prepare PRISMA-compliant abstract, and align with target journal format.
      </>
    ),
  },
  {
    id: "row-8",
    whatYouProvide: (
      <>
        <strong>Key Theories &amp; Models</strong> – Foundational concepts
        relevant to your research.
      </>
    ),
    whatWeProvide: (
      <>
        <strong>Identification of Research Gaps &amp; Novelty Check</strong> –
        Highlight missing or inadequate evidence and suggest future research
        directions.
      </>
    ),
  },
  {
    id: "row-9",
    whatYouProvide: null, // Empty cell in screenshot
    whatWeProvide: (
      <>
        <strong>Quality Checks</strong> – Proofreading, plagiarism &amp; AI
        content analysis, and formatting to target journal guidelines.
      </>
    ),
  },
  {
    id: "row-10",
    whatYouProvide: null, // Empty cell in screenshot
    whatWeProvide: (
      <>
        <strong>Pre-Submission Peer Review</strong> – Internal expert review to
        ensure readiness.
      </>
    ),
  },
  {
    id: "row-11",
    whatYouProvide: null, // Empty cell in screenshot
    whatWeProvide: (
      <>
        <strong>Journal Submission &amp; Editorial Support</strong> – Assist
        with submission, cover letter preparation, reviewer comment addressing,
        and resubmissions until acceptance.
      </>
    ),
  },
];

const complianceCards: ComplianceCardData[] = [
  {
    id: "prisma-2020",
    title: "PRISMA 2020 Statement",
    description: (
      <>
        Preferred Reporting Items for{" "}
        <Link
          href="/services/research-services/systematic-review"
          style={{ color: "#2563eb", textDecoration: "underline" }}
        >
          Systematic Reviews
        </Link>{" "}
        and Meta-Analyses, including the PRISMA Abstract Checklist and flow
        diagram standards.
      </>
    ),
  },
  {
    id: "cochrane-handbook",
    title: "Cochrane Handbook for Systematic Reviews",
    description:
      "Rigorous methodology for literature search, selection, bias assessment, and synthesis.",
  },
  {
    id: "prospero-registration",
    title: "PROSPERO Registration",
    description: (
      <>
        International Prospective Register of{" "}
        <Link
          href="/services/research-services/systematic-review"
          style={{ color: "#2563eb", textDecoration: "underline" }}
        >
          Systematic Reviews
        </Link>{" "}
        for protocol transparency.
      </>
    ),
  },
  {
    id: "grade",
    title: "GRADE",
    description:
      "Grading Recommendations Assessment, Development and Evaluation for quality and strength of evidence.",
  },
  {
    id: "icmje",
    title: "ICMJE",
    description:
      "International Committee of Medical Journal Editors' recommendations for ethical and publication standards.",
  },
  {
    id: "jbi-appraisal",
    title: "JBI Critical Appraisal Tools",
    description:
      "Joanna Briggs Institute methodology for qualitative, quantitative, and mixed-method reviews.",
  },
  {
    id: "nos-scale",
    title: "Newcastle–Ottawa Scale (NOS)",
    description:
      "Standardized tool for assessing non-randomized studies in meta-analyses.",
  },
  {
    id: "amstar-2",
    title: "AMSTAR 2",
    description:
      "Measurement tool to assess the methodological quality of systematic reviews.",
  },
  {
    id: "pico-spider",
    title: "PICO / SPIDER Frameworks",
    description: "Structured approach to formulating research questions.",
  },
  {
    id: "moose-guidelines",
    title: "MOOSE Guidelines",
    description:
      "Standards for meta-analyses of observational studies in epidemiology.",
  },
  {
    id: "rob-tools",
    title: "Risk of Bias Tools",
    description:
      "Cochrane RoB tool, ROBINS-I, and other recognized bias assessment frameworks.",
  },
  {
    id: "prisma-scr",
    title: "PRISMA-ScR",
    description: "PRISMA extension for scoping reviews.",
  },
  {
    id: "srdr-repository",
    title: "SRDR (Systematic Review Data Repository)",
    description: "Used for data storage and transparency in some projects.",
  },
];

export default function SystematicReviewFullProcess() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        color: "#111827",
        backgroundColor: "#ffffff",
      }}
    >
      {/* SECTION 1: How to Get Started Table */}
      <section
        style={{
          width: "100%",
          maxWidth: "1150px",
          margin: "0 auto",
          padding: "50px 20px",
        }}
      >
        <h2
          style={{
            fontSize: "1.85rem",
            fontWeight: "700",
            color: "#0f2c3a",
            textAlign: "center",
            marginBottom: "32px",
          }}
        >
          How to Get Started with Our Systematic Review
        </h2>

        {/* Outer Container with Rounded Border & Shadow */}
        <div
          style={{
            border: "1px solid #cbd5e1",
            borderRadius: "10px",
            boxShadow: "0 4px 14px rgba(0, 0, 0, 0.08)",
            overflow: "hidden",
            backgroundColor: "#ffffff",
          }}
        >
          {/* Fixed Header */}
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              backgroundColor: "#0d3b38", // Dark teal header
              color: "#ffffff",
              fontSize: "0.95rem",
              fontWeight: "700",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    width: "42%",
                    padding: "16px 20px",
                    textAlign: "left",
                    borderRight: "1px solid #1a4f4c",
                  }}
                >
                  What You Provide
                </th>
                <th
                  style={{
                    width: "58%",
                    padding: "16px 20px",
                    textAlign: "left",
                  }}
                >
                  What We Provide
                </th>
              </tr>
            </thead>
          </table>

          {/* Scrollable Table Body */}
          <div
            style={{
              maxHeight: "380px",
              overflowY: "auto",
              borderTop: "1px solid #cbd5e1",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.875rem",
                color: "#374151",
              }}
            >
              <tbody>
                {tableRows.map((row) => (
                  <tr
                    key={row.id}
                    style={{
                      borderBottom: "1px solid #cbd5e1",
                    }}
                  >
                    <td
                      style={{
                        width: "42%",
                        padding: "14px 20px",
                        borderRight: "1px solid #cbd5e1",
                        verticalAlign: "top",
                        lineHeight: "1.6",
                        backgroundColor: row.whatYouProvide
                          ? "transparent"
                          : "#fcfcfc",
                      }}
                    >
                      {row.whatYouProvide}
                    </td>
                    <td
                      style={{
                        width: "58%",
                        padding: "14px 20px",
                        verticalAlign: "top",
                        lineHeight: "1.6",
                      }}
                    >
                      {row.whatWeProvide}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 2: Compliance and Guideline Standards */}
      <section
        style={{
          width: "100%",
          backgroundColor: "#ede8f5", // Light lavender/blue background from screenshot
          padding: "60px 20px",
        }}
      >
        <div style={{ maxWidth: "1150px", margin: "0 auto" }}>
          {/* Header */}
          <div style={{ marginBottom: "32px" }}>
            <h2
              style={{
                fontSize: "1.85rem",
                fontWeight: "700",
                color: "#0f2c3a",
                marginBottom: "14px",
              }}
            >
              Our Compliance and Guideline Standards
            </h2>
            <p
              style={{
                fontSize: "0.975rem",
                color: "#374151",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              At Pubrica, we adhere to internationally recognized compliance
              frameworks and methodological standards to ensure that every{" "}
              <Link
                href="/services/research-services/systematic-review"
                style={{ color: "#2563eb", textDecoration: "underline" }}
              >
                systematic review
              </Link>{" "}
              we deliver is credible, reproducible, and transparent. Our process
              is aligned with:
            </p>
          </div>

          {/* 4-Column Grid for Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            {complianceCards.map((card) => (
              <div
                key={card.id}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "8px",
                  padding: "20px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: "700",
                    color: "#000000",
                    marginBottom: "10px",
                    lineHeight: "1.4",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#4b5563",
                    lineHeight: "1.5",
                    margin: 0,
                  }}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
