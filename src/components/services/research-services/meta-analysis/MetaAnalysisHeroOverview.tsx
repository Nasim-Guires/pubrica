"use client";

import React from "react";
import Link from "next/link";

export default function MetaAnalysisHeroOverview() {
  return (
    <section
      style={{ width: "100%", fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      {/* 1. Hero Banner */}
      <div
        style={{
          backgroundColor: "#16282b", // Dark teal banner background
          padding: "50px 20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            width: "100%",
            border: "1px solid rgba(255, 255, 255, 0.8)",
            padding: "36px 24px",
            textAlign: "center",
            boxSizing: "border-box",
          }}
        >
          <h1
            style={{
              color: "#ffffff",
              fontSize: "2.25rem",
              fontWeight: "700",
              margin: "0 0 16px 0",
              letterSpacing: "0.5px",
            }}
          >
            Meta-Analysis Service
          </h1>
          <p
            style={{
              color: "#ffffff",
              fontSize: "1.05rem",
              lineHeight: "1.5",
              margin: 0,
              fontWeight: "400",
            }}
          >
            Pubrica’s expert team helps busy researchers craft precise
            meta-analysis with statistical accuracy and expert review.
          </p>
        </div>
      </div>

      {/* 2. Overview Content Section */}
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "60px 20px 80px 20px",
          color: "#111827",
        }}
      >
        <div
          style={{
            maxWidth: "1150px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "40px",
          }}
        >
          {/* Main Grid: Left Details & Right Featured Card */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              // Switch to 2 columns on desktop using standard CSS grid layout
            }}
            className="md:grid-cols-[1.2fr_0.8fr]"
          >
            {/* Left Column Text Content */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h2
                style={{
                  fontSize: "1.75rem",
                  fontWeight: "700",
                  color: "#0f2c3a",
                  lineHeight: "1.35",
                  marginBottom: "20px",
                }}
              >
                Meta-Analysis Services for Life Sciences, Pharma, and Research:
                Streamlining Your Path to Publication
              </h2>

              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: "#2563eb",
                  lineHeight: "1.5",
                  marginBottom: "20px",
                }}
              >
                End-to-end meta-analysis support for publication and expert
                guidance to submit robust analyses to high-impact journals
              </p>

              <p
                style={{
                  fontSize: "0.925rem",
                  color: "#374151",
                  lineHeight: "1.65",
                  marginBottom: "24px",
                }}
              >
                Pubrica’s team of skilled editors and medical writers
                specializes in conducting thorough,{" "}
                <Link
                  href="/services/research-services/systematic-review"
                  style={{ color: "#2563eb", textDecoration: "underline" }}
                >
                  systematic reviews
                </Link>{" "}
                and{" "}
                <Link
                  href="/services/research-services/meta-analysis"
                  style={{ color: "#2563eb", textDecoration: "underline" }}
                >
                  meta-analysis
                </Link>{" "}
                (hypothesis-driven), essential for crafting high-quality
                scientific original research articles. Our experts rigorously
                summarize peer-reviewed medical literature, use{" "}
                <Link
                  href="/services/research-services/meta-analysis"
                  style={{ color: "#2563eb", textDecoration: "underline" }}
                >
                  meta-analysis
                </Link>{" "}
                statistical services, explain the variability between different
                studies, and articulate key research gaps, facilitating the
                creation of impactful publications in the scientific community.
              </p>

              {/* Bullet Points */}
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 32px 0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <li
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    fontSize: "0.925rem",
                    color: "#374151",
                    lineHeight: "1.6",
                  }}
                >
                  <span
                    style={{
                      color: "#dc2626",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      lineHeight: "1",
                    }}
                  >
                    •
                  </span>
                  <span>
                    Get an expert to identify, analyse, and structure your
                    comprehensive{" "}
                    <Link
                      href="/services/research-services/meta-analysis"
                      style={{ color: "#2563eb", textDecoration: "underline" }}
                    >
                      meta-analysis
                    </Link>{" "}
                    report efficiently, ensuring it meets professional and
                    quality standards while accurately answering your research
                    question.
                  </span>
                </li>

                <li
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    fontSize: "0.925rem",
                    color: "#374151",
                    lineHeight: "1.6",
                  }}
                >
                  <span
                    style={{
                      color: "#dc2626",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      lineHeight: "1",
                    }}
                  >
                    •
                  </span>
                  <span>
                    Customize your custom meta-analysis reports to align with
                    your specific requirements and budget, providing a tailored
                    approach for your unique needs.
                  </span>
                </li>

                <li
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    fontSize: "0.925rem",
                    color: "#374151",
                    lineHeight: "1.6",
                  }}
                >
                  <span
                    style={{
                      color: "#dc2626",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      lineHeight: "1",
                    }}
                  >
                    •
                  </span>
                  <span>
                    Benefit from meta-analysis writing services by professional
                    medical experts who assist in identifying relevant
                    literature, connecting it with your research question
                    (PCOS), conducting meta-analysis, a statistical procedure
                    used to numerically summarize the included studies, and
                    preparing a comprehensive research gap analysis to support
                    evidence-based conclusions.
                  </span>
                </li>
              </ul>

              {/* Call to Action Button */}
              <div>
                <button
                  style={{
                    backgroundColor: "#b91c1c",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "20px",
                    padding: "12px 28px",
                    fontSize: "0.9rem",
                    fontWeight: "700",
                    cursor: "pointer",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    transition: "background-color 0.2s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "#991b1b")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "#b91c1c")
                  }
                >
                  Get a Free Quote
                </button>
              </div>
            </div>

            {/* Right Column Image Frame */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "20px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "420px",
                }}
              >
                {/* Dark teal accent card behind image */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "#0d3b38",
                    borderRadius: "16px",
                    transform: "translate(-12px, 12px)",
                    zIndex: 0,
                  }}
                />
                {/* Main Image */}
                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: "2px solid #e5e7eb",
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop"
                    alt="Lab researcher analyzing clinical research data"
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
