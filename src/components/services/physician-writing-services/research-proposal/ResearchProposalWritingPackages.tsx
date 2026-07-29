"use client";
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import React, { useState } from 'react';

interface PackageItem {
  id: string;
  badge: string;
  badgeBg: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  cardBg: string;
  headerBorder: string;
  idealFor: string;
  includesHeading?: string;
  includes: string[];
  tat: string;
  price: string;
}

interface AddOnService {
  service: string;
  tat: string;
  startingPrice: string;
}

export default function ResearchProposalWritingPackages() {
  const [isAddOnsOpen, setIsAddOnsOpen] = useState<boolean>(true);

  const packages: PackageItem[] = [
    {
      id: 'basic',
      badge: 'B',
      badgeBg: 'bg-[#f5e6a3]',
      badgeColor: 'text-[#d48817]',
      title: 'Basic',
      subtitle: 'Academic Writing Essentials',
      cardBg: 'bg-[#cddcd6]',
      headerBorder: 'border-t-4 border-[#b2cad0]',
      idealFor: 'Residents, fellows, or academic researchers with a clear topic and study design.',
      includes: [
        'Structured protocol/proposal writing (up to 25–30 pages)',
        'Background, literature review, objectives, and methodology',
        'Standard formatting (APA, AMA, Vancouver, etc.)',
        'Language editing and plagiarism check',
        '1 round of revisions'
      ],
      tat: '10–12 business days',
      price: 'USD 450'
    },
    {
      id: 'advanced',
      badge: 'A',
      badgeBg: 'bg-[#b8e3bd]',
      badgeColor: 'text-[#2e7d32]',
      title: 'Advanced',
      subtitle: 'Writing + Research Design Support',
      cardBg: 'bg-[#d8cce2]',
      headerBorder: 'border-t-4 border-[#a28cb0]',
      idealFor: 'Clinicians and early-career faculty needing help with methodology and analysis plan.',
      includesHeading: 'Includes everything in Basic, plus:',
      includes: [
        'Study design consultation (RCT, cohort, etc.)',
        'Hypothesis formulation and variable selection',
        'Sample size rationale',
        'Basic statistical analysis plan (SPSS, R, STATA)',
        'Ethics and compliance alignment (IRB, ICMR, GCP)'
      ],
      tat: '12–15 business days',
      price: 'USD 700'
    },
    {
      id: 'premium',
      badge: 'P',
      badgeBg: 'bg-[#f2aab0]',
      badgeColor: 'text-[#c62828]',
      title: 'Premium',
      subtitle: 'Full Training Program Development',
      cardBg: 'bg-[#dfcaa2]',
      headerBorder: 'border-t-4 border-[#c2aa7c]',
      idealFor: 'Physicians/surgeons preparing for IRB review, investigator-initiated trials, or grant applications.',
      includesHeading: 'Includes everything in Advanced, plus:',
      includes: [
        'Funder- or IRB-specific formatting',
        'IRB document set (informed consent, risk-benefit summary)',
        'Targeted literature review and reference integration',
        'Dedicated project coordinator',
        '2 additional revisions and peer-level quality check',
        'Submission support (cover letter, checklist, formatting)'
      ],
      tat: '15–20 business days',
      price: 'USD 1100'
    }
  ];

  const addOnList: string[] = [
    'Grant budgeting and cost justification',
    'PICO formatting for clinical clarity',
    'PowerPoint slide deck for IRB/grant defense',
    'Reviewer comment handling and revision',
    'Scientific translation (non-English to English)',
    'Manuscript conversion (for journal publication)',
    'IRB/Ethics Committee Documentation',
    'Informed Consent Form Drafting',
    'Literature Review Matrix',
    'Data Collection Tool Design',
    'Proposal Revisions & Reviewer Response Handling'
  ];

  const addOnTableData: AddOnService[] = [
    { service: 'Grant budgeting & cost justification', tat: '5 days', startingPrice: 'USD 150' },
    { service: 'PICO formatting', tat: '3 days', startingPrice: 'USD 75' },
    { service: 'PowerPoint for defense', tat: '4–5 days', startingPrice: 'USD 120' },
    { service: 'Reviewer comment handling', tat: '5–7 days', startingPrice: 'USD 180' },
    { service: 'Scientific translation (non-English)', tat: 'Varies', startingPrice: 'From USD 100' },
    { service: 'Journal manuscript conversion', tat: '7–10 days', startingPrice: 'From USD 250' }
  ];

  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8 font-sans antialiased text-gray-800">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* ---------------- SECTION 1: PACKAGES ---------------- */}
        <div>
          {/* SECTION HEADER */}
          <div className="text-left mb-10 max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0d2a24] tracking-tight">
              Research Proposal Writing Packages
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
              We offer tiered research proposal writing services to meet the diverse needs of scholars, clinicians, postdoctoral researchers, and funding applicants. Each package is designed to ensure clarity, methodological strength, and alignment with specific academic or funding agency requirements.
            </p>
          </div>

          {/* PRICING CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {packages.map((pkg) => (
              <div 
                key={pkg.id} 
                className="flex flex-col rounded-t-lg shadow-xs overflow-hidden border border-gray-200"
              >
                {/* CARD TOP HEADER STRIP */}
                <div className={`bg-white p-4 flex items-center gap-3.5 border-b border-gray-200 ${pkg.headerBorder}`}>
                  <div className={`w-11 h-11 rounded-full ${pkg.badgeBg} flex items-center justify-center flex-shrink-0 font-extrabold text-lg shadow-inner ${pkg.badgeColor}`}>
                    {pkg.badge}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0d2a24] leading-none">
                      {pkg.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-gray-600 mt-1">
                      {pkg.subtitle}
                    </p>
                  </div>
                </div>

                {/* CARD BODY CONTENT */}
                <div className={`p-5 ${pkg.cardBg} flex-1 flex flex-col justify-between text-[11px] leading-snug space-y-4`}>
                  
                  {/* IDEAL FOR */}
                  <div className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-[9px]">
                      ➔
                    </div>
                    <div>
                      <span className="font-bold text-black">Ideal for:</span>
                      <p className="text-gray-800 mt-0.5">{pkg.idealFor}</p>
                    </div>
                  </div>

                  {/* INCLUDES */}
                  <div className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-[9px]">
                      ➔
                    </div>
                    <div className="space-y-2 w-full">
                      <span className="font-bold text-black">
                        {pkg.includesHeading ? pkg.includesHeading : 'Includes:'}
                      </span>
                      <ul className="space-y-2 text-gray-800 pl-1">
                        {pkg.includes.map((item, idx) => (
                          <li key={idx} className="leading-snug">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* TAT */}
                  <div className="flex items-start gap-2 pt-2 border-t border-black/10">
                    <div className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-[9px]">
                      ➔
                    </div>
                    <div>
                      <span className="font-bold text-black">TAT:</span>
                      <p className="text-gray-800">{pkg.tat}</p>
                    </div>
                  </div>

                  {/* PRICING STARTS FROM */}
                  <div className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-[9px]">
                      ➔
                    </div>
                    <div>
                      <span className="font-bold text-black">Pricing starts from:</span>
                      <p className="text-black font-extrabold text-xs mt-0.5">{pkg.price}</p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
          <GetFreeQuoteButton/>
        </div>


        {/* ---------------- SECTION 2: ADD-ONS ACCORDION ---------------- */}
        <div className="border border-gray-200 rounded-xs overflow-hidden shadow-xs bg-[#f4f7f6]">
          {/* ACCORDION BAR */}
          <button 
            onClick={() => setIsAddOnsOpen(!isAddOnsOpen)}
            className="w-full bg-[#0e3028] text-white px-5 py-3.5 flex items-center gap-3 text-sm font-bold tracking-wide transition-colors hover:bg-[#08201a]"
          >
            <span className="text-base font-extrabold">{isAddOnsOpen ? '—' : '+'}</span>
            <span>Add-Ons (Available with Any Package)</span>
          </button>

          {/* ACCORDION CONTENT */}
          {isAddOnsOpen && (
            <div className="p-6 bg-[#f4f7f6]">
              <ul className="space-y-2.5">
                {addOnList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-gray-800">
                    <span className="text-black font-extrabold text-base leading-none">•</span>
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>


        {/* ---------------- SECTION 3: ADD-ON SERVICES TABLE ---------------- */}
        <div>
          <h3 className="text-xl font-bold text-[#0d2a24] mb-4">
            Optional Add-On Services (Priced Separately)
          </h3>

          <div className="overflow-x-auto rounded-xs border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#0e3028] text-white font-bold">
                  <th className="py-3 px-5 border-b border-gray-200 w-1/2">Service</th>
                  <th className="py-3 px-5 border-b border-gray-200 w-1/4">TAT</th>
                  <th className="py-3 px-5 border-b border-gray-200 w-1/4">Starting Price</th>
                </tr>
              </thead>
              <tbody>
                {addOnTableData.map((row, idx) => (
                  <tr 
                    key={idx}
                    className={idx % 2 === 0 ? 'bg-white' : 'bg-[#dce7e3]'}
                  >
                    <td className="py-3 px-5 text-gray-800 border-b border-gray-100 font-medium">
                      {row.service}
                    </td>
                    <td className="py-3 px-5 text-gray-800 border-b border-gray-100">
                      {row.tat}
                    </td>
                    <td className="py-3 px-5 text-gray-800 border-b border-gray-100">
                      {row.startingPrice}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* FOOTER NOTE */}
          <p className="text-center text-xs font-medium text-gray-700 mt-6">
            Need it Faster? Expedited delivery available (5–7 days turnaround) for an additional fee.
          </p>
        </div>

      </div>
    </section>
  );
}