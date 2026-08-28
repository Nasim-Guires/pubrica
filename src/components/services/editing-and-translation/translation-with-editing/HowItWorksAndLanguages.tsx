"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRightCircle, Plus, Minus } from "lucide-react";

// --- Step Process Data ---
interface StepItem {
  stepNumber: number;
  title: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
  position: "top" | "bottom";
}

const PROCESS_ICON_BASE =
  "/images/editing-and-translation/translation-with-editing/";

const stepsData: StepItem[] = [
  {
    stepNumber: 1,
    title: "Translation",
    description:
      "A translator converts the manuscript into English, attending to the technical language and conventions in the subject area.",
    iconSrc: `${PROCESS_ICON_BASE}Translation.png`,
    iconAlt: "Translation",
    position: "bottom",
  },
  {
    stepNumber: 2,
    title: "Bilingual review",
    description:
      "A bilingual expert checks the accuracy of the translation and ensures that your original meaning is conveyed.",
    iconSrc: `${PROCESS_ICON_BASE}Bilingual-review.png`,
    iconAlt: "Bilingual review",
    position: "top",
  },
  {
    stepNumber: 3,
    title: "Language edit",
    description:
      "An experienced reviewer checks for punctuation, grammar, language style, formatting, clarity, and fluency.",
    iconSrc: `${PROCESS_ICON_BASE}Language-edit.png`,
    iconAlt: "Language edit",
    position: "bottom",
  },
  {
    stepNumber: 4,
    title: "Final review",
    description:
      "A senior reviewer checks that all your requirements have been met before sending you the final, submission-ready file.",
    iconSrc: `${PROCESS_ICON_BASE}Final-review.png`,
    iconAlt: "Final review",
    position: "top",
  },
];

// --- Languages Data ---
const languagesList = [
  "English to Chinese",
  "Chinese to English",
  "French to English",
  "English to French",
  "German to English",
  "English to German",
  "Spanish to English",
  "English to Spanish",
  "Italian to English",
  "English to Italian",
  "Portuguese to English",
  "English to Portuguese",
  "Korean to English",
  "English to Korean",
  "Arabic to English",
  "English to Arabic",
];

export default function HowItWorksAndLanguages() {
  // Guarantee accordion state (defaults to open)
  const [isGuaranteeOpen, setIsGuaranteeOpen] = useState<boolean>(true);

  return (
    <div className="w-full bg-[#f4f6f8] text-slate-800 font-sans pb-7">
      {/* Top Dark Green Banner Header */}
      <div className="w-full bg-[#083329] text-white py-8 px-4 text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">
          Translation with Editing Services at Pubrica
        </h2>
        <p className="text-sm sm:text-base text-slate-200 max-w-3xl mx-auto">
          Pubrica offers Translation with Editing Services, ensuring your
          content is accurately translated and meticulously polished for
          professionalism.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        {/* ======================================= */}
        {/* SECTION 1: HOW IT WORKS (STEP-BY-STEP)  */}
        {/* ======================================= */}
        <section className="text-center space-y-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#003B46] mb-2">
              How Our Translation with Editing Service Works
            </h2>
            <h3 className="text-lg font-semibold text-[#003B46] mb-3">
              Our Step-by-Step Process
            </h3>
            <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto">
              We don&apos;t just translate. We transform your document into a
              submission-ready manuscript in four comprehensive steps:
            </p>
          </div>

          {/* Steps Timeline Grid */}
          <div className="relative pt-6 pb-6">
            {/* Center Connecting Horizontal Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-2 bg-[#008099] -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
              {stepsData.map((step) => (
                <div
                  key={step.stepNumber}
                  className="flex flex-col items-center justify-between min-h-[300px]"
                >
                  {/* TOP POSITION CARD */}
                  {step.position === "top" ? (
                    <div className="group w-full bg-white border border-slate-200 rounded-lg p-5 shadow-sm text-left hover:bg-[#525252] transition-colors duration-200 cursor-pointer mb-4 min-h-[170px] flex flex-col justify-start">
                      <div className="mb-2 relative w-10 h-10">
                        <Image
                          src={step.iconSrc}
                          alt={step.iconAlt}
                          fill
                          sizes="40px"
                          className="object-contain"
                        />
                      </div>
                      <h4 className="font-bold text-slate-900 group-hover:text-white text-base mb-1 transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-600 group-hover:text-slate-300 leading-relaxed transition-colors">
                        {step.description}
                      </p>
                    </div>
                  ) : (
                    <div className="hidden md:block min-h-[170px] w-full" />
                  )}

                  {/* STEP NUMBER CIRCLE & CONNECTOR LINE */}
                  <div className="relative flex flex-col items-center my-2">
                    <div className="w-10 h-10 rounded-full bg-[#008099] text-white font-bold flex items-center justify-center text-base shadow-md z-10 border-2 border-white">
                      {step.stepNumber}
                    </div>
                  </div>

                  {/* BOTTOM POSITION CARD */}
                  {step.position === "bottom" ? (
                    <div className="group w-full bg-white border border-slate-200 rounded-lg p-5 shadow-sm text-left hover:bg-[#525252] transition-colors duration-200 cursor-pointer mt-4 min-h-[170px] flex flex-col justify-start">
                      <div className="mb-2 relative w-10 h-10">
                        <Image
                          src={step.iconSrc}
                          alt={step.iconAlt}
                          fill
                          sizes="40px"
                          className="object-contain"
                        />
                      </div>
                      <h4 className="font-bold text-slate-900 group-hover:text-white text-base mb-1 transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-600 group-hover:text-slate-300 leading-relaxed transition-colors">
                        {step.description}
                      </p>
                    </div>
                  ) : (
                    <div className="hidden md:block min-h-[170px] w-full" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================= */}
        {/* SECTION 2: WE OFFER TRANSLATION...     */}
        {/* ======================================= */}
        <section className="space-y-8 pt-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#003B46] text-center sm:text-left">
            We Offer Translation Services For The Following Languages
          </h2>

          {/* Languages 4-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6">
            {languagesList.map((lang, index) => (
              <div
                key={index}
                className="flex items-center space-x-2.5 text-slate-800 text-xs sm:text-sm font-semibold hover:text-[#008099] cursor-pointer transition-colors"
              >
                <ArrowRightCircle className="w-4 h-4 text-slate-900 shrink-0" />
                <span>{lang}</span>
              </div>
            ))}
          </div>

          {/* ======================================= */}
          {/* SECTION 3: COLLAPSIBLE GUARANTEE      */}
          {/* ======================================= */}
          <div className="pt-6">
            <div className="border border-[#0b332b] rounded-sm overflow-hidden bg-white shadow-sm">
              {/* Accordion Header Bar */}
              <button
                type="button"
                onClick={() => setIsGuaranteeOpen(!isGuaranteeOpen)}
                className="w-full bg-[#0b332b] hover:bg-[#07251f] text-white px-6 py-3.5 flex items-center justify-between text-left transition-colors"
              >
                <span className="font-bold text-sm sm:text-base tracking-wide flex items-center gap-3">
                  {isGuaranteeOpen ? (
                    <Minus className="w-4 h-4 stroke-[3]" />
                  ) : (
                    <Plus className="w-4 h-4 stroke-[3]" />
                  )}
                  Translation Quality Guarantee
                </span>
              </button>

              {/* Collapsible Content */}
              {isGuaranteeOpen && (
                <div className="p-6 text-xs sm:text-sm text-slate-700 leading-relaxed bg-white border-t border-slate-100">
                  <p>
                    During the translation phase, our certified translator with
                    subject-knowledge expertise performs an accurate
                    translation. In the editing phase, our professional language
                    editor with deep subject knowledge and high language skills
                    does the editing. To guarantee 100% quality, the translation
                    and editing phases each have a{" "}
                    <a
                      href="/services/publication-support/peer-review-pre-submission"
                      className="text-[#0056B3] hover:underline font-medium"
                    >
                      peer-review
                    </a>{" "}
                    process; our multilingual reviewer verifies the translated
                    version before editing, and a senior-level editor vets the
                    editing copy before emailing you the final documents for
                    publication. These multi-step phases apply to our
                    translation services for non-academic papers as well.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
