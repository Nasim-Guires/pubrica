"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ResearchImpactService(): React.ReactElement {
  return (
    <div className="w-full font-sans text-slate-800 bg-[#f9fbfb]">
      {/* ---------------- HERO BANNER ---------------- */}
      <section className="bg-[#122826] text-white py-6 px-4 sm:px-6 lg:px-8 text-center border-b border-emerald-950">
        <div className="max-w-4xl mx-auto border border-emerald-700/50 p-6 sm:p-8 rounded-sm bg-[#122826]/80 shadow-inner">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
            Research Impact Service
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Maximize potential research visibility and impact through our
            comprehensive Research Impact Services. We offer tailored support to
            help researchers increase visibility, engagement, influence, and
            recognition within the global community.
          </p>
        </div>
      </section>

      {/* ---------------- MAIN CONTENT SECTION ---------------- */}
      <section className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Text & List */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main Title & Subtitle */}
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#09322e] leading-snug">
                Research Impact Service: Amplifying Scientific Influence with
                Precision and Clarity
              </h2>
              <p className="text-sm sm:text-base font-semibold text-[#1e615e]">
                Deliver targeted, evidence-based strategies to increase the
                visibility, credibility, and citation of your research.
              </p>
            </div>

            {/* Paragraph 1 */}
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Publishing your research is only the first step. To truly drive
              research promotion, your work must reach the right stakeholders.
              Pubrica’s{" "}
              <Link
                href="/academy"
                className="text-[#008ba3] underline underline-offset-2 hover:text-[#09322e] transition-colors"
              >
                Research Impact Services
              </Link>{" "}
              optimize scientific communication, ensuring your research is seen,
              read, cited, and referenced. As a result, you’ll achieve:
            </p>

            {/* Bullet Points */}
            <ul className="space-y-2 pl-4 text-xs sm:text-sm text-slate-800 list-disc marker:text-slate-800">
              <li>
                At{" "}
                <strong className="font-bold text-slate-900">
                  least 40% more citations
                </strong>
              </li>
              <li>Greater attention and engagement</li>
              <li>Broader connections with funders, peers, and media</li>
            </ul>

            {/* Paragraph 2 */}
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-2">
              With Pubrica’s expert team, including scientific writers, graphic
              designers, illustrators, communication specialists, and impact
              analysts, we can ensure that your ground-breaking findings reach
              their maximum but key audiences across disciplines, thereby
              enhancing visibility, interpreted into an impactful narrative, and
              promoting scholarly engagement, altmetric, and media coverage.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="/brochures/research-impact-services.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#123835] hover:bg-[#09322e] text-white text-xs sm:text-sm font-semibold py-3 px-6 rounded-full transition-colors shadow-sm"
              >
                View brochure
              </a>
            </div>
          </div>

          {/* Right Column: Image with Offset Backing Block */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-full max-w-md">
              {/* Dark Green Backing Block */}
              <div className="absolute inset-0 bg-[#0e2c29] rounded-2xl transform translate-x-3 translate-y-3 -z-10" />

              {/* Foreground Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white aspect-[4/3]">
                <Image
                  src="/images/research-impact/Our-Research-Impact-Expertise-Includes.webp"
                  alt="Team reviewing research documents"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
