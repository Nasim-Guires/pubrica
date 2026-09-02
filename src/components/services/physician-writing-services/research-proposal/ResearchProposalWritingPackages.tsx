"use client";
import CommonPackages, { PackageItem } from '@/components/common/CommonPackages';
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import React, { useState } from 'react';



interface AddOnService {
  service: string;
  tat: string;
  startingPrice: string;
}

export default function ResearchProposalWritingPackages() {
  const [isAddOnsOpen, setIsAddOnsOpen] = useState<boolean>(true);

  const packagesData: PackageItem[] = [
    {
      icon: "/images/icons/Basic.webp",
      title: "Basic",
      subtitle: "Academic Writing Essentials",
      idealFor:
        "Residents, fellows, or academic researchers with a clear topic and study design.",
      includes: [
        "Structured protocol/proposal writing (up to 25–30 pages)",
        "Background, literature review, objectives, and methodology",
        "Standard formatting (APA, AMA, Vancouver, etc.)",
        "Language editing and plagiarism check",
        "1 round of revisions",
      ],
      turnaround: "10–12 business days",
      cardBgColor: "#cddcd6",
      titleColor: "#004b5a",
    },
    {
      icon: "/images/icons/advanced-a.webp",
      title: "Advanced",
      subtitle: "Writing + Research Design Support",
      idealFor:
        "Clinicians and early-career faculty needing help with methodology and analysis plan.",
      includes: [
        "Includes everything in Basic, plus:",
        "Study design consultation (RCT, cohort, etc.)",
        "Hypothesis formulation and variable selection",
        "Sample size rationale",
        "Basic statistical analysis plan (SPSS, R, STATA)",
        "Ethics and compliance alignment (IRB, ICMR, GCP)",
      ],
      turnaround: "12–15 business days",
      cardBgColor: "#d8cce2",
      titleColor: "#6b2d82",
    },
    {
      icon: "/images/icons/premium-p.png",
      title: "Premium",
      subtitle: "Full Training Program Development",
      idealFor:
        "Physicians/surgeons preparing for IRB review, investigator-initiated trials, or grant applications.",
      includes: [
        "Includes everything in Advanced, plus:",
        "Funder- or IRB-specific formatting",
        "IRB document set (informed consent, risk-benefit summary)",
        "Targeted literature review and reference integration",
        "Dedicated project coordinator",
        "2 additional revisions and peer-level quality check",
        "Submission support (cover letter, checklist, formatting)",
      ],
      turnaround: "15–20 business days",
      cardBgColor: "#dfcaa2",
      titleColor: "#805826",
    },
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
    <section className="w-full bg-white py-6 px-4 sm:px-6 lg:px-8 font-sans antialiased text-gray-800">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* ---------------- SECTION 1: PACKAGES ---------------- */}
        <div>
          {/* SECTION HEADER */}
          <CommonPackages
            title="Research Proposal Writing Packages"
            description="We offer tiered research proposal writing services to meet the diverse needs of scholars, clinicians, postdoctoral researchers, and funding applicants. Each package is designed to ensure clarity, methodological strength, and alignment with specific academic or funding agency requirements."
            packages={packagesData}
          />
          <GetFreeQuoteButton />
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