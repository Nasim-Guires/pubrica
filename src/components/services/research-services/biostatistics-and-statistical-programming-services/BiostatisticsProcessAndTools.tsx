"use client";

import React from "react";
import Image from "next/image";

const IMG =
  "/images/research-services/biostatistics-and-statistical-programming-service/";

interface Step {
  stepNumber: number;
  title: string;
  description: string;
  iconSrc: string;
  position: "top" | "bottom";
}

const steps: Step[] = [
  {
    stepNumber: 1,
    title: "REQUIREMENT GATHERING & PROJECT SCOPING",
    description:
      "We begin by understanding your study objectives, therapeutic area, regulatory requirements, and preferred statistical methodologies. This helps us design a tailored programming strategy that aligns with your research goals.",
    iconSrc: `${IMG}Understand-ing-Your-Needs.png`,
    position: "top",
  },
  {
    stepNumber: 2,
    title: "DATA ACQUISITION & PREPARATION",
    description:
      "Our team collects and organizes raw datasets, performing data cleaning, transformation, and validation to ensure accuracy, completeness, and compliance with CDISC standards (SDTM, ADaM).",
    iconSrc: `${IMG}Data-Collection-Preparation.png`,
    position: "bottom",
  },
  {
    stepNumber: 3,
    title: "STATISTICAL PROGRAMMING & ANALYSIS",
    description:
      "Using advanced tools like SAS, we develop statistical programs for generating datasets, TLFs that support your SAP. This includes descriptive, inferential, and predictive modelling as per study requirements.",
    iconSrc: `${IMG}Model-Development.png`,
    position: "top",
  },
  {
    stepNumber: 4,
    title: "QUALITY CONTROL & VALIDATION",
    description:
      "We implement rigorous QC checks to ensure programming accuracy, consistency, and minimize the risk of delays during regulatory review.",
    iconSrc: `${IMG}Validation-Testing.png`,
    position: "bottom",
  },
  {
    stepNumber: 5,
    title: "REPORTING & VISUALIZATION",
    description:
      "Our team delivers detailed statistical reports, visualizations, and submission-ready outputs that enhance data interpretation and decision-making for stakeholders.",
    iconSrc: `${IMG}Visualization-Reporting-Testing.png`,
    position: "top",
  },
  {
    stepNumber: 6,
    title: "REGULATORY SUBMISSION SUPPORT",
    description:
      "We provide regulatory submission programming services, ensuring all deliverables meet global compliance standards and are ready for submission to agencies like the FDA, EMA, and PMDA.",
    iconSrc: `${IMG}Delivery-Support.png`,
    position: "bottom",
  },
];

