"use client";

import React, { useState } from "react";

interface ServiceTab {
  id: string;
  tabLabel: string;
  title: string;
  content: React.ReactNode;
}

export const EditingTranslationBookEditingServicesTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("developmental");

  const servicesData: ServiceTab[] = [
    {
      id: "developmental",
      tabLabel: "Developmental\nEditing",
      title: "Developmental Editing",
      content: (
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          For fiction books, the first phase of editing is developmental
          editing, where our editors are focused on the elements of
          storytelling, character development, inconsistencies in the plot, and
          loopholes. All this is done to ensure that your story flows smoothly
          and seamlessly. In nonfiction books, a developmental edit focuses on
          clarity, repetition, and references used.
        </p>
      ),
    },
    {
      id: "line",
      tabLabel: "Line Editing",
      title: "Line Editing",
      content: (
        <ul className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed list-disc pl-4 marker:text-slate-800">
          <li>
            Imagine your manuscript as a melody, and line editing as the
            fine-tuning that makes each note hit just right. Here, we go line by
            line, refining clunky sentences and awkward phrasing to create a
            harmonious flow from start to finish. It’s not just about grammar;
            it’s about rhythm, tone, and pacing.
          </li>
          <li>
            We make sure each sentence isn’t just doing its job but working in
            tandem with its neighbors to guide the reader smoothly through your
            story.
          </li>
        </ul>
      ),
    },
    {
      id: "copyediting",
      tabLabel: "Copyediting",
      title: "Copyediting",
      content: (
        <ul className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed list-disc pl-4 marker:text-slate-800">
          <li>
            Copyediting is the second phase of editing after your book has been
            developed for substantive errors.
          </li>
          <li>
            Our copyeditors focus on inconsistencies, word choice, sentence
            flow, and language to further enhance the overall structure of your
            book.
          </li>
          <li>
            At the end of copyediting, your book will be massively free from big
            errors and ready to get proofread.
          </li>
        </ul>
      ),
    },
    {
      id: "proofreading",
      tabLabel: "Proofreading",
      title: "Book Proofreading",
      content: (
        <ul className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed list-disc pl-4 marker:text-slate-800">
          <li>
            Following the major edits to your book draft, proofreading prepares
            your manuscript for publication, ensuring the manuscript is clean
            and polished while correcting small errors of punctuation, typos,
            spelling, language, and grammar, and providing your story with
            maximized flow.
          </li>
          <li>
            Our expert proofreaders have an eye for detail and catch each error
            attentively.
          </li>
        </ul>
      ),
    },
  ];

  const currentService =
    servicesData.find((s) => s.id === activeTab) || servicesData[0];

  return (
    <section className="w-full bg-[#f8fafc] py-10 sm:py-12 text-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="mb-7 sm:mb-9">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0d3b36] mb-2">
            Our Services
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            We help authors transform their manuscripts into polished, compelling,
            and publication-ready books. Whether you are a first-time writer or an
            experienced author, our expert editors provide meticulous attention to
            detail, ensuring clarity, coherence, and impact on every page.
          </p>
        </div>

        {/* Main Box */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">

          <div className="grid grid-cols-1 md:grid-cols-12">

            {/* Services Tabs */}
            <div
              className="
            md:col-span-4
            bg-[#f8fafc]
            border-b md:border-b-0 md:border-r
            border-slate-200
            p-3 sm:p-4
          "
            >
              <div className="grid grid-cols-2 md:grid-cols-1 gap-2">

                {servicesData.map((tab) => {
                  const isActive = activeTab === tab.id;

                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`
                    w-full
                    min-h-[52px] sm:min-h-[56px] md:min-h-[62px]
                    px-3 sm:px-4
                    py-3
                    rounded-lg
                    text-left
                    text-xs sm:text-sm
                    font-medium
                    leading-snug
                    transition-colors
                    duration-200
                    border
                    ${isActive
                          ? "bg-[#0d3b36] text-white border-[#0d3b36]"
                          : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-[#0d3b36]"
                        }
                  `}
                    >
                      {tab.tabLabel}
                    </button>
                  );
                })}

              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-8 p-5 sm:p-7 lg:p-9 bg-white">

              <h3 className="text-xl sm:text-2xl font-bold text-[#0d3b36] mb-4">
                {currentService.title}
              </h3>

              <div className="h-px bg-slate-100 mb-5" />

              <div className="text-sm sm:text-base text-slate-600 leading-7">
                {currentService.content}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
