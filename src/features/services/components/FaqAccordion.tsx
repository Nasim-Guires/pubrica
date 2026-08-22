"use client";

import React, { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ faqData }: { faqData: FaqItem[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="border border-gray-300 rounded-sm divide-y divide-gray-200">
      {faqData.map((faq, index) => (
        <div key={index} className="bg-white">
          <button
            onClick={() => toggleFaq(index)}
            className="w-full text-left p-3 md:p-4 text-xs md:text-sm font-bold text-gray-800 flex justify-between items-center hover:bg-gray-50 focus:outline-none"
          >
            <span>{faq.q}</span>
            <span className="text-gray-500 ml-2">
              {openFaq === index ? "▲" : "▼"}
            </span>
          </button>
          {openFaq === index && (
            <div className="p-3 md:p-4 text-xs md:text-sm text-gray-600 bg-gray-50 border-t border-gray-100">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}