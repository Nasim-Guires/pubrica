"use client";

import React from "react";
import Image from "next/image";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

const complianceStandards = [
  {
    title: "Committee on Publication Ethics (COPE)",
    logo: "/images/standards/cope-logo.png",
  },
  {
    title: "International Committee of Medical Journal Editors (ICMJE)",
    logo: "/images/standards/icmje-logo.png",
  },
  {
    title: "Consolidated Standards of Reporting Trials (CONSORT)",
    logo: "/images/standards/consort-logo.png",
  },
];

export default function RespondingToReviewersSection() {
  return (
    <div className="w-full font-sans text-gray-800 bg-white">
      {/* ========================================== */}
      {/* SECTION 1: HERO BANNER                    */}
      {/* ========================================== */}
      <section className="bg-gradient-to-r from-[#172722] via-[#1a332d] to-[#172722] py-12 px-4 sm:px-8 text-white text-center">
        <div className="max-w-4xl mx-auto border border-white/70 p-6 sm:p-10 rounded-xs">
          <h1 className="text-xl sm:text-3xl font-bold leading-snug tracking-wide mb-4">
            Response to Reviewer Comments Addressal Services with Rebuttal
            Preparation for Manuscript Re-Submissions
          </h1>
          <p className="text-xs sm:text-sm text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
            Our subject-matter experts will revise your manuscript and provide
            detailed, point-by-point responses to reviewer comments, ensuring it
            meets your journal’s requirements and scientific standards.
          </p>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 2: SERVICE OVERVIEW CONTENT       */}
      {/* ========================================== */}
      <section className="py-12 px-4 sm:px-8 max-w-5xl mx-auto text-gray-800">
        <h2 className="text-xl sm:text-2xl font-bold text-[#0c3547] mb-3 leading-snug">
          Response to Reviewer Comments Service for Life Sciences, Pharma, and
          Research: Strengthen Your Manuscript with Expert Revisions
        </h2>

        <h3 className="text-xs sm:text-sm font-bold text-[#0c3547] mb-4">
          Responding to Reviewer Comments and Rebuttal Support Services
        </h3>

        <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
          <p>
            Addressing editorial feedback and peer review comments can be
            overwhelming for authors, researchers, and scholars. Interpreting
            reviewer comments (major or minor), navigating complex revisions,
            and drafting well-reasoned rebuttals require both time and
            expertise. These tasks are not only time-consuming but also critical
            to improving your manuscript’s chances of acceptance.
          </p>

          <p>
            At Pubrica, we offer extensive{" "}
            <a href="#" className="text-[#2563eb] hover:underline">
              Response to Reviewer
            </a>{" "}
            Comments and{" "}
            <a href="#" className="text-[#2563eb] hover:underline">
              Rebuttal Preparation Services
            </a>{" "}
            to help you revise and resubmit your manuscript to peer-reviewed
            journals. Pubrica can assist and support you if your manuscript has
            been rejected or accepted with major or minor revisions. Even if
            your manuscript was rejected, we will work with the journal’s
            reviewer comments and rebuttal letter to revise and improve your
            manuscript either for the same or a different journal.
          </p>

          <p className="font-medium text-gray-800 pt-1">
            At Pubrica, our highly skilled editors and subject matter experts
            can fully support you in the peer-review process, and we can
            provide:
          </p>

          <ul className="space-y-2.5 pl-1 pt-1">
            <li className="flex items-start space-x-2">
              <span className="text-[#cc0000] font-bold text-sm leading-none">
                •
              </span>
              <span>
                An extensive analysis with a strategic response to the
                reviewer’s comments
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-[#cc0000] font-bold text-sm leading-none">
                •
              </span>
              <span>
                Professionally written journal-specific rebuttal letters
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-[#cc0000] font-bold text-sm leading-none">
                •
              </span>
              <span>
                Scientific editing to ensure clarity, accuracy, and tone
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-[#cc0000] font-bold text-sm leading-none">
                •
              </span>
              <span>
                Manuscript revised to the journal-specific formatting and
                submission guidelines
              </span>
            </li>
          </ul>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 mt-8">
          <GetFreeQuoteButton/>
          <a
            href="#brochure"
            className="bg-[#b80000] hover:bg-black text-white font-bold text-xs py-3 px-6 rounded-full transition-colors shadow-sm"
          >
            View Brochure
          </a>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 3: COMPLIANCE AND GUIDELINES      */}
      {/* ========================================== */}
      <section className="py-10 px-4 sm:px-8 max-w-5xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-[#0c3547] mb-2">
          Our Compliance and guideline Standards
        </h2>
        <p className="text-xs sm:text-sm text-gray-700 mb-8 max-w-4xl leading-relaxed">
          At Pubrica, we maintain high editorial and ethical standards when
          responding to peer reviewer comments. We ensure every revision,
          response, and correspondence aligns with the demands of international
          academic journals and editorial boards.
        </p>

        {/* 3 Standard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {complianceStandards.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-between min-h-[180px] text-center bg-white shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-20 mb-4 flex items-center justify-center">
                <Image
                  src={item.logo}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-xs font-bold text-[#0c3547] leading-tight px-2">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
