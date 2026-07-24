"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ReviewTypeItem {
  id: string;
  title: string;
  description: string;
}

const reviewTypesData: ReviewTypeItem[] = [
  {
    id: "scoping-reviews",
    title: "Scoping Reviews",
    description:
      "Identify research gaps and map the breadth of evidence in fields like nutrition and functional foods, public health, AI and machine learning research, and environmental risk assessment.",
  },
  {
    id: "systematic-reviews",
    title: "Systematic Reviews",
    description:
      "PRISMA-compliant reviews that answer focused research questions in clinical medicine, epidemiology, social sciences, pharma regulatory submissions, and global health.",
  },
  {
    id: "cochrane-systematic-reviews",
    title: "Cochrane Systematic Reviews",
    description:
      "High-standard reviews for evidence-based medicine, drug efficacy and safety, and healthcare policy formulation, conducted under strict Cochrane methodology.",
  },
  {
    id: "mixed-method-systematic-reviews",
    title: "Mixed Method Systematic Reviews",
    description:
      "Combine qualitative and quantitative evidence for complex topics such as behavioural science, education research, and mental health interventions.",
  },
  {
    id: "meta-analysis-network-meta-analysis",
    title: "Meta-analysis & Network Meta-analysis",
    description:
      "Statistical synthesis for clinical trials, nutrition efficacy claims, functional food research, pharmaceutical studies, and public health interventions.",
  },
  {
    id: "rapid-reviews-rapid-evidence-assessments",
    title: "Rapid Reviews / Rapid Evidence Assessments",
    description:
      "Provide urgent, high-quality evidence for healthcare policy, public health emergencies, regulatory submissions, and clinical decision-making.",
  },
  {
    id: "realist-systematic-reviews",
    title: "Realist Systematic Reviews",
    description:
      "Explore why and how interventions work in health systems research, education policy, social welfare programs, and behavioural interventions.",
  },
  {
    id: "umbrella-reviews",
    title: "Umbrella Reviews",
    description:
      "Summarize multiple systematic reviews to provide high-level overviews for regulatory agencies, public health organizations, and research consortia.",
  },
  {
    id: "qualitative-evidence-synthesis",
    title: "Qualitative Evidence Synthesis / Meta-synthesis",
    description:
      "Integrate qualitative findings in policy and practice research, social work, mental health, and community-based healthcare.",
  },
  {
    id: "living-systematic-reviews",
    title: "Living Systematic Reviews",
    description:
      "Continuously updated reviews for fast-evolving fields like infectious disease management, AI in healthcare, climate change and health, and emerging nutrition science.",
  },
];

export default function SystematicReviewTypesAccordion() {
  // First accordion item open by default as shown in image 1
  const [openId, setOpenId] = useState<string | null>("scoping-reviews");

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      aria-labelledby="types-of-systematic-reviews-title"
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
        color: "#111827",
      }}
    >
      {/* Title & SEO Intro */}
      <div style={{ marginBottom: "32px" }}>
        <h2
          id="types-of-systematic-reviews-title"
          style={{
            fontSize: "1.875rem",
            fontWeight: "700",
            color: "#0f2c3a",
            marginBottom: "12px",
          }}
        >
          Types of Systematic Reviews That We Offer
        </h2>
        <p style={{ fontSize: "1rem", color: "#374151", lineHeight: "1.6" }}>
          Pubrica provides a comprehensive range of{" "}
          <Link
            href="/services/research-services/systematic-review"
            style={{ color: "#2563eb", textDecoration: "none" }}
          >
            end-to-end systematic review writing services
          </Link>{" "}
          and evidence synthesis solutions, tailored to different research
          goals, study designs, and evidence needs:
        </p>
      </div>

      {/* Main Grid Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "40px",
          alignItems: "start",
        }}
      >
        {/* Left Double Image Display */}
        <div
          style={{
            position: "relative",
            minHeight: "360px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Top/Left Overlay Image */}
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "10%",
              width: "55%",
              height: "230px",
              borderRadius: "16px",
              overflow: "hidden",
              zIndex: 1,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800"
              alt="Systematic review paperwork and research documentation"
              fill
              sizes="(max-width: 768px) 100vw, 30vw"
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Bottom/Right Overlay Image */}
          <div
            style={{
              position: "absolute",
              bottom: "0",
              right: "10%",
              width: "55%",
              height: "230px",
              borderRadius: "16px",
              overflow: "hidden",
              zIndex: 2,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.15)",
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
              alt="Evidence synthesis and data extraction review"
              fill
              sizes="(max-width: 768px) 100vw, 30vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Right Accordion List */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {reviewTypesData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                style={{
                  borderBottom: "1px solid #0f2c3a",
                  transition: "all 0.2s ease-in-out",
                }}
              >
                {/* Accordion Toggle Header */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`accordion-body-${item.id}`}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "12px",
                    padding: "16px 8px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    color: "#0f2c3a",
                    fontWeight: "600",
                    fontSize: "1.05rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      width: "16px",
                      display: "inline-block",
                      textAlign: "center",
                    }}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                  <span>{item.title}</span>
                </button>

                {/* Accordion Content */}
                {isOpen && (
                  <div
                    id={`accordion-body-${item.id}`}
                    style={{
                      padding: "0 12px 18px 36px",
                      color: "#4b5563",
                      fontSize: "0.95rem",
                      lineHeight: "1.6",
                    }}
                  >
                    <p style={{ margin: 0 }}>{item.description}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
