"use client";

import React from "react";
import Image from "next/image";

// Deliverables Data (5 Cards)
const deliverablesData = [
  {
    title: "Manuscript Formatting",
    description:
      "Your manuscript will be formatted to meet the style and structure requirements of your target journal, including references, figures, tables, and layout.",
  },
  {
    title: "Journal Account Setup & Management",
    description:
      "We create and manage your new journal submission account and ensure that you have entered accurately all metadata and your co-author information, along with your documents.",
  },
  {
    title: "Customized Cover Letter",
    description:
      "A professionally written cover letter that highlights the originality, importance, and suitability of your research for the journal helps create a compelling first impression with the editors.",
  },
  {
    title: "Proof of Submission",
    description:
      "Once your manuscript is submitted, we provide you with an official PDF confirmation or screenshot for your records.",
  },
  {
    title: "Resubmission & Revision Support",
    description:
      "Should revisions be requested, we will help prepare and resubmit your manuscript, including tracked changes, response to reviewer comments, and updated documentation.",
  },
];

// Compliance Cards Data
const complianceData = [
  {
    title: "Consolidated Standards of Reporting Trials (CONSORT)",
    logo: "/images/publication-support/journal-submission/Consort-Logo.webp",
    url: "https://www.consort-spirit.org/",
  },
  {
    title: "Committee on Publication Ethics (COPE)",
    logo: "/images/publication-support/journal-submission/COPE_thumb.png",
    url: "https://publicationethics.org/",
  },
  {
    title: "International Committee of Medical Journal Editors (ICMJE)",
    logo: "/images/publication-support/journal-submission/ICMJE-1_thumb-2.png",
    url: "https://www.icmje.org/",
  },
];

export default function JournalSubmissionBottomSections() {
  return (
    <div className="w-full font-sans text-gray-800 bg-white">
      {/* ========================================== */}
      {/* SECTION 1: GLOBAL REACH & WHAT YOU'LL RECEIVE */}
      {/* ========================================== */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Global Reach Header Banner */}
          <div className="bg-[#f2fbf7] p-6 rounded-sm text-center mb-12 border border-[#e0f5ed]">
            <h3 className="text-lg sm:text-xl font-bold text-[#0c3547] mb-2">
              Global Reach, Local Expertise
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Pubrica works with clients across North America, Europe,
              Asia-Pacific, and the Middle East, and understands regional
              journal policies, language support needs, and publication
              priorities.
            </p>
          </div>

          {/* Section Title */}
          <h2 className="text-xl sm:text-2xl font-bold text-[#0c3547] text-center mb-10">
            What You’ll Receive with Our Journal Submission Service
          </h2>

          {/* Deliverables Cards Grid (3 on Top, 2 Centered on Bottom) */}
          <div className="space-y-6">
            {/* Top Row: 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {deliverablesData.slice(0, 3).map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-sm shadow-md border-l-4 border-l-[#1c3330] border-t border-r border-b border-gray-100 transition-all hover:shadow-xl"
                >
                  <h3 className="text-sm font-bold text-[#0c3547] mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Row: 2 Cards Centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {deliverablesData.slice(3, 5).map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-sm shadow-md border-l-4 border-l-[#1c3330] border-t border-r border-b border-gray-100 transition-all hover:shadow-xl"
                >
                  <h3 className="text-sm font-bold text-[#0c3547] mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 2: COMPLIANCE & GUIDELINE STANDARDS*/}
      {/* ========================================== */}
      <section className="bg-[#f8faf9] py-14 px-4 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0c3547] mb-3">
              Our Compliance and Guideline Standards
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Pubrica, we recognize that navigating the{" "}
              <a
                href="/services/publication-support/journal-submission"
                className="text-[#0082a6] hover:underline font-medium"
              >
                journal submission
              </a>{" "}
              process can be complicated, especially in the life sciences,
              pharmaceutical research, and medical device industries. We ensure
              compliance with
            </p>
          </div>

          {/* 3 White Logo Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {complianceData.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target={item.url.startsWith("http") ? "_blank" : "_self"}
                rel="noreferrer"
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center justify-between transition-all hover:shadow-md group"
              >
                <div className="h-16 relative w-full mb-6 flex items-center justify-center">
                  <Image
                    src={item.logo}
                    alt={item.title}
                    fill
                    className="object-contain max-h-16"
                  />
                </div>
                <h3 className="text-xs font-bold text-[#0c3547] group-hover:text-[#0082a6] transition-colors leading-snug">
                  {item.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 3: SAMPLE WORK / DOWNLOAD REPORT  */}
      {/* ========================================== */}
      <section className="bg-[#eefaf4] py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Image Column */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-xs h-72 rounded-sm overflow-hidden shadow-md">
              <Image
                src="/images/publication-support/journal-submission/Journal-Submission-Sample-Work.jpg"
                alt="Person taking notes in open notebook"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Text & CTA Column */}
          <div className="md:col-span-7 space-y-6">
            {/* Block 1 */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0c3547] mb-3">
                Journal Submission Sample Work
              </h3>
              <a
                href="#discover-sample"
                className="inline-block w-full sm:w-auto bg-black hover:bg-gray-800 text-white text-xs font-bold px-10 py-2.5 rounded-full text-center transition-colors shadow-sm"
              >
                Discover More
              </a>
            </div>

            {/* Block 2 */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0c3547] mb-2">
                Download the full Report Now
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4">
                Explore our{" "}
                <a
                  href="/academy/journal-submission/journal-submission-service-help-you-get-published"
                  className="text-[#0082a6] hover:underline font-medium"
                >
                  Journal Submission
                </a>{" "}
                sample work aligned with your manuscript’s formatting standards,
                ethical guidelines, and target publication timelines.
              </p>
              <a
                href="#discover-report"
                className="inline-block w-full sm:w-auto bg-black hover:bg-gray-800 text-white text-xs font-bold px-10 py-2.5 rounded-full text-center transition-colors shadow-sm"
              >
                Discover More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
