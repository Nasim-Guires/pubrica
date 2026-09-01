"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import { PubricaSampleWorkCard } from "@/components/common/PubricaSampleWorkCardProps";
import CommonTestimonial from "@/components/common/CommonTestimonials";
import { experimentalDesignTestimonials } from "@/lib/services/data/research-services/experimentalDesignTestimonials";
import CommonPackages, { PackageItem } from "@/components/common/CommonPackages";

export default function ExperimentalDesignsAndPackages() {
  // State for opening/closing main cards (empty array = both closed by default)
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (sectionId: string) => {
    setOpenSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId],
    );
  };

  const isProvideOpen = openSections.includes("what-you-provide");
  const isWeProvideOpen = openSections.includes("what-we-provide");

  const packages: PackageItem[] = [
    {
      icon: "/images/editing-and-translation/basic-pacakge.png",
      title: "Basic",
      idealFor: "Academic researchers starting small-scale or pilot studies",
      includes: [
        "Study objective & hypothesis formulation",
        "Selection of an appropriate study design",
        "Basic sample size estimation",
      ],
      turnaround: "5–7 working days",
      cardBgColor: "#d2dedb",
      titleColor: "#0e3b38",
    },
    {
      icon: "/images/publication-support/art-work-preparation/S.png",
      title: "Standard",
      idealFor:
        "Clinical & biomedical research projects requiring moderate complexity",
      includes: [
        "Everything in the Basic Package",
        "Detailed randomization & blinding plan",
        "Variable definitions & control group setup",
        "Preliminary statistical analysis plan (SAP)",
      ],
      turnaround: "7–10 working days",
      cardBgColor: "#d9cbe2",
      titleColor: "#581c87",
    },
    {
      icon:
        "/images/research-services/biostatistics-and-statistical-programming-service/c-box-icons.png",
      title: "Comprehensive",
      idealFor:
        "Large-scale clinical trials, multi-center studies, and regulatory submissions",
      includes: [
        "Everything in the Standard Package",
        "Full protocol development",
        "Power analysis & advanced sample size calculation",
        "Measurement instrument selection & validation plan",
        "Regulatory compliance check (ICH-GCP, CONSORT, etc.)",
      ],
      turnaround: "10–15 working days",
      cardBgColor: "#fcdcb9",
      titleColor: "#7c2d12",
    },
    {
      icon:
        "/images/research-services/biostatistics-and-statistical-programming-service/c-box-icons.png",
      title: "Custom",
      idealFor: "Complex, interdisciplinary, or high-impact studies",
      includes: [
        "Tailor-made experimental design based on your research goals",
        "Incorporation of unique methodologies or hybrid designs",
        "Ongoing consultation with our experts",
      ],
      turnaround: "As per the project scope",
      cardBgColor: "#e4cd9f",
      titleColor: "#451a03",
    },
  ];

  return (
    <div className="w-full bg-white font-sans text-slate-800">
      {/* ========================================================= */}
      {/* 1. EXPERIMENTAL DESIGNS THAT WE UNDERTAKE                */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto py-6 sm:py-7 px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b38]">
            Experimental Designs That We Undertake
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed max-w-5xl">
            We offer expertise in a wide range of experimental and
            quasi-experimental study designs in biomedical and health research,
            tailored to meet diverse clinical, policy, and regulatory needs.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-l-amber-400 border-y border-r border-slate-200 flex flex-col">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-6 leading-snug">
              Design of Experimental Studies in Biomedical Sciences
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700 font-medium">
              <li className="flex items-start gap-2">
                <span className="text-slate-400 mt-1">•</span>
                <span>Randomized Controlled Study</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 mt-1">•</span>
                <span>Crossover design</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 mt-1">•</span>
                <span>Solomon Four-Group Design</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 mt-1">•</span>
                <span>Cluster randomized trials</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 mt-1">•</span>
                <span>RCT for Phase II Drug Trials</span>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-l-purple-400 border-y border-r border-slate-200 flex flex-col">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-6 leading-snug">
              Quasi-Experimental Design for Health Policy
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700 font-medium">
              <li className="flex items-start gap-2">
                <span className="text-slate-400 mt-1">•</span>
                <span>
                  An{" "}
                  <Link
                    href="/academy/journals-templates/oncology-journal-publication-process/"
                    className="text-blue-600 "
                  >
                    Experimental Design
                  </Link>{" "}
                  Study
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 mt-1">•</span>
                <span>Pretest–Posttest control group design</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 mt-1">•</span>
                <span>Single-Subject Design</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 mt-1">•</span>
                <span>Adaptive design</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 mt-1">•</span>
                <span>RCT for Phase III Drug Trials</span>
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-l-emerald-400 border-y border-r border-slate-200 flex flex-col">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-6 leading-snug">
              Quasi-Experimental Design
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700 font-medium">
              <li className="flex items-start gap-2">
                <span className="text-slate-400 mt-1">•</span>
                <span>
                  Factorial Design Trials (Sequential, Registry, Pragmatic
                  Clinical Trials)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 mt-1">•</span>
                <span>Post-test-only control group design</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 mt-1">•</span>
                <span>Blind and Double-blind trials</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 mt-1">•</span>
                <span>RCT for Phase I Drug Trials</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. HOW TO GET STARTED WITH OUR EXPERIMENTAL DESIGN       */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b38] mb-8">
          How to Get Started with Our Experimental Design
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Card 1: What You Provide */}
          <div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-xs">
            {/* Header / Toggle Button */}
            <button
              onClick={() => toggleSection("what-you-provide")}
              className="w-full bg-[#0e3b38] text-white px-5 py-3.5 font-bold text-sm sm:text-base flex items-center justify-between transition-colors hover:bg-[#0b302d]"
              aria-expanded={isProvideOpen}
            >
              <div className="flex items-center">
                <span className="mr-2">—</span> What You Provide
              </div>
              {isProvideOpen ? (
                <ChevronUp className="w-5 h-5 text-white" />
              ) : (
                <ChevronDown className="w-5 h-5 text-white" />
              )}
            </button>

            {/* Collapsible Content */}
            {isProvideOpen && (
              <div className="p-6 bg-white border-t border-slate-100">
                <ul className="space-y-4 text-xs sm:text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold text-lg leading-none">
                      •
                    </span>
                    <div>
                      <strong className="text-slate-900">
                        Research Questions or Hypotheses:
                      </strong>{" "}
                      <span className="text-slate-600">
                        Clearly defined questions or hypotheses that your
                        experiment aims to address.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold text-lg leading-none">
                      •
                    </span>
                    <div>
                      <strong className="text-slate-900">
                        Existing Data or Preliminary Research:
                      </strong>{" "}
                      <span className="text-slate-600">
                        Any prior studies, pilot data, or preliminary research
                        that informs your experimental design.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold text-lg leading-none">
                      •
                    </span>
                    <div>
                      <strong className="text-slate-900">
                        Scope of the Experiment:
                      </strong>{" "}
                      <span className="text-slate-600">
                        Define the boundaries of your experiment, including
                        subject areas, population, and time frames.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold text-lg leading-none">
                      •
                    </span>
                    <div>
                      <strong className="text-slate-900">
                        Specific Focus Areas:
                      </strong>{" "}
                      <span className="text-slate-600">
                        Particular aspects or variables within the experiment
                        that require deeper investigation.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold text-lg leading-none">
                      •
                    </span>
                    <div>
                      <strong className="text-slate-900">
                        Methodological Preferences:
                      </strong>{" "}
                      <span className="text-slate-600">
                        If any, preferred methodologies or techniques you wish
                        to employ in the study.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold text-lg leading-none">
                      •
                    </span>
                    <div>
                      <strong className="text-slate-900">
                        Data Collection Strategies Used:
                      </strong>{" "}
                      <span className="text-slate-600">
                        Details of any existing data collection methods or
                        instruments you have used or plan to use.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold text-lg leading-none">
                      •
                    </span>
                    <div>
                      <strong className="text-slate-900">
                        Initial Experimental Design Framework:
                      </strong>{" "}
                      <span className="text-slate-600">
                        If available, a preliminary version of the experimental
                        design for further development.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold text-lg leading-none">
                      •
                    </span>
                    <div>
                      <strong className="text-slate-900">
                        Theoretical Frameworks and Models:
                      </strong>{" "}
                      <span className="text-slate-600">
                        Any relevant theories or models that underpin the
                        research area and will inform the experimental design.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Card 2: What We Provide */}
          <div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-xs">
            {/* Header / Toggle Button */}
            <button
              onClick={() => toggleSection("what-we-provide")}
              className="w-full bg-[#0e3b38] text-white px-5 py-3.5 font-bold text-sm sm:text-base flex items-center justify-between transition-colors hover:bg-[#0b302d]"
              aria-expanded={isWeProvideOpen}
            >
              <div className="flex items-center">
                <span className="mr-2">—</span> What We Provide
              </div>
              {isWeProvideOpen ? (
                <ChevronUp className="w-5 h-5 text-white" />
              ) : (
                <ChevronDown className="w-5 h-5 text-white" />
              )}
            </button>

            {/* Collapsible Content */}
            {isWeProvideOpen && (
              <div className="p-6 bg-white border-t border-slate-100">
                <ul className="space-y-4 text-xs sm:text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold text-lg leading-none">
                      •
                    </span>
                    <div>
                      <strong className="text-slate-900">
                        Refinement of Research Questions and Hypotheses:
                      </strong>{" "}
                      <span className="text-slate-600">
                        To ensure they are testable and suitable for
                        experimental investigation.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold text-lg leading-none">
                      •
                    </span>
                    <div>
                      <strong className="text-slate-900">
                        Advanced Methodological Strategies:
                      </strong>{" "}
                      <span className="text-slate-600">
                        Tailored to enhance the rigor and reliability of your
                        experiment.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold text-lg leading-none">
                      •
                    </span>
                    <div>
                      <strong className="text-slate-900">
                        Thorough Analysis of Methodological Approaches:
                      </strong>{" "}
                      <span className="text-slate-600">
                        Including critical evaluation of potential methodologies
                        and their alignment with your research goals.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold text-lg leading-none">
                      •
                    </span>
                    <div>
                      <strong className="text-slate-900">
                        Identification of Methodological Gaps:
                      </strong>{" "}
                      <span className="text-slate-600">
                        Pinpointing areas where innovative or improved
                        experimental methods could be applied.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold text-lg leading-none">
                      •
                    </span>
                    <div>
                      <strong className="text-slate-900">
                        Developing the Methodology Section:
                      </strong>{" "}
                      <span className="text-slate-600">
                        Detailed description of the planned methods, including
                        data collection and analysis strategies.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold text-lg leading-none">
                      •
                    </span>
                    <div>
                      <strong className="text-slate-900">
                        Justifications and Rationale for Methodological Choices:
                      </strong>{" "}
                      <span className="text-slate-600">
                        Based on best practices, previous research, and
                        theoretical considerations.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold text-lg leading-none">
                      •
                    </span>
                    <div>
                      <strong className="text-slate-900">
                        Comprehensive and Detailed Experimental Protocols:
                      </strong>{" "}
                      <span className="text-slate-600">
                        Ensuring all procedures are clearly outlined and
                        replicable.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold text-lg leading-none">
                      •
                    </span>
                    <div>
                      <strong className="text-slate-900">
                        Formatting as per Target Journal or Publication
                        Guidelines:
                      </strong>{" "}
                      <span className="text-slate-600">
                        Preparing the experimental design documentation to meet
                        specific publication or presentation standards.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. COMPLIANCE AND GUIDELINE STANDARDS                     */}
      {/* ========================================================= */}
        <section className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b38]">
              Our Compliance and Guideline Standards
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed max-w-5xl">
              At Pubrica, we adhere to globally recognized compliance frameworks
              and ethical guidelines to ensure that every{" "}
              <Link
                href="/academy/experimental-design/experimental-research-design/"
                className="text-blue-600 "
              >
                experimental design
              </Link>{" "}
              is scientifically valid, ethically sound, and publication-ready. Our
              designs are tailored to meet both regulatory requirements and
              academic standards.
            </p>
          </div>

          {/* 6 Standards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Item 1 */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 text-center space-y-3 flex flex-col items-center justify-between shadow-xs">
              <div className="h-16 relative w-32 flex items-center justify-center">
                <Image
                  src={
                    "https://pubrica.com/wp-content/uploads/2025/09/International-Council-for-Harmonisation-\u2013-Good-Clinical-Practice-1.png"
                  }
                  alt="ICH GCP Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  International Council for Harmonisation – Good Clinical Practice
                  (ICH-GCP)
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  – For clinical trials and human subject research.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 text-center space-y-3 flex flex-col items-center justify-between shadow-xs">
              <div className="h-16 relative w-32 flex items-center justify-center">
                <Image
                  src="/images/research-services/experimental-design/Consolidated-Standards-of-Reporting-Trials.png"
                  alt="CONSORT SPIRIT Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  Consolidated Standards of Reporting Trials (CONSORT)
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  – For randomized controlled trials to ensure transparent and
                  complete reporting.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 text-center space-y-3 flex flex-col items-center justify-between shadow-xs">
              <div className="h-16 relative w-28 flex items-center justify-center">
                <Image
                  src="/images/research-services/experimental-design/STROBE.png"
                  alt="STROBE Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  Strengthening the Reporting of Observational Studies in
                  Epidemiology (STROBE)
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  – For observational and epidemiological studies.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 text-center space-y-3 flex flex-col items-center justify-between shadow-xs">
              <div className="h-16 relative w-28 flex items-center justify-center">
                <Image
                  src={
                    "https://pubrica.com/wp-content/uploads/2025/09/Animal-Research-Reporting-of-In-Vivo-Experiments-\u2013-ARRIVE.png"
                  }
                  alt="ARRIVE Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  Animal Research: Reporting of In Vivo Experiments (ARRIVE)
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  – For animal research studies, to ensure humane and ethical
                  practices.
                </p>
              </div>
            </div>

            {/* Item 5 */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 text-center space-y-3 flex flex-col items-center justify-between shadow-xs">
              <div className="h-16 relative w-24 flex items-center justify-center">
                <Image
                  src="/images/research-services/experimental-design/ISO-Standards.png"
                  alt="ISO Standards Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  ISO Standards
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  – For medical device-related experimental designs.
                </p>
              </div>
            </div>

            {/* Item 6 */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 text-center space-y-3 flex flex-col items-center justify-between shadow-xs">
              <div className="h-16 relative w-28 flex items-center justify-center">
                <Image
                  src="/images/research-services/experimental-design/WHO-FDA-Guidance.png"
                  alt="WHO and FDA Guidance Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  WHO & FDA Guidance
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  – For global harmonization of biomedical and public health
                  studies.
                </p>
              </div>
            </div>
          </div>
        </section>

      {/* ========================================================= */}
      {/* 4. SAMPLE WORK & REPORT BANNER                            */}
      {/* ========================================================= */}
      <PubricaSampleWorkCard
        bookCoverImage={{
          src: "/images/research-services/experimental-design/Experimental-Design-Services-Sample-Work.png",
          alt: "Experimental Design Sample Work",
          width: 600,
          height: 400,
        }}
        sections={[
          {
            heading: "Experimental Design Services Sample Work",
            button: {
              label: "Discover More",
              url: "/insights/sample-work/effective-methods-for-metabarcoding-fungi/",
            },
          },
          {
            heading: "Download the full Report Now",
            descriptionSegments: [
              {
                text: "Explore our ",
              },
              {
                text: "experimental design",
                url: "/services/research-services/experimental-design/benefits-of-experimental-plan-in-research-and-design/",
              },
              {
                text: " sample work, meticulously crafted to align with study-specific objectives, methodological standards (e.g., ",
              },
              {
                text: "CONSORT",
                url: "https://legacyfileshare.elsevier.com/promis_misc/CONSORT-2010-Checklist.pdf",
              },
              {
                text: ", ",
              },
              {
                text: "SPIRIT",
                url: "https://www.consort-spirit.org/",
              },
              {
                text: "), and project timelines, ensuring robust, ethical, and publication-ready research outcomes.",
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

      {/* ========================================================= */}
      {/* 5. EXPERIMENTAL DESIGN SERVICE - OUR PACKAGES              */}
      {/* ========================================================= */}
      <section className="py-0 my-0 text-center flex flex-col items-center">
        {/* Packages Component */}
        <CommonPackages
          title="Experimental Design Service – Our Packages"
          description="We offer flexible packages to meet the diverse needs of researchers, clinicians, and industry partners. Each package is designed to ensure your study is methodologically sound, statistically robust, and ready for implementation."
          packages={packages}
        />

        {/* Button tightly stacked below */}
        <div className="-mt-1 mb-1">
          <GetFreeQuoteButton />
        </div>
      </section>
      <section className="py-0 my-0 text-center">
        {/* Centered Title & Description Header */}
        <div className="max-w-4xl mx-auto py-0 my-0">
          <h2 className="text-3xl font-bold text-[#003B38] mb-1">
            Testimonials
          </h2>
          <p className="text-gray-700 leading-normal mb-2">
            Learn how Pubrica’s{' '}
            <Link
              href="/academy/experimental-design/pre-experimental-research-design/"
              className="text-blue-600 "
            >
              experimental design
            </Link>{' '}
            service has empowered researchers to develop methodologically sound, ethically compliant,
            and publication-ready studies that advance scientific knowledge and boost their academic impact.
            Here is what our clients say:
          </p>
        </div>

        {/* Testimonial Component */}
        <div className="-mt-1">
          <CommonTestimonial
            title=""
            description=""
            testimonials={experimentalDesignTestimonials}
          />
        </div>
      </section>
    </div>
  );
}
