"use client";

import React, { useState } from "react";
import Image from "next/image";

/* ============================================================ */
/* SECTION 1 DATA: STEP PROCESS                                */
/* ============================================================ */
const processSteps = [
  {
    stepNumber: 1,
    title: "UPLOAD YOUR MANUSCRIPT",
    description: "Submit your draft manuscript through our secure portal.",
    svgIcon: (
      <svg
        className="w-10 h-10 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V9.75d"
        />
      </svg>
    ),
  },
  {
    stepNumber: 2,
    title: "EXPERT MANUSCRIPT PREPARATION",
    description:
      "Our experts will prepare your document for submission based on journal guidelines.",
    svgIcon: (
      <svg
        className="w-10 h-10 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
  },
  {
    stepNumber: 3,
    title: "REFERENCE CHECK",
    description:
      "We verify and format every citation and reference correctly and consistently according to the specified style.",
    svgIcon: (
      <svg
        className="w-10 h-10 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.25 11.25L15 12.75m1.5 1.5l1.5-1.5M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    ),
  },
  {
    stepNumber: 4,
    title: "LANGUAGE STYLE CHECK",
    description:
      "Ensure consistency in language, tone, and technical language throughout the manuscript.",
    svgIcon: (
      <svg
        className="w-10 h-10 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.25-2.142V18a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 18V6.108c0-1.135.845-2.098 1.976-2.192a48.867 48.867 0 013.233-.223"
        />
      </svg>
    ),
  },
  {
    stepNumber: 5,
    title: "TRACKED CHANGES",
    description:
      "Receive the formatted manuscript with all changes tracked for review.",
    svgIcon: (
      <svg
        className="w-10 h-10 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
        />
      </svg>
    ),
  },
  {
    stepNumber: 6,
    title: "PUBLISH READY MANUSCRIPT",
    description:
      "Get the final Document Layout Service and Scientific Paper Submission Formatting that meets all Manuscript Submission Requirements for easy journal submission.",
    svgIcon: (
      <svg
        className="w-10 h-10 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m-15.432-4.5A8.959 8.959 0 003 12c0 .778.099 1.533.284 2.253"
        />
      </svg>
    ),
  },
];

/* ============================================================ */
/* SECTION 2 DATA: BENEFITS CARDS                               */
/* ============================================================ */
const benefitsData = [
  {
    id: 1,
    title: "Meet layout guidelines and conventions",
    description:
      "Our Academic Formatting Service team will revise your Document Layout to comply with the Journal Submission Formatting guidelines and conventions of the journal you plan to submit to. They will also indicate if you need to make any revisions to ensure that your title, running head, abstract, main text, and figure legends follow Academic Paper Formatting Guidelines and the journal's word count limits.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Match your journal's style guide",
    description:
      "Our formatters review each manuscript against your target journal's Academic Publishing Standards. We check that all of the images, figures, and tables are correctly placed using Professional Manuscript Layout and Research Paper Layout Design, ensuring figure titles and legends are standardized according to Journal Guidelines Compliance.",
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Follow your journal's reference guidelines",
    description:
      "We ensure that references meet APA/MLA/Chicago Formatting and other journal-specific requirements. Our experts also provide Manuscript Editing and Formatting Assistance to confirm that your manuscript complies with Manuscript Submission Requirements and is not over the maximum number of references allowed by the journal.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Save valuable time and effort",
    description:
      "Our Formatting Service for Scholarly Articles ensures every aspect of headings, title page information, and structure is aligned with Customized Manuscript Formatting Solutions. This saves you time while preparing a Publication-Ready Manuscript for submission.",
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=600&auto=format&fit=crop",
  },
];

export default function ProcessAndBenefitsSections() {
  // Step 2 is highlighted by default (as seen in image)
  const [activeStep, setActiveStep] = useState<number>(2);

  return (
    <div className="w-full bg-[#f8fafc] font-sans text-gray-800 py-16 space-y-24 antialiased">
      {/* ============================================================ */}
      {/* SECTION 1: HOW THE SCIENTIFIC DOCUMENT FORMATTING WORKS       */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0c3830] mb-2">
            How the Scientific document formatting Works
          </h2>
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
            Our step-by-Step Process
          </h3>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
            <a href="#" className="text-[#3b82f6] hover:underline">
              Journal Submission
            </a>{" "}
            Formatting and Research Paper Typesetting Services allow us to
            synthesize detailed research into a professional, Publication-Ready
            Manuscript. The process includes steps that guarantee Journal
            Guidelines Compliance, technical accuracy, and Academic Publishing
            Standards in line with your discipline and target publication.
          </p>
        </div>

        {/* Desktop Process Flow */}
        <div className="relative pt-8 pb-12">
          {/* Horizontal Connecting Blue Line */}
          <div className="hidden lg:block absolute top-[92px] left-[5%] right-[5%] h-2 bg-[#0082a6] -z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10">
            {processSteps.map((step) => {
              const isEven = step.stepNumber % 2 === 0;
              const isHovered = activeStep === step.stepNumber;

              return (
                <div
                  key={step.stepNumber}
                  onMouseEnter={() => setActiveStep(step.stepNumber)}
                  className={`flex flex-col items-center group cursor-pointer transition-all duration-300 ${
                    isEven ? "lg:flex-col-reverse" : "lg:flex-col"
                  }`}
                >
                  {/* Step Number Circle */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-md transition-all duration-300 z-20 ${
                      isHovered
                        ? "bg-[#0082a6] text-white scale-110 ring-4 ring-[#0082a6]/20"
                        : "bg-[#0082a6] text-white"
                    }`}
                  >
                    {step.stepNumber}
                  </div>

                  {/* Connecting Vertical Pointer Line */}
                  <div
                    className={`w-0.5 h-6 transition-colors duration-300 ${
                      isHovered ? "bg-[#0082a6]" : "bg-[#0082a6]/40"
                    }`}
                  ></div>

                  {/* Step Content Card */}
                  <div
                    className={`w-full p-4 rounded-xs border text-center transition-all duration-300 min-h-[260px] flex flex-col items-center justify-start ${
                      isHovered
                        ? "bg-[#4b5563] text-white border-[#4b5563] shadow-xl scale-[1.03]"
                        : "bg-white text-gray-800 border-gray-200 hover:border-gray-300 shadow-2xs"
                    }`}
                  >
                    <div
                      className={`mb-3 transition-colors duration-300 ${isHovered ? "text-white" : "text-gray-700"}`}
                    >
                      {step.svgIcon}
                    </div>

                    <h4
                      className={`text-xs font-bold tracking-wider mb-2 uppercase leading-tight ${
                        isHovered ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {step.title}
                    </h4>

                    <p
                      className={`text-[11px] leading-relaxed ${
                        isHovered ? "text-gray-100" : "text-gray-600"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2: DARK BANNER                                        */}
      {/* ============================================================ */}
      <section className="w-full bg-[#053228] text-white py-8 text-center px-4">
        <div className="max-w-4xl mx-auto space-y-2">
          <h3 className="text-lg md:text-xl font-bold tracking-wide">
            Focus on Your Research — We’ll Handle the Formatting
          </h3>
          <p className="text-xs md:text-sm text-gray-200">
            With the manuscript formatting service, you have a professionally
            structured, journal-compliant manuscript, stress-free. We support
            you from initial formatting to the final review
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3: BENEFITS CARDS WITH HOVER EFFECTS                   */}
      {/* ============================================================ */}
      <section className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0c3830] mb-8 text-left">
          Benefits of Journal Submission Formatting
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsData.map((benefit) => (
            <div
              key={benefit.id}
              className="group bg-white rounded-xl border border-gray-200/80 overflow-hidden shadow-2xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Image Container with Zoom effect on hover */}
              <div className="relative w-full h-44 overflow-hidden bg-gray-100">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>

              {/* Card Text Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-gray-900 text-center mb-3 group-hover:text-[#0082a6] transition-colors leading-snug">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed text-left">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
