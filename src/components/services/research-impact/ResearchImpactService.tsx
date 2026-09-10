"use client";

import HeroBanner from "@/components/common/HeroBanner";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ResearchImpactService(): React.ReactElement {
  return (
    <div className="w-full font-sans text-slate-800 bg-[#f9fbfb]">
      {/* ---------------- HERO BANNER ---------------- */}
      <HeroBanner
        title="Research Impact Service"
        description="Maximize potential research visibility and impact through our comprehensive Research Impact Services. We offer tailored support to help researchers increase visibility, engagement, influence, and recognition within the global community."
        headingAs="h1"
      />

      {/* ---------------- MAIN CONTENT SECTION ---------------- */}
      <section className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#09322e] leading-tight">
            Research Impact Service: Amplifying Scientific Influence with Precision
            and Clarity
          </h2>

          <div className="flow-root">
            {/* Right-floated Image */}
            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[450px] pt-2 lg:pt-0">
              <div className="relative w-full max-w-md aspect-[4/3] overflow-hidden">
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

            {/* Text Content */}
            <div className="space-y-5">
              <p className="text-base sm:text-lg font-semibold text-[#1e615e] leading-relaxed">
                Deliver targeted, evidence-based strategies to increase the
                visibility, credibility, and citation of your research.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Publishing your research is only the first step. To truly drive
                research promotion, your work must reach the right stakeholders.
                Pubrica’s{" "}
                <Link
                  href="/insights/industry-trends-forecasts-academic-publishing"
                  className="text-blue-600 transition-colors cursor-pointer no-underline hover:no-underline"
                >
                  Research Impact Services
                </Link>{" "}
                optimize scientific communication, ensuring your research is seen,
                read, cited, and referenced. As a result, you’ll achieve:
              </p>

              <ul className="space-y-3 pl-4 text-sm sm:text-base text-slate-800 list-disc marker:text-red-600">
                <li>At least 40% more citations</li>
                <li>Greater attention and engagement</li>
                <li>Broader connections with funders, peers, and media</li>
              </ul>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                With Pubrica’s expert team, including scientific writers, graphic
                designers, illustrators, communication specialists, and impact
                analysts, we can ensure that your ground-breaking findings reach
                their maximum but key audiences across disciplines, thereby
                enhancing visibility, interpreted into an impactful narrative, and
                promoting scholarly engagement, altmetric, and media coverage.
              </p>

              <div className="pt-4 flex justify-center sm:justify-start">
                <a
                  href="/uploads/research-impact/Research-Impact-Services_compressed.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white text-sm font-bold px-6 py-3 rounded hover:bg-white hover:text-black transition-colors"
                >
                  View brochure
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}