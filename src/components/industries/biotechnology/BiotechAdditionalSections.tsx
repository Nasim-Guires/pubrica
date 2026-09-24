"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import WhereAuthorsPublish from '@/components/common/WhereAuthorsPublish';
import ExpertEditorsSection, { ExpertEditorItem } from '@/components/common/ExpertEditorsSection';

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

const expertEditors: ExpertEditorItem[] = [
  {
    name: "Dr. R. J M Pharm",
    degree: "PhD - Biotechnology",
    experience: "7 years of experience",
    manuscripts: "100+ manuscripts edited",
    avatar: "/images/industries/biotechnology/Dr.-R.-J-M-Pharm.webp",
    flag: "/images/country/gb.png",
  },
  {
    name: "Dr. Giles M Pharm",
    degree: "PhD - Biotechnology",
    experience: "5 Years of Experience",
    manuscripts: "100+ manuscripts edited",
    avatar: "/images/industries/biotechnology/Dr.-Giles-M-Pharm.webp",
    flag: "/images/country/us.png",
  },
  {
    name: "Dr. AD",
    degree: "PhD - Biotechnology",
    experience: "15 Years of Experience",
    manuscripts: "100+ manuscripts edited",
    avatar: "/images/industries/biotechnology/Dr.-AD.webp",
    flag: "/images/country/us.png",
  },
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
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="bg-white text-[#0f2824] w-full font-sans space-y-2">

      {/* 1. Why Pubrica For Biotechnology Section (Accordion Style) */}
      <section className="py-4 px-6 w-full bg-sky-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#0f2824]">{whyTitle}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 items-start">
            {whyItems.map((item, index) => {
              const isOpen = openIndices.includes(index);

              return (
                <div
                  key={index}
                  className={`bg-white border border-sky-100 rounded-2xl shadow-sm overflow-hidden transition-all text-left ${whyItems.length === 4 && index === 3 ? "lg:col-start-2" : ""
                    }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full py-2.5 px-4 flex items-center justify-between text-[#0f2824] font-semibold text-sm md:text-base focus:outline-none hover:bg-sky-50/50 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="relative w-7 h-7 flex-shrink-0">
                        {item.iconSrc ? (
                          <Image
                            src={item.iconSrc}
                            alt=""
                            fill
                            className="object-contain"
                            sizes="28px"
                          />
                        ) : null}
                      </div>
                      <span>{item.title}</span>
                    </div>
                    <svg
                      className={`w-4 h-4 text-gray-500 transform transition-transform duration-200 flex-shrink-0 ${isOpen ? "rotate-180" : ""
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-3 pt-1 text-gray-600 text-xs md:text-sm border-t border-sky-100 bg-sky-50/20 leading-relaxed">
                      {item.description}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Where Our Authors Publish Section */}
      <section className="py-2 max-w-5xl mx-auto px-4 border-t border-gray-100">
        <WhereAuthorsPublish
          title="Where Our Authors Publish"
          description="Our authors share Pubrica’s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
          publication={{
            imageSrc:
              "/images/industries/biotechnology/sample-works-2-1.webp",
            imageAlt: "Journal of Biotechnology Journal Cover",
            paperTitle:
              "Novel technologies and their applications in biotechnology and the life sciences.",
            author: "Deeni Y, Beccari T, Dundar M",
            journalName: "Journal of Biotechnology",
            publisher: "Elsevier",
            impactFactor: "3.9",
          }}
        />
      </section>

      {/* 3. Our Expert Biotechnology Editors Section */}
      <section className="py-2 max-w-6xl mx-auto px-4 border-t border-gray-100">
        <ExpertEditorsSection
          title="Our Expert Biotechnology Editors"
          description="Pubrica’s team of industry specialists offers unrivalled expertise and perspectives to provide complete solutions with precision and originality. Through a mix of both experience and specialization, they strive for excellence in everything they do."
          editors={expertEditors}
        />
      </section>

    </div>
  );
}