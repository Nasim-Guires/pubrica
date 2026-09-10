"use client";

import React from "react";
import Image from "next/image";
import HeroBanner from "@/components/common/HeroBanner";
import Link from "next/link";

export default function ArtworkPreparationService() {
  return (
    <div className="w-full bg-white font-sans text-gray-800 antialiased">
      {/* ============================================================ */}
      {/* HERO SECTION                                                 */}
      {/* ============================================================ */}
      <HeroBanner
        title="Artwork Preparation Service: High-quality, Publication-Ready Images"
        description="Navigating diverse journal artwork preparation is complex; Pubrica's specialists expertly prepare and format figures to meet all technical and aesthetic requirements."
        headingAs="h1"
      />

      {/* ============================================================ */}
      {/* MAIN CONTENT SECTION                                         */}
      {/* ============================================================ */}
      <section className="pt-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
              Professional Artwork Preparation Service: Ensure that Your Scientific Figures and Images are Prepared to Journal Specifications with Technical Accuracy and Visual Clarity
            </h2>

            <div className="flow-root">
              {/* Rectangular Image (Not Rounded, matching previous style) */}
              <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                <div className="relative w-full max-w-md h-72 sm:h-80 lg:w-[380px] lg:h-[300px]">
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

              <div className="space-y-5 text-slate-700">
                <p className="text-base leading-relaxed font-semibold">
                  Enhance the visual impact of your research with professional artwork for scientific publication and presentation
                </p>

                <p className="text-base leading-relaxed">
                  All peer-reviewed journals have strict technical standards for artwork in terms of resolution, file format, colour space, and typography. For many research scholars, interpreting these guidelines can be time-consuming and challenging to master. Often, researchers won&apos;t have enough time to learn sophisticated design software or to redo figures during the final submission process. This is where Pubrica&apos;s artwork preparation experts step in. Our team is trained to translate research figures, illustrations, and images into compliant technical standards of top journals throughout all research disciplines.
                </p>

                <p className="text-base leading-relaxed">
                  With Pubrica&apos;s artwork preparation service, you will be able to submit your manuscript with confidence, knowing that every figure meets the journal&apos;s formatting requirements with expert visual precision and scientific accuracy.
                </p>

                <h3 className="font-bold text-slate-900 text-base">
                  Our Service Includes:
                </h3>

                {/* Bullet List */}
                <div className="pt-2 space-y-4">
                  <div className="space-y-4 pl-4">
                    {[
                      "High-quality article artwork formatting by professionals",
                      "Following journal specific submission guidelines",
                      "Improved figure quality, colour, and size",
                      "Expert knowledge of the detailed formatting guidelines required by your target journal",
                      "Font size, font type, spacing, and file dimension optimization",
                      "Using industry-standard programs to ensure technical formatting requirements are met",
                      "Free reformats or edits to the same journal for 60 days.",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <span className="text-red-600 font-bold shrink-0">→</span>
                        <p className="text-base leading-relaxed text-gray-800">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-base leading-relaxed">
                  Pubrica ensures that your artwork meets the technical guidelines of your target journal to avoid rejections for formatting issues. Our experts can simplify complex graphics into figures for easy submission, allowing seamless convergence from research data to professionally-prepared visuals.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/order-now/"
                    className="bg-red-600 hover:bg-white hover:text-black text-white text-sm font-semibold px-6 py-2.5 rounded-md transition-colors shadow-2xs cursor-pointer inline-flex items-center justify-center select-none text-center whitespace-nowrap"
                  >
                    Upload Your Manuscript
                  </Link>
                  <Link
                    href="/uploads/Artwork-Preparation-Matters.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 hover:bg-white hover:text-black text-white text-sm font-semibold px-6 py-2.5 rounded-md transition-colors shadow-2xs cursor-pointer inline-flex items-center justify-center select-none text-center whitespace-nowrap"
                  >
                    View Brochure
                  </Link>
                </div>
              </div>
            </div>

            {/* ============================================================ */}
            {/* WHAT WE DO SECTION                                           */}
            {/* ============================================================ */}
            <div className="mt-16 pt-8 border-t border-gray-100">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0c3830] mb-4">
                What We do
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-6 max-w-4xl">
                At Pubrica, we specialize in preparing artwork that is scientifically accurate and compliant with journal specifications to help improve the visual impact of your research. Our service covers:
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Column: Bullet List */}
                <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
                  <div className="flex items-start">
                    <span className="text-[#dc2626] font-bold mr-2.5 text-base leading-none mt-0.5">
                      •
                    </span>
                    <p>
                      <strong className="text-gray-900 font-semibold">
                        Figure Formatting:
                      </strong>{" "}
                      We format your graphs, charts, diagrams, and illustrations to meet specific journal requirements (resolution, size, colour mode, font styles, and file formats.) This is especially useful for{" "}
                      <Link href="/services/physician-writing-services/original-research-article" className="text-blue-600 no-underline hover:no-underline">
                        Original Research Article
                      </Link>
                      ,{" "}
                      <Link href="/services/research-services/systematic-review" className="text-blue-600 no-underline hover:no-underline">
                        Systematic Review
                      </Link>
                      , and{" "}
                      <Link href="/services/physician-writing-services/case-report" className="text-blue-600 no-underline hover:no-underline">
                        Case Report
                      </Link>{" "}
                      Writing submissions.
                    </p>
                  </div>

                  <div className="flex items-start">
                    <span className="text-[#dc2626] font-bold mr-2.5 text-base leading-none mt-0.5">
                      •
                    </span>
                    <p>
                      <strong className="text-gray-900 font-semibold">
                        Redrawing & Vectorization:
                      </strong>{" "}
                      Converting hand-drawn sketches, low-resolution images, or raw data into high-resolution, editable vectors for publication across any manuscript type.
                    </p>
                  </div>

                  <div className="flex items-start">
                    <span className="text-[#dc2626] font-bold mr-2.5 text-base leading-none mt-0.5">
                      •
                    </span>
                    <p>
                      <strong className="text-gray-900 font-semibold">
                        Technical Editing & Quality Checks:
                      </strong>{" "}
                      Checking that all labels, legends, scales, and annotations are clear, consistent and in accordance with the content of your manuscript. This services complements our{" "}
                      <Link href="/services/editing-and-translation/manuscript-editing" className="text-blue-600 no-underline hover:no-underline">
                        manuscript editing services
                      </Link>{" "}
                      in terms of figure accuracy and clarity.
                    </p>
                  </div>

                  <div className="flex items-start">
                    <span className="text-[#dc2626] font-bold mr-2.5 text-base leading-none mt-0.5">
                      •
                    </span>
                    <p>
                      <strong className="text-gray-900 font-semibold">
                        Graphical Abstracts & Infographics:
                      </strong>{" "}
                      Creating brief visual summaries to illustrate key research findings or complex data, usually requested in addition to{" "}
                      <Link href="/services/research-impact/graphical-abstract" className="text-blue-600 no-underline hover:no-underline">
                        graphical abstract
                      </Link>{" "}
                      creation.
                    </p>
                  </div>

                  <div className="flex items-start">
                    <span className="text-[#dc2626] font-bold mr-2.5 text-base leading-none mt-0.5">
                      •
                    </span>
                    <p>
                      <strong className="text-gray-900 font-semibold">
                        Multiple Revision Support:
                      </strong>{" "}
                      Providing iterative versions based on your feedback to make sure the final version is up to both your expectations and journal requirements.
                    </p>
                  </div>
                </div>

                {/* Right Column: Graphic Collage */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative w-full max-w-md h-72 sm:h-80 flex justify-center items-center">
                    {/* Background SVG Circle Accent */}
                    <div className="absolute w-56 h-56 rounded-full bg-slate-100 -z-10 opacity-70" />

                    {/* Designer Image (Not Rounded) */}
                    <div className="w-3/5 h-3/5 flex items-center justify-center">
                      <Image
                        src="/images/publication-support/art-work-preparation/Artwork-Preparation-what-we-do.png"
                        alt="Designer formatting figures on computer"
                        width={400}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}