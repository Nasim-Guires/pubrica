"use client";

import React from "react";
import Image from "next/image";

export const ThesisEditingHeroAndOverview: React.FC = () => {
  const keyPoints = [
    "Correction of sentence construction, grammar, spelling, and punctuation",
    "Ensure your terminology is consistent & accurate in your subject area",
    "Have a high accuracy rate with 2 levels of editor checks",
    "Top quality delivered by 3,163+ native English speakers in 1640+ subjects",
  ];

  return (
    <div className="w-full bg-[#f8fafc] text-slate-800">
      {/* ------------------------------------------------------------- */}
      {/* 1. TOP BANNER / HERO SECTION                                  */}
      {/* ------------------------------------------------------------- */}
      <section className="w-full bg-[#0d2222] text-white py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto border border-slate-400/50 rounded-lg p-6 sm:p-8 text-center bg-[#0d2222]/80 backdrop-blur-sm">
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight mb-4">
            Thesis Editing &amp; Proofreading Service
          </h1>
          <p className="text-xs sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Crafting a compelling and meticulously written thesis stands as a
            crucial milestone for Master’s and PhD students, particularly for
            eventual thesis publication. Yet, navigating the immense scope of
            research, meeting deadlines, and conducting thorough proofreading
            across numerous drafts can pose significant challenges.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. OVERVIEW & INTRO SECTION                                    */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0d3b36] leading-tight">
              Refine Your Research With Pubrica’s Thesis Editing Service
            </h2>

            <p className="text-sm sm:text-base font-semibold text-slate-700">
              Struggling to draft your thesis with a solid logical foundation
              and clarity? Our team of experts is standing by to help you
              succeed!
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              A well-crafted and engaging thesis is one of the most important
              elements for Master’s and PhD students to submit in their thesis
              publishing. However, dealing with the magnitude of research, the
              constraints of deadlines, and extensive proofreading of multiple
              drafts can be challenging. Here is where we begin to play a role.
              Pubrica also provides PhD thesis editing services for thesis
              writing! Our thesis editors have both subject-matter expertise and
              great language proficiency to make sure that your thesis
              manuscript meets all academic requirements and is in flawless
              language. Get your thesis edited by{" "}
              <a
                href="#subject-matter-experts"
                className="text-cyan-600 hover:underline font-medium"
              >
                subject matter experts
              </a>{" "}
              to ensure that it meets the highest academic standards with
              flawless academic language.
            </p>

            {/* Key Bullet Points */}
            <ul className="space-y-3 pt-2">
              {keyPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700"
                >
                  <span className="w-2 h-2 rounded-full bg-red-600 shrink-0 mt-1.5" />
                  <span className="leading-snug">{point}</span>
                </li>
              ))}
            </ul>

            {/* Call to Action Button */}
            <div className="pt-4">
              <a
                href="#get-quote"
                className="inline-block bg-[#b80000] hover:bg-[#960000] text-white font-bold px-8 py-3 rounded-full text-xs sm:text-sm shadow-md transition-colors"
              >
                Get a Free Quote
              </a>
            </div>
          </div>

          {/* Right Hero Graphic Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              {/* Outer Decorative Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-emerald-100 scale-100" />
              <div className="absolute inset-4 rounded-full border-2 border-emerald-200/60 scale-95" />

              {/* Main Circular Image Holder */}
              <div className="relative w-4/5 h-4/5 rounded-full overflow-hidden bg-emerald-700 shadow-xl border-4 border-white">
                <Image
                  src="/images/services/thesis-editing/thesis-editing-student.jpg"
                  alt="Student working on thesis editing"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-center"
                />
              </div>

              {/* Document Sample Preview Overlay Box */}
              <div className="absolute top-6 -right-2 sm:right-0 w-44 sm:w-52 h-28 bg-white rounded-lg shadow-lg border border-slate-200 p-1.5 overflow-hidden transform rotate-2">
                <div className="relative w-full h-full bg-slate-50 rounded border border-slate-100 overflow-hidden">
                  <Image
                    src="/images/services/thesis-editing/track-changes-preview.png"
                    alt="Thesis Track Changes Document Preview"
                    fill
                    sizes="200px"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Floating Feature Tags Badge */}
              <div className="absolute bottom-6 left-2 sm:left-0 bg-[#dbeafe]/90 backdrop-blur-sm border border-blue-200 rounded-lg p-2.5 shadow-md text-[11px] font-semibold text-slate-800 space-y-1">
                <div className="flex items-center space-x-1.5 text-emerald-700">
                  <span>✓</span>
                  <span>Stress-free</span>
                </div>
                <div className="flex items-center space-x-1.5 text-emerald-700">
                  <span>✓</span>
                  <span>Razor-sharp Edits</span>
                </div>
                <div className="flex items-center space-x-1.5 text-emerald-700">
                  <span>✓</span>
                  <span>Expert Guidance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
