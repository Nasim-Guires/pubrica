'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';

interface AudienceItem {
  id: number;
  title: string;
  points: React.ReactNode[];
}

const audienceData: AudienceItem[] = [
  {
    id: 1,
    title: 'Academic Researchers and Scholars',
    points: [
      'Formatting research articles for journal guidelines (APA, MLA, Chicago, IEEE, etc.)',
      'Structuring manuscripts for submission to peer-reviewed journals',
      'Adhering to publisher-specific formatting and style requirements',
      'Formatting figures, tables, citations, and references for the journal',
    ],
  },
  {
    id: 2,
    title: "PhD and Master's Students",
    points: [
      'Formatting dissertations and theses for university submission',
      'Converting thesis chapters into journal-ready manuscripts with proper formatting',
      'Preparing resubmission documents based on examiner feedback',
      'Assisting with formatting of appendices, bibliography, and supplementary materials',
    ],
  },
  {
    id: 3,
    title: 'Scientific Authors and Medical Writers',
    points: [
      'Formatting manuscripts for submission to medical or scientific journals.',
      (
        <>
          Adherence to guidelines like{' '}
          <a href="https://www.consort-statement.org/" target="_blank" rel="noopener noreferrer" className="text-[#3b82f6] hover:underline">CONSORT</a>,{' '}
          <a href="https://www.prisma-statement.org/" target="_blank" rel="noopener noreferrer" className="text-[#3b82f6] hover:underline">PRISMA</a>, or{' '}
          <a href="https://www.icmje.org/" target="_blank" rel="noopener noreferrer" className="text-[#3b82f6] hover:underline">ICMJE</a>.
        </>
      ),
      'Formatting of complex tables, figures, and supplementary materials.',
    ],
  },
  {
    id: 4,
    title: 'Research Institutions and Universities',
    points: [
      'Formatting manuscripts to meet publisher templates and style sheets',
      'Ensuring consistency in fonts, headings, margins, and layout',
      'Preparing final proofs and publication-ready documents',
      'Formatting multi-author manuscripts and collaborative works',
    ],
  },
];

