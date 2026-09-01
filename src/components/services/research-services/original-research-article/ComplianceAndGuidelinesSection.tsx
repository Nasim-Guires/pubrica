'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PubricaSampleWorkCard } from '@/components/common/PubricaSampleWorkCardProps';

interface GuidelineItem {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  logoSrc: string;
  altText: string;
}

const IMG = '/images/physician-writing-services/original-research-article';

const ethicalStandards: GuidelineItem[] = [
  {
    id: 'icmje',
    title: 'International Committee of Medical Journal Editors',
    logoSrc: `${IMG}/icmje.png`,
    altText: 'ICMJE - International Committee of Medical Journal Editors Logo',
  },
  {
    id: 'cope',
    title: 'Committee on Publication Ethics',
    logoSrc: `${IMG}/COPE.png`,
    altText: 'COPE - Committee on Publication Ethics Logo',
  },
  {
    id: 'helsinki',
    title: 'Declaration of Helsinki',
    logoSrc: `${IMG}/Declaration-of-Helsinki.png`,
    altText: 'World Medical Association Declaration of Helsinki Logo',
  },
];

const reportingGuidelines: GuidelineItem[] = [
  {
    id: 'consort',
    title: 'Consolidated Standards of Reporting Trials – CONSORT',
    subtitle: 'For randomized controlled trials',
    logoSrc: `${IMG}/Consolidated-Standards-of-Reporting-Trials.png`,
    altText: 'SPIRIT CONSORT Logo',
  },
  {
    id: 'strobe',
    title: 'Strengthening the Reporting of Observational Studies in Epidemiology – STROBE',
    subtitle: 'For observational studies',
    logoSrc: `${IMG}/Strengthening-the-Reporting-of-Observational-Studies-in-Epidemiology-1.png`,
    altText: 'STROBE Statement Logo',
  },
  {
    id: 'prisma',
    title: 'Preferred Reporting Items for Systematic Reviews and Meta-Analyses – PRISMA',
    subtitle: 'For systematic reviews and meta-analyses',
    logoSrc: `${IMG}/Preferred-Reporting-Items-for-Systematic-Reviews-1.png`,
    altText: 'PRISMA Guidelines Logo',
  },
  {
    id: 'care',
    title: 'Case Report Guidelines',
    description: 'Designed to improve the completeness and transparency of case reports.',
    logoSrc: `${IMG}/Case-Report-Guidelines-1.png`,
    altText: 'CARE Case Report Guidelines Logo',
  },
  {
    id: 'arrive',
    title: 'Animal Research: Reporting of In Vivo Experiments – ARRIVE',
    description: 'Designed to improve the reporting of research involving animals.',
    logoSrc: `${IMG}/Animal-Research-Reporting-of-In-Vivo-Experiments-\u2013-ARRIVE.png`,
    altText: 'ARRIVE Guidelines Logo',
  },
  {
    id: 'trend',
    title: 'Transparent Reporting of Evaluations',
    description: 'Used for reporting non-randomized public health intervention studies.',
    logoSrc: `${IMG}/Transparent-Reporting-of-Evaluations-with-Nonrandomized-Designs-1.png`,
    altText: 'TREND Statement Logo',
  },
];

