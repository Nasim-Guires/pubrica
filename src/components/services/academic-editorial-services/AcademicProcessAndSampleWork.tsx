"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowDown,
  ArrowLeft,
  ArrowRightCircle,
} from "lucide-react";

// ==========================================
// TYPES & DATA
// ==========================================

interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    stepNumber: 1,
    title: "Submit Your Manuscript",
    description:
      "You begin by sharing your manuscript, reference files, journal guidelines, and any special instructions. We accept all academic formats, research articles, theses, dissertations, books, review papers, educational content, and clinical documents.",
  },
  {
    stepNumber: 2,
    title: "Editorial Requirement Assessment",
    description:
      "Our project manager evaluates your document to determine the appropriate level of editing, copyediting, developmental editing, substantive editing, language polishing, or formatting. We also assign domain-specific editors with advanced qualifications (PhD/MD).",
  },
  {
    stepNumber: 3,
    title: "Assignment to Expert Editor",
    description:
      "We match your work with an editor who has expertise in your field and content type. Our editors are highly experienced academics, researchers, and education specialists.",
  },
  {
    stepNumber: 4,
    title: "Editorial Review",
    description:
      "The editor performs comprehensive checks for language clarity, structure, logical flow, terminology accuracy, and pedagogy alignment. Suggestions for improvement are incorporated, and queries are clarified with the client if needed.",
  },
  {
    stepNumber: 5,
    title: "Proofreading & Quality Check",
    description:
      "A secondary editor conducts meticulous proofreading to ensure error-free and polished content. All corrections are tracked, and the final manuscript is refined to meet academic standards.",
  },
  {
    stepNumber: 6,
    title: "Delivery & Feedback",
    description:
      "The edited manuscript is delivered along with a summary of changes, comments, and suggestions. Clients are encouraged to review and provide feedback.",
  },
  {
    stepNumber: 7,
    title: "Finalization",
    description:
      "If required, revisions are made based on client feedback to ensure complete satisfaction. Your manuscript is now ready for submission, publication, or academic evaluation.",
  },
];

