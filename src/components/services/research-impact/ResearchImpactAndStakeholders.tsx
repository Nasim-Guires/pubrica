'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

// --- Types ---
interface ExpertiseItem {
  id: number;
  title: string;
  description: string;
}

interface StakeholderCard {
  id: number;
  title: string;
  imageUrl: string;
}

// --- Mock Data ---
const expertiseList: ExpertiseItem[] = [
  {
    id: 1,
    title: 'Journal-Compliant Manuscript Formatting',
    description:
      'Precision formatting tailored to specific journal requirements, reference styles, figure specifications, and layout guidelines.',
  },
  {
    id: 2,
    title: 'Scientific Graphical Abstracts',
    description:
      'Visually compelling diagrams and infographics designed to summarize core research findings for quick editor and reader comprehension.',
  },
  {
    id: 3,
    title: 'Engaging Video Abstracts',
    description:
      'Short dynamic video summaries highlighting research hypotheses, methodologies, and outcomes to boost altmetric scores and social engagement.',
  },
  {
    id: 4,
    title: 'Academic Poster Presentations',
    description:
      'Professional conference posters designed for maximum clarity, visual appeal, and concise presentation of complex data.',
  },
  {
    id: 5,
    title: 'Simplified Abstract Writing',
    description:
      'Plain-language summaries designed to make complex scientific breakthroughs accessible to broader public and cross-disciplinary audiences.',
  },
  {
    id: 6,
    title: 'Scientific News Reports',
    description:
      'Press-ready news releases and editorial highlights designed to showcase published research to media outlets and industry stakeholders.',
  },
  {
    id: 7,
    title: 'Video Narratives',
    description:
      'In-depth video storytelling integrating expert interviews, animations, and narrative structure to highlight high-impact scientific projects.',
  },
  {
    id: 8,
    title: 'Research Summaries',
    description:
      'Executive briefs and policy-oriented summaries structured to communicate actionable insights to decision-makers and research funders.',
  },
  {
    id: 9,
    title: 'Science Infographics',
    description:
      'Custom visual graphics transforming dense statistical data and pathways into clear, shareable visual assets.',
  },
  {
    id: 10,
    title: 'Press Notes',
    description:
      'Concise media briefs tailored for institutional communication offices and journal press rooms to drive outreach.',
  },
];

const stakeholderCards: StakeholderCard[] = [
  {
    id: 1,
    title: 'Academic Researchers and Principal Investigators',
    imageUrl:
      '/images/research-impact/Academic-Researchers-and-Principal-Investigators.png',
  },
  {
    id: 2,
    title: 'PhD Scholars and Early-Career Researchers',
    imageUrl:
      '/images/research-impact/PhD-Scholars-and-Early-Career-Researchers.png',
  },
  {
    id: 3,
    title: 'Universities, Research Institutes, and Think Tanks',
    imageUrl:
      '/images/research-impact/Universities-Research-Institutes-and-Think-Tanks.png',
  },
  {
    id: 4,
    title: 'Clinician Scientists and Medical Researchers',
    imageUrl:
      '/images/research-impact/clinical-scientist-and-medical-reserachers.png',
  },
  {
    id: 5,
    title: 'Grant Applicants and Funding Recipients',
    imageUrl:
      '/images/research-impact/Grant-Applicants-and-Funding-Recipients.png',
  },
  {
    id: 6,
    title: 'Publishing Authors',
    imageUrl: '/images/research-impact/Publishing-Authors.png',
  },
];

export default function ResearchImpactAndStakeholders(): React.ReactElement {
  // Accordion state management
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="w-full font-sans bg-white text-slate-800">
      
      {/* ========================================================================= */}
      {/* SECTION 1: RESEARCH IMPACT EXPERTISE INCLUDES                            */}
      {/* ========================================================================= */}
      <section className="max-w-6xl mx-auto py-7 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Heading & Paragraph */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#09322e] leading-snug">
              Our Research Impact Expertise Includes
            </h2>
            <h3 className="text-sm sm:text-base font-bold text-[#09322e] leading-snug">
              Enhancing Scholarly Visibility, Communication, and Outreach Across Disciplines
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-2">
              Pubrica offers a range of{' '}
              <Link
                href="/academy/research-impactt/how-to-select-target-journal-research-impact"
                className="text-blue-600 underline-offset-2 transition-colors no-underline hover:no-underline"
              >
                research impact services
              </Link>{' '}
              that enhance visibility, engagement, and scholarly impact. All services are provided to meet the rigorous standards of peer-reviewed journals, academic institutions, and global research funders. Our research impact services are tailored to help researchers boost citations, improve knowledge dissemination, and ensure research accessibility.
            </p>
          </div>

          {/* Right Column: Accordion List with Top & Bottom Dividers */}
          <div className="lg:col-span-7">
            <div className="border-t border-b border-[#09322e]/40 divide-y divide-[#09322e]/30">
              {expertiseList.map((item) => {
                const isOpen = openIndex === item.id;
                return (
                  <div key={item.id} className="transition-colors">
                    <button
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full py-3.5 px-2 flex items-center justify-start text-left gap-4 hover:bg-slate-50/80 transition-colors group"
                      aria-expanded={isOpen}
                    >
                      <span className="text-xs sm:text-sm text-slate-700 font-normal group-hover:text-[#09322e] flex-shrink-0">
                        {isOpen ? '−' : '+'}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-[#09322e]">
                        {item.title}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pl-8 pr-2 pb-4 text-xs text-slate-600 leading-relaxed">
                        {item.description}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* SECTION 2: WHO WE SERVE                                                 */}
      {/* ========================================================================= */}
      <section className="max-w-6xl mx-auto pb-8 px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="space-y-2 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#09322e]">
            Who We Serve
          </h2>
          <h3 className="text-sm sm:text-base font-semibold text-[#1e615e]">
            Bridging Research Excellence with Real-World Impact
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Our research impact services are designed for a diverse range of stakeholders in the scientific and academic ecosystem. We work closely with:
          </p>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stakeholderCards.map((card) => (
            <div
              key={card.id}
              className="relative rounded-2xl overflow-hidden shadow-md group h-56 sm:h-60 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Image
                src={card.imageUrl}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Dark Gradient Overlay for Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Bottom Card Title Text */}
              <div className="absolute bottom-0 inset-x-0 p-5">
                <p className="text-xs sm:text-sm font-bold text-white leading-snug drop-shadow-sm">
                  {card.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
}