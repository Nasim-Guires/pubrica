import Link from "next/link";
import React from "react";

export interface RejectionTableRow {
  reasonBoldPrefix?: string;
  reason: string;
  solution: string;
  pubricaSolution: string;
  url?: string;
}

export interface Service {
  rejectionTable?: RejectionTableRow[];
}

interface ServiceRejectionTableProps {
  service?: Service;
}

// Complete dataset with exact URL mappings
export const FULL_REJECTION_TABLE_DATA: RejectionTableRow[] = [
  {
    reasonBoldPrefix: "",
    reason: "Lack of originality can delay the manuscript acceptance.",
    solution:
      "We provide time-saving expert editing services to make your original manuscript more likely to be accepted based on journal guidelines and clarity. Further, inclusion of comprehensive feedback and plagiarism checks from experienced teams can enhance research impact.",
    pubricaSolution: "Journal submission",
    url: "/services/publication-support/journal-submission/",
  },
  {
    reasonBoldPrefix: "Inappropriate or incomplete statistics: ",
    reason: "Issues in data validity & accuracy",
    solution:
      "Our experts will thoroughly understand the scope of the journal & ensure the topic of the manuscript fulfils the journal requirement",
    pubricaSolution: "Journal Selection",
    url: "/services/publication-support/journal-selection/",
  },
  {
    reasonBoldPrefix: "Improper rationale: ",
    reason: "Failed to meet scientific rigour",
    solution:
      "Identify the clear purpose of the research, advances made, research ethics, a title that is not descriptive, lack of up-to-date references or references containing a high proportion of self-citations, design and methodology, data analysis, results & discussion.",
    pubricaSolution: "Pre-submission Peer Review",
    url: "/services/publication-support/peer-review-pre-submission/",
  },
  {
    reasonBoldPrefix: "Inappropriate or incomplete statistics: ",
    reason: "Issues in data validity & accuracy",
    solution:
      "Implement strong data validation processes and employ robust statistical principles, hypothesis confirmation, and adherence to best data collection and analysis practices.",
    pubricaSolution: "Statistical review",
  },
  {
    reasonBoldPrefix: "Formatting: ",
    reason: "Tables & figures presentation issues",
    solution:
      "Redraw tables & figures as per the journal requirement & standards.",
    pubricaSolution: "Artwork formatting",
    url: "/services/publication-support/art-work-preparation/",
  },
  {
    reasonBoldPrefix: "Editing: ",
    reason:
      "Misspelling, grammatical, punctuation errors, or lack of clarity & cohesiveness in writing.",
    solution:
      "Enhance language quality such that it can be understood by readers.",
    pubricaSolution: "Editing",
  },
  {
    reasonBoldPrefix: "",
    reason:
      "Poorly structured paper or not following journal formatting requirements",
    solution: "Enhance paper structure",
    pubricaSolution: "Formatting",
  },
  {
    reasonBoldPrefix: "",
    reason: "Paper is highly plagiarized",
    solution:
      "Rewrite or paraphrase the paper by retaining its context and properly cite sources for credibility",
    pubricaSolution: "Plagiarism correction Services",
    url: "/services/publication-support/plagiarism-services/",
  },
  {
    reasonBoldPrefix: "",
    reason: "Reviewer comments",
    solution:
      "Pubrica experts address all points raised by the editor and reviewers and provide a polite and scholarly response/rebuttal letter with point-by-point responses to the comments raised.",
    pubricaSolution: "Reviewer Comments",
  },
  {
    reasonBoldPrefix: "",
    reason: "Lengthy manuscript or resembling a thesis.",
    solution:
      "Experts reduce the word count while retaining the context of the manuscript along with language accuracy.",
    pubricaSolution: "Word Count Reduction Service",
  },
  {
    reasonBoldPrefix: "",
    reason: "Irrelevant Journal Cover Letter or doesn't adhere to guidelines",
    solution:
      "Expert reviewers assist in writing concise cover letter that clearly highlights the research findings and its implications.",
    pubricaSolution: "Cover Letter Writing/Editing",
  },
];

const WHO_WE_SERVE_CARDS = [
  {
    title: "PhD Scholars",
    image: "/images/publication-support/PhD-Scholars.jpg",
  },
  {
    title: "Early Career Researchers",
    image: "/images/publication-support/Early-Career-Researchers.jpg",
  },
  {
    title: "Medical Professionals and Clinicians",
    image:
      "/images/publication-support/Medical-Professionals-and-Clinicians.jpg",
  },
  {
    title: "Academic Institutions and Universities",
    image:
      "/images/publication-support/Academic-Institutions-and-Universities.jpg",
  },
  {
    title: "Medical and Clinical Researchers",
    image:
      "/images/publication-support/Medical-and-Clinical-Researchers.jpg",
  },
];

