"use client";

import React, { useState } from "react";
import Image from "next/image";
import { EditorialWorkflowSection } from "../journal-manuscript-formatting-services/ProcessAndBenefitsSections";
import Link from "next/link";

// --- Types & Data ---
interface ComplianceItem {
  id: string;
  name: string;
  imageSrc: string;
  url?: string;
}

const PAGE_IMAGES = "/images/publication-support/art-work-preparation";

const workflowSteps = [
  {
    stepNumber: 1,
    title: "SUBMIT YOUR FILES",
    description:
      "Send us your final editable artwork files and other relevant information",
    iconSrc: `${PAGE_IMAGES}/submit-your-files.png`,
    position: "top",
  },
  {
    stepNumber: 2,
    title: "PRECISION FORMATTING & TECHNICAL REVIEW",
    description:
      "Check the files and resend for revisions (as many times as required, within 60 days)",
    iconSrc: `${PAGE_IMAGES}/Precision-Formatting-Technical-Review.png`,
    position: "bottom",
  },
  {
    stepNumber: 3,
    title: "OUR EXPERTS WORK ON YOUR ARTWORK",
    description:
      "Our designers will format/revise your artwork to meet the journal's technical requirements, while an expert editor checks your artwork for consistency and technical accuracy",
    iconSrc: `${PAGE_IMAGES}/Our-experts-work-on-your-artwork.png`,
    position: "top",
  },
];

const clinicalItems: ComplianceItem[] = [
  { id: "cope", name: "Committee on Publication Ethics (COPE)", imageSrc: "/images/publication-support/responding-to-reviewers/COPE_thumb.png", url: "https://publicationethics.org/" },
  { id: "consort", name: "Consolidated Standards of Reporting Trials (CONSORT)", imageSrc: "/images/publication-support/poster-preparation/consort-logo-.png", url: "https://www.consort-spirit.org/" },
  { id: "hipaa", name: "Health Insurance Portability and Accountability Act", imageSrc: "/images/publication-support/poster-preparation/HIPAA-COMPILANCE-.png", url: "/services/publication-support/hipaa-compliance-complete-overview" },
  { id: "icmje", name: "International Committee of Medical Journal Editors (ICMJE)", imageSrc: "/images/publication-support/ICMJE.webp", url: "https://www.icmje.org" },
];

const journalItems: ComplianceItem[] = [
  { id: "elsevier", name: "Elsevier", imageSrc: `${PAGE_IMAGES}/elsevier-.png`, url: "https://www.elsevier.com" },
  { id: "springer", name: "Springer", imageSrc: `${PAGE_IMAGES}/Springer.png`, url: "https://www.springer.com/" },
  { id: "wiley", name: "Wiley", imageSrc: `${PAGE_IMAGES}/Wiley.png`, url: "http://wiley.com/en-in/" },
  { id: "nejm", name: "New England Journal of Medicine", imageSrc: `${PAGE_IMAGES}/New-England-Journal-of-Medicine.png`, url: "https://www.nejm.org/" },
];

export default function ArtworkPreparationDetails() {
  const [activeTab, setActiveTab] = useState<"clinical" | "journal">("clinical");

  const activeItems = activeTab === "clinical" ? clinicalItems : journalItems;

  return (
    <div className="w-full font-sans">

      {/* ---------------- SECTION 1: PROCESS STEPS ---------------- */}
      <EditorialWorkflowSection
        heading="How our Article Artwork Preparation Service works"
        subheading="Our step-by-Step Process"
        description="With Pubrica’s artwork preparation service, our skilled designers and scientific editors collaborate to ensure your figures adhere to journal-specific technical standards, seamlessly and accurately."
        steps={workflowSteps}
      />

      {/* ---------------- SECTION 2: DARK CTA BANNER ---------------- */}
      <section className="w-full bg-[#032d1f] text-white py-5 px-4 text-center">
        <div className="mx-auto max-w-5xl">
          <h3 className="text-xl md:text-2xl font-bold mb-3">
            Focus on Your Research — We’ll Handle the Artwork
          </h3>
          <p className="text-sm md:text-base text-gray-200 leading-relaxed max-w-3xl mx-auto">
            With Pubrica, get professionally formatted, journal-compliant figures
            and illustrations, ensuring they meet submission standards without
            the hassle.
          </p>
        </div>
      </section>

      {/* ---------------- SECTION 3: COMPLIANCE STANDARDS ---------------- */}
      <section className="w-full bg-white py-7 px-4 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0c373b] mb-3">
            Our Compliance and Guideline Standards
          </h2>
          <p className="text-sm md:text-base text-slate-700 mb-8 max-w-5xl leading-relaxed">
            At Pubrica, we ensure that every figure and illustration we prepare
            meets international and journal-specific artwork guidelines to
            provide you with high-quality, submission-ready visuals for your
            manuscript.
          </p>

          {/* Toggle Pills */}
          <div className="mx-auto max-w-3xl mb-12">
            <div className="bg-[#115b5c] p-1.5 rounded-full flex items-center justify-between">
              <button
                type="button"
                onClick={() => setActiveTab("clinical")}
                className={`w-1/2 py-3 px-4 rounded-full text-xs md:text-sm font-semibold transition-all ${activeTab === "clinical"
                    ? "bg-[#052b2b] text-white shadow-inner"
                    : "text-white hover:text-gray-200"
                  }`}
              >
                Clinical and Ethical Compliance
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("journal")}
                className={`w-1/2 py-3 px-4 rounded-full text-xs md:text-sm font-semibold transition-all ${activeTab === "journal"
                    ? "bg-[#052b2b] text-white shadow-inner"
                    : "text-white hover:text-gray-200"
                  }`}
              >
                Journal-specific Guideline
              </button>
            </div>
          </div>

          {/* Logo Cards Grid with Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeItems.map((item) => (
              <a
                key={item.id}
                href={item.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-slate-200 rounded-lg p-6 flex flex-col items-center justify-between text-center bg-white shadow-sm hover:shadow-md transition-all h-[220px]"
              >
                <div className="relative w-full h-24 my-auto flex items-center justify-center">
                  <Image
                    src={item.imageSrc}
                    alt={item.name}
                    width={160}
                    height={80}
                    className="object-contain max-h-20"
                  />
                </div>
                <p className="text-xs md:text-sm font-bold text-[#0c373b] mt-4 group-hover:text-blue-600 transition-colors">
                  {item.name}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 4: SAMPLE REPORT DOWNLOAD ---------------- */}
      <section className="w-full bg-[#f0fbf5] py-6 px-4 md:px-8">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 flex justify-center">
            <div className="relative w-[220px] h-[300px] border border-gray-200 shadow-md rounded-sm overflow-hidden bg-white">
              <Image
                src={`${PAGE_IMAGES}/Artwork-Preparation-Sample-Work.jpg`}
                alt="Artwork Preparation Sample Work"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-8 space-y-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                Artwork Preparation Sample Work
              </h3>
              <Link
                href="/insights/sample-work/citation-and-formatting/"
                className="inline-block w-full sm:w-auto text-center bg-black hover:bg-slate-800 text-white font-medium text-sm py-3 px-12 rounded-full transition-colors"
              >
                Discover More
              </Link>
            </div>

            <div className="pt-2">
              <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                Download the full Report Now
              </h3>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed mb-4 max-w-xl">
                Explore our artwork preparation sample work crafted to meet your
                conference's formatting requirements, visual standards, and
                presentation deadlines.
              </p>
              <Link
                href="/insights/sample-work/citation-and-formatting/"
                className="inline-block w-full sm:w-auto text-center bg-black hover:bg-slate-800 text-white font-medium text-sm py-3 px-12 rounded-full transition-colors"
              >
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}