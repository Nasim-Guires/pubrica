"use client"
import React, { useState } from "react";

interface TableRow {
  issueCategory: string;
  revisionType:
    | "Minor Revision"
    | "Major Revision"
    | "Critical Revision"
    | "Minor or Major Revision"
    | "Major or Critical Revision";
  expert: string;
  action: string;
}

const peerReviewTableData: TableRow[] = [
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

export default function PeerReviewSection() {
  const [isTableOpen, setIsTableOpen] = useState(true);

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

        {/* Accordion / Table Container */}
        <div className="mt-8 border border-gray-200 rounded-lg shadow-sm overflow-hidden bg-white">
          <button
            onClick={() => setIsTableOpen(!isTableOpen)}
            className="w-full flex items-center justify-between px-6 py-4 bg-gray-50 border-b border-gray-200 text-left font-bold text-[#0c3547] hover:bg-gray-100 transition-colors"
          >
            <span className="text-lg">Pre submission Peer review</span>
            <span className="text-2xl font-semibold leading-none">
              {isTableOpen ? "−" : "+"}
            </span>
          </button>

          {isTableOpen && (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-[#0c3547] text-white text-sm font-bold uppercase tracking-wider">
                    <th className="py-4 px-6 border-b border-teal-900">
                      Issue Category
                    </th>
                    <th className="py-4 px-6 border-b border-teal-900">
                      Revision Type
                    </th>
                    <th className="py-4 px-6 border-b border-teal-900">
                      Expert at Pubrica
                    </th>
                    <th className="py-4 px-6 border-b border-teal-900">
                      Pubrica's Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-sm">
                  {peerReviewTableData.map((row, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-teal-50/40"}
                    >
                      <td className="py-3.5 px-6 font-medium text-gray-900">
                        {row.issueCategory}
                      </td>
                      <td className="py-3.5 px-6 text-gray-700">
                        {row.revisionType}
                      </td>
                      <td className="py-3.5 px-6 text-gray-800 font-medium">
                        {row.expert}
                      </td>
                      <td className="py-3.5 px-6 text-gray-700 leading-relaxed">
                        {row.action}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
