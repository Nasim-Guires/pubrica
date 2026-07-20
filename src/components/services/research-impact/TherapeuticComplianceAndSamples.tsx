'use client';

import React from 'react';

// --- Types ---
interface TherapeuticArea {
  id: number;
  name: string;
  icon: React.ReactNode;
}

interface ComplianceStandard {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

// --- Data: Therapeutic Areas ---
const therapeuticAreas: TherapeuticArea[] = [
  {
    id: 1,
    name: 'Oncology',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m-4-8h8" />
        <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 2,
    name: 'Cardiology',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h2l1-2 2 4 1-2h2" />
      </svg>
    ),
  },
  {
    id: 3,
    name: 'Neurology',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    id: 4,
    name: 'Psychiatry',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    id: 5,
    name: 'Pulmonology',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 21l3.83-1.28C9.43 20.48 10.68 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z" />
      </svg>
    ),
  },
  {
    id: 6,
    name: 'Gastroenterology',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.6 15.12a2 2 0 00-1.022.547l-1.12 1.12a2 2 0 000 2.828l1.12 1.12a2 2 0 002.828 0l1.12-1.12a2 2 0 00.547-1.022l.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 01-.517-3.86l.477-2.387a2 2 0 00-.547-1.022l-1.12-1.12a2 2 0 00-2.828 0l-1.12 1.12a2 2 0 000 2.828l1.12 1.12z" />
      </svg>
    ),
  },
  {
    id: 7,
    name: 'Infectious Diseases',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="6" strokeWidth="1.5" />
        <path strokeLinecap="round" strokeWidth="2" d="M12 2v4m0 12v4M2 12h4m12 0h4m-3.05-6.95l-2.83 2.83m-8.48 8.48l-2.83 2.83m0-14.14l2.83 2.83m8.48 8.48l2.83 2.83" />
      </svg>
    ),
  },
  {
    id: 8,
    name: 'Paediatrics',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="9" r="4" strokeWidth="1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 13c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z" />
      </svg>
    ),
  },
];

// --- Data: Compliance Standards ---
const complianceStandards: ComplianceStandard[] = [
  {
    id: 1,
    title: 'Publication Ethics',
    subtitle: 'COPE (Committee on Publication Ethics)',
    icon: (
      <svg className="w-10 h-10 text-[#0f2c28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 6l9-4 9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-5.45-9-12V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4m0 4h.01" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Clinical Trials',
    subtitle: 'CONSORT, SPIRIT, STROBE',
    icon: (
      <svg className="w-10 h-10 text-[#0f2c28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-3-3v6m-9 1V7a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <circle cx="16" cy="16" r="3" strokeWidth="1.5" />
        <path strokeLinecap="round" strokeWidth="1.5" d="M18.5 18.5L21 21" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Systematic Reviews',
    subtitle: 'PRISMA, MOOSE',
    icon: (
      <svg className="w-10 h-10 text-[#0f2c28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Observational Studies',
    subtitle: 'STROBE',
    icon: (
      <svg className="w-10 h-10 text-[#0f2c28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
        <circle cx="12" cy="10" r="3" strokeWidth="1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.168 18.849A4 4 0 0110 16h4a4 4 0 013.832 2.849" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Data Sharing',
    subtitle: 'FAIR Principles, GCP Standards',
    icon: (
      <svg className="w-10 h-10 text-[#0f2c28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Language Compliance',
    subtitle: 'AMA, APA, MLA, Vancouver, Harvard, and journal styles',
    icon: (
      <svg className="w-10 h-10 text-[#0f2c28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function TherapeuticComplianceAndSamples(): React.ReactElement {
  return (
    <div className="w-full font-sans bg-white text-slate-800">
      
      {/* ========================================================================= */}
      {/* SECTION 1: OUR THERAPEUTIC AREAS: WE COVER                                */}
      {/* ========================================================================= */}
      <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        
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
                {/* Circular Dark Green Icon Badge */}
                <div className="w-16 h-16 rounded-full bg-[#0f2c28] text-white flex items-center justify-center mb-4 shadow-sm">
                  {area.icon}
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
      <section className="bg-[#f5f7f7] py-16 px-4 sm:px-6 lg:px-8">
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
                {/* Left Icon */}
                <div className="flex-shrink-0 pt-0.5">
                  {item.icon}
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
      <section className="bg-[#eefbf4] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Image Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-md max-w-sm w-full bg-white">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
                  alt="Person reviewing research graphs and clipboard"
                  className="w-full h-auto object-cover aspect-[4/3]"
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
                  <a
                    href="https://pubrica.com/insights/sample-work/"
                    className="inline-block bg-black hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold py-2.5 px-8 rounded-full transition-colors shadow-sm"
                  >
                    Discover More
                  </a>
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
                  <a
                    href="https://pubrica.com/insights/sample-work/"
                    className="inline-block bg-black hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold py-2.5 px-8 rounded-full transition-colors shadow-sm"
                  >
                    Discover More
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}