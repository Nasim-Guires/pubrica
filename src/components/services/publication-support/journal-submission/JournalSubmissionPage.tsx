"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import HeroBanner from "@/components/common/HeroBanner";

// Accordion Data with React JSX node support for embedded links
const accordionData = [
  {
    id: "detailed-preparation",
    title: "Detailed Submission Preparation",
    intro:
      "We assure you that your manuscript complies with the target journal’s formatting, structure, and submission requirements:",
    bullets: [
      "Formatting as per authors’ guidelines (e.g., references, figures, tables, word count)",
      <span>
        Language polishing and scientific editing for clarity and precision (
        <Link
          href="academy/manuscript-editing/from-research-to-final-draft-best-practices-in-manuscript-editing"
          className="text-[#0082a6] hover:underline font-medium"
        >
          academic manuscript editing
        </Link>
        )
      </span>,
      "Changes to document features (e.g., abstract, highlights, figure captions) according to the journal’s policies",
    ],
  },
  {
    id: "metadata-entry",
    title: "Accurate Metadata & Information Entry",
    intro: "We manage the accurate entry of:",
    bullets: [
      "Author details and affiliations",
      "Title, abstract, keywords, and article metadata",
      "Funding and acknowledgements",
    ],
    extraContent: (
      <p className="mt-2 text-xs sm:text-sm text-gray-800">
        For{" "}
        <Link
          href="/services/research-services/systematic-review/"
          className="text-[#0082a6] hover:underline font-medium"
        >
          systematic review
        </Link>{" "}
        and{" "}
        <Link
          href="https://static1.squarespace.com/static/65b880e13b6ca75573dfe217/t/67ad313f1c80aa5235fce0d0/1739403584136/PRISMA_2020_checklist.pdf"
          className="text-[#0082a6] hover:underline font-medium"
        >
          PRISMA
        </Link>{" "}
        flow diagrams:
      </p>
    ),
    subBullets: [
      "Documenting search strategies, inclusion criteria, and statistical models",
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
      <span>
        <Link
          href="https://publicationethics.org/"
          className="text-[#0082a6] hover:underline font-medium"
        >
          COPE
        </Link>
        ,{" "}
        <Link
          href="https://www.icmje.org/"
          className="text-[#0082a6] hover:underline font-medium"
        >
          ICMJE
        </Link>
        , and{" "}
        <Link
          href="https://www.consort-spirit.org/"
          className="text-[#0082a6] hover:underline font-medium"
        >
          CONSORT
        </Link>{" "}
        compliance checklists
      </span>,
    ],
  },
  {
    id: "reviewer-management",
    title: "Reviewer Management",
    intro: (
      <span>
        Improve the{" "}
        <Link
          href="/services/publication-support/peer-review-pre-submission"
          className="text-[#0082a6] hover:underline font-medium"
        >
          peer review
        </Link>{" "}
        process with:
      </span>
    ),
    bullets: [
      "Suggesting qualified reviewers with valid contact information",
      "Disqualifying reviewers with potential conflicts of interest",
      "Preparing reviewer suggestion letters (if needed by the journal)",
    ],
  },
  {
    id: "document-upload-liaison",
    title: "Document Upload & Liaison with Editors",
    intro:
      "We manage the entire administrative process, acting as a communication point between authors and journal editors:",
    bullets: [
      "Uploading all necessary files to the journal's platform (Elsevier, Springer, Wiley, etc.)",
      "Setting up and managing journal-specific portals and accounts",
      "Arranging and submitting requests for revisions as requested by peer reviewers",
      <span>
        Composing authors' direct{" "}
        <Link
          href="/services/publication-support/responding-to-reviewers"
          className="text-[#0082a6] hover:underline font-medium"
        >
          response to reviewers
        </Link>
        , including professional or evidence-based rebuttals, and tracking
        changes per reviewer comments
      </span>,
    ],
  },
  {
    id: "submission-tracking",
    title: "Submission Tracking & Editorial Follow-Up",
    intro: "We provide:",
    bullets: [
      "Regular updates on manuscript status",
      "Follow-up communications with editorial offices",
      "Timely reminders and action plans for author tasks",
    ],
  },
  {
    id: "post-acceptance-support",
    title: "Post-Acceptance Support",
    intro: "After acceptance, we help with:",
    bullets: [
      "Galley proof review and correction",
      "Copyright transfer or open access licensing",
      "Communicating with the production teams for final publication to guarantee a seamless transition to publication",
    ],
  },
  {
    id: "submission-tracking-followup",
    title: "Submission Tracking and Follow-Up",
    intro:
      "We will track your manuscript’s submission status, follow up with journal editors to minimise delays, and check in on the completion of review and publication.",
    bullets: [
      "Tracking submission status",
      "Active follow-ups with journal editors",
    ],
  },
  {
    id: "journal-selection",
    title: "Optional: Journal Selection Support",
    intro: "Not sure where to submit? We can help you:",
    bullets: [
      "Identify appropriate journals based on scope and impact objectives",
      "Compare turnaround time, indexing status, acceptance rate, and audience reach",
    ],
  },
];

