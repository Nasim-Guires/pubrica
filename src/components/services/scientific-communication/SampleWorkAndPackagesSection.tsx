"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import { PubricaSampleWorkCard } from "@/components/common/PubricaSampleWorkCardProps";
import CommonPackages, { PackageItem } from "@/components/common/CommonPackages";

// ==========================================
// TYPES & DATA STRUCTURES
// ==========================================

interface PackageCard {
  id: string;
  badge: string; // 'B', 'S', 'P'
  badgeSrc: string;
  title: string;
  headerColor: string; // Header background/text highlight color
  cardBgColor: string; // Body background color
  idealFor: string;
  includes: string[];
  turnaroundTime: string;
}

const packagesData: PackageItem[] = [
  {
    icon: "/images/editing-and-translation/basic-pacakge.png",
    title: "Basic",
    subtitle: "Essential Scientific Communication Support",
    idealFor:
      "Small-scale projects, conference abstracts, or short manuscripts.",
    includes: [
      "Review and editing of scientific content",
      "Formatting per journal/conference guidelines",
      "Basic reference management",
    ],
    turnaround: "3–5 business days",
    cardBgColor: "#cfd8d7",
    titleColor: "#92400e",
  },
  {
    icon: "/images/publication-support/poster-preparation/S.png",
    title: "Standard",
    subtitle: "Comprehensive Scientific Communication",
    idealFor:
      "Clinical study reports, full-length manuscripts, or regulatory documents.",
    includes: [
      "Comprehensive content development and editing",
      "Scientific accuracy verification and consistency checks",
      "Advanced reference management and citation formatting",
      "Figure and table review for clarity and compliance",
    ],
    turnaround: "7–10 business days",
    cardBgColor: "#d3c2dc",
    titleColor: "#075985",
  },
  {
    icon: "/images/editing-and-translation/translation-with-editing/pro.webp",
    title: "Premium",
    subtitle: "End-to-End Scientific Medical Communication",
    idealFor:
      "Multi-author, multi-section publications, high-impact journals, or regulatory submissions.",
    includes: [
      "End-to-end content development and scientific writing",
      "Critical review and expert editorial guidance",
      "Customized graphical abstracts, figures, and tables",
      "Formatting, reference management, and journal-specific submission support",
      "Compliance checks (ICMJE, GPP, CONSORT, PRISMA, or regulatory standards)",
    ],
    turnaround: "10–15 business days",
    cardBgColor: "#d8be8d",
    titleColor: "#1d4ed8",
  },
];

const addOnServices = [
  "Medical illustration and infographic creation",
  "Statistical review and data interpretation support",
  "Translation and multilingual editing",
  "Rapid-turnaround editing",
];

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function SampleWorkAndPackagesSection() {
  return (
    <div className="w-full bg-white text-slate-800 font-sans py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">

        <PubricaSampleWorkCard
          bookCoverImage={{
            src: "/images/scientific-communication/Scientific-Medical-Communication-Sample-Work.webp",
            alt: "Scientific research team analyzing data on tablet",
            width: 600,
            height: 400,
          }}
          sections={[
            {
              heading: "Scientific Medical Communication Sample Work",
              button: {
                label: "Discover More",
                url: "/insights/sample-work",
              },
            },
            {
              heading: "Download the full Report Now",
              descriptionSegments: [
                {
                  text: "Explore our scientific medical communication sample work, crafted to meet stringent methodological standards, regulatory and journal-specific guidelines, and project timelines. We deliver accurate, clear, and publication-ready content that enhances academic, clinical, and medical research impact.",
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

        {/* ==========================================
            SECTION 2: OUR PACKAGES
        ========================================== */}
        <section>
          <CommonPackages
            title="Scientific Medical Communication Service – Our Packages"
            description="Pubrica’s Scientific Medical Communication services are designed to support researchers, clinicians, and healthcare organizations in delivering accurate, clear, and impactful scientific content. We offer tailored packages to meet different project requirements, ensuring compliance with global standards and publication readiness."
            packages={packagesData}
          />
          {/* CTA Button */}
          <div className="text-center mb-14">
            <GetFreeQuoteButton />
          </div>

          {/* ==========================================
              SECTION 3: ADD-ON SERVICES
          ========================================== */}
          <div className="pt-4">
            <h3 className="text-lg md:text-xl font-extrabold text-[#0d3b44] mb-4">
              Add-On Services (Optional)
            </h3>
            <ul className="space-y-2.5 pl-5">
              {addOnServices.map((addon, index) => (
                <li
                  key={index}
                  className="text-xs md:text-sm text-gray-700 leading-relaxed list-disc"
                >
                  {addon}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
