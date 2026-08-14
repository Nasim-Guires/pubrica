"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export const EditingTranslationManuscriptEditingWhatWeDo: React.FC = () => {
  // Manage which accordion item is currently open (default to 'item-1')
  const [openItem, setOpenItem] = useState<string | null>("item-1");

  const toggleAccordion = (id: string) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  const accordionData: AccordionItem[] = [
    {
      id: "item-1",
      title: "Professional Manuscript Editing Services",
      content: (
        <p>
          At Pubrica, we engage our panel of experts to develop and refine
          manuscripts accurately. From editing and proofreading to rewriting and
          translation, our editing services for research papers are engineered
          to make your manuscript more lucid and impactful.
        </p>
      ),
    },
    {
      id: "item-2",
      title: "Expert Manuscript Preparation",
      content: (
        <p>
          Our experienced writers have collaborated with numerous prominent
          journals across medical and scientific disciplines. We specialize in
          making complex research findings into well-structured,
          publication-ready manuscripts.
        </p>
      ),
    },
    {
      id: "item-3",
      title: "Customized Editing Services",
      content: (
        <p>
          We provide tailored editing solutions, ranging from complete language
          and grammar editing to full manuscript rewriting and{" "}
          <Link
            href="/services/editing-and-translation/translation"
            className="text-sky-600 hover:underline"
          >
            professional translation for research
          </Link>
          . Our team is equipped with the expertise required to prepare a
          manuscript that stands out.
        </p>
      ),
    },
    {
      id: "item-4",
      title: "Enhanced Publication Readiness",
      content: (
        <p>
          We ensure that your manuscript meets scholarly publishing standards
          through meticulous manuscript proofreading services, improving clarity
          and flow for high-impact journals.
        </p>
      ),
    },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 sm:mb-12">
          What We Do
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: What We Do collage */}
          <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[460px] h-[360px] sm:h-[420px]">
              <div className="absolute top-0 left-12 w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] bg-slate-100 rounded-full -z-0" />
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-md z-10">
                <Image
                  src="/images/editing-and-translation/manuscript-editing/what-we-do-.png"
                  alt="What we do in manuscript editing"
                  fill
                  sizes="(max-width: 768px) 90vw, 40vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Text & Interactive Accordion */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base sm:text-lg leading-relaxed text-slate-700">
              At Pubrica, our expert team collaborates with medical and
              scientific researchers worldwide, crafting and refining
              manuscripts that clearly and coherently present your findings. Our
              comprehensive prepublication services include editing,{" "}
              <Link
                href="/services/editing-and-translation/proofreading"
                className="text-sky-600 hover:underline"
              >
                proofreading
              </Link>
              , rewriting, and translation, specifically designed to enhance the
              clarity and impact of your manuscript.
            </p>

            {/* Accordion Component List */}
            <div className="pt-4 border-t border-slate-200 divide-y divide-slate-200">
              {accordionData.map((item) => {
                const isOpen = openItem === item.id;
                return (
                  <div key={item.id} className="py-4">
                    <button
                      type="button"
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full flex items-center justify-between text-left focus:outline-none group"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-slate-700 font-medium text-lg w-4 text-center select-none">
                          {isOpen ? "−" : "+"}
                        </span>
                        <h3 className="text-base sm:text-lg font-semibold text-slate-800 group-hover:text-sky-600 transition-colors">
                          {item.title}
                        </h3>
                      </div>
                    </button>

                    {/* Expandable Content Area */}
                    {isOpen && (
                      <div className="mt-3 pl-7 pr-2 text-sm sm:text-base text-slate-600 leading-relaxed transition-all duration-200">
                        {item.content}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
