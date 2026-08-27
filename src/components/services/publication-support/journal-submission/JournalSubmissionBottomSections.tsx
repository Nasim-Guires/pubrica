"use client";

import React from "react";
import Image from "next/image";
import { PubricaSampleWorkCard } from "@/components/common/PubricaSampleWorkCardProps";

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
    <div className="w-full font-poppins text-gray-800 bg-white">
      {/* ========================================== */}
      {/* SECTION 1: GLOBAL REACH & WHAT YOU'LL RECEIVE */}
      {/* ========================================== */}
      <section className="py-6 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Global Reach Header Banner */}
          <div className="bg-[#f2fbf7] p-4 rounded-sm text-center mb-6 border border-[#e0f5ed]">
            <h3 className="text-lg sm:text-xl font-bold text-[#0c3547] mb-1">
              Global Reach, Local Expertise
            </h3>
            <p className="text-base text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Pubrica works with clients across North America, Europe,
              Asia-Pacific, and the Middle East, and understands regional
              journal policies, language support needs, and publication
              priorities.
            </p>
          </div>

          {/* Section Title */}
          <h2 className="text-xl sm:text-2xl font-bold text-[#0c3547] text-center mb-6">
            What You’ll Receive with Our Journal Submission Service
          </h2>

          {/* Deliverables Cards Grid (3 on Top, 2 Centered on Bottom) */}
          <div className="space-y-4">
            {/* Top Row: 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {deliverablesData.slice(0, 3).map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-sm shadow-md border-l-4 border-l-[#1c3330] border-t border-r border-b border-gray-100 transition-all hover:shadow-xl"
                >
                  <h3 className="text-lg font-bold text-[#0c3547] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Row: 2 Cards Centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {deliverablesData.slice(3, 5).map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-sm shadow-md border-l-4 border-l-[#1c3330] border-t border-r border-b border-gray-100 transition-all hover:shadow-xl"
                >
                  <h3 className="text-lg font-bold text-[#0c3547] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
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
      <section className="bg-[#f8faf9] py-8 px-4 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0c3547] mb-2">
              Our Compliance and Guideline Standards
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Pubrica, we recognize that navigating the{" "}
              <a
                href="/academy/journal-submission/open-access-publishing-guide/"
                className="text-blue-600 font-medium"
              >
                journal submission
              </a>{" "}
              process can be complicated, especially in the life sciences,
              pharmaceutical research, and medical device industries. We ensure
              compliance with
            </p>
          </div>

          {/* 3 White Logo Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {complianceData.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target={item.url.startsWith("http") ? "_blank" : "_self"}
                rel="noreferrer"
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center justify-between transition-all hover:shadow-md group"
              >
                <div className="h-16 relative w-full mb-4 flex items-center justify-center">
                  <Image
                    src={item.logo}
                    alt={item.title}
                    fill
                    className="object-contain max-h-16"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#0c3547] group-hover:text-blue-600 transition-colors leading-snug">
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
      <PubricaSampleWorkCard
        bookCoverImage={{
          src: "/images/publication-support/journal-submission/Journal-Submission-Sample-Work.jpg",
          alt: "Person taking notes in open notebook",
          width: 600,
          height: 400,
        }}
        sections={[
          {
            heading: "Journal Submission Sample Work",
            button: {
              label: "Discover More",
              url: "/insights/sample-work/journal-submission-report-sample",
            },
          },
          {
            heading: "Download the full Report Now",
            descriptionSegments: [
              { text: "Explore our " },
              {
                text: "Journal Submission",
                url: "/academy/journal-submission/journal-submission-service-help-you-get-published/",
              },
              {
                text: " sample work aligned with your manuscript’s formatting standards, ethical guidelines, and target publication timelines.",
              },
            ],
            button: {
              label: "Discover More",
              url: "/insights/sample-work",
            },
          },
        ]}
        footerDisclaimerSegments={[]}
      />
    </div>
  );
}