"use client";

import { useState } from "react";
import Image from "next/image";

const accordionData = [
  {
    title: "Ethical Guidelines",
    items: [
      {
        title: "PRISMA",
        description:
          "(Preferred Reporting Items for Systematic Reviews and Meta-Analyses)",
      },
      {
        title: "MARS",
        description: "(Meta-Analysis Reporting Standards)",
      },
      {
        title: "MOOSE",
        description: "(Meta-analysis of Observational Studies in Epidemiology)",
      },
    ],
  },
  {
    title: "Professional Standards We Uphold",
    items: [
      {
        title: "Conflict of Interest (COI) Declarations",
        description:
          "Transparent disclosure of financial or professional interests.",
      },
      {
        title: "Data Transparency & Traceability",
        description:
          "All data sources, statistical methods, and analysis tools are cited and reproducible.",
      },
      {
        title: "Journal-Specific Compliance",
        description:
          "Manuscripts are tailored to meet the formatting and ethical standards of your targeted journal (e.g., ICMJE, Elsevier, Springer).",
      },
    ],
  },
  {
    title: "Software & Tools Aligned with Best Practices",
    items: [
      {
        title: "RevMan, STATA, R (meta, metafor packages)",
        description: "For statistical accuracy.",
      },
      {
        title: "Covidence, Rayyan",
        description: "For systematic screening.",
      },
      {
        title: "GRADEpro GDT",
        description: "For evaluating the strength of evidence.",
      },
    ],
  },
];

export default function MetaAnalysisComplianceSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      style={{
        maxWidth: "1100px",
        margin: "60px auto",
        padding: "0 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          color: "#163D44",
          marginBottom: "10px",
        }}
      >
        Our Compliance and Guideline Standards
      </h2>

      <h3
        style={{
          fontSize: "1.25rem",
          color: "#163D44",
          marginBottom: "18px",
        }}
      >
        Ensuring Scientific Integrity and Global Publication Readiness
      </h3>

      <p
        style={{
          color: "#374151",
          lineHeight: 1.8,
          marginBottom: "30px",
        }}
      >
        At Pubrica, we strictly adhere to internationally recognized
        meta-analysis guidelines and ethical standards to ensure your research
        meets the highest levels of scientific accuracy, transparency, and
        credibility. Our compliance framework guarantees that your meta-analysis
        is aligned with the expectations of top-tier peer-reviewed journals.
      </p>

      {accordionData.map((section, index) => (
        <div key={section.title} style={{ marginBottom: "16px" }}>
          <button
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            style={{
              width: "100%",
              background: "#143D3F",
              color: "#fff",
              border: "none",
              padding: "18px 20px",
              fontSize: "17px",
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ marginRight: 16 }}>
              {openIndex === index ? "−" : "+"}
            </span>

            {section.title}
          </button>

          {openIndex === index && (
            <div
              style={{
                background: "#fff",
                padding: "22px 28px",
              }}
            >
              <ul
                style={{
                  margin: 0,
                  paddingLeft: "18px",
                  lineHeight: 1.8,
                }}
              >
                {section.items.map((item) => (
                  <li
                    key={item.title}
                    style={{
                      marginBottom: "12px",
                      color: "#374151",
                    }}
                  >
                    <strong>{item.title}:</strong> {item.description}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}

      <div
        style={{
          marginTop: "45px",
          background: "#F1FBF6",
          padding: "35px",
          borderRadius: "10px",
          display: "grid",
          gridTemplateColumns: "320px 1fr",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <Image
          src="/images/services/meta-analysis-sample.jpg"
          alt="Meta-analysis sample work"
          width={320}
          height={320}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "6px",
            objectFit: "cover",
          }}
        />

        <div>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              marginBottom: "20px",
            }}
          >
            Meta-Analysis Service Sample Work
          </h2>

          <a
            href="#"
            style={{
              display: "inline-block",
              background: "#000",
              color: "#fff",
              padding: "14px 40px",
              borderRadius: "999px",
              textDecoration: "none",
              marginBottom: "30px",
              fontWeight: 600,
            }}
          >
            Discover More
          </a>

          <h3
            style={{
              fontSize: "1.8rem",
              marginBottom: "16px",
            }}
          >
            Download the full Report Now
          </h3>

          <p
            style={{
              color: "#374151",
              lineHeight: 1.8,
              marginBottom: "28px",
            }}
          >
            Explore our meta-analysis sample work, meticulously crafted to align
            with journal-specific formatting, methodological rigor (e.g. PRISMA,
            MARS), and submission deadlines, ensuring successful academic or
            clinical publication.
          </p>

          <a
            href="#"
            style={{
              display: "inline-block",
              background: "#000",
              color: "#fff",
              padding: "14px 40px",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Discover More
          </a>
        </div>
      </div>
    </section>
  );
}
