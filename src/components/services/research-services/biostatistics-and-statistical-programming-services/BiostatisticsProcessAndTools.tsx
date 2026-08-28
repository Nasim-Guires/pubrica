"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const IMG =
  "/images/research-services/biostatistics-and-statistical-programming-service/";

export interface WorkflowStep {
  stepNumber: string | number;
  title: string;
  description: string;
  iconSrc: string;
  position: "top" | "bottom";
}

const steps: WorkflowStep[] = [
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
      {/* 1. TOOLS WE USE SECTION                                   */}
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
      {/* 2. PROCESS SECTION (Matching EditorialWorkflowSection Design) */}
      {/* ========================================================= */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-[#EAEAEA] w-full text-center font-sans overflow-hidden">
        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#0B353D] mb-2">
          How Our Biostatistical Programming Service Works
        </h2>

        <h3 className="text-lg md:text-xl font-medium text-[#2C4951] mb-4">
          Our Step-by-step Process
        </h3>

        {/* ============================================================ */}
        {/* MOBILE LAYOUT (< md screens): Vertical Alternating Timeline  */}
        {/* ============================================================ */}
        <div className="flex md:hidden flex-col items-center w-full max-w-sm mx-auto space-y-6">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className="relative flex items-center w-full min-h-[160px]"
              >
                {/* Connecting Vertical Line */}
                {index !== steps.length - 1 && (
                  <div
                    className={`absolute top-8 bottom-0 w-[2px] bg-[#0081A7] z-0 ${isEven ? "left-4" : "right-4"
                      }`}
                  />
                )}

                {/* Step Number Badge */}
                <div
                  className={`absolute z-10 w-9 h-9 rounded-full bg-[#0081A7] text-white font-bold flex items-center justify-center text-sm shadow-sm ${isEven ? "left-0" : "right-0"
                    }`}
                >
                  {step.stepNumber}
                </div>

                {/* Step Card Container */}
                <div
                  className={`w-full flex ${isEven ? "pl-10 pr-2" : "pr-10 pl-2"
                    }`}
                >
                  <div className="bg-[#F8F9FA] border border-[#E2E8F0] rounded-sm shadow-xs p-4 flex flex-col items-center text-center w-full z-10">
                    <div className="w-10 h-10 relative mb-3 flex items-center justify-center">
                      <Image
                        src={step.iconSrc}
                        alt={step.title}
                        width={36}
                        height={36}
                        className="object-contain"
                      />
                    </div>

                    <h4 className="font-bold text-[#0F172A] text-xs mb-2 leading-snug">
                      {step.title}
                    </h4>

                    <p className="text-[#64748B] text-[11px] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ============================================================ */}
        {/* DESKTOP LAYOUT (>= md screens): Dynamic Flow Layout          */}
        {/* ============================================================ */}
        <div
          className="hidden md:grid gap-2 lg:gap-4 items-stretch justify-center w-full max-w-7xl mx-auto relative my-8"
          style={{
            gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))`,
          }}
        >
          {steps.map((step, index) => {
            const isTop = step.position === "top";

            return (
              <div
                key={index}
                className="flex flex-col items-center justify-between group w-full relative min-h-[500px]"
              >
                {/* UPPER SECTION */}
                <div className="w-full flex flex-col items-center justify-end flex-1 pb-0">
                  {!isTop ? (
                    /* Card placed at Top */
                    <div className="bg-[#F8F9FA] border border-[#E2E8F0] shadow-xs p-3 lg:p-4 flex flex-col items-center text-center w-full h-full justify-start z-20 transition-all duration-300 group-hover:bg-black group-hover:border-black rounded-xs">
                      <div className="w-10 h-10 lg:w-11 lg:h-11 relative mb-3 flex items-center justify-center shrink-0">
                        <Image
                          src={step.iconSrc}
                          alt={step.title}
                          width={38}
                          height={38}
                          className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                        />
                      </div>

                      <h4 className="font-bold text-[#0F172A] text-xs lg:text-sm mb-2 leading-snug transition-colors duration-300 group-hover:text-white">
                        {step.title}
                      </h4>

                      <p className="text-[#64748B] text-[11px] lg:text-xs leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                        {step.description}
                      </p>
                    </div>
                  ) : (
                    /* Badge + Vertical Connector Line */
                    <div className="flex flex-col items-center justify-end w-full">
                      <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[#0081A7] text-white font-bold flex items-center justify-center text-sm lg:text-base shadow-sm z-20 transition-colors duration-300 group-hover:bg-black shrink-0 mb-3">
                        {step.stepNumber}
                      </div>
                      <div className="w-[2px] h-10 bg-[#0081A7] transition-colors duration-300 group-hover:bg-black" />
                    </div>
                  )}
                </div>

                {/* CENTER HORIZONTAL LINE SEGMENT */}
                <div className="w-full h-[8px] relative my-0 shrink-0">
                  <div
                    className={`h-full bg-[#0081A7] w-full transition-colors duration-300 group-hover:bg-black ${index === 0
                        ? "rounded-l-sm"
                        : index === steps.length - 1
                          ? "rounded-r-sm"
                          : ""
                      }`}
                  />
                </div>

                {/* LOWER SECTION */}
                <div className="w-full flex flex-col items-center justify-start flex-1 pt-0">
                  {isTop ? (
                    /* Card placed at Bottom */
                    <div className="bg-[#F8F9FA] border border-[#E2E8F0] shadow-xs p-3 lg:p-4 flex flex-col items-center text-center w-full h-full justify-start z-20 transition-all duration-300 group-hover:bg-black group-hover:border-black rounded-xs">
                      <div className="w-10 h-10 lg:w-11 lg:h-11 relative mb-3 flex items-center justify-center shrink-0">
                        <Image
                          src={step.iconSrc}
                          alt={step.title}
                          width={38}
                          height={38}
                          className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                        />
                      </div>

                      <h4 className="font-bold text-[#0F172A] text-xs lg:text-sm mb-2 leading-snug transition-colors duration-300 group-hover:text-white">
                        {step.title}
                      </h4>

                      <p className="text-[#64748B] text-[11px] lg:text-xs leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                        {step.description}
                      </p>
                    </div>
                  ) : (
                    /* Vertical Connector Line + Badge */
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="w-[2px] h-10 bg-[#0081A7] transition-colors duration-300 group-hover:bg-black" />
                      <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[#0081A7] text-white font-bold flex items-center justify-center text-sm lg:text-base shadow-sm z-20 transition-colors duration-300 group-hover:bg-black shrink-0 mt-3">
                        {step.stepNumber}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. HOW WE HELP SECTION                                    */}
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