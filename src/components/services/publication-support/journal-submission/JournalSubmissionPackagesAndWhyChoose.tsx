"use client";

import React, { useState } from "react";
import Image from "next/image";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

// Common path prefix for package icons
const COMMON_IMAGE_PATH = "/images/publication-support/journal-submission/";

// 1. Support Packages Data
const packagesData = [
  {
    id: "silver",
    iconImage: `${COMMON_IMAGE_PATH}standard-logo-480x480.png`, // Add specific file name
    title: "Silver Pack",
    subtitle:
      "Essential & Budget-Friendly Support For Single Journal Submission",
    intro:
      "Ideal for those researchers looking for cost-effective and professional help with understanding journal requirements and preventing submission pitfalls.",
    includesLabel: "Includes:",
    items: [
      "Journal submission management",
      "Professional language & structural editing",
      "Artwork formatting (graphs & tables & figures)",
      "Plagiarism check with report details",
      "Journal selection guidance",
      "Resubmission support for one journal",
      "Pre-submission peer review",
    ],
    headerBg: "bg-[#1c3330]", // Dark greenish header line
    badgeBg: "bg-[#d2e4e0] text-[#1c3330]",
    cardBg: "bg-[#d8e3e0]", // Soft grey-green body background
  },
  {
    id: "gold",
    iconImage: `${COMMON_IMAGE_PATH}gold-icons-480x480.png`, // Add specific file name
    title: "Gold Pack",
    subtitle: "Complete Publication Support For Up To Two Journals",
    intro:
      "Designed for researchers who need flexibility to target multiple journals with strong editorial support through the review cycle.",
    includesLabel: "Includes everything in the silver pack, plus:",
    items: [
      "Support for two journal submissions",
      "Enhanced editorial strategy & feedback handling",
      "One resubmission cycle per journal",
    ],
    headerBg: "bg-[#8d5b9c]", // Purple header
    badgeBg: "bg-[#8d5b9c] text-white",
    cardBg: "bg-[#d9c8de]", // Light purple body background
  },
  {
    id: "platinum",
    iconImage: `${COMMON_IMAGE_PATH}pa-icons--480x480.png`, // Add specific file name
    title: "Platinum Pack",
    subtitle: "End-To-End Publication Support With Technical Review.",
    intro:
      "For high-stakes, high-impact journal submissions, the Platinum Pack offers the highest level of support, including an expert technical review of your manuscript.",
    includesLabel: "Includes everything in the Gold Pack, plus:",
    items: [
      "Technical Review by experts in the field",
      "Compliance Check (ICMJE, COPE, CONSORT)",
      "Advanced Formatting for complex submissions",
      "Strategic advice on journal positioning and communication.",
    ],
    headerBg: "bg-[#7a572a]", // Brown header
    badgeBg: "bg-[#e25c52] text-white",
    cardBg: "bg-[#dac39e]", // Warm tan/gold body background
  },
];

// 2. Why Choose Pubrica Accordion Data
const whyChooseData = [
  {
    id: "end-to-end",
    title: "1. End-to-End Journal Submission Management",
    content:
      "Pubrica offers full end-to-end assistance for researchers, pharma teams, and clinical investigators. We also provide manuscript formatting and metadata, author journal account creation, editor communication completion, etc. We manage all of the administrative work to ensure a smooth and compliant submission process across publishers such as Elsevier, Springer, Wiley, etc.",
  },
  {
    id: "cover-letter",
    title: "2. Complimentary, Editor-Ready Cover Letter Creation",
    content:
      "A compelling cover letter can affect editorial decisions. Consequently, we offer free, tailored editor-ready cover letter writing for every submission. Our team draws out the novelty, relevance, and fit for the journal of your manuscript, creating a strong first impression with editors.",
    subnote:
      "Especially useful for authors submitting to high-impact journals or targeting a competitive peer-reviewed forum like life sciences and medicine.",
  },
  {
    id: "complete-support",
    title: "3. Complete Publication Support in One Place",
    content:
      "From peer review pre-checks to post-submission revision support, Pubrica serves as a single destination for all your publishing workflow requirements.",
  },
];

