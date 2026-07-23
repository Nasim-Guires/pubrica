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
    <section className="w-full bg-[#f8fafc] py-12 text-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0d3b36] mb-3">
          Our Services
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-4xl mb-8 leading-relaxed">
          We help authors transform their manuscripts into polished, compelling,
          and publication-ready books. Whether you are a first-time writer or an
          experienced author, our expert editors provide meticulous attention to
          detail, ensuring clarity, coherence, and impact on every page.
        </p>

        {/* Vertical Tabs & Content Container */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[320px]">
          {/* Tab Sidebar */}
          <div className="md:col-span-4 bg-[#f1f5f9] border-r border-slate-200 divide-y divide-slate-200">
            {servicesData.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-5 py-4 text-xs sm:text-sm font-semibold transition-colors flex items-center min-h-[64px] whitespace-pre-line ${
                    isActive
                      ? "bg-[#0d3b36] text-white"
                      : "bg-[#e2e8f0]/60 text-slate-700 hover:bg-slate-200/80"
                  }`}
                >
                  {tab.tabLabel}
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <div className="md:col-span-8 p-6 sm:p-8 flex flex-col justify-start">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-5">
              {currentService.title}
            </h3>
            {currentService.content}
          </div>
        </div>
      </div>
    </section>
  );
};
