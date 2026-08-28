"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroBanner from "@/components/common/HeroBanner";

export default function PlagiarismHeroAndOverview() {
  return (
    <div className="w-full font-sans bg-white">
      {/* ---------------- HERO / BANNER SECTION ---------------- */}
      <HeroBanner
        title="Plagiarism Check Service: Accurate, Reliable, and Comprehensive Originality Reports"
        description="Pubrica's academic paper plagiarism checker detects potential accidental plagiarism in your research manuscript to ensure journal compliance. Using trusted academic software, we provide a detailed report with highlighted sections and expert recommendations."
        headingAs="h1"
      />

      {/* ---------------- MAIN CONTENT SECTION ---------------- */}
      <section className="w-full py-6 md:py-7 px-4 md:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Main Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#0c373b] leading-snug mb-4 max-w-5xl">
            Editorial Review services for Originality (Plagiarism screening) and
            AI-Content analysis from Pubrica- Ensure Your Manuscripts are
            Ethically Compliant with Proper and Complete Evaluations of
            Originality
          </h2>

          <p className="text-sm md:text-base text-slate-700 mb-8 leading-relaxed max-w-5xl">
            Safeguard your research integrity with a reliable plagiarism and
            artificial intelligence (AI) generated content screening process
            that meets the specifications for academics, publishers, and
            journals.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-4 text-slate-700 text-sm md:text-base leading-relaxed">
              <p>
                Our{" "}
                <Link
                  href="/academy/plagiarism-service/common-types-of-plagiarism"
                  className="text-sky-600 hover:underline font-medium"
                >
                  plagiarism
                </Link>{" "}
                and AI check service from Pubrica provides a list of potential
                instances in your manuscript that the journal might perceive as
                accidental plagiarism. We thoroughly check your manuscript for
                potential{" "}
                <Link
                  href="/academy/plagiarism-service/academic-paraphrasing-and-plagiarism-prevention"
                  className="text-sky-600 hover:underline font-medium"
                >
                  plagiarism
                </Link>{" "}
                using software widely accepted and used within the academic
                community to verify the originality and integrity of a document.
              </p>

              {/* Bulleted List */}
              <ul className="space-y-3 pt-2">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0" />
                  <span>
                    A complete{" "}
                    <Link
                      href="/academy/plagiarism-service/researchers-avoid-plagiarism-originality"
                      className="text-sky-600 hover:underline font-medium"
                    >
                      plagiarism check
                    </Link>{" "}
                    for research papers using the iAuthentic check software
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0" />
                  <span>Highlighting the problematic sections</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0" />
                  <span>
                    A publication expert&apos;s comments to facilitate
                    corrective action
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md h-[240px] sm:h-[280px] overflow-hidden">
                <Image
                  src="/images/publication-support/plagiarism-services/Plagiarism-Check-Service.webp"
                  alt="Academic editorial review and manuscript inspection"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bottom Paragraph */}
          <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-8 max-w-5xl">
            Pubrica offers researchers a simple text originality and artificial
            intelligence authorship evaluation, eliminating the stress of
            originality concerns, rejection from journals, or ethical
            compliance. We are your partner on the academic integrity pathway
            from first manuscript review to last plagiarism report, helping our
            authors reflect originality, credibility, and publication readiness.
          </p>

          {/* Call to Action Button */}
          <div className="pt-2">
            <Link
              href="/order-now/"
              className="inline-block bg-red-600 hover:text-black hover:bg-white text-white font-bold text-sm md:text-base py-3 px-8 rounded-full transition-colors shadow-sm"
            >
              Upload Your Manuscript
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
