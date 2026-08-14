
'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// Type definitions for service data
interface CoreService {
  id: string;
  title: string;
  items: string[];
}

export default function CoreAndTypesServices() {
  // All cards default to null (closed) for Our Core Services
  const [activeCoreService, setActiveCoreService] = useState<string | null>(null);

  // All cards default to false (closed) for Types of Literature Search Services
  const [expandedTypes, setExpandedTypes] = useState<Record<string, boolean>>({
    narrative: false,
    slr: false,
    scoping: false,
    bibliometric: false,
    ingredient: false,
    targeted: false,
    grey: false,
  });

  const toggleType = (id: string) => {
    setExpandedTypes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const coreServices: CoreService[] = [
    {
      id: 'systematic',
      title: 'Systematic & Targeted Literature Search',
      items: [
        'Keyword-based, topic-specific, or broad literature search (e.g., by therapeutic area, indication, or route)',
        'Use reputable academic databases: PubMed, Scopus, Web of Science, JSTOR, Embase, etc.',
        'Search according to PRISMA guidelines for systematic reviews.',
      ],
    },
    {
      id: 'ingredient',
      title: 'Ingredient & Product Research',
      items: [
        'Literature for ingredient validation, therapeutic efficacy, and mechanism of action',
        'Clinical study support for Ayurvedic, Nutraceuticals, Herbal, Pharma, and Biotech products',
        'Regulatory and guideline alignment (FDA, EMA, EFSA, CDSCO, ISO standards)',
        'Regulatory compliant literature for safety, efficacy, and claims',
        'Summary of findings to drive formulation decisions, supporting white papers or evidence dossiers.',
      ],
    },
    {
      id: 'citation',
      title: 'Citation Curation & Integration',
      items: [
        'Selection of the most recent, relevant, and peer-reviewed references',
        'Proper citation formatting (APA, MLA, Chicago, Vancouver, Harvard, etc.)',
        'Reference insertion and bibliography formatting in your document.',
      ],
    },
    {
      id: 'annotated',
      title: 'Annotated Bibliography & Summary Report',
      items: [
        'Summarized findings of top-selected articles',
        'Annotated notes with journal details, outcomes, and author conclusions',
        'Helpful for thesis chapters, grant proposals, or research presentations.',
      ],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-800 font-sans">
      
      {/* SECTION 1: OUR CORE SERVICES */}
      <div className="mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#143234] mb-2">
          Our Core Services
        </h2>
        <p className="text-base sm:text-lg font-semibold text-[#1c4d50] mb-3">
          Build Scientific Evidence for Research, Publication, and Product Development
        </p>
        <p className="text-sm sm:text-base text-gray-600 mb-8 max-w-4xl leading-relaxed">
          At Pubrica, we provide premium, expert-focused literature search services to enhance academic, clinical, and product-based research. We can provide everything from evidence identification to full citation integration, saving you time and improving your work.
        </p>

        {/* Core Services Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Image Section Placeholder */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-lg overflow-hidden shadow-sm">
              <Image
                src="/images/physician-writing-services/literature-search-and-citation/Build-Scientific-Evidence-for-Research-Publication-and-Product-Development.webp"
                alt="Build scientific evidence for research, publication, and product development"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 380px"
              />
            </div>
          </div>

          {/* Accordion / List Section */}
          <div className="lg:col-span-7 space-y-3">
            {coreServices.map((service) => {
              const isOpen = activeCoreService === service.id;
              return (
                <div key={service.id} className="border-b border-gray-200 pb-3">
                  <button
                    onClick={() => setActiveCoreService(isOpen ? null : service.id)}
                    className="w-full flex justify-between items-center py-2 text-left text-base sm:text-lg font-semibold text-[#143234] hover:text-teal-800 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-gray-500 text-sm">{isOpen ? '−' : '+'}</span>
                      {service.title}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pl-6 pt-2 pb-4">
                      <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                        {service.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-gray-800 font-bold">•</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* SECTION 2: TYPES OF LITERATURE SEARCH & CITATION SERVICES WE OFFER */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#143234] mb-3">
          Types of Literature Search & Citation Services We Offer
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-8 max-w-5xl leading-relaxed">
          Ph.D. Assistance research lab provides comprehensive literature searching and citation services to address a variety of research needs. Whether you&apos;re developing a thesis, confirming product support, or addressing journal reviewers, we help provide evidence-based insights through credible and comprehensive literature support.
        </p>

        {/* 4-Column Responsive Grid for Service Types */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Narrative Literature Search */}
          <div className="bg-[#f2faf7] rounded-md p-4 self-start">
            <button
              onClick={() => toggleType('narrative')}
              className="w-full flex justify-between items-start text-left font-bold text-[#143234] text-sm sm:text-base"
            >
              <span>Narrative Literature Search</span>
              <span className="text-gray-500 ml-2">{expandedTypes.narrative ? '−' : '+'}</span>
            </button>
            {expandedTypes.narrative && (
              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-gray-700">
                <li className="flex items-start gap-1.5">
                  <span>•</span>
                  <span>General topic-based searches to build background and context.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span>•</span>
                  <span>Best for introductions, rationales, discussion chapters, and concept papers.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span>•</span>
                  <span>Focuses on a summary of trends, opinions, and historical development.</span>
                </li>
              </ul>
            )}
          </div>

          {/* Card 2: Systematic Literature Review (SLR) */}
          <div className="bg-[#f2faf7] rounded-md p-4 self-start">
            <button
              onClick={() => toggleType('slr')}
              className="w-full flex justify-between items-start text-left font-bold text-[#143234] text-sm sm:text-base"
            >
              <span>Systematic Literature Review (SLR)</span>
              <span className="text-gray-500 ml-2">{expandedTypes.slr ? '−' : '+'}</span>
            </button>
            {expandedTypes.slr && (
              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-gray-700">
                <li className="flex items-start gap-1.5">
                  <span>•</span>
                  <span>Structured according to PRISMA, Cochrane, or Campbell guidelines</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span>•</span>
                  <span>Comprehensive search across multiple databases with inclusion/exclusion criteria</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span>•</span>
                  <span>Includes search strategy, flow diagram, data extraction tables, and quality appraisal</span>
                </li>
              </ul>
            )}
          </div>

          {/* Card 3: Scoping Review */}
          <div className="bg-[#f2faf7] rounded-md p-4 self-start">
            <button
              onClick={() => toggleType('scoping')}
              className="w-full flex justify-between items-start text-left font-bold text-[#143234] text-sm sm:text-base"
            >
              <span>Scoping Review</span>
              <span className="text-gray-500 ml-2">{expandedTypes.scoping ? '−' : '+'}</span>
            </button>
            {expandedTypes.scoping && (
              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-gray-700">
                <li className="flex items-start gap-1.5">
                  <span>•</span>
                  <span>Used to map the breadth and scope of existing research</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span>•</span>
                  <span>Helps in identifying research gaps, especially for emerging fields or interdisciplinary topics</span>
                </li>
              </ul>
            )}
          </div>

          {/* Card 4: Bibliometric Analysis */}
          <div className="bg-[#f2faf7] rounded-md p-4 self-start">
            <button
              onClick={() => toggleType('bibliometric')}
              className="w-full flex justify-between items-start text-left font-bold text-[#143234] text-sm sm:text-base"
            >
              <span>Bibliometric Analysis</span>
              <span className="text-gray-500 ml-2">{expandedTypes.bibliometric ? '−' : '+'}</span>
            </button>
            {expandedTypes.bibliometric && (
              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-gray-700">
                <li className="flex items-start gap-1.5">
                  <span>•</span>
                  <span>Quantitative analysis of literature trends</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span>•</span>
                  <span>Identifies publication patterns, high-impact journals, top authors, and keyword co-occurrence</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span>•</span>
                  <span>Useful for grant proposals, review articles, and topic validation</span>
                </li>
              </ul>
            )}
          </div>

          {/* Card 5: Ingredient & Product-Focused Literature Search */}
          <div className="bg-[#f2faf7] rounded-md p-4 self-start">
            <button
              onClick={() => toggleType('ingredient')}
              className="w-full flex justify-between items-start text-left font-bold text-[#143234] text-sm sm:text-base"
            >
              <span>Ingredient & Product-Focused Literature Search</span>
              <span className="text-gray-500 ml-2">{expandedTypes.ingredient ? '−' : '+'}</span>
            </button>
            {expandedTypes.ingredient && (
              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-gray-700">
                <li className="flex items-start gap-1.5">
                  <span>•</span>
                  <span>Tailored for nutraceuticals, functional foods, Ayurveda, herbal, and pharma products</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span>•</span>
                  <span>Tracks clinical trials, pharmacokinetics, efficacy, safety, and toxicology data</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span>•</span>
                  <span>Ideal for R&D teams, medical writers, and product developers</span>
                </li>
              </ul>
            )}
          </div>

          {/* Card 6: Targeted Citation Search */}
          <div className="bg-[#f2faf7] rounded-md p-4 self-start">
            <button
              onClick={() => toggleType('targeted')}
              className="w-full flex justify-between items-start text-left font-bold text-[#143234] text-sm sm:text-base"
            >
              <span>Targeted Citation Search</span>
              <span className="text-gray-500 ml-2">{expandedTypes.targeted ? '−' : '+'}</span>
            </button>
            {expandedTypes.targeted && (
              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-gray-700">
                <li className="flex items-start gap-1.5">
                  <span>•</span>
                  <span>Finding supporting references for specific claims, statements, or hypotheses</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span>•</span>
                  <span>Enhancing journal manuscripts, regulatory submissions, thesis writing, and white papers</span>
                </li>
              </ul>
            )}
          </div>

          {/* Card 7: Grey Literature Search */}
          <div className="bg-[#f2faf7] rounded-md p-4 self-start">
            <button
              onClick={() => toggleType('grey')}
              className="w-full flex justify-between items-start text-left font-bold text-[#143234] text-sm sm:text-base"
            >
              <span>Grey Literature Search</span>
              <span className="text-gray-500 ml-2">{expandedTypes.grey ? '−' : '+'}</span>
            </button>
            {expandedTypes.grey && (
              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-gray-700">
                <li className="flex items-start gap-1.5">
                  <span>•</span>
                  <span>Locating non-commercial, unpublished, or institutional research</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span>•</span>
                  <span>Includes conference proceedings, dissertations, reports, patents, and government publications</span>
                </li>
              </ul>
            )}
          </div>

        </div>
      </div>

    </section>
  );
}