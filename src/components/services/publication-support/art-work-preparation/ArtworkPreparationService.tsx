"use client";

import React from "react";
import Image from "next/image";

export default function ArtworkPreparationService() {
  return (
    <div className="w-full bg-white font-sans text-gray-800 antialiased">
      {/* ============================================================ */}
      {/* HERO SECTION                                                 */}
      {/* ============================================================ */}
      <section className="bg-gradient-to-b from-[#182a27] via-[#213a36] to-[#2a4a45] text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto border border-gray-300/60 p-8 sm:p-12 rounded-sm shadow-xs">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-6 text-white">
            Artwork Preparation Service: High-quality, Publication-Ready Images
          </h1>
          <p className="text-xs sm:text-sm lg:text-base font-normal text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Navigating diverse journal artwork preparation is complex;
            Pubrica&apos;s specialists expertly prepare and format figures to
            meet all technical and aesthetic requirements.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* MAIN CONTENT SECTION                                         */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Title & Subheading */}
        <div className="max-w-4xl mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0c3830] leading-snug mb-3">
            Professional Artwork Preparation Service: Ensure that Your
            Scientific Figures and Images are Prepared to Journal Specifications
            with Technical Accuracy and Visual Clarity
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 font-medium">
            Enhance the visual impact of your research with professional artwork
            for scientific publication and presentation
          </p>
        </div>

        {/* Content Body Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-5 text-xs sm:text-sm text-gray-700 leading-relaxed">
            <p>
              All peer-reviewed journals have strict technical standards for
              artwork in terms of resolution, file format, colour space, and
              typography. For many research scholars, interpreting these
              guidelines can be time-consuming and challenging to master. Often,
              researchers won&apos;t have enough time to learn sophisticated
              design software or to redo figures during the final submission
              process. This is where Pubrica&apos;s artwork preparation experts
              step in. Our team is trained to translate research figures,
              illustrations, and images into compliant technical standards of
              top journals throughout all research disciplines.
            </p>

            <div>
              <p className="mb-3">
                With Pubrica&apos;s artwork preparation service, you will be
                able to submit your manuscript with confidence, knowing that
                every figure meets the journal&apos;s formatting requirements
                with expert visual precision and scientific accuracy.
                <br />
                <span className="font-semibold text-gray-900 block mt-2">
                  Our Service Includes:
                </span>
              </p>

              {/* Bulleted List with Red Bullet Points */}
              <ul className="space-y-2 pl-1">
                {[
                  "High-quality article artwork formatting by professionals",
                  "Following journal specific submission guidelines",
                  "Improved figure quality, colour, and size",
                  "Expert knowledge of the detailed formatting guidelines required by your target journal",
                  "Font size, font type, spacing, and file dimension optimization",
                  "Using industry-standard programs to ensure technical formatting requirements are met",
                  "Free reformats or edits to the same journal for 60 days.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#dc2626] font-bold mr-2 text-base leading-none">
                      •
                    </span>
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="pt-2">
              Pubrica ensures that your artwork meets the technical guidelines
              of your target journal to avoid rejections for formatting issues.
              Our experts can simplify complex graphics into figures for easy
              submission, allowing seamless convergence from research data to
              professionally-prepared visuals.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                type="button"
                className="bg-[#b91c1c] hover:bg-[#991b1b] text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full transition-colors shadow-2xs cursor-pointer"
              >
                Upload Your Manuscript
              </button>
              <button
                type="button"
                className="bg-[#b91c1c] hover:bg-[#991b1b] text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full transition-colors shadow-2xs cursor-pointer"
              >
                View Brochure
              </button>
            </div>
          </div>

          {/* Right Image Graphic */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md h-72 sm:h-80 lg:h-96 rounded-xl overflow-hidden">
              <Image
                src="/images/publication-support/art-work-preparation/Artwork-Preparation.webp"
                alt="Artwork Preparation Service Illustration"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
