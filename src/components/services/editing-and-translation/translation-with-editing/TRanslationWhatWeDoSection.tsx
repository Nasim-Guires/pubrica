"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

const accordionData: AccordionItem[] = [
  {
    id: "accurate-translation",
    title: "Accurate and Contextual Translation",
    content: (
      <p>
        Our translators are experts in both the source and target languages,
        providing translations that accurately reflect the original text while
        considering contextual nuances and technical terminology.
      </p>
    ),
  },
  {
    id: "integrated-editing",
    title: "Integrated Editing Process",
    content: (
      <p>
        Following translation, the document undergoes a rigorous editing process
        to refine the language, improve clarity, and ensure that it meets the
        stylistic and formatting requirements of the intended publication or
        audience.
      </p>
    ),
  },
  {
    id: "subject-matter",
    title: "Subject-Matter Expertise",
    content: (
      <p>
        Our team includes translators and editors with specialized knowledge in
        various fields, ensuring that all translated materials are correct in
        terms of technical jargon and industry-specific language.
      </p>
    ),
  },
  {
    id: "quality-assurance",
    title: "Quality Assurance",
    content: (
      <p>
        Each translation project is subjected to a comprehensive review to catch
        any discrepancies or linguistic inaccuracies, guaranteeing a
        high-quality final product.
      </p>
    ),
  },
  {
    id: "timely-delivery",
    title: "Timely Delivery",
    content: (
      <p>
        Understanding the importance of deadlines, we commit to delivering your
        translated and edited documents within the agreed timeframe, helping you
        meet your publication or submission schedules.
      </p>
    ),
  },
  {
    id: "diverse-content",
    title: "Support for Diverse Content Types",
    content: (
      <p>
        Whether it&apos;s academic papers,{" "}
        <a href="#" className="text-[#0056B3] hover:underline">
          research articles
        </a>
        ,{" "}
        <a href="#" className="text-[#0056B3] hover:underline">
          clinical reports
        </a>
        , or any other scientific or professional document, Pubrica&apos;s
        Translation with Editing Services are tailored to provide exceptional
        results across various content types.
      </p>
    ),
  },
];

export default function WhatWeDoSection() {
  // Store array of expanded item IDs to support multiple open sections simultaneously
  const [openItems, setOpenItems] = useState<string[]>([
    "accurate-translation",
    "integrated-editing",
  ]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id],
    );
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 text-slate-800 font-sans">
      {/* Title and Intro Paragraph */}
      <div className="mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#003B46] mb-4">
          What We Do
        </h2>
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed max-w-5xl">
          Pubrica offers Translation with Editing Services to ensure that
          translated documents maintain the accuracy, clarity, and professional
          tone required for academic and scientific publications. This combined
          service is essential for authors and researchers who need their work
          translated into English from another language, while also ensuring
          that the final document adheres to the high standards of their target
          audience.
        </p>
      </div>

      {/* Main Content Layout: Image + Accordion List */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Workspace / Desk Image */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-md lg:max-w-none rounded-lg overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80"
              alt="Person working at computer with manuscripts"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right Side: Interactive Accordion List */}
        <div className="lg:col-span-7 border-t border-[#003B46]/30 divide-y divide-[#003B46]/30">
          {accordionData.map((item) => {
            const isOpen = openItems.includes(item.id);
            return (
              <div key={item.id} className="py-3">
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between text-left py-1 group focus:outline-none"
                >
                  <span className="font-bold text-[#003B46] text-sm sm:text-base pr-4 group-hover:text-[#00272F] transition-colors">
                    {item.title}
                  </span>
                  <div className="text-[#003B46] shrink-0 font-bold">
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-3 pb-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {item.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
