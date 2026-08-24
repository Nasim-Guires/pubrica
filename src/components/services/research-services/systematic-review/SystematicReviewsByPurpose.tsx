"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

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
      <p>
        Assess the efficacy and safety of nutrition interventions and functional
        ingredients.
      </p>
    ),
  },
  {
    id: "environmental-occupational-health",
    title: "Environmental & Occupational Health Reviews",
    iconSrc: `${SR_IMG}/Environmental-Occupational-Health-Reviews.png`,
    content: <p>Examine hazards, exposures, and preventive measures.</p>,
  },
  {
    id: "economic-evaluation-cost-effectiveness",
    title: "Economic Evaluation / Cost-effectiveness Reviews",
    iconSrc: `${SR_IMG}/Economic-Evaluation-Cost-effectiveness-Reviews.png`,
    content: (
      <p>
        Examine costs, cost-effectiveness, and budget impact in healthcare and
        public health.
      </p>
    ),
  },
  {
    id: "diagnostic-test-accuracy",
    title: "Diagnostic Test Accuracy (DTA) Reviews",
    iconSrc: `${SR_IMG}/Diagnostic-Test-Accuracy-DTA-Reviews.png`,
    content: (
      <p>
        Evaluate diagnostic tools using sensitivity, specificity, and predictive
        value measures.
      </p>
    ),
  },
  {
    id: "living-systematic-reviews",
    title: "Living Systematic Reviews",
    iconSrc: `${SR_IMG}/Living-Systematic-Reviews.png`,
    content: <p>Continuously update findings as new evidence emerges.</p>,
  },
  {
    id: "etiology-risk-reviews",
    title: "Etiology / Risk Reviews",
    iconSrc: `${SR_IMG}/Etiology-Risk-Reviews.png`,
    content: (
      <p>Identify causal relationships and assess risk factors for diseases.</p>
    ),
  },
  {
    id: "effectiveness-intervention-reviews",
    title: "Effectiveness / Intervention Reviews",
    iconSrc: `${SR_IMG}/Effectiveness-Intervention-Reviews.png`,
    content: (
      <p>
        Assess treatment or intervention outcomes, often with meta-analysis or
        network meta-analysis to compare interventions.
      </p>
    ),
  },
  {
    id: "psychometric-reviews",
    title: "Psychometric Reviews",
    iconSrc: `${SR_IMG}/Psychometric-Reviews.png`,
    content: (
      <p>
        Evaluate the validity, reliability, and measurement properties of tools.
      </p>
    ),
  },
  {
    id: "methodological-reviews",
    title: "Methodological Reviews",
    iconSrc: `${SR_IMG}/Methodological-Reviews.png`,
    content: (
      <p>
        Assess and improve research methods, designs, and reporting quality.
      </p>
    ),
  },
  {
    id: "prevalence-incidence-reviews",
    title: "Prevalence / Incidence Reviews",
    iconSrc: `${SR_IMG}/Prevalence-Incidence-Reviews.png`,
    content: (
      <p>Summarize disease or condition frequency across populations.</p>
    ),
  },
  {
    id: "burden-of-disease-reviews",
    title: "Burden of Disease Reviews",
    iconSrc: `${SR_IMG}/Burden-of-Disease-Reviews.png`,
    content: (
      <p>
        Estimate DALYs, QALYs, and YLL for global and local health priorities.
      </p>
    ),
  },
  {
    id: "health-services-policy-reviews",
    title: "Health Services & Policy Reviews",
    iconSrc: `${SR_IMG}/Health-Services-Policy-Reviews.png`,
    content: (
      <p>Assess healthcare delivery models, access, and system performance.</p>
    ),
  },
  {
    id: "genomic-biomarker-reviews",
    title: "Genomic & Biomarker Reviews",
    iconSrc: `${SR_IMG}/Genomic-Biomarker-Reviews.png`,
    content: <p>Evaluate the predictive and diagnostic value of biomarkers.</p>,
  },
  {
    id: "adverse-events-safety-reviews",
    title: "Adverse Events & Safety Reviews",
    iconSrc: `${SR_IMG}/Adverse-Events-Safety-Reviews.png`,
    content: <p>Assess treatment or intervention safety profiles.</p>,
  },
  {
    id: "pharma-regulatory-submission-reviews",
    title: "Pharma Regulatory Submission Reviews",
    iconSrc: `${SR_IMG}/Pharma-Regulatory-Submission-Reviews.png`,
    content: (
      <ul style={{ margin: 0, paddingLeft: "20px", lineHeight: "1.6" }}>
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
      <p>
        Synthesize evidence for prevention, treatment, and epidemiology of
        infectious diseases.
      </p>
    ),
  },
  {
    id: "psychological-behavioural-reviews",
    title: "Psychological & Behavioural Reviews",
    iconSrc: `${SR_IMG}/Psychological-Behavioural-Reviews.png`,
    content: (
      <p>
        Evaluate mental health, behaviour change, and psychosocial
        interventions.
      </p>
    ),
  },
  {
    id: "policy-reviews",
    title: "Policy Reviews",
    iconSrc: `${SR_IMG}/Policy-Reviews.png`,
    content: (
      <p>
        Summarize evidence for health, environmental, and social policy
        development.
      </p>
    ),
  },
  {
    id: "rapid-reviews",
    title: "Rapid Reviews",
    iconSrc: `${SR_IMG}/Rapid-Reviews.png`,
    content: (
      <p>Deliver timely evidence synthesis for urgent decision-making.</p>
    ),
  },
  {
    id: "prognostic-reviews",
    title: "Prognostic Reviews",
    iconSrc: `${SR_IMG}/Prognostic-Reviews.png`,
    content: <p>Predict disease progression, outcomes, or survival rates.</p>,
  },
  {
    id: "experiential-qualitative-reviews",
    title: "Experiential (Qualitative) Reviews / Meta-synthesis",
    iconSrc: `${SR_IMG}/Experiential-Qualitative-Reviews-Meta-synthesis.png`,
    content: (
      <p>
        Use qualitative methods to explore lived experiences, perceptions, and
        contextual factors.
      </p>
    ),
  },
  {
    id: "mental-health-epidemiology-reviews",
    title: "Mental Health Epidemiology Reviews",
    iconSrc: `${SR_IMG}/Mental-Health-Epidemiology-Reviews.png`,
    content: (
      <p>
        Summarize prevalence, incidence, and risk factors in mental health
        research.
      </p>
    ),
  },
];

export default function SystematicReviewsByPurpose() {
  // Initial state set to an empty array so all cards are collapsed by default
  const [expandedIds, setExpandedIds] = useState<string[]>([]);

  const toggleCard = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
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

      {/* Speed up your journey CTA Banner */}
      <section
        style={{
          width: "100%",
          backgroundColor: "#022c22",
          color: "#ffffff",
          padding: "60px 20px",
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              marginBottom: "16px",
              color: "#ffffff",
            }}
          >
            Speed up your journey of Systematic Review with Pubrica
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.6",
              color: "#e2e8f0",
              marginBottom: "32px",
            }}
          >
            Gain access to your assistant who will expertly guide you through
            intricate journal submission processes, shielding you from rejection
            and ensuring a faster path to getting your work published.
          </p>
          <GetFreeQuoteButton />
        </div>
      </section>
    </>
  );
}