export default function JournalSubmissionPage() {
  // Item 1 (Detailed Submission Preparation) open by default
  const [openAccordion, setOpenAccordion] = useState<string>(
    "detailed-preparation"
  );

  const toggleAccordion = (id: string) => {
    setOpenAccordion((prev) => (prev === id ? "" : id));
  };

  return (
    <div className="w-full font-sans text-gray-800 bg-white">
      {/* ========================================== */}
      {/* SECTION 1: HERO BANNER                    */}
      {/* ========================================== */}
      <HeroBanner
        title="Journal Submission Service"
        description="Simplify your journal submission with Pubrica’s expert services – your assistant to manage complex requirements and ensure timely, stress-free publishing."
        headingAs="h1"
      />

      {/* ========================================== */}
      {/* SECTION 2: OVERVIEW & BULLETS             */}
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
          <Link
            href="/academy/journal-submission/choosing-right-journal-for-manuscript-type-guide"
            className="text-[#0082a6] hover:underline font-medium"
          >
            journal manuscript submission service
          </Link>{" "}
          that goes smoothly. Once you have finalized your manuscript, Pubrica
          can take care of all the administrative tasks that can make the{" "}
          <Link
            href="/academy/journal-selection/how-to-identify-best-journal-for-manuscript-submission"
            className="text-[#0082a6] hover:underline font-medium"
          >
            manuscript submission process
          </Link>{" "}
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
              <Link
                href="/services/publication-support/journal-submission/complete-guide-to-writing-cover-letter-for-medical-journals"
                className="text-[#0082a6] hover:underline"
              >
                cover letter
              </Link>
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
              <Link
                href="/services/publication-support/journal-submission/guide-to-peer-review-types"
                className="text-[#0082a6] hover:underline"
              >
                peer-review
              </Link>{" "}
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
        <div className="flex flex-wrap items-center gap-4">
          <GetFreeQuoteButton />
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
            <Link
              href="/insights/journal-submission-report-sample"
              className="text-[#0082a6] hover:underline font-medium"
            >
              academic journals submission service
            </Link>{" "}
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
                        <div className="leading-relaxed">{item.intro}</div>

                        <ul className="space-y-2 pl-1">
                          {item.bullets.map((bullet, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-2"
                            >
                              <span className="text-[#b80000] font-bold text-base leading-none mt-0.5 shrink-0">
                                •
                              </span>
                              <span className="leading-relaxed">{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        {item.extraContent && item.extraContent}

                        {item.subBullets && (
                          <ul className="space-y-2 pl-1 mt-2">
                            {item.subBullets.map((sBullet, sIdx) => (
                              <li
                                key={sIdx}
                                className="flex items-start space-x-2"
                              >
                                <span className="text-[#b80000] font-bold text-base leading-none mt-0.5 shrink-0">
                                  •
                                </span>
                                <span className="leading-relaxed">
                                  {sBullet}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}
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
                  src="/images/publication-support/journal-submission/Our-Comprehensive-Journal-Submission.webp"
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