"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export default function MetaAnalysisTypesAccordion() {
  // First item open by default
  const [openId, setOpenId] = useState<string | null>("classical");

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const accordionData: AccordionItem[] = [
    {
      id: "classical",
      title: "Classical (Frequentist) Meta-Analysis",
      content:
        "Combines effect sizes across studies using fixed-effect or random-effects models, ideal for summarizing clinical trials and intervention effects.",
    },
    {
      id: "bayesian",
      title: "Bayesian Meta-Analysis",
      content: (
        <span>
          Uses{" "}
          <Link
            href="/services/research-services/meta-analysis/introduction-to-bayesian-statistics"
            style={{ color: "#2563eb", textDecoration: "" }}
          >
            Bayesian statistical
          </Link>{" "}
          methods to incorporate prior information and provide probabilistic
          interpretations of effects.
        </span>
      ),
    },
    {
      id: "network",
      title: "Network Meta-Analysis (NMA)",
      content:
        "Allows comparison of multiple interventions simultaneously, even if some comparisons are not directly studied in head-to-head trials.",
    },
    {
      id: "ipd",
      title: "Individual Participant Data (IPD) Meta-Analysis",
      content: (
        <span>
          The{" "}
          <Link
            href="/services/research-services/meta-analysis/individual-participant-data-meta-analysis"
            style={{ color: "#2563eb", textDecoration: "" }}
          >
            Individual Participant Data Meta-Analysis
          </Link>{" "}
          entails the analysis and re-analysis of the individual participant
          data obtained from various studies. It is a method that gives more
          accurate results compared to conventional meta-analyses since it
          enables standardized analysis as well as sub-group analysis.
        </span>
      ),
    },
    {
      id: "diagnostic",
      title: "Diagnostic Test Accuracy Meta-Analysis",
      content:
        "Focuses on combining sensitivity, specificity, and likelihood ratios across diagnostic studies to assess test performance.",
    },
    {
      id: "prognostic",
      title: "Prognostic Meta-Analysis",
      content:
        "Aggregate data on prognostic factors or models across studies to estimate their predictive accuracy in different populations.",
    },
    {
      id: "regression",
      title: "Meta-Regression Analysis",
      content:
        "Explores the impact of study-level characteristics (moderators) on effect sizes to explain heterogeneity among study results.",
    },
    {
      id: "cumulative",
      title: "Cumulative Meta-Analysis",
      content:
        "Updates results over time as new studies are published, showing trends and changes in evidence accumulation.",
    },
    {
      id: "subgroup",
      title: "Subgroup Meta-Analysis",
      content:
        "Analyses specific subgroups within a dataset (e.g., age, sex, region) to detect differential effects.",
    },
    {
      id: "doseresponse",
      title: "Dose–Response Meta-Analysis",
      content:
        "Examines the relationship between the dose of an intervention/exposure and the corresponding effect size across studies.",
    },
    {
      id: "qualitative",
      title: "Qualitative & Mixed-Methods Meta-Synthesis",
      content:
        "Integrates findings from qualitative studies or combines quantitative and qualitative research systematically.",
    },
  ];

  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#ffffff",
        padding: "60px 20px 80px 20px",
        fontFamily: "Arial, Helvetica, sans-serif",
        color: "#111827",
      }}
    >
      <div style={{ maxWidth: "1150px", margin: "0 auto" }}>
        {/* Header Title */}
        <h2
          style={{
            fontSize: "1.85rem",
            fontWeight: "700",
            color: "#0f2c3a",
            marginBottom: "16px",
          }}
        >
          Types of Meta-Analysis That We Offer
        </h2>

        {/* Intro Paragraph */}
        <p
          style={{
            fontSize: "0.95rem",
            color: "#374151",
            lineHeight: "1.6",
            marginBottom: "40px",
            maxWidth: "1050px",
          }}
        >
          At Pubrica, we specialize in{" "}
          <Link
            href="/services/research-services/meta-analysis/meta-analysis-role-evidence-based-research"
            style={{ color: "#2563eb", textDecoration: "" }}
          >
            meta-analysis
          </Link>{" "}
          writing services tailored for academic, clinical, and scientific
          research. Our professional meta-analysis experts deliver comprehensive
          solutions, from data extraction and statistical analysis to
          publication-ready documentation. Whether you need support for grant
          applications or journal submissions, our meta-analysis{" "}
          <Link
            href="/services/publication-support"
            style={{ color: "#2563eb", textDecoration: "" }}
          >
            publication support
          </Link>{" "}
          ensures your work meets the highest standards.
        </p>

        {/* 2-Column Grid: Visual Artwork + Accordion List */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "40px",
            alignItems: "start",
          }}
        >
          {/* Left Column: Overlapping Images Graphic */}
          <div
            style={{
              position: "relative",
              width: "100%",
              minHeight: "380px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Background Light Circle Graphic Accent */}
            <div
              style={{
                position: "absolute",
                width: "280px",
                height: "280px",
                borderRadius: "50%",
                backgroundColor: "#f0f4f8",
                top: "10%",
                left: "15%",
                zIndex: 0,
              }}
            />

            {/* Top-Left Card (Chart / Data Analysis Image) */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                width: "280px",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                marginRight: "60px",
                marginBottom: "60px",
              }}
            >
              <Image
                src="/images/research-services/meta-analysis/Types-of-Meta-Analysis-That-We-Offer.png"
                alt="Types of meta-analysis that we offer"
                width={280}
                height={200}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </div>

          {/* Right Column: Accordion List */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {accordionData.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  style={{
                    borderBottom: "1px solid #1f3b38",
                  }}
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    style={{
                      width: "100%",
                      padding: "16px 0",
                      backgroundColor: "transparent",
                      border: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        color: "#0d3b38",
                        width: "16px",
                      }}
                    >
                      {isOpen ? "–" : "+"}
                    </span>
                    <span
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: "700",
                        color: "#0f2c3a",
                      }}
                    >
                      {item.title}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: "0 0 18px 28px",
                        fontSize: "0.875rem",
                        color: "#374151",
                        lineHeight: "1.6",
                      }}
                    >
                      {item.content}
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
