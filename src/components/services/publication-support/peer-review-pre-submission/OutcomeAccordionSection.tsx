"use client";

import React, { useState } from "react";
import Link from "next/link";

interface TableRow {
  issueCategory: string;
  revisionType: string;
  expert: string;
  action: string;
}

// 1. Data for "Pre submission Peer review"
const preSubmissionData: TableRow[] = [
  {
    issueCategory: "Grammar & Language",
    revisionType: "Minor Revision",
    expert: "Language Editor",
    action:
      "Proofread the manuscript, correct grammar, and ensure language clarity",
  },
  {
    issueCategory: "Sentence Structuring",
    revisionType: "Minor Revision",
    expert: "Language Editor",
    action: "Improve sentence flow, rephrase awkward or complex constructions",
  },
  {
    issueCategory: "Academic Tone",
    revisionType: "Minor Revision",
    expert: "Academic Editor",
    action: "Align tone with scholarly standards and target journal",
  },
  {
    issueCategory: "Tables & Figures Formatting",
    revisionType: "Minor or Major Revision",
    expert: "Graphics Designer, Layout Expert",
    action: "Reformat visuals, enhance figure clarity, and redraw if needed",
  },
  {
    issueCategory: "Statistical Accuracy",
    revisionType: "Major or Critical Revision",
    expert: "Biostatistician, Statistician",
    action: "Recalculate, verify results, or reanalyse data",
  },
  {
    issueCategory: "Methodology Design",
    revisionType: "Major or Critical Revision",
    expert: "Methodology Expert",
    action: "Review and refine research design, sampling, and tools",
  },
  {
    issueCategory: "Lab Experiment Integrity",
    revisionType: "Critical Revision",
    expert: "Research Scientist",
    action: "Review protocols, suggest validation or replication strategies",
  },
  {
    issueCategory: "Writing Clarity",
    revisionType: "Minor or Major Revision",
    expert: "Scientific Writer",
    action: "Enhance clarity, coherence, and scientific flow",
  },
  {
    issueCategory: "Referencing & Citations",
    revisionType: "Minor Revision",
    expert: "Reference Manager",
    action:
      "Correct citation style, cross-check sources, and format references",
  },
  {
    issueCategory: "Plagiarism Detection",
    revisionType: "Critical Revision",
    expert: "Plagiarism Analyst",
    action: "Run plagiarism checks, rewrite flagged sections",
  },
  {
    issueCategory: "Data Analysis",
    revisionType: "Major or Critical Revision",
    expert: "Data Analyst",
    action: "Re-perform statistical tests, interpret results",
  },
  {
    issueCategory: "AI/ML Coding & Validation",
    revisionType: "Critical Revision",
    expert: "AI/ML Engineer",
    action: "Debug code, validate model, ensure reproducibility",
  },
  {
    issueCategory: "Journal Formatting",
    revisionType: "Minor or Major Revision",
    expert: "Journal Formatting Specialist",
    action: "Format as per the target journal's guidelines",
  },
  {
    issueCategory: "Data Collection Process",
    revisionType: "Major Revision",
    expert: "Data Management Expert",
    action: "Review instruments, sampling, and data logging methods",
  },
  {
    issueCategory: "Questionnaire Design",
    revisionType: "Major Revision",
    expert: "Survey Design Specialist",
    action: "Improve question clarity, logic, and structure",
  },
  {
    issueCategory: "Code Execution",
    revisionType: "Critical Revision",
    expert: "Programmer/Data Scientist",
    action: "Run code, fix errors, and validate output",
  },
];

// 2. Data for "Life Sciences"
const lifeSciencesData: TableRow[] = [
  {
    issueCategory: "Grammar & Language",
    revisionType: "Minor Revision",
    expert: "Language Editor",
    action: "Proofread the manuscript, correct grammar, and make it concise",
  },
  {
    issueCategory: "Methodology Design",
    revisionType: "Major Revision",
    expert: "Biologist / Research Methodologist",
    action: "Review experimental setup, sampling methods, and controls",
  },
  {
    issueCategory: "Statistical Accuracy",
    revisionType: "Major Revision",
    expert: "Biostatistician",
    action:
      "Confirm statistics and reanalyse data accordingly with journal-style",
  },
  {
    issueCategory: "Lab Experiment Integrity",
    revisionType: "Critical Revision",
    expert: "Lab Scientist",
    action: "Evaluate protocol, suggest replication or improvements",
  },
  {
    issueCategory: "Referencing & Citations",
    revisionType: "Minor Revision",
    expert: "Reference Specialist",
    action: "Cite references based on journal guidelines, fix inconsistencies",
  },
  {
    issueCategory: "Plagiarism Detection",
    revisionType: "Critical Revision",
    expert: "Plagiarism Analyst",
    action: "Check for errors and resubmit the content that was flagged",
  },
  {
    issueCategory: "Journal Formatting",
    revisionType: "Minor Revision",
    expert: "Formatting Expert",
    action: "Use the proper template and journal style for submission",
  },
];

// 3. Data for "Social Sciences"
const socialSciencesData: TableRow[] = [
  {
    issueCategory: "Grammar & Language",
    revisionType: "Minor Revision",
    expert: "Language Editor",
    action: "Improve readability, academic tone, and coherence",
  },
  {
    issueCategory: "Survey/Questionnaire Design",
    revisionType: "Major Revision",
    expert: "Survey Specialist",
    action: "Review survey logic, clarity, and bias",
  },
  {
    issueCategory: "Methodology Design",
    revisionType: "Major Revision",
    expert: "Social Science Methodologist",
    action: "Ensure a valid qualitative or quantitative design",
  },
  {
    issueCategory: "Data Analysis",
    revisionType: "Major Revision",
    expert: "Statistician",
    action: "Recalculate or re-interpret statistical/social data",
  },
  {
    issueCategory: "Referencing & Citations",
    revisionType: "Minor Revision",
    expert: "Citation Expert",
    action: "Align with APA/MLA or journal style",
  },
  {
    issueCategory: "Plagiarism Detection",
    revisionType: "Critical Revision",
    expert: "Plagiarism Analyst",
    action: "Detect overlap and rewrite duplicative text",
  },
  {
    issueCategory: "Journal Formatting",
    revisionType: "Minor Revision",
    expert: "Formatting Expert",
    action: "Format as per social science journal requirements",
  },
];

// 4. Data for "Engineering"
const engineeringData: TableRow[] = [
  {
    issueCategory: "Grammar & Language",
    revisionType: "Minor Revision",
    expert: "Technical Editor",
    action: "Edit for technical clarity and conciseness",
  },
  {
    issueCategory: "AI/ML Code Validation",
    revisionType: "Critical Revision",
    expert: "ML Engineer",
    action: "Test code for accuracy and reproducibility",
  },
  {
    issueCategory: "Data Analysis",
    revisionType: "Major Revision",
    expert: "Data Scientist",
    action: "Verify outputs, rerun analyses",
  },
  {
    issueCategory: "Methodology Design",
    revisionType: "Major Revision",
    expert: "Engineering Methodologist",
    action: "Evaluate experimental or computational methods",
  },
  {
    issueCategory: "Referencing & Citations",
    revisionType: "Minor Revision",
    expert: "Technical Writer",
    action: "Format citations to IEEE/ACM or journal style",
  },
  {
    issueCategory: "Code Execution",
    revisionType: "Critical Revision",
    expert: "Programmer",
    action: "Debug, rerun, and verify outputs",
  },
  {
    issueCategory: "Journal Formatting",
    revisionType: "Minor Revision",
    expert: "Formatting Expert",
    action: "Apply engineering journal layout standards",
  },
];

// Reusable Compact Table Component
function CategoryTable({ rows }: { rows: TableRow[] }) {
  return (
    <div className="py-6 px-2 sm:px-8 bg-[#f8f9fa] flex justify-center font-poppins">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-center border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-[#123938] text-white font-semibold">
                <th className="py-2.5 px-4 border-r border-teal-800/40 w-1/4">
                  Issue Category
                </th>
                <th className="py-2.5 px-4 border-r border-teal-800/40 w-1/5">
                  Revision Type
                </th>
                <th className="py-2.5 px-4 border-r border-teal-800/40 w-1/4">
                  Expert at Pubrica
                </th>
                <th className="py-2.5 px-4 w-1/3">Pubrica's Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {rows.map((row, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 1 ? "bg-[#e7f0f2]" : "bg-white"}
                >
                  <td className="py-2.5 px-4 font-medium text-gray-800 border-r border-gray-200">
                    {row.issueCategory}
                  </td>
                  <td className="py-2.5 px-4 text-gray-700 border-r border-gray-200">
                    {row.revisionType}
                  </td>
                  <td className="py-2.5 px-4 text-gray-800 font-medium border-r border-gray-200">
                    {row.expert}
                  </td>
                  <td className="py-2.5 px-4 text-gray-700 leading-snug">
                    {row.action}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default function OutcomeAccordionSection() {
  const [openSection, setOpenSection] = useState<string | null>(
    "Pre submission Peer review"
  );

  const toggleSection = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const sections = [
    {
      id: "Pre submission Peer review",
      title: "Pre submission Peer review",
      data: preSubmissionData,
    },
    { id: "Life Sciences", title: "Life Sciences", data: lifeSciencesData },
    {
      id: "Social Sciences",
      title: "Social Sciences",
      data: socialSciencesData,
    },
    { id: "Engineering", title: "Engineering", data: engineeringData },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-8 font-poppins">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#0c3547] mb-4">
        Outcome of Pre-submission Peer Review
      </h2>
      <p className="text-base text-gray-700 leading-relaxed mb-6">
        At Pubrica, we go further than simply peer reviewing your document. The
        goal of our{" "}
        <Link
          href="/academy/peer-review/pre-submission-peer-review-pre-submission-peer-review-for-researchers"
          className="text-blue-600 font-medium no-underline hover:no-underline"
        >
          pre-submission peer review
        </Link>{" "}
        process is to improve the manuscript based on the extensive feedback
        from expert reviewers. We will use a{" "}
        <Link
          href="/services/publication-support/double-blind-peer-review-definition-process"
          className="text-blue-600 font-medium no-underline hover:no-underline"
        >
          double-blind review
        </Link>{" "}
        model, where the peer review is conducted by professional editors who
        only work for Pubrica. The corrections and improvements are then made by
        independent subject matter experts separate from the reviewers,
        providing a fair and high-quality improvement to your manuscript and a
        much better chance of being accepted by journals.
      </p>
      <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
        {sections.map((section) => {
          const isOpen = openSection === section.id;
          return (
            <div key={section.id} className="w-full">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between py-3.5 px-2 text-left font-bold text-[#123938] hover:text-black transition-colors"
              >
                <span className="text-lg sm:text-xl">{section.title}</span>
                <span className="text-xl sm:text-2xl font-bold leading-none select-none">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && <CategoryTable rows={section.data} />}
            </div>
          );
        })}
      </div>
    </section>
  );
}