export default function WhatWeDoAndWhoWeServe() {
  // Track open state for each tab independently (defaults to all open like the screenshot)
  const [openState, setOpenState] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: true,
    4: true,
  });

  const toggleTab = (id: number) => {
    setOpenState((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="w-full bg-white py-6 font-sans text-gray-800 antialiased">
      <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-16">
        
        {/* ============================================================ */}
        {/* SECTION 1: WHAT WE DO                                       */}
        {/* ============================================================ */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0c3830] mb-3">
            What We Do
          </h2>
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed max-w-4xl mb-6">
            With Pubrica&apos;s Academic{' '}
            <Link href="/academy/formatting-service/ama-journal-article-formatting-guide" className="text-[#3b82f6] hover:underline">
              Formatting Service
            </Link>
            , we will ensure that your manuscript meets the journal&apos;s specifications. Our services are designed to enhance the presentation by following the published standards of academic and scientific publication.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Bullet Points */}
            <div className="lg:col-span-7 space-y-4">
              <ul className="space-y-3 text-xs md:text-sm text-gray-700 leading-relaxed">
                <li className="flex items-start">
                  <span className="text-[#dc2626] mr-2 text-base font-bold leading-none">•</span>
                  <span>
                    <strong className="font-bold text-gray-900">research paper layout design</strong> Our experts carefully prepare your manuscript to meet the formatting guidelines of your intended journal. This involves reviewing references, lists, tables, graphics, and images to make sure all formatting is correct. This is especially beneficial for{' '}
                    <Link href="/services/physician-writing-services/physician-manuscripts" className="text-[#3b82f6] ">
                      physician manuscripts
                    </Link>{' '}
                    that require compliance with clinical publication protocols.
                  </span>
                </li>

                <li className="flex items-start">
                  <span className="text-[#dc2626] mr-2 text-base font-bold leading-none">•</span>
                  <span>
                    <strong className="font-bold text-gray-900">Expertise in Citation Styles:</strong> With expertise in many different citation styles (including Harvard, APA, MLA, and Chicago), our experienced editors will ensure your manuscript follows the relevant academic conventions and style guides. This is particularly important for discovering and managing potential{' '}
                    <Link href="/services/publication-support/plagiarism-services" className="text-[#3b82f6] ">
                      plagiarism
                    </Link>{' '}
                    risks concerning incorrect citations or paraphrasing.
                  </span>
                </li>

                <li className="flex items-start">
                  <span className="text-[#dc2626] mr-2 text-base font-bold leading-none">•</span>
                  <span>
                    <strong className="font-bold text-gray-900">Adherence to Journal Guidelines:</strong> We adhere to the journal&apos;s &quot;instructions to authors&quot; to ensure that even the most minute details (font size, heading style) are aligned with the journal&apos;s expectations, which is important for{' '}
                    <Link href="/services/research-services/grant-writing" className="text-[#3b82f6]">
                      grant writing
                    </Link>{' '}
                    when submission accuracy can impact funding decisions.
                  </span>
                </li>

                <li className="flex items-start">
                  <span className="text-[#dc2626] mr-2 text-base font-bold leading-none">•</span>
                  <span>
                    <strong className="font-bold text-gray-900">Error Elimination:</strong> By removing formatting errors and inconsistencies, we improve the readability and professionalism of your document, and in turn, increase the chances of acceptance. We also provide services for{' '}
                    <Link href="/services/physician-writing-services/physician-training" className="text-[#3b82f6]">
                      physician training
                    </Link>{' '}
                    documents, which assist authors in displaying the educational content with clarity and consistency.
                  </span>
                </li>

                <li className="flex items-start">
                  <span className="text-[#dc2626] mr-2 text-base font-bold leading-none">•</span>
                  <span>
                    <strong className="font-bold text-gray-900">Tailored Formatting Solutions:</strong> Whether you are preparing to submit a research paper, dissertation, or article, our{' '}
                    <Link href="/services/publication-support/journal-manuscript-formatting-services/manuscript-formatting-for-journal-submission" className="text-[#3b82f6] hover:underline">
                      formatting services
                    </Link>{' '}
                    are specific to the requirements of your document.
                  </span>
                </li>
              </ul>

              <p className="text-xs md:text-sm text-gray-700 leading-relaxed pt-2">
                Select Pubrica&apos;s Customized{' '}
                <Link href="/academy/formatting-service/how-to-write-research-paper-in-apa-format" className="text-[#3b82f6] ">
                  manuscript formatting
                </Link>{' '}
                solutions to present your manuscript in a clean, professional manner according to journal guidelines and optimize the chances of acceptance for publication. Contact us today to assist you with formatting your manuscript to ensure that it is formatted correctly and ready for submission.
              </p>

              {/* Call to Action Button */}
              <div className="pt-2">
                <GetFreeQuoteButton/>
              </div>
            </div>

            {/* Right Column: Graphic */}
            <div className="lg:col-span-5 flex justify-center relative py-4">
              <div className="relative w-full max-w-sm h-72 sm:h-80">
                <div className="absolute inset-0 bg-[#e2e8f0]/60 rounded-full transform -rotate-12 scale-90 -z-0"></div>
                <div className="absolute top-0 left-0 w-3/4 h-48 rounded-xl overflow-hidden shadow-md border-2 border-white z-10">
                  <Image
                    src="/images/publication-support/journal-manuscript-formatting-services/Manuscript-Formatting-Service-what-we-do.jpg"
                    alt="Reviewing academic documents"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* SECTION 2: WHO WE SERVE (INDEPENDENT ACCORDION COLUMNS)      */}
        {/* ============================================================ */}
        <div className="pt-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0c3830] mb-2">
            Who We Serve
          </h2>
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-6">
            Our Research paper{' '}
            <Link href="/academy/formatting-service/s-v-o-structure-academic-writing-conciseness" className="text-[#3b82f6] hover:underline">
              formatting service
            </Link>{' '}
            is designed to assist researchers, authors, and manufacturers in aligning their manuscripts with the precise guidelines of target journals, facilitating smoother submission processes and improving the chances of acceptance in Academic Researchers and Scholars.
          </p>

          {/* 4-Column Accordion Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {audienceData.map((item) => {
              const isOpen = openState[item.id] ?? false;

              return (
                <div key={item.id} className="flex flex-col space-y-4">
                  {/* Accordion Toggle Header */}
                  <button
                    type="button"
                    onClick={() => toggleTab(item.id)}
                    className="w-full flex items-center justify-between p-3.5 bg-[#f0fdf4] text-[#065f46] text-xs md:text-sm font-semibold rounded-xs border border-[#e6f4ea] hover:bg-[#e6f7ec] transition-colors cursor-pointer text-left h-full"
                  >
                    <span className="pr-2">{item.title}</span>
                    <span className="text-base font-bold shrink-0">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {/* Accordion Content Panel */}
                  {isOpen && (
                    <ul className="space-y-3 text-xs md:text-sm text-gray-700 pl-1 leading-relaxed">
                      {item.points.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-gray-800 mr-2 font-bold">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}