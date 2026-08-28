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
      <section className="py-7 px-6 max-w-5xl mx-auto text-center border-t border-gray-100">
        <h2 className="text-3xl font-bold mb-4 text-[#0f2824]">{authorSectionTitle}</h2>
        <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto mb-12 leading-relaxed">
          {authorSectionSubtitle}
        </p>

        <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm text-left flex flex-col md:flex-row gap-8 items-center">
          <div className="relative w-full md:w-[280px] h-[360px] flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden shadow-inner border border-gray-100">
            <Image 
              src={journalCoverImage} 
              alt="Journal of Biotechnology cover" 
              fill
              sizes="(max-width: 768px) 100vw, 280px"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="flex flex-col justify-center space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0f2824] leading-snug">
              Paper Title: <span className="font-normal text-gray-800">{paperTitle}</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              <strong className="text-gray-800">Author:</strong> {paperAuthors}
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              <strong className="text-gray-800">Journal Name:</strong> {journalName}
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              <strong className="text-gray-800">Publisher:</strong> {publisher}
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              <strong className="text-gray-800">Impact factor:</strong> {impactFactor}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Our Expert Biotechnology Editors Section */}
      <section className="py-7 px-6 max-w-6xl mx-auto border-t border-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#0f2824]">{editorsSectionTitle}</h2>
          <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            {editorsSectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {editors.map((editor, index) => (
            <div key={index} className="bg-[#eaf4f2]/60 border border-[#d3e5e1] rounded-2xl p-6 shadow-sm flex flex-col justify-between">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md flex-shrink-0">
                  <Image 
                    src={editor.imageSrc} 
                    alt={editor.name}
                    fill
                    sizes="64px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-base text-[#0f2824]">{editor.name}</h3>
                    <div className="relative w-5 h-3.5 overflow-hidden rounded-sm shadow-sm">
                      <Image 
                        src={editor.flagSrc} 
                        alt="Country flag" 
                        fill 
                        sizes="20px"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-[#b91c1c]">{editor.title}</p>
                </div>
              </div>
              <div className="border-t border-[#d3e5e1]/60 pt-4 flex justify-between text-xs font-medium text-gray-700">
                <span>{editor.experience}</span>
                <span>{editor.manuscripts}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}