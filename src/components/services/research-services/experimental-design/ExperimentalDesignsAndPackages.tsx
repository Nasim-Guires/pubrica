"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

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

  return (
    <div className="w-full bg-white font-sans text-slate-800">
      {/* ========================================================= */}
      {/* 1. EXPERIMENTAL DESIGNS THAT WE UNDERTAKE                */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
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
                    href="/research-services/experimental-design/"
                    className="text-sky-600 hover:underline"
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
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
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
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b38]">
            Our Compliance and Guideline Standards
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed max-w-5xl">
            At Pubrica, we adhere to globally recognized compliance frameworks
            and ethical guidelines to ensure that every{" "}
            <Link
              href="/research-services/experimental-design/"
              className="text-sky-600 hover:underline"
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
                src="/images/research-services/experimental-design/International-Council-for-Harmonisation-%E2%80%93-Good-Clinical-Practice-1.png"
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
                src="/images/research-services/experimental-design/Animal-Research-Reporting-of-In-Vivo-Experiments-%E2%80%93-ARRIVE.png"
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
      <section className="w-full bg-[#f0fbf5] py-12 px-4 sm:px-6 lg:px-8 my-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 relative h-64 md:h-80 w-full rounded-md overflow-hidden shadow-xs">
            <Image
              src="/images/research-services/experimental-design/Experimental-Design-Services-Sample-Work.png"
              alt="Experimental Design Sample Work"
              fill
              className="object-contain bg-white"
            />
          </div>

          <div className="md:col-span-8 space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Experimental Design Services Sample Work
              </h3>
              <div>
                <Link
                  href="/sample-work"
                  className="inline-block bg-black text-white text-xs font-semibold px-8 py-2.5 rounded-full hover:bg-slate-800 transition-colors"
                >
                  Discover More
                </Link>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Download the full Report Now
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                Explore our{" "}
                <Link
                  href="/research-services/experimental-design/"
                  className="text-sky-600 hover:underline font-medium"
                >
                  experimental design
                </Link>{" "}
                sample work, meticulously crafted to align with study-specific
                objectives, methodological standards (e.g., CONSORT, SPIRIT),
                and project timelines, ensuring robust, ethical, and
                publication-ready research outcomes.
              </p>
              <div>
                <Link
                  href="/download-report"
                  className="inline-block bg-black text-white text-xs font-semibold px-8 py-2.5 rounded-full hover:bg-slate-800 transition-colors"
                >
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. EXPERIMENTAL DESIGN SERVICE - OUR PACKAGES              */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 pb-24 relative">
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b38]">
            Experimental Design Service – Our Packages
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-4xl mx-auto">
            We offer flexible packages to meet the diverse needs of researchers,
            clinicians, and industry partners. Each package is designed to
            ensure your study is methodologically sound, statistically robust,
            and ready for implementation.
          </p>
        </div>

        {/* 4 Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {/* Basic */}
          <div className="bg-[#d2dedb]/40 rounded-xl overflow-hidden border border-slate-200 flex flex-col justify-between">
            <div className="p-6 space-y-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/editing-and-translation/basic-pacakge.png"
                  alt="Basic package"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
                <h3 className="text-lg font-bold text-slate-900">Basic</h3>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                  <span>
                    Ideal For:{" "}
                    <span className="font-normal text-slate-700">
                      Academic researchers starting small-scale or pilot studies
                    </span>
                  </span>
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                  <span>Includes:</span>
                </p>
                <ul className="space-y-2 pl-5 text-xs text-slate-700 leading-snug">
                  <li>Study objective & hypothesis formulation</li>
                  <li>Selection of an appropriate study design</li>
                  <li>Basic sample size estimation</li>
                </ul>
              </div>
            </div>

            <div className="p-6 pt-0">
              <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <ArrowRight className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                <span>
                  Turnaround Time:{" "}
                  <span className="font-normal text-slate-700">
                    5–7 working days
                  </span>
                </span>
              </p>
            </div>
          </div>

          {/* Standard */}
          <div className="bg-[#d9cbe2]/40 rounded-xl overflow-hidden border border-slate-200 flex flex-col justify-between">
            <div className="p-6 space-y-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/publication-support/art-work-preparation/S.png"
                  alt="Standard package"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
                <h3 className="text-lg font-bold text-purple-900">Standard</h3>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                  <span>
                    Ideal For:{" "}
                    <span className="font-normal text-slate-700">
                      Clinical & biomedical research projects requiring moderate
                      complexity
                    </span>
                  </span>
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                  <span>Includes:</span>
                </p>
                <ul className="space-y-2 pl-5 text-xs text-slate-700 leading-snug">
                  <li>Everything in the Basic Package</li>
                  <li>Detailed randomization & blinding plan</li>
                  <li>Variable definitions & control group setup</li>
                  <li>Preliminary statistical analysis plan (SAP)</li>
                </ul>
              </div>
            </div>

            <div className="p-6 pt-0">
              <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <ArrowRight className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                <span>
                  Turnaround Time:{" "}
                  <span className="font-normal text-slate-700">
                    7–10 working days
                  </span>
                </span>
              </p>
            </div>
          </div>

          {/* Comprehensive */}
          <div className="bg-[#fcdcb9]/50 rounded-xl overflow-hidden border border-slate-200 flex flex-col justify-between">
            <div className="p-6 space-y-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/research-services/biostatistics-and-statistical-programming-service/c-box-icons.png"
                  alt="Comprehensive package"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
                <h3 className="text-lg font-bold text-orange-900">
                  Comprehensive
                </h3>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                  <span>
                    Ideal For:{" "}
                    <span className="font-normal text-slate-700">
                      Large-scale clinical trials, multi-center studies, and
                      regulatory submissions
                    </span>
                  </span>
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                  <span>Includes:</span>
                </p>
                <ul className="space-y-2 pl-5 text-xs text-slate-700 leading-snug">
                  <li>Everything in the Standard Package</li>
                  <li>Full protocol development</li>
                  <li>Power analysis & advanced sample size calculation</li>
                  <li>Measurement instrument selection & validation plan</li>
                  <li>Regulatory compliance check (ICH-GCP, CONSORT, etc.)</li>
                </ul>
              </div>
            </div>

            <div className="p-6 pt-0">
              <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <ArrowRight className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                <span>
                  Turnaround Time:{" "}
                  <span className="font-normal text-slate-700">
                    10–15 working days
                  </span>
                </span>
              </p>
            </div>
          </div>

          {/* Custom */}
          <div className="bg-[#e4cd9f]/50 rounded-xl overflow-hidden border border-slate-200 flex flex-col justify-between">
            <div className="p-6 space-y-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/research-services/biostatistics-and-statistical-programming-service/c-box-icons.png"
                  alt="Custom package"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
                <h3 className="text-lg font-bold text-amber-950">Custom</h3>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                  <span>
                    Ideal For:{" "}
                    <span className="font-normal text-slate-700">
                      Complex, interdisciplinary, or high-impact studies
                    </span>
                  </span>
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                  <span>Includes:</span>
                </p>
                <ul className="space-y-2 pl-5 text-xs text-slate-700 leading-snug">
                  <li>
                    Tailor-made experimental design based on your research goals
                  </li>
                  <li>
                    Incorporation of unique methodologies or hybrid designs
                  </li>
                  <li>Ongoing consultation with our experts</li>
                </ul>
              </div>
            </div>

            <div className="p-6 pt-0">
              <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <ArrowRight className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                <span>
                  Turnaround Time:{" "}
                  <span className="font-normal text-slate-700">
                    As per the project scope
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Floating Red CTA Bar across the bottom */}
        <div className="mt-8 flex justify-center">
         <GetFreeQuoteButton/>
        </div>
      </section>
    </div>
  );
}
