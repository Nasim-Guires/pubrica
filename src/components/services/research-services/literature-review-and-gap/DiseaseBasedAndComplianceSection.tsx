"use client";

import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface DiseaseCard {
  id: string;
  title: string;
  description: React.ReactNode;
  borderColor: string;
}

interface ComplianceStandard {
  id: string;
  title: string;
  subtitle: string;
}

const diseaseCards: DiseaseCard[] = [
  {
    id: "oncology",
    title: "Oncology and Cancer Treatment Studies",
    description:
      "Our literature review experts provide detailed insights into cancer research, including emerging trends in oncology, the development of new chemotherapy agents, and innovative treatment methodologies like immunotherapy and targeted therapy.",
    borderColor: "border-[#f7d070]", // Exact warm yellow/gold border color from screenshot
  },
  {
    id: "neurological",
    title: "Neurological Disorders and Therapeutic Approaches",
    description: (
      <ul className="list-disc pl-5 space-y-1">
        <li>
          We conduct comprehensive literature review writing for the current
          state of research on neurological disorders such as Alzheimer’s,
          Parkinson’s, and multiple sclerosis.
        </li>
      </ul>
    ),
    borderColor: "border-[#b8a9ee]", // Exact soft lavender border color from screenshot
  },
  {
    id: "infectious",
    title: "Infectious Diseases and Immunology Studies",
    description: (
      <>
        Our{" "}
        <Link
          href="/services/research-services/literature-review-and-gap/types-of-literature-review-in-research"
          className="text-blue-600 no-underline hover:no-underline"
        >
          scientific literature review service
        </Link>{" "}
        focuses on the latest developments in infectious diseases and
        immunology, including vaccines, antimicrobial resistance patterns, and
        immune response mechanisms.
      </>
    ),
    borderColor: "border-[#62cca9]", // Exact mint green border color from screenshot
  },
];

const complianceStandards: ComplianceStandard[] = [
  {
    id: "prisma",
    title: "PRISMA",
    subtitle: "— For systematic reviews",
  },
  {
    id: "cochrane",
    title: "Cochrane Handbook",
    subtitle: "— For methodological rigor and review",
  },
  {
    id: "equator",
    title: "EQUATOR Network Guidelines",
    subtitle: "— To ensure proper reporting and structure",
  },
  {
    id: "amstar2",
    title: "AMSTAR 2",
    subtitle: "— For the critical appraisal of review quality",
  },
  {
    id: "icmje",
    title: "ICMJE & Journal-Specific Guidelines",
    subtitle: "— For publication-ready formatting and ethical standards",
  },
  {
    id: "pico-peco",
    title: "PICO/PECO Frameworks",
    subtitle: "— For clinical question formulation and gap identification",
  },
];

