"use client";

import React, { useState } from "react";

export default function PubricaSampleWorkAndFAQ() {
  // FAQ accordion state handler
  const [openFaq, setOpenFaq] = useState<number | null>(1); // Default open first question

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      id: 1,
      question: "1. How do I choose the right journal for my research paper?",
      answer:
        "Choose the right journal by matching your manuscript's scope, audience, and methodology with the journal's aims, reviewing recent articles, checking indexing status, and following submission guidelines carefully.",
    },
    {
      id: 2,
      question: "2. How do I know if my manuscript fits a journal's scope?",
      answer:
        "Review the journal's 'Aims & Scope' section on their official website, check recently published articles in your topic area, and ensure your study's objectives and target audience align with the journal's focus.",
    },
    {
      id: 3,
      question:
        "3. What tools can help researchers find suitable journals for their manuscripts?",
      answer:
        "Researchers can utilize journal matcher tools provided by publishers (such as Elsevier JournalFinder, Springer Journal Suggester, or IEEE Publication Recommender), as well as indexing databases like Scopus and Web of Science.",
    },
    {
      id: 4,
      question:
        "4. What factors should I consider when selecting a journal for publication?",
      answer:
        "Key factors include indexing (Scopus, SCI, PubMed), Impact Factor, acceptance rate, target audience, review turn-around time, open access vs. subscription options, and article processing charges (APCs).",
    },
    {
      id: 5,
      question:
        "5. How can I ensure my manuscript meets a journal's submission requirements?",
      answer:
        "Thoroughly review the 'Author Guidelines' or 'Instructions for Authors' for your target journal. Pay close attention to word counts, formatting styles, reference styles, figure/table guidelines, and required declarations.",
    },
    {
      id: 6,
      question:
        "6. How can researchers identify reputable journals in their field?",
      answer:
        "Check if the journal is indexed in trusted databases like Scopus or Web of Science, verify its publisher with DOAJ or OASPA for open access journals, and consult senior colleagues or institutional library guides to avoid predatory publishers.",
    },
    {
      id: 7,
      question:
        "7. Can journal selection services help improve manuscript acceptance chances?",
      answer:
        "Journal selection services can help by matching your manuscript with appropriate journals, thus increasing alignment and minimizing the risk of rejection due to poor journal fit.",
    },
    {
      id: 8,
      question:
        "8. How to verify the credibility of a journal before submission?",
      answer:
        "Verify that the journal has a clear peer-review process, legitimate editorial board members, transparent fee structures, valid contact info, and verifiable citations on official databases like Journal Citation Reports (JCR).",
    },
    {
      id: 9,
      question:
        "9. What criteria do journals use to evaluate whether a manuscript fits their scope?",
      answer:
        "Editors evaluate whether the core topic, methodology, clinical or practical relevance, and target reader interest match the journal's established focus and thematic boundaries.",
    },
    {
      id: 10,
      question:
        "10. Why is selecting the right journal important for research publication success?",
      answer:
        "Selecting the right journal maximizes article visibility, ensures accurate peer-review feedback, prevents unnecessary desk rejections, and enhances academic impact and citations within your research community.",
    },
    {
      id: 11,
      question:
        "11. When should researchers decide on the target journal during the research process?",
      answer:
        "Ideally, researchers should select candidate journals early during manuscript drafting or research design so the structure, depth, formatting, and tone can be customized specifically for the target journal.",
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
            <div className="relative w-full max-w-sm h-64 bg-slate-200 rounded-lg overflow-hidden shadow-md flex items-center justify-center border border-slate-300">
              <div className="text-center p-4">
                <span className="text-4xl mb-2 block">✍️</span>
                <p className="text-xs text-slate-500 font-medium">
                  Sample Journal Report & Manuscript Preparation Visual
                </p>
              </div>
            </div>
          </div>

          {/* Right Column Content */}
          <div className="md:col-span-7 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d3b44] mb-3">
                Journal Selection Sample Work
              </h2>
              <button className="bg-black text-white hover:bg-slate-800 text-xs font-bold py-2.5 px-8 rounded-full transition-all">
                Discover More
              </button>
            </div>

            <div className="pt-2 border-t border-emerald-100">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Download the full Report Now
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Explore our{" "}
                <a
                  href="#"
                  className="text-cyan-600 font-medium hover:underline"
                >
                  Journal Selection
                </a>{" "}
                sample work tailored to your manuscript’s scope, indexing
                requirements, and impact factor goals.
              </p>
              <button className="bg-black text-white hover:bg-slate-800 text-xs font-bold py-2.5 px-8 rounded-full transition-all">
                Discover More
              </button>
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
          <a href="#" className="text-cyan-600 hover:underline">
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
            <div className="w-48 h-36 border border-slate-200 rounded-md p-4 flex flex-col items-center justify-center bg-slate-50 shadow-sm">
              <div className="text-red-700 font-extrabold text-sm text-center leading-tight">
                ▲ American Diabetes Association.
              </div>
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
              <a href="#" className="text-red-700 hover:underline">
                Submit your Report
              </a>
              <a href="#" className="text-red-700 hover:underline">
                Guide for author
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 3: FREQUENTLY ASKED QUESTIONS (FAQ)          */}
      {/* ---------------------------------------------------- */}
      <section className="py-12 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d3b44] mb-8">
          Frequently Asked Questions – Journal Selection Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 items-start">
          {/* Left Column FAQs (1 to 6) */}
          <div className="space-y-4">
            {faqs.slice(0, 6).map((faq) => (
              <div
                key={faq.id}
                className="border border-slate-300 rounded-sm overflow-hidden transition-all duration-200 bg-white"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-4 py-3.5 flex justify-between items-center font-bold text-xs sm:text-sm text-slate-800 hover:bg-slate-50 transition-colors"
                >
                  <span className="pr-2">{faq.question}</span>
                  <span className="text-base font-bold text-slate-600 shrink-0">
                    {openFaq === faq.id ? "−" : "+"}
                  </span>
                </button>

                {openFaq === faq.id && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-100 leading-relaxed bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column FAQs (7 to 11) */}
          <div className="space-y-4">
            {faqs.slice(6, 11).map((faq) => (
              <div
                key={faq.id}
                className="border border-slate-300 rounded-sm overflow-hidden transition-all duration-200 bg-white"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-4 py-3.5 flex justify-between items-center font-bold text-xs sm:text-sm text-slate-800 hover:bg-slate-50 transition-colors"
                >
                  <span className="pr-2">{faq.question}</span>
                  <span className="text-base font-bold text-slate-600 shrink-0">
                    {openFaq === faq.id ? "−" : "+"}
                  </span>
                </button>

                {openFaq === faq.id && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-100 leading-relaxed bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
