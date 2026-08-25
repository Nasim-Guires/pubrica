"use client";

import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import Image from "next/image";
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

const serviceTypes = [
  {
    title: "Copy Editing",
    iconSrc: "/images/academic-editorial-services/Copy-Editing.png",
    description:
      "Our expert editors refine grammar, punctuation, spelling, and style while preserving your academic voice. We ensure consistency, clarity, and compliance with journal or institutional requirements, making your manuscript publication-ready.",
  },
  {
    title: "Development Editing",
    iconSrc: "/images/academic-editorial-services/Development-Editing.png",
    description:
      "Pubrica’s development editing focuses on the intellectual structure of your manuscript. We help organize ideas, strengthen arguments, and enhance logical flow, ensuring your research communicates effectively to your target audience.",
  },
  {
    title: "Revisioning and Localisation",
    iconSrc: "/images/academic-editorial-services/Revisioning-and-Localisation.png",
    description:
      "Tailored for global accessibility, this service adapts your manuscript linguistically and culturally. Our team ensures your research resonates with international audiences, meeting diverse academic standards.",
  },
  {
    title: "Permission and Metadata Support",
    iconSrc: "/images/academic-editorial-services/Permission-and-Metadata-Support.png",
    description:
      "Navigating copyright, references, and metadata can be complex. Pubrica guides you through permissions, proper citation, indexing, and metadata management, safeguarding your work’s compliance and discoverability.",
  },
  {
    title: "Visual and Accessibility Editing",
    iconSrc: "/images/academic-editorial-services/Visual-and-Accessibility-Editing.png",
    description:
      "We optimize tables, figures, and graphical content while ensuring accessibility for all readers, including those using assistive technologies. Our editors enhance visual clarity and adhere to accessibility guidelines.",
  },
  {
    title: "Forensic and Quality Audit",
    iconSrc: "/images/academic-editorial-services/Forensic-and-Quality-Audit.png",
    description:
      "Pubrica conducts in-depth audits of manuscripts to detect inconsistencies, data errors, and formatting issues. Our quality checks ensure your manuscript meets the highest standards for academic rigor and integrity.",
  },
];

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
    <div className="w-full bg-[#f8fafc] text-slate-800 font-sans">
      {/* ==========================================
          FULL-WIDTH HERO BANNER (Attached to Navbar)
      ========================================== */}
      <section className="relative w-full bg-[#0d2a2a] text-white py-12 sm:py-16 text-center border-b border-teal-800/40 shadow-xl overflow-hidden mb-12">
        <div className="max-w-4xl mx-auto space-y-4 relative z-10 px-4">
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
          MAIN CONTENT CONTAINER
      ========================================== */}
      <div className="max-w-6xl mx-auto space-y-16 px-4 sm:px-6 lg:px-8 pb-16">
        {/* MAIN CONTENT & IMAGE GRID */}
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
                  href="/services/academic-editorial-services"
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
                              href="/services/publication-support"
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
                <GetFreeQuoteButton />
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
                <Image
                  src="/images/academic-editorial-services/Empowering-Your-Research-with-Expert-Academic-Editorial-Support.webp"
                  alt="Academic Editorial Team collaborating over a research manuscript"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            SERVICES GRID SECTION
        ========================================== */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d3b44]">
              Our Services
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-4xl leading-relaxed">
              At Pubrica, we help researchers, scholars, and institutions elevate their academic manuscripts to meet international publication standards. Our comprehensive editorial services ensure your work is clear, precise, and impactful, enhancing readability, credibility, and global reach. Our Services Include:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {serviceTypes.map((service) => (
              <div
                key={service.title}
                className="bg-white border border-slate-200/80 rounded-xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 shrink-0">
                      <Image
                        src={service.iconSrc}
                        alt={service.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-[#0d3b44]">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}