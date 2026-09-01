"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

export default function AiMlHeroSection() {
  return (
    <div className="w-full font-sans text-slate-800">
      {/* 1. Dark Top Hero Banner */}
      <section className="w-full bg-[#0a1a18] text-white py-6 px-4 sm:px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto border border-slate-600/60 rounded-sm p-8 sm:p-10 bg-black/20 backdrop-blur-sm">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
            Artificial Intelligence and Machine Learning Services
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            Pubrica offers comprehensive AI and ML support services, empowering
            research endeavours with cutting-edge technological solutions and
            expert guidance.
          </p>
        </div>
      </section>

      {/* 2. Main Intro Content Section */}
      <section className="w-full bg-[#f8f9f9] py-7 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#09322e] leading-snug">
              Turn Data Into Decisions, Automation Into Advantage With Our AI
              and ML Expertise
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              AI and ML Solutions have now moved from innovation to execution.
              The real value comes when AI delivers on business impact, not just
              technical potential.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              At Pubrica, we provide essential AI support services for crafting
              high-quality{" "}
              <Link href="/services/physician-writing-services/original-research-article" className="text-blue-600 no-underline hover:no-underline">
                original research articles
              </Link>{" "}
              by rigorously applying cutting-edge AI and ML methods, ensuring
              impactful contributions to the scientific community. From
              enterprise-grade automation to next-gen forecasting, our work
              blends technical depth with a sharp understanding of your domain.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We design, implement, and optimize{" "}
              <Link href="/services/ai-ml-support" className="text-blue-600 no-underline hover:no-underline">
                AI and ML modeling services
              </Link>{" "}
              that solve real-world problems and yield measurable results.
              Whether it&apos;s improving your products with artificial
              intelligence in healthcare services or speeding up operations with
              machine learning models, we deliver well-grounded strategies,
              ready-to-deploy technologies, and applications that drive results.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-8 pt-2">
              <GetFreeQuoteButton />
              <Link
                href="/uploads/ai-ml-support/AI-ML-Support-Services.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#b80e0e] hover:bg-[#960b0b] text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full transition-colors duration-200 shadow-sm"
              >
                View Brochure
              </Link>
            </div>
          </div>

          {/* Right Image Column with Backdrop Offset Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Dark Green Offset Backdrop Box */}
              <div className="absolute top-6 -left-4 w-full h-full bg-[#09322e] rounded-2xl -z-0 hidden sm:block" />

              {/* Foreground Image Card */}
              <div className="relative z-10 w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <Image
                  src="/images/ai-ml-support/Transform-complex-patient-data-into-actionable-insights-.webp"
                  alt="Person working on laptop showing data charts"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
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
