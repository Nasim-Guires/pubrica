"use client";

import React, { useState } from "react";
import Image from "next/image";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

// Accordion Data based on the screenshots
const accordionData = [
  {
    id: "detailed-preparation",
    title: "Detailed Submission Preparation",
    intro:
      "We assure you that your manuscript complies with the target journal’s formatting, structure, and submission requirements:",
    bullets: [
      "Formatting as per authors’ guidelines (e.g., references, figures, tables, word count)",
      "Language polishing and scientific editing for clarity and precision (academic manuscript editing)",
      "Changes to document features (e.g., abstract, highlights, figure captions) according to the journal’s policies",
    ],
  },
  {
    id: "metadata-entry",
    title: "Accurate Metadata & Information Entry",
    intro:
      "We manage accurate author, institution, and manuscript data entry across journal portals:",
    bullets: [
      "Inputting all author details, affiliations, ORCID iDs, and corresponding author information",
      "Uploading keywords, abstract text, and running titles accurately",
      "Ensuring conflict of interest and funding disclosure fields are filled without error",
    ],
  },
  {
    id: "ethical-compliance",
    title: "Ethical & Compliance Documentation",
    intro: "We prepare and submit all necessary declarations:",
    bullets: [
      "Conflict of interest disclosures",
      "Ethics approval and informed consent statements",
      "Clinical trial registration details",
      "COPE, ICMJE, and CONSORT compliance checklists",
    ],
  },
  {
    id: "reviewer-management",
    title: "Reviewer Management",
    intro:
      "Comprehensive support during reviewer assignment and response stages:",
    bullets: [
      "Suggesting relevant, non-conflicted peer reviewers based on subject expertise",
      "Formatting response letters addressing reviewer comments systematically",
    ],
  },
  {
    id: "document-upload-liaison",
    title: "Document Upload & Liaison with Editors",
    intro: "End-to-end file handling and communication management:",
    bullets: [
      "Uploading cover letters, main manuscripts, tables, and high-resolution figures",
      "Managing single or double-blind anonymization of manuscript files",
      "Direct liaison with journal editorial assistants",
    ],
  },
  {
    id: "submission-tracking",
    title: "Submission Tracking & Editorial Follow-Up",
    intro: "Proactive status monitoring and timely updates:",
    bullets: [
      "Monitoring submission portal status throughout editorial and peer review",
      "Prompting journal editors for updates when reviews exceed expected turnaround times",
    ],
  },
  {
    id: "post-acceptance-support",
    title: "Post-Acceptance Support",
    intro: "Assistance through the final stages leading up to publication:",
    bullets: [
      "Reviewing galley proofs and formatting final author corrections",
      "Assisting with copyright forms and open access processing documentation",
    ],
  },
  {
    id: "submission-tracking-followup",
    title: "Submission Tracking and Follow-Up",
    intro:
      "Ongoing communication management to prevent unnecessary publishing delays:",
    bullets: [
      "Tracking revisions and resubmission deadlines",
      "Timely responses and documentation for editorial queries",
    ],
  },
  {
    id: "journal-selection",
    title: "Optional: Journal Selection Support",
    intro: "Strategic guidance on target journal identification:",
    bullets: [
      "Recommending relevant Scopus/Web of Science indexed journals based on manuscript scope",
      "Evaluating journal metrics, impact factors, and average peer-review timelines",
    ],
  },
];

