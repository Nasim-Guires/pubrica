"use client";

import CommonFAQ from "@/components/common/FAQ";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function PubricaSampleWorkAndFAQ() {
  // FAQ accordion state handler
  const [openFaq, setOpenFaq] = useState<number | null>(1); // Default open first question

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I choose the right journal for my research paper?",
      answer:
        "Choose the right journal by matching your manuscript's scope, audience, and methodology with the journal's aims, reviewing recent articles, checking indexing status, and following submission guidelines carefully.",
    },
    {
      question: "How do I know if my manuscript fits a journal's scope?",
      answer:
        "Examine the journal’s aims and scope, peruse recently published articles, compare your topic and methods with similar studies, and ensure your research is appropriate for the journal’s scope.",
    },
    {
      question:
        "What tools can help researchers find suitable journals for their manuscripts?",
      answer:
        "Researchers can use journal finder tools, database search engines such as Scopus and Web of Science, and citation analysis tools to find a proper journal for submission.",
    },
    {
      question:
        "What factors should I consider when selecting a journal for publication?",
      answer:
        "When selecting a journal for publication, it is important to take into account the journal’s scope, audience, whether it is indexed or not, its impact and reputation, its peer-review process, publication time, and requirements.",
    },
    {
      question:
        "How can I ensure my manuscript meets a journal's submission requirements?",
      answer:
        "Carefully read and adhere to author guidelines provided by the journal, format requirements, and then structure your work in a similar manner. Also, be mindful of word counts and references.",
    },
    {
      question:
        "How can researchers identify reputable journals in their field?",
      answer:
        "Researchers may identify reliable journals by checking database indexing, publisher reputation, editorial boards, transparency in peer review processes, and journal evaluation lists provided by reputable sources.",
    },
    {
      question:
        "Can journal selection services help improve manuscript acceptance chances?",
      answer:
        "Journal selection services can help by matching your manuscript with appropriate journals, thus increasing alignment and minimizing the risk of rejection due to poor journal fit.",
    },
    {
      question: "How to verify the credibility of a journal before submission?",
      answer:
        "Verify the journal’s credibility by checking the databases in which the journal is indexed, the reputation of the publisher, the journal’s editorial board, the journal’s peer review policy, and the journal’s ethical policies.",
    },
    {
      question:
        "What criteria do journals use to evaluate whether a manuscript fits their scope?",
      answer:
        "Journals use various parameters to determine whether your manuscript is a good fit, such as relevance, alignment with their aims, quality of methods, originality, importance, and contribution to the field.",
    },
    {
      question:
        "Why is selecting the right journal important for research publication success?",
      answer:
        "Choosing the appropriate journal boosts your chances of getting published, reaches your intended audience, maximizes your paper’s visibility, boosts your citations, and maximizes alignment with the journal’s scope.",
    },
    {
      question:
        "When should researchers decide on the target journal during the research process?",
      answer:
        "A choice should be made about the target journal early in the research process—in fact, as early as possible in the design phase.",
    },
  ];

  return (
    <div className="w-full font-sans bg-white text-slate-800">
      {/* ---------------------------------------------------- */}
      {/* SECTION 1: SAMPLE WORK & BANNER                      */}
      {/* ---------------------------------------------------- */}
      <section className="bg-[#f0faf4] py-12 px-6 sm:px-12 lg:px-16 my-8 rounded-xl max-w-7xl mx-auto shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Column Graphic / Stock Image Placeholder */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm h-64 rounded-lg overflow-hidden shadow-md border border-slate-300">
              <Image
                src="/images/publication-support/journal-selection/Journal-Selection-Sample-Work.jpg"
                alt="Sample Journal Report and Manuscript Preparation"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column Content */}
          <div className="md:col-span-7 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d3b44] mb-3">
                Journal Selection Sample Work
              </h2>
              <Link href="/insights/sample-work/anesthetic-management-in-pregnant-woman/" className="bg-black text-white hover:bg-slate-800 text-xs font-bold py-2.5 px-8 rounded-full transition-all">
                Discover More
              </Link>
            </div>

            <div className="pt-2 border-t border-emerald-100">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Download the full Report Now
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Explore our{" "}
                <Link
                  href="/services/publication-support/journal-selection/identify-predatory-journals-2026/"
                  className="text-cyan-600 font-medium hover:underline"
                >
                  Journal Selection
                </Link>
                sample work tailored to your manuscript’s scope, indexing
                requirements, and impact factor goals.
              </p>
              <Link href="/insights/sample-work" className="bg-black text-white hover:bg-slate-800 text-xs font-bold py-2.5 px-8 rounded-full transition-all">
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 2: JOURNAL SPOTLIGHT (DIABETES CARE)        */}
      {/* ---------------------------------------------------- */}
      <section className="py-10 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d3b44] mb-4">
          Diabetes Care
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-5xl mb-8">
          <span className="italic font-semibold">Diabetes Care</span> is a
          journal for the health care practitioner focused on increasing
          knowledge, stimulating research, and promoting better management of
          people with{" "}
          <a href="/academy/journals-templates/journal-of-diabetes-research" className="text-cyan-600 hover:underline">
            diabetes
          </a>
          . To foster these objectives, the journal publishes original research
          in the areas of Clinical Care/Education/Nutrition/Psychosocial
          Research, Epidemiology/Health Services Research, Emerging Treatments
          and Technologies, Pathophysiology/Complications, and Cardiovascular
          and Metabolic Risk.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Logo / Publisher Visual */}
          <div className="md:col-span-3 flex justify-center md:justify-start">
            <div className="w-48 h-36 border border-slate-200 rounded-md overflow-hidden bg-slate-50 shadow-sm">
              <Image
                src="/images/publication-support/journal-selection/Diabetes-Care-Journal-ΓCo-Metrics-Scope-Submissions-768x768.jpg"
                alt="American Diabetes Association"
                width={192}
                height={144}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Key Metrics Table */}
          <div className="md:col-span-9 overflow-x-auto">
            <table className="w-full text-left border-b border-slate-300 text-xs sm:text-sm">
              <thead>
                <tr className="text-slate-500 font-medium border-b border-slate-200 pb-2">
                  <th className="pb-2 font-normal">Impact Factor</th>
                  <th className="pb-2 font-normal">CiteScore</th>
                  <th className="pb-2 font-normal">Acceptance rate</th>
                  <th className="pb-2 font-normal">Frequency</th>
                  <th className="pb-2 font-normal">
                    SJR (SCImago Journal Rank)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="font-bold text-slate-800 text-sm sm:text-base">
                  <td className="py-3">16.2</td>
                  <td className="py-3">27.7</td>
                  <td className="py-3">Approximately 11.06%</td>
                  <td className="py-3">Monthly</td>
                  <td className="py-3">6.008</td>
                </tr>
              </tbody>
            </table>

            {/* Quick Links */}
            <div className="flex gap-8 mt-4 text-xs font-semibold">
              <a href="https://diabetescare.diabetesjournals.org/" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">
                Submit your Report
              </a>
              <a href="https://diabetesjournals.org/care/pages/instructions-for-authors" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">
                Guide for author
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 3: FREQUENTLY ASKED QUESTIONS (FAQ)          */}
      {/* ---------------------------------------------------- */}
      <CommonFAQ
        title="Frequently Asked Questions – Journal Selection Services"
        faqs={faqs}
      />
    </div>
  );
}