export default function DiseaseBasedAndComplianceSection() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full text-[#333333] font-sans">
      {/* ========================================================= */}
      {/* 1. TOP CTA BANNER                                         */}
      {/* ========================================================= */}
      <section className="w-full bg-[#062c21] py-6 px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Accelerate your Literature Review & Gap Analyses with Pubrica
          </h2>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-4xl mx-auto">
            Partner with our expert team to navigate complex research
            landscapes, uncover critical knowledge gaps, and craft high-quality
            literature review service reports that strengthen your manuscript
            and boost publication success.
          </p>
          <div>
            <GetFreeQuoteButton />
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. DISEASE-BASED LITERATURE REVIEW SERVICES                */}
      {/* ========================================================= */}
      <section className="w-full bg-white py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-[28px] font-bold text-[#0c4340] tracking-tight">
              Disease-Based Literature Review Services By Pubrica
            </h2>
            <p className="text-sm sm:text-[15px] text-[#4a5568] leading-relaxed max-w-6xl">
              At Pubrica, we provide specialized disease-based{" "}
              <Link
                href="/academy/literature-review/pico-framework-medical-literature-reviews"
                className="text-blue-600 no-underline hover:no-underline"
              >
                medical literature review service
              </Link>{" "}
              tailored to meet the research needs of clinicians, medical
              researchers, healthcare professionals, and academic scholars. Our
              team of subject-matter experts conducts focused reviews on
              specific diseases, conditions, or therapeutic areas, offering
              scientifically rigorous insights that support clinical research,
              drug development, regulatory submissions, and evidence-based
              practice.
            </p>
          </div>

          {/* Cards Grid with Left Vertical Color Borders */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {diseaseCards.map((card) => (
              <div
                key={card.id}
                className={`bg-white p-7 rounded-[14px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] border-l-[5px] ${card.borderColor} flex flex-col justify-start space-y-4 min-h-[260px]`}
              >
                <h3 className="text-base sm:text-lg font-bold text-[#2d3748] leading-snug">
                  {card.title}
                </h3>
                <div className="text-xs sm:text-sm text-[#4a5568] leading-relaxed">
                  {card.description}
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <p className="text-xs sm:text-sm text-[#4a5568] leading-relaxed max-w-6xl pt-2">
            Each service is designed to provide healthcare professionals and
            researchers with the latest scientific knowledge, aiding in disease
            understanding, treatment development, and patient outcomes.
            Pubrica’s{" "}
            <Link
              href="/services/research-services/literature-review-and-gap/types-of-literature-review-in-research"
              className="text-blue-600 no-underline hover:no-underline"
            >
              medical literature review service
            </Link>{" "}
            ensures you stay informed with the most recent and relevant
            findings.
          </p>

          {/* Our Approach Section Header Preview */}
          <div className="pt-6">
            <h2 className="text-2xl sm:text-[28px] font-bold text-[#0c4340] tracking-tight">
              Our Approach
            </h2>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. OUR APPROACH                                           */}
      {/* ========================================================= */}
      <section className="w-full bg-slate-50 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-5xl">
            Pubrica offers systematic, detailed, and methodologically sound
            literature review service and{" "}
            <Link
              href="/services/research-services/literature-review-and-gap/types-of-literature-review-in-research"
              className="text-blue-600 no-underline hover:no-underline"
            >
              research gap analysis service
            </Link>{" "}
            to facilitate evidence-based decision-making in healthcare. Our
            services objectively appraise and synthesize the latest clinical
            evidence, enabling clients to incorporate vetted research findings
            into clinical, procedural, policy documents, grant proposals, and
            the development of medical products.
          </p>

          {/* Sub Header Block */}


          {/* Bullet Points */}
          <div className="w-full max-w-7xl mx-auto my-6">
            {/* Accordion Toggle Header */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="w-full bg-[#0d3b38] hover:bg-[#0a2e2c] text-white px-6 py-3.5 rounded-t-md font-semibold text-sm sm:text-base flex items-center gap-3 transition-colors duration-200 text-left focus:outline-none"
            >
              <span className="text-lg font-bold w-4 text-center">
                {isOpen ? "−" : "+"}
              </span>
              <span>Our expert medical writers and domain specialists</span>
            </button>

            {/* Accordion Content Panel (Closed by default) */}
            {isOpen && (
              <div className="bg-white p-6 rounded-b-md border border-t-0 border-slate-200 shadow-sm transition-all duration-300">
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700 list-disc list-inside leading-relaxed">
                  <li>
                    Use databases, including PubMed, Embase, Cochrane Library,
                    Scopus, and CINAHL to conduct targeted, thorough, and reproducible
                    literature searches
                  </li>
                  <li>
                    Utilize evidence-based processes like{" "}
                    <a
                      href="https://static1.squarespace.com/static/65b880e13b6ca75573dfe217/t/67ad313f1c80aa5235fce0d0/1739403584136/PRISMA_2020_checklist.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600"
                    >
                      PRISMA
                    </a>
                    ,{" "}
                    <a
                      href="https://legacyfileshare.elsevier.com/promis_misc/ISSM_MOOSE_Checklist.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600"
                    >
                      MOOSE
                    </a>
                    , and{" "}
                    <a
                      href="https://www.bmj.com/content/bmj/suppl/2017/09/21/bmj.j4008.DC1/sheb036104.wf1.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600"
                    >
                      AMSTAR 2
                    </a>{" "}
                    processes for systematic and scoping reviews
                  </li>
                  <li>
                    Appraise the quality of evidence using GRADE, Jadad scale, or
                    Newcastle-Ottawa tools so that each study appraised and graded is
                    recorded transparently
                  </li>
                  <li>
                    Summarize using true qualitative, quantitative, or both
                    quantitative and qualitative methods, including{" "}
                    <Link
                      href="/services/research-services/meta-analysis/"
                      className="text-blue-600 no-underline hover:no-underline"
                    >
                      meta-analysis
                    </Link>
                    , narrative synthesis, or evidence mapping
                  </li>
                  <li>
                    Produce clinically-focused summaries and tables for PICOT
                    characteristics and clinical endpoints, which form a foundation
                    for{" "}
                    <Link
                      href="/academy/literature-review/guides-write-research-literature-review/"
                      className="text-blue-600 no-underline hover:no-underline"
                    >
                      research support services
                    </Link>
                    .
                  </li>
                </ul>
              </div>
            )}
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
            Our literature review help complies with{" "}
            <a
              href="https://www.icmje.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              ICMJE
            </a>
            ,{" "}
            <a
              href="https://legacyfileshare.elsevier.com/promis_misc/CONSORT-2010-Checklist.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              CONSORT
            </a>
            , and{" "}
            <a
              href="https://www.equator-network.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              EQUATOR
            </a>{" "}
            standards, enhancing the credibility, reproducibility, and academic value of
            the research.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. OUR COMPLIANCE AND GUIDELINE STANDARDS                 */}
      {/* ========================================================= */}
      <section className="w-full bg-white py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0c4340]">
              Our Compliance and Guideline Standards
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-5xl">
              At Pubrica, we adhere to globally recognized guidelines to ensure
              quality, transparency, and credibility in every literature review
              writing service and{" "}
              <Link
                href="/academy/literature-review/literature-review-in-research-methodology"
                className="text-blue-600 no-underline hover:no-underline"
              >
                research gap analysis service
              </Link>{" "}
              delivered.
            </p>
          </div>

          {/* Compliance Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {complianceStandards.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-slate-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col items-center justify-center min-h-[120px]"
              >
                <h3 className="font-bold text-slate-900 text-base mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 italic">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. SAMPLE WORK & DOWNLOAD REPORT BANNER                   */}
      {/* ========================================================= */}
      <section className="w-full bg-[#f0fdf4] py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Column: Image */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-xs h-72 sm:h-80 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/research-services/literature-review-and-gap/image-7.webp"
                alt="Two academic researchers discussing literature review documents"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Right Column: Content and Action Buttons */}
          <div className="md:col-span-7 space-y-6">
            {/* Top Subsection */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Literature Review and Gap Analyses Sample Work
              </h3>
              <Link
                href="/insights/patient-safety-culture-among-operating-theatre-nurses-in-operating-room"
                className="inline-block bg-black hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm px-8 py-2.5 rounded-full transition-colors duration-200 no-underline"
              >
                Discover More
              </Link>
            </div>

            {/* Bottom Subsection */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Download the full Report Now
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                Explore our sample literature review writing service for PhD
                thesis work, developed to meet journal-specific formatting
                requirements, methodological standards (e.g., PRISMA), and
                submission timelines for successful academic or clinical
                publication.
              </p>
              <Link
                href="/insights/sample-work"
                className="inline-block bg-black hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm px-8 py-2.5 rounded-full transition-colors duration-200 no-underline"
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