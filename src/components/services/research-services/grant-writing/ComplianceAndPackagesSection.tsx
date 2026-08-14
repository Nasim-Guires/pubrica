"use client";

import React, { useState } from "react";
import Image from "next/image";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

// Types
interface ComplianceItem {
  id: string;
  title: string;
  iconSrc: string;
  content: React.ReactNode;
}

interface PackageItem {
  id: string;
  badgeImage: string;
  title: string;
  subtitle: string;
  description: string;
  bgColor: string;
  borderColor: string;
  features: string[];
}

export default function ComplianceAndPackagesSection() {
  // State for Accordion Cards (null = all closed by default)
  const [openCardId, setOpenCardId] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setOpenCardId((prevId) => (prevId === id ? null : id));
  };

  // 1. Compliance Data
  const complianceData: ComplianceItem[] = [
    {
      id: "funding",
      title: "Funding Agency Guidelines",
      iconSrc:
        "/images/research-services/grant-writing/Funding-Agency-Guidelines.png",
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-slate-700">
          <p>
            We follow the specific formats, templates, and submission protocols
            mandated by:
          </p>
          <ul className="space-y-2 list-none pl-1">
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">•</span>
              <span>
                <strong className="text-sky-600">NIH</strong>, NSF, DBT, DST,{" "}
                <strong className="text-sky-600">ICMR</strong>,{" "}
                <strong className="text-sky-600">BIRAC</strong>, CSIR
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">•</span>
              <span>
                <strong className="text-sky-600">WHO</strong>, UNDP, Gates
                Foundation, Horizon Europe
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">•</span>
              <span>
                CSR compliance under Section 135 of the Indian Companies Act
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">•</span>
              <span>SBIR/STTR, ERC, and other global funding frameworks</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "ethics",
      title: "Ethical and Scientific Integrity",
      iconSrc:
        "/images/research-services/grant-writing/Ethical-and-Scientific-Integrity.png",
      content: (
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          Our writing complies with ethical standards in research proposal
          development, such as{" "}
          <a href="#icmje" className="text-sky-600 hover:underline">
            ICMJE
          </a>{" "}
          and{" "}
          <a href="#cope" className="text-sky-600 hover:underline">
            COPE
          </a>{" "}
          guidelines.
        </p>
      ),
    },
    {
      id: "budget",
      title: "Budgetary and Financial Accuracy",
      iconSrc:
        "/images/research-services/grant-writing/Budgetary-and-Financial-Accuracy.png",
      content: (
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          Adhere to Uniform Guidance (21 CFR 200) for U.S. federal grants and
          standard global costing principles.
        </p>
      ),
    },
  ];

  // 2. Packages Data
  const packageData: PackageItem[] = [
    {
      id: "basic",
      badgeImage: "/images/editing-and-translation/basic-pacakge.png",
      title: "Basic",
      subtitle: "Grant Proposal Review & Editing",
      description:
        "Ideal for clients who already have a draft proposal and need expert refinement.",
      bgColor: "bg-[#dbe7e4]/60",
      borderColor: "border-[#b8d1cb]",
      features: [
        "Structural and language editing",
        "Formatting as per funder guidelines",
        "Compliance check (NIH, EU, ICMR, etc.)",
        "Reviewer feedback integration",
      ],
    },
    {
      id: "standard",
      badgeImage:
        "/images/publication-support/responding-to-reviewers/standard-logo.png",
      title: "Standard",
      subtitle: "Grant Proposal Writing",
      description:
        "Perfect for clients with research objectives and data ready for proposal development.",
      bgColor: "bg-[#e2d8e8]/60",
      borderColor: "border-[#cbb9d6]",
      features: [
        "Full proposal drafting",
        "Executive summary, aims, and methodology",
        "Budget justification and timeline",
        "Formatting and compliance assurance",
        "One round of revisions",
      ],
    },
    {
      id: "premium",
      badgeImage: "/images/editing-and-translation/pro.webp",
      title: "Premium",
      subtitle: "End-To-End Grant Support",
      description:
        "Comprehensive support from concept to submission, ideal for first-time applicants or large funding programs.",
      bgColor: "bg-[#e8d8be]/60",
      borderColor: "border-[#d8be98]",
      features: [
        "Research idea conceptualization",
        "Literature background and need assessment",
        "Full proposal writing + all annexures",
        "Budget planning, Gantt chart, logic model",
        "Submission guidance and revision support",
        "Post-submission consultation (if required)",
      ],
    },
  ];

  return (
    <div className="w-full bg-white text-slate-800 font-sans">
      {/* ========================================================= */}
      {/* SECTION 1: COMPLIANCE AND GUIDELINE STANDARDS             */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b38]">
            Our Compliance and Guideline Standards
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-5xl">
            At Pubrica, we adhere strictly to global and agency-specific
            compliance standards to ensure your grant proposals meet the highest
            standards of credibility, accuracy, and funding success.
          </p>
        </div>

        {/* 3 Collapsible Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {complianceData.map((item) => {
            const isOpen = openCardId === item.id;
            return (
              <div
                key={item.id}
                className="border border-slate-200 rounded-md overflow-hidden bg-white shadow-sm transition-all duration-300"
              >
                {/* Clickable Header Bar */}
                <button
                  type="button"
                  onClick={() => toggleCard(item.id)}
                  className="w-full bg-[#e6f4f1] p-4 flex items-center justify-between gap-3 text-left hover:bg-[#d8ece8] transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-9 h-9 flex-shrink-0">
                      <Image
                        src={item.iconSrc}
                        alt=""
                        width={35}
                        height={35}
                        className="object-contain"
                      />
                    </div>
                    <span className="font-bold text-[#0e3b38] text-sm sm:text-base">
                      {item.title}
                    </span>
                  </div>
                  <span className="text-slate-600 font-bold text-lg select-none">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Collapsible Content Area */}
                {isOpen && (
                  <div className="p-5 border-t border-slate-200 bg-white animate-fadeIn">
                    {item.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: SAMPLE WORK BANNER                             */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto my-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-[#edf9f5] rounded-lg p-6 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center border border-emerald-100 shadow-xs">
          {/* Left Image Column */}
          <div className="md:col-span-5 relative h-64 sm:h-80 w-full rounded-md overflow-hidden shadow-sm">
            <Image
              src="/images/research-services/grant-writing/Grant-Writing-Services-Sample-Work.png"
              alt="Hand holding fountain pen writing grant proposal"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Content Column */}
          <div className="md:col-span-7 space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                Grant Writing Services Sample Work
              </h3>
              <a
                href="#discover-more"
                className="inline-block bg-black hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm px-8 py-2.5 rounded-full transition-colors duration-200"
              >
                Discover More
              </a>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                Download the full Report Now
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                Explore our grant writing sample work, meticulously crafted to
                align with funder-specific guidelines, compliance standards
                (e.g., NIH, Horizon Europe), and submission deadlines to enhance
                your chances of securing funding for academic, clinical, or
                nonprofit projects.
              </p>
              <div className="pt-2">
                <a
                  href="#download-report"
                  className="inline-block bg-black hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm px-8 py-2.5 rounded-full transition-colors duration-200"
                >
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: OUR PACKAGES SECTION                            */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b38]">
            Grant Writing Service – Our Packages
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-5xl">
            At Pubrica, we offer flexible and customizable{" "}
            <a href="#grant-writing" className="text-sky-600 hover:underline">
              grant writing
            </a>{" "}
            packages tailored to meet the needs of academic researchers,
            healthcare professionals, nonprofits, and institutions seeking
            funding. Each package is designed to align with funder-specific
            guidelines, compliance requirements, and submission deadlines.
          </p>
        </div>

        {/* 3 Tiered Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {packageData.map((pkg) => (
            <div
              key={pkg.id}
              className={`${pkg.bgColor} border ${pkg.borderColor} rounded-md overflow-hidden flex flex-col justify-between shadow-xs`}
            >
              <div>
                {/* White Top Header Banner */}
                <div className="bg-white p-5 border-b border-slate-200/60 flex items-center gap-4">
                  <div className="relative w-10 h-10 flex-shrink-0">
                    <Image
                      src={pkg.badgeImage}
                      alt={`${pkg.title} package`}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight">
                      {pkg.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      {pkg.subtitle}
                    </p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-6">
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {pkg.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                      <span className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center text-[10px]">
                        ➔
                      </span>
                      <span>Includes:</span>
                    </div>

                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 pl-2">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-slate-800">•</span>
                          <span className="leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating CTA Button */}
        <div className="pt-6 flex justify-center">
         <GetFreeQuoteButton/>
        </div>
      </section>
    </div>
  );
}
