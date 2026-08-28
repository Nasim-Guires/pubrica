'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// --- Types ---
interface TherapeuticArea {
  id: number;
  name: string;
  iconSrc: string;
}

interface ComplianceStandard {
  id: number;
  title: string;
  subtitle: string;
  iconSrc: string;
}

// --- Data: Therapeutic Areas ---
const therapeuticAreas: TherapeuticArea[] = [
  { id: 1, name: 'Oncology', iconSrc: '/images/physician-writing-services/Oncology-1-1.png' },
  { id: 2, name: 'Cardiology', iconSrc: '/images/physician-writing-services/Cardiology-1.png' },
  { id: 3, name: 'Neurology', iconSrc: '/images/physician-writing-services/patient-education-content/Neurology-1.png' },
  { id: 4, name: 'Psychiatry', iconSrc: '/images/physician-writing-services/Psychiatry-1.png' },
  { id: 5, name: 'Pulmonology', iconSrc: '/images/physician-writing-services/Pulmonology-1.png' },
  { id: 6, name: 'Gastroenterology', iconSrc: '/images/research-impact/Gastroenterology.png' },
  { id: 7, name: 'Infectious Diseases', iconSrc: '/images/research-impact/Infectious-Diseases.png' },
  { id: 8, name: 'Paediatrics', iconSrc: '/images/research-impact/Paediatrics.png' },
];

// --- Data: Compliance Standards ---
const complianceStandards: ComplianceStandard[] = [
  {
    id: 1,
    title: 'Publication Ethics',
    subtitle: 'COPE (Committee on Publication Ethics)',
    iconSrc: '/images/research-impact/Publication-Ethics.png',
  },
  {
    id: 2,
    title: 'Clinical Trials',
    subtitle: 'CONSORT, SPIRIT, STROBE',
    iconSrc: '/images/research-impact/Clinical-Trials.png',
  },
  {
    id: 3,
    title: 'Systematic Reviews',
    subtitle: 'PRISMA, MOOSE',
    iconSrc: '/images/research-impact/Systematic-Reviews.png',
  },
  {
    id: 4,
    title: 'Observational Studies',
    subtitle: 'STROBE',
    iconSrc: '/images/research-impact/Observational-Studies.png',
  },
  {
    id: 5,
    title: 'Data Sharing',
    subtitle: 'FAIR Principles, GCP Standards',
    iconSrc: '/images/research-impact/Data-Sharing.png',
  },
  {
    id: 6,
    title: 'Language Compliance',
    subtitle: 'AMA, APA, MLA, Vancouver, Harvard, and journal styles',
    iconSrc: '/images/research-impact/Language-Compliance.png',
  },
];

export default function TherapeuticComplianceAndSamples(): React.ReactElement {
  return (
    <div className="w-full font-sans bg-white text-slate-800">
      
      {/* ========================================================================= */}
      {/* SECTION 1: OUR THERAPEUTIC AREAS: WE COVER                                */}
      {/* ========================================================================= */}
      <section className="max-w-6xl mx-auto py-7 px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="space-y-3 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0f2c28]">
            Our Therapeutic Areas: We Cover
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-4xl">
            We support research impact development across a wide range of therapeutic domains, ensuring discipline-specific accuracy and relevance in all dissemination outputs.
          </p>
        </div>

        {/* Grid Container with Vertical and Horizontal Dividers */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-slate-200">
          {therapeuticAreas.map((area, index) => {
            // Logic for bottom border on row 1
            const isTopRow = index < 4;
            // Logic for right border on grid items (except last column)
            const hasRightBorder = (index + 1) % 4 !== 0;

            return (
              <div
                key={area.id}
                className={`flex flex-col items-center justify-center p-8 text-center transition-colors hover:bg-slate-50/80 ${
                  isTopRow ? 'border-b border-slate-200' : ''
                } ${hasRightBorder ? 'border-r border-slate-200' : ''}`}
              >
                <div className="w-16 h-16 rounded-full bg-[#0f2c28] text-white flex items-center justify-center mb-4 shadow-sm overflow-hidden">
                  <Image src={area.iconSrc} alt={area.name} width={40} height={40} className="object-contain" />
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-[#0f2c28]">
                  {area.name}
                </h3>
              </div>
            );
          })}
        </div>

      </section>


      {/* ========================================================================= */}
      {/* SECTION 2: OUR COMPLIANCE AND GUIDELINE STANDARDS                        */}
      {/* ========================================================================= */}
      <section className="bg-[#f5f7f7] py-7 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Heading */}
          <div className="space-y-3 mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f2c28]">
              Our Compliance and Guideline Standards
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-4xl">
              We operate under the strict guidance of international scholarly and ethical standards, ensuring credibility and journal acceptability:
            </p>
          </div>

          {/* 3x2 Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceStandards.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex items-start gap-4 transition-all hover:shadow-md"
              >
                <div className="flex-shrink-0 pt-0.5 relative w-10 h-10">
                  <Image src={item.iconSrc} alt="" fill className="object-contain" sizes="40px" />
                </div>

                {/* Right Text Content */}
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-[#0f2c28] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* SECTION 3: RESEARCH IMPACT SAMPLE WORK                                   */}
      {/* ========================================================================= */}
      <section className="bg-[#eefbf4] py-7 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Image Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-md max-w-sm w-full bg-white relative aspect-[4/3]">
                <Image
                  src="/images/research-impact/image.webp"
                  alt="Person reviewing research graphs and clipboard"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
            </div>

            {/* Right Text & CTA Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Block 1 */}
              <div className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0f2c28]">
                  Research Impact Sample Work
                </h2>
                <div>
                  <Link
                    href="/insights/sample-work"
                    className="inline-block bg-black hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold py-2.5 px-8 rounded-full transition-colors shadow-sm"
                  >
                    Discover More
                  </Link>
                </div>
              </div>

              {/* Block 2 */}
              <div className="space-y-3 pt-2">
                <h3 className="text-lg sm:text-xl font-bold text-[#0f2c28]">
                  Download the full Report Now
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Explore our research impact sample work, expertly developed to align with stakeholder expectations, institutional impact frameworks, and global dissemination standards.
                </p>
                <div>
                  <Link
                    href="/insights/sample-work"
                    className="inline-block bg-black hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold py-2.5 px-8 rounded-full transition-colors shadow-sm"
                  >
                    Discover More
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}