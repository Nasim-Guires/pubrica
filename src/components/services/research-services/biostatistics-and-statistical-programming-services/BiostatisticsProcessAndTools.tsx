"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { EditorialWorkflowSection, WorkflowStep } from "@/components/common/EditorialWorkflowSection";

const IMG =
  "/images/research-services/biostatistics-and-statistical-programming-service/";


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
      <EditorialWorkflowSection
        heading="How Our Biostatistical Programming Service Works"
        subheading=""
        description="Our Step-by-step by Process"
        steps={steps}
      />

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