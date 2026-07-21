"use client";

import React from "react";

// ==========================================
// TYPES & DATA
// ==========================================

interface FeatureItem {
  title: string;
  linkText?: string;
  afterLinkText?: string;
  description: string;
}

const keyFeatures: FeatureItem[] = [
  {
    title: "Expert Academic Editing",
    description:
      "Access editors with advanced degrees and subject expertise, ensuring precision in grammar, style, and content structure.",
  },
  {
    title: "Structural & Language Enhancement",
    description:
      "Improve manuscript flow, clarity, and cohesion while maintaining academic rigor and discipline-specific terminology.",
  },
  {
    title: "Quality Assurance & Compliance",
    description:
      ": Comprehensive proofreading to eliminate errors in grammar, spelling, and formatting, aligned with global ",
    linkText: "academic publishing",
    afterLinkText: " standards.",
  },
  {
    title: "Publication Readiness Support",
    description:
      "Guidance for submitting to high-impact journals, educational publishers, and academic platforms, maximizing visibility and scholarly impact.",
  },
];

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function AcademicEditorialServicesSection() {
  return (
    <div className="w-full bg-[#f8fafc] text-slate-800 font-sans py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* ==========================================
            HERO HEADER BANNER
        ========================================== */}
        <section className="relative bg-[#0d2a2a] text-white rounded-md p-8 sm:p-12 text-center border border-teal-800/40 shadow-xl overflow-hidden">
          <div className="max-w-4xl mx-auto space-y-4 relative z-10">
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Academic Editorial Services
            </h1>
            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed max-w-3xl mx-auto font-light">
              Elevate the precision, coherence, and scholarly impact of your
              research manuscripts, journal articles, dissertations, and
              academic documents with Pubrica's expert academic editorial
              support.
            </p>
          </div>
        </section>

        {/* ==========================================
            MAIN CONTENT & IMAGE GRID
        ========================================== */}
        <section className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d3b44] leading-snug">
                Empowering Your Research with Expert Academic Editorial Support
              </h2>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                From scholarly articles to educational manuscripts, our experts
                refine language, structure, and subject-specific terminology,
                making your work publication-ready, academically sound, and
                globally comprehensible.
              </p>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Pubrica offers comprehensive{" "}
                <a
                  href="#"
                  className="text-sky-600 hover:underline font-medium"
                >
                  academic editorial services
                </a>{" "}
                tailored for healthcare, life sciences, and multidisciplinary
                research. From research papers, theses, and textbooks to
                curriculum documents, our specialists ensure clarity, accuracy,
                and adherence to international academic standards. We empower
                authors and educators to communicate their ideas effectively,
                enhancing the readability and credibility of their work.
              </p>

              {/* Key Features List */}
              <div className="space-y-4 pt-2">
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  Key Features of Our Academic Editorial Service:
                </h3>

                <ul className="space-y-3 text-xs sm:text-sm text-gray-700">
                  {keyFeatures.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 leading-relaxed"
                    >
                      <span className="text-red-600 font-bold text-base leading-none select-none mt-0.5">
                        •
                      </span>
                      <div>
                        {feature.linkText ? (
                          <>
                            <span className="text-sky-600 hover:underline font-medium cursor-pointer">
                              {feature.title}
                            </span>
                            {feature.description}
                            <a
                              href="#"
                              className="text-sky-600 hover:underline font-medium"
                            >
                              {feature.linkText}
                            </a>
                            {feature.afterLinkText}
                          </>
                        ) : (
                          <>
                            <span className="text-sky-600 hover:underline font-medium cursor-pointer">
                              {feature.title}:
                            </span>{" "}
                            {feature.description}
                          </>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button className="px-6 py-2.5 bg-[#b30000] hover:bg-[#8e0000] text-white font-bold text-xs sm:text-sm rounded-full transition-all duration-200 shadow-md">
                  Get a Free Quote
                </button>
                <button className="px-6 py-2.5 bg-[#b30000] hover:bg-[#8e0000] text-white font-bold text-xs sm:text-sm rounded-full transition-all duration-200 shadow-md">
                  View Brochure
                </button>
              </div>
            </div>

            {/* Right Column: Image with Framing Backplate */}
            <div className="lg:col-span-5 relative pt-4 pl-4 sm:pt-6 sm:pl-6">
              {/* Background Accent Frame */}
              <div className="absolute inset-0 bg-[#0d2a2a] rounded-2xl -z-10 transform translate-x-2 translate-y-2 sm:translate-x-4 sm:translate-y-4" />

              {/* Foreground Image Container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-white shadow-xl bg-slate-200 aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Academic Editorial Team collaborating over a research manuscript"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