export default function BiostatisticsProcessAndTools() {
  return (
    <div className="w-full font-sans text-slate-800 bg-white">
      {/* ========================================================= */}
      {/* 1. TOOLS WE USE SECTION                                  */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto pt-6 pb-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-[#0e3b38] mb-4">
          Tools We Use
        </h2>

        <ul className="space-y-2 text-xs sm:text-sm md:text-base text-slate-700">
          <li className="flex items-start gap-2">
            <span className="text-red-600 font-bold text-lg leading-none mt-0.5">
              •
            </span>
            <span>
              <strong className="text-slate-900 font-bold">
                Programming & Statistical Tools
              </strong>{" "}
              – SAS, R, STATA, SPSS, MATLAB
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 font-bold text-lg leading-none mt-0.5">
              •
            </span>
            <span>
              <strong className="text-slate-900 font-bold">
                Data Management & Standards
              </strong>{" "}
              – CDISC SDTM, ADaM, Pinnacle 21
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 font-bold text-lg leading-none mt-0.5">
              •
            </span>
            <span>
              <strong className="text-slate-900 font-bold">
                Visualization & Reporting
              </strong>{" "}
              – JMP, GraphPad, Power BI, Tableau
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 font-bold text-lg leading-none mt-0.5">
              •
            </span>
            <span>
              <strong className="text-slate-900 font-bold">
                Compliance Support
              </strong>{" "}
              – Tools aligned with FDA, EMA, and ICH regulatory requirements
            </span>
          </li>
        </ul>
      </section>

      {/* ========================================================= */}
      {/* 2. HOW OUR BIOSTATISTICAL PROGRAMMING SERVICE WORKS       */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 overflow-x-auto">
        <div className="text-center space-y-2 mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b38]">
            How Our Biostatistical Programming Service Works
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Our Step-by-step Process
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="min-w-[900px] grid grid-cols-6 gap-3 relative py-8">
          {/* Horizontal Connecting Blue Bar Across Center */}
          <div className="absolute top-1/2 left-0 right-0 h-2 bg-[#008ba3] -translate-y-1/2 z-0" />

          {steps.map((step) => {
            const isTop = step.position === "top";

            return (
              <div
                key={step.stepNumber}
                className="relative z-10 flex flex-col items-center"
              >
                {/* --- TOP BADGE / STEP NUMBER --- */}
                {isTop && (
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#008ba3] text-white font-bold flex items-center justify-center text-sm shadow-md">
                      {step.stepNumber}
                    </div>
                    <div className="w-0.5 h-6 bg-pink-600 mt-1" />
                  </div>
                )}

                {/* --- HOVERABLE CARD (DARK SLATE HOVER EFFECT FOR ALL CARDS) --- */}
                <div
                  tabIndex={0}
                  className={`group w-full min-h-[300px] rounded-sm p-4 border border-slate-200 shadow-sm transition-all duration-300 cursor-pointer flex flex-col justify-start space-y-3
                    bg-slate-50 hover:bg-[#3d3d3d] focus:bg-[#3d3d3d] text-slate-800 hover:text-white focus:text-white hover:shadow-xl hover:scale-[1.02]`}
                >
                  {/* Icon */}
                  <div className="flex justify-center pt-2">
                    <Image
                      src={step.iconSrc}
                      alt=""
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain group-hover:invert group-focus:invert transition duration-200"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xs font-bold text-center tracking-tight leading-tight text-slate-900 group-hover:text-white group-focus:text-white uppercase transition-colors duration-200">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[11px] leading-relaxed text-slate-600 group-hover:text-slate-200 group-focus:text-slate-200 text-left transition-colors duration-200">
                    {step.description}
                  </p>
                </div>

                {/* --- BOTTOM BADGE / STEP NUMBER --- */}
                {!isTop && (
                  <div className="flex flex-col items-center mt-4">
                    <div className="w-0.5 h-6 bg-pink-600 mb-1" />
                    <div className="w-10 h-10 rounded-full bg-[#008ba3] text-white font-bold flex items-center justify-center text-sm shadow-md">
                      {step.stepNumber}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. HOW WE HELP SECTION                                     */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto pt-6 pb-7 px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-[#0e3b38] mb-4">
          How We Help
        </h2>

        <ul className="space-y-3 text-xs sm:text-sm md:text-base text-slate-700">
          <li className="flex items-start gap-2">
            <span className="text-red-600 font-bold text-lg leading-none mt-0.5">
              •
            </span>
            <span>
              Streamline clinical trial data analysis with precise statistical
              programming
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 font-bold text-lg leading-none mt-0.5">
              •
            </span>
            <span>
              Ensure data integrity and regulatory compliance across all stages
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 font-bold text-lg leading-none mt-0.5">
              •
            </span>
            <span>
              Deliver publication-ready reports and visualizations for journals
              and stakeholders
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 font-bold text-lg leading-none mt-0.5">
              •
            </span>
            <span>
              Provide end-to-end support from dataset preparation to submission
              deliverables
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 font-bold text-lg leading-none mt-0.5">
              •
            </span>
            <span>
              Enhance research credibility with transparent, reproducible, and
              validated analyses
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}
