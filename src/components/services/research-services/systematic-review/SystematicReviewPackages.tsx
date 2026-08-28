"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

interface PackageData {
  id: string;
  iconSrc: string;
  badgeBg: string;
  badgeTextColor: string;
  cardHeaderBg: string;
  cardBodyBg: string;
  title: string;
  subtitle: string;
  description: string;
  suitableFor: string;
  deliverables: string[];
  turnaroundTime: string;
}

const packagesData: PackageData[] = [
  {
    id: "basic",
    iconSrc: "/images/editing-and-translation/basic-pacakge.png",
    badgeBg: "#fed7aa",
    badgeTextColor: "#c2410c",
    cardHeaderBg: "#f8fafc",
    cardBodyBg: "#cfdcdb",
    title: "Basic",
    subtitle: "Literature Review Essentials",
    description:
      "Assistance with writing from pre-collected studies and protocols",
    suitableFor: "Early-stage researchers, Students",
    deliverables: [
      "Initial protocol development",
      "Database search strategy (2–3 databases)",
      "Study selection using PRISMA guidelines",
      "Narrative synthesis of findings",
      "Grammarly-checked and Turnitin-reviewed document",
    ],
    turnaroundTime: "10–15 business days",
  },
  {
    id: "standard",
    iconSrc: "/images/publication-support/art-work-preparation/S.png",
    badgeBg: "#fef08a",
    badgeTextColor: "#a16207",
    cardHeaderBg: "#ffffff",
    cardBodyBg: "#d8c7e0",
    title: "Standard",
    subtitle: "Complete Systematic Review",
    description:
      "Comprehensive writing with literature search, inclusion/exclusion criteria",
    suitableFor: "Academics, Healthcare professionals",
    deliverables: [
      "Comprehensive protocol development and registration (e.g., PROSPERO)",
      "Multi-database search (4–5 databases + grey literature)",
      "Risk of bias assessment (e.g., Cochrane RoB, AMSTAR)",
      "Data extraction and qualitative/quantitative synthesis",
      "Formatting as per target journal guidelines",
    ],
    turnaroundTime: "30–40 business days",
  },
  {
    id: "advanced",
    iconSrc: "/images/product-development/advanced.webp",
    badgeBg: "#bbf7d0",
    badgeTextColor: "#15803d",
    cardHeaderBg: "#ffffff",
    cardBodyBg: "#dac295",
    title: "Advanced",
    subtitle: "Publication-Ready & Meta-Analysis Support",
    description:
      "Full-service writing, including protocol registration and meta-analysis (if needed)",
    suitableFor: "Researchers aiming for high-impact journals",
    deliverables: [
      "Everything in the Standard Package",
      "Meta-analysis with forest plots and statistical modelling",
      "Subgroup and sensitivity analysis",
      "GRADE framework for evidence certainty",
      "Journal selection and submission support",
      "Post-review rewriting based on reviewer comments",
    ],
    turnaroundTime: "60–120 business days",
  },
  {
    id: "rewriting",
    iconSrc: "/images/research-services/systematic-review/pa-icons-HFDYSD.png",
    badgeBg: "#fbcfe8",
    badgeTextColor: "#be185d",
    cardHeaderBg: "#f8fafc",
    cardBodyBg: "#dcdfc8",
    title: "Rewriting & Enhancement",
    subtitle: "",
    description:
      "Rewriting existing drafts to improve quality, structure, and compliance",
    suitableFor: "Authors with rejected or under-review manuscripts",
    deliverables: [
      "Review and critique of an existing systematic review manuscript",
      "Structural and methodological enhancements",
      "Language editing and reference formatting",
      "Rewriting based on reviewer/editor comments",
      "Rechecking for plagiarism and grammar",
    ],
    turnaroundTime: "15–25 business days",
  },
];

const addOnServices = [
  "Network meta-analysis",
  "Cost-effectiveness review (for HTA)",
  "Scoping review (PRISMA-ScR)",
  "Realist review methodology",
  "Translation of manuscript for multilingual journals",
  "Graphical abstracts & visual summary creation",
  "Poster or presentation slide preparation",
  "Journal formatting & compliance check",
  "Reference management using EndNote, Mendeley, or Zotero",
];

