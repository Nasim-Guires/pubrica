"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface WhyItem {
  title: string;
  description: string;
  iconSrc?: string;
}

interface EditorProfile {
  name: string;
  title: string;
  experience: string;
  manuscripts: string;
  imageSrc: string;
  flagSrc: string;
}

interface BiotechAdditionalSectionsProps {
  // Why Pubrica For Biotechnology Section
  whyTitle?: string;
  whyItems?: WhyItem[];

  // Where Our Authors Publish Section
  authorSectionTitle?: string;
  authorSectionSubtitle?: string;
  paperTitle?: string;
  paperAuthors?: string;
  journalName?: string;
  publisher?: string;
  impactFactor?: string;
  journalCoverImage?: string;

  // Our Expert Biotechnology Editors Section
  editorsSectionTitle?: string;
  editorsSectionSubtitle?: string;
  editors?: EditorProfile[];
}

const defaultWhyItems: WhyItem[] = [
  {
    title: 'End-to-End Solutions',
    iconSrc: '/images/industries/biotechnology/End-to-end-solutions-.webp',
    description: 'Support throughout the product lifecycle, from discovery to market access.'
  },
  {
    title: 'Global Expertise',
    iconSrc: '/images/industries/biotechnology/Global-expertise.webp',
    description: 'Experience with submissions and compliance across multiple regulatory authorities worldwide.'
  },
  {
    title: 'Tailored Approach',
    iconSrc: '/images/industries/biotechnology/Tailored-approach-.webp',
    description: 'Customized solutions aligned with your product, therapeutic area, and development stage.'
  },
  {
    title: 'Scientific Excellence',
    iconSrc: '/images/industries/biotechnology/scientific-excellence-.webp',
    description: 'Team of experienced scientists, medical writers, and regulatory specialists committed to quality and innovation.'
  }
];

const defaultEditors: EditorProfile[] = [
  {
    name: 'Dr. R. J M Pharm',
    title: 'PhD - Biotechnology',
    experience: '7 years of experience',
    manuscripts: '100+ manuscripts edited',
    imageSrc: '/images/industries/biotechnology/Dr.-R.-J-M-Pharm.webp',
    flagSrc: '/images/research-services/systematic-review/united-kingdom-.png'
  },
  {
    name: 'Dr. Giles M Pharm',
    title: 'PhD - Biotechnology',
    experience: '5 Years of Experience',
    manuscripts: '100+ manuscripts edited',
    imageSrc: '/images/industries/biotechnology/Dr.-Giles-M-Pharm.webp',
    flagSrc: '/images/editing-and-translation/book-editing/usa-.png'
  },
  {
    name: 'Dr. AD',
    title: 'PhD - Biotechnology',
    experience: '15 Years of Experience',
    manuscripts: '100+ manuscripts edited',
    imageSrc: '/images/industries/biotechnology/Dr.-AD.webp',
    flagSrc: '/images/editing-and-translation/book-editing/usa-.png'
  }
];

export default function BiotechAdditionalSections({
  whyTitle = 'Why Pubrica For Biotechnology',
  whyItems = defaultWhyItems,
  authorSectionTitle = 'Where Our Authors Publish',
  authorSectionSubtitle = 'Our authors share Pubrica’s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.',
  paperTitle = 'Novel technologies and their applications in biotechnology and the life sciences.',
  paperAuthors = 'Deeni Y, Beccari T, Dundar M',
  journalName = 'Journal of Biotechnology',
  publisher = 'Elsevier',
  impactFactor = '3.9',
  journalCoverImage = '/images/industries/biotechnology/sample-works-2-1.webp',
  editorsSectionTitle = 'Our Expert Biotechnology Editors',
  editorsSectionSubtitle = 'Pubrica’s team of industry specialists offers unrivalled expertise and perspectives to provide complete solutions with precision and originality. Through a mix of both experience and specialization, they strive for excellence in everything they do.',
  editors = defaultEditors
}: BiotechAdditionalSectionsProps) {
  // Track open/closed state for each accordion item independently, default to closed (null or all false)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white text-[#0f2824] w-full font-sans">

      {/* 1. Why Pubrica For Biotechnology Section (Accordion Style) */}
      <section className="py-7 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-[#0f2824]">{whyTitle}</h2>
        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {whyItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden transition-all text-left"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-4 px-6 flex items-center justify-between text-[#0f2824] font-semibold text-base focus:outline-none hover:bg-gray-50/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-8 h-8 flex-shrink-0">
                      {item.iconSrc ? <Image src={item.iconSrc} alt="" fill className="object-contain" sizes="32px" /> : null}
                    </div>
                    <span>{item.title}</span>
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-gray-600 text-sm border-t border-gray-100 bg-gray-50/30 leading-relaxed">
                    {item.description}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 2. Where Our Authors Publish Section */}

      <section className="py-12 max-w-5xl mx-auto px-4 border-t border-gray-100">
        <div className="text-left mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1b3b32] mb-3">
            {authorSectionTitle}
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            {authorSectionSubtitle}
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-[#fafcfa] border border-gray-100 rounded-xl p-6 md:p-8 shadow-sm grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-center">
            <div className="relative w-full h-[260px] rounded-lg overflow-hidden bg-white border border-gray-100 shadow-inner flex items-center justify-center p-2">
              <Image
                src={journalCoverImage}
                alt="Journal of Biotechnology cover"
                fill
                sizes="(max-width: 768px) 100vw, 200px"
                className="object-contain p-1"
              />
            </div>

            <div className="space-y-3 text-sm md:text-base text-gray-700">
              <div>
                <span className="font-bold text-gray-900">Paper Title: </span>
                <span className="text-gray-800">{paperTitle}</span>
              </div>

              <div>
                <span className="font-bold text-gray-900">Author: </span>
                <span>{paperAuthors}</span>
              </div>

              <div>
                <span className="font-bold text-gray-900">Journal Name: </span>
                <span className="text-[#1b3b32] font-semibold">
                  {journalName}
                </span>
              </div>

              <div>
                <span className="font-bold text-gray-900">Publisher: </span>
                <span>{publisher}</span>
              </div>

              <div>
                <span className="font-bold text-gray-900">Impact factor: </span>
                <span>{impactFactor}</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 3. Our Expert Biotechnology Editors Section */}

      <section className="py-12 max-w-6xl mx-auto px-4 border-t border-gray-100">
        <div className="text-left mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1b3b32] mb-3">
            {editorsSectionTitle}
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            {editorsSectionSubtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {editors.map((editor, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200/60 rounded-xl p-6 flex flex-col items-start shadow-sm hover:border-gray-300 transition-all"
            >
              <div className="flex items-center space-x-4 mb-4 w-full">
                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-100 shrink-0 border border-gray-100">
                  <Image
                    src={editor.imageSrc}
                    alt={editor.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-gray-900 text-base">
                      {editor.name}
                    </h3>

                    <div className="relative w-5 h-3.5 overflow-hidden rounded-sm">
                      <Image
                        src={editor.flagSrc}
                        alt="Country flag"
                        fill
                        sizes="20px"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <p className="text-xs text-[#1b3b32] font-semibold">
                    {editor.title}
                  </p>
                </div>
              </div>

              <div className="w-full space-y-1.5 text-xs text-gray-600 pt-3 border-t border-gray-100">
                <p>{editor.experience}</p>
                <p>{editor.manuscripts}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


    </div>
  );
}