export default function ComplianceAndGuidelinesSection() {
  const [openAccordion, setOpenAccordion] = useState<'ethical' | 'reporting' | null>('ethical');

  const toggleAccordion = (accordion: 'ethical' | 'reporting') => {
    setOpenAccordion((prev) => (prev === accordion ? null : accordion));
  };

  return (
    <section
      aria-labelledby="compliance-standards-heading"
      className="w-full bg-slate-100 py-6 px-4 sm:px-6 lg:px-8 text-slate-800 space-y-12"
    >
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Section Heading */}
        <header className="space-y-2">
          <h2
            id="compliance-standards-heading"
            className="text-2xl sm:text-3xl font-bold text-slate-900"
          >
            Our Compliance and Guideline Standards
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-5xl">
            At Pubrica, every{' '}
            <Link
              href="/services/physician-writing-services/original-research-article"
              className="text-blue-600 font-medium no-underline hover:no-underline"
            >
              original research article
            </Link>{' '}
            is developed in strict adherence to globally recognized ethical, scientific, and journal-specific standards. Our writing process complies with the following:
          </p>
        </header>

        {/* Accordions Wrapper */}
        <div className="space-y-2 border border-slate-200 rounded-lg overflow-hidden bg-slate-50 shadow-sm">

          {/* Accordion 1: Ethical Research and Publication Standards */}
          <div>
            <button
              type="button"
              onClick={() => toggleAccordion('ethical')}
              aria-expanded={openAccordion === 'ethical'}
              className="w-full bg-slate-50 hover:bg-slate-100 px-6 py-4 flex items-center justify-between text-left transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-slate-400 cursor-pointer"
            >
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Ethical Research and Publication Standards
              </h3>
              <span className="text-xl font-bold text-slate-700 select-none">
                {openAccordion === 'ethical' ? '−' : '+'}
              </span>
            </button>

            {openAccordion === 'ethical' && (
              <div className="p-6 sm:p-8 bg-slate-50/60 border-t border-slate-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {ethicalStandards.map((item) => (
                    <article
                      key={item.id}
                      className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col items-center text-center justify-between min-h-[220px]"
                    >
                      <div className="relative w-full h-24 flex items-center justify-center mb-4 border border-slate-900 rounded-md p-2 bg-white">
                        <Image
                          src={item.logoSrc}
                          alt={item.altText}
                          fill
                          className="object-contain p-2"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 leading-snug">
                        {item.title}
                      </h4>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>

          <hr className="border-slate-200 my-0" />

          {/* Accordion 2: Reporting Guidelines Based on Study Type */}
          <div>
            <button
              type="button"
              onClick={() => toggleAccordion('reporting')}
              aria-expanded={openAccordion === 'reporting'}
              className="w-full bg-slate-50 hover:bg-slate-100 px-6 py-4 flex items-center justify-between text-left transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-slate-400 cursor-pointer"
            >
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Reporting Guidelines Based on Study Type
              </h3>
              <span className="text-xl font-bold text-slate-700 select-none">
                {openAccordion === 'reporting' ? '−' : '+'}
              </span>
            </button>

            {openAccordion === 'reporting' && (
              <div className="p-6 sm:p-8 bg-slate-50/60 border-t border-slate-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {reportingGuidelines.map((item) => (
                    <article
                      key={item.id}
                      className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col items-center text-center justify-between min-h-[260px]"
                    >
                      <div className="relative w-full h-24 flex items-center justify-center mb-4 p-2 bg-white">
                        <Image
                          src={item.logoSrc}
                          alt={item.altText}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>

                      <div className="space-y-1 mt-auto">
                        <h4 className="text-sm font-bold text-slate-900 leading-snug">
                          {item.title}
                        </h4>
                        {item.subtitle && (
                          <p className="text-xs text-slate-500 italic">
                            {item.subtitle}
                          </p>
                        )}
                        {item.description && (
                          <p className="text-xs text-slate-600 leading-relaxed pt-1">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Original Research Article Sample Work Banner */}
      <PubricaSampleWorkCard
        bookCoverImage={{
          src: "/images/physician-writing-services/research-proposal/sample-fdfddb.jpg",
          alt: "Original Research Article Sample Work",
          width: 600,
          height: 400,
        }}
        sections={[
          {
            heading: "Original Research Article Sample Work",
            headingTag: "h3",
            button: {
              label: "Discover More",
              url: "/insights/sample-work/cytotoxic-effects-of-sliver-nanoparticles-using-leaf-extract/",
            },
          },
          {
            heading: "Download the full Report Now",
            headingTag: "h3",
            descriptionSegments: [
              {
                text: "Explore our original research article writing samples, carefully designed to conform to the journal formatting, research objectives, and scientific reporting expectations on time and supported by peer-reviewed, validated sources.",
              },
            ],
            button: {
              label: "Discover More",
              url: "/insights/sample-work/",
            },
          },
        ]}
        footerDisclaimerSegments={[]}
      />
    </section>
  );
}