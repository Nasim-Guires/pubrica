"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

export default function ExperimentalDesignHero() {
  return (
    <section className="w-full font-sans bg-white text-slate-800">
      {/* ========================================================= */}
      {/* 1. HERO HEADER BANNER                                      */}
      {/* ========================================================= */}
      <section
        className="w-full py-16 px-4 sm:px-8 md:px-12 font-sans"
        style={{
          background:
            "linear-gradient(to right, #243534, #121c1b, #0d1514, #131e1d, #253635)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          {/* White Bordered Box Container */}
          <div className="border border-white/80 p-8 sm:p-10 md:p-12 text-center text-white space-y-3">
            {/* Main Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
              Experimental Design Services
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base font-semibold text-white/90">
              For Research Papers, Manuscripts &amp; Theses
            </p>

            {/* Description Paragraph */}
            <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed max-w-5xl mx-auto pt-1 font-normal">
              Pubrica’s Experimental Design Services deliver scientifically
              robust study frameworks with tailored methodologies and
              statistical rigor. Our experts ensure the validity,
              reproducibility, and high impact of your research outcomes—whether
              for research papers, manuscripts, theses, or clinical trials.
            </p>
          </div>
        </div>
      </section>
      {/* ========================================================= */}
      {/* 2. OVERVIEW & INTRO SECTION                               */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0e3b38] leading-tight">
              Ensure the Success of Your Research with Pubrica&apos;s
              Experimental Design Services
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
              At Pubrica, we specialize in{" "}
              <Link
                href="/academy/experimental-design/how-to-choose-right-experimental-design-for-research"
                className="text-sky-600 hover:underline font-medium"
              >
                experimental study design
              </Link>{" "}
              services for research papers, manuscripts, theses, and clinical
              trials. Our team of scientific experts, statisticians, and
              research methodology specialists has successfully crafted over
              5,000 experimental research designs, including true experimental,{" "}
              <Link
                href="/academy/experimental-design/quasi-experimental-design-definition-types-examples"
                className="text-sky-600 hover:underline font-medium"
              >
                quasi-experimental
              </Link>
              , pre-experimental, descriptive, randomized controlled trial
              (RCT), factorial, and crossover designs.
            </p>

            <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
              We know that a well-structured{" "}
              <Link
                href="/academy/experimental-design/types-of-pre-experimental-research-design"
                className="text-sky-600 hover:underline font-medium"
              >
                experimental research design
              </Link>{" "}
              is the backbone of every credible scientific study. That&apos;s
              why our manuscript and research paper design services ensure your
              methodology is scientifically robust, statistically sound, and
              reproducible, meeting both publication standards and regulatory
              requirements.
            </p>

            {/* Key Deliverables Bullet Points */}
            <div className="space-y-3 pt-2">
              <h3 className="text-sm sm:text-base font-bold text-[#0e3b38]">
                A Pubrica Experimental Design Delivers:
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold text-base leading-none mt-0.5">
                    •
                  </span>
                  <span>
                    Minimizes bias and ensures accuracy in research studies.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold text-base leading-none mt-0.5">
                    •
                  </span>
                  <span>
                    Enhances reproducibility and validity of experimental
                    results.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold text-base leading-none mt-0.5">
                    •
                  </span>
                  <span>
                    Optimizes resources for cost-effective study design.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold text-base leading-none mt-0.5">
                    •
                  </span>
                  <span>
                    Strengthens the credibility of your manuscript, thesis, or
                    clinical trial for publication and funding approval.
                  </span>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <GetFreeQuoteButton/>
            </div>
          </div>

          {/* Right Image Frame */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Dark Green Offset Background Accent */}
              <div className="absolute inset-0 bg-[#0e3b38] rounded-xl translate-x-3 translate-y-3 -z-10" />

              {/* Main Image Container */}
              <div className="relative h-72 sm:h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg border border-slate-100 bg-slate-100">
                <Image
                  src="/images/research-services/experimental-design/Ensure-the-Success-of-Your-Research-with-Pubricas-Experimental-Design-Services.webp"
                  alt="Researchers discussing experimental design and research methodology on laptop"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
