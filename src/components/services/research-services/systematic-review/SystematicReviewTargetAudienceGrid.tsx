"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface AudienceCard {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

const audienceData: AudienceCard[] = [
  {
    id: "clinicians-healthcare-professionals",
    title: "Clinicians & Healthcare Professionals",
    description:
      "Evidence synthesis to guide clinical decision-making, guideline development, and best practice recommendations.",
    imageUrl:
      "/images/research-services/systematic-review/Clinicians-Healthcare-Professionals-1.png",
    imageAlt:
      "Clinicians and healthcare professionals reviewing research online",
  },
  {
    id: "pharmaceutical-biotech-companies",
    title: "Pharmaceutical & Biotech Companies",
    description:
      "Pharma regulatory systematic reviews for drug approvals, network meta-analysis for product comparisons, and literature support for post-marketing surveillance.",
    imageUrl:
      "/images/research-services/systematic-review/Pharmaceutical-Biotech-Companies-1.png",
    imageAlt: "Pharmaceutical and biotech laboratory researchers",
  },
  {
    id: "health-technology-assessment-agencies",
    title: "Health Technology Assessment (HTA) Agencies",
    description:
      "Comprehensive reviews assessing clinical effectiveness, cost-effectiveness, and budget impact analysis of interventions and devices.",
    imageUrl:
      "/images/research-services/systematic-review/Health-Technology-Assessment-HTA-Agencies.png",
    imageAlt: "HTA agency professional analyzing medical scanning imagery",
  },
  {
    id: "policy-makers-government-bodies",
    title: "Policy Makers & Government Bodies",
    description:
      "Evidence-based reviews for public health strategies, environmental health policies, and healthcare reforms.",
    imageUrl:
      "/images/research-services/systematic-review/Policy-Makers-Government-Bodies.png",
    imageAlt: "Government administration building representing policy makers",
  },
  {
    id: "contract-research-organizations",
    title: "Contract Research Organizations (CROs)",
    description:
      "Integrated systematic review writing, data extraction, and evidence synthesis as part of broader clinical research and regulatory services.",
    imageUrl:
      "/images/research-services/systematic-review/Contract-Research-Organizations.png",
    imageAlt: "Contract research organization handling research paper stacks",
  },
  {
    id: "non-governmental-organizations",
    title: "Non-Governmental Organizations (NGOs)",
    description:
      "Rapid reviews and scoping reviews to support population health studies and global health interventions.",
    imageUrl:
      "/images/research-services/systematic-review/Non-Governmental-Organizations.png",
    imageAlt: "Non-governmental organization report paperwork and clipboard",
  },
];

export default function SystematicReviewTargetAudienceGrid() {
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  return (
    <section
      aria-labelledby="who-we-serve-title"
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "50px 20px",
        fontFamily: "Arial, sans-serif",
        color: "#111827",
      }}
    >
      {/* Header and Intro SEO Text */}
      <div style={{ textAlign: "left", marginBottom: "32px" }}>
        <h2
          id="who-we-serve-title"
          style={{
            fontSize: "2rem",
            fontWeight: "700",
            color: "#0f2c3a",
            marginBottom: "16px",
          }}
        >
          Who We Serve
        </h2>
        <p
          style={{
            fontSize: "0.98rem",
            color: "#374151",
            lineHeight: "1.6",
            maxWidth: "1000px",
          }}
        >
          At Pubrica, our systematic literature review and meta-analysis
          services are trusted by a diverse global clientele. We customize our
          PRISMA,{" "}
          <Link
            href="/academy/systematic-review/cochrane-methodology-systematic-reviews"
            style={{ color: "#2563eb", textDecoration: "" }}
          >
            Cochrane
          </Link>
          , and PROSPERO-compliant methodology to meet the evidence needs of:
        </p>
      </div>

      {/* Interactive 3x2 Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "24px",
          marginBottom: "40px",
        }}
      >
        {audienceData.map((card) => {
          const isHovered = hoveredCardId === card.id;

          return (
            <div
              key={card.id}
              onMouseEnter={() => setHoveredCardId(card.id)}
              onMouseLeave={() => setHoveredCardId(null)}
              style={{
                position: "relative",
                height: "260px",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                cursor: "pointer",
                backgroundColor: "#000000",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                transform: isHovered ? "translateY(-4px)" : "translateY(0)",
              }}
            >
              {/* Background Image (Soft Blur / Fade on Hover) */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  opacity: isHovered ? 0.15 : 1,
                  transition: "opacity 0.4s ease",
                }}
              >
                <Image
                  src={card.imageUrl}
                  alt={card.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Bottom Dark Gradient Overlay for Default Title State */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: isHovered
                    ? "#000000"
                    : "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)",
                  transition: "background 0.4s ease",
                  zIndex: 1,
                }}
              />

              {/* Card Content Container */}
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: isHovered ? "flex-start" : "flex-end",
                  padding: "24px",
                  color: "#ffffff",
                  boxSizing: "border-box",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "700",
                    margin: "0 0 12px 0",
                    lineHeight: "1.3",
                  }}
                >
                  {card.title}
                </h3>

                {/* Description (Visible on Hover / Focus State) */}
                {isHovered && (
                  <p
                    style={{
                      fontSize: "0.875rem",
                      lineHeight: "1.5",
                      color: "#e2e8f0",
                      margin: 0,
                      animation: "fadeIn 0.3s ease-in-out",
                    }}
                  >
                    {card.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* "View More" CTA Button */}
      <div style={{ textAlign: "center" }}>
        <a
          href="/services/research-services/systematic-review#audience"
          style={{
            display: "inline-block",
            backgroundColor: "#0f2c3a",
            color: "#ffffff",
            padding: "10px 32px",
            borderRadius: "4px",
            fontWeight: "600",
            fontSize: "0.95rem",
            textDecoration: "none",
            transition: "background-color 0.2s ease",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#1a3e50")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#0f2c3a")
          }
        >
          View More
        </a>
      </div>
    </section>
  );
}
