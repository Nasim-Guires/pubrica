"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import ServiceBanner from "@/components/common/ServiceBanner";

// Common path prefix for package icons
const COMMON_IMAGE_PATH = "/images/publication-support/journal-submission/";

// 1. Support Packages Data
const packagesData = [
  {
    id: "silver",
    iconImage: `${COMMON_IMAGE_PATH}standard-logo-480x480.png`,
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
    headerBg: "bg-[#1c3330]",
    badgeBg: "bg-[#d2e4e0] text-[#1c3330]",
    cardBg: "bg-[#d8e3e0]",
  },
  {
    id: "gold",
    iconImage: `${COMMON_IMAGE_PATH}gold-icons-480x480.png`,
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
    headerBg: "bg-[#8d5b9c]",
    badgeBg: "bg-[#8d5b9c] text-white",
    cardBg: "bg-[#d9c8de]",
  },
  {
    id: "platinum",
    iconImage: `${COMMON_IMAGE_PATH}pa-icons--480x480.png`,
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
    headerBg: "bg-[#7a572a]",
    badgeBg: "bg-[#e25c52] text-white",
    cardBg: "bg-[#dac39e]",
  },
];

export default function JournalSubmissionPackagesAndWhyChoose() {
  // Accordion state: item 1 ('end-to-end') open by default
  const [openWhyChoose, setOpenWhyChoose] = useState<string>("end-to-end");

  const toggleWhyChoose = (id: string) => {
    setOpenWhyChoose((prev) => (prev === id ? "" : id));
  };

  return (
    <div className="w-full font-poppins text-gray-800 bg-white">
      {/* ========================================== */}
      {/* SECTION 1: SUPPORT PACKAGES                */}
      {/* ========================================== */}
      <section className="py-6 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0c3547] mb-2">
            Journal Submission Support Packages
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our tailored support packages designed to meet your
            publication goals, whether you’re submitting to your first journal
            or targeting high-impact publications.
          </p>
        </div>

        {/* 3 Packages Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 items-stretch">
          {packagesData.map((pkg) => (
            <div
              key={pkg.id}
              className="flex flex-col rounded-sm overflow-hidden shadow-md border border-gray-200"
            >
              {/* Card Header */}
              <div className="bg-white p-4 border-t-4 border-t-[#0c3547] flex items-start space-x-3 min-h-[90px]">
                <div className="relative w-10 h-10 shrink-0">
                  <Image
                    src={pkg.iconImage}
                    alt={`${pkg.title} Icon`}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 leading-tight">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-gray-600 font-medium leading-snug mt-1">
                    {pkg.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div
                className={`${pkg.cardBg} p-4 flex-1 flex flex-col justify-between text-base text-gray-800 space-y-3`}
              >
                <div>
                  <p className="leading-relaxed mb-3 text-gray-700 text-base">
                    {pkg.intro}
                  </p>

                  <p className="font-bold text-gray-900 flex items-center space-x-1.5 mb-2 text-base">
                    <span className="text-black font-extrabold text-base">➔</span>
                    <span>{pkg.includesLabel}</span>
                  </p>

                  <ul className="space-y-2 pl-1">
                    {pkg.items.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-gray-700">•</span>
                        <span className="leading-tight text-gray-800 text-base">
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
      <ServiceBanner
        imageSrc="/images/publication-support/journal-submission/Satisfaction_Guarantee.webp"
        imageAlt="100% Satisfaction Guarantee"
        heading="Speed up your Journey to Journal Submission with Pubrica"
        description={
          <span className="text-base">
            Accelerate your path to publication with Pubrica’s comprehensive{" "}
            <Link
              href="/insights/prevalence-thyroid-disorders-tertiary-care-north-india"
              className="text-blue-600 no-underline"
            >
              journal submission
            </Link>{" "}
            support service. Gain expert assistance to navigate submission
            guidelines and enhance your chances of acceptance.
          </span>
        }
      />

      {/* ========================================== */}
      {/* SECTION 3: WHY LEADING RESEARCHERS CHOOSE  */}
      {/* ========================================== */}
      <section className="bg-[#f0f2f2] py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0c3547] mb-6">
            Why Leading Researchers Choose Pubrica for Journal Submission
            Services
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Accordion Column */}
            <div className="lg:col-span-7 space-y-2">
              {/* Accordion Item 1 */}
              <div className="bg-white border border-gray-200 rounded-sm overflow-hidden">
                <button
                  onClick={() => toggleWhyChoose("end-to-end")}
                  className="w-full py-3 px-4 flex items-center justify-between text-left focus:outline-none hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-lg text-[#0c3547]">
                    1. End-to-End Journal Submission Management
                  </span>
                  <span className="text-xs text-[#0c3547] shrink-0 ml-2">
                    {openWhyChoose === "end-to-end" ? "▲" : "▼"}
                  </span>
                </button>

                {openWhyChoose === "end-to-end" && (
                  <div className="bg-[#f2fbf7] p-4 border-t border-gray-100 text-base text-gray-800 space-y-3">
                    <p className="leading-relaxed">
                      Pubrica offers full end-to-end assistance for researchers,
                      pharma teams, and clinical investigators. We also provide
                      manuscript formatting and metadata, author journal
                      account creation, editor communication completion, etc. We
                      manage all of the administrative work to ensure a smooth
                      and compliant submission process across publishers such
                      as Elsevier, Springer, Wiley, etc.
                    </p>
                    <p className="italic text-gray-700 leading-relaxed font-normal">
                      Ideal for busy researchers, medical writers, and
                      Pharmaceutical publication teams requiring expert support
                      in navigating complex journal workflows, making us a
                      trusted{" "}
                      <Link
                        href="/services/publication-support/journal-submission/ai-tools-transform-academic-publishing/"
                        className="text-blue-600 no-underline font-normal"
                      >
                        academic journal publisher
                      </Link>{" "}
                      partner.
                    </p>
                  </div>
                )}
              </div>

              {/* Accordion Item 2 */}
              <div className="bg-white border border-gray-200 rounded-sm overflow-hidden">
                <button
                  onClick={() => toggleWhyChoose("cover-letter")}
                  className="w-full py-3 px-4 flex items-center justify-between text-left focus:outline-none hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-lg text-[#0c3547]">
                    2. Complimentary, Editor-Ready Cover Letter Creation
                  </span>
                  <span className="text-xs text-[#0c3547] shrink-0 ml-2">
                    {openWhyChoose === "cover-letter" ? "▲" : "▼"}
                  </span>
                </button>

                {openWhyChoose === "cover-letter" && (
                  <div className="bg-[#f2fbf7] p-4 border-t border-gray-100 text-base text-gray-800 space-y-3">
                    <p className="leading-relaxed">
                      A compelling cover letter can affect editorial decisions.
                      Consequently, we offer free, tailored editor-ready cover
                      letter writing for every submission. Our team draws out
                      the novelty, relevance, and fit for the journal of your
                      manuscript, creating a strong first impression with
                      editors.
                    </p>
                    <p className="italic text-gray-600 leading-relaxed font-normal">
                      Especially useful for authors submitting to high-impact
                      journals or targeting a competitive peer-reviewed forum
                      like life sciences and medicine.
                    </p>
                  </div>
                )}
              </div>

              {/* Accordion Item 3 */}
              <div className="bg-white border border-gray-200 rounded-sm overflow-hidden">
                <button
                  onClick={() => toggleWhyChoose("complete-support")}
                  className="w-full py-3 px-4 flex items-center justify-between text-left focus:outline-none hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-lg text-[#0c3547]">
                    3. Complete Publication Support in One Place
                  </span>
                  <span className="text-xs text-[#0c3547] shrink-0 ml-2">
                    {openWhyChoose === "complete-support" ? "▲" : "▼"}
                  </span>
                </button>

                {openWhyChoose === "complete-support" && (
                  <div className="bg-[#f2fbf7] p-4 border-t border-gray-100 text-base text-gray-800 space-y-3">
                    <p className="leading-relaxed">
                      Pubrica not only provides submission, but we also offer
                      bundled scientific publication support. We provide many
                      cost-efficient bundles of publication support services,
                      including:
                    </p>
                    <ul className="space-y-1 pl-4 list-disc text-gray-800">
                      <li>Pre-submission peer review</li>
                      <li>Journal selection</li>
                      <li>Scientific editing</li>
                      <li>Rebuttal for peer review</li>
                    </ul>
                    <p className="leading-relaxed">
                      These solutions save time, help with compliance, and
                      enhance the chance of acceptance for your manuscript.
                    </p>
                    <p className="italic text-gray-700 leading-relaxed font-normal">
                      Ideal for academic institutions, CROs, and biotech teams
                      looking for publication support, without the hassle of
                      managing several vendors.
                    </p>
                    <p className="font-bold text-gray-900 leading-relaxed">
                      Join thousands of researchers, clinicians, and pharma
                      professionals relying on Pubrica to make their journey to
                      journal publishing easier.
                    </p>
                  </div>
                )}
              </div>
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