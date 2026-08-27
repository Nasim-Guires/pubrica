"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightCircle } from "lucide-react";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

const featureTags = [
  "Consistency",
  "Spelling",
  "Punctuation",
  "Grammar",
  "Jargon",
  "Coherence",
];

export default function ProofreadingHeroSection() {
  return (
    <div className="w-full bg-[#f8fafc] text-slate-800 font-sans">
      {/* ======================================= */}
      {/* 1. TOP HERO BANNER                      */}
      {/* ======================================= */}
      <section className="w-full bg-[#1b2b2d] text-white py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto border border-slate-400/50 p-8 sm:p-10 text-center space-y-4 rounded-xs">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Proofreading
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Our team guarantees impeccable grammar, punctuation, and formatting,
            ensuring that all your documents are flawless and ready for any type
            of submission.
          </p>
        </div>
      </section>

      {/* ======================================= */}
      {/* 2. OVERVIEW & PRICING CARD SECTION     */}
      {/* ======================================= */}
      <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Description & Bullet points */}
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#003B46] leading-snug">
              Precision Proofreading Services for Researchers and Academics
            </h2>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Pubrica specialises in providing high-quality proofreading
              services, including English proofreading service, scientific
              proofreading, and professional proofreading services, specifically
              designed for the healthcare and life sciences fields, as well as
              multidisciplinary scientific writing. We ensure linguistic
              quality, accuracy, and consistency in various documents, including
              research paper proofreading, theses, clinical, and business
              reports.
            </p>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Our online proofreading services enable authors to publish their
              work by improving language quality and correcting errors.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3 pt-1 text-xs sm:text-sm text-slate-800 leading-relaxed">
              <li className="flex items-start space-x-2">
                <span className="text-red-600 font-bold text-lg leading-none mt-0.5">
                  •
                </span>
                <span>
                  <strong className="text-slate-900">
                    Professional Proofreading Services:
                  </strong>{" "}
                  Our experts have experience in academia and can easily provide
                  you with native English proofreading.
                </span>
              </li>

              <li className="flex items-start space-x-2">
                <span className="text-red-600 font-bold text-lg leading-none mt-0.5">
                  •
                </span>
                <span>
                  <strong className="text-slate-900">
                    Correction of Mistakes:
                  </strong>{" "}
                  We handle all aspects of research paper proofreading service,
                  including grammar, spelling, punctuation, and typographical
                  errors.
                </span>
              </li>

              <li className="flex items-start space-x-2">
                <span className="text-red-600 font-bold text-lg leading-none mt-0.5">
                  •
                </span>
                <span>
                  <strong className="text-slate-900">Consistency Check:</strong>{" "}
                  Ensuring consistency across manuscript proofreading services
                  for researchers, including terminology, formatting, and style.
                </span>
              </li>
            </ul>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed pt-2">
              With professionals educated at European and American universities,
              Pubrica can take your draft documents to the next level, making us
              one of the best proofreading services for research papers.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <GetFreeQuoteButton/>
            </div>
          </div>

          {/* Right Column: Floating Pricing Box */}
          <div className="lg:col-span-4 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-sm bg-white border border-slate-200 rounded-lg p-6 shadow-lg text-center space-y-5">
              <div className="space-y-1">
                <h3 className="font-bold text-slate-800 text-base">
                  Proofreading
                </h3>
                <p className="text-2xl font-bold text-slate-900">
                  $75{" "}
                  <span className="text-sm font-normal text-slate-600">
                    per 1,000 words
                  </span>
                </p>
              </div>

              {/* Delivery Banner */}
              <div className="bg-black text-white font-bold py-2 text-xs tracking-wide uppercase">
                Delivery: 5 Days
              </div>

              {/* Get Started Button */}
              <div>
                <Link
                  href="/order-now"
                  className="block w-full text-center bg-[#b81d1d] hover:bg-[#961515] text-white font-bold py-2.5 px-4 rounded-md text-sm transition-colors"
                >
                  Get Started
                </Link>
              </div>

              {/* Packs availability */}
              <div className="space-y-1 pt-2">
                <p className="font-bold text-slate-800 text-xs">
                  Also Available in:
                </p>
                <p className="text-xs text-slate-600">
                  Platinum Pack | Golden Pack | Silver Pack
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================= */}
      {/* 3. PROOFREADING YOUR COPY SECTION       */}
      {/* ======================================= */}
      <section className="bg-slate-100/70 py-12 px-4 sm:px-6 border-t border-slate-200">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Content & Overlapping Images Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column Text */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#003B46]">
                Proofreading your copy
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Our professional{" "}
                <Link
                  href="/services/editing-and-translation/proofreading"
                  className="text-sky-600  hover:text-sky-800"
                >
                  proofreading services
                </Link>{" "}
                are designed for quality-specific authors who need a thorough
                language check of their manuscripts.{" "}
                <Link
                  href="/services/publication-support/journal-submission"
                  className="text-sky-600  hover:text-sky-800"
                >
                  Papers submitted
                </Link>{" "}
                for proofreading service are returned to authors after an
                exhaustive check.{" "}
                <Link
                  href="/subject-matter-experts"
                  className="text-sky-600 hover:text-sky-800"
                >
                  Language and subject specialists
                </Link>{" "}
                scan the material for spelling, grammar, punctuation, and
                jargon.{" "}
                <Link
                  href="/"
                  className="text-sky-600  hover:text-sky-800"
                >
                  Pubrica proofreading
                </Link>{" "}
                services are negligible in contrast to substantive editing. Talk
                to us today.
              </p>
            </div>

            {/* Right Column Stacked Sample Images */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end min-h-[220px]">
              <div className="relative w-full max-w-[340px] h-[180px]">
                <div className="absolute top-0 left-0 z-10 w-48 h-32 rounded-lg overflow-hidden shadow-md border border-slate-200">
                  <Image
                    src="/images/editing-and-translation/proofreading/Proofreading-your-copy.webp"
                    alt="Proofreading your copy"
                    fill
                    sizes="192px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute top-12 left-20 z-20 w-56 h-36 rounded-lg overflow-hidden shadow-lg border border-slate-200">
                  <Image
                    src="/images/editing-and-translation/proofreading/Proofreading.webp"
                    alt="Proofreading manuscript sample"
                    fill
                    sizes="224px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Feature Tags Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 pt-6">
            {featureTags.map((tag, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-sm py-2.5 px-3 flex items-center justify-center space-x-2 shadow-xs"
              >
                <ArrowRightCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
