"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import HeroBanner from "@/components/common/HeroBanner";

export default function AiMlHeroSection() {
  return (
    <div className="w-full font-sans text-slate-800">
      {/* 1. Dark Top Hero Banner */}
      <HeroBanner
        title="Artificial Intelligence and Machine Learning Services"
        description="Pubrica offers comprehensive AI and ML support services, empowering research endeavours with cutting-edge technological solutions and expert guidance."
        headingAs="h1"
      />
      {/* 2. Main Intro Content Section */}
      <section className="w-full bg-[#f8f9f9] py-7 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#09322e] leading-tight">
              Turn Data Into Decisions, Automation Into Advantage With Our AI
              and ML Expertise
            </h2>

            <div className="flow-root">
              {/* Right Image */}
              <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[450px] pt-2 lg:pt-0">
                <div className="relative w-full max-w-md h-64 sm:h-80">
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

              {/* Text Content */}
              <div className="space-y-5">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  AI and ML Solutions have now moved from innovation to execution.
                  The real value comes when AI delivers on business impact, not just
                  technical potential.
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  At Pubrica, we provide essential AI support services for crafting
                  high-quality{" "}
                  <Link
                    href="/services/physician-writing-services/original-research-article"
                    className="text-blue-600 no-underline hover:no-underline"
                  >
                    original research articles
                  </Link>{" "}
                  by rigorously applying cutting-edge AI and ML methods, ensuring
                  impactful contributions to the scientific community. From
                  enterprise-grade automation to next-gen forecasting, our work
                  blends technical depth with a sharp understanding of your domain.
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We design, implement, and optimize{" "}
                  <Link
                    href="/academy/ai-and-ml-services/ethical-ai-research-writing/"
                    className="text-blue-600 no-underline hover:no-underline"
                  >
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
                    className="bg-red-600 text-white text-sm font-bold px-6 py-3 rounded hover:bg-white hover:text-black transition-colors"
                  >
                    View Brochure
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