export default function ServiceRejectionTable({
  service,
}: ServiceRejectionTableProps) {
  const tableData = FULL_REJECTION_TABLE_DATA;

  return (
    <div className="w-full max-w-5xl mx-auto py-6 px-4 sm:px-6 font-sans">
      {/* Heading Group */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#083a50] mb-4">
          Reasons for Manuscript Rejection
        </h2>
        <p className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed">
          Usually, the most prominent, well-drafted, and outstanding articles
          would be the ones that clear the rigorous{" "}
          <Link href="/services/publication-support/journal-selection/ckd-journal-selection-review/" className="text-[#3b82f6]  cursor-pointer">
            review
          </Link>{" "}
          process, but there are several that get rejected for simple reasons
          like formatting, referencing, language, and editing errors.
        </p>
      </div>

      {/* Styled Grid / Table Container */}
      <div className="overflow-hidden border border-slate-200 rounded-lg shadow-sm">
        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse text-left bg-white">
            <thead>
              <tr className="bg-[#0b2b30] text-white text-[12px] font-bold tracking-wider uppercase">
                <th className="py-4 px-6 border-r border-[#143e45] w-[30%]">
                  Reasons for Rejection
                </th>
                <th className="py-4 px-6 border-r border-[#143e45] w-[50%]">
                  Solution
                </th>
                <th className="py-4 px-6 w-[20%] text-center">
                  Pubrica Solution
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {tableData.map((row, index) => {
                const isEven = index % 2 === 0;
                return (
                  <tr
                    key={index}
                    className={`${isEven ? "bg-white" : "bg-[#e6f2f7]"
                      } transition-colors hover:bg-slate-100/70`}
                  >
                    {/* Reason Column */}
                    <td className="py-4 px-6 text-[13.5px] text-slate-800 leading-relaxed border-r border-slate-200">
                      {row.reasonBoldPrefix && (
                        <span className="font-bold text-slate-900">
                          {row.reasonBoldPrefix}
                        </span>
                      )}
                      {row.reason}
                    </td>

                    {/* Solution Column */}
                    <td className="py-4 px-6 text-[13px] text-slate-600 leading-relaxed border-r border-slate-200">
                      {row.solution}
                    </td>

                    {/* Pubrica Link Column */}
                    <td className="py-4 px-6 text-[13px] font-medium text-center">
                      {row.url ? (
                        <a
                          href={row.url}
                          className="text-[#3b82f6]  cursor-pointer"
                        >
                          {row.pubricaSolution}
                        </a>
                      ) : (
                        <span className="text-slate-800 cursor-default">
                          {row.pubricaSolution}
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile / Card View */}
        <div className="block md:hidden divide-y divide-slate-200">
          {tableData.map((row, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`p-5 flex flex-col gap-3 ${isEven ? "bg-white" : "bg-[#e6f2f7]"
                  }`}
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0b2b30] block mb-1">
                    Reason for Rejection
                  </span>
                  <p className="text-[13.5px] text-slate-850 font-medium leading-relaxed">
                    {row.reasonBoldPrefix && (
                      <span className="font-bold text-slate-900">
                        {row.reasonBoldPrefix}
                      </span>
                    )}
                    {row.reason}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Solution
                  </span>
                  <p className="text-[13px] text-slate-600 leading-relaxed">
                    {row.solution}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Pubrica Solution
                  </span>
                  {row.url ? (
                    <a
                      href={row.url}
                      className="text-[13px] font-bold text-[#3b82f6] cursor-pointer"
                    >
                      {row.pubricaSolution}
                    </a>
                  ) : (
                    <span className="text-[13px] font-medium text-slate-800 cursor-default">
                      {row.pubricaSolution}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Who We Serve Section */}
      <div className="mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#083a50] mb-3">
          Who We Serve
        </h2>
        <p className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed mb-8">
          At Pubrica, we offer complete{" "}
          <Link
            href="/academy/publication-support/challenges-in-research-paper-writing-and-strategies-to-overcome-them"
            className="text-[#3b82f6] hover:underline cursor-pointer font-medium"
          >
            publication support services
          </Link>{" "}
          by aiding researchers from the process of{" "}
          <Link href="/services/publication-support/journal-selection" className="text-[#3b82f6]  cursor-pointer font-medium">
            journal selection
          </Link>
          , manuscript preparation, and submission to ensure publications are
          high-quality, compliant, and impactful.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {WHO_WE_SERVE_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="relative h-64 rounded-lg overflow-hidden group  shadow-md"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-bold text-sm leading-snug">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}