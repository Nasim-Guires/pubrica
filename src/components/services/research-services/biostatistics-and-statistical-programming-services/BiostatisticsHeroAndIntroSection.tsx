"use client";

import React from "react";
import Image from "next/image";

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  borderColor: string;
}

const serviceCards: ServiceCard[] = [
  {
    id: "advanced-methods",
    title: "Proficient in advanced methods",
    description:
      "Our team excels in advanced statistical methodologies and adaptive clinical trial designs to modernize the delivery of biometrics consulting.",
    borderColor: "border-l-amber-400",
  },
  {
    id: "end-to-end",
    title: "Integrated, end-to-end support",
    description:
      "Capabilities covering all phases of drug development that closely link with pharmacometrics, clinical pharmacology, and regulatory solutions.",
    borderColor: "border-l-purple-400",
  },
  {
    id: "cdisc-compliant",
    title: "CDISC-compliant programming",
    description:
      "Optimize your clinical trials with SDTM & ADaM dataset programming services, ensuring compliance and streamlined submissions.",
    borderColor: "border-l-teal-400",
  },
];

export default function BiostatisticsHeroAndIntroSection() {
  return (
    <div className="w-full font-sans text-slate-800 bg-white">
      {/* ========================================================= */}
      {/* 1. HERO BANNER SECTION                                    */}
      {/* ========================================================= */}
      <section className="w-full bg-[#112320] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto border border-white/80 p-6 sm:p-10 md:p-12 text-center space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-snug">
            Biostatistics and Statistical Programming Services
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-200 max-w-4xl mx-auto leading-relaxed font-light">
            Pubrica’s biostatistical programming service delivers precise data
            analysis, advanced statistical modelling, and publication-ready
            outputs to ensure the accuracy, reliability, and scientific
            integrity of your research findings.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. INTRO SECTION (Ensure Accurate Study Outcomes)          */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0e3b38] leading-tight">
              Ensure accurate and reliable study outcomes with Pubrica’s expert
              biostatistical programmers — delivering precise coding, advanced
              analysis, and rigorous validation to support your research and
              regulatory submissions
            </h2>

            <div className="space-y-4 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
              <p>
                Pubrica delivers accurate, compliant, and publication-ready{" "}
                <a
                  href="#biostatistical-programming"
                  className="text-sky-600 hover:underline font-medium"
                >
                  biostatistical programming
                </a>{" "}
                for medical,{" "}
                <a
                  href="#life-science"
                  className="text-sky-600 hover:underline font-medium"
                >
                  life science
                </a>
                , and healthcare research. With a team of certified SAS
                programmers and experienced biostatisticians, we have completed
                150+ projects across therapeutic areas.
              </p>
              <p>
                Our expertise in data management, advanced modeling, and
                regulatory adherence (FDA, EMA, ICH) ensures reliable study
                outcomes, submission-ready deliverables, and impactful research
                publications.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#get-a-quote"
                className="inline-block bg-[#b30000] hover:bg-[#8e0000] text-white font-bold text-xs sm:text-sm px-8 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
              >
                Get a Free Quote
              </a>
            </div>
          </div>

          {/* Image Box */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[4/3]">
              <div className="absolute -inset-2 bg-[#0e2c28] rounded-2xl transform translate-x-3 translate-y-3" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/services/biostatistics-programming.jpg"
                  alt="Biostatisticians analyzing clinical data"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. ADVANCED BIOSTATISTICS & CDISC SECTION                */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto pb-16 px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Header Copy */}
          <div className="space-y-4 max-w-6xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0e3b38] tracking-tight leading-tight">
              Advanced Biostatistics Consulting And CDISC-Compliant Statistical
              Programming
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
              Reliable clinical trial data are essential for the success of any
              drug development program. Even groundbreaking therapies can be
              compromised by flawed study design or execution. At Pubrica, our
              expert biostatistical consulting team delivers meticulous{" "}
              <a
                href="#data-collection"
                className="text-sky-600 hover:underline font-medium"
              >
                data collection
              </a>
              , validation, and analysis to ensure your{" "}
              <a
                href="#research"
                className="text-sky-600 hover:underline font-medium"
              >
                research
              </a>{" "}
              meets the highest standards. By providing end-to-end statistical
              support across every stage of drug development, we help you design
              efficient, cost-effective trials that minimize risk, optimize
              outcomes, and strengthen your path to regulatory approval.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {serviceCards.map((card) => (
              <div
                key={card.id}
                className={`bg-white rounded-md border border-slate-200 border-l-[6px] ${card.borderColor} p-6 shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-start space-y-4`}
              >
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
