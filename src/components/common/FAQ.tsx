"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  points?: string[];
}

interface FAQProps {
  title: string;
  faqs: FAQItem[];
}

export default function CommonFAQ({ title, faqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const useTwoColumns = faqs.length > 6;
  const mid = Math.ceil(faqs.length / 2);
  const leftFaqs = faqs.slice(0, mid);
  const rightFaqs = faqs.slice(mid);

  const renderFAQ = (faq: FAQItem, originalIndex: number, isLast: boolean) => {
    const isOpen = openIndex === originalIndex;

    return (
      <div
        key={originalIndex}
        className={`border-b border-gray-200 transition-colors duration-200 ${isLast ? "border-b-0" : ""
          }`}
      >
        <button
          onClick={() => setOpenIndex(isOpen ? null : originalIndex)}
          className="w-full flex justify-between items-center p-4 sm:p-5 bg-white hover:bg-slate-50 cursor-pointer text-left transition-colors font-poppins outline-none"
          aria-expanded={isOpen}
        >
          <span className="text-[17px] sm:text-[18px] font-bold text-[#0b3a57] pr-4 break-words leading-snug font-poppins">
            {faq.question}
          </span>

          <span className="text-xl sm:text-2xl font-bold text-[#0b3a57] shrink-0 font-poppins leading-none select-none">
            {isOpen ? "−" : "+"}
          </span>
        </button>

        {/* CSS-based smooth accordion container expanding to natural height */}
        <div
          className={`grid transition-[grid-template-rows,padding] duration-300 ease-in-out ${isOpen
              ? "grid-rows-[1fr] px-4 pb-5 sm:px-5 sm:pb-6 opacity-100"
              : "grid-rows-[0fr] px-4 pb-0 sm:px-5 opacity-0"
            }`}
        >
          <div className="overflow-hidden">
            <div className="text-[15px] sm:text-[16px] leading-[1.7] text-[#333] break-words font-poppins">
              <p className="m-0 mb-2.5 text-[15px] sm:text-[16px] font-poppins">
                {faq.answer}
              </p>
              {faq.points && faq.points.length > 0 && (
                <ul className="m-0 pl-5 list-disc text-[15px] sm:text-[16px] font-poppins space-y-1">
                  {faq.points.map((point, idx) => (
                    <li key={idx} className="font-poppins">
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="max-w-[1200px] my-8 sm:my-12 mx-auto px-4 sm:px-6 font-poppins text-[16px]">
      <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0b3a57] mb-6 sm:mb-8 tracking-tight font-poppins break-words">
        {title}
      </h2>

      {useTwoColumns ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full font-poppins items-start">
          <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
            {leftFaqs.map((faq, i) =>
              renderFAQ(faq, i, i === leftFaqs.length - 1)
            )}
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
            {rightFaqs.map((faq, i) =>
              renderFAQ(faq, i + mid, i === rightFaqs.length - 1)
            )}
          </div>
        </div>
      ) : (
        <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm w-full font-poppins">
          {faqs.map((faq, i) =>
            renderFAQ(faq, i, i === faqs.length - 1)
          )}
        </div>
      )}
    </section>
  );
}