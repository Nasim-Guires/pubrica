"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface AudienceCard {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const IMG =
  "/images/research-services/biostatistics-and-statistical-programming-service/";

const audienceCards: AudienceCard[] = [
  {
    id: "pharma-biotech",
    title: "Pharmaceutical & Biotechnology Companies",
    description:
      "End-to-end biostatistical and statistical programming support for clinical trials, from early-phase studies to post-marketing surveillance.",
    imageSrc: `${IMG}Pharmaceutical-Biotechnology-Companies-2.png`,
    imageAlt: "Lab scientist working with microscope",
  },
  {
    id: "cros",
    title: "Clinical Research Organizations (CROs)",
    description:
      "Flexible programming and analysis solutions that integrate seamlessly with CRO workflows and timelines.",
    imageSrc: `${IMG}Clinical-Research-Organizations-CROs.png`,
    imageAlt: "Clinical research team analyzing samples",
  },
  {
    id: "academic-institutions",
    title: "Academic & Research Institutions",
    description:
      "Statistical programming for academic research, grant projects, and publication-ready analyses.",
    imageSrc: `${IMG}Academic-Research-Institutions.png`,
    imageAlt: "Audience attending academic research presentation",
  },
  {
    id: "medical-device",
    title: "Medical Device Manufacturers",
    description:
      "Regulatory-compliant biostatistical programming for device trials, usability studies, and post-market evaluations.",
    imageSrc: `${IMG}Medical-Device-Manufacturers-1.png`,
    imageAlt: "Cleanroom medical device manufacturing unit",
  },
  {
    id: "healthcare-providers",
    title: "Healthcare Providers & Hospitals",
    description:
      "Data management, statistical analysis, and reporting for clinical research, patient outcome studies, and quality improvement initiatives.",
    imageSrc: `${IMG}Healthcare-Providers-Hospitals.png`,
    imageAlt: "Group of healthcare professionals and doctors",
  },
  {
    id: "regulatory-agencies",
    title: "Regulatory Agencies & Government Bodies",
    description:
      "Submission-ready datasets, tables, listings, and figures (TLFs) that meet FDA, EMA, and ICH standards.",
    imageSrc: `${IMG}Regulatory-Agencies-Government-Bodies.png`,
    imageAlt: "Legal and regulatory compliance consultation",
  },
];

export default function BiostatisticsExpertiseAndWhoWeServe() {
  return (
    <div className="w-full font-sans text-slate-800 bg-white">
      {/* ========================================================= */}
      {/* 1. OUR BIOSTATISTICAL EXPERTISE INCLUDES                  */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto py-6 sm:py-7 px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b38] tracking-tight">
            Our Biostatistical Expertise Includes
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
            We provide our researchers and clinical trials investigators with
            the information, data management, analysis, and{" "}
            <Link
              href="/services/research-services/statistical-vs-contextual-interpretation-research"
              className="text-blue-600 font-medium no-underline hover:no-underline"
            >
              statistical interpretations
            </Link>{" "}
            they require:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Visual Illustration */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md h-72 sm:h-80">
              {/* Circular light background accent */}
              <div className="absolute top-0 right-4 w-56 h-56 bg-slate-100 rounded-full -z-10" />

              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-md border border-slate-100">
                <Image
                  src={`${IMG}Our-Biostatistical-Expertise-Includes.png`}
                  alt="Our biostatistical expertise collage"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>

          {/* Right Bulleted List */}
          <div className="lg:col-span-7 space-y-3">
            <ul className="space-y-3 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold text-lg leading-none mt-1">
                  •
                </span>
                <span>
                  <strong className="text-slate-900 font-bold">
                    Data Management & Preparation
                  </strong>{" "}
                  – Cleaning, structuring, and validating datasets to ensure
                  integrity and compliance.
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold text-lg leading-none mt-1">
                  •
                </span>
                <span>
                  <strong className="text-slate-900 font-bold">
                    Statistical Programming
                  </strong>{" "}
                  – SAS, R, and customized coding solutions for clinical trial
                  analysis and research projects.
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold text-lg leading-none mt-1">
                  •
                </span>
                <span>
                  <strong className="text-slate-900 font-bold">
                    Advanced Biostatistical Analysis
                  </strong>{" "}
                  – Survival analysis, predictive modeling, regression
                  techniques, and multivariate methods.
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold text-lg leading-none mt-1">
                  •
                </span>
                <span>
                  <strong className="text-slate-900 font-bold">
                    Regulatory-Ready Deliverables
                  </strong>{" "}
                  – SDTM and ADaM datasets, tables, listings, and figures (TLFs)
                  that meet FDA, EMA, and ICH guidelines.
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold text-lg leading-none mt-1">
                  •
                </span>
                <span>
                  <strong className="text-slate-900 font-bold">
                    Customized Solutions
                  </strong>{" "}
                  – Tailored programming and modeling approaches aligned with
                  specific therapeutic areas and research objectives.
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold text-lg leading-none mt-1">
                  •
                </span>
                <span>
                  <strong className="text-slate-900 font-bold">
                    Comprehensive Reporting
                  </strong>{" "}
                  – Publication-ready statistical reports, visualizations, and
                  interpretation to support manuscripts and submissions.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. WHO WE SERVE SECTION (WITH BLACK HOVER EFFECT)         */}
      {/* ========================================================= */}
      <section className="bg-slate-50 py-6 sm:py-7 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header Copy */}
          <div className="space-y-3 max-w-5xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b38]">
              Who We Serve
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
              Our biostatistical programming services cater to a diverse range
              of clients in the medical,{" "}
              <Link
                href="/industries/pharmaceutical"
                className="text-blue-600 font-medium no-underline hover:no-underline"
              >
                pharmaceutical
              </Link>
              , and life science sectors, providing tailored solutions to meet
              their unique research and regulatory needs.
            </p>
          </div>

          {/* Grid of 6 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audienceCards.map((card) => (
              <div
                key={card.id}
                tabIndex={0}
                className="group relative h-64 sm:h-72 rounded-sm overflow-hidden shadow-sm cursor-pointer border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0e3b38]"
              >
                {/* Background Image */}
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* --- DEFAULT STATE: Dark Gradient at Bottom + Title --- */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-5 transition-opacity duration-300 group-hover:opacity-0 group-focus:opacity-0">
                  <h3 className="text-white font-bold text-base sm:text-lg leading-snug">
                    {card.title}
                  </h3>
                </div>

                {/* --- HOVER STATE: Solid Black Box Overlay + Title + Body Text --- */}
                <div className="absolute inset-0 bg-black text-white p-6 flex flex-col justify-start space-y-3 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300">
                  <h3 className="font-bold text-base sm:text-lg leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Footer Note */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
            With expertise in SAS programming for clinical trials, CDISC SDTM
            and ADaM programming, and regulatory submission programming
            services, we ensure accurate, compliant, and submission-ready
            deliverables across multiple therapeutic areas.
          </p>
        </div>
      </section>
    </div>
  );
}