const documentTypes = [
  "Journal manuscripts",
  "Thesis/dissertations",
  "Review papers",
  "Conference papers",
  "Case studies",
  "Grant proposals",
  "Research proposals",
  "Book chapters",
  "White papers",
];

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function AcademicProcessAndSampleWork() {
  return (
    <div className="w-full bg-[#f8fafc] text-slate-800 font-sans pb-16">
      {/* ==========================================
          1. TOP HIGHLIGHT BANNER
      ========================================== */}
      <section className="bg-[#052e16] text-white py-6 px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-2">
          <h2 className="text-lg sm:text-xl font-bold tracking-wide">
            Academic Editorial Support for Researchers & Scholars
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100 font-light leading-relaxed">
            Strengthen the clarity, coherence, and scholarly impact of your
            research with Pubrica’s professional{" "}
            <Link href="/services/academic-editorial-services" className="text-sky-400 hover:underline">
              academic editorial services
            </Link>
            . We enhance language, structure, academic tone, and compliance to
            help you publish with confidence.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        {/* ==========================================
            2. STEP-BY-STEP PROCESS
        ========================================== */}
        <section className="space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d3b44]">
              How Our Academic Editorial Service Works
            </h2>
            <h3 className="text-lg font-medium text-slate-700">
              Our Step-by-Step Process
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 max-w-4xl mx-auto leading-relaxed pt-1">
              Pubrica follows a structured, transparent, and quality-driven
              editorial workflow designed to simplify your publication journey.
              Our process ensures every manuscript receives subject-expert
              attention, rigorous quality checks, and end-to-end editorial
              support aligned with global academic publishing standards. Here’s
              how our end-to-end editorial process works:
            </p>
          </div>

          {/* Workflow Cards Diagram */}
          <div className="space-y-6">
            {/* ROW 1: Steps 1 -> 2 -> 3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch relative">
              {/* Step 1 */}
              <div className="bg-white border border-teal-900/30 rounded-xl p-6 text-center shadow-sm relative flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-[#0d2a2a] text-white font-bold rounded-full flex items-center justify-center mx-auto text-sm">
                    1
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                    {processSteps[0].title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {processSteps[0].description}
                  </p>
                </div>
              </div>

              {/* Arrow 1 -> 2 (Desktop Right) */}
              <div className="hidden md:flex absolute top-1/2 left-[31.5%] -translate-y-1/2 z-10 text-slate-700">
                <ArrowRight className="w-5 h-5" />
              </div>

              {/* Step 2 */}
              <div className="bg-white border border-teal-900/30 rounded-xl p-6 text-center shadow-sm relative flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-[#0d2a2a] text-white font-bold rounded-full flex items-center justify-center mx-auto text-sm">
                    2
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                    {processSteps[1].title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {processSteps[1].description}
                  </p>
                </div>
              </div>

              {/* Arrow 2 -> 3 (Desktop Right) */}
              <div className="hidden md:flex absolute top-1/2 left-[65%] -translate-y-1/2 z-10 text-slate-700">
                <ArrowRight className="w-5 h-5" />
              </div>

              {/* Step 3 */}
              <div className="bg-white border border-teal-900/30 rounded-xl p-6 text-center shadow-sm relative flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-[#0d2a2a] text-white font-bold rounded-full flex items-center justify-center mx-auto text-sm">
                    3
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                    {processSteps[2].title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {processSteps[2].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Downward Connector Arrow from Step 3 to Step 4 */}
            <div className="flex justify-end pr-[15%] text-slate-700">
              <ArrowDown className="w-5 h-5" />
            </div>

            {/* ROW 2: Steps 6 <- 5 <- 4 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch relative">
              {/* Step 6 */}
              <div className="bg-white border border-teal-900/30 rounded-xl p-6 text-center shadow-sm relative flex flex-col justify-between md:order-1">
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-[#0d2a2a] text-white font-bold rounded-full flex items-center justify-center mx-auto text-sm">
                    6
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                    {processSteps[5].title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {processSteps[5].description}
                  </p>
                </div>
              </div>

              {/* Arrow 5 <- 6 (Desktop Left) */}
              <div className="hidden md:flex absolute top-1/2 left-[31.5%] -translate-y-1/2 z-10 text-slate-700">
                <ArrowLeft className="w-5 h-5" />
              </div>

              {/* Step 5 */}
              <div className="bg-white border border-teal-900/30 rounded-xl p-6 text-center shadow-sm relative flex flex-col justify-between md:order-2">
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-[#0d2a2a] text-white font-bold rounded-full flex items-center justify-center mx-auto text-sm">
                    5
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                    {processSteps[4].title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {processSteps[4].description}
                  </p>
                </div>
              </div>

              {/* Arrow 4 <- 5 (Desktop Left) */}
              <div className="hidden md:flex absolute top-1/2 left-[65%] -translate-y-1/2 z-10 text-slate-700">
                <ArrowLeft className="w-5 h-5" />
              </div>

              {/* Step 4 */}
              <div className="bg-white border border-teal-900/30 rounded-xl p-6 text-center shadow-sm relative flex flex-col justify-between md:order-3">
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-[#0d2a2a] text-white font-bold rounded-full flex items-center justify-center mx-auto text-sm">
                    4
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                    {processSteps[3].title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {processSteps[3].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Downward Connector Arrow from Step 6 to Step 7 */}
            <div className="flex justify-start pl-[15%] text-slate-700">
              <ArrowDown className="w-5 h-5" />
            </div>

            {/* ROW 3: Step 7 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-teal-900/30 rounded-xl p-6 text-center shadow-sm relative flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-[#0d2a2a] text-white font-bold rounded-full flex items-center justify-center mx-auto text-sm">
                    7
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                    {processSteps[6].title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {processSteps[6].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            3. DOCUMENT TYPES WE EDIT
        ========================================== */}
        <section className="space-y-6 pt-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d3b44]">
            Document Types We Edit
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6">
            {documentTypes.map((docType, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <ArrowRightCircle className="w-4 h-4 text-slate-800 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  {docType}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================
            4. SAMPLE WORK & REPORT CTA CARD
        ========================================== */}
        <section className="bg-[#f0fdf4] rounded-xl p-6 sm:p-10 border border-emerald-100 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Image Column */}
            <div className="lg:col-span-5">
              <div className="rounded-md overflow-hidden aspect-[4/3] bg-slate-200 shadow-sm relative flex items-center justify-center">
                <Image
                  src="/images/academic-editorial-services/Academic-Editorial-Services-Sample-Work.png"
                  alt="Academic Editorial Services sample work"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Top Block */}
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Academic Editorial Services Sample Work
                </h3>
                <Link
                  href="/insights/sample-work"
                  className="inline-block px-8 py-2.5 bg-black hover:bg-slate-800 text-white font-medium text-xs sm:text-sm rounded-full transition-colors shadow-sm text-center"
                >
                  Discover More
                </Link>
              </div>

              {/* Bottom Block */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Download the full Report Now
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-2xl">
                  Explore our academic editorial sample work, meticulously
                  refined to meet rigorous scholarly standards,
                  discipline-specific guidelines, and top-tier journal
                  expectations. We deliver accurate, polished, and
                  publication-ready academic content that strengthens clarity,
                  credibility, and research impact.
                </p>
                <div className="pt-2">
                  <Link
                    href="/insights/sample-work"
                    className="inline-block px-8 py-2.5 bg-black hover:bg-slate-800 text-white font-medium text-xs sm:text-sm rounded-full transition-colors shadow-sm text-center"
                  >
                    Discover More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