export default function JournalSubmissionPage() {
  // Item 1 (Detailed Submission Preparation) open by default
  const [openAccordion, setOpenAccordion] = useState<string>(
    "detailed-preparation",
  );

  const toggleAccordion = (id: string) => {
    setOpenAccordion((prev) => (prev === id ? "" : id));
  };

  return (
    <div className="w-full font-sans text-gray-800 bg-white">
      {/* ========================================== */}
      {/* SECTION 1: HERO BANNER                     */}
      {/* ========================================== */}
      <section className="bg-[#1a2c2a] py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto border border-white/60 p-8 sm:p-10 rounded-sm">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Journal Submission Service
          </h1>
          <p className="text-sm sm:text-base text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Simplify your journal submission with Pubrica’s expert services –
            your assistant to manage complex requirements and ensure timely,
            stress-free publishing.
          </p>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 2: OVERVIEW & BULLETS              */}
      {/* ========================================== */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-xl sm:text-2xl font-bold text-[#0c3547] mb-3 leading-snug">
          Journal Submission Services for Life Sciences, Pharma, and Research:
          Simplifying the Path to Publication
        </h2>

        <p className="text-xs sm:text-sm font-semibold text-gray-600 mb-4">
          Complete Administrative Support After Your Manuscript is Ready
        </p>

        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4">
          Publishing in peer-reviewed, high-impact journals is essential for
          advancing scientific knowledge and building a strong academic or
          professional reputation.
        </p>

        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-6">
          Many face challenges with multiple submission procedures, varied
          documentation, and strict timelines. Our service allows these to be
          simple while providing a compliant and timely{" "}
          <a href="#" className="text-[#0082a6] hover:underline font-medium">
            journal manuscript submission service
          </a>{" "}
          that goes smoothly. Once you have finalized your manuscript, Pubrica
          can take care of all the administrative tasks that can make the{" "}
          <a href="#" className="text-[#0082a6] hover:underline font-medium">
            manuscript submission process
          </a>{" "}
          slow and complex. We act as a dedicated liaison between authors and
          journal editors, managing all the backend duties that are involved in
          submitting and following up on your manuscript, including:
        </p>

        {/* Bullet List */}
        <ul className="space-y-2.5 text-xs sm:text-sm text-gray-800 mb-8 pl-1">
          <li className="flex items-start space-x-2">
            <span className="text-[#b80000] font-bold text-lg leading-none mt-0.5">
              •
            </span>
            <span>
              Creating and managing your user accounts on submission sites
            </span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-[#b80000] font-bold text-lg leading-none mt-0.5">
              •
            </span>
            <span>
              Uploading all of the files (
              <a href="#" className="text-[#0082a6] hover:underline">
                cover letter
              </a>
              , manuscript, declarations, supplemental, etc) in the correct
              formats
            </span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-[#b80000] font-bold text-lg leading-none mt-0.5">
              •
            </span>
            <span>Completing journal-specific checklists and forms</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-[#b80000] font-bold text-lg leading-none mt-0.5">
              •
            </span>
            <span>
              Collating submission confirmations and submission follow-ups
            </span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-[#b80000] font-bold text-lg leading-none mt-0.5">
              •
            </span>
            <span>
              Tracking the submission status throughout the editorial and{" "}
              <a href="#" className="text-[#0082a6] hover:underline">
                peer-review
              </a>{" "}
              process
            </span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-[#b80000] font-bold text-lg leading-none mt-0.5">
              •
            </span>
            <span>
              Corresponding with editors on your behalf for any correspondence,
              requests to revise, or resubmissions
            </span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-[#b80000] font-bold text-lg leading-none mt-0.5">
              •
            </span>
            <span>
              Timely responses to revise deadlines and reviewer comments
            </span>
          </li>
        </ul>

        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-8">
          Pubrica enables researchers to remain concentrated on science while
          they deal with all administration-related tasks like journal
          communication, formatting, uploads, and documentation, smoothly
          carrying their work from the time of submission to publication.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <GetFreeQuoteButton />
          <a
            href="#brochure"
            className="bg-[#b80000] hover:bg-black text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded-full shadow transition-colors duration-300"
          >
            View Brochure
          </a>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 3: COMPREHENSIVE SERVICE ACCORDION */}
      {/* ========================================== */}
      <section className="bg-[#f9fafb] py-12 px-4 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0c3547] mb-3">
            Our Comprehensive Journal Submission Service Include
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-8 max-w-4xl">
            At Pubrica, we provide an end-to-end{" "}
            <a href="#" className="text-[#0082a6] hover:underline font-medium">
              academic journals submission service
            </a>{" "}
            to eliminate the multi-step, complex process of publishing in
            peer-reviewed journals. Our service extends beyond just formatting,
            but also includes support in submitting and compliance, and
            communication, so you can focus on your research.
          </p>

          {/* Grid Layout: Accordion on Left, Image on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Accordion Column */}
            <div className="lg:col-span-7 border-t border-gray-200 divide-y divide-gray-200">
              {accordionData.map((item) => {
                const isOpen = openAccordion === item.id;

                return (
                  <div key={item.id} className="transition-colors">
                    {/* Header Bar */}
                    <button
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full py-3.5 px-2 flex items-center justify-between text-left focus:outline-none group"
                    >
                      <span className="font-bold text-xs sm:text-sm text-[#0c3547] group-hover:text-[#0082a6] transition-colors">
                        {item.title}
                      </span>
                      <span className="text-xs text-[#0c3547] shrink-0 ml-2">
                        {isOpen ? "▲" : "▼"}
                      </span>
                    </button>

                    {/* Open Panel Body */}
                    {isOpen && (
                      <div className="bg-[#f0f9f6] p-4 sm:p-5 rounded-sm mb-2 text-xs sm:text-sm text-gray-800 space-y-3">
                        <p className="leading-relaxed">{item.intro}</p>
                        <ul className="space-y-2 pl-1">
                          {item.bullets.map((bullet, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-2"
                            >
                              <span className="text-[#b80000] font-bold text-base leading-none mt-0.5">
                                •
                              </span>
                              <span className="leading-relaxed">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Side Image */}
            <div className="lg:col-span-5 sticky top-8">
              <div className="relative w-full h-[380px] sm:h-[450px] rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/journal-submission-laptop.jpg"
                  alt="Researcher typing journal submission on laptop"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
