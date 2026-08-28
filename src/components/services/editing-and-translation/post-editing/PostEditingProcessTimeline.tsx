"use client";

import React from "react";
import Image from "next/image";

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  iconSrc: string;
}

export const PostEditingProcessTimeline: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      number: 1,
      title: "MANUSCRIPT ASSESSMENT",
      description:
        "Our experts review your manuscript to understand its structure, content, and intended audience. We identify areas that need improvement for clarity, consistency, and quality.",
      iconSrc:
        "/images/editing-and-translation/post-editing/Manuscript-Assessment.png",
    },
    {
      number: 2,
      title: "CONTENT POST-EDITING",
      description:
        "We refine your text by correcting errors, enhancing readability, and ensuring coherence while preserving your original meaning and style.",
      iconSrc:
        "/images/editing-and-translation/post-editing/Content-Post-Editing.png",
    },
    {
      number: 3,
      title: "LANGUAGE & GRAMMAR ENHANCEMENT",
      description:
        "Grammar, punctuation, and syntax are polished to meet academic or professional standards. Specialized terminology is checked for accuracy and consistency.",
      iconSrc:
        "/images/editing-and-translation/post-editing/Language-Grammar-Enhancement.png",
    },
    {
      number: 4,
      title: "FORMATTING & STYLE COMPLIANCE",
      description:
        "The manuscript is formatted according to your target journal, publisher, or organization guidelines, including references, headings, and citations.",
      iconSrc:
        "/images/editing-and-translation/post-editing/Formatting-Style-Compliance.png",
    },
    {
      number: 5,
      title: "QUALITY ASSURANCE & REVIEW",
      description:
        "A senior editor reviews the post-edited manuscript to ensure it meets high-quality standards and is ready for submission or publication.",
      iconSrc:
        "/images/editing-and-translation/post-editing/Quality-Assurance-Review.png",
    },
    {
      number: 6,
      title: "DELIVERY & FEEDBACK",
      description:
        "The final manuscript is delivered along with suggestions or notes (if necessary) for any final tweaks, ensuring your work is publication-ready.",
      iconSrc:
        "/images/editing-and-translation/post-editing/Delivery-Feedback.png",
    },
  ];

  return (
    <div className="w-full bg-[#f8fafc] text-slate-800">
      {/* ------------------------------------------------------------- */}
      {/* 1. TOP HERO BANNER SECTION                                   */}
      {/* ------------------------------------------------------------- */}
      <section className="w-full bg-[#03231a] py-5 px-4 sm:px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 tracking-wide">
            Post Editing Services at Pubrica
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-3xl mx-auto font-light">
            Pubrica’s Post Editing Services refine your document, ensuring
            clarity and accuracy. Our expert editors meticulously review
            grammar, style, and coherence, delivering polished content tailored
            to your needs.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. HOW OUR POST EDITING SERVICES WORKS SECTION               */}
      {/* ------------------------------------------------------------- */}
      <section className="w-full py-6 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0d3b36] mb-2">
            How Our Post Editing Services Works
          </h2>
          <h3 className="text-base sm:text-lg font-semibold text-[#0d3b36] mb-3">
            Our Step-by-Step Process
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-3xl mx-auto leading-relaxed">
            At Pubrica, we refine your manuscript to perfection with our expert
            Post Editing Service. Our meticulous step-by-step process ensures
            your work is polished, professional, and ready for successful
            publication.
          </p>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* TIMELINE CONTAINER (Desktop & Mobile Responsive)             */}
        {/* ------------------------------------------------------------- */}
        <div className="relative my-8">
          {/* Horizontal Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-[140px] left-0 right-0 h-2 bg-[#028491] -z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((step) => {
              const isTopCircle = step.number % 2 !== 0;

              return (
                <div
                  key={step.number}
                  className="flex flex-col items-center group"
                >
                  {/* Step Circle - Top position for Odd numbers */}
                  {isTopCircle && (
                    <div className="flex flex-col items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#028491] text-white flex items-center justify-center font-bold text-base shadow-md border-2 border-white transition-transform duration-300 group-hover:scale-110">
                        {step.number}
                      </div>
                      <div className="hidden lg:block w-0.5 h-6 bg-[#028491]" />
                    </div>
                  )}

                  {/* Card Content Box - Hover turns background dark black */}
                  <div className="w-full min-h-[270px] p-5 rounded-md shadow-sm border border-slate-200 bg-white text-slate-800 transition-all duration-300 cursor-pointer text-left flex flex-col hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a] hover:shadow-xl hover:-translate-y-1">
                    {/* Icon Container */}
                    <div className="mb-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-slate-100 transition-colors duration-300 group-hover:bg-slate-800">
                        <Image
                          src={step.iconSrc}
                          alt={step.title}
                          width={24}
                          height={24}
                          className="w-6 h-6 object-contain group-hover:invert group-hover:brightness-200 transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h4 className="text-xs font-bold uppercase tracking-wider mb-2 leading-snug text-slate-900 transition-colors duration-300 group-hover:text-white">
                      {step.title}
                    </h4>

                    {/* Step Description */}
                    <p className="text-xs leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-slate-200">
                      {step.description}
                    </p>
                  </div>

                  {/* Step Circle - Bottom position for Even numbers */}
                  {!isTopCircle && (
                    <div className="flex flex-col items-center mt-4">
                      <div className="hidden lg:block w-0.5 h-6 bg-[#028491]" />
                      <div className="w-10 h-10 rounded-full bg-[#028491] text-white flex items-center justify-center font-bold text-base shadow-md border-2 border-white transition-transform duration-300 group-hover:scale-110">
                        {step.number}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