export default function SystematicReviewPackages() {
  return (
    <div
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        color: "#1f2937",
        backgroundColor: "#ffffff",
        paddingBottom: "60px",
      }}
    >
      {/* SECTION 1: Sample Work Banner */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "40px auto 60px auto",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            backgroundColor: "#f2faf5",
            borderRadius: "4px",
            padding: "40px 30px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          {/* Left Side: Image */}
          <div
            style={{
              flex: "1 1 300px",
              maxWidth: "360px",
              position: "relative",
              borderRadius: "4px",
              overflow: "hidden",
              minHeight: "220px",
              height: "240px",
            }}
          >
            <Image
              src="/images/research-services/systematic-review/Systematic-Review-Writing-Rewriting-Services-Sample-Work.png"
              alt="Systematic Review Writing and Rewriting Services sample work"
              fill
              sizes="360px"
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Right Side: Content */}
          <div style={{ flex: "2 1 400px" }}>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                color: "#0f2c3a",
                marginBottom: "16px",
                lineHeight: "1.3",
              }}
            >
              Systematic Review Writing &amp; Rewriting Services Sample Work
            </h2>

            <div style={{ marginBottom: "24px" }}>
              <Link
                href="/insights/sample-work"
                style={{
                  display: "inline-block",
                  backgroundColor: "#000000",
                  color: "#ffffff",
                  padding: "10px 32px",
                  borderRadius: "50px",
                  fontWeight: "600",
                  fontSize: "0.875rem",
                  border: "none",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Discover More
              </Link>
            </div>

            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "700",
                color: "#000000",
                marginBottom: "12px",
              }}
            >
              Download the full Report Now
            </h3>

            <p
              style={{
                fontSize: "0.925rem",
                color: "#374151",
                lineHeight: "1.6",
                marginBottom: "24px",
              }}
            >
              Explore our{" "}
              <Link
                href="/services/research-services/systematic-review"
                style={{ color: "#2563eb", textDecoration: "underline" }}
              >
                systematic review
              </Link>{" "}
              sample work, thoughtfully developed to meet journal-specific
              formatting requirements, methodological standards (e.g., PRISMA),
              and submission timelines for successful academic or clinical
              publication.
            </p>

            <div>
              <Link
                href="/insights/sample-work"
                style={{
                  display: "inline-block",
                  backgroundColor: "#000000",
                  color: "#ffffff",
                  padding: "10px 32px",
                  borderRadius: "50px",
                  fontWeight: "600",
                  fontSize: "0.875rem",
                  border: "none",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Packages Title & Subtitle */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto 40px auto",
          padding: "0 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "1.85rem",
            fontWeight: "700",
            color: "#0f2c3a",
            marginBottom: "16px",
          }}
        >
          Systematic Review Writing and Rewriting Service – Our Packages
        </h2>
        <p
          style={{
            fontSize: "0.95rem",
            color: "#374151",
            maxWidth: "900px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          At Pubrica, we offer comprehensive and customizable{" "}
          <Link
            href="/services/research-services/systematic-review"
            style={{ color: "#2563eb", textDecoration: "underline" }}
          >
            Systematic Review
          </Link>{" "}
          Writing and Rewriting Packages tailored to meet the diverse needs of
          researchers, academicians, clinicians, and institutions. Our expert
          team ensures your{" "}
          <Link
            href="/services/research-services/systematic-review"
            style={{ color: "#2563eb", textDecoration: "underline" }}
          >
            systematic review
          </Link>{" "}
          is methodologically sound, evidence-driven, and journal-ready.
        </p>
      </section>

      {/* SECTION 3: 4-Column Packages Grid */}
      <section
        style={{
          maxWidth: "1150px",
          margin: "0 auto 40px auto",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "16px",
            alignItems: "stretch",
          }}
        >
          {packagesData.map((pkg) => (
            <div
              key={pkg.id}
              style={{
                borderRadius: "2px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              {/* Card Header (White/Light) */}
              <div
                style={{
                  backgroundColor: pkg.cardHeaderBg,
                  padding: "18px 16px",
                  borderBottom: "1px solid rgba(0,0,0,0.05)",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  minHeight: "75px",
                }}
              >
                {/* Round Badge Icon */}
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    backgroundColor: pkg.badgeBg,
                    position: "relative",
                    flexShrink: 0,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={pkg.iconSrc}
                    alt=""
                    fill
                    sizes="38px"
                    style={{ objectFit: "contain" }}
                  />
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "700",
                      color: "#111827",
                      margin: 0,
                      lineHeight: "1.2",
                    }}
                  >
                    {pkg.title}
                  </h3>
                  {pkg.subtitle && (
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: "#4b5563",
                        display: "block",
                        marginTop: "2px",
                      }}
                    >
                      {pkg.subtitle}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body (Colored background based on package) */}
              <div
                style={{
                  backgroundColor: pkg.cardBodyBg,
                  padding: "20px 16px",
                  flex: "1 1 auto",
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "0.85rem",
                  color: "#1f2937",
                  lineHeight: "1.5",
                }}
              >
                {/* Description Item */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "8px",
                    marginBottom: "16px",
                  }}
                >
                  <span style={{ fontWeight: "bold", fontSize: "0.9rem" }}>
                    &#127773;
                  </span>
                  <div>
                    <strong>Description:</strong> {pkg.description}
                  </div>
                </div>

                {/* Suitable For Item */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "8px",
                    marginBottom: "16px",
                  }}
                >
                  <span style={{ fontWeight: "bold", fontSize: "0.9rem" }}>
                    &#127773;
                  </span>
                  <div>
                    <strong>Suitable For:</strong> {pkg.suitableFor}
                  </div>
                </div>

                {/* Deliverables Item */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "8px",
                    marginBottom: "12px",
                  }}
                >
                  <span style={{ fontWeight: "bold", fontSize: "0.9rem" }}>
                    &#127773;
                  </span>
                  <div>
                    <strong>Deliverables:</strong>
                  </div>
                </div>

                {/* Deliverables Bullet List */}
                <ul
                  style={{
                    margin: "0 0 20px 20px",
                    padding: 0,
                    listStyleType: "disc",
                  }}
                >
                  {pkg.deliverables.map((item, idx) => (
                    <li key={idx} style={{ marginBottom: "8px" }}>
                      {item}
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: "auto" }}>
                  {/* Turnaround Time */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <span style={{ fontWeight: "bold", fontSize: "0.9rem" }}>
                      &#127773;
                    </span>
                    <div>
                      <strong>Turnaround Time:</strong> {pkg.turnaroundTime}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: CTA Button */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <GetFreeQuoteButton/>
      </div>

      {/* SECTION 5: Add-on Services */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: "700",
            color: "#0f2c3a",
            marginBottom: "16px",
          }}
        >
          Add-on Services:
        </h3>

        <ul
          style={{
            margin: "0 0 0 20px",
            padding: 0,
            listStyleType: "disc",
            lineHeight: "1.8",
            color: "#374151",
            fontSize: "0.925rem",
          }}
        >
          {addOnServices.map((service, index) => (
            <li key={index} style={{ marginBottom: "6px" }}>
              {service}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
