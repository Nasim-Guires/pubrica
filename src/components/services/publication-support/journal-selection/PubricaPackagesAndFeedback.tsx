"use client";

import React from "react";

export default function PubricaPackagesAndFeedback() {
  return (
    <div className="w-full font-sans bg-[#f8fafc]">
      {/* ---------------------------------------------------- */}
      {/* SECTION 1: OUR PACKAGES                              */}
      {/* ---------------------------------------------------- */}
      <section className="py-14 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#0d3b44] text-center mb-10">
          Our Packages
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* CARD 1: STANDARD */}
          <div className="bg-[#c2d3cd]/50 rounded-xl overflow-hidden shadow-sm border border-slate-200 flex flex-col justify-between">
            <div>
              {/* Header Badge */}
              <div className="bg-white p-5 border-b border-slate-200 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 font-extrabold text-xl flex items-center justify-center border border-amber-300 shadow-inner shrink-0">
                  S
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 tracking-tight">
                    Standard
                  </h3>
                  <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                    High-End Publication Support + Rapid Technical Review
                  </p>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 space-y-6 text-xs sm:text-sm text-slate-700">
                <div>
                  <p className="font-bold text-slate-900 flex items-center gap-2 mb-1">
                    <span className="text-slate-900">➔</span> Ideal for:
                  </p>
                  <p className="pl-5 text-slate-600 leading-relaxed">
                    Authors seeking expert journal advice in determining the
                    best fit for their manuscript.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-slate-900 flex items-center gap-2 mb-1">
                    <span className="text-slate-900">➔</span> Includes:
                  </p>
                  <ul className="pl-5 space-y-2 text-slate-600 leading-relaxed">
                    <li>
                      3 Curated Journal Recommendations (Scopus/SCI/PubMed
                      aligned) based on your research scope and goals.
                    </li>
                    <li>
                      Summary Report with journal aims, scope, acceptance rates,
                      and author guidelines.
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-bold text-slate-900 flex items-center gap-2 mb-1">
                    <span className="text-slate-900">➔</span> Optional Add-ons:
                  </p>
                  <p className="pl-5 text-slate-600 leading-relaxed">
                    Impact Factor & Indexing.
                    <br />
                    Open Access vs Subscription Journal Consultations.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer / Turnaround */}
            <div className="p-6 pt-0 text-xs sm:text-sm text-slate-700">
              <p className="font-bold text-slate-900 flex items-center gap-2">
                <span className="text-slate-900">➔</span> Turnaround:
              </p>
              <p className="pl-5 font-medium text-slate-800">5 working days.</p>
            </div>
          </div>

          {/* CARD 2: ADVANCED */}
          <div className="bg-[#ccaecb]/50 rounded-xl overflow-hidden shadow-sm border border-slate-200 flex flex-col justify-between">
            <div>
              {/* Header Badge */}
              <div className="bg-white p-5 border-b border-slate-200 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 font-extrabold text-xl flex items-center justify-center border border-emerald-300 shadow-inner shrink-0">
                  A
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 tracking-tight">
                    ADVANCED
                  </h3>
                  <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                    High-End Publication Support + Rapid Technical Review
                  </p>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 space-y-6 text-xs sm:text-sm text-slate-700">
                <div>
                  <p className="font-bold text-slate-900 flex items-center gap-2 mb-1">
                    <span className="text-slate-900">➔</span> Ideal for:
                  </p>
                  <p className="pl-5 text-slate-600 leading-relaxed">
                    Researchers who want the journal selection and the
                    manuscript preparation for a clear and timely submission
                    process.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-slate-900 flex items-center gap-2 mb-1">
                    <span className="text-slate-900">➔</span> Includes:
                  </p>
                  <ul className="pl-5 space-y-2 text-slate-600 leading-relaxed">
                    <li>
                      All deliverables are provided in the Standard Package.
                    </li>
                    <li>
                      Manuscript Formatting for the selected journal’s
                      guidelines.
                    </li>
                    <li>
                      Customized Cover Letter draft as per the journal
                      guidelines.
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-bold text-slate-900 flex items-center gap-2 mb-1">
                    <span className="text-slate-900">➔</span> Optional Add-ons:
                  </p>
                  <p className="pl-5 text-slate-600 leading-relaxed">
                    Impact Factor & Indexing Analysis.
                    <br />
                    <br />
                    Open Access vs Subscription Journal Consultation.
                    <br />
                    <br />
                    Language Editing & Proofreading.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer / Turnaround */}
            <div className="p-6 pt-0 text-xs sm:text-sm text-slate-700">
              <p className="font-bold text-slate-900 flex items-center gap-2">
                <span className="text-slate-900">➔</span> Turnaround:
              </p>
              <p className="pl-5 font-medium text-slate-800">
                7–8 working days.
              </p>
            </div>
          </div>

          {/* CARD 3: ELITE */}
          <div className="bg-[#cfb288]/50 rounded-xl overflow-hidden shadow-sm border border-slate-200 flex flex-col justify-between">
            <div>
              {/* Header Badge */}
              <div className="bg-white p-5 border-b border-slate-200 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 font-extrabold text-xl flex items-center justify-center border border-rose-300 shadow-inner shrink-0">
                  E
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 tracking-tight">
                    ELITE
                  </h3>
                  <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                    High-End Publication Support + Rapid Technical Review
                  </p>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 space-y-6 text-xs sm:text-sm text-slate-700">
                <div>
                  <p className="font-bold text-slate-900 flex items-center gap-2 mb-1">
                    <span className="text-slate-900">➔</span> Ideal for:
                  </p>
                  <p className="pl-5 text-slate-600 leading-relaxed">
                    Authors requiring complete support from journal selection
                    through to submission and peer review.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-slate-900 flex items-center gap-2 mb-1">
                    <span className="text-slate-900">➔</span> Includes:
                  </p>
                  <ul className="pl-5 space-y-2 text-slate-600 leading-relaxed">
                    <li>All of the deliverables in the Advanced Package</li>
                    <li>
                      Submission Support, including tracking and communication
                      management
                    </li>
                    <li>
                      Peer-Review Rebuttal Support with expert response drafting
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-bold text-slate-900 flex items-center gap-2 mb-1">
                    <span className="text-slate-900">➔</span> Optional Add-ons:
                  </p>
                  <p className="pl-5 text-slate-600 leading-relaxed">
                    Impact Factor & Indexing Analysis.
                    <br />
                    <br />
                    Open Access vs Subscription Journal Consultation.
                    <br />
                    <br />
                    Language Editing & Proofreading.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer / Turnaround */}
            <div className="p-6 pt-0 text-xs sm:text-sm text-slate-700">
              <p className="font-bold text-slate-900 flex items-center gap-2">
                <span className="text-slate-900">➔</span> Turnaround:
              </p>
              <p className="pl-5 font-medium text-slate-800">
                10–12 working days.
              </p>
            </div>
          </div>
        </div>

        {/* Call To Action Button */}
        <div className="mt-10 text-center">
          <button className="bg-[#b80000] hover:bg-[#8f0000] text-white font-bold text-sm sm:text-base py-3.5 px-12 rounded-lg shadow-md transition-colors duration-200">
            Get a Free Quote
          </button>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 2: TESTIMONIALS                              */}
      {/* ---------------------------------------------------- */}
      <section className="py-14 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#0d3b44] text-left mb-8">
          Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Testimonial 1 */}
          <div className="bg-[#1e4339] text-white p-6 sm:p-8 rounded-lg shadow-md flex justify-between gap-4 items-start">
            <div className="space-y-4 flex-1">
              <p className="text-xs sm:text-sm leading-relaxed text-slate-100 italic">
                &ldquo;I had a strict deadline for the publication I needed for
                my grant proposal. Pubrica&apos;s journal selection service
                identified appropriate indexed fast-track journals. My
                manuscript was accepted within 7 weeks. Outstanding
                service.&rdquo;
              </p>
              <div>
                <p className="font-bold text-xs sm:text-sm uppercase tracking-wide">
                  DR. DAVID MENSAH
                </p>
                <p className="text-[11px] text-slate-300 italic">
                  - Independent Researcher - Public Health
                </p>
              </div>
            </div>

            {/* Journal Cover Graphic Placeholder */}
            <div className="w-20 sm:w-24 h-28 sm:h-32 bg-emerald-900 border border-emerald-700 rounded shadow shrink-0 flex flex-col justify-between p-2 text-center text-[8px] font-bold uppercase tracking-tighter">
              <span className="text-slate-300">
                New England Journal of Medicine
              </span>
              <span className="bg-emerald-800 text-white py-1 rounded">
                Clinical Practice
              </span>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-[#1e4339] text-white p-6 sm:p-8 rounded-lg shadow-md flex justify-between gap-4 items-start">
            <div className="space-y-4 flex-1">
              <p className="text-xs sm:text-sm leading-relaxed text-slate-100 italic">
                &ldquo;Pubrica&apos;s journal discovery team helped me quickly
                identify journals aligned with the scope and significance of my
                manuscript. The database filtering and editorial insights saved
                months of guessing. I am now published in a Q2 Journal based on
                Scopus. Highly recommended!&rdquo;
              </p>
              <div>
                <p className="font-bold text-xs sm:text-sm uppercase tracking-wide">
                  DR. ANJALI VERMA, PHD
                </p>
                <p className="text-[11px] text-slate-300 italic">
                  - Scholar - Life Sciences
                </p>
              </div>
            </div>

            {/* Journal Cover Graphic Placeholder */}
            <div className="w-20 sm:w-24 h-28 sm:h-32 bg-emerald-900 border border-emerald-700 rounded shadow shrink-0 flex flex-col justify-between p-2 text-center text-[8px] font-bold uppercase tracking-tighter">
              <span className="text-slate-300">
                New England Journal of Medicine
              </span>
              <span className="bg-emerald-800 text-white py-1 rounded">
                Clinical Practice
              </span>
            </div>
          </div>
        </div>

        {/* Carousel Pagination Indicators */}
        <div className="flex justify-center items-center gap-2 mt-6">
          <span className="w-2.5 h-2.5 rounded-full border border-slate-600 bg-transparent cursor-pointer" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-800 cursor-pointer" />
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 3: CLIENT FEEDBACK                           */}
      {/* ---------------------------------------------------- */}
      <section className="py-14 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#0d3b44] text-left mb-3">
          Client Feedback
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 max-w-4xl leading-relaxed mb-10">
          We prioritize open, timely, and transparent communications to keep the
          client informed through every stage of their project. Using a
          quality-driven approach guarantees precise feedback with a
          collaborative support framework for their research to work!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Plagiarism Report */}
          <div className="flex flex-col items-center">
            <div className="w-full bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden h-48 flex items-center justify-center p-4">
              <div className="w-full space-y-3 text-[10px] text-slate-500">
                <div className="font-bold text-slate-700 text-xs">
                  2% Matches
                </div>
                <div className="space-y-1">
                  <span className="px-2 py-0.5 bg-rose-500 text-white rounded-full text-[9px]">
                    1 Internet
                  </span>
                  <div className="h-1 bg-slate-100 rounded w-full"></div>
                </div>
                <div className="space-y-1">
                  <span className="px-2 py-0.5 bg-sky-500 text-white rounded-full text-[9px]">
                    2 Internet
                  </span>
                  <div className="h-1 bg-slate-100 rounded w-3/4"></div>
                </div>
                <div className="space-y-1">
                  <span className="px-2 py-0.5 bg-emerald-500 text-white rounded-full text-[9px]">
                    3 Internet
                  </span>
                  <div className="h-1 bg-slate-100 rounded w-1/2"></div>
                </div>
              </div>
            </div>
            <p className="mt-3 font-semibold text-slate-800 text-xs sm:text-sm text-center">
              Plagiarism Report
            </p>
          </div>

          {/* Card 2: ERP System */}
          <div className="flex flex-col items-center">
            <div className="w-full bg-[#1e293b] border border-slate-200 rounded-lg shadow-sm overflow-hidden h-48 flex items-center justify-center p-2 text-slate-300 text-[10px]">
              <div className="w-full h-full bg-[#0f172a] rounded p-2 flex flex-col justify-between">
                <div className="flex justify-between border-b border-slate-700 pb-1 font-mono text-[9px]">
                  <span>Dashboard / Projects</span>
                  <span className="text-emerald-400">● Active</span>
                </div>
                <div className="space-y-1 font-mono">
                  <div className="bg-slate-800 p-1 rounded">
                    Task: Literature Gap Review
                  </div>
                  <div className="bg-slate-800 p-1 rounded">
                    Status: In Review
                  </div>
                </div>
                <div className="text-right text-[8px] text-slate-500">
                  Pubrica ERP v2.4
                </div>
              </div>
            </div>
            <p className="mt-3 font-semibold text-slate-800 text-xs sm:text-sm text-center">
              Communication through ERP system
            </p>
          </div>

          {/* Card 3: WhatsApp */}
          <div className="flex flex-col items-center">
            <div className="w-full bg-[#efeae2] border border-slate-200 rounded-lg shadow-sm overflow-hidden h-48 p-3 flex flex-col justify-between">
              <div className="bg-[#075e54] text-white p-2 rounded text-[10px] flex justify-between items-center">
                <span>Alice Om</span>
                <span className="text-[8px] text-emerald-200">Online</span>
              </div>
              <div className="space-y-2 text-[9px]">
                <div className="bg-white p-2 rounded-lg max-w-[80%] shadow-sm text-slate-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div className="bg-[#dcf8c6] p-2 rounded-lg max-w-[80%] ml-auto shadow-sm text-slate-800">
                  Lorem ipsum dolor sit amet, updates shared!
                </div>
              </div>
              <div className="bg-white p-1 rounded-full text-[9px] text-slate-400 px-3">
                Type a message...
              </div>
            </div>
            <p className="mt-3 font-semibold text-slate-800 text-xs sm:text-sm text-center">
              Communication through Whatsapp
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
