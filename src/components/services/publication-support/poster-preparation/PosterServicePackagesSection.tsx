"use client";

import React from "react";
import Link from "next/link";
import CommonPackages from "@/components/common/CommonPackages"; // Adjust path as needed
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

export default function PosterServicePackagesSection() {
  const posterPackages = [
    {
      title: "Standard",
      subtitle: "HIGH-END PUBLICATION SUPPORT + RAPID TECHNICAL REVIEW",
      icon: "/images/publication-support/poster-preparation/S.png",
      cardBgColor: "#cddcd9",
      titleColor: "#154d44",
      idealFor:
        "Researchers and students presenting at university-level conferences who require a clear, structured, and visually appealing poster with basic formatting.",
      includes: [
        "Custom layout using PowerPoint or PDF",
        "Structured sections (Title, Introduction, Methods, Results, Conclusion)",
        "Basic graphic integration (charts, tables, logos)",
        "Institutional branding (colour codes, logo placement)",
        "Language check (grammar and clarity)",
      ],
      addOns: ["One revision cycle", "Print-ready file optimization"],
      turnaround: "4–5 business days",
    },
    {
      title: "ADVANCED",
      subtitle: "HIGH-END PUBLICATION SUPPORT + RAPID TECHNICAL REVIEW",
      icon: "/images/publication-support/journal-selection/advanced.webp",
      cardBgColor: "#d8c2e5",
      titleColor: "#8b5cf6",
      idealFor:
        "Researchers targeting national or international academic conferences requiring data visualization and enhanced layout design.",
      includes: [
        "A PDF file of your poster artwork prepared (PowerPoint, Adobe Illustrator/InDesign)",
        "Scientific accuracy check by a domain expert",
        "Visual enhancement of figures, tables, and graphs",
        "Conference-specific formatting (dimensions, font sizes, word limits)",
        "High-resolution output (300 dpi, CMYK or RGB)",
        "Compliance with institutional and conference guidelines",
      ],
      addOns: [
        "Multi-language support",
        "QR code integration",
        "Additional revision cycle",
      ],
      turnaround: "5–7 business days",
    },
    {
      title: "Premium",
      subtitle: "HIGH-END PUBLICATION SUPPORT + RAPID TECHNICAL REVIEW",
      icon: "/images/publication-support/responding-to-reviewers/pa-icons-.png",
      cardBgColor: "#d8be92",
      titleColor: "#78350f",
      idealFor:
        "Senior researchers, clinicians, and faculty presenting at global conferences such as ASCO, ADA, AHA, ESMO, or WHO scientific forums requiring regulatory-compliant and publication-quality poster design.",
      includes: [
        "Advanced poster design using Adobe tools",
        "Expert content restructuring and synthesis",
        "Data visualization with infographic elements",
        "Compliance with HIPAA, GDPR, and ICMJE (for clinical data)",
        "Custom icons, branding, and illustration support",
        "Scientific peer review + Language editing by native PhD editors",
        "Submission-ready and editable files (PDF, AI, PPT)",
      ],
      addOns: [
        "Drafting of a response letter for journal reviewers",
        "Language editing and technical proofreading",
      ],
      turnaround: "10 working days.",
    },
  ];

  return (
    <section className="w-full py-12 px-4 md:px-8 font-sans text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-3">
            Poster Preparation Service Packages
          </h2>
          <p className="text-gray-600 text-xs md:text-sm max-w-4xl mx-auto leading-relaxed">
            Choosing the appropriate package will guarantee your scientific
            poster is professionally formatted and ready for presentation.
            Whether you need a quick design adjustment or you need assistance
            organizing and designing all of your content, Pubrica has custom{" "}
            <Link
              href="/services/publication-support/poster-preparation"
              className="text-[#0284c7] hover:underline font-medium"
            >
              poster preparation
            </Link>{" "}
            packages based on different levels of complexity and conference
            requirements.
          </p>
        </div>

        {/* Common Packages Component Implementation */}
        <CommonPackages packages={posterPackages} />
        <GetFreeQuoteButton />
      </div>
    </section>
  );
}