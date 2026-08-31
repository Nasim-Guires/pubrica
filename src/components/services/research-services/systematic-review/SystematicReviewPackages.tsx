"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import { PubricaSampleWorkCard } from "@/components/common/PubricaSampleWorkCardProps";
import CommonPackages, { PackageItem } from "@/components/common/CommonPackages";

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

const packages: PackageItem[] = [
  {
    icon: "/images/editing-and-translation/basic-pacakge.png",
    title: "Basic",
    subtitle: "Literature Review Essentials",
    idealFor: "Early-stage researchers, Students",
    includes: [
      "Initial protocol development",
      "Database search strategy (2–3 databases)",
      "Study selection using PRISMA guidelines",
      "Narrative synthesis of findings",
      "Grammarly-checked and Turnitin-reviewed document",
    ],
    turnaround: "10–15 business days",
    cardBgColor: "#cfdcdb",
    titleColor: "#c2410c",
  },
  {
    icon: "/images/publication-support/art-work-preparation/S.png",
    title: "Standard",
    subtitle: "Complete Systematic Review",
    idealFor: "Academics, Healthcare professionals",
    includes: [
      "Comprehensive protocol development and registration (e.g., PROSPERO)",
      "Multi-database search (4–5 databases + grey literature)",
      "Risk of bias assessment (e.g., Cochrane RoB, AMSTAR)",
      "Data extraction and qualitative/quantitative synthesis",
      "Formatting as per target journal guidelines",
    ],
    turnaround: "30–40 business days",
    cardBgColor: "#d8c7e0",
    titleColor: "#a16207",
  },
  {
    icon: "/images/product-development/advanced.webp",
    title: "Advanced",
    subtitle: "Publication-Ready & Meta-Analysis Support",
    idealFor: "Researchers aiming for high-impact journals",
    includes: [
      "Everything in the Standard Package",
      "Meta-analysis with forest plots and statistical modelling",
      "Subgroup and sensitivity analysis",
      "GRADE framework for evidence certainty",
      "Journal selection and submission support",
      "Post-review rewriting based on reviewer comments",
    ],
    turnaround: "60–120 business days",
    cardBgColor: "#dac295",
    titleColor: "#15803d",
  },
  {
    icon: "/images/research-services/systematic-review/pa-icons-HFDYSD.png",
    title: "Rewriting & Enhancement",
    idealFor: "Authors with rejected or under-review manuscripts",
    includes: [
      "Review and critique of an existing systematic review manuscript",
      "Structural and methodological enhancements",
      "Language editing and reference formatting",
      "Rewriting based on reviewer/editor comments",
      "Rechecking for plagiarism and grammar",
    ],
    turnaround: "15–25 business days",
    cardBgColor: "#dcdfc8",
    titleColor: "#be185d",
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
      <PubricaSampleWorkCard
        bookCoverImage={{
          src: "/images/research-services/systematic-review/Systematic-Review-Writing-Rewriting-Services-Sample-Work.png",
          alt: "Systematic Review Writing and Rewriting Services sample work",
          width: 600,
          height: 400,
        }}
        sections={[
          {
            heading:
              "Systematic Review Writing & Rewriting Services Sample Work",
            button: {
              label: "Discover More",
              url: "/insights/sample-work",
            },
          },
          {
            heading: "Download the full Report Now",
            descriptionSegments: [
              { text: "Explore our " },
              {
                text: "systematic review",
                url: "/services/research-services/systematic-review/systematic-reviews-guide",
              },
              {
                text: " sample work, thoughtfully developed to meet journal-specific formatting requirements, methodological standards (e.g., PRISMA), and submission timelines for successful academic or clinical publication.",
              },
            ],
            button: {
              label: "Discover More",
              url: "/insights/sample-work",
            },
          },
        ]}
        footerDisclaimerSegments={[]}
      />
      {/* SECTION 2: Packages Title & Subtitle */}
      <CommonPackages
        title="Systematic Review Writing and Rewriting Service – Our Packages"
        description={
          <>
            At Pubrica, we offer comprehensive and customizable{" "}
            <Link
              href="/academy/systematic-review/prospero-protocol-registration-guide/"
              className="text-blue-600"
            >
              Systematic Review
            </Link>{" "}
            Writing and Rewriting Packages tailored to meet the diverse needs of
            researchers, academicians, clinicians, and institutions. Our expert team
            ensures your{" "}
            <Link
              href="/academy/systematic-review/qualitative-data-analysis-using-maxqda-guide/"
              className="text-blue-600"
            >
              systematic review
            </Link>{" "}
            is methodologically sound, evidence-driven, and journal-ready.
          </>
        }
        packages={packages}
      />


      {/* SECTION 4: CTA Button */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <GetFreeQuoteButton />
      </div>

      {/* SECTION 5: Add-on Services */}
      <section className="mx-auto max-w-[1100px] px-5 py-2">
        <h3 className="mb-2 text-xl font-bold text-[#0f2c3a]">
          Add-on Services:
        </h3>

        <ul className="ml-5 list-disc text-[0.925rem] leading-snug text-gray-700">
          {addOnServices.map((service, index) => (
            <li key={index} className="mb-1">
              {service}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
