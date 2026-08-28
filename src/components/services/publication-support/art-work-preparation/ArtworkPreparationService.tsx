"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ArtworkPreparationService() {
  return (
    <div className="w-full bg-white font-sans text-gray-800 antialiased">
      {/* ============================================================ */}
      {/* HERO SECTION                                                 */}
      {/* ============================================================ */}
      <section className="bg-gradient-to-b from-[#182a27] via-[#213a36] to-[#2a4a45] text-white py-7 px-4 sm:px-6 lg:px-8 text-center">
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-7">
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
              <Link
                href="/order-now"
                className="bg-[#b30000] hover:bg-[#900000] !text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-md transition-colors shadow-2xs cursor-pointer inline-flex items-center justify-center select-none"
              >
                Upload Your Manuscript
              </Link>
              <Link
                href="/brochures/artwork-preparation.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#b30000] hover:bg-[#900000] !text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-md transition-colors shadow-2xs cursor-pointer inline-flex items-center justify-center select-none"
              >
                View Brochure
              </Link>
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

        {/* ============================================================ */}
        {/* WHAT WE DO SECTION                                           */}
        {/* ============================================================ */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0c3830] mb-4">
            What We do
          </h3>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-6 max-w-4xl">
            At Pubrica, we specialize in preparing artwork that is scientifically
            accurate and compliant with journal specifications to help improve the
            visual impact of your research. Our service covers:
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
                  We format your graphs, charts, diagrams, and illustrations to
                  meet specific journal requirements (resolution, size, colour
                  mode, font styles, and file formats.) This is especially
                  useful for{" "}
                  <Link href="/services/physician-writing-services/original-research-article" className="text-blue-600 hover:underline">
                    Original Research Article
                  </Link>
                  ,{" "}
                  <Link href="/services/research-services/systematic-review" className="text-blue-600 hover:underline">
                    Systematic Review
                  </Link>
                  , and{" "}
                  <Link href="/services/physician-writing-services/case-report" className="text-blue-600 hover:underline">
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
                  Converting hand-drawn sketches, low-resolution images, or raw
                  data into high-resolution, editable vectors for publication
                  across any manuscript type.
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
                  Checking that all labels, legends, scales, and annotations are
                  clear, consistent and in accordance with the content of your
                  manuscript. This services complements our{" "}
                  <Link href="/services/editing-and-translation/manuscript-editing" className="text-blue-600 hover:underline">
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
                  Creating brief visual summaries to illustrate key research
                  findings or complex data, usually requested in addition to{" "}
                  <Link href="/services/research-impact/graphical-abstract" className="text-blue-600 hover:underline">
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
                  Providing iterative versions based on your feedback to make sure
                  the final version is up to both your expectations and journal
                  requirements.
                </p>
              </div>
            </div>

            {/* Right Column: Graphic Collage */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md h-72 sm:h-80">
                {/* Background SVG Circle Accent */}
                <div className="absolute right-4 top-2 w-56 h-56 rounded-full bg-slate-100 -z-10 opacity-70" />

                {/* Top Left Designer Image */}
                <div className="absolute top-0 left-4 w-3/5 h-3/5 rounded-2xl overflow-hidden shadow-md">
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
      </section>
    </div>
  );
}