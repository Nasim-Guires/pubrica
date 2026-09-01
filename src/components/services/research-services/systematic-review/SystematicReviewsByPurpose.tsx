"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import ServiceBanner, { BannerProps } from "@/components/common/ServiceBanner";

interface ReviewPurposeItem {
  id: string;
  title: string;
  iconSrc: string;
  content: React.ReactNode;
}

const SR_IMG = "/images/research-services/systematic-review";

const purposeData: ReviewPurposeItem[] = [
  {
    id: "nutrition-functional-food",
    title: "Nutrition & Functional Food Reviews",
    iconSrc: `${SR_IMG}/Nutrition-Functional-Food-Reviews.png`,
    content: (
      <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: "1.5" }}>
        <li>
          Assess the efficacy and safety of nutrition interventions and functional
          ingredients.
        </li>
      </ul>
    ),
  },
  {
    id: "environmental-occupational-health",
    title: "Environmental & Occupational Health Reviews",
    iconSrc: `${SR_IMG}/Environmental-Occupational-Health-Reviews.png`,
    content: (
      <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: "1.5" }}>
        <li>Examine hazards, exposures, and preventive measures.</li>
      </ul>
    ),
  },
  {
    id: "economic-evaluation-cost-effectiveness",
    title: "Economic Evaluation / Cost-effectiveness Reviews",
    iconSrc: `${SR_IMG}/Economic-Evaluation-Cost-effectiveness-Reviews.png`,
    content: (
      <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: "1.5" }}>
        <li>
          Examine costs, cost-effectiveness, and budget impact in healthcare and
          public health.
        </li>
      </ul>
    ),
  },
  {
    id: "diagnostic-test-accuracy",
    title: "Diagnostic Test Accuracy (DTA) Reviews",
    iconSrc: `${SR_IMG}/Diagnostic-Test-Accuracy-DTA-Reviews.png`,
    content: (
      <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: "1.5" }}>
        <li>
          Evaluate diagnostic tools using sensitivity, specificity, and predictive
          value measures.
        </li>
      </ul>
    ),
  },
  {
    id: "living-systematic-reviews",
    title: "Living Systematic Reviews",
    iconSrc: `${SR_IMG}/Living-Systematic-Reviews.png`,
    content: (
      <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: "1.5" }}>
        <li>Continuously update findings as new evidence emerges.</li>
      </ul>
    ),
  },
  {
    id: "etiology-risk-reviews",
    title: "Etiology / Risk Reviews",
    iconSrc: `${SR_IMG}/Etiology-Risk-Reviews.png`,
    content: (
      <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: "1.5" }}>
        <li>Identify causal relationships and assess risk factors for diseases.</li>
      </ul>
    ),
  },
  {
    id: "effectiveness-intervention-reviews",
    title: "Effectiveness / Intervention Reviews",
    iconSrc: `${SR_IMG}/Effectiveness-Intervention-Reviews.png`,
    content: (
      <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: "1.5" }}>
        <li>
          Assess treatment or intervention outcomes, often with meta-analysis or
          network meta-analysis to compare interventions.
        </li>
      </ul>
    ),
  },
  {
    id: "psychometric-reviews",
    title: "Psychometric Reviews",
    iconSrc: `${SR_IMG}/Psychometric-Reviews.png`,
    content: (
      <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: "1.5" }}>
        <li>
          Evaluate the validity, reliability, and measurement properties of tools.
        </li>
      </ul>
    ),
  },
  {
    id: "methodological-reviews",
    title: "Methodological Reviews",
    iconSrc: `${SR_IMG}/Methodological-Reviews.png`,
    content: (
      <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: "1.5" }}>
        <li>
          Assess and improve research methods, designs, and reporting quality.
        </li>
      </ul>
    ),
  },
  {
    id: "prevalence-incidence-reviews",
    title: "Prevalence / Incidence Reviews",
    iconSrc: `${SR_IMG}/Prevalence-Incidence-Reviews.png`,
    content: (
      <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: "1.5" }}>
        <li>Summarize disease or condition frequency across populations.</li>
      </ul>
    ),
  },
  {
    id: "burden-of-disease-reviews",
    title: "Burden of Disease Reviews",
    iconSrc: `${SR_IMG}/Burden-of-Disease-Reviews.png`,
    content: (
      <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: "1.5" }}>
        <li>
          Estimate DALYs, QALYs, and YLL for global and local health priorities.
        </li>
      </ul>
    ),
  },
  {
    id: "health-services-policy-reviews",
    title: "Health Services & Policy Reviews",
    iconSrc: `${SR_IMG}/Health-Services-Policy-Reviews.png`,
    content: (
      <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: "1.5" }}>
        <li>Assess healthcare delivery models, access, and system performance.</li>
      </ul>
    ),
  },
  {
    id: "genomic-biomarker-reviews",
    title: "Genomic & Biomarker Reviews",
    iconSrc: `${SR_IMG}/Genomic-Biomarker-Reviews.png`,
    content: (
      <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: "1.5" }}>
        <li>Evaluate the predictive and diagnostic value of biomarkers.</li>
      </ul>
    ),
  },
  {
    id: "adverse-events-safety-reviews",
    title: "Adverse Events & Safety Reviews",
    iconSrc: `${SR_IMG}/Adverse-Events-Safety-Reviews.png`,
    content: (
      <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: "1.5" }}>
        <li>Assess treatment or intervention safety profiles.</li>
      </ul>
    ),
  },
  {
    id: "pharma-regulatory-submission-reviews",
    title: "Pharma Regulatory Submission Reviews",
    iconSrc: `${SR_IMG}/Pharma-Regulatory-Submission-Reviews.png`,
    content: (
      <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: "1.6" }}>
        <li>Phase I–IV Clinical Trials</li>
        <li>Pharmacoeconomic Studies</li>
        <li>Post-Marketing Surveillance (PMS)</li>
        <li>Real-World Evidence (RWE) Studies</li>
        <li>Drug Safety & Pharmacovigilance Reports</li>
      </ul>
    ),
  },
  {
    id: "infectious-disease-reviews",
    title: "Infectious Disease Reviews",
    iconSrc: `${SR_IMG}/Infectious-Disease-Reviews.png`,
    content: (
      <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: "1.5" }}>
        <li>
          Synthesize evidence for prevention, treatment, and epidemiology of
          infectious diseases.
        </li>
      </ul>
    ),
  },
  {
    id: "psychological-behavioural-reviews",
    title: "Psychological & Behavioural Reviews",
    iconSrc: `${SR_IMG}/Psychological-Behavioural-Reviews.png`,
    content: (
      <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: "1.5" }}>
        <li>
          Evaluate mental health, behaviour change, and psychosocial
          interventions.
        </li>
      </ul>
    ),
  },
  {
    id: "policy-reviews",
    title: "Policy Reviews",
    iconSrc: `${SR_IMG}/Policy-Reviews.png`,
    content: (
      <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: "1.5" }}>
        <li>
          Summarize evidence for health, environmental, and social policy
          development.
        </li>
      </ul>
    ),
  },
  {
    id: "rapid-reviews",
    title: "Rapid Reviews",
    iconSrc: `${SR_IMG}/Rapid-Reviews.png`,
    content: (
      <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: "1.5" }}>
        <li>Deliver timely evidence synthesis for urgent decision-making.</li>
      </ul>
    ),
  },
  {
    id: "prognostic-reviews",
    title: "Prognostic Reviews",
    iconSrc: `${SR_IMG}/Prognostic-Reviews.png`,
    content: (
      <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: "1.5" }}>
        <li>Predict disease progression, outcomes, or survival rates.</li>
      </ul>
    ),
  },
  {
    id: "experiential-qualitative-reviews",
    title: "Experiential (Qualitative) Reviews / Meta-synthesis",
    iconSrc: `${SR_IMG}/Experiential-Qualitative-Reviews-Meta-synthesis.png`,
    content: (
      <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: "1.5" }}>
        <li>
          Use qualitative methods to explore lived experiences, perceptions, and
          contextual factors.
        </li>
      </ul>
    ),
  },
  {
    id: "mental-health-epidemiology-reviews",
    title: "Mental Health Epidemiology Reviews",
    iconSrc: `${SR_IMG}/Mental-Health-Epidemiology-Reviews.png`,
    content: (
      <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: "1.5" }}>
        <li>
          Summarize prevalence, incidence, and risk factors in mental health
          research.
        </li>
      </ul>
    ),
  },
];

export default function SystematicReviewsByPurpose() {
  const serviceBannerData: BannerProps = {
    heading: "Speed up your journey of Systematic Review with Pubrica",
    description:
      "Gain access to your assistant who will expertly guide you through intricate journal submission processes, shielding you from rejection and ensuring a faster path to getting your work published.",
    showQuoteButton: true,
  };
  const [expandedIds, setExpandedIds] = useState<string[]>([]);

  const toggleCard = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <>
      <section
        aria-labelledby="purpose-heading"
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "50px 20px",
          fontFamily: "Arial, sans-serif",
          color: "#111827",
        }}
      >
        {/* Header & Intro */}
        <div style={{ marginBottom: "36px" }}>
          <h2
            id="purpose-heading"
            style={{
              fontSize: "1.875rem",
              fontWeight: "700",
              color: "#0f2c3a",
              marginBottom: "16px",
            }}
          >
            Systematic Reviews by Purpose and Methodological Approach
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "#374151",
              lineHeight: "1.6",
              margin: 0,
            }}
          >
            At Pubrica, we deliver{" "}
            <Link
              href="/services/research-services/systematic-review-definition"
              style={{ color: "#2563eb", textDecoration: "none" }}
            >
              systematic reviews
            </Link>{" "}
            designed to meet diverse research objectives, aligned with PRISMA,
            Cochrane, JBI, and PROSPERO standards. We integrate{" "}
            <Link
              href="/services/publication-support"
              style={{ color: "#2563eb", textDecoration: "none" }}
            >
              systematic review publication help
            </Link>{" "}
            to ensure methodological rigor.
          </p>
        </div>

        {/* 4-Column Grid for Purpose Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "20px",
            alignItems: "start",
          }}
        >
          {purposeData.map((item) => {
            const isExpanded = expandedIds.includes(item.id);

            return (
              <div
                key={item.id}
                style={{
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  overflow: "hidden",
                  backgroundColor: "#ffffff",
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.03)",
                  transition: "box-shadow 0.2s ease",
                }}
              >
                {/* Header / Toggle Button */}
                <button
                  type="button"
                  onClick={() => toggleCard(item.id)}
                  aria-expanded={isExpanded}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "16px",
                    backgroundColor: "#f0fdf4",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    color: "#0f2c3a",
                    fontWeight: "700",
                    fontSize: "0.95rem",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        width: "22px",
                        height: "22px",
                        flexShrink: 0,
                      }}
                    >
                      <Image
                        src={item.iconSrc}
                        alt=""
                        fill
                        sizes="22px"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <span>{item.title}</span>
                  </div>
                  <span
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      color: "#0f2c3a",
                    }}
                  >
                    {isExpanded ? "−" : "+"}
                  </span>
                </button>

                {/* Collapsible Content Area */}
                {isExpanded && (
                  <div
                    style={{
                      padding: "16px",
                      color: "#4b5563",
                      fontSize: "0.875rem",
                      lineHeight: "1.5",
                      borderTop: "1px solid #e2e8f0",
                    }}
                  >
                    {item.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <ServiceBanner {...serviceBannerData} />
    </>
  );
}