"use client";

import React, { useState } from "react";

interface TableRow {
  issueCategory: string;
  revisionType: string;
  expert: string;
  action: string;
}

interface AccordionSection {
  id: string;
  title: string;
  data: TableRow[];
}

// 1. Pre submission Peer review Data
const peerReviewTableData: TableRow[] = [
  {
    issueCategory: "Grammar & Language",
    revisionType: "Minor Revision",
    expert: "Language Editor",
    action: "Proofread the manuscript, correct grammar, and ensure language clarity",
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
    action: "Correct citation style, cross-check sources, and format references",
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

// 2. Life Sciences Data
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
    action: "Confirm statistics and reanalyse data accordingly with journal-style",
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

// 3. Social Sciences Data
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

// 4. Engineering Data
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

const accordions: AccordionSection[] = [
  {
    id: "peer-review",
    title: "Pre submission Peer review",
    data: peerReviewTableData,
  },
  {
    id: "life-sciences",
    title: "Life Sciences",
    data: lifeSciencesData,
  },
  {
    id: "social-sciences",
    title: "Social Sciences",
    data: socialSciencesData,
  },
  {
    id: "engineering",
    title: "Engineering",
    data: engineeringData,
  },
];

export default function PeerReviewSection() {
  // Store which accordion section is currently expanded (or null if closed)
  const [openSectionId, setOpenSectionId] = useState<string | null>("peer-review");

  const toggleSection = (id: string) => {
    setOpenSectionId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* 1. What We Peer Review Section */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0c3547]">
          What We Peer Review
        </h2>
        <p className="text-base text-gray-700 leading-relaxed">
          At Pubrica, we appreciate that obtaining meaningful feedback before
          submitting your manuscript is essential. Our{" "}
          <span className="text-cyan-700 font-medium">peer review</span>{" "}
          pre-submission service provides impartial, comprehensive, and
          structured evaluation by experts in your discipline. Regardless of
          whether your discipline is medical sciences, engineering, life
          sciences, or social sciences, we provide meaningful recommendations
          with actionable improvements based on current peer review standards of
          high-impact journals.
        </p>

        {/* 6 Core Criteria Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-md shadow-md border-t-4 border-[#0c3547] space-y-3">
            <h3 className="text-lg font-bold text-gray-900">
              1. Scientific/Technical Quality
            </h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
              <li>Are the methods sound and appropriate?</li>
              <li>Is the data accurate and reproducible?</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-md shadow-md border-t-4 border-[#0c3547] space-y-3">
            <h3 className="text-lg font-bold text-gray-900">
              2. Originality and Novelty
            </h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
              <li>Is this a new contribution to the field?</li>
              <li>Does it address an important research gap?</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-md shadow-md border-t-4 border-[#0c3547] space-y-3">
            <h3 className="text-lg font-bold text-gray-900">
              3. Clarity and Organization
            </h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
              <li>logical, and well-structured?</li>
              <li>Are figures and tables informative and accurate?</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-md shadow-md border-t-4 border-[#0c3547] space-y-3">
            <h3 className="text-lg font-bold text-gray-900">
              4. Relevance and Significance
            </h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
              <li>
                Is the topic important and relevant to the journal or audience?
              </li>
              <li>Does it contribute to advancing knowledge?</li>
            </ul>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-6 rounded-md shadow-md border-t-4 border-[#0c3547] space-y-3">
            <h3 className="text-lg font-bold text-gray-900">
              5. References and Citations
            </h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
              <li>Are sources current and appropriate?</li>
              <li>Is the literature review complete?</li>
            </ul>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-6 rounded-md shadow-md border-t-4 border-[#0c3547] space-y-3">
            <h3 className="text-lg font-bold text-gray-900">
              6. Ethical and Legal Aspects
            </h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
              <li>
                Were ethical standards followed (e.g., in clinical trials or
                human/animal research)?
              </li>
              <li>Any plagiarism or data manipulation?</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 2. Outcome of Pre-submission Peer Review */}
      <div className="space-y-6 pt-6 border-t border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0c3547]">
          Outcome of Pre-submission Peer Review
        </h2>
        <p className="text-base text-gray-700 leading-relaxed">
          At Pubrica, we go further than simply peer reviewing your document.
          The goal of our{" "}
          <span className="text-cyan-700 font-medium">
            pre-submission peer review
          </span>{" "}
          process is to improve the manuscript based on the extensive feedback
          from expert reviewers. We will use a{" "}
          <span className="text-cyan-700 font-medium">double-blind review</span>{" "}
          model, where the peer review is conducted by professional editors who
          only work for Pubrica. The corrections and improvements are then made
          by independent subject matter experts separate from the reviewers,
          providing a fair and high-quality improvement to your manuscript and a
          much better chance of being accepted by journals.
        </p>

        {/* Accordions Group */}
        <div className="mt-8 space-y-4">
          {accordions.map((accordion) => {
            const isOpen = openSectionId === accordion.id;

            return (
              <div
                key={accordion.id}
                className="border border-gray-200 rounded-lg shadow-sm overflow-hidden bg-white"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleSection(accordion.id)}
                  className="w-full flex items-center justify-between px-6 py-4 bg-gray-50 border-b border-gray-200 text-left font-bold text-[#0c3547] hover:bg-gray-100 transition-colors"
                >
                  <span className="text-base sm:text-lg">{accordion.title}</span>
                  <span className="text-2xl font-semibold leading-none">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Accordion Content Table */}
                {isOpen && (
                  <div className="p-4 sm:p-6 bg-gray-50/50 overflow-x-auto">
                    <div className="rounded-lg border border-gray-200 overflow-hidden shadow-sm bg-white min-w-[700px]">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-[#0c3547] text-white text-xs sm:text-sm font-bold uppercase tracking-wider">
                            <th className="py-3.5 px-5 border-b border-teal-900 w-1/4">
                              Issue Category
                            </th>
                            <th className="py-3.5 px-5 border-b border-teal-900 w-1/5">
                              Revision Type
                            </th>
                            <th className="py-3.5 px-5 border-b border-teal-900 w-1/4">
                              Expert at Pubrica
                            </th>
                            <th className="py-3.5 px-5 border-b border-teal-900">
                              Pubrica&apos;s Action
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-xs sm:text-sm">
                          {accordion.data.map((row, index) => (
                            <tr
                              key={index}
                              className={
                                index % 2 === 0
                                  ? "bg-white"
                                  : "bg-teal-50/30"
                              }
                            >
                              <td className="py-3 px-5 font-medium text-gray-900">
                                {row.issueCategory}
                              </td>
                              <td className="py-3 px-5 text-gray-700">
                                {row.revisionType}
                              </td>
                              <td className="py-3 px-5 text-gray-800 font-medium">
                                {row.expert}
                              </td>
                              <td className="py-3 px-5 text-gray-700 leading-relaxed">
                                {row.action}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}