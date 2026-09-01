"use client";

import { useState } from "react";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

interface PackageTier {
  tierName: string;
  subHeader?: string;
  inclusions: string[];
  bestFor: string;
  deliveryTime: string;
  startingPrice: string;
}

const packages: PackageTier[] = [
  {
    tierName: "Basic Manuscript Drafting Package",
    inclusions: [
      "Structuring a manuscript (IMRaD format)",
      "Drafting Introduction, Methods, Results & Discussion",
      "Formatting as per the 1 target journal",
      "Language editing (native-level)",
      "Plagiarism check (report included)",
    ],
    bestFor:
      "Early-stage researchers with complete data and a defined methodology.",
    deliveryTime: "10–12 business days",
    startingPrice: "USD 300",
  },
  {
    tierName: "Advanced Writing & Compliance Package",
    subHeader: "Includes everything in Basic, plus:",
    inclusions: [
      "Statistical analysis using SPSS, R, or STATA",
      "Tables, graphs, and visual data representation",
      "Methodology development guidance",
      "Hypothesis and objective refinement",
      "Journal-specific compliance (e.g., CONSORT, STROBE, PRISMA)",
      "Ethical and conflict of interest statement drafting",
      "2 rounds of revision support",
    ],
    bestFor:
      "Researchers aiming at high-impact journals with stringent reporting requirements.",
    deliveryTime: "12–15 business days",
    startingPrice: "USD 500",
  },
  {
    tierName: "Premium Journal Submission-Ready Package",
    subHeader: "Includes everything in Advanced, plus:",
    inclusions: [
      "Journal selection (3 target journals)",
      "Cover letter & author response draft",
      "Manuscript formatting for multiple submissions",
      "Submission support via journal portals",
      "Unlimited revisions (up to acceptance)",
      "Response to reviewer comments (1 round)",
    ],
    bestFor:
      "End-to-end service for researchers targeting SCIE/Scopus-indexed journals.",
    deliveryTime: "15–18 business days",
    startingPrice: "USD 750",
  },
];

const addOnServices: string[] = [
  "Statistical analysis or revalidation",
  "Reference reformatting (Zotero/EndNote compatible)",
  "Graphical abstract or figure redrawing",
  "Proofreading by native PhD editors",
  "Fast-track service (5–7 days turnaround)",
  "IRB documentation assistance",
  "Thesis-to-article conversion",
  "Journal reformatting for resubmission",
  "Multi-language translation",
  "Infographics and visual abstracts",
];

export default function ResearchPackagesSection() {
  const [isAddOnsOpen, setIsAddOnsOpen] = useState(true);

  return (
    <section
      aria-labelledby="packages-heading"
      className="w-full bg-slate-50 py-6 px-4 sm:px-6 lg:px-8 text-slate-800"
    >
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Section Header */}
        <header className="space-y-3">
          <h2
            id="packages-heading"
            className="text-2xl sm:text-3xl font-bold text-slate-900"
          >
            Original Research Article Writing Service Packages
          </h2>
          <h3 className="text-lg sm:text-xl font-bold text-slate-800">
            Flexible, Research-Aligned Solutions for Original Articles
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-5xl">
            We have tiered packages based on your study design, discipline,
            target journal, and manuscript. All packages can be designed based
            on the type of research, word count, report formatting, and
            submission timelines.
          </p>
        </header>

        {/* Pricing Table Container with Fixed Height and Scrollbars */}
        <div className="border border-slate-300 rounded-xl overflow-hidden bg-white shadow-lg">
          <div className="max-h-[380px] overflow-y-auto overflow-x-auto scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-100">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead className="sticky top-0 z-10">
                <tr className="bg-[#0d3b38] text-white text-sm sm:text-base font-bold shadow-sm">
                  <th className="py-4 px-6 border-r border-[#1a4a47] w-1/5 text-center align-middle">
                    Package Tier
                  </th>
                  <th className="py-4 px-6 border-r border-[#1a4a47] w-2/5 text-center align-middle">
                    Inclusions
                  </th>
                  <th className="py-4 px-6 border-r border-[#1a4a47] w-1/5 text-center align-middle">
                    Best For
                  </th>
                  <th className="py-4 px-6 border-r border-[#1a4a47] text-center align-middle">
                    Delivery Time
                  </th>
                  <th className="py-4 px-6 text-center align-middle">
                    Starting Price
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm sm:text-base text-slate-700">
                {packages.map((pkg, idx) => (
                  <tr
                    key={pkg.tierName}
                    className={idx % 2 === 1 ? "bg-sky-50/40" : "bg-white"}
                  >
                    {/* Package Tier */}
                    <td className="py-6 px-6 font-semibold text-slate-900 align-top border-r border-slate-200">
                      {pkg.tierName}
                    </td>

                    {/* Inclusions */}
                    <td className="py-6 px-6 align-top border-r border-slate-200 space-y-2">
                      {pkg.subHeader && (
                        <p className="text-xs font-medium text-slate-500 mb-2">
                          {pkg.subHeader}
                        </p>
                      )}
                      <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-sm">
                        {pkg.inclusions.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </td>

                    {/* Best For */}
                    <td className="py-6 px-6 align-top border-r border-slate-200 text-sm text-slate-600 leading-relaxed">
                      {pkg.bestFor}
                    </td>

                    {/* Delivery Time */}
                    <td className="py-6 px-6 align-top border-r border-slate-200 text-center text-sm font-medium text-slate-800 whitespace-nowrap">
                      {pkg.deliveryTime}
                    </td>

                    {/* Starting Price */}
                    <td className="py-6 px-6 align-top text-center text-sm font-bold text-slate-900 whitespace-nowrap">
                      {pkg.startingPrice}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add-On Services Accordion */}
        <div className="border border-slate-300 rounded-lg overflow-hidden bg-slate-50 shadow-sm">
          <button
            type="button"
            onClick={() => setIsAddOnsOpen(!isAddOnsOpen)}
            aria-expanded={isAddOnsOpen}
            className="w-full bg-[#0d3b38] hover:bg-[#092a28] text-white px-6 py-3.5 flex items-center justify-between transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <span className="text-base sm:text-lg font-bold tracking-wide">
              Add-On Services
            </span>
            <span className="text-2xl font-bold select-none leading-none">
              {isAddOnsOpen ? "−" : "+"}
            </span>
          </button>

          {isAddOnsOpen && (
            <div className="p-6 sm:p-8 bg-slate-50">
              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-slate-700">
                {addOnServices.map((service, index) => (
                  <li key={index} className="leading-relaxed">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center pt-4">
          <GetFreeQuoteButton />
        </div>
      </div>
    </section>
  );
}