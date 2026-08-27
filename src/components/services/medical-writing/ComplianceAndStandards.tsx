"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface StandardCard {
  id: string;
  name: string;
  title: string;
  logo: string;
  url: string;
}

const standardsData: StandardCard[] = [
  {
    id: "cope",
    name: "COPE",
    title: "Committee on Publication Ethics",
    logo: "/images/publication-support/responding-to-reviewers/COPE_thumb.png",
    url: "https://publicationethics.org/",
  },
  {
    id: "wame",
    name: "WAME",
    title: "World Association of Medical Editors",
    logo: "/images/publication-support/journal-selection/WAME.webp",
    url: "https://www.wame.org",
  },
  {
    id: "icmje",
    name: "ICMJE",
    title: "International Committee of Medical Journal Editors",
    logo: "/images/publication-support/journal-selection/ICMJE.webp",
    url: "https://www.icmje.org",
  },
  {
    id: "consort",
    name: "SPIRIT / CONSORT",
    title: "Consolidated Standards of Reporting Trials",
    logo: "/images/publication-support/responding-to-reviewers/Consort-Logo.webp",
    url: "https://www.equator-network.org",
  },
];

const frameworksList = [
  "ICH Guidelines – International Council for Harmonisation (E3, E6, E9, etc.)",
  "GCP (Good Clinical Practice)",
  "FDA (U.S. Food & Drug Administration)",
  "SFDA (Saudi Food & Drug Authority)",
  "EMA (European Medicines Agency)",
  "MHRA (UK) Medicines and Healthcare products Regulatory Agency",
  "TGA (Australia) Therapeutic Goods Administration",
  "EU MDR/IVDR – Medical Device Regulations",
  "MDCG Guidance Documents – For EU Device Submissions",
  "ISO 14155 – Clinical Investigation of Medical Devices",
  "ISO 20417 – IFU Content Requirements",
];

export default function ComplianceAndStandards(): React.ReactElement {
  // Default second card (WAME) active as shown in the screenshot hover state
  const [activeCard, setActiveCard] = useState<string>("wame");

  return (
    <section className="w-full bg-white font-sans text-slate-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* ---------------- 1. COMPLIANCE & GUIDELINE CARDS ---------------- */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#09322e] text-center mb-10">
            Our Compliance And Guideline Standards
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {standardsData.map((item) => {
              const isActive = activeCard === item.id;
              return (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setActiveCard(item.id)}
                  className={`flex flex-col items-center justify-between p-6 rounded-lg border transition-all duration-300 ${
                    isActive
                      ? "border-slate-300 shadow-xl bg-white -translate-y-1 ring-1 ring-slate-200"
                      : "border-slate-200 shadow-sm bg-white hover:shadow-md"
                  }`}
                >
                  <div className="h-20 flex items-center justify-center w-full mb-4 relative">
                    <Image
                      src={item.logo}
                      alt={item.name}
                      width={180}
                      height={60}
                      className="max-h-16 w-auto object-contain"
                    />
                  </div>
                  <p
                    className={`text-xs sm:text-sm font-bold text-center transition-colors ${
                      isActive ? "text-[#008ba3]" : "text-[#09322e]"
                    }`}
                  >
                    {item.title}
                  </p>
                </a>
              );
            })}
          </div>
        </div>

        {/* ---------------- 2. MAIN CONTENT & REGULATORY FRAMEWORKS ---------------- */}
        <div className="space-y-8">
          {/* Header & Body Description */}
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#09322e] leading-tight">
              Certified Excellence. Global Compliance. Guaranteed Integrity
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              At Pubrica, we adhere to the highest global standards in{" "}
              <Link
                href="/academy/medical-writing/avoiding-sentence-fragments-academic-writing"
                className="text-[#008ba3] underline underline-offset-2 hover:text-[#09322e] transition-colors"
              >
                medical writing
              </Link>
              , regulatory documentation, and scientific communication. Our
              processes, team, and deliverables are aligned with international
              regulatory requirements and industry best practices—ensuring your
              content is accurate, compliant, and fully ready for submission or
              publication.
            </p>
          </div>

          <div className="pt-4 max-w-3xl">
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#09322e]">
                Regulatory Frameworks We Comply With
              </h3>

              <ul className="space-y-3.5">
                {frameworksList.map((framework, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm sm:text-base text-slate-700"
                  >
                    <span className="flex-shrink-0 mt-1.5 w-2.5 h-2.5 rounded-full border-2 border-[#b91c1c] bg-white flex items-center justify-center">
                      <span className="w-1 h-1 rounded-full bg-[#b91c1c]" />
                    </span>
                    <span className="leading-snug">{framework}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
