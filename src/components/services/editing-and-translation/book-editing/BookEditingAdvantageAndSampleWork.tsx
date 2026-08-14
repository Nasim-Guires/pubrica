"use client";

import React, { useState } from "react";
import Image from "next/image";

interface AdvantageAccordion {
  id: string;
  title: string;
  content: string;
}

export const BookEditingAdvantageAndSampleWork: React.FC = () => {
  // Store array of open accordion item IDs to allow toggling
  const [openAccordions, setOpenAccordions] = useState<string[]>([
    "expert-editors",
  ]);

  const toggleAccordion = (id: string) => {
    setOpenAccordions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const advantages: AdvantageAccordion[] = [
    {
      id: "expert-editors",
      title: "Expert Language Editors",
      content:
        "Chosen for their meticulous attention to detail, our expert language editors will turn your work into clean, grammatically correct, publication-ready books, with a native-English tone. Our language editors are also subject matter experts and will check the accuracy of terminology and conventions related to your book’s field.",
    },
    {
      id: "multiple-rounds",
      title: "Multiple Rounds of Editing",
      content:
        "You can have your manuscript reviewed multiple times at a price you can afford. We recommend that you use this service after you have made our editor’s suggestions, and you want to conduct a final check of your manuscript before submitting it to the publisher.",
    },
    {
      id: "complete-confidentiality",
      title: "Complete Confidentiality",
      content:
        "Are you worried about the safety of your unpublished work? We appreciate your concern; therefore, along with a secure online submission system, our language editors and experts sign a non-disclosure agreement. We would be happy to sign a confidentiality agreement with you to cover your interests as well.",
    },
    {
      id: "consultation-free-trial",
      title: "Consultation and Free Trial",
      content:
        "Do you have questions about what parts of your book need attention and qualitative changes? Our editing professionals and customer experience experts will clarify things and recommend appropriate services for you. You can also test out the quality of our service by requesting a Standard Book Editing trial of up to 1500 words at no charge.",
    },
  ];

  return (
    <div className="w-full bg-[#f8fafc] text-slate-800 py-12">
      {/* 1. Advantage Accordion Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0d3b36] mb-8">
          Pubrica Book Editing Advantage
        </h2>

        <div className="space-y-4">
          {advantages.map((item) => {
            const isOpen = openAccordions.includes(item.id);

            return (
              <div
                key={item.id}
                className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full bg-[#0d3b36] text-white px-6 py-4 flex items-center justify-start text-left text-sm sm:text-base font-bold transition-colors hover:bg-[#0a2e2a]"
                >
                  <span className="w-6 text-lg font-bold select-none">
                    {isOpen ? "–" : "+"}
                  </span>
                  <span>{item.title}</span>
                </button>

                {/* Accordion Body Content */}
                {isOpen && (
                  <div className="p-6 bg-white border-t border-slate-100">
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 2. Sample Work Showcase Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0d3b36] mb-3">
            Book Editing Services – Sample Work
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Refine your manuscript to perfection with Pubrica’s meticulous book
            editing services. Elevate your story with expert guidance and
            precise editorial polish.
          </p>
        </div>

        {/* Sample Work Preview Container */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-md overflow-hidden p-4 sm:p-8">
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] min-h-[350px] rounded-lg overflow-hidden border border-slate-100">
            <Image
              src="/images/editing-and-translation/book-editing/BOOK-EDITING-SERVICE-SAMPLE-WORK-1.png"
              alt="Checkout the Sample Work of Pubrica's Book Editing Service"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-contain"
              priority
            />
          </div>

          {/* Footer Copyright Text */}
          <div className="mt-8 pt-4 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-500 font-medium">
              Copyright © 2025 pubrica. No part of this document may be
              published without permission of the author
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
