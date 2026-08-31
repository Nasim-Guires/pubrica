"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQAccordionItem {
  question: string;
  answer: React.ReactNode;
}

export default function FAQAccordion({
  title,
  items,
}: {
  title: string;
  items: FAQAccordionItem[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="my-6">
      <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 mt-8">{title}</h2>
      <div className="border border-slate-200 rounded-lg divide-y divide-slate-200 overflow-hidden">
        {items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className="bg-white">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left text-sm md:text-base font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`w-4 h-4 flex-shrink-0 text-slate-400 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-4 pb-4 text-xs md:text-sm text-slate-600 leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
