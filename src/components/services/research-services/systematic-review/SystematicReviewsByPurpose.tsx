"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ReviewPurposeItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

const purposeData: ReviewPurposeItem[] = [
  {
    id: "nutrition-functional-food",
    title: "Nutrition & Functional Food Reviews",
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
    content: <p>Examine hazards, exposures, and preventive measures.</p>,
  },
  {
    id: "economic-evaluation-cost-effectiveness",
    title: "Economic Evaluation / Cost-effectiveness Reviews",
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
    content: <p>Continuously update findings as new evidence emerges.</p>,
  },
  {
    id: "etiology-risk-reviews",
    title: "Etiology / Risk Reviews",
    content: (
      <p>Identify causal relationships and assess risk factors for diseases.</p>
    ),
  },
  {
    id: "effectiveness-intervention-reviews",
    title: "Effectiveness / Intervention Reviews",
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
    content: (
      <p>
        Evaluate the validity, reliability, and measurement properties of tools.
      </p>
    ),
  },
  {
    id: "methodological-reviews",
    title: "Methodological Reviews",
    content: (
      <p>
        Assess and improve research methods, designs, and reporting quality.
      </p>
    ),
  },
  {
    id: "prevalence-incidence-reviews",
    title: "Prevalence / Incidence Reviews",
    content: (
      <p>Summarize disease or condition frequency across populations.</p>
    ),
  },
  {
    id: "burden-of-disease-reviews",
    title: "Burden of Disease Reviews",
    content: (
      <p>
        Estimate DALYs, QALYs, and YLL for global and local health priorities.
      </p>
    ),
  },
  {
    id: "health-services-policy-reviews",
    title: "Health Services & Policy Reviews",
    content: (
      <p>Assess healthcare delivery models, access, and system performance.</p>
    ),
  },
  {
    id: "genomic-biomarker-reviews",
    title: "Genomic & Biomarker Reviews",
    content: <p>Evaluate the predictive and diagnostic value of biomarkers.</p>,
  },
  {
    id: "adverse-events-safety-reviews",
    title: "Adverse Events & Safety Reviews",
    content: <p>Assess treatment or intervention safety profiles.</p>,
  },
  {
    id: "pharma-regulatory-submission-reviews",
    title: "Pharma Regulatory Submission Reviews",
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
    content: (
      <p>Deliver timely evidence synthesis for urgent decision-making.</p>
    ),
  },
  {
    id: "prognostic-reviews",
    title: "Prognostic Reviews",
    content: <p>Predict disease progression, outcomes, or survival rates.</p>,
  },
  {
    id: "experiential-qualitative-reviews",
    title: "Experiential (Qualitative) Reviews / Meta-synthesis",
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
    content: (
      <p>
        Summarize prevalence, incidence, and risk factors in mental health
        research.
      </p>
    ),
  },
];

export default function SystematicReviewsByPurpose() {
  // Store expanded item IDs (multiple cards can be expanded simultaneously)
  const [expandedIds, setExpandedIds] = useState<string[]>([
    "nutrition-functional-food",
    "environmental-occupational-health",
    "economic-evaluation-cost-effectiveness",
    "diagnostic-test-accuracy",
    "living-systematic-reviews",
    "etiology-risk-reviews",
    "effectiveness-intervention-reviews",
    "psychometric-reviews",
  ]);

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
              href="/services/research-services/systematic-review"
              style={{ color: "#2563eb", textDecoration: "none" }}
            >
              systematic reviews
            </Link>{" "}
            designed to meet diverse research objectives, aligned with PRISMA,
            Cochrane, JBI, and PROSPERO standards. We integrate{" "}
            <Link
              href="/services/research-services/systematic-review"
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
                    backgroundColor: "#f0fdf4", // Light mint background
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
                    {/* SVG Icon Placeholder */}
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#15803d"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ flexShrink: 0 }}
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
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
          backgroundColor: "#022c22", // Deep dark green
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
          <a
            href="/contact-us"
            style={{
              display: "inline-block",
              backgroundColor: "#c5110a", // Vibrant red button
              color: "#ffffff",
              padding: "12px 36px",
              borderRadius: "24px",
              fontWeight: "700",
              fontSize: "1rem",
              textDecoration: "none",
              transition: "background-color 0.2s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#990d08")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#c5110a")
            }
          >
            Get a Free Quote
          </a>
        </div>
      </section>
    </>
  );
}
