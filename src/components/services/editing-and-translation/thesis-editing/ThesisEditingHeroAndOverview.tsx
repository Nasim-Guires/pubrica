"use client";

import React from "react";
import Image from "next/image";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import HeroBanner from "@/components/common/HeroBanner";

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
      <HeroBanner
        title="Thesis Editing & Proofreading Service"
        description="Crafting a compelling and meticulously written thesis stands as a crucial milestone for Master’s and PhD students, particularly for eventual thesis publication. Yet, navigating the immense scope of research, meeting deadlines, and conducting thorough proofreading across numerous drafts can pose significant challenges."
        headingAs="h1"
      />

      {/* ------------------------------------------------------------- */}
      {/* 2. OVERVIEW & INTRO SECTION                                    */}
      {/* ------------------------------------------------------------- */}
      <section className="pt-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
              Refine Your Research With Pubrica’s Thesis Editing Service
            </h2>

            <div className="flow-root">
              {/* Right Hero Graphic Column (Retaining exact original design: rounded hero circle, decorative rings, overlay box, floating badges) */}
              <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                  {/* Outer Decorative Rings */}
                  <div className="absolute inset-0 rounded-full border-2 border-emerald-100 scale-100" />
                  <div className="absolute inset-4 rounded-full border-2 border-emerald-200/60 scale-95" />

                  {/* Main Circular Image Holder */}
                  <div className="relative w-4/5 h-4/5 rounded-full overflow-hidden bg-emerald-700 shadow-xl border-4 border-white">
                    <Image
                      src="/images/editing-and-translation/thesis-editing/Refine-Your-Research-With-Pubricas-Thesis-Editing-Service.webp"
                      alt="Refine your research with Pubrica's Thesis Editing Service"
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover object-center"
                      priority
                    />
                  </div>

                  {/* Document Sample Preview Overlay Box */}
                  <div className="absolute top-6 -right-2 sm:right-0 w-44 sm:w-52 h-28 bg-white rounded-lg shadow-lg border border-slate-200 p-1.5 overflow-hidden transform rotate-2">
                    <div className="relative w-full h-full bg-slate-50 rounded border border-slate-100 overflow-hidden">
                      <Image
                        src="/images/editing-and-translation/thesis-editing/Track-revisions.png"
                        alt="Thesis track revisions preview"
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

              <div className="space-y-5 text-slate-700">
                <p className="text-base font-semibold text-slate-700 leading-relaxed">
                  Struggling to draft your thesis with a solid logical foundation and clarity? Our team of experts is standing by to help you succeed!
                </p>

                <p className="text-base leading-relaxed">
                  A well-crafted and engaging thesis is one of the most important elements for Master’s and PhD students to submit in their thesis publishing. However, dealing with the magnitude of research, the constraints of deadlines, and extensive proofreading of multiple drafts can be challenging. Here is where we begin to play a role. Pubrica also provides PhD thesis editing services for thesis writing! Our thesis editors have both subject-matter expertise and great language proficiency to make sure that your thesis manuscript meets all academic requirements and is in flawless language. Get your thesis edited by{" "}
                  <a
                    href="/subject-matter-experts"
                    className="text-blue-600 font-medium no-underline hover:no-underline"
                  >
                    subject matter experts
                  </a>{" "}
                  to ensure that it meets the highest academic standards with flawless academic language.
                </p>

                {/* Key Bullet Points */}
                <div className="pt-2 space-y-4">
                  <div className="space-y-4 pl-4">
                    {keyPoints.map((point, index) => (
                      <div key={index} className="flex items-start gap-2.5">
                        <span className="text-red-600 font-bold shrink-0">→</span>
                        <p className="text-base leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call to Action Button */}
                <div className="pt-2">
                  <GetFreeQuoteButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