export default function JournalSubmissionPackagesAndWhyChoose() {
  // Accordion state: item 2 ('cover-letter') open by default
  const [openWhyChoose, setOpenWhyChoose] = useState<string>("cover-letter");

  const toggleWhyChoose = (id: string) => {
    setOpenWhyChoose((prev) => (prev === id ? "" : id));
  };

  return (
    <div className="w-full font-sans text-gray-800 bg-white">
      {/* ========================================== */}
      {/* SECTION 1: SUPPORT PACKAGES                */}
      {/* ========================================== */}
      <section className="py-14 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0c3547] mb-3">
            Journal Submission Support Packages
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our tailored support packages designed to meet your
            publication goals, whether you’re submitting to your first journal
            or targeting high-impact publications.
          </p>
        </div>

        {/* 3 Packages Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 items-stretch">
          {packagesData.map((pkg) => (
            <div
              key={pkg.id}
              className="flex flex-col rounded-sm overflow-hidden shadow-md border border-gray-200"
            >
              {/* Card Header */}
              <div className="bg-white p-5 border-t-4 border-t-[#0c3547] flex items-start space-x-3 min-h-[100px]">
                <div className="relative w-10 h-10 shrink-0">
                  <Image
                    src={pkg.iconImage}
                    alt={`${pkg.title} Icon`}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-base text-gray-900 leading-tight">
                    {pkg.title}
                  </h3>
                  <p className="text-[11px] text-gray-600 font-medium leading-snug mt-1">
                    {pkg.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div
                className={`${pkg.cardBg} p-5 flex-1 flex flex-col justify-between text-xs sm:text-sm text-gray-800 space-y-4`}
              >
                <div>
                  <p className="leading-relaxed mb-4 text-gray-700">
                    {pkg.intro}
                  </p>

                  <p className="font-bold text-gray-900 flex items-center space-x-1.5 mb-3">
                    <span className="text-black font-extrabold text-sm">➔</span>
                    <span>{pkg.includesLabel}</span>
                  </p>

                  <ul className="space-y-2.5 pl-1">
                    {pkg.items.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-gray-700">•</span>
                        <span className="leading-tight text-gray-800">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action CTA Button */}
        <div className="text-center">
          <GetFreeQuoteButton />
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 2: SPEED UP YOUR JOURNEY BANNER    */}
      {/* ========================================== */}
      <section className="bg-[#042d22] text-white py-10 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
          {/* Satisfaction Badge */}
          <div className="shrink-0">
            <div className="w-28 h-28 relative">
              <Image
                src="/images/publication-support/journal-submission/Satisfaction_Guarantee.webp"
                alt="100% Satisfaction Guarantee"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Banner Content */}
          <div>
            <h2 className="text-lg sm:text-2xl font-bold tracking-wide mb-2">
              Speed up your Journey to Journal Submission with Pubrica
            </h2>
            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed max-w-3xl">
              Accelerate your path to publication with Pubrica’s comprehensive{" "}
              <a href="/insights/sample-work/prevalence-thyroid-disorders-tertiary-care-north-india" className="text-[#38bdf8] hover:underline">
                journal submission
              </a>{" "}
              support service. Gain expert assistance to navigate submission
              guidelines and enhance your chances of acceptance.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 3: WHY LEADING RESEARCHERS CHOOSE  */}
      {/* ========================================== */}
      <section className="bg-[#f0f2f2] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0c3547] mb-8">
            Why Leading Researchers Choose Pubrica for Journal Submission
            Services
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Accordion Column */}
            <div className="lg:col-span-7 space-y-2">
              {whyChooseData.map((item) => {
                const isOpen = openWhyChoose === item.id;

                return (
                  <div
                    key={item.id}
                    className="bg-white border border-gray-200 rounded-sm overflow-hidden"
                  >
                    <button
                      onClick={() => toggleWhyChoose(item.id)}
                      className="w-full py-3.5 px-4 flex items-center justify-between text-left focus:outline-none hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-bold text-xs sm:text-sm text-[#0c3547]">
                        {item.title}
                      </span>
                      <span className="text-xs text-[#0c3547] shrink-0 ml-2">
                        {isOpen ? "▲" : "▼"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="bg-[#f2fbf7] p-5 border-t border-gray-100 text-xs sm:text-sm text-gray-800 space-y-3">
                        <p className="leading-relaxed">{item.content}</p>
                        {item.subnote && (
                          <p className="italic text-gray-600 leading-relaxed font-normal">
                            {item.subnote}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Side Image Layout */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md h-72 sm:h-80">
                <Image
                  src="/images/publication-support/journal-submission/Leading-Researchers.png"
                  alt="Researchers drafting and reviewing manuscript submission"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover rounded-md shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}