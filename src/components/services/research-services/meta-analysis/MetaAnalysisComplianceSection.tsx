"use client";

import { useState } from "react";
import Image from "next/image";

interface AccordionItem {
  title: string;
  description: string;
  link: string;
  separator?: string;
}

interface AccordionSection {
  title: string;
  type: "cards" | "list";
  items: AccordionItem[];
}

const accordionData: AccordionSection[] = [
  {
    title: "Ethical Guidelines",
    type: "cards",
    items: [
      {
        title: "PRISMA",
        description:
          "(Preferred Reporting Items for Systematic Reviews and Meta-Analyses)",
        link: "https://www.prisma-statement.org/",
      },
      {
        title: "MARS",
        description: "(Meta-Analysis Reporting Standards)",
        link: "/services/research-services/meta-analysis/meta-analysis-reporting-standards/",
      },
      {
        title: "MOOSE",
        description:
          "(Meta-analysis of Observational Studies in Epidemiology)",
        link: "#",
      },
    ],
  },
  {
    title: "Professional Standards We Uphold",
    type: "list",
    items: [
      {
        title: "Conflict of Interest (COI) Declarations",
        description:
          "Transparent disclosure of financial or professional interests.",
        link: "#",
      },
      {
        title: "Data Transparency & Traceability",
        description:
          "All data sources, statistical methods, and analysis tools are cited and reproducible.",
        link: "#",
      },
      {
        title: "Journal-Specific Compliance",
        description:
          "Manuscripts are tailored to meet the formatting and ethical standards of your targeted journal (e.g., ICMJE, Elsevier, Springer).",
        link: "#",
      },
    ],
  },
  {
    title: "Software & Tools Aligned with Best Practices",
    type: "list",
    items: [
      {
        title: "RevMan, STATA, R (meta, metafor packages)",
        description: "for statistical accuracy",
        separator: " – ",
        link: "#",
      },
      {
        title: "Covidence, Rayyan",
        description: "for systematic screening",
        separator: " – ",
        link: "#",
      },
      {
        title: "GRADEpro GDT",
        description: "for evaluating the strength of evidence",
        separator: " – ",
        link: "#",
      },
    ],
  },
];

export default function MetaAnalysisComplianceSection() {
  // Set initial state to -1 so all cards/accordions are closed by default
  const [openIndex, setOpenIndex] = useState(-1);

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
        <div key={section.title} style={{ marginBottom: "20px" }}>
          {/* Accordion Header Bar */}
          <button
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            style={{
              width: "100%",
              background: "#0d3133",
              color: "#fff",
              border: "none",
              padding: "16px 20px",
              fontSize: "18px",
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              textAlign: "left",
            }}
          >
            <span style={{ marginRight: 16, fontSize: "20px", fontWeight: "bold" }}>
              {openIndex === index ? "−" : "+"}
            </span>
            {section.title}
          </button>

          {/* Accordion Content */}
          {openIndex === index && (
            <div style={{ padding: "24px 0", background: "#fff" }}>
              {/* Card View Layout for Ethical Guidelines */}
              {section.type === "cards" ? (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "20px",
                  }}
                >
                  {section.items.map((item) => (
                    <a
                      key={item.title}
                      href={item.link}
                      style={{
                        border: "1px solid #111",
                        borderRadius: "8px",
                        padding: "24px 16px",
                        textAlign: "center",
                        textDecoration: "none",
                        color: "inherit",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <strong
                        style={{
                          fontSize: "18px",
                          marginBottom: "12px",
                          display: "block",
                          color: "#000",
                        }}
                      >
                        {item.title}
                      </strong>
                      <span
                        style={{
                          fontSize: "14px",
                          color: item.title === "MARS" ? "#2563eb" : "#4b5563",
                          lineHeight: 1.4,
                        }}
                      >
                        {item.description}
                      </span>
                    </a>
                  ))}
                </div>
              ) : (
                /* Bulleted List Layout for other sections */
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "20px",
                    lineHeight: 2,
                    listStyleType: "disc",
                  }}
                >
                  {section.items.map((item) => (
                    <li
                      key={item.title}
                      style={{
                        marginBottom: "10px",
                        color: "#cc0000", // Red color for bullets
                      }}
                    >
                      <a
                        href={item.link}
                        style={{
                          textDecoration: "none",
                          color: "#1f2937",
                        }}
                      >
                        <strong style={{ color: "#000" }}>{item.title}</strong>
                        {item.separator || ": "}
                        <span>{item.description}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      ))}

      {/* Sample Work Section */}
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
          src="/images/research-services/meta-analysis/Meta-Analysis-Service-Sample-Work.png"
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