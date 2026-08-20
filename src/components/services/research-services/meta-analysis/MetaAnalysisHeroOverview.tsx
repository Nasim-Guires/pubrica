"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

export default function MetaAnalysisHeroOverview() {
  return (
    <section
      style={{ width: "100%", fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      {/* 1. Hero Banner */}
      <div
        style={{
          backgroundColor: "#16282b", // Dark teal banner background
          padding: "50px 20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            width: "100%",
            border: "1px solid rgba(255, 255, 255, 0.8)",
            padding: "36px 24px",
            textAlign: "center",
            boxSizing: "border-box",
          }}
        >
          <h1
            style={{
              color: "#ffffff",
              fontSize: "2.25rem",
              fontWeight: "700",
              margin: "0 0 16px 0",
              letterSpacing: "0.5px",
            }}
          >
            Meta-Analysis Service
          </h1>
          <p
            style={{
              color: "#ffffff",
              fontSize: "1.05rem",
              lineHeight: "1.5",
              margin: 0,
              fontWeight: "400",
            }}
          >
            Pubrica’s expert team helps busy researchers craft precise
            meta-analysis with statistical accuracy and expert review.
          </p>
        </div>
      </div>

      {/* 2. Overview Content Section */}
      <div className="bg-slate-100 py-12 px-4 sm:px-6 lg:px-8 text-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column Content */}
            <div className="lg:col-span-7 flex flex-col">
              {/* Main Heading */}
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a2f2c] leading-tight mb-4">
                Meta-Analysis Services for Life Sciences, Pharma, and Research:
                Streamlining Your Path to Publication
              </h2>

              {/* Subheading */}
              <p className="text-sm sm:text-base font-semibold text-sky-700 leading-snug mb-4">
                End-to-end meta-analysis support for publication and expert guidance
                to submit robust analyses to high-impact journals
              </p>

              {/* Introductory Paragraph */}
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-6">
                Pubrica’s team of skilled editors and medical writers specializes in
                conducting thorough,{" "}
                <Link
                  href="/services/research-services/systematic-review"
                  className="text-sky-600 hover:underline font-medium"
                >
                  systematic reviews
                </Link>{" "}
                and{" "}
                <Link
                  href="/services/research-services/meta-analysis"
                  className="text-sky-600 hover:underline font-medium"
                >
                  meta-analysis
                </Link>{" "}
                (hypothesis-driven), essential for crafting high-quality scientific
                original research articles. Our experts rigorously summarize
                peer-reviewed medical literature, use{" "}
                <Link
                  href="/services/research-services/meta-analysis"
                  className="text-sky-600 hover:underline font-medium"
                >
                  meta-analysis
                </Link>{" "}
                statistical services, explain the variability between different
                studies, and articulate key research gaps, facilitating the creation
                of impactful publications in the scientific community.
              </p>

              {/* Bullet Points */}
              <ul className="space-y-4 mb-8 text-xs sm:text-sm text-gray-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-600 font-bold text-lg leading-none mt-0.5">
                    •
                  </span>
                  <span>
                    Get an expert to identify, analyse, and structure your
                    comprehensive{" "}
                    <Link
                      href="/services/research-services/meta-analysis"
                      className="text-sky-600 hover:underline font-medium"
                    >
                      meta-analysis
                    </Link>{" "}
                    report efficiently, ensuring it meets professional and quality
                    standards while accurately answering your research question.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="text-red-600 font-bold text-lg leading-none mt-0.5">
                    •
                  </span>
                  <span>
                    Customize your custom meta-analysis reports to align with your
                    specific requirements and budget, providing a tailored approach
                    for your unique needs.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="text-red-600 font-bold text-lg leading-none mt-0.5">
                    •
                  </span>
                  <span>
                    Benefit from meta-analysis writing services by professional medical
                    experts who assist in identifying relevant literature, connecting it
                    with your research question (PCOS), conducting meta-analysis, a
                    statistical procedure used to numerically summarize the included
                    studies, and preparing a comprehensive research gap analysis to support
                    evidence-based conclusions.
                  </span>
                </li>
              </ul>

              {/* Call to Action Button */}
              <div>
                <GetFreeQuoteButton />
              </div>
            </div>

            {/* Right Column Image Frame */}
            <div className="lg:col-span-5 flex justify-center items-center pt-4 lg:pt-0">
              <div className="relative w-full max-w-lg">
                {/* Dark green background accent card (reduced size/offset) */}
                <div className="absolute -bottom-3 -left-3 top-3 right-3 bg-[#133A36] rounded-2xl -z-10" />

                {/* Main Image Container (larger presentation) */}
                <div className="relative z-10 aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/research-services/meta-analysis/Meta-Analysis-Services-for-Life-Sciences-Pharma-and-Research.webp"
                    alt="Meta-Analysis Services for Life Sciences, Pharma, and Research